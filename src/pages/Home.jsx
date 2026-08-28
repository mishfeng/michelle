import { useEffect, useRef } from 'react'
import { SCALE, DESKTOP_BREAKPOINT } from '../scale.js'
import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteLogo from '../components/site/SiteLogo.jsx'
import SiteNav from '../components/site/SiteNav.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import SiteBackground from '../components/site/SiteBackground.jsx'
import WriteInHeading from '../components/site/WriteInHeading.jsx'
import WaveText from '../components/site/WaveText.jsx'
import skylineBase from '../assets/home/skyline-base.png'
import skylineAccent from '../assets/home/skyline-accent.png'
import planitTeaser from '../assets/home/planitvid.mp4'
import capitalOneTeaser from '../assets/home/capitalone.mp4'
import remiTeaser from '../assets/home/remi-thumb.mp4'
import watchfulTeaser from '../assets/home/watchfulai.mp4'

const cardShellClass =
  'relative flex aspect-[665/500] w-full items-center justify-center overflow-hidden rounded-[12px] border-[0.5px] border-[#ddd] bg-[#f7f4f2]'
// Softer than the first pass (was scale-[0.97]) — a 1% shrink over a slower
// duration reads as a gentle settle instead of a snap.
const thumbnailClass = 'origin-left transition-transform duration-300 ease-out group-hover:scale-[0.99]'

const SPOTLIGHT_RADIUS = 260

// Figma nodes 430:5535-5546 — title (semibold) + "Org · Year" (regular) inline,
// replacing the old stacked two-line caption. The whole caption is hover-only now
// (hidden at rest, both halves fade in together on thumbnail hover).
function ProjectCaption({ title, subtitle }) {
  return (
    <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-body text-[16px] leading-normal text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <p className="font-semibold">{title}</p>
      <p>{subtitle}</p>
    </div>
  )
}

