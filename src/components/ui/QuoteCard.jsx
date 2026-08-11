// Figma nodes 1:195/1:196/1:197 (User Research "Interviews" column) — white card,
// 0.5px #ddd border, rounded-8, a 50x50 rounded avatar photo + quote, gap 14px,
// 20px card padding.
export default function QuoteCard({ avatar, alt = '', children }) {
  return (
    <div className="flex items-center gap-3.5 rounded-[8px] border-[0.5px] border-[#ddd] bg-white p-5">
      <img
        src={avatar}
        alt={alt}
        className="size-[50px] shrink-0 rounded-[8px] object-cover"
      />
      <p className="min-w-0 flex-1 font-body text-[16px] tracking-[0.1px] text-black">{children}</p>
    </div>
  )
}
