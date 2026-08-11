import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import researchScript from '../../../assets/capital-one/test-research-script.png'
import synthesisLucid from '../../../assets/capital-one/test-synthesis-lucid.png'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10'

// Figma nodes 39:2266-2268 (heading), 39:2212/2272/2241-2243 (research script),
// 39:2213/2273-2274/2244-2246 (synthesis pair)
export default function TestSection() {
  return (
    <div id="test" className="flex flex-col gap-6">
      <SectionHeading className="mt-16" subtitle="Launch and synthesize">
        Test
      </SectionHeading>

      <div className="flex flex-col gap-4">
        <div className={cardClass}>
          <LabelValue label="Creating a Research Script">
            I collaborated with design researchers to solidify two types of tests to launch on
            UserTesting.
          </LabelValue>
          <img
            src={researchScript}
            alt="UserTesting research script with example questions"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className={cardClass}>
          <LabelValue label="Synthesizing Research Results">
            I gathered key findings on Lucid after viewing all 24 UserTesting videos. This helped
            me make final A/B testing recommendations.
          </LabelValue>
          <img
            src={synthesisLucid}
            alt="Rapid prioritization board and key findings from 24 tests"
            className="w-full rounded-[8px]"
          />
        </div>
      </div>
    </div>
  )
}
