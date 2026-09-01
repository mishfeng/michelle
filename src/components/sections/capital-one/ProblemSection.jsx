import SectionHeading from '../../ui/SectionHeading.jsx'
import mainGoals from '../../../assets/capital-one/problem-main-goals.png'
import userBusinessGoals from '../../../assets/capital-one/problem-user-business-goals.png'

const imageCardClass =
  'flex items-center justify-center rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] p-6 xl:p-10'

// Figma node 510:1241 — "problem" is now two screenshot cards only: the
// User Goals / Business Goals panel comparison, then the Main Goals
// flowchart. The old video and "What even is the funding component?" text
// card moved into the context section's new diagram above.
export default function ProblemSection() {
  return (
    <div id="problem" className="flex flex-col gap-6">
      <SectionHeading accent accentColor="#013c5b" className="mt-16">
        problem
      </SectionHeading>

      <div className="flex flex-col gap-4">
        <div className={imageCardClass}>
          <img
            src={userBusinessGoals}
            alt="User goals and business goals for the funding component"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className={imageCardClass}>
          <img
            src={mainGoals}
            alt="Main goals: clearly convey the deposit-to-credit-line relationship and create celebratory moments"
            className="w-full rounded-[8px]"
          />
        </div>
      </div>
    </div>
  )
}
