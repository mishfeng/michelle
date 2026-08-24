import { useEffect, useState } from 'react'
import BackArrowIcon from './ui/BackArrowIcon.jsx'
import { SCALE, DESKTOP_BREAKPOINT, SIDEBAR_BREAKPOINT } from '../scale.js'

// Figma nodes 1:2011 (back arrow) + 1:2015 (nav links) — shared across case study
// pages. Each page passes its own `links` (section labels, in on-page order) and an
// optional `getScrollTarget(id)` for links that need a landing spot other than
// "top of the section" (see PlanIT.jsx for an example).
export const toId = (label) => label.toLowerCase().replace(/\s+/g, '-')

export default function Sidebar({ links, getScrollTarget }) {
  const [activeId, setActiveId] = useState(toId(links[0]))
  // Visible once the page is wide enough for the sidebar rail to make sense at
  // all (SIDEBAR_BREAKPOINT, matching the content's own `xl:` breakpoint). It only
  // additionally picks up the 1.2x transform once ScaleWrapper starts scaling the
  // rest of the page too (DESKTOP_BREAKPOINT) — otherwise the two would be visually
  // out of proportion with each other.
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= SIDEBAR_BREAKPOINT
  )
  const [isScaled, setIsScaled] = useState(
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
    const visibleMq = window.matchMedia(`(min-width: ${SIDEBAR_BREAKPOINT}px)`)
    const scaledMq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`)
    const updateVisible = () => setIsVisible(visibleMq.matches)
    const updateScaled = () => setIsScaled(scaledMq.matches)
    updateVisible()
    updateScaled()
    visibleMq.addEventListener('change', updateVisible)
    scaledMq.addEventListener('change', updateScaled)
    return () => {
      visibleMq.removeEventListener('change', updateVisible)
      scaledMq.removeEventListener('change', updateScaled)
    }
  }, [])

  if (!isVisible) return null

  return (
    <aside
      className="pointer-events-none fixed left-0 top-0 z-50 flex w-[250px] flex-col pt-[98px] pl-[34px]"
      style={
        isScaled
          ? { height: `${100 / SCALE}vh`, transform: `scale(${SCALE})`, transformOrigin: 'top left' }
          : { height: '100vh' }
      }
    >
      {/* The aside's own box spans the full viewport height so the rail can stay
          fixed while scrolling, but its content only occupies the top of it — left
          as pointer-events:auto by default, that full-height box silently ate clicks
          on anything else in the left 250px column further down the page, including
          the footer's name/nav links. pointer-events-none above + auto here scopes
          click-catching back to just the visible links. */}
      <a
        href="/"
        aria-label="Back"
        className="group pointer-events-auto mb-4 flex items-center gap-2 self-start text-black/50 transition-colors hover:text-black"
      >
        <BackArrowIcon className="size-6 shrink-0 -rotate-90" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-[16px] font-body tracking-[0.32px] opacity-0 transition-all duration-200 group-hover:max-w-[48px] group-hover:opacity-100">
          Back
        </span>
      </a>
      <nav className="pointer-events-auto flex flex-col items-start gap-3">
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
