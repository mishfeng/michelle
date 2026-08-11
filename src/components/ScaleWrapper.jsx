import { useEffect, useRef, useState } from 'react'
import { SCALE, DESIGN_WIDTH, DESKTOP_BREAKPOINT } from '../scale.js'

// Renders children at a fixed DESIGN_WIDTH canvas, then uniformly scales the whole
// rendered result by SCALE via CSS transform. This guarantees every spacing value,
// font size, image, and the fixed sidebar scale together in exact proportion,
// instead of hand-multiplying every pixel value across every section file.
//
// Below DESKTOP_BREAKPOINT the fixed-width canvas + transform is dropped entirely —
// at phone/tablet sizes the 1500px design canvas doesn't fit, and shrinking it down
// via transform would shrink type past the point of being readable. Instead children
// render at their natural fluid width, and each section supplies its own responsive
// (non-`xl:`) classes for that range.
//
// `center` defaults off because PlanIT/CapitalOne pin a fixed Sidebar at the real
// viewport's left:0 — centering the canvas there would open a gap between the
// sidebar and the content column on very wide screens. Home/About have no sidebar,
// so they pass `center` to keep equal left/right margins past DESKTOP_BREAKPOINT
// instead of the canvas hugging the left edge.
export default function ScaleWrapper({ children, center = false }) {
  const innerRef = useRef(null)
  const [scaledHeight, setScaledHeight] = useState(0)
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BREAKPOINT
  )

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`)
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isDesktop) return
    const el = innerRef.current
    if (!el) return
    const update = () => setScaledHeight(el.scrollHeight * SCALE)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [isDesktop])

  if (!isDesktop) return <>{children}</>

  return (
    <div style={{ width: DESIGN_WIDTH * SCALE, height: scaledHeight || undefined, margin: center ? '0 auto' : undefined }}>
      <div
        ref={innerRef}
        style={{ width: DESIGN_WIDTH, transform: `scale(${SCALE})`, transformOrigin: 'top left' }}
      >
        {children}
      </div>
    </div>
  )
}
