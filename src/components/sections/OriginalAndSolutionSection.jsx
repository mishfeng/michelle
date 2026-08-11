import readHereIcon from '../../assets/planit/paper-outline.svg'
import originalGroupTodo from '../../assets/planit/original-group-todo.png'
import originalYourTodo from '../../assets/planit/original-your-todo.png'
import originalTripSummary from '../../assets/planit/original-trip-summary.png'
import originalProblemVideo from '../../assets/planit/original-problem-video.mp4'
import Pill from '../ui/Pill.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import TealPanel from '../ui/TealPanel.jsx'
import LabelValue from '../ui/LabelValue.jsx'
import SolutionPreview from './SolutionPreview.jsx'

// Figma nodes 1:92/1:104 (Read here pill + "The Original" heading), 1:79/1:101/1:102/1:103
// (Gap Analysis teal panel), 1:307/1:308/1:356/1:419 (three original-app phone mockups),
// 1:184/1:185/1:186 (Problem heading), 1:125 (Problem photo card), 1:291/1:292/1:293
// (Solution heading), 1:126-1:129 + 1:746-1:757 (four highlighted preview rows) + 1:758
// (host overview phone mockup).
export default function OriginalAndSolutionSection() {
  return (
    <div className="flex flex-col">
      {/* "The Original" heading + Read here pill, same row */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-3">
        <SectionHeading>The Original</SectionHeading>
        <a
          href="https://davisdesigninteractive.medium.com/planit-a-ux-case-study-a0be002c6600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Pill icon={readHereIcon}>Read here</Pill>
        </a>
      </div>

      <TealPanel className="mt-4 px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <LabelValue label="Gap Analysis" light>
          The original design missed the core pain points of group trip planning: one place
          communication, scheduling, and finding activities together. Suggestions happened in
          isolation and friends couldn&apos;t see edits, leaving everyone to guess instead of
          actually deciding as a group.
        </LabelValue>
      </TealPanel>

      {/* Three original-app phone screens, bleeding off the bottom of a light card
          (same bleed pattern as the hero banner in IntroSection, light variant) */}
      <div className="mt-4 flex justify-center gap-2 overflow-hidden rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] pt-3 sm:gap-[10px]">
        <img
          src={originalGroupTodo}
          alt="Original app — Group To Do tab with finalize date and location voting"
          className="h-auto w-[28%] shrink-0 sm:w-[150px] xl:w-[190px]"
        />
        <img
          src={originalYourTodo}
          alt="Original app — Your To Do tab with friends, availability, and location"
          className="h-auto w-[28%] shrink-0 sm:w-[150px] xl:w-[190px]"
        />
        <img
          src={originalTripSummary}
          alt="Original app — Trip Summary tab with day-by-day itinerary"
          className="h-auto w-[28%] shrink-0 sm:w-[150px] xl:w-[190px]"
        />
      </div>

      <SectionHeading
        id="problem"
        className="mt-16"
        subtitle="There is a gap between wanting to take a trip with friends... and actually going on the trip."
      >
        Problem
      </SectionHeading>

      <video
        src={originalProblemVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="A map being unrolled next to a packed suitcase and passport"
        className="mt-6 h-[365px] w-full rounded-[8px] object-cover"
      />

      <SectionHeading
        id="solution"
        className="mt-16"
        subtitle="Introducing PlanIT... new with host/ friend mode, PlanAI for itinerary generation, and vote on dates."
      >
        Solution
      </SectionHeading>

      {/* Four highlighted preview rows (left) + matching phone mockup (right) — click a
          row to preview its screen, mirroring the Figma prototype's click interaction. */}
      <SolutionPreview />
    </div>
  )
}
