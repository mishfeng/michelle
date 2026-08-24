// Figma nodes 430:5336 (home), 404:5033 (studio), 430:5476 (about) — "portfolio-2026"
// iteration 9/10 redesign. Same work/studio/about pill trio as before, now lowercase.
// Active and hover both use the same beige fill (matching the logo's resting state)
// for consistency — a brown/beige color swap on hover (tried in an earlier pass)
// read as too harsh for a nav-wide hover, and a plain gray active fill (also tried)
// didn't match the hover treatment.
export default function SiteNav({ active }) {
  const linkClass = (id) =>
    `rounded-[100px] px-[16px] py-[10px] font-body text-[16px] leading-normal text-black whitespace-nowrap transition-colors duration-200 ${
      active === id ? 'bg-[#f7f4f2]' : 'hover:bg-[#f7f4f2]'
    }`

  return (
    <nav className="flex items-center gap-2">
      <a href="/" className={linkClass('work')}>
        work
      </a>
      <a href="/studio/" className={linkClass('studio')}>
        studio
      </a>
      <a href="/about/" className={linkClass('about')}>
        about
      </a>
    </nav>
  )
}
