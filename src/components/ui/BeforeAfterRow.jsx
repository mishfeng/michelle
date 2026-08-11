// Figma nodes 1:1362-1364 / 1:1511-1513 / 1:1798-1800 — repeated 3-up
// "Original design | Redesign iteration | Redesign" phone comparison row.
// Row is 775px wide (matches card inner width), 3 columns with ~16-17px gaps,
// each phone image left as its native aspect ratio. A dotted connector line
// (Figma nodes 1:1451/1:1452, 1:1608/1:1609, 1:1918/1:1919 — #5c5c5c dot-line-dot)
// sits below the images, with the caption centered under each column below that.
// The "Redesign" caption is bold teal (#2e9d8c); the other two are regular gray (#5c5c5c).
export default function BeforeAfterRow({ original, iteration, redesign }) {
  const columns = [
    { label: 'Original design', emphasis: false, ...original },
    { label: 'Redesign iteration', emphasis: false, ...iteration },
    { label: 'Redesign', emphasis: true, ...redesign },
  ]

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-between">
        {columns.map(({ label, src, alt, width, height }) => (
          <img
            key={label}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full min-w-0 max-w-[220px] rounded-[8px] sm:max-w-full sm:flex-1"
          />
        ))}
      </div>

      <div className="mt-6 flex w-[calc(100%-2px)] items-center">
        <span className="size-[6px] shrink-0 rounded-full bg-[#5c5c5c]" />
        <span className="h-px flex-1 bg-[#5c5c5c]" />
        <span className="size-[6px] shrink-0 rounded-full bg-[#5c5c5c]" />
        <span className="h-px flex-1 bg-[#5c5c5c]" />
        <span className="size-[6px] shrink-0 rounded-full bg-[#5c5c5c]" />
      </div>

      <div className="mt-6 flex w-full items-start justify-between gap-4">
        {columns.map(({ label, emphasis }) => (
          <p
            key={label}
            className={`flex-1 text-center font-body text-[16px] tracking-[0.32px] ${
              emphasis ? 'font-bold text-[#2e9d8c]' : 'text-[#5c5c5c]'
            }`}
          >
            {label}
          </p>
        ))}
      </div>
    </div>
  )
}
