// Figma nodes 1:167/1:173/1:179 (Literature Review "Findings" column) — a small square
// photo (56x56, rounded-8) next to a 16px Figtree body line, gap 16px.
export default function InsightRow({ image, alt = '', children }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={alt}
        className="size-14 shrink-0 rounded-[8px] object-cover"
      />
      <p className="min-w-0 flex-1 font-body text-[16px] tracking-[0.1px] text-black">{children}</p>
    </div>
  )
}
