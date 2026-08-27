import SectionHeading from '../ui/SectionHeading.jsx'
import LabelValue from '../ui/LabelValue.jsx'
import BeforeAfterRow from '../ui/BeforeAfterRow.jsx'

import introVideo from '../../assets/planit/planit-mock-clip.mp4'
import hostmodeOverview from '../../assets/planit/planit1.png'
import hostmodeItinerary from '../../assets/planit/planit2.png'
import friendmodeOverview from '../../assets/planit/planit3.png'
import friendmodeItinerary from '../../assets/planit/planit4.png'
import bracketDivider from '../../assets/planit/bracket-divider.svg'
import bracketDividerBlue from '../../assets/planit/bracket-divider-blue.svg'

import guidanceIconCalendar from '../../assets/planit/guidance-icon-calendar.svg'
import guidanceIconBell from '../../assets/planit/guidance-icon-bell.svg'
import guidanceIconAi from '../../assets/planit/guidance-icon-ai.svg'
import guidanceIconWrapText from '../../assets/planit/guidance-icon-wraptext.svg'
import guidanceAvatar1 from '../../assets/planit/guidance-avatar-1.jpg'
import guidanceAvatar2 from '../../assets/planit/guidance-avatar-2.jpg'
import guidanceAvatar3 from '../../assets/planit/guidance-avatar-3.jpg'
import guidanceAvatar4 from '../../assets/planit/guidance-avatar-4.jpg'
import guidanceOriginal from '../../assets/planit/guidance-original.png'
import guidanceIteration from '../../assets/planit/guidance-iteration.png'
import guidanceRedesign from '../../assets/planit/guidance-redesign.png'

import realtimeAnnotation from '../../assets/planit/realtime-annotation.png'
import realtimeOriginal from '../../assets/planit/realtime-original.png'
import realtimeIteration from '../../assets/planit/realtime-iteration.png'

import hostcontrolsAnnotation from '../../assets/planit/hostcontrols-annotation.png'
import hostcontrolsOriginal from '../../assets/planit/hostcontrols-original.png'
import hostcontrolsIteration from '../../assets/planit/hostcontrols-iteration.png'
import hostcontrolsRedesign from '../../assets/planit/hostcontrols-redesign.png'

const GUIDANCE_AVATARS = [guidanceAvatar1, guidanceAvatar2, guidanceAvatar3, guidanceAvatar4]

