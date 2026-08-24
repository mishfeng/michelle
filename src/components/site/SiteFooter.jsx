import iconLinkedin from '../../assets/site/icon-linkedin.svg'
import iconSubstack from '../../assets/site/icon-substack.svg'
import iconTwitter from '../../assets/site/icon-twitter-fill.svg'
import iconHeartOutline from '../../assets/site/icon-heart-outline.svg'
import iconHeartFilled from '../../assets/site/icon-heart-filled.svg'

// Figma node 430:5334/5547 ("footer portfolio 2026", portfolio-2026 iteration
// 9/10 redesign) — identical across Home/Studio/About, so it's a shared component.
// Down to 3 social icons (LinkedIn, Substack, X) per that node — Instagram and
// Spotify aren't in the redesign.
const SOCIALS = [
  { icon: iconLinkedin, href: 'https://www.linkedin.com/in/missmichfeng/', label: 'LinkedIn' },
  { icon: iconSubstack, href: 'https://substack.com/@missmichfeng', label: 'Substack' },
  { icon: iconTwitter, href: 'https://x.com/missmichfeng', label: 'X (Twitter)' },
]

export default function SiteFooter() {
  return (
    <footer
      data-name="footer portfolio 2026"
      className="border-t-[0.5px] border-[#ddd] bg-white px-6 py-10 sm:px-[70px] sm:py-[52px]"
    >
      <div className="flex flex-col items-center gap-8 text-center sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 sm:text-left">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-display text-[24px] font-bold leading-normal tracking-[0.1px] text-black">
            michelle feng
          </p>
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

        {/* Rest state shows the two heart icons; hovering swaps to the words. */}
        <div className="group relative flex h-[25px] w-[140px] items-center justify-center sm:justify-self-center">
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-50 transition-opacity duration-200 group-hover:opacity-0">
            <img src={iconHeartOutline} alt="" className="size-[25px]" />
            <img src={iconHeartFilled} alt="" className="size-6" />
          </div>
          <p className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-body text-[16px] leading-normal text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            made with love © 2026
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <div className="flex flex-col items-center gap-1 font-body text-[16px] leading-normal tracking-[0.1px] text-black sm:items-end sm:text-right">
            <p className="opacity-50">Want to work together?</p>
            <a href="mailto:michellefeng153@gmail.com">michellefeng153@gmail.com</a>
          </div>
          <div className="flex items-center gap-4 opacity-50">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener">
                <img src={social.icon} alt="" className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
