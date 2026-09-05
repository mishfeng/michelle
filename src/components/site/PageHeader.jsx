import SiteLogo from './SiteLogo.jsx'
import SiteNav from './SiteNav.jsx'
import WriteInHeading from './WriteInHeading.jsx'

// Figma nodes 404:5032-5069 (studio) and 430:5476-5487/5596 (about) —
// "portfolio-2026" iteration 9/10 redesign. Studio and About share this exact
// header shape (logo + nav row, then a Domine title with an inline Figtree
// subtitle on the left and a faint caption on the right, then a hairline
// divider) — only the copy differs, so it's one component rather than two
// near-identical page-local blocks.
//
// The nav is centered on the full row (Figma positions it at left-1/2,
// independent of the logo), not right-aligned against the logo — the 1fr/auto/1fr
// grid keeps it visually centered rather than centered between the logo and the
// row's own right edge.
export default function PageHeader({ active, title, subtitle, caption }) {
  return (
    <div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        <SiteLogo />
        <div className="justify-self-center">
          <SiteNav active={active} />
        </div>
      </div>

      <div className="mt-[128px] flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 sm:mt-[184px]">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
          <WriteInHeading text={title} className="font-display text-[50px] font-bold leading-normal text-black" />
          {/* Same light/normal weight system as Home's subheading — plain text drops
              to font-light, with each page's own accent word (WaveText-wrapped)
              overriding back to font-normal where it needs its own weight. */}
          <div className="font-body text-[24px] font-light leading-normal text-black">{subtitle}</div>
        </div>
        {caption && <p className="font-body text-[16px] leading-normal text-black/50">{caption}</p>}
      </div>

      <hr className="mt-[37px] border-t-[0.5px] border-[#ddd]" />
    </div>
  )
}
