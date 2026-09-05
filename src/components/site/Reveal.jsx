import { useEffect, useRef, useState } from 'react'

// Generic scroll-triggered fade-in used across every page: an element fades/
// slides into place every time it scrolls into view, and fades back out when
// it leaves — re-triggering on every pass, not just the first.
export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
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
