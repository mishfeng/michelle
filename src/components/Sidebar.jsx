import { useEffect, useState } from 'react'
import BackArrowIcon from './ui/BackArrowIcon.jsx'
import { SCALE, DESKTOP_BREAKPOINT } from '../scale.js'

// Figma nodes 1:2011 (back arrow) + 1:2015 (nav links) — shared across case study
// pages. Each page passes its own `links` (section labels, in on-page order) and an
// optional `getScrollTarget(id)` for links that need a landing spot other than
// "top of the section" (see PlanIT.jsx for an example).
export const toId = (label) => label.toLowerCase().replace(/\s+/g, '-')

export default function Sidebar({ links, getScrollTarget }) {
  const [activeId, setActiveId] = useState(toId(links[0]))
  // Gated to the same breakpoint as ScaleWrapper's scaled canvas (see scale.js) —
  // the sidebar's own transform: scale(SCALE) below only makes sense once the main
  // content is also rendering at that same 1.2x scale, otherwise the two would be
  // visually out of proportion with each other.
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BREAKPOINT
  )

  // Active link is set purely by click (not scroll position) — it turns black
  // immediately on click and stays black until a different link is clicked.
  const handleNavClick = (event, id) => {
    event.preventDefault()
    setActiveId(id)
    const customY = getScrollTarget ? getScrollTarget(id) : null
    if (customY != null) {
      window.scrollTo({ top: Math.max(0, customY), behavior: 'smooth' })
      return
    }
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`)
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  if (!isDesktop) return null

  return (
    <aside
      className="fixed left-0 top-0 z-50 flex w-[250px] flex-col pt-[98px] pl-[34px]"
      style={{ height: `${100 / SCALE}vh`, transform: `scale(${SCALE})`, transformOrigin: 'top left' }}
    >
      <a
        href="/"
        aria-label="Back"
        className="group mb-4 flex items-center gap-2 self-start text-black/50 transition-colors hover:text-black"
      >
        <BackArrowIcon className="size-6 shrink-0 -rotate-90" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-[16px] font-body tracking-[0.32px] opacity-0 transition-all duration-200 group-hover:max-w-[48px] group-hover:opacity-100">
          Back
        </span>
      </a>
      <nav className="flex flex-col items-start gap-3">
        {links.map((link) => {
          const id = toId(link)
          const isActive = id === activeId
          return (
            <a
              key={link}
              href={`#${id}`}
              onClick={(event) => handleNavClick(event, id)}
              className={`inline-block origin-left font-body text-[16px] leading-normal tracking-[0.32px] transition-[color,transform] duration-200 whitespace-nowrap hover:scale-110 ${
                isActive ? 'text-black' : 'text-black/50 hover:text-black'
              }`}
            >
              {link}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
