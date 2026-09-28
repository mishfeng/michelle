import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import sketches from '../../../assets/capital-one/design-sketches.png'
import figmaWireframes from '../../../assets/capital-one/design-figma-wireframes.png'
import checkmarkAnimation from '../../../assets/capital-one/checkmark animation.png'
import modal from '../../../assets/capital-one/modal.png'
import popup from '../../../assets/capital-one/popup.png'

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
          {/* Two colored boxes (colors pulled from the earlier flattened partner-review
              screenshots this replaced) holding the same cropped MVP-screen assets as
              the header above, rather than a second flattened screenshot — crisper at
              any size, and lets the "Testing for…" labels be real, styleable text. */}
          <div className="flex flex-wrap gap-4">
            <div className="flex min-w-[320px] flex-[2] flex-col items-center gap-6 rounded-[16px] border-2 border-[#A6CAD7] bg-[#dae7ea] p-6">
              <p className="text-center font-lato text-[20px] leading-normal text-black">
                Testing for
                <br />
                Surprise &amp; Delight
              </p>
              <div className="flex translate-y-4 flex-wrap items-center justify-center gap-3">
                <img src={checkmarkAnimation} alt="Testing for surprise and delight: checkmark animation" className="h-[160px] w-auto -translate-y-3 object-contain drop-shadow-md" />
                <img src={modal} alt="Testing for surprise and delight: modal" className="h-[120px] w-auto translate-y-3 object-contain drop-shadow-md" />
              </div>
            </div>
            <div className="flex min-w-[220px] flex-1 flex-col items-center gap-6 rounded-[16px] border-2 border-[#ABBAA3] bg-[#dde7d9] p-6 xl:p-8">
              <p className="text-center font-lato text-[20px] leading-normal text-black">
                Testing for
                <br />
                Comprehension
              </p>
              <img src={popup} alt="Testing for comprehension: tutorial popup" className="h-[195px] w-auto object-contain drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
