import trophyIcon from '../../assets/planit/trophy.svg'
import arrowRightIcon from '../../assets/planit/arrow-right.svg'
import heroHostInvite1 from '../../assets/planit/hero-host-invite-1.png'
import heroHostInvite2 from '../../assets/planit/hero-host-invite-2.png'
import heroFriendView from '../../assets/planit/hero-friend-view.png'
import heroFriendView2 from '../../assets/planit/hero-friend-view-2.png'
import Pill from '../ui/Pill.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const metaRowClass = 'flex flex-col gap-1'
const metaLabelClass = 'font-body text-[16px] tracking-[0.32px] text-black/50'
const metaValueClass = 'font-body text-[16px] tracking-[0.32px] text-black whitespace-nowrap'

// Figma nodes 475:7809 (title + subtitle), 475:8215 (meta grid), 475:7812 (hero bg)
// + 475:7813/7899/7993/8110 (phone screens), 475:8210 (context heading), 475:8380/
// 8392 (tag pills), 475:8211-8213 (why-redesign panel).
//
// The title/meta row and hero image are the one part of the page that bleeds past
// the case study's normal 860px content column: in Figma they span the full
// 1000px inner-body width (0 to 1000, no side inset), 70px wider on each side than
// every card below "context" (which sit inset at 70 to 930). `xl:-mx-[70px]`
// reproduces that bleed inside PlanIT.jsx's 860px-constrained column.
export default function IntroSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 xl:-mx-[70px] xl:flex-row xl:items-center xl:justify-between xl:gap-12">
        <div className="flex min-w-0 flex-col gap-2">
          <h1 className="font-display text-[60px] font-bold tracking-[0.1px] text-black">planit</h1>
          <p className="font-body text-[20px] tracking-[0.48px] text-black">
            Developing a mobile application that enables users to
            <br />
            <span className="font-accent font-semibold italic">effortlessly</span>{' '}
            <span className="underline">plan</span> memorable trips
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 xl:flex-nowrap xl:shrink-0 xl:gap-x-10">
          <div className="flex flex-col gap-4">
            <div className={metaRowClass}>
              <p className={metaLabelClass}>Role</p>
              <p className={metaValueClass}>UX designer</p>
            </div>
            <div className={metaRowClass}>
              <p className={metaLabelClass}>Duration</p>
              <p className={metaValueClass}>3 months</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className={metaRowClass}>
              <p className={metaLabelClass}>Tools</p>
              <p className={metaValueClass}>Figma and Claude</p>
            </div>
            <div className={metaRowClass}>
              <p className={metaLabelClass}>Team</p>
              <p className={metaValueClass}>4 designers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero banner: light card (#f8f8f8, matches every other content card on the
          page), full 1000px bleed width, 4 phone screens (2 host mode/blue, 2
          friend mode/teal) at their native 226x481 size, centered with ~48px
          top/bottom padding and ~32px side margins — they sit inside the card, not
          bleeding off its edge. Below xl the phones drop out of absolute
          positioning into a centered, non-wrapping flex row sized by percentage so
          the "framed" look survives at any width. */}
      <div className="relative mt-10 flex justify-center overflow-hidden rounded-[8px] bg-[#f8f8f8] px-6 py-6 xl:mt-[100px] xl:h-[578px] xl:w-[1000px] xl:-mx-[70px] xl:justify-start xl:p-0">
        <div className="flex w-full flex-nowrap justify-center gap-2 xl:absolute xl:top-[48px] xl:left-[32px] xl:w-auto xl:gap-[11px]">
          <div className="h-auto w-[23%] max-w-[230px] shrink-0 overflow-hidden rounded-[16px] border-2 border-[#e3e3e3] bg-white xl:h-[481px] xl:w-[226px]">
            <img
              src={heroHostInvite1}
              alt="PlanIT — host mode invite screen"
              className="size-full object-cover"
            />
          </div>
          <div className="h-auto w-[23%] max-w-[230px] shrink-0 overflow-hidden rounded-[16px] border-2 border-[#e3e3e3] bg-white xl:h-[481px] xl:w-[226px]">
            <img
              src={heroHostInvite2}
              alt="PlanIT — host mode invite screen, itinerary"
              className="size-full object-cover"
            />
          </div>
          <div className="h-auto w-[23%] max-w-[230px] shrink-0 overflow-hidden rounded-[16px] border-2 border-[#e3e3e3] bg-white xl:h-[481px] xl:w-[226px]">
            <img
              src={heroFriendView}
              alt="PlanIT — friend mode view screen"
              className="size-full object-cover"
            />
          </div>
          <div className="h-auto w-[23%] max-w-[230px] shrink-0 overflow-hidden rounded-[16px] border-2 border-[#e3e3e3] bg-white xl:h-[481px] xl:w-[226px]">
            <img
              src={heroFriendView2}
              alt="PlanIT — friend mode view screen, itinerary"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Spacing from here on matches the rest of the case study: 100px above
          each accent heading, 32px/16px below per element (see SectionHeading
          call sites throughout for the same constants). */}
      <div id="context" className="mt-10 flex flex-col xl:mt-[100px]">
        <SectionHeading id="context-heading" accent>context</SectionHeading>
        <div className="mt-4 flex flex-wrap gap-4">
          <Pill icon={trophyIcon} hoverable={false} tone="outline" data-nav-target="most-innovative-ux">
            Most Innovative UX
          </Pill>
          <Pill hoverable={false} tone="outline">Redesign</Pill>
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:flex-row xl:items-center xl:justify-center xl:gap-0 xl:px-[42px] xl:py-[40px]">
          <p className="font-body text-[20px] font-medium tracking-[0.1px] text-black xl:mr-[136px]">why redesign?</p>
          <img src={arrowRightIcon} alt="" className="hidden size-6 shrink-0 xl:mr-[115px] xl:block" aria-hidden="true" />
          <p className="font-body text-[16px] tracking-[0.32px] text-black xl:max-w-[233px]">
            3 years post design... I noticed significant gaps in ux logic
          </p>
        </div>
      </div>
    </div>
  )
}
