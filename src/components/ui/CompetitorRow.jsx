// Figma nodes 1:187-1:194 (Competitive Analysis) — a competitor logo/screenshot on the
// left in a fixed-width column, and a 4-line numbered takeaway list on the right.
// Each line is Figtree 16px, tracking 0.32px; individual lines are bolded in the
// source file to call out the differentiator for that competitor.
export default function CompetitorRow({ logo, logoAlt, logoWidth, logoHeight, points }) {
  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
      <div className="flex h-[74px] w-[160px] shrink-0 items-center sm:w-[200px]">
        <img
          src={logo}
          alt={logoAlt}
          style={{ width: logoWidth, height: logoHeight }}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {points.map((point, i) => (
          <p
            key={i}
            className={`font-body text-[16px] tracking-[0.32px] text-black ${point.bold ? 'font-bold' : ''}`}
          >
            {i + 1}&nbsp;&nbsp;{point.text}
          </p>
        ))}
      </div>
    </div>
  )
}
