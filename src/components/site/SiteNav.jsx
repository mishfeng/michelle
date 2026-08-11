// Figma nodes 55:4310/55:4312 (home page) and 55:4365/55:4367 (about page) — same
// "Work" / "About" pill pair, just with the opposite one active depending on page.
export default function SiteNav({ active }) {
  const linkClass = (id) =>
    `rounded-[100px] px-3 py-2 font-body text-[16px] leading-5 tracking-[0.1px] text-black whitespace-nowrap transition-colors ${
      active === id ? 'border border-[#ddd] bg-[#f8f8f8]' : 'hover:bg-[#f8f8f8]'
    }`

  return (
    <nav className="flex items-center gap-2">
      <a href="/" className={linkClass('work')}>
        Work
      </a>
      <a href="/about/" className={linkClass('about')}>
        About
      </a>
    </nav>
  )
}
