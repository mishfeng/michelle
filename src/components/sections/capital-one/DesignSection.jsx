import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import sketches from '../../../assets/capital-one/design-sketches.png'
import figmaWireframes from '../../../assets/capital-one/design-figma-wireframes.png'
import partnerReview1 from '../../../assets/capital-one/design-partner-review-1.png'
import partnerReview2 from '../../../assets/capital-one/design-partner-review-2.png'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10'

// Figma node 510:1241 — heading is now lowercase accent-style with no
// subtitle; text/layout otherwise unchanged, just new screenshots.
export default function DesignSection() {
  return (
    <div id="design" className="flex flex-col gap-6">
      <SectionHeading accent accentColor="#013c5b" className="mt-16">
        design
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

        {/* Extra padding vs. the other cards on this page — the wireframes image is
            dense enough (5 phone screens + sticky notes) that the shared card
            padding read as touching its own contents. */}
        <div className="flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[64px] xl:py-14">
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
          {/* Figma sizes both prototype cards to the same height (341px) and lets
              width follow each one's own aspect ratio — not the previous
              flex-basis-by-width split, which let "testing for comprehension"
              render shorter than the box on its left. -mb cancels the card's own
              bottom padding so these sit flush against the card's bottom edge.
              The inner corner where the two images meet (bottom-right of the
              left one, bottom-left of the right one) is squared off so the
              pair reads as one continuous edge instead of two separate rounded
              cards touching. */}
          <div className="-mb-8 flex flex-wrap items-end justify-center gap-4 xl:-mb-10">
            <img
              src={partnerReview1}
              alt="Prototype review: testing for surprise and delight"
              className="h-[240px] w-full rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-none object-contain xl:h-[380px] xl:w-auto"
            />
            <img
              src={partnerReview2}
              alt="Prototype review: testing for comprehension"
              className="h-[240px] w-full rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-none object-contain xl:h-[380px] xl:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
