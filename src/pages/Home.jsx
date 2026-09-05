import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteLogo from '../components/site/SiteLogo.jsx'
import SiteNav from '../components/site/SiteNav.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import SiteBackground from '../components/site/SiteBackground.jsx'
import WriteInHeading from '../components/site/WriteInHeading.jsx'
import WaveText from '../components/site/WaveText.jsx'
import Reveal from '../components/site/Reveal.jsx'
import flowerCamelliaJar from '../assets/home/flower-camellia-jar.png'
import flowerCalpicoMagnolia from '../assets/home/flower-calpico-magnolia.png'
import flowerOiochaLotus from '../assets/home/flower-oiocha-lotus.png'
import flowerMilkisMagnolia from '../assets/home/flower-milkis-magnolia.png'
import flowerYeosChrysanthemum from '../assets/home/flower-yeos-chrysanthemum.png'
import flowerYakultHydrangea from '../assets/home/flower-yakult-hydrangea.png'
import planitTeaser from '../assets/home/planitvidd.mp4'
import capitalOneTeaser from '../assets/home/cap1vidd.mp4'
import remiTeaser from '../assets/home/remividd.mp4'
import watchfulTeaser from '../assets/home/watchfulvidd.mp4'

// Figma node 611:1224 ("home page iteration 17") — hand-drawn vases
// (repurposed drink bottles/cans) with flowers, flanking the centered hero
// heading with 64px between each cluster and the heading. Swapped for the
// newer set of vases from that node (nodes 612:1283-1296); sliced locally
// into individual vases here so each can move independently on hover.
// hoverClass is a literal string (not built via template interpolation) so
// Tailwind's static scanner picks up each one.
// width/height are each vase's exact Figma pixel size (this hero column is
// the same 1500px canvas width as the Figma frame, so no rescaling is
// needed) rather than a shared height — the vases are genuinely different
// heights in the source design, sharing only a common bottom edge (handled
// by the row's own items-end).
const LEFT_FLOWERS = [
  { src: flowerCamelliaJar, alt: 'Ceramic jar vase with red camellias', width: 52.37, height: 126.52, hoverClass: 'hover:-translate-y-2 hover:rotate-[-3deg]' },
  { src: flowerCalpicoMagnolia, alt: 'Calpico bottle vase with white magnolias', width: 54.7, height: 195.56, hoverClass: 'hover:-translate-y-2 hover:rotate-[2deg]' },
  { src: flowerOiochaLotus, alt: 'Oi Ocha bottle vase with a pink lotus', width: 40.71, height: 135.29, hoverClass: 'hover:-translate-y-2 hover:rotate-[-2deg]' },
]
const RIGHT_FLOWERS = [
  { src: flowerMilkisMagnolia, alt: 'Milkis bottle vase with pink magnolias', width: 65.33, height: 206.87, hoverClass: 'hover:-translate-y-2 hover:rotate-[3deg]' },
  { src: flowerYeosChrysanthemum, alt: "Yeo's can vase with orange chrysanthemums", width: 69.42, height: 153.45, hoverClass: 'hover:-translate-y-2 hover:rotate-[-2deg]' },
  { src: flowerYakultHydrangea, alt: 'Yakult bottle vase with a blue hydrangea', width: 42.72, height: 111.08, hoverClass: 'hover:-translate-y-2 hover:rotate-[2deg]' },
]
const flowerImgClass = 'shrink-0 origin-bottom object-contain transition-transform duration-300 ease-out'

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

            <div className="relative mt-[128px] flex justify-start lg:justify-center">
              <div className="relative flex flex-col items-start gap-1 text-left lg:items-center lg:text-center">
                <WriteInHeading
                  text="michelle feng"
                  className="font-display text-[50px] font-bold leading-normal text-black"
                />
                <p className="font-body text-[24px] font-light leading-normal text-black">
                  is a{' '}
                  <WaveText className="font-accent text-[24px] font-normal italic">product designer</WaveText>{' '}
                  and{' '}
                  <WaveText className="font-body font-medium text-[24px]">storyteller</WaveText>
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
                <div className="absolute right-[calc(100%+64px)] bottom-[33px] hidden items-end gap-[22.7px] lg:flex">
                  {LEFT_FLOWERS.map((flower) => (
                    <img
                      key={flower.alt}
                      src={flower.src}
                      alt={flower.alt}
                      style={{ width: `${flower.width}px`, height: `${flower.height}px` }}
                      className={`${flowerImgClass} ${flower.hoverClass}`}
                    />
                  ))}
                </div>
                <div className="absolute left-[calc(100%+64px)] bottom-[33px] hidden items-end gap-[22.7px] lg:flex">
                  {RIGHT_FLOWERS.map((flower) => (
                    <img
                      key={flower.alt}
                      src={flower.src}
                      alt={flower.alt}
                      style={{ width: `${flower.width}px`, height: `${flower.height}px` }}
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
            <Reveal delay={0}>
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
            </Reveal>

            <Reveal delay={100}>
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
            </Reveal>

            <Reveal delay={0} className="-mt-2">
              <a
                href="https://devpost.com/software/remi-ft132o"
                target="_blank"
                rel="noopener"
                data-cursor="case-study"
                className="group flex min-w-0 flex-col"
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
            </Reveal>

            <Reveal delay={100} className="-mt-2">
              <a
                href="https://devpost.com/software/watchful-ai-u5id0v"
                target="_blank"
                rel="noopener"
                data-cursor="case-study"
                className="group flex min-w-0 flex-col"
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
            </Reveal>
          </div>
        </div>

        <SiteFooter />
      </div>
    </ScaleWrapper>
  )
}
