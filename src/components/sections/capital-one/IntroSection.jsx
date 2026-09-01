import heroScreen1 from '../../../assets/capital-one/context-hero-screen-1.png'
import heroScreen2 from '../../../assets/capital-one/context-hero-screen-2.png'
import heroScreen3 from '../../../assets/capital-one/context-hero-screen-3.png'
import contextCard from '../../../assets/capital-one/context-card.png'
import contextMvp from '../../../assets/capital-one/context-mvp-screenshot.png'
import contextArrow from '../../../assets/capital-one/context-arrow.svg'
import briefcaseIcon from '../../../assets/capital-one/briefcase.svg'
import SectionHeading from '../../ui/SectionHeading.jsx'
import Pill from '../../ui/Pill.jsx'

const ACCENT = '#013c5b'

// Same plain-<p> meta format as PlanIT's IntroSection (not the shared
// LabelValue component — LabelValue's explicit leading-normal renders taller
// than Figma's actual ~19px single-line text height here).
const metaRowClass = 'flex flex-col gap-1'
const metaLabelClass = 'font-body text-[16px] tracking-[0.32px] text-black/50'
const metaValueClass = 'font-body text-[16px] tracking-[0.32px] text-black whitespace-nowrap'

// Figma node 510:1241 ("capital one case 1.2") — this replaces the old navy
// hero banner + teal Context panel + separate Challenge card entirely. Title
// is now lowercase Domine Bold 60px with an italic-accent subtitle line
// (nodes 510:1534-1536); Role/Duration/Tools/Team (510:1538-1551) sit to its
// right instead of in their own card. Below that, three individually
// bordered phone screenshots (510:1463-1465) replace the single navy banner.
// The "context" heading (571:6969) is new — pills + description (510:1401,
// 510:1421) moved under it, plain gray instead of the old teal panel, and a
// new "What is the funding component?" diagram (571:6978-6993) was added.
export default function IntroSection() {
  return (
    <div id="context" className="flex flex-col">
      <div className="flex flex-col gap-6 xl:-mx-[70px] xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-2">
          <h1 id="capital-one-title" className="font-display text-[60px] font-bold tracking-[0.1px] text-black">
            capital one
          </h1>
          <p className="max-w-[416px] font-body text-[20px] tracking-[0.4px] text-black">
            Identifying ways to{' '}
            <span className="font-accent italic">optimize the funding</span> portal experience for
            customers
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 xl:flex-nowrap xl:shrink-0 xl:gap-x-14">
          <div className="flex flex-col gap-4">
            <div className={metaRowClass}>
              <p className={metaLabelClass}>Role</p>
              <p className={metaValueClass}>Product Design Intern</p>
            </div>
            <div className={metaRowClass}>
              <p className={metaLabelClass}>Duration</p>
              <p className={metaValueClass}>Summer 2025</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className={metaRowClass}>
              <p className={metaLabelClass}>Tools</p>
              <p className={metaValueClass}>Figma, Lucid, UserTesting</p>
            </div>
            <div className={metaRowClass}>
              <p className={metaLabelClass}>Team</p>
              <p className="font-body text-[16px] tracking-[0.32px] text-black">
                UX, Research, Product,
                <br />
                Business, Marketing
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[100px] flex flex-wrap items-center justify-center gap-4 rounded-[8px] bg-[#f8f8f8] px-6 py-8 xl:flex-nowrap xl:gap-[25px] xl:px-[70px]">
        <img
          src={heroScreen1}
          alt="Funding component MVP — deposit confirmation, dimmed"
          className="h-auto w-[28%] max-w-[224px] rounded-[16px] border-[3px] border-[#e3e3e3] xl:h-[491px] xl:w-[224px]"
        />
        <img
          src={heroScreen2}
          alt="Funding component MVP — deposit amount slider"
          className="h-auto w-[28%] max-w-[222px] rounded-[16px] border-[3px] border-[#e3e3e3] xl:h-[491px] xl:w-[222px]"
        />
        <img
          src={heroScreen3}
          alt="Funding component MVP — refundable deposit tutorial overlay"
          className="h-auto w-[28%] max-w-[227px] rounded-[16px] border-[3px] border-[#e3e3e3] xl:h-[491px] xl:w-[227px]"
        />
      </div>

      <div className="mt-[100px] flex flex-col gap-6">
        <SectionHeading accent accentColor={ACCENT}>
          context
        </SectionHeading>

        <div className="flex flex-wrap gap-4">
          <Pill icon={briefcaseIcon} hoverable={false} tone="outline">Product Design Internship</Pill>
          <Pill hoverable={false} tone="outline">UX Research</Pill>
          <Pill hoverable={false} tone="outline">Design Strategy</Pill>
        </div>

        <div className="rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10">
          <p className="font-body text-[16px] tracking-[0.32px] text-black">
            Over the course of 10 weeks, I had the honor of joining the Platinum Secured Credit Card
            team which serves 100 million customers. My scope covers optimizing the{' '}
            <span className="font-bold">funding component</span> alongside recommending the best{' '}
            <span className="font-bold">third party payment</span> method in the funding portal.
          </p>
        </div>

        <div className="flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10">
          <p className="font-body text-[20px] font-medium text-black">
            What is the funding component?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 xl:flex-nowrap xl:gap-10">
            <div className="flex flex-col items-center gap-3">
              <img
                src={contextCard}
                alt="Capital One Platinum Secured Credit Card"
                className="w-[134px] rounded-[8px]"
              />
              <p className="whitespace-nowrap font-body text-[16px] text-black">
                Platinum Secured Credit Card
              </p>
            </div>
            <img src={contextArrow} alt="" className="h-4 w-[18px] shrink-0" aria-hidden="true" />
            <img
              src={contextMvp}
              alt="Funding Portal deposit amount screen"
              className="w-[136px] rounded-[8px] border-2 border-[#e3e3e3]"
            />
            <div className="flex flex-col items-center gap-3">
              <p className="max-w-[189px] text-center font-body text-[16px] text-black">
                <span className="font-bold">Funding Portal</span> to choose deposit amount $
              </p>
              <img src={contextArrow} alt="" className="h-[18px] w-4 rotate-90 shrink-0" aria-hidden="true" />
              <p className="max-w-[189px] text-center font-body text-[16px] text-black">
                <span className="font-bold">Funding Component</span> is the center infographic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
