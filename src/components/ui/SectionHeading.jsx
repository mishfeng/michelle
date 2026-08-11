// Figma node 1:104 / 1:280-282 / 1:762-764 — SF Pro Bold 20px + Figtree 16px subtitle
export default function SectionHeading({ children, subtitle, className = '', id }) {
  return (
    <div id={id} className={`flex flex-col items-start gap-2 ${className}`}>
      <p className="font-heading text-[20px] font-bold leading-[20px] tracking-[0.1px] text-black">
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
