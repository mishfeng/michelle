import { useState } from 'react'
import hostmodeOverview from '../../assets/planit/hostmode-overview.png'
import hostmodeItinerary from '../../assets/planit/hostmode-itinerary.png'
import friendmodeOverview from '../../assets/planit/friendmode-overview.png'
import friendmodeItinerary from '../../assets/planit/friendmode-itinerary.png'

const OPTIONS = [
  {
    label: 'Host mode | Overview',
    description:
      'Quick overview of all friends’ activity and call to action (CTA) buttons guiding host’s next steps',
    image: hostmodeOverview,
    alt: 'Host mode, Overview tab',
  },
  {
    label: 'Host mode | Itinerary',
    description:
      'Able to update itinerary by “approving” or “declining” friends’ suggestions & seeing popular suggestions',
    image: hostmodeItinerary,
    alt: 'Host mode, Itinerary tab',
  },
  {
    label: 'Friend mode | Overview',
    description:
      'Primary CTA to guide next steps like voting on a date followed by secondary CTA to contribute to itinerary',
    image: friendmodeOverview,
    alt: 'Friend mode, Overview tab',
  },
  {
    label: 'Friend mode | Itinerary',
    description:
      'Fostering transparent communication through real time editing and reactions to itinerary items',
    image: friendmodeItinerary,
    alt: 'Friend mode, Itinerary tab',
  },
]

// Mirrors the Figma prototype interaction (node 1:126-1:129 + 1:746-1:757): clicking a
// caption row swaps the phone screen on the right to match, and only the active row
// keeps the teal border.
export default function SolutionPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = OPTIONS[activeIndex]

  return (
    <div className="mt-6 flex flex-col items-center gap-8 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex w-full flex-col gap-[21px] xl:w-[469px] xl:shrink-0">
        {OPTIONS.map((option, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={option.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`flex min-h-[133px] flex-col justify-center rounded-[8px] bg-[#f8f8f8] px-6 py-4 text-left transition-colors hover:bg-[#eeeeee] xl:py-0 ${
                isActive ? 'border border-[#2e9d8c]' : 'border border-transparent'
              }`}
            >
              <p className="font-body text-[16px] leading-normal tracking-[0.32px] text-black opacity-50">
                {option.label}
              </p>
              <p className="font-body text-[16px] leading-normal tracking-[0.32px] text-black">
                {option.description}
              </p>
            </button>
          )
        })}
      </div>
      <img src={active.image} alt={active.alt} className="h-auto w-[220px] shrink-0 xl:w-[313px]" />
    </div>
  )
}
