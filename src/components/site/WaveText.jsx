import { useRef } from 'react'

const AMPLITUDE = 7 // px lift at the peak of the wave, right under the cursor
const SPREAD = 42 // px falloff radius around the cursor

// Ripples the letters of an accent word upward as the cursor passes over them,
// following the cursor's horizontal position in real time rather than playing a
// fixed loop — each letter's lift is a Gaussian falloff of its own distance from
// the cursor, recomputed on every mousemove. Words are wrapped nowrap (same
// reasoning as WriteInHeading) so a line break can't land mid-word.
export default function WaveText({ className, children }) {
  const lettersRef = useRef([])

  const handleMouseMove = (event) => {
    for (const el of lettersRef.current) {
      if (!el) continue
      const rect = el.getBoundingClientRect()
      const distance = event.clientX - (rect.left + rect.width / 2)
      const lift = AMPLITUDE * Math.exp(-(distance * distance) / (2 * SPREAD * SPREAD))
      el.style.transform = `translateY(${-lift}px)`
    }
  }

  const handleMouseLeave = () => {
    for (const el of lettersRef.current) {
      if (el) el.style.transform = 'translateY(0px)'
    }
  }

  let globalIndex = 0
  const text = typeof children === 'string' ? children : ''
  const words = text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap">
      {Array.from(word).map((char, charIndex) => {
        const i = globalIndex
        globalIndex += 1
        return (
          <span
            key={charIndex}
            ref={(el) => {
              lettersRef.current[i] = el
            }}
            className="inline-block transition-transform duration-150 ease-out"
          >
            {char}
          </span>
        )
      })}
    </span>
  ))

  return (
    <span className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {words.reduce((nodes, word, i) => (i === 0 ? [word] : [...nodes, ' ', word]), [])}
    </span>
  )
}
