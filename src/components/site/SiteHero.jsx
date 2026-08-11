// Figma nodes 55:4314+55:4359 (home page hero + quote) and 55:4369+55:4412 (about
// page hero + quote) — full-bleed 1360x403 rounded hero with a 15% black overlay
// for legibility and a centered italic quote pill near the bottom edge.
//
// `image` and `video` are mutually exclusive. `overlay`/`bordered` default on for
// a raw photo/video, but the home page hero image is a flattened export straight
// out of Figma (crop + color grade + border already baked in), so it passes both
// as false to avoid doubling up.
export default function SiteHero({
  image,
  video,
  alt,
  quote,
  objectPosition = 'center',
  overlay = true,
  bordered = true,
}) {
  return (
    <div
      className={`relative aspect-[1360/403] w-full overflow-hidden rounded-[8px] ${
        bordered ? 'border-[0.5px] border-[#ddd]' : ''
      }`}
    >
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition }}
        />
      )}
      {overlay && <div className="absolute inset-0 bg-black/15" />}
      <div className="absolute inset-x-0 bottom-[20px] flex justify-center px-4">
        <p className="whitespace-nowrap bg-black/50 px-[10px] py-1 font-body text-[16px] italic leading-normal text-white">
          {quote}
        </p>
      </div>
    </div>
  )
}
