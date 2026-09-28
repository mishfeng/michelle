import { useEffect, useRef, useState } from 'react'

// Generic scroll-triggered fade-in used across every page: an element fades/
// slides into place every time it scrolls into view, and fades back out when
// it leaves — re-triggering on every pass, not just the first.
//
// threshold is 0 (any overlap at all), not a fraction like 0.1 — a
// ratio-based threshold is measured against the element's own area, so for
// anything taller than ~10x the viewport (several sections on this site wrap
// content that tall) the intersection ratio can never climb high enough to
// cross 0.1 at all, leaving it permanently invisible, and for elements just
// above that size the ratio can hover right at the boundary and flicker in
// and out on every small scroll delta. threshold 0 fires purely on
// entering/leaving the rootMargin-adjusted box regardless of the element's
// height, so state changes exactly once per real enter/exit — smooth, and
// immune to size.
export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-[900ms] ease-out will-change-[opacity,transform] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
