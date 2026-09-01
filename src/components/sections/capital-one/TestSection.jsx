import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import researchScript from '../../../assets/capital-one/test-research-script.png'
import synthesisLeft from '../../../assets/capital-one/test-synthesis-left.png'
import synthesisRight from '../../../assets/capital-one/test-synthesis-right.png'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10'

// Figma node 510:1241 — heading is now lowercase accent-style with no
// subtitle. The synthesis screenshot split into two side-by-side images (the
// rapid-prioritization board and the "Key Findings from 24 Tests" card),
// replacing the old single combined synthesisLucid image.
export default function TestSection() {
  return (
    <div id="test" className="flex flex-col gap-6">
      <SectionHeading accent accentColor="#013c5b" className="mt-16">
        test
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
          <div className="flex flex-wrap items-start gap-4">
            <img
              src={synthesisLeft}
              alt="Rapid prioritization board of test findings"
              className="rounded-[8px]"
              style={{ flex: '312 1 0', minWidth: '220px' }}
            />
            <img
              src={synthesisRight}
              alt="Key findings from 24 tests"
              className="rounded-[8px]"
              style={{ flex: '482 1 0', minWidth: '260px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
