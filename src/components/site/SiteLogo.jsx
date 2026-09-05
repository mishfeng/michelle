// Figma node 430:5589 ("Frame 277132198") — the "M" mark, top-left on every page.
// Also the source for the browser tab favicon (see scripts/generate-favicon.mjs).
// Hover treatment (darker-brown fill, beige letter) has no Figma hover variant to
// pull from — colors picked to match CustomCursor's brown (#7a5138) and the mark's
// own resting cream (#f7f4f2), just swapped.
export default function SiteLogo() {
  return (
    <a
      href="/"
      aria-label="Michelle Feng — home"
      className="group flex size-[36px] shrink-0 items-center justify-center rounded-[18px] bg-[#f7f4f2] pt-[3.6px] pr-[9.6px] pb-[3.6px] pl-[8.4px] transition-colors duration-200 hover:bg-[#7a5138]"
    >
      <span className="font-hand text-[19.2px] leading-none font-medium tracking-[0.12px] text-black transition-colors duration-200 group-hover:text-[#f7f4f2]">
        m
      </span>
    </a>
  )
}
