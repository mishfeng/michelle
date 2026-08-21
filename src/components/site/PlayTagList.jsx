import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { SCALE, DESKTOP_BREAKPOINT } from '../../scale.js'

// Figma's tag list (317:546) is a plain stacked text list — no dots — each
// row 31px apart. Same pin-while-scrolling behavior as AboutJumpNav (About
// page's left rail): `position: sticky` doesn't survive ScaleWrapper's
// `transform: scale(SCALE)` ancestor, so this keeps an in-flow placeholder
// for layout spacing and, once its natural position would scroll above
// STICKY_TOP, renders a `position: fixed` clone through a portal into
// <body> (escaping the transformed ancestor), scaled/positioned to match —
// so the list stays visible the whole time the user scrolls the page.
const STICKY_TOP = 100
const SCROLL_OFFSET = 64
const MIN_WIDTH_FOR_PIN = 640 // matches AboutJumpNav's own `sm:` convention

export default function PlayTagList({ tags }) {
  const placeholderRef = useRef(null)
  const [pin, setPin] = useState(null)

  useEffect(() => {
    let frame = null

    const measure = () => {
      frame = null
      const el = placeholderRef.current
      if (!el) return

      if (window.innerWidth < MIN_WIDTH_FOR_PIN) {
        setPin(null)
        return
      }

      const scale = window.innerWidth >= DESKTOP_BREAKPOINT ? SCALE : 1
      const rect = el.getBoundingClientRect()

      setPin((prev) => {
        if (rect.top > STICKY_TOP) return prev ? null : prev
        if (prev && Math.abs(prev.left - rect.left) < 0.5 && prev.scale === scale) return prev
        return { left: rect.left, scale }
      })
    }

    const onScrollOrResize = () => {
      if (frame) return
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  const handleClick = (event, targetId) => {
    if (!targetId) return
    event.preventDefault()
    const target = document.getElementById(targetId)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }

  const links = tags.map((tag) => (
    <a
      key={tag.label}
      href={tag.targetId ? `#${tag.targetId}` : undefined}
      onClick={(event) => handleClick(event, tag.targetId)}
      className={`font-body text-[16px] leading-normal tracking-[0.32px] text-black/50 transition-colors ${
        tag.targetId ? 'cursor-pointer hover:text-black' : 'cursor-default'
      }`}
    >
      {tag.label}
    </a>
  ))

  return (
    <div ref={placeholderRef} style={{ width: 154, visibility: pin ? 'hidden' : 'visible' }}>
      <nav className="flex w-[154px] shrink-0 flex-col gap-[7px]">{links}</nav>
      {pin &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              top: STICKY_TOP,
              left: pin.left,
              transform: `scale(${pin.scale})`,
              transformOrigin: 'top left',
            }}
          >
            <nav className="flex w-[154px] shrink-0 flex-col gap-[7px]">{links}</nav>
          </div>,
          document.body,
        )}
    </div>
  )
}
