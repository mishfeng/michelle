import { useEffect, useRef, useState } from 'react'

// Splits text into per-letter spans so it can stagger in, approximating being
// "written out" rather than just appearing all at once. Shared by Home's
// "michelle feng", PageHeader's title (Studio's "open studio", About's "about
// me") — all of which run the animation once on mount — and SiteFooter's
// "michelle feng", which instead waits for the footer to actually scroll into
// view (startOnVisible) since it's off-screen at load. Letters are grouped
// per word in a nowrap span — each letter being its own inline-block box
// otherwise gives the browser a break opportunity at every single letter, not
// just at the real spaces, which was wrapping mid-word on narrow viewports
// ("michelle fe" / "ng").
export default function WriteInHeading({ text, className, as: Tag = 'h1', startOnVisible = false }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(!startOnVisible)

  useEffect(() => {
    if (!startOnVisible || started) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startOnVisible, started])

  let globalIndex = 0
  const words = text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap">
      {Array.from(word).map((char, charIndex) => {
        const delay = globalIndex * 45
        globalIndex += 1
        return (
          <span
            key={charIndex}
            aria-hidden="true"
            className={started ? 'inline-block animate-[write-in_0.55s_ease-out_both]' : 'inline-block opacity-0'}
            style={started ? { animationDelay: `${delay}ms` } : undefined}
          >
            {char}
          </span>
        )
      })}
    </span>
  ))

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.reduce((nodes, word, i) => (i === 0 ? [word] : [...nodes, ' ', word]), [])}
    </Tag>
  )
}
