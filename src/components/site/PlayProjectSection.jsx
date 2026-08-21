import { useEffect, useRef } from 'react'
import scrollArrow from '../../assets/play/scroll-arrow.svg'

// Figma pattern repeated for every Play entry (e.g. nodes 319:655/319:660/319:661/
// 319:667 for "HackDavis"): title + small icon/link, a category label, a date
// range, a short description, and a row of images. The "Group 2" scroll-arrow
// button (344:930) plus a partial-card peek past the visible row (319:778)
// confirm the row loops as an infinite horizontal carousel, not a static grid.
function ScrollRow({ images, radius = '8px' }) {
  const trackRef = useRef(null)
  const indexRef = useRef(images.length)
  const loopImages = images.length > 1 ? [...images, ...images, ...images] : images

  const scrollToIndex = (index, behavior) => {
    const track = trackRef.current
    const target = track?.children[index]
    if (!track || !target) return
    track.scrollTo({ left: target.offsetLeft, behavior })
  }

  useEffect(() => {
    scrollToIndex(indexRef.current, 'auto')
  }, [])

  const step = (direction) => {
    if (images.length < 2) return
    let current = indexRef.current
    let next = current + direction

    // about to drift into the first/third copy — silently re-anchor to the
    // equivalent index in the middle copy first (identical image, so the
    // instant jump is invisible), then animate the real one-card move
    if (next < images.length || next >= images.length * 2) {
      const shift = next < images.length ? images.length : -images.length
      current += shift
      next += shift
      scrollToIndex(current, 'auto')
    }

    indexRef.current = next
    scrollToIndex(next, 'smooth')
  }

  return (
    <div className="relative min-w-0">
      <div
        ref={trackRef}
        className="flex min-w-0 gap-[18px] overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopImages.map((image, index) =>
          image.video ? (
            <video
              key={index}
              src={image.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={image.alt || ''}
              className="h-[249px] w-auto shrink-0 object-cover"
              style={{ borderRadius: radius }}
            />
          ) : (
            <img
              key={index}
              src={image.src}
              alt={image.alt || ''}
              className="h-[249px] w-auto shrink-0 object-cover"
              style={{ borderRadius: radius }}
            />
          ),
        )}
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Scroll to previous"
            className="absolute top-1/2 left-2 hidden -translate-y-1/2 scale-x-[-1] transition-opacity hover:opacity-80 sm:block"
          >
            <img src={scrollArrow} alt="" className="size-[42px]" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Scroll to next"
            className="absolute top-1/2 right-2 hidden -translate-y-1/2 transition-opacity hover:opacity-80 sm:block"
          >
            <img src={scrollArrow} alt="" className="size-[42px]" />
          </button>
        </>
      )}
    </div>
  )
}

export default function PlayProjectSection({
  id,
  title,
  links = [],
  category,
  dateRange,
  description,
  images,
  imageRadius,
}) {
  return (
    <section id={id} className="flex min-w-0 flex-col">
      <div className="flex items-center gap-2">
        <h3 className="font-body text-[24px] leading-normal tracking-[0.1px] text-black">{title}</h3>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener"
            aria-label={link.label}
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            <img src={link.icon} alt="" className="size-6" />
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        <div className="flex w-full flex-col font-body text-[16px] leading-normal tracking-[0.1px] text-black sm:w-[174px] sm:shrink-0">
          {category && <p>{category}</p>}
          <p>{dateRange}</p>
        </div>
        <p className="min-w-0 max-w-[411px] flex-1 font-body text-[16px] leading-normal tracking-[0.1px] text-black opacity-50">
          {description}
        </p>
      </div>

      <div className="mt-8">
        <ScrollRow images={images} radius={imageRadius} />
      </div>
    </section>
  )
}
