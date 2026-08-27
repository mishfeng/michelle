import { useEffect, useState } from 'react'
import BackArrowIcon from './ui/BackArrowIcon.jsx'

// Fixed to the right edge of the viewport (independent of the sidebar/content
// column), it appears once the user scrolls far enough to reach `triggerId`
// (the Reflection section by default) and stays visible from there through the
// rest of the page — not just while that section happens to be on screen.
export default function BackToTopButton({ triggerId = 'reflection' }) {
  const [visible, setVisible] = useState(false)

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

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-10 right-10 z-50 flex size-12 items-center justify-center rounded-full border border-[#ddd] bg-white text-black/50 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] transition-[opacity,color] duration-300 hover:text-black ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <BackArrowIcon className="size-6" />
    </button>
  )
}
