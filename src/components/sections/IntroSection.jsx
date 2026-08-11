import trophyIcon from '../../assets/planit/trophy.svg'
import readHereIcon from '../../assets/planit/paper-outline.svg'
import dividerSvg from '../../assets/planit/divider-vector-15.svg'
import heroHostInvite1 from '../../assets/planit/hero-host-invite-1.png'
import heroHostInvite2 from '../../assets/planit/hero-host-invite-2.png'
import heroFriendView from '../../assets/planit/hero-friend-view.png'
import Pill from '../ui/Pill.jsx'
import TealPanel from '../ui/TealPanel.jsx'
import LabelValue from '../ui/LabelValue.jsx'

// Figma nodes 1:448 (hero bg) + 1:629/1:535/1:449 (phone screens), 1:77 (logo),
// 1:80/1:96 (tag pills), 1:78/1:98 (Context panel), 1:105/1:118/1:106-115 (Challenge + meta)
export default function IntroSection() {
  return (
    <div id="context" className="flex flex-col gap-[40px]">
      {/* Hero banner: dark card, 3 phone screens bleeding off the bottom edge.
          Below xl the phones drop out of absolute positioning into a centered,
          non-wrapping flex row sized by percentage — nowrap guarantees all three
          stay on one line and their bottoms always land flush with the box's
          bottom edge (no bottom padding), preserving the "bleed" look at any width. */}
      <div className="relative flex justify-center overflow-hidden rounded-[8px] bg-[#2b2b2b] px-6 pt-6 xl:h-[468px] xl:w-full xl:justify-start xl:p-0">
        <div className="flex w-full flex-nowrap justify-center gap-2 xl:absolute xl:top-[39px] xl:left-[74px] xl:w-auto xl:gap-[11px]">
          <img
            src={heroHostInvite1}
            alt="PlanIT — host invite screen"
            className="h-auto w-[30%] max-w-[230px] shrink-0 rounded-t-[8px] xl:w-[230px] xl:h-[429px]"
          />
          <img
            src={heroHostInvite2}
            alt="PlanIT — host invite screen, itinerary"
            className="h-auto w-[30%] max-w-[230px] shrink-0 rounded-t-[8px] xl:w-[230px] xl:h-[429px]"
          />
          <img
            src={heroFriendView}
            alt="PlanIT — friend view screen"
            className="h-auto w-[30%] max-w-[230px] shrink-0 rounded-t-[8px] xl:w-[230px] xl:h-[429px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-heading text-[40px] font-bold tracking-[0.1px] text-black">PlanIT</h1>
        <div className="flex flex-wrap gap-4">
          <Pill icon={trophyIcon} hoverable={false} data-nav-target="most-innovative-ux">Most Innovative UX</Pill>
          <Pill hoverable={false}>Redesign</Pill>
        </div>
      </div>

      <TealPanel className="px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <LabelValue label="Context" light>
          I designed this app three years ago. Now, with a lot more experience, I came back to
          redesign it and rethink the gaps I hadn&apos;t noticed before.
        </LabelValue>
      </TealPanel>

      <div className="flex flex-col gap-[37px] rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-[50px]">
        <LabelValue label="The Challenge">
          Develop a mobile application that enables users to effortlessly plan memorable trips.
        </LabelValue>
        <img src={dividerSvg} alt="" className="w-full h-px" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <LabelValue label="Role">Product designer</LabelValue>
          <LabelValue label="Duration">3 months</LabelValue>
          <LabelValue label="Tools">Figma and Claude</LabelValue>
          <LabelValue label="Team">4 designers</LabelValue>
        </div>
      </div>
    </div>
  )
}