// Node 1:1299/1:1218 — "Increased guidance" flow's Host/Friend annotation. Pulled
// directly from Figma's own nodes (fileKey 7Lqz3YVJinUTchj8MAwTUk, nodes under
// 531:1606) rather than eyeballed: the pill fill is a shared 10%-opacity teal tint
// behind either blue (Host) or teal (Friend) border/text, "Date Selection" gets a
// real calendar glyph, "Nudge" a real bell glyph, "Waiting on" real avatar photos
// (Figma's own raw image fills, cropped square), the progress bar is #dcdcdc with a
// blue fill bordered in the track color, and the bracket is a blue-to-teal gradient
// (Figma's own linear-gradient fill) rather than a flat color, matching Host on the
// left fading to Friend on the right. Sizing: 775x276 container, 51px side padding,
// 254x144.5 Host card at 37.7% of the padded row, 301.5x107.4 Friend card at 44.8% —
// the two cards are NOT equal width, unlike an even flex-1 split.
function GuidanceAnnotation() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[8px] border-[0.5px] border-[#ddd] bg-white px-6 py-6 xl:px-[51px] xl:pt-7 xl:pb-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Host card — 37.7% of the row */}
        <div className="flex w-full flex-col gap-2 sm:w-[37.7%]">
          <span className="w-fit rounded-full border border-[#1b6d99] bg-[rgba(46,157,140,0.1)] px-3 py-[2px] font-body text-[13px] font-bold text-[#1b6d99]">
            Host
          </span>
          <div className="flex flex-col rounded-[5.613px] border-[0.351px] border-[#ddd] bg-[#f8f8f8] p-4">
            <div className="flex items-center justify-between">
              <div className="flex shrink-0 items-center gap-[5.613px]">
                <img src={guidanceIconCalendar} alt="" className="size-[11.227px] shrink-0" aria-hidden="true" />
                <p className="whitespace-nowrap font-body text-[9.823px] font-bold leading-[14.033px] tracking-[0.0702px] text-black">
                  Date Selection
                </p>
              </div>
              <p className="whitespace-nowrap font-body text-[8.42px] font-normal leading-[14.033px] tracking-[0.0702px] text-black">
                Auto locks in 3 days
              </p>
            </div>
            <p className="mt-[4.65px] font-body text-[11.227px] font-bold leading-[14.033px] tracking-[0.0702px] text-[#1b6d99]">
              Aug 10-16 is leading.
            </p>
            <div className="mt-[11px] flex items-center gap-2">
              <p className="whitespace-nowrap font-body text-[8.42px] font-normal leading-[14.033px] tracking-[0.0702px] text-[#5c5c5c]">
                Waiting on
              </p>
              <div className="flex gap-[2.81px]">
                {GUIDANCE_AVATARS.map((avatar, i) => (
                  <img key={avatar} src={avatar} alt="" className="size-[14.033px] rounded-full border-[0.175px] border-[#ddd] object-cover" />
                ))}
              </div>
            </div>
            <div className="mt-[3.94px] h-[8.42px] w-full rounded-[5.613px] bg-[#dcdcdc]">
              <div className="h-full w-[50.8%] rounded-[5.613px] bg-[#1b6d99]" />
            </div>
            <div className="mt-[14.03px] flex gap-[5.613px]">
              <button type="button" className="flex h-[24.558px] flex-1 items-center justify-center rounded-[11.227px] border-[0.702px] border-[#1b6d99] font-body text-[8.42px] font-bold leading-[14.033px] tracking-[0.0702px] text-[#1b6d99] shadow-[0px_2.807px_5.613px_0px_rgba(0,0,0,0.1)]">
                End voting
              </button>
              <button type="button" className="flex h-[24.558px] flex-1 items-center justify-center gap-[5.613px] rounded-[11.227px] bg-[#1b6d99] font-body text-[8.42px] font-bold leading-[14.033px] tracking-[0.0702px] text-white shadow-[0px_2.807px_5.613px_0px_rgba(0,0,0,0.1)]">
                <img src={guidanceIconBell} alt="" className="size-[9.823px]" aria-hidden="true" />
                Nudge
              </button>
            </div>
          </div>
        </div>

        {/* Friend card — 44.8% of the row */}
        <div className="flex w-full flex-col gap-2 sm:w-[44.8%]">
          <span className="w-fit rounded-full border border-[#2e9d8c] bg-[rgba(46,157,140,0.1)] px-3 py-[2px] font-body text-[13px] font-bold text-[#2e9d8c]">
            Friend
          </span>
          <div className="flex flex-col gap-[10px] rounded-[6.696px] border-[0.419px] border-[#ddd] bg-[#f8f8f8] px-[21px] py-4">
            <div className="flex items-center gap-[6.696px]">
              <img src={guidanceIconAi} alt="" className="size-[13.392px] shrink-0" aria-hidden="true" />
              <p className="whitespace-nowrap font-body text-[11.718px] font-bold leading-[16.74px] tracking-[0.0837px] text-black">
                PlanAI Itinerary
              </p>
            </div>
            <div className="flex items-start gap-[3.348px]">
              <img src={guidanceIconWrapText} alt="" className="mt-0.5 size-[13.392px] shrink-0 rotate-180" aria-hidden="true" />
              <p className="font-body text-[10.044px] font-normal leading-[14px] tracking-[0.0837px] text-[#5c5c5c]">
                9 suggestions this week. Want to suggest activities for the itinerary?
              </p>
            </div>
            <button
              type="button"
              className="flex h-[29.296px] w-full items-center justify-center rounded-[13.392px] border-[0.419px] border-[#ddd] bg-[rgba(46,157,140,0.1)] font-body text-[10.044px] font-bold leading-[16.74px] tracking-[0.0837px] text-[#2e9d8c]"
            >
              Go to section
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex w-[54.4%] items-center">
          <span className="size-[6px] shrink-0 rounded-full bg-[#1b6d99]" />
          <span className="h-px flex-1 bg-gradient-to-r from-[#1b6d99] to-[#2e9d8c]" />
          <span className="size-[6px] shrink-0 rounded-full bg-[#2e9d8c]" />
        </div>
        <p className="mt-2 font-body text-[16px] font-bold tracking-[0.32px] text-[#2e9d8c]">call to action</p>
      </div>
    </div>
  )
}

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
      <div className="flex flex-col gap-7 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] p-[22px]">
        {/* Mobile / tablet: grouped */}
        <div className="flex flex-col gap-7 xl:hidden">
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full justify-center gap-4">
              <div className="w-[42vw] max-w-[192px] aspect-[192/404] overflow-hidden rounded-[16px] sm:w-[192px]">
                <img src={hostmodeOverview} alt="Host mode, Overview tab" width={860} height={1830} className="size-full object-cover object-top" />
              </div>
              <div className="w-[42vw] max-w-[192px] aspect-[192/404] overflow-hidden rounded-[16px] sm:w-[192px]">
                <img src={hostmodeItinerary} alt="Host mode, Itinerary tab" width={860} height={1830} className="size-full object-cover object-top" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={bracketDividerBlue} alt="" className="h-[14px] w-full max-w-[219px]" />
              <p className="font-body text-[16px] font-bold tracking-[0.32px] text-[#1b6d99]">
                Host mode
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full justify-center gap-4">
              <div className="w-[42vw] max-w-[192px] aspect-[192/404] overflow-hidden rounded-[16px] sm:w-[192px]">
                <img src={friendmodeOverview} alt="Friend mode, Overview tab" width={860} height={1830} className="size-full object-cover object-top" />
              </div>
              <div className="w-[42vw] max-w-[192px] aspect-[192/404] overflow-hidden rounded-[16px] sm:w-[192px]">
                <img src={friendmodeItinerary} alt="Friend mode, Itinerary tab" width={860} height={1830} className="size-full object-cover object-top" />
              </div>
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
          <div className="flex items-start gap-4">
            <div className="w-[192px] aspect-[192/404] overflow-hidden rounded-[16px]">
              <img src={hostmodeOverview} alt="Host mode, Overview tab" width={860} height={1830} className="size-full object-cover object-top" />
            </div>
            <div className="w-[192px] aspect-[192/404] overflow-hidden rounded-[16px]">
              <img src={hostmodeItinerary} alt="Host mode, Itinerary tab" width={860} height={1830} className="size-full object-cover object-top" />
            </div>
            <div className="w-[192px] aspect-[192/404] overflow-hidden rounded-[16px]">
              <img src={friendmodeOverview} alt="Friend mode, Overview tab" width={860} height={1830} className="size-full object-cover object-top" />
            </div>
            <div className="w-[192px] aspect-[192/404] overflow-hidden rounded-[16px]">
              <img src={friendmodeItinerary} alt="Friend mode, Itinerary tab" width={860} height={1830} className="size-full object-cover object-top" />
            </div>
          </div>
          <div className="flex items-start justify-around">
            <div className="flex flex-col items-center gap-2">
              <img src={bracketDividerBlue} alt="" className="h-[14px] w-full max-w-[219px]" />
              <p className="font-body text-[16px] font-bold tracking-[0.32px] text-[#1b6d99]">
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

      <SectionHeading id="before-after" accent className="mt-[84px]">
        before → after
      </SectionHeading>

      {/* Flow 1: Increased guidance — node 1:74 */}
      <div className="mt-4 flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:gap-[42px] xl:px-[42px] xl:py-[42px]">
        <LabelValue label="Increased guidance">
          Friends now have a <span className="font-bold">clear call to action button</span>{' '}
          prompting them to &#8220;vote on date&#8221; rather than being overwhelmed with having to
          decide all important information without the thoughts of other friends.
        </LabelValue>
        <GuidanceAnnotation />
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
        <div className="flex w-full flex-col items-center rounded-[8px] bg-white pb-6">
          <img
            src={realtimeAnnotation}
            alt="Activity suggestion card annotated with real time edit history and reactions"
            width={775}
            height={207}
            className="w-full rounded-t-[8px]"
          />
          <p className="mt-2 font-body text-[16px] font-bold tracking-[0.32px] text-[#2e9d8c]">
            real time edit history &amp; reactions
          </p>
        </div>
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
            src: hostmodeItinerary,
            alt: 'Redesign: host view itinerary showing approve/decline and reactions',
            width: 860,
            height: 1830,
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
        <div className="relative w-full">
          <img
            src={hostcontrolsAnnotation}
            alt="Needs your review card and PlanAI assistant card annotated with host controls and AI assistant callouts"
            width={775}
            height={314}
            className="w-full rounded-[8px]"
          />
          {/* host controls callout — recolored blue per design feedback (was teal to match AI assistant) */}
          <span
            className="absolute size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b6d99]"
            style={{ left: '9.74%', top: '70.06%' }}
          />
          <span className="absolute w-px bg-[#1b6d99]" style={{ left: '9.74%', top: '70.06%', height: '9.87%' }} />
          <span className="absolute h-px bg-[#1b6d99]" style={{ left: '9.74%', top: '79.94%', width: '13.42%' }} />
          <span
            className="absolute size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b6d99]"
            style={{ left: '23.16%', top: '79.94%' }}
          />
          <p
            className="absolute font-body text-[16px] font-bold tracking-[0.32px] text-[#1b6d99]"
            style={{ left: '10.9%', top: '85.5%' }}
          >
            host controls
          </p>
          <p
            className="absolute font-body text-[16px] font-bold tracking-[0.32px] text-[#2e9d8c]"
            style={{ left: '64.2%', top: '11.5%' }}
          >
            AI assistant
          </p>
        </div>
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
