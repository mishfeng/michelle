import TealPanel from '../ui/TealPanel'
import LabelValue from '../ui/LabelValue'
import SectionHeading from '../ui/SectionHeading'
import StickyNote from '../ui/StickyNote'
import notebookLeft from '../../assets/planit/synthesis-notebook-left.jpg'
import notebookRight from '../../assets/planit/synthesis-notebook-right.jpg'
import binocularsVideo from '../../assets/planit/synthesis-video.mp4'

// One affinity-diagram cluster: a neutral card (bg #f8f8f8, border #ddd, radius 8) holding a
// column-stacked grid of Insight StickyNotes, topped off with the "How might we..." synthesis
// question derived from that cluster. Figma node ids: 1:206/1:216 (cluster A), 1:208/1:253
// (cluster B), 1:207/1:231 (cluster C), 1:209/1:265 (cluster D).
function Cluster({ widthClass, columns, hmw }) {
  return (
    <div className={`flex w-full flex-col rounded-[8px] border border-[#ddd] bg-[#f8f8f8] p-6 ${widthClass}`}>
      <div className="flex flex-col gap-3 sm:flex-row">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-1 flex-col gap-3">
            {col.map((text, j) => (
              <StickyNote key={j}>{text}</StickyNote>
            ))}
          </div>
        ))}
      </div>
      <LabelValue label="How might we..." className="mt-6">
        {hmw.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </LabelValue>
    </div>
  )
}

// Figma node 1:204 (Takeaway) through 1:213/1:205 (final "How might we" statement),
// absolute y 5233–7342 of "inner body - planit" (1:73).
export default function SynthesisSection() {
  return (
    <section className="flex w-full max-w-[860px] flex-col">
      {/* 1:204 Rectangle 102 / 1:211-212 */}
      <TealPanel className="px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <LabelValue label="Takeaway" light>
          <p>1  There is a gap between wanting to take a trip with friends and actually going on the trip</p>
          <p>2  Communication/ compromising were the biggest pain points for users</p>
        </LabelValue>
      </TealPanel>

      {/* 1:280-282 */}
      <SectionHeading
        className="mt-16"
        subtitle="4 main pain points: lack of communication, finding activities, scheduling, and splitting costs"
      >
        Synthesis
      </SectionHeading>

      {/* 1:851/1:852 — two-page spread of handwritten brainstorm notes, exported as one flattened image split at its natural seam (contiguous, no gap) */}
      <div className="mt-6 flex w-full overflow-hidden rounded-[8px]">
        <img
          src={notebookLeft}
          alt="Handwritten brainstorm notes and early app sketches, page 1"
          width={429}
          height={365}
          className="w-1/2 h-auto"
        />
        <img
          src={notebookRight}
          alt="Handwritten brainstorm notes and early app sketches, page 2"
          width={431}
          height={365}
          className="w-1/2 h-auto"
        />
      </div>

      {/* Row 1 — clusters A (1:206) + B (1:208) */}
      <div className="mt-6 flex flex-col gap-4 xl:flex-row">
        <Cluster
          widthClass="xl:w-[422px]"
          columns={[
            [
              'It can be difficult to find something that meets everyone’s preferences and some people don’t respond as often',
              'It’s hard to get everyone on the same page most of the time.',
            ],
            [
              'People don’t communicate or they lose interest too easily',
              'People don’t respond fast, some people have potential conflicts so it takes a while to get those sorted out.',
            ],
          ]}
          hmw={[
            'simplify the decision making process for trip planning groups?',
            'streamline the communication process?',
          ]}
        />
        <Cluster
          widthClass="xl:w-[422px]"
          columns={[
            [
              'people are usually pretty down to go on group trips, the process of planning it just gets a little tedious when it comes to who is driving, how the costs are going to be split, a possible itinerary for the day, etc. personally i think would be nice for a trip planning app to take into account all the expenses of a trip and split an itemized bill evenly among all trip-goers to streamline the process; maybe this could include hypothetical in-app integration with airlines, uber, airbnb, restaurants, etc',
            ],
            [
              'I feel like I’m one of the main people planning trips out. It’s not exactly an issue but the main issues really come down to cost, transportation, timing.',
              'most difficult part is organizing rides, sending out deposits, and sending reminders for other payments (gas, airbnb, etc.), and making sure everyone is on the same page. itinerary is the easier part!',
            ],
          ]}
          hmw={['split costs efficiently amongst different activities during the trip?']}
        />
      </div>

      {/* Row 2 — clusters C (1:207) + D (1:209) */}
      <div className="mt-4 flex flex-col gap-4 xl:flex-row">
        <Cluster
          widthClass="xl:w-[522px]"
          columns={[
            [
              'I think the hardest thing about group trips is getting everyone’s equal participation in planning it. Without everyone sharing their input, it’s hard to decide on activities that will satisfy everyone without feeling like I’m planning the trip all by myself.',
              'It’s difficult to get everyone on board for the same things sometimes. And budget is also very hard to control.',
            ],
            [
              'Usually involves a lot of back and forth, especially if it’s a bigger group. Finding things that we’ll all like doing is often difficult. Tracking and splitting expenses had been a hassle without spreadsheets. But I use wanderlog now to make the itinerary and track expenses.',
              'Can be difficult to make sure that everyone is interested in going.',
            ],
            [
              'it can be difficult to get people to commit and to find activities that everyone planning to go will enjoy.',
              'Ppl got different priorities/interest as well as some ppl don’t got any license so they gonna be a passenger princess',
            ],
          ]}
          hmw={[
            'gather everyone’s preferences for trip activities?',
            'include everyone in the trip planning process?',
          ]}
        />
        <Cluster
          widthClass="xl:w-[323px]"
          columns={[
            [
              'Only Finding time and scheduling is hard.',
              'Difficult to find a time when everyone is free',
            ],
            [
              'Sometimes coordinating group trips can be difficult trying to accommodate everyone’s different schedules or the different types of activities/food that everyone wants to try.',
            ],
          ]}
          hmw={['better coordinate everybody’s schedules efficiently?']}
        />
      </div>

      {/* 1:277 Rectangle 84 */}
      <video
        src={binocularsVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Illustrative video of someone looking through binoculars, representing the research lens applied to synthesize findings"
        width={860}
        height={365}
        className="mt-16 w-full rounded-[8px] object-cover"
      />

      {/* 1:205 Rectangle 108 / 1:213-215 — the synthesized, primary "How might we" statement */}
      <TealPanel className="mt-4 px-6 py-8 xl:px-[42px] xl:py-[40px]">
        <LabelValue label="How might we..." light>
          <p>
            create a mobile application that streamlines the communication of trip plans, engages
            all trip attendees in decision making, and simplifies the trip planning process?
          </p>
        </LabelValue>
      </TealPanel>
    </section>
  )
}
