// Figma node 1:106 (Role/Duration/Tools/Team) and 1:98/1:210 (Context/Takeaway on teal) —
// label at 50% opacity, value at full opacity, 4px gap, Figtree 16px tracking 0.32px
export default function LabelValue({ label, children, light = false, className = '', valueClassName = 'text-[16px]' }) {
  const color = light ? 'text-white' : 'text-black'
  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      <p className={`font-body text-[16px] leading-normal tracking-[0.32px] opacity-50 ${color}`}>
        {label}
      </p>
      <div className={`font-body leading-normal tracking-[0.32px] ${valueClassName} ${color}`}>
        {children}
      </div>
    </div>
  )
}
