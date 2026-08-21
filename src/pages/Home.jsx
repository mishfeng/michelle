import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteNav from '../components/site/SiteNav.jsx'
import SiteHero from '../components/site/SiteHero.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import SiteBackground from '../components/site/SiteBackground.jsx'
import heroImage from '../assets/site/home-hero.jpeg'
import planitCover from '../assets/home/planit-cover.jpg'
import capitalOneTeaser from '../assets/home/capitalone.mp4'
import remiTeaser from '../assets/home/remi.mp4'
import watchfulTeaser from '../assets/home/watchfulai.mp4'

const cardShellClass =
  'relative flex aspect-[668/448] w-full items-center justify-center overflow-hidden rounded-[12.664px] border-[0.792px] border-[#ddd]'
const thumbnailClass = 'origin-left transition-transform duration-200 group-hover:scale-[0.97]'

// Figma nodes 308:253/257/264 + 309:268 — always-visible two-line caption under
// each home project card (semibold title, regular "Org · Year" subtitle),
// replacing the old hover-to-reveal single-line caption.
function ProjectCaption({ title, subtitle }) {
  return (
    <div className="mt-4 flex flex-col gap-[2px] font-body text-[16px] leading-normal tracking-[0.1px] text-black">
      <p className="font-semibold">{title}</p>
      <p>{subtitle}</p>
    </div>
  )
}

// Ported from Figma "case-studies-2026" file, frame "home page" (node 55:4305).
// Replaces the temporary placeholder that used to live directly in index.html.
//
// Uses the same 1500px design canvas + ScaleWrapper convention as the PlanIT/
// Capital One case studies (see scale.js) so the 70px side margins from Figma
// hold at every width, instead of the page just centering in a `max-w` column
// with ever-growing whitespace on wide screens.
export default function Home() {
  return (
    <ScaleWrapper center>
      <div className="relative bg-white min-h-screen">
        <SiteBackground />

        <div className="relative mx-auto max-w-[1500px] px-6 pt-11 pb-20 xl:px-[70px]">
          <SiteHero
            image={heroImage}
            alt="Standing on a golden hillside at sunset"
            quote="it takes experiencing the sunset, to fully appreciate the sunrise"
            overlay={false}
            bordered={false}
          />

          <div className="mt-[53px] flex flex-wrap items-start justify-between gap-6">
            <div className="flex max-w-[528px] flex-col gap-2">
              <h1 className="font-heading text-[32px] font-medium leading-normal tracking-[0.64px] text-black">
                Michelle Feng
              </h1>
              <p className="font-body text-[16px] leading-normal tracking-[0.32px] text-black">
                Designing human interfaces for human connection
                <br />
                <span className="text-[#5c5c5c]">Previously at Capital One</span>
              </p>
            </div>
            <SiteNav active="work" />
          </div>

          <div className="mt-6 flex flex-col gap-8">
            <div className="flex flex-col gap-6 sm:flex-row">
              <a href="/planit/" className="group flex min-w-0 flex-1 flex-col">
                <div className={`${cardShellClass} ${thumbnailClass}`}>
                  <img
                    src={planitCover}
                    alt="PlanIT overview and itinerary screens"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <ProjectCaption title="A simpler way to plan trips with friends" subtitle="PlanIT Travel Assistant · 2026" />
              </a>

              <a href="/capital-one/" className="group flex min-w-0 flex-1 flex-col">
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
                <ProjectCaption title="Helping customers understand what their deposit means" subtitle="Capital One · 2025" />
              </a>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row">
              <a
                href="https://devpost.com/software/remi-ft132o"
                target="_blank"
                rel="noopener"
                className="group flex min-w-0 flex-1 flex-col"
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
                className="group flex min-w-0 flex-1 flex-col"
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
        </div>

        <SiteFooter />
      </div>
    </ScaleWrapper>
  )
}
