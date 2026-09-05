import iconMail from '../../assets/site/icon-mail.svg'
import iconLinkedin from '../../assets/site/icon-linkedin.svg'
import iconLinkedinColor from '../../assets/site/icon-linkedin-color.svg'
import iconSubstack from '../../assets/site/icon-substack.svg'
import iconSubstackColor from '../../assets/site/icon-substack-color.svg'
import iconTwitter from '../../assets/site/icon-twitter-fill.svg'
import iconHeartOutline from '../../assets/site/icon-heart-outline.svg'
import iconHeartFilled from '../../assets/site/icon-heart-filled.svg'
import WriteInHeading from './WriteInHeading.jsx'

// Figma node 430:5334/5547 ("footer portfolio 2026", portfolio-2026 iteration
// 9/10 redesign) — identical across Home/Studio/About, so it's a shared component.
// Down to 3 social icons (LinkedIn, Substack, X) per that node — Instagram and
// Spotify aren't in the redesign.
// The X mark's source SVG has no built-in padding (its viewBox tightly bounds
// the glyph), while LinkedIn's and Substack's glyphs sit inside a padded
// 24x24 grid — at a shared size-6, X reads noticeably bigger/bolder than the
// other two. Sized down (and left to its own aspect ratio via h-auto) so its
// visual ink roughly matches its neighbors' ink size instead of their shared box.
// hoverIcon is each platform's real brand color, swapped in on hover — X has
// none since its brand color already is black, so hovering it just fades from
// the muted rest-state opacity up to full solid black.
const SOCIALS = [
  { icon: iconLinkedin, hoverIcon: iconLinkedinColor, href: 'https://www.linkedin.com/in/missmichfeng/', label: 'LinkedIn', className: 'size-6' },
  { icon: iconSubstack, hoverIcon: iconSubstackColor, href: 'https://substack.com/@missmichfeng', label: 'Substack', className: 'size-6' },
  { icon: iconTwitter, hoverIcon: null, href: 'https://x.com/missmichfeng', label: 'X (Twitter)', className: 'h-[15px] w-auto' },
]

// Mobile-only: a mail icon stands in for the "Want to work together?"/email
// text, which is dropped on mobile in favor of putting the mailto link
// directly in the icon row.
const MOBILE_SOCIALS = [
  { icon: iconMail, hoverIcon: null, href: 'mailto:michellefeng153@gmail.com', label: 'Email', className: 'size-6' },
  ...SOCIALS,
]

function SocialLink({ social }) {
  const isMailto = social.href.startsWith('mailto:')
  return (
    <a
      href={social.href}
      aria-label={social.label}
      target={isMailto ? undefined : '_blank'}
      rel={isMailto ? undefined : 'noopener'}
      className="group/social relative block opacity-50 transition-opacity duration-200 hover:opacity-100"
    >
      <img src={social.icon} alt="" className={`${social.className} ${social.hoverIcon ? 'group-hover/social:opacity-0' : ''} transition-opacity duration-200`} />
      {social.hoverIcon && (
        <img
          src={social.hoverIcon}
          alt=""
          className={`${social.className} absolute inset-0 opacity-0 transition-opacity duration-200 group-hover/social:opacity-100`}
        />
      )}
    </a>
  )
}

function NameAndNav() {
  return (
    <div className="flex flex-col items-start gap-1">
      <WriteInHeading
        text="michelle feng"
        as="p"
        startOnVisible
        className="font-display text-[24px] font-bold leading-normal tracking-[0.1px] text-black"
      />
      <nav className="flex items-center gap-2 font-body text-[16px] leading-normal tracking-[0.1px]">
        <a href="/" className="text-black/50 transition-colors hover:text-black">
          work
        </a>
        <a href="/studio/" className="text-black/50 transition-colors hover:text-black">
          studio
        </a>
        <a href="/about/" className="text-black/50 transition-colors hover:text-black">
          about
        </a>
      </nav>
    </div>
  )
}

export default function SiteFooter() {
  return (
    <footer
      data-name="footer portfolio 2026"
      className="border-t-[0.5px] border-[#ddd] bg-white px-6 py-10 sm:px-[70px] sm:py-[52px]"
    >
      {/* Mobile-only layout: name/nav + icon row (mail, LinkedIn, Substack, X)
          share one line, icons right-aligned. Hearts and the "Want to work
          together?"/email text are dropped entirely on mobile — the mailto
          link lives in the icon row instead. */}
      <div className="flex w-full items-start justify-between gap-4 text-left sm:hidden">
        <NameAndNav />
        <div className="flex items-center gap-4">
          {MOBILE_SOCIALS.map((social) => (
            <SocialLink key={social.label} social={social} />
          ))}
        </div>
      </div>

      {/* Desktop layout — unchanged. */}
      <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
        <NameAndNav />

        {/* Rest state shows the two heart icons (full brown, matching the
            custom cursor); hovering swaps to the words. */}
        <div className="group relative flex h-[25px] w-[140px] items-center justify-center justify-self-center">
          <div className="absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-200 group-hover:opacity-0">
            <img src={iconHeartOutline} alt="" className="size-[25px]" />
            <img src={iconHeartFilled} alt="" className="size-6" />
          </div>
          <p className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-body text-[16px] leading-normal text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            made with love © 2026
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex flex-col items-end gap-1 text-right font-body text-[16px] leading-normal tracking-[0.1px] text-black">
            <p className="opacity-50">Want to work together?</p>
            <a href="mailto:michellefeng153@gmail.com">michellefeng153@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map((social) => (
              <SocialLink key={social.label} social={social} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
