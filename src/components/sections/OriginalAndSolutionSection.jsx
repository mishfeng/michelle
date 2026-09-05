import readHereIcon from '../../assets/planit/paper-outline.svg'
import originalGroupTodo from '../../assets/planit/original-group-todo.png'
import originalYourTodo from '../../assets/planit/original-your-todo.png'
import originalTripSummary from '../../assets/planit/original-trip-summary.png'
import problemFriendsPhoto from '../../assets/planit/problem-friends-photo.png'
import Pill from '../ui/Pill.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
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

      {/* Gap Analysis — node 475:8230. A plain gray card like the rest of the page's
          content cards, not the teal accent panel this used to be. */}
      <div className="mt-4 flex flex-col gap-1 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <p className="font-body text-[16px] tracking-[0.32px] text-black/50">Gap Analysis</p>
        <p className="font-body text-[16px] tracking-[0.32px] text-black">
          The original design <span className="font-bold">missed the core pain points</span> of
          group trip planning: one place communication, scheduling, and finding activities
          together. Suggestions happened in <span className="font-bold">isolation</span> and
          friends couldn&apos;t see edits, leaving everyone to guess instead of actually deciding
          as a group.
        </p>
      </div>

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

      <SectionHeading id="problem" accent className="mt-[100px]">
        problem
      </SectionHeading>

      <div className="mt-8 flex flex-col gap-6 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <p className="font-body text-[20px] font-medium tracking-[0.1px] text-black">
          There is a <span className="font-bold">gap</span> between wanting to take a trip with
          friends... and actually going on the trip
        </p>
        <div className="flex flex-col items-center gap-4 xl:flex-row xl:justify-center xl:gap-8">
          <div className="flex w-full max-w-[306px] flex-col gap-3 rounded-[8px] bg-[#e7e7e7] p-6">
            <p className="self-end rounded-[100px] bg-white px-6 py-4 font-body text-[16px] font-medium tracking-[0.1px] text-black transition-transform duration-200 hover:scale-110">
              GUYS... japan 👀
            </p>
            <p className="self-start rounded-[100px] bg-[#007aff] px-6 py-4 font-body text-[16px] font-medium tracking-[0.1px] text-white transition-transform duration-200 hover:scale-110">
              i&rsquo;m downnn!
            </p>
            <p className="self-end rounded-[100px] bg-white px-6 py-4 font-body text-[16px] font-medium tracking-[0.1px] text-black transition-transform duration-200 hover:scale-110">
              so... when?
            </p>
          </div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#1b6d99] font-body text-[20px] font-medium text-white">
            vs
          </div>
          <img
            src={problemFriendsPhoto}
            alt="Three friends raising their arms in front of a turquoise lake"
            className="aspect-[306/249] w-full max-w-[306px] rounded-[8px] object-cover transition-transform duration-200 hover:-rotate-2"
          />
        </div>
      </div>

      <SectionHeading id="solution" accent className="mt-[100px]">
        solution
      </SectionHeading>

      {/* Four highlighted preview rows (left) + matching phone mockup (right) — click a
          row to preview its screen, mirroring the Figma prototype's click interaction.
          mt-2 only matters on mobile, where the phone frame renders first (see
          SolutionPreview's flex-col-reverse) directly under this heading with no
          gap otherwise; sm+ keeps the original flush spacing. */}
      <div className="mt-4 sm:mt-0">
        <SolutionPreview />
      </div>
    </div>
  )
}
