// Fine art / Digital art (Figma nodes under "Fine art" / "Digital art") are laid
// out as a static photo collage in Figma, not a scroll row like every other Play
// entry — each image keeps its own absolute position/size instead of being
// cropped to a uniform card height. Positions below are each image's exact
// Figma-frame-relative box, converted to percentages of the collage's own
// width/height so the arrangement holds at any viewport width.
export default function PlayArtGrid({ images, width, height }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt || ''}
          className="absolute rounded-[8px] object-cover"
          style={{
            left: `${(image.x / width) * 100}%`,
            top: `${(image.y / height) * 100}%`,
            width: `${(image.w / width) * 100}%`,
            height: `${(image.h / height) * 100}%`,
          }}
        />
      ))}
    </div>
  )
}
