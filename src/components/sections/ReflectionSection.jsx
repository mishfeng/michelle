import SectionHeading from '../ui/SectionHeading.jsx'
import LabelValue from '../ui/LabelValue.jsx'
import awardPhoto from '../../assets/planit/reflection-award-photo.jpg'
import presentationPhoto from '../../assets/planit/reflection-presentation-photo.jpg'
import stickyNotesPhoto from '../../assets/planit/reflection-stickynotes-photo.jpg'

// Figma nodes 1:298/1:299 (heading), 1:761 + 1:2009/1:2010 (photo collage), 1:75 (Learnings/Challenges card)
export default function ReflectionSection() {
  return (
    <div id="reflection" className="flex flex-col gap-4">
      <SectionHeading accent subtitle="Learnings and challenges" className="mt-16">Reflection</SectionHeading>

      <div className="flex flex-col gap-4">
        <img
          src={awardPhoto}
          alt="The design team holding their Most Innovative UX award certificates"
          width={860}
          height={432}
          className="h-[432px] w-full rounded-t-[8px] object-cover object-bottom"
        />
        <div className="flex gap-4">
          <img
            src={presentationPhoto}
            alt="Presenting the PlanIT redesign to the class"
            className="h-[246px] w-1/2 rounded-bl-[8px] object-cover object-bottom"
          />
          <img
            src={stickyNotesPhoto}
            alt="The team synthesizing research on a sticky-note wall"
            className="h-[246px] w-1/2 rounded-br-[8px] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:pt-[31px] xl:pb-[43px]">
        <LabelValue label="Learnings">
          <p>
            Greatness and success usually doesn&apos;t come from the first draft. I&apos;ve had to
            spend countless days and iterations tinkering around before deciding on the final
            wireframes.
          </p>
          <p className="mt-3">
            Asking for an outside perspective and Claude to pressure test my designs helped me
            fail fast and iterate quick. This is now an integral step in my design process in
            addition to user testing.
          </p>
        </LabelValue>
        <div className="h-px w-full bg-[#dddddd]" />
        <LabelValue label="Challenges">
          There are so many paths an user could take in a trip planning app. It picked my brain
          how many possibilities there were, but it made me realize that by condensing my scope,
          using my research, and testing my designs, each piece leads me closer to solving the
          puzzle.
        </LabelValue>
      </div>
    </div>
  )
}
