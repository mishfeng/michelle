import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteLogo from '../components/site/SiteLogo.jsx'
import SiteNav from '../components/site/SiteNav.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import SiteBackground from '../components/site/SiteBackground.jsx'
import WriteInHeading from '../components/site/WriteInHeading.jsx'
import WaveText from '../components/site/WaveText.jsx'
import flowerYakult from '../assets/home/flower-yakult.png'
import flowerTulipSoju from '../assets/home/flower-tulip-soju.png'
import flowerMilktea from '../assets/home/flower-milktea.png'
import flowerHydrangea from '../assets/home/flower-hydrangea-makgeolli.png'
import flowerRamune from '../assets/home/flower-ramune.png'
import flowerDaisyGrape from '../assets/home/flower-daisy-grape.png'
import planitTeaser from '../assets/home/planitvidd.mp4'
import capitalOneTeaser from '../assets/home/cap1vidd.mp4'
import remiTeaser from '../assets/home/remividd.mp4'
import watchfulTeaser from '../assets/home/watchfulvidd.mp4'

// Figma node 580:7307 — hand-drawn vases (repurposed drink bottles/cans) with
// flowers, flanking the centered hero heading with 64px between each cluster
// and the heading. The Figma frame exports both clusters as crops of one
// shared sprite; sliced locally into individual vases here so each can move
// independently on hover. hoverClass is a literal string (not built via
// template interpolation) so Tailwind's static scanner picks up each one.
// width is pinned per vase (naturalWidth / 527 * 225, the crops' shared source
// height, scaled down ~13% from the original 260px) rather than left to
// w-auto — inside this absolutely-positioned flex row, auto-width-from-aspect-
// ratio was collapsing every vase to a uniform, wrong 24px instead of sizing
// each from its own intrinsic ratio.
const LEFT_FLOWERS = [
  { src: flowerYakult, alt: 'Yakult bottle vase with an orange chrysanthemum', width: 45.23, hoverClass: 'hover:-translate-y-2 hover:rotate-[-3deg]' },
  { src: flowerTulipSoju, alt: 'Soju bottle vase with orange tulips', width: 53.38, hoverClass: 'hover:-translate-y-2 hover:rotate-[2deg]' },
  { src: flowerMilktea, alt: 'Royal Milk Tea can vase with a pink lotus', width: 55.92, hoverClass: 'hover:-translate-y-2 hover:rotate-[-2deg]' },
]
const RIGHT_FLOWERS = [
  { src: flowerHydrangea, alt: 'Makgeolli bottle vase with a blue hydrangea', width: 84.09, hoverClass: 'hover:-translate-y-2 hover:rotate-[3deg]' },
  { src: flowerRamune, alt: 'Ramune bottle vase with pink camellias', width: 55.92, hoverClass: 'hover:-translate-y-2 hover:rotate-[-2deg]' },
  { src: flowerDaisyGrape, alt: 'Grape soda can vase with a white daisy', width: 48.68, hoverClass: 'hover:-translate-y-2 hover:rotate-[2deg]' },
]
const flowerImgClass = 'h-[225px] shrink-0 origin-bottom transition-transform duration-300 ease-out'

const cardShellClass =
  'relative flex aspect-[665/500] w-full items-center justify-center overflow-hidden rounded-[12px] border-[0.5px] border-[#ddd] bg-[#f7f4f2]'
// Softer than the first pass (was scale-[0.97]) — a 1% shrink over a slower
// duration reads as a gentle settle instead of a snap.
const thumbnailClass = 'origin-left transition-transform duration-300 ease-out group-hover:scale-[0.99]'

// Figma nodes 430:5535-5546 — title (semibold) + "Org · Year" (regular) inline,
// replacing the old stacked two-line caption. Hover-only on sm+ (both halves
// fade in together on thumbnail hover), but shown at rest below sm — touch
// devices have no hover state to reveal it otherwise.
function ProjectCaption({ title, subtitle }) {
  return (
    <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-body text-[16px] leading-normal text-black opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100">
      <p className="font-semibold">{title}</p>
      <p>{subtitle}</p>
    </div>
  )
}

