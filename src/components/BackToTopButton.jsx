import { useEffect, useState } from 'react'
import BackArrowIcon from './ui/BackArrowIcon.jsx'

// Fixed to the right edge of the viewport (independent of the sidebar/content
// column), it appears once the user scrolls far enough to reach `triggerId`
// (the Reflection section by default) and stays visible from there through the
// rest of the page — not just while that section happens to be on screen.
// On mobile (<640px, matching Tailwind's sm breakpoint) it's present the
// entire time instead of waiting for the trigger, since there's no sidebar
// nav there to get back to the top with otherwise.
const MOBILE_QUERY = '(max-width: 639px)'

export default function BackToTopButton({ triggerId = 'reflection' }) {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = () => setIsMobile(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const target = document.getElementById(triggerId)
    if (!target) return

    const onScroll = () => {
      setVisible(target.getBoundingClientRect().top <= 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [triggerId])

  const showButton = isMobile || visible

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-[72px] right-10 z-50 flex size-12 items-center justify-center rounded-full border border-[#ddd] bg-white text-black/50 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] transition-[opacity,color] duration-300 hover:text-black ${
        showButton ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <BackArrowIcon className="size-6" />
    </button>
  )
}
