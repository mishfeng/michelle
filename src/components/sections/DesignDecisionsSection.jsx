import SectionHeading from '../ui/SectionHeading.jsx'
import LabelValue from '../ui/LabelValue.jsx'
import BeforeAfterRow from '../ui/BeforeAfterRow.jsx'

import introVideo from '../../assets/planit/before-after-intro-video.mp4'
import hostmodeOverview from '../../assets/planit/hostmode-overview.png'
import hostmodeItinerary from '../../assets/planit/hostmode-itinerary.png'
import friendmodeOverview from '../../assets/planit/friendmode-overview.png'
import friendmodeItinerary from '../../assets/planit/friendmode-itinerary.png'
import bracketDivider from '../../assets/planit/bracket-divider.svg'

import guidanceAnnotation from '../../assets/planit/guidance-annotation.png'
import guidanceOriginal from '../../assets/planit/guidance-original.png'
import guidanceIteration from '../../assets/planit/guidance-iteration.png'
import guidanceRedesign from '../../assets/planit/guidance-redesign.png'

import realtimeAnnotation from '../../assets/planit/realtime-annotation.png'
import realtimeOriginal from '../../assets/planit/realtime-original.png'
import realtimeIteration from '../../assets/planit/realtime-iteration.png'
import realtimeRedesign from '../../assets/planit/realtime-redesign.png'

import hostcontrolsAnnotation from '../../assets/planit/hostcontrols-annotation.png'
import hostcontrolsOriginal from '../../assets/planit/hostcontrols-original.png'
import hostcontrolsIteration from '../../assets/planit/hostcontrols-iteration.png'
import hostcontrolsRedesign from '../../assets/planit/hostcontrols-redesign.png'

