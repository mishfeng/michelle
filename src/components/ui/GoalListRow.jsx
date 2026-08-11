// Figma nodes 1:138/1:146/1:154 (Literature Review Goals) and 1:142/1:150/1:158 (User
// Research Goals) — 24x24 mynaui numbered icon + 16px Figtree text, tracking 0.1px,
// line-height 32px, gap 8px between icon and text.
export default function GoalListRow({ icon, children }) {
  return (
    <div className="flex items-start gap-2">
      <img src={icon} alt="" className="size-6 shrink-0" />
      <p className="min-w-0 flex-1 font-body text-[16px] leading-[32px] tracking-[0.1px] text-black">
        {children}
      </p>
    </div>
  )
}
