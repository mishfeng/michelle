import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import problemVideo from '../../../assets/capital-one/c1-problem.mp4'
import existingFlow from '../../../assets/capital-one/problem-existing-flow.png'
import goalsScan from '../../../assets/capital-one/problem-competitor-scan.png'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10'
const imageCardClass =
  'flex items-center justify-center rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] p-6 xl:p-10'

// Figma nodes 39:2184-2186 (heading), 39:2159/2277 (MVP photo), 39:2158/2181-2183
// (funding component definition), 39:2219/2230 + 39:2208/2229 (research boards)
export default function ProblemSection() {
  return (
    <div id="problem" className="flex flex-col gap-6">
      <SectionHeading className="mt-16" subtitle="Researching and aligning">
        Problem
      </SectionHeading>

      <div className="flex flex-col gap-4">
        <div className={imageCardClass}>
          <video
            src={problemVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Exploring the existing funding component experience"
            className="w-full max-w-[687px] rounded-[8px]"
          />
        </div>

        <div className={cardClass}>
          <LabelValue label="I had to familiarize myself">
            What even is the funding component? Part of the Platinum Secured Credit Card&apos;s
            Funding Portal! Customers put down a deposit that becomes their credit line. The{' '}
            <span className="font-bold">funding component</span> is the part of the experience
            where <span className="font-bold">customers choose their deposit amount</span>.
          </LabelValue>
        </div>

        <div className={imageCardClass}>
          <img
            src={existingFlow}
            alt="Existing funding component flow: deposit amount, main goals, and resulting card"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className={imageCardClass}>
          <img
            src={goalsScan}
            alt="User goals and business goals for the funding component"
            className="w-full rounded-[8px]"
          />
        </div>
      </div>
    </div>
  )
}
