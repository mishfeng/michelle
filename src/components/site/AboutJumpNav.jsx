import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { SCALE, DESKTOP_BREAKPOINT } from '../../scale.js'

// Figma node 309:373 ("Experience / Philosophy / Side quests" left rail) — a
// plain vertical stack of labels at 50% opacity, gap-[12px], no bullets or
// connecting lines. Sits beside the intro photo/bio row and pins in place
// while the page scrolls.
//
// CSS `position: sticky` does NOT work here: ScaleWrapper (shared with
// Home/Play/PlanIT/CapitalOne, so it can't be touched from here) renders the
// whole page inside a `transform: scale(SCALE)` ancestor once the viewport
// passes DESKTOP_BREAKPOINT, and a transformed ancestor breaks sticky in
// every browser tested — confirmed by measuring the nav's screen position
// while scrolling: it just scrolled off with the page instead of pinning.
// This reimplements "stick at STICKY_TOP" manually: keep an in-flow
// placeholder for layout spacing, and once its natural position would go
// above STICKY_TOP, render a `position: fixed` clone through a portal
// straight into <body> (escaping the transformed ancestor, where `fixed`
// actually means fixed-to-viewport again), scaled/positioned to sit exactly
// where the in-flow copy would have been.
const SCROLL_OFFSET = 64
const STICKY_TOP = 100
const MIN_WIDTH_FOR_PIN = 640 // matches the site's existing `sm:` sticky convention (see PlayTagList)

export default function AboutJumpNav({ items }) {
  const placeholderRef = useRef(null)
  const [pin, setPin] = useState(null)
  const [activeId, setActiveId] = useState(items[0]?.targetId ?? null)

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
    event.preventDefault()
    setActiveId(targetId)
    const target = document.getElementById(targetId)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }

  // Scroll-spy, same "latest section to enter the top band wins" approach as
  // the case study Sidebar — whichever section is nearest the top of the
  // viewport gets the bold/black nav state.
  useEffect(() => {
    const ids = items.map((item) => item.targetId)
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const visibleRatios = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        let latestVisibleId = null
        for (const id of ids) {
          if ((visibleRatios.get(id) ?? 0) > 0) {
            latestVisibleId = id
          }
        }
        if (latestVisibleId) setActiveId(latestVisibleId)
      },
      { rootMargin: '0px 0px -75% 0px', threshold: [0, 1] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  const links = items.map((item) => (
    <a
      key={item.targetId}
      href={`#${item.targetId}`}
      onClick={(event) => handleClick(event, item.targetId)}
      className={`cursor-pointer font-body text-[16px] leading-normal tracking-[0.32px] transition-colors ${
        item.targetId === activeId ? 'font-medium text-black' : 'text-black/50 hover:text-black'
      }`}
    >
      {item.label}
    </a>
  ))

  return (
    <div
      ref={placeholderRef}
      className="hidden sm:block"
      style={{ width: 129, visibility: pin ? 'hidden' : 'visible' }}
    >
      <nav className="flex w-[129px] shrink-0 flex-col gap-[12px]">{links}</nav>
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
            <nav className="flex w-[129px] shrink-0 flex-col gap-[12px]">{links}</nav>
          </div>,
          document.body
        )}
    </div>
  )
}
