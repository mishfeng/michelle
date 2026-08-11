// Figma node 1:219 etc ("Yellow") — small research-insight card used inside the Synthesis
// affinity clusters. Despite the Figma layer name "Yellow" (a leftover from an earlier
// yellow-sticky-note pass), the current fill is the accent teal at 25% opacity, bold
// "Insight" label + regular body text, ~13px, rounded corners.
export default function StickyNote({ label = 'Insight', children, className = '' }) {
  return (
    <div className={`rounded-[8px] bg-[#2e9d8c]/25 p-3.5 ${className}`}>
      <p className="font-body text-[13px] font-bold leading-normal text-[#212121]">{label}</p>
      <p className="font-body text-[13px] leading-normal text-[#212121]">{children}</p>
    </div>
  )
}
