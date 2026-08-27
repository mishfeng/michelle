import { useEffect, useState } from 'react'
import TealPanel from '../ui/TealPanel'
import LabelValue from '../ui/LabelValue'
import SectionHeading from '../ui/SectionHeading'
import notebookCutout from '../../assets/planit/synthesis-notebook-cutout.png'
import sketchSpread2 from '../../assets/planit/synthesis-sketch-2.png'
import sketchSpread3 from '../../assets/planit/synthesis-sketch-3.png'
import arrowRightIcon from '../../assets/planit/arrow-right.svg'

// Figma node 475:8437 — the brainstorm-notebook spread, background removed (Figma's
// own cutout fill for this node), plus the two additional sketch photos. Auto-advances
// every 3s (node 475:8438's arrow affordance implies paging, but 3 photos are more
// discoverable if they cycle on their own rather than waiting on a click). Clicking
// anywhere in the section toggles the automation on/off.
const AUTO_ADVANCE_MS = 3000
const SKETCH_SLIDES = [
  { src: notebookCutout, alt: 'Handwritten brainstorm notes and early app sketches' },
  { src: sketchSpread2, alt: 'Handwritten trip-flow notes and early wireframe sketches' },
  { src: sketchSpread3, alt: 'Handwritten notes and wireframe sketches for the Japan trip example' },
]

// Node 475:8436/8437 — the notebook card grew to 862x581 (nearly edge-to-edge inside
// the card) in the current design, up from the old, much shorter carousel. The card's
// own #f8f8f8/#ddd background and border (node 475:8436, an otherwise-empty rectangle
// in Figma) must stay visible as letterboxing around every slide, so every image uses
// object-contain rather than object-cover — no slide should crop or fully hide it.
// Both arrows pulse continuously (not just once) since there are 3 photos to page
// through, not a single element to notice. Slides sit side by side in a track that's
// translated with a CSS transition, so advancing always reads as the next image
// sliding in from the right while the current one slides left — not an instant swap.
// Clicking anywhere in the section (including the arrows themselves, since they're
// part of it) toggles automation on/off — a plain play/pause toggle, not a timed
// auto-resume.
function NotebookCarousel() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goPrev = () => setIndex((i) => (i - 1 + SKETCH_SLIDES.length) % SKETCH_SLIDES.length)
  const goNext = () => setIndex((i) => (i + 1) % SKETCH_SLIDES.length)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goNext, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <div
      className="relative flex h-[578px] w-full items-center justify-center overflow-hidden rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] p-6"
      onClick={() => setIsPaused((p) => !p)}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / SKETCH_SLIDES.length)}%)`,
            width: `${SKETCH_SLIDES.length * 100}%`,
          }}
        >
          {SKETCH_SLIDES.map((slide) => (
            <div
              key={slide.src}
              className="flex h-full shrink-0 items-center justify-center"
              style={{ width: `${100 / SKETCH_SLIDES.length}%` }}
            >
              <img src={slide.src} alt={slide.alt} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={goPrev}
        aria-label="Show previous sketch"
        className="arrow-pulse absolute left-4 top-1/2 flex size-10 items-center justify-center rounded-full border border-[#ddd] bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#f8f8f8]"
      >
        <img src={arrowRightIcon} alt="" className="size-5 rotate-180" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Show next sketch"
        className="arrow-pulse absolute right-4 top-1/2 flex size-10 items-center justify-center rounded-full border border-[#ddd] bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#f8f8f8]"
      >
        <img src={arrowRightIcon} alt="" className="size-5" aria-hidden="true" />
      </button>
    </div>
  )
}

// Figma node 475:8433 (Takeaway — no longer a labeled "Takeaway" panel, just the
// synthesized sentence) through 475:8435 ("Synthesis" heading, no subtitle anymore)
// through 475:8436 (notebook carousel) through 475:6539/6540 (final "How might we"
// panel). The clustered insight/sticky-note breakdown that used to sit between the
// carousel and the final panel has been cut from the design entirely.
export default function SynthesisSection() {
  return (
    <section className="flex w-full max-w-[860px] flex-col">
      <TealPanel className="px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <p className="font-body text-[20px] font-medium tracking-[0.1px] text-white">
          There is a <span className="font-bold">gap</span> between wanting to take a trip and
          actually going on the trip. Communication and compromising were the biggest{' '}
          <span className="font-bold">pain points</span>.
        </p>
      </TealPanel>

      <SectionHeading className="mt-[100px]">Synthesis</SectionHeading>

      <div className="mt-8">
        <NotebookCarousel />
      </div>

      <TealPanel className="mt-8 px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <LabelValue label="How might we..." light valueClassName="text-[20px]">
          <p>
            create a mobile app that streamlines the <span className="font-bold">communication</span> of
            trip plans, engages all trip attendees in <span className="font-bold">decision making</span>,
            and <span className="font-bold">simplifies</span> the trip planning process?
          </p>
        </LabelValue>
      </TealPanel>
    </section>
  )
}
