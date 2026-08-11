// Figma node 1:80 / 1:96 / 1:92 — bg #f8f8f8, border #ddd, rounded-full pill
export default function Pill({ icon, children, className = '', hoverable = true, ...rest }) {
  return (
    <div
      className={`inline-flex items-center gap-[10px] rounded-[100px] border border-[#ddd] bg-[#f8f8f8] px-5 py-2 transition-colors ${
        hoverable ? 'hover:bg-[#e8e8e8]' : ''
      } ${className}`}
      {...rest}
    >
      {icon && <img src={icon} alt="" className="size-4 shrink-0" />}
      <p className="font-body text-[16px] leading-5 tracking-[0.1px] text-black whitespace-nowrap">
        {children}
      </p>
    </div>
  )
}