// Figma nodes:
// 1:278/1:853 — lead-in visual (flattened image)
// 1:279 + 1:1048/1:854/1:765/1:948 + 1:1165-1168 — host mode / friend mode overview row
// 1:762-764 — "Before → After" heading
// 1:74 + 1:1169-1171/1:76/1:1299/1:1218/1:1365/1:1362-1364 — "Increased guidance" flow
// 1:283 + 1:285-287/1:1453/1:1482/1:1610/1:1514/1:1511-1513 — "Real time collaborative itinerary" flow
// 1:284 + 1:288-290/1:1695/1:1750/1:1920/1:1801/1:1798-1800 — "Host controls" flow
export default function DesignDecisionsSection() {
  return (
    <div id="design-decisions" className="flex flex-col gap-4">
      {/* lead-in visual — node 1:278 (860x459 light-gray card) containing node 1:853
          (392x392 square video/image, centered — ~45.6% of the card's width, per Figma). */}
      <div className="flex aspect-[860/459] w-full items-center justify-center rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8]">
        <video
          src={introVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="PlanIT trip overview screen shown as a lead-in visual for the before/after comparison"
          className="aspect-square w-[45.6%] rounded-[8px] object-cover"
        />
      </div>

      {/* host mode / friend mode overview row — node 1:279.
          Below xl this becomes two clearly separate stacked groups (host pair + its own
          caption, then friend pair + its own caption) instead of cramming all 4 images
          into one row with a shared caption row that no longer lines up under anything. */}
      <div className="flex flex-col gap-7 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-3 py-7">
        {/* Mobile / tablet: grouped */}
        <div className="flex flex-col gap-7 xl:hidden">
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full justify-center gap-2">
              <img
                src={hostmodeOverview}
                alt="Host mode, Overview tab"
                width={392}
                height={819}
                className="w-[42vw] max-w-[204px] sm:w-[204px]"
              />
              <img
                src={hostmodeItinerary}
                alt="Host mode, Itinerary tab"
                width={392}
                height={819}
                className="w-[42vw] max-w-[204px] sm:w-[204px]"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={bracketDivider} alt="" className="h-[14px] w-full max-w-[219px]" />
              <p className="font-body text-[16px] font-bold tracking-[0.32px] text-[#2e9d8c]">
                Host mode
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full justify-center gap-2">
              <img
                src={friendmodeOverview}
                alt="Friend mode, Overview tab"
                width={392}
                height={819}
                className="w-[42vw] max-w-[204px] sm:w-[204px]"
              />
              <img
                src={friendmodeItinerary}
                alt="Friend mode, Itinerary tab"
                width={392}
                height={819}
                className="w-[42vw] max-w-[204px] sm:w-[204px]"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={bracketDivider} alt="" className="h-[14px] w-full max-w-[219px]" />
              <p className="font-body text-[16px] font-bold tracking-[0.32px] text-[#2e9d8c]">
                Friend mode
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: original single row of 4 + shared caption row */}
        <div className="hidden flex-col gap-7 xl:flex">
          <div className="flex items-start justify-between gap-2">
            <img src={hostmodeOverview} alt="Host mode, Overview tab" width={392} height={819} className="w-[204px]" />
            <img src={hostmodeItinerary} alt="Host mode, Itinerary tab" width={392} height={819} className="w-[204px]" />
            <img src={friendmodeOverview} alt="Friend mode, Overview tab" width={392} height={819} className="w-[204px]" />
            <img src={friendmodeItinerary} alt="Friend mode, Itinerary tab" width={392} height={819} className="w-[204px]" />
          </div>
          <div className="flex items-start justify-around">
            <div className="flex flex-col items-center gap-2">
              <img src={bracketDivider} alt="" className="h-[14px] w-full max-w-[219px]" />
              <p className="font-body text-[16px] font-bold tracking-[0.32px] text-[#2e9d8c]">
                Host mode
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={bracketDivider} alt="" className="h-[14px] w-full max-w-[219px]" />
              <p className="font-body text-[16px] font-bold tracking-[0.32px] text-[#2e9d8c]">
                Friend mode
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionHeading id="before-after" className="mt-16" subtitle="UX changes I made to optimize the planning experience">
        Before → After
      </SectionHeading>

      {/* Flow 1: Increased guidance — node 1:74 */}
      <div className="flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:gap-[42px] xl:px-[42px] xl:py-[42px]">
        <LabelValue label="Increased guidance">
          Friends now have a <span className="font-bold">clear call to action button</span>{' '}
          prompting them to &#8220;vote on date&#8221; rather than being overwhelmed with having to
          decide all important information without the thoughts of other friends.
        </LabelValue>
        <img
          src={guidanceAnnotation}
          alt="Host and friend Date Selection cards annotated with a call-to-action callout bracket"
          width={775}
          height={276}
          className="w-full rounded-[8px]"
        />
        <BeforeAfterRow
          original={{
            src: guidanceOriginal,
            alt: 'Original design: trip to-do screen with friends, availability, location, and activities cards',
            width: 744,
            height: 1612,
          }}
          iteration={{
            src: guidanceIteration,
            alt: 'Redesign iteration: trip screen with date selection and voting progress',
            width: 743,
            height: 1614,
          }}
          redesign={{
            src: guidanceRedesign,
            alt: 'Redesign: friend view itinerary screen with a clear vote-on-dates call to action',
            width: 754,
            height: 1630,
          }}
        />
      </div>

      {/* Flow 2: Real time collaborative itinerary — node 1:283 */}
      <div className="flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:gap-[42px] xl:px-[42px] xl:py-[42px]">
        <LabelValue label="Real time collaborative itinerary">
          Friends can now see <span className="font-bold">real time edits and reactions</span>,
          encouraging them to confidently leave suggestions accordingly. The confirmed itinerary is
          easily accessible but friends can still suggest.
        </LabelValue>
        <img
          src={realtimeAnnotation}
          alt="Activity suggestion card annotated with real time edit history and reactions"
          width={775}
          height={254}
          className="w-full rounded-[8px]"
        />
        <BeforeAfterRow
          original={{
            src: realtimeOriginal,
            alt: 'Original design: trip summary screen',
            width: 741,
            height: 1605,
          }}
          iteration={{
            src: realtimeIteration,
            alt: 'Redesign iteration: friend view itinerary with day tabs',
            width: 740,
            height: 1605,
          }}
          redesign={{
            src: realtimeRedesign,
            alt: 'Redesign: host view itinerary showing approve/decline and reactions',
            width: 764,
            height: 1622,
          }}
        />
      </div>

      {/* Flow 3: Host controls — node 1:284 */}
      <div className="flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:gap-[42px] xl:px-[42px] xl:py-[42px]">
        <LabelValue label="Host controls">
          Host can now see a summary of suggestions to &#8220;approve&#8221; or
          &#8220;decline&#8221; while maintaining control of important actions like finalizing a
          date and nudging friends. This helps forward the planning process.
        </LabelValue>
        <img
          src={hostcontrolsAnnotation}
          alt="Needs your review card and PlanAI assistant card annotated with host controls and AI assistant callouts"
          width={775}
          height={314}
          className="w-full rounded-[8px]"
        />
        <BeforeAfterRow
          original={{
            src: hostcontrolsOriginal,
            alt: 'Original design: host view overview screen',
            width: 740,
            height: 1603,
          }}
          iteration={{
            src: hostcontrolsIteration,
            alt: 'Redesign iteration: host view overview screen',
            width: 745,
            height: 1603,
          }}
          redesign={{
            src: hostcontrolsRedesign,
            alt: 'Redesign: host view post-invite overview with approve/decline controls',
            width: 751,
            height: 1603,
          }}
        />
      </div>
    </div>
  )
}
