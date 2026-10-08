import { useState } from 'react'

// Left list of writing entries + right reading pane, click a title to swap
// which piece shows on the right (same click-to-swap interaction as
// SolutionPreview/ResearchSection elsewhere on the site). Starts at a fixed
// height at sm+ so this never grows unbounded as entries are added, but
// `resize-y` lets the user drag the bottom-right corner to open it up taller
// — native CSS resize, no extra JS needed. Each side scrolls independently
// inside whatever height is currently set, with a gradient fade (matching
// the box's own #f8f8f8 fill) masking the scroll cutoff at the bottom rather
// than a hard clip. Below sm the fixed height/resize/scroll is dropped
// entirely in favor of natural stacked page flow, same responsive pattern as
// PhilosophyCard.
export default function WritingSection({ entries, className = '' }) {
  const [activeId, setActiveId] = useState(entries[0]?.id)
  const active = entries.find((entry) => entry.id === activeId) ?? entries[0]

  return (
    <div
      className={`flex flex-col gap-6 sm:h-[321px] sm:min-h-[171px] sm:flex-row sm:gap-0 sm:resize-y sm:overflow-auto sm:rounded-[8px] sm:border-[0.5px] sm:border-[#ddd] sm:bg-[#f8f8f8] ${className}`}
    >
      <div className="relative sm:w-[220px] sm:shrink-0 sm:border-b-0 sm:border-r-[0.5px] sm:border-[#ddd]">
        <div className="flex flex-col gap-2 sm:h-full sm:overflow-y-auto sm:p-4">
          {entries.map((entry) => {
            const isActive = entry.id === active.id
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => setActiveId(entry.id)}
                aria-pressed={isActive}
                className="flex shrink-0 flex-col gap-1 rounded-[8px] px-4 py-3 text-left transition-colors hover:bg-[#eeeeee] sm:px-3 sm:py-2"
              >
                <p
                  className={`font-body text-[16px] leading-normal tracking-[0.1px] text-black ${
                    isActive ? 'font-bold' : 'font-normal'
                  }`}
                >
                  {entry.title}
                </p>
                <p className="font-body text-[13px] leading-normal tracking-[0.1px] text-black/50">
                  {entry.date} · {entry.wordCount} words
                </p>
              </button>
            )
          })}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-10 bg-gradient-to-t from-[#f8f8f8] to-transparent sm:block" />
      </div>

      <div className="relative min-w-0 flex-1">
        <div className="sm:h-full sm:overflow-y-auto sm:p-6">
          <p className="font-body text-[16px] font-semibold leading-normal tracking-[0.1px] text-black">
            {active.title}
          </p>
          <div className="mt-4 flex flex-col gap-4 font-body text-[16px] leading-normal tracking-[0.1px] text-black">
            {active.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-10 bg-gradient-to-t from-[#f8f8f8] to-transparent sm:block" />
      </div>
    </div>
  )
}
