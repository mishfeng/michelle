import { useEffect, useRef, useState } from 'react'
import hostmodeOverview from '../../assets/planit/hero-host-invite-1.png'
import hostmodeItinerary from '../../assets/planit/planit2.png'
import friendmodeOverview from '../../assets/planit/friendmode-overview.png'
import friendmodeItinerary from '../../assets/planit/friendmode-itinerary.png'

const OPTIONS = [
  {
    label: 'Host mode | Overview',
    description: [
      { text: 'Quick overview of all friends’ activity and call to action (CTA) buttons ' },
      { text: 'guiding host’s', bold: true },
      { text: ' next steps' },
    ],
    image: hostmodeOverview,
    alt: 'Host mode, Overview tab',
    accent: 'blue',
  },
  {
    label: 'Host mode | Itinerary',
    description: [
      { text: 'Able to update itinerary by ' },
      { text: '“approving”', bold: true },
      { text: ' or “declining” friends’ suggestions & viewing popular suggestions' },
    ],
    image: hostmodeItinerary,
    alt: 'Host mode, Itinerary tab',
    accent: 'blue',
  },
  {
    label: 'Friend mode | Overview',
    description: [
      { text: 'CTA to ' },
      { text: 'guide next steps', bold: true },
      { text: ' like voting on a date followed by CTA to contribute to itinerary' },
    ],
    image: friendmodeOverview,
    alt: 'Friend mode, Overview tab',
    accent: 'teal',
  },
  {
    label: 'Friend mode | Itinerary',
    description: [
      { text: 'Transparent communication through ' },
      { text: 'real time', bold: true },
      { text: ' editing and ' },
      { text: 'reactions', bold: true },
      { text: ' to itinerary items' },
    ],
    image: friendmodeItinerary,
    alt: 'Friend mode, Itinerary tab',
    accent: 'teal',
  },
]

const ACCENT_BG = { blue: 'bg-[#1b6d99]', teal: 'bg-[#2e9d8c]' }

// Mirrors the Figma prototype interaction (node 475:8411-475:8420 caption rows +
// 475:8452 phone mockup): clicking a caption row swaps the phone screen on the right
// to match. The active row fills with its mode's accent color — blue (#1b6d99) for
// the two Host mode rows, teal (#2e9d8c) for the two Friend mode rows, matching the
// same host/friend color convention used by the phone screenshots themselves and the
// Design Decisions "Host mode"/"Friend mode" labels — with white text; inactive rows
// stay on the light card background with black text.
// Nudges the second row (index 1) once, 2s after this section first scrolls into
// view — a small attention cue toward the click-to-swap interaction, since it's
// not otherwise obvious the rows are clickable.
const NUDGE_INDEX = 1
const NUDGE_DELAY_MS = 2000

export default function SolutionPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [nudging, setNudging] = useState(false)
  const containerRef = useRef(null)
  const active = OPTIONS[activeIndex]

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let nudgeTimer
    let resetTimer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        nudgeTimer = setTimeout(() => {
          setNudging(true)
          resetTimer = setTimeout(() => setNudging(false), 700)
        }, NUDGE_DELAY_MS)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(nudgeTimer)
      clearTimeout(resetTimer)
    }
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col-reverse items-center gap-8 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex w-full flex-col gap-4 xl:w-[469px] xl:shrink-0">
        {OPTIONS.map((option, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={option.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`flex flex-col gap-1 rounded-[8px] px-6 py-7 text-left transition-colors ${
                isActive
                  ? `${ACCENT_BG[option.accent]} text-white`
                  : 'border border-[#ddd] bg-[#f8f8f8] text-black hover:bg-[#eeeeee]'
              } ${nudging && index === NUDGE_INDEX ? 'nudge-once' : ''}`}
            >
              <p className="font-body text-[12px] leading-normal tracking-[0.24px] opacity-50">
                {option.label}
              </p>
              <p className="font-body text-[16px] leading-normal tracking-[0.32px]">
                {option.description.map((segment, i) => (
                  <span key={i} className={segment.bold ? 'font-bold' : undefined}>
                    {segment.text}
                  </span>
                ))}
              </p>
            </button>
          )
        })}
      </div>
      <img
        src={active.image}
        alt={active.alt}
        className={`aspect-[643/1371] w-[220px] shrink-0 border-[#393939] object-cover object-top xl:w-[313px] ${
          activeIndex === 0
            ? 'rounded-[32px] border-[8px] xl:rounded-[44px] xl:border-[12px]'
            : 'rounded-[24px] border-[7px] xl:rounded-[32px] xl:border-[10px]'
        }`}
      />
    </div>
  )
}
