import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import sketches from '../../../assets/capital-one/design-sketches.png'
import figmaWireframes from '../../../assets/capital-one/design-figma-wireframes.png'
import partnerReview1 from '../../../assets/capital-one/design-partner-review-1.png'
import partnerReview2 from '../../../assets/capital-one/design-partner-review-2.png'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10'

// Figma nodes 39:2205-2207 (heading), 39:2209/2231-2234 (sketching), 39:2210/2262/2235-2237
// (Figma wireframes), 39:2211/2264-2265/2238-2240 (partner review pair)
export default function DesignSection() {
  return (
    <div id="design" className="flex flex-col gap-6">
      <SectionHeading className="mt-16" subtitle="Ideate concepts and share with team">
        Design
      </SectionHeading>

      <div className="flex flex-col gap-4">
        <div className={cardClass}>
          <LabelValue label="Sketching initial ideas">
            Referencing previous documentation and research, I sketched out potential solutions
            while simultaneously asking for feedback from other designers.
          </LabelValue>
          <img
            src={sketches}
            alt="Notebook sketches of the funding flow with designer feedback stickies"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className={cardClass}>
          <LabelValue label="Diving into Figma">
            Now that everything was on the table, I started prioritizing concepts as I designed
            mid-fidelity wireframes in Figma.
          </LabelValue>
          <img
            src={figmaWireframes}
            alt="Mid-fidelity Figma wireframes of the deposit amount flow"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className={cardClass}>
          <LabelValue label="Aligning with Partners">
            I hosted weekly share out feedback sessions with partners to align on next steps
            throughout the summer. We aligned on these three prototypes to test.
          </LabelValue>
          <div className="flex flex-wrap items-start gap-4">
            <img
              src={partnerReview1}
              alt="Prototype review: testing for surprise and delight"
              className="rounded-[12px]"
              style={{ flex: '731 1 0', minWidth: '220px' }}
            />
            <img
              src={partnerReview2}
              alt="Prototype review: testing for comprehension"
              className="rounded-[12px]"
              style={{ flex: '424 1 0', minWidth: '150px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
