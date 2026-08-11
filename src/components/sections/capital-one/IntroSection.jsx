import briefcaseIcon from '../../../assets/capital-one/briefcase.svg'
import dividerSvg from '../../../assets/capital-one/divider-vector.svg'
import heroScreen1 from '../../../assets/capital-one/hero-screen-1.png'
import heroScreen2 from '../../../assets/capital-one/hero-screen-2.png'
import heroScreen3 from '../../../assets/capital-one/hero-screen-3.png'
import Pill from '../../ui/Pill.jsx'
import TealPanel from '../../ui/TealPanel.jsx'
import LabelValue from '../../ui/LabelValue.jsx'

// Figma nodes 39:2220 (hero bg) + 39:2222/39:2223/39:2224 (phone screens), 39:2156
// (title), 39:2160/39:2225/39:2227 (tag pills), 39:2157/39:2178-2180 (Context
// panel), 39:2187/39:2200-2202/39:2203/39:2188-2199 (Challenge + divider + meta)
export default function IntroSection() {
  return (
    <div id="context" className="flex flex-col gap-[40px]">
      {/* Hero banner: navy card, 3 phone screens inset from the top/sides, flush
          with the box's bottom edge. Below xl the phones drop into a centered,
          non-wrapping flex row sized by percentage so all three stay on one line
          and the bottom edge stays flush at any width. */}
      <div className="relative flex justify-center overflow-hidden rounded-[8px] bg-[#163b58] px-[21px] pt-[21px] xl:h-[468px] xl:w-full xl:justify-start xl:px-[52px] xl:pt-[52px]">
        <div className="flex w-full flex-nowrap justify-center gap-4 xl:absolute xl:top-[52px] xl:left-[52px] xl:w-auto">
          <img
            src={heroScreen3}
            alt="Capital One funding component — confirmation modal"
            className="h-auto w-[31%] max-w-[242px] shrink-0 rounded-t-[8px] xl:h-[416px] xl:w-[242px]"
          />
          <img
            src={heroScreen2}
            alt="Capital One funding component — deposit amount gauge"
            className="h-auto w-[31%] max-w-[240px] shrink-0 rounded-t-[8px] xl:h-[416px] xl:w-[240px]"
          />
          <img
            src={heroScreen1}
            alt="Capital One funding component — tutorial overlay"
            className="h-auto w-[31%] max-w-[241px] shrink-0 rounded-t-[8px] xl:h-[416px] xl:w-[241px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 id="capital-one-title" className="font-heading text-[40px] font-bold tracking-[0.1px] text-black">
          Capital One
        </h1>
        <div className="flex flex-wrap gap-4">
          <Pill icon={briefcaseIcon} hoverable={false}>Product Design Internship</Pill>
          <Pill hoverable={false}>UX Research</Pill>
          <Pill hoverable={false}>Design Strategy</Pill>
        </div>
      </div>

      <TealPanel color="#163b58" className="px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <LabelValue label="Context" light>
          Over the course of 10 weeks, I had the honor of joining the Platinum Secured Credit Card
          team which serves 100 million customers. My scope covers optimizing the funding component
          alongside recommending the best third party payment method in the funding portal.
        </LabelValue>
      </TealPanel>

      <div className="flex flex-col gap-[37px] rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-[50px]">
        <LabelValue label="Challenge">
          Study the existing MVP experience and identify ways to optimize the funding component.
        </LabelValue>
        <img src={dividerSvg} alt="" className="w-full h-px" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <LabelValue label="Role">Product Design Intern</LabelValue>
          <LabelValue label="Duration">Summer 2025</LabelValue>
          <LabelValue label="Tools">Figma, Lucid, UserTesting</LabelValue>
          <LabelValue label="Team">UX, Research, Product, Business, Marketing</LabelValue>
        </div>
      </div>
    </div>
  )
}
