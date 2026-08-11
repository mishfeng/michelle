// Figma nodes 1:170/1:176 (User Research "Surveys" column) — a 72x72 teal square
// (#2e9d8c) with a bold white percentage centered inside it, next to a 16px Figtree
// body line, gap 16px.
export default function PercentStat({ percent, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex size-[72px] shrink-0 items-center justify-center rounded-[8px] bg-[#2e9d8c]">
        <span className="font-body text-[16px] font-bold text-white">{percent}</span>
      </div>
      <p className="min-w-0 flex-1 font-body text-[16px] tracking-[0.1px] text-black">{children}</p>
    </div>
  )
}
