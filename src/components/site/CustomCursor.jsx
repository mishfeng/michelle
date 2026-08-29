import { useEffect, useRef } from 'react'

const DOT_SIZE = 20
const CASE_STUDY_SELECTOR = '[data-cursor="case-study"]'

// Medium brown dot that follows the pointer, replacing the native cursor
// site-wide (see the `cursor: none` rule in index.css). Swaps to a "view case
// study" pill (same brown, eye icon + label) whenever the pointer is over an
// element flagged with data-cursor="case-study" (the Home page project
// cards). Mounted once per page from each main-*.jsx entry, so it's present
// on every route.
export default function CustomCursor() {
  const dotRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return // touch devices: no pointer to follow

    const dot = dotRef.current
    const label = labelRef.current

    const move = (event) => {
      const isOverCaseStudy = Boolean(event.target.closest?.(CASE_STUDY_SELECTOR))
      dot.style.opacity = isOverCaseStudy ? '0' : '1'
      label.style.opacity = isOverCaseStudy ? '1' : '0'

      dot.style.transform = `translate(${event.clientX - DOT_SIZE / 2}px, ${event.clientY - DOT_SIZE / 2}px)`
      label.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`
    }
    const hide = () => {
      dot.style.opacity = '0'
      label.style.opacity = '0'
    }

    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full opacity-0 transition-opacity duration-150"
        style={{ width: DOT_SIZE, height: DOT_SIZE, background: '#7a5138' }}
      />
      <div
        ref={labelRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center gap-1.5 whitespace-nowrap rounded-[100px] bg-[#7a5138] px-4 py-2 opacity-0 transition-opacity duration-150"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#f7f4f2" strokeWidth="1.6" className="size-4 shrink-0">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span className="font-body text-[14px] leading-none text-[#f7f4f2]">view case study</span>
      </div>
    </>
  )
}
