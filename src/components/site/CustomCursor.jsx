import { useEffect, useRef } from 'react'

const DOT_SIZE = 20
const DOT_SIZE_HOVER = 44
const DOT_COLOR = '#7a5138'
const DOT_COLOR_HOVER = '#cba881'
const CASE_STUDY_SELECTOR = '[data-cursor="case-study"]'

// Medium brown dot that follows the pointer, replacing the native cursor
// site-wide (see the `cursor: none` rule in index.css). Grows into a bigger,
// lighter-brown version of itself whenever the pointer is over an element
// flagged with data-cursor="case-study" (the Home page project cards).
// Mounted once per page from each main-*.jsx entry, so it's present on every
// route.
export default function CustomCursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return // touch devices: no pointer to follow

    const dot = dotRef.current

    const move = (event) => {
      const isOverCaseStudy = Boolean(event.target.closest?.(CASE_STUDY_SELECTOR))
      const size = isOverCaseStudy ? DOT_SIZE_HOVER : DOT_SIZE
      dot.style.opacity = '1'
      dot.style.width = `${size}px`
      dot.style.height = `${size}px`
      dot.style.background = isOverCaseStudy ? DOT_COLOR_HOVER : DOT_COLOR
      dot.style.transform = `translate(${event.clientX - size / 2}px, ${event.clientY - size / 2}px)`
    }
    const hide = () => {
      dot.style.opacity = '0'
    }

    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      id="custom-cursor"
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full opacity-0 transition-[width,height,background-color,opacity] duration-150"
      style={{ width: DOT_SIZE, height: DOT_SIZE, background: DOT_COLOR }}
    />
  )
}
