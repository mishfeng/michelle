import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import solutionVideo from '../../../assets/capital-one/c1-solution.mp4'
import recommendations from '../../../assets/capital-one/deliver-recommendations.png'
import keyTakeaways from '../../../assets/capital-one/deliver-key-takeaways.png'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10'
const imageCardClass =
  'flex items-center justify-center rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] p-6 xl:p-10'

// Figma node 510:1241 — heading text changed from "Deliver" to "solution"
// (lowercase accent style, no subtitle), matching the nav label ("Solution")
// for the first time — the id now matches too, fixing the sidebar's
// scroll-spy, which was silently watching for id="solution" (derived from
// the nav label) while this section's id was "deliver".
export default function DeliverSection() {
  return (
    <div id="solution" className="flex flex-col gap-6">
      <SectionHeading accent accentColor="#013c5b" className="mt-16">
        solution
      </SectionHeading>

      <div className="flex flex-col gap-4">
        <div className={imageCardClass}>
          <video
            src={solutionVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Holding a phone showing the funding component confirmation screen"
            className="mx-auto w-full max-w-[392px] rounded-[8px]"
          />
        </div>

        <div className={cardClass}>
          <LabelValue label="Final recommendations">
            Presenting... my A/B testing recommendations. Based on test findings, we are able to
            add celebratory and comprehensive elements to optimize the funding experience.
          </LabelValue>
          <img
            src={recommendations}
            alt="Final A/B testing recommendations across the MVP and redesigned flows"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className={cardClass}>
          <LabelValue label="Key takeaways">
            I&apos;m super grateful to have worked on such a supportive and productive team. I
            definitely learned a ton!
          </LabelValue>
          <img
            src={keyTakeaways}
            alt="Key takeaways from the testing and delivery phase"
            className="w-full rounded-[8px]"
          />
        </div>
      </div>
    </div>
  )
}