// Ported from Figma "portfolio-2026" file, frames "home page iteration 9"
// (430:5311, resting) and "home page iteration 10" (430:5524, hover) — the
// hand-drawn SF skyline sketch (image 54 / skylineBase) and the grid-paper
// texture behind it (image 55 / skylineAccent) are only in the hover frame, so
// their opacity values below the "ambient" (always-on) layer are this session's
// own interpretation of "part of the image visible at rest, hover reveals more,"
// not values pulled from the file — worth a look once it's live. On top of that
// ambient layer, a second "spotlight" copy of each image is masked to a soft
// circle that tracks the cursor (handleHeroMouseMove), so both images brighten
// and dim continuously as the cursor moves through the hero rather than only
// switching between two fixed states on hover in/out.
export default function Home() {
  const heroRef = useRef(null)
  const imageOuterRef = useRef(null)
  const gridGlowRef = useRef(null)
  const cityGlowRef = useRef(null)
  const cityWrapRef = useRef(null)

  // Each glow layer gets the gradient measured against its OWN rect, not the
  // hero row's — the grid and city layers are much taller than the logo/nav/
  // heading row that group-hover/hero listens on, so a single shared percentage
  // would land the "spotlight" far from the actual cursor position.
  const handleHeroMouseMove = (event) => {
    for (const ref of [gridGlowRef, cityGlowRef]) {
      const el = ref.current
      if (!el) continue
      const rect = el.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      const mask = `radial-gradient(circle ${SPOTLIGHT_RADIUS}px at ${x}% ${y}%, black 0%, transparent 100%)`
      el.style.maskImage = mask
      el.style.webkitMaskImage = mask
    }
  }

  // Below DESKTOP_BREAKPOINT, ScaleWrapper renders everything at natural fluid
  // width (no transform) and this container's default 100%-of-hero sizing is
  // already exactly right. At/above DESKTOP_BREAKPOINT, ScaleWrapper centers a
  // fixed 1500px canvas at 1.2x — on a wide monitor that leaves equal margins on
  // both sides, so the image's right edge (tuned to land flush with the canvas's
  // own edge) stops short of the real browser edge by however wide that margin
  // is. This measures that gap (viewport width minus the canvas's own right edge)
  // only in the scaled regime and nudges the sketch further right by exactly that
  // amount, converted back into the canvas's own (pre-scale) coordinate space.
  // The outer container's width has to grow by the same amount too — it's what
  // actually clips the image (overflow-hidden), so without this its clip
  // boundary stays pinned to the canvas edge and silently cuts off the exact
  // pixels the shift was trying to reveal.
  useEffect(() => {
    const updateEdgeShift = () => {
      const hero = heroRef.current
      const wrap = cityWrapRef.current
      const outer = imageOuterRef.current
      if (!hero || !wrap || !outer) return

      if (window.innerWidth < DESKTOP_BREAKPOINT) {
        wrap.style.transform = 'translateX(0px)'
        outer.style.width = '100%'
        return
      }
      const heroRect = hero.getBoundingClientRect()
      const gap = window.innerWidth - heroRect.right
      const extra = gap > 0 ? gap / SCALE : 0
      wrap.style.transform = `translateX(${extra}px)`
      outer.style.width = `${1500 + extra}px`
    }
    updateEdgeShift()
    window.addEventListener('resize', updateEdgeShift)
    return () => window.removeEventListener('resize', updateEdgeShift)
  }, [])

  return (
    <ScaleWrapper center>
      <div className="relative bg-white min-h-screen">
        <SiteBackground />

        {/* group/hero spans the true full page width (not the padded content column)
            so the skyline layers below can bleed flush to the page's own right edge,
            matching Figma's frame-edge bleed, instead of stopping at the content's
            xl:px-[70px] inset. The logo/nav/heading row re-applies that same padding
            on its own inner wrapper so it still lines up with the rest of the page. */}
        <div className="group/hero relative" ref={heroRef} onMouseMove={handleHeroMouseMove}>
          <div
            ref={imageOuterRef}
            className="pointer-events-none absolute -top-[204px] hidden h-[966px] overflow-hidden sm:block"
            style={{ left: 0, width: '100%' }}
            aria-hidden="true"
          >
            {/* Grid paper texture — always faintly present, brightens on hover, and
                stays painted first so the skyline sketch below is always on top of it. */}
            <div
              className="absolute h-[922px] w-[601px] opacity-[0.15] transition-opacity duration-500 group-hover/hero:opacity-35"
              style={{ left: 874, top: 44 }}
            >
              <img src={skylineAccent} alt="" className="absolute inset-0 size-full object-cover" />
            </div>
            <div
              ref={gridGlowRef}
              className="absolute h-[922px] w-[601px] opacity-0 transition-opacity duration-300 group-hover/hero:opacity-90"
              style={{ left: 874, top: 44 }}
            >
              <img src={skylineAccent} alt="" className="absolute inset-0 size-full object-cover" />
            </div>

            {/* Hand-drawn skyline sketch — painted after the grid, so it's always on top.
                Base position shifted right + down from its original Figma-sourced spot
                (527, 0); the wrapper's own transform is then corrected live (see
                updateEdgeShift) so the bridge always lands flush against the real screen
                edge, not just this container's edge. */}
            <div ref={cityWrapRef} className="absolute size-[905px]" style={{ left: 615, top: 40 }}>
              <div className="absolute inset-0 opacity-[0.12] transition-opacity duration-500 group-hover/hero:opacity-35">
                <img src={skylineBase} alt="" className="absolute inset-0 size-full" />
              </div>
              <div
                ref={cityGlowRef}
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/hero:opacity-100"
              >
                <img src={skylineBase} alt="" className="absolute inset-0 size-full" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-[1500px] px-6 pt-11 xl:px-[70px]">
            <div className="relative grid grid-cols-[1fr_auto_1fr] items-center">
              <SiteLogo />
              <div className="justify-self-center">
                <SiteNav active="work" />
              </div>
            </div>

            <div className="relative mt-[184px] flex flex-col gap-1">
              <WriteInHeading
                text="michelle feng"
                className="font-display text-[50px] font-bold leading-normal text-black"
              />
              <p className="font-body text-[24px] font-light leading-normal text-black">
                is a{' '}
                <WaveText className="font-accent text-[24px] font-normal italic">product designer</WaveText>{' '}
                and{' '}
                <WaveText className="font-hand text-[20px]">city explorer</WaveText>
                <br />
                prev at <span className="text-black/50">capital one</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 pb-20 xl:px-[70px]">
          <div className="mt-[42px] grid grid-cols-1 gap-x-6 gap-y-[42px] sm:grid-cols-2">
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
          </div>
        </div>

        <SiteFooter />
      </div>
    </ScaleWrapper>
  )
}