export default function Home() {
  return (
    <ScaleWrapper center>
      <div className="relative bg-white min-h-screen">
        <SiteBackground />

        <div className="relative">
          <div className="relative mx-auto max-w-[1500px] px-6 pt-[32px] xl:px-[70px]">
            <div className="relative grid grid-cols-[1fr_auto_1fr] items-center">
              <SiteLogo />
              <div className="justify-self-center">
                <SiteNav active="work" />
              </div>
            </div>

            <div className="relative mt-[128px] flex justify-center">
              <div className="relative flex flex-col items-center gap-1 text-center">
                <WriteInHeading
                  text="michelle feng"
                  className="font-display text-[50px] font-bold leading-normal text-black"
                />
                <p className="font-body text-[24px] font-light leading-normal text-black">
                  is a{' '}
                  <WaveText className="font-accent text-[24px] font-normal italic">product designer</WaveText>{' '}
                  and{' '}
                  <WaveText className="font-body font-semibold text-[24px]">storyteller</WaveText>
                  <br />
                  prev at <span className="text-black/50">capital one</span>
                </p>

                {/* Vase clusters, absolutely positioned (out of flow, so they can't
                    stretch or push this column's own height) with their bottom edge
                    anchored to the bottom of the FIRST subtitle line ("is a product
                    designer and storyteller"), not the full two-line block: bottom-[41px]
                    lines the vase bottom up with that line's actual rendered bottom
                    (theoretical line-height math put it a few px off — tuned against
                    the real layout), and this column's own bottom is the second line's
                    ("prev at capital one") bottom. The 64px gap from the heading is
                    baked into the offset itself (100% + 64px) rather than padding, so
                    there's no dead space inside the hover target. */}
                <div className="absolute right-[calc(100%+64px)] bottom-[41px] hidden items-end gap-3 lg:flex">
                  {LEFT_FLOWERS.map((flower) => (
                    <img
                      key={flower.alt}
                      src={flower.src}
                      alt={flower.alt}
                      style={{ width: `${flower.width}px` }}
                      className={`${flowerImgClass} ${flower.hoverClass}`}
                    />
                  ))}
                </div>
                <div className="absolute left-[calc(100%+64px)] bottom-[41px] hidden items-end gap-3 lg:flex">
                  {RIGHT_FLOWERS.map((flower) => (
                    <img
                      key={flower.alt}
                      src={flower.src}
                      alt={flower.alt}
                      style={{ width: `${flower.width}px` }}
                      className={`${flowerImgClass} ${flower.hoverClass}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 pb-[100px] xl:px-[70px]">
          <div className="mt-[64px] grid grid-cols-1 gap-x-6 gap-y-[34px] sm:grid-cols-2">
            <a href="/planit/" data-cursor="case-study" className="group flex min-w-0 flex-col">
              <div className={`${cardShellClass} ${thumbnailClass}`}>
                <video
                  src={planitTeaser}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="PlanIT overview and itinerary screens"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <ProjectCaption title="PlanIT makes trip planner simpler" subtitle="PlanIT · 2026" />
            </a>

            <a href="/capital-one/" data-cursor="case-study" className="group flex min-w-0 flex-col">
              <div className={`${cardShellClass} ${thumbnailClass}`}>
                <video
                  src={capitalOneTeaser}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Capital One credit card teaser"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <ProjectCaption title="Funding Component clarifies deposits for customers" subtitle="Capital One · 2025" />
            </a>

            <a
              href="https://devpost.com/software/remi-ft132o"
              target="_blank"
              rel="noopener"
              data-cursor="case-study"
              className="group -mt-2 flex min-w-0 flex-col"
            >
              <div className={`${cardShellClass} ${thumbnailClass}`}>
                <video
                  src={remiTeaser}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="REMI product teaser"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <ProjectCaption title="REMI helps people with Alzheimer's disease" subtitle="SF Hacks 3x Prize Winner · 2025" />
            </a>

            <a
              href="https://devpost.com/software/watchful-ai-u5id0v"
              target="_blank"
              rel="noopener"
              data-cursor="case-study"
              className="group -mt-2 flex min-w-0 flex-col"
            >
              <div className={`${cardShellClass} ${thumbnailClass}`}>
                <video
                  src={watchfulTeaser}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Watchful.AI product teaser"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <ProjectCaption
                title="Watchful.AI provides 24/7 protection against shootings"
                subtitle="UPenn 2x Prize Winner · 2024"
              />
            </a>
          </div>
        </div>

        <SiteFooter />
      </div>
    </ScaleWrapper>
  )
}
