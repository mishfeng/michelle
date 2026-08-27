// Figma node 1:104 / 1:280-282 / 1:762-764 — Figtree SemiBold 24px + Figtree 16px subtitle.
// `accent` (nodes 475:8394/8395/8396/6564/8210 — "problem"/"solution"/"research"/
// "before → after"/"context") swaps in the lowercase Domine Bold 32px #1b6d99
// treatment used for this case study's top-level nav-anchor headings; those never
// carry a subtitle in the current design, so subtitle is ignored when accent is set.
export default function SectionHeading({ children, subtitle, className = '', id, accent = false }) {
  if (accent) {
    return (
      <div id={id} className={`flex flex-col items-start gap-2 ${className}`}>
        <p className="font-display text-[32px] font-bold tracking-[0.64px] text-[#1b6d99]">{children}</p>
        {subtitle && (
          <p className="font-body text-[16px] leading-normal tracking-[0.32px] text-black">{subtitle}</p>
        )}
      </div>
    )
  }

  return (
    <div id={id} className={`flex flex-col items-start gap-2 ${className}`}>
      <p className="font-heading text-[20px] font-semibold leading-[20px] tracking-[0.1px] text-black">
        {children}
      </p>
      {subtitle && (
        <p className="font-body text-[16px] leading-normal tracking-[0.32px] text-black">
          {subtitle}
        </p>
      )}
    </div>
  )
}
