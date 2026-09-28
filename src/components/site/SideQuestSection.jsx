import iconArrowUpRight from '../../assets/site/icon-arrow-up-right.svg'

// Figma pattern repeated for each Side Quests entry (e.g. nodes 309:433 card +
// 348:976/309:432/309:434-436+348:979/309:441-442 for "LinkedIn Creator") — a
// #f8f8f8/#ddd card. Header row is icon + title + an outbound arrow link (in
// place of the old separate "View here" pill) on the left, date right-aligned
// to match the photo row's own right edge; then the description (658px wrap,
// 16px below the header); then the fixed (non-scrolling) row of photos, each
// with its own caption, last.
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
  viewHereHref,
  description,
  dateRange,
  images,
}) {
  return (
    <section className="flex min-w-0 flex-col gap-6 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] p-6 sm:p-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" style={{ height: iconSize, width: iconSize }} className="shrink-0 object-contain" />
            <h3 className="font-body text-[24px] leading-normal tracking-[0.1px] text-black">{title}</h3>
            <a href={viewHereHref} target="_blank" rel="noopener" aria-label={`View ${title}`} className="transition-opacity hover:opacity-60">
              <img src={iconArrowUpRight} alt="" className="size-6" />
            </a>
          </div>
          <p className="font-body text-[16px] leading-normal tracking-[0.1px] text-black">{dateRange}</p>
        </div>

        <p className="w-full max-w-[658px] font-body text-[16px] leading-normal tracking-[0.1px] text-black">
          {description}
        </p>
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
    </section>
  )
}
