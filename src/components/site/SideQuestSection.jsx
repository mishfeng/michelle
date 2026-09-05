// Figma pattern repeated for each Side Quests entry (e.g. nodes 309:433 card +
// 348:976/309:432/309:434-436+348:979/309:441-442 for "LinkedIn Creator") — a
// #f8f8f8/#ddd card containing an icon + title with an outbound "View here"
// pill on the same row, then a fixed (non-scrolling) row of photos each with
// its own caption, then the description/date row below the photos. Structurally
// a sibling of PlayProjectSection's title/description/image-row shape, but with
// a per-entry icon, an outbound link button, a wrapping card, and per-image
// captions that Play's version doesn't need.
const TILT_CLASSES = [
  'group-hover/photo:-rotate-2',
  'group-hover/photo:rotate-1',
  'group-hover/photo:-rotate-1',
  'group-hover/photo:rotate-2',
]

// Figma's per-image pixel widths (each entry's own image.width) only apply at
// sm+ — on mobile every entry has exactly 4 photos, so a plain 2-col grid puts
// the first two side by side and the last two side by side under them, each
// caption still directly beneath its own photo.
export default function SideQuestSection({
  icon,
  iconSize = 40,
  title,
  viewHereIcon,
  viewHereHref,
  description,
  dateRange,
  images,
}) {
  return (
    <section className="flex min-w-0 flex-col gap-6 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] p-6 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={icon} alt="" style={{ height: iconSize, width: iconSize }} className="shrink-0 object-contain" />
          <h3 className="font-body text-[24px] leading-normal tracking-[0.1px] text-black">{title}</h3>
        </div>
        <a
          href={viewHereHref}
          target="_blank"
          rel="noopener"
          className="hidden shrink-0 items-center gap-2.5 rounded-[100px] border border-[#ddd] bg-white px-5 py-2 transition-colors hover:bg-[#f8f8f8] sm:inline-flex"
        >
          <img src={viewHereIcon} alt="" className="size-4 shrink-0" />
          <span className="font-body text-[16px] leading-5 tracking-[0.1px] text-black whitespace-nowrap">
            View here
          </span>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:flex sm:min-w-0 sm:flex-wrap sm:justify-between">
        {images.map((image, index) => (
          <div
            key={image.caption}
            className="group/photo flex min-w-0 flex-col gap-2 w-full sm:w-[var(--photo-w)]"
            style={{ '--photo-w': image.width, maxWidth: '100%' }}
          >
            <img
              src={image.src}
              alt={image.alt || image.caption}
              className={`h-[160px] w-full rounded-[8px] object-cover transition-transform duration-300 sm:h-[303px] ${TILT_CLASSES[index % TILT_CLASSES.length]}`}
            />
            <p className="font-body text-[16px] leading-normal text-black opacity-50">{image.caption}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-6 sm:gap-y-2">
        {/* Mobile-only: "View here" (left) and the date (right) share a line
            above the description. sm+ hides this and uses the original
            description-left/date-right row further down instead. */}
        <div className="flex items-center justify-between gap-4 sm:hidden">
          <a
            href={viewHereHref}
            target="_blank"
            rel="noopener"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-[100px] border border-[#ddd] bg-white px-5 py-2 transition-colors hover:bg-[#f8f8f8]"
          >
            <img src={viewHereIcon} alt="" className="size-4 shrink-0" />
            <span className="font-body text-[16px] leading-5 tracking-[0.1px] text-black whitespace-nowrap">
              View here
            </span>
          </a>
          <p className="font-body text-[16px] leading-normal tracking-[0.1px] text-black">{dateRange}</p>
        </div>
        <p className="min-w-0 w-full font-body text-[16px] leading-normal tracking-[0.1px] text-black sm:max-w-[522px] sm:flex-1">
          {description}
        </p>
        <p className="hidden font-body text-[16px] leading-normal tracking-[0.1px] text-black sm:block">{dateRange}</p>
      </div>
    </section>
  )
}
