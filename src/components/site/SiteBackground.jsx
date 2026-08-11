import textureImage from '../../assets/site/texture.png'

// A very faint golden-hour glow drifting in from the top right, plus a whisper
// of noise texture over the whole page. Sits behind all real content (negative
// z-index against the page's own white background) — meant to be felt more
// than seen, and only barely animated so it doesn't read as "moving" at a glance.
export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="site-glow absolute -top-[15%] -right-[10%] h-[65%] w-[65%] rounded-full opacity-[0.10]"
        style={{
          background:
            'radial-gradient(circle at 65% 35%, #ffdca8 0%, #ffb98a 30%, #ffd9c9 55%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `url(${textureImage})`, backgroundSize: '512px 512px', backgroundRepeat: 'repeat' }}
      />
    </div>
  )
}
