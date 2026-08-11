import SectionHeading from '../ui/SectionHeading.jsx'
import GoalListRow from '../ui/GoalListRow.jsx'
import InsightRow from '../ui/InsightRow.jsx'
import PercentStat from '../ui/PercentStat.jsx'
import QuoteCard from '../ui/QuoteCard.jsx'
import CompetitorRow from '../ui/CompetitorRow.jsx'

import iconOne from '../../assets/planit/icon-number-one.svg'
import iconTwo from '../../assets/planit/icon-number-two.svg'
import iconThree from '../../assets/planit/icon-number-three.svg'

import findingPhoto1 from '../../assets/planit/research-finding-photo-1.jpg'
import findingPhoto2 from '../../assets/planit/research-finding-photo-2.jpg'
import findingPhoto3 from '../../assets/planit/research-finding-photo-3.jpg'
import keyInsightPhoto from '../../assets/planit/research-key-insight-photo.jpg'

import roadtrippersLogo from '../../assets/planit/competitor-roadtrippers-logo.png'
import wanderlogLogo from '../../assets/planit/competitor-wanderlog-logo.png'
import expediaLogo from '../../assets/planit/competitor-expedia-logo.png'
import redditLogo from '../../assets/planit/competitor-reddit-logo.png'
import competitiveAirportVideo from '../../assets/planit/competitive-analysis-airport-video.mp4'

import interviewAvatar1 from '../../assets/planit/research-interview-avatar-1.jpg'
import interviewAvatar2 from '../../assets/planit/research-interview-avatar-2.jpg'
import interviewAvatar3 from '../../assets/planit/research-interview-avatar-3.jpg'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 pt-10 pb-10 xl:px-[42px] xl:pt-12 xl:pb-12'
const columnHeadingClass = 'font-body text-[16px] font-bold tracking-[0.1px] text-black'

// Figma nodes 1:295/1:296 (heading), 1:122 (Literature Review card), 1:124 + 1:130
// (Competitive Analysis cards), 1:123 (User Research card). All four cards sit as flat
// siblings of the content column (1:73) in the source file rather than as containers —
// their internal spacing here is reconstructed from the absolute-Y deltas between their
// child text/photo nodes (see metadata.xml), not from literal Figma containment.
export default function ResearchSection() {
  return (
    <div id="research" className="flex flex-col gap-4">
      <SectionHeading className="mt-16" subtitle="Literature review, competitive analysis, and user research">
        Research
      </SectionHeading>

      {/* Literature Review — node 1:122 */}
      <div className={cardClass}>
        <div className="flex flex-col gap-3">
          <h3 className={columnHeadingClass}>Literature Review Goals</h3>
          <div className="flex flex-col pl-5">
            <GoalListRow icon={iconOne}>
              Understand the problem space of &ldquo;vacationing&rdquo; vs &ldquo;trip
              planning&rdquo;
            </GoalListRow>
            <GoalListRow icon={iconTwo}>
              Identify gaps in research to inform the next steps in user research
            </GoalListRow>
            <GoalListRow icon={iconThree}>
              Understand the current knowledge of users about travel planning
            </GoalListRow>
          </div>
        </div>

        <div className="h-px w-full bg-[#dddddd]" />

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h4 className={columnHeadingClass}>Findings</h4>
            <div className="flex flex-col gap-[46px]">
              <InsightRow image={findingPhoto1} alt="Travel research reference photo">
                Overnight trips have increased by 7% and day trips have increased by 20%
              </InsightRow>
              <InsightRow image={findingPhoto2} alt="Travel research reference photo">
                42% of Gen Z cite TikTok as a place to learn most about travel destinations
              </InsightRow>
              <InsightRow image={findingPhoto3} alt="Travel research reference photo">
                Global travelers plan to take more short getaways (&le;3 nights) than longer
                vacations (&gt;3 nights) in the next 12m
              </InsightRow>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className={columnHeadingClass}>Key Insights</h4>
            <img
              src={keyInsightPhoto}
              alt="An airplane flying overhead"
              className="w-full rounded-[8px] object-cover"
              style={{ aspectRatio: '384 / 126' }}
            />
            <p className="font-body text-[16px] tracking-[0.1px] text-black">
              Overnight trips and day trips seem to be gaining more popularity.
              <br />
              <br />
              Marketing for certain places causes curiosity and excitement (people see New York
              on TikTok, they want to go there next)
            </p>
          </div>
        </div>
      </div>

      {/* Competitive Analysis — node 1:124 */}
      <div className={cardClass}>
        <h3 className={columnHeadingClass}>Competitive Analysis</h3>

        <CompetitorRow
          logo={roadtrippersLogo}
          logoAlt="Roadtrippers"
          logoWidth={147}
          logoHeight={60}
          points={[
            { text: 'Asks for your end destination' },
            { text: 'Displays cities and to dos' },
            { text: 'Can view restaurants, locations, and more' },
            { text: 'Links to places on yelp' },
          ]}
        />
        <div className="h-px w-full bg-[#dddddd]" />
        <CompetitorRow
          logo={wanderlogLogo}
          logoAlt="Wanderlog"
          logoWidth={182}
          logoHeight={74}
          points={[
            { text: 'Creates personalized plan', bold: true },
            { text: 'Shows 5 steps of trip planning', bold: true },
            { text: 'Offers popular places to visit' },
            { text: 'Focuses on the ease of planning rather than place discovery' },
          ]}
        />
        <div className="h-px w-full bg-[#dddddd]" />
        <CompetitorRow
          logo={expediaLogo}
          logoAlt="Expedia"
          logoWidth={152}
          logoHeight={62}
          points={[
            { text: 'Enter destination' },
            { text: 'Offers stays, flights, cars, packages, activities' },
            { text: '“one-stop-shop” feeling' },
            { text: 'Customize dates, price, and flight preferences', bold: true },
          ]}
        />
        <div className="h-px w-full bg-[#dddddd]" />
        <CompetitorRow
          logo={redditLogo}
          logoAlt="Reddit"
          logoWidth={153}
          logoHeight={57}
          points={[
            { text: 'Not a trip planning platform' },
            { text: 'Good place to see peoples’ opinions on traveling', bold: true },
            { text: 'People can offer their travel itinerary' },
            { text: 'Gives you a more realistic experience' },
          ]}
        />
      </div>

      {/* Second Competitive Analysis card — node 1:130, a full-bleed video, no text content */}
      <video
        src={competitiveAirportVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Travelers walking through an airport terminal"
        className="h-[365px] w-full rounded-[8px] object-cover"
      />

      {/* User Research — node 1:123 */}
      <div className={cardClass}>
        <div className="flex flex-col gap-3">
          <h3 className={columnHeadingClass}>User Research Goals</h3>
          <div className="flex flex-col pl-5">
            <GoalListRow icon={iconOne}>
              Identify what platforms students are currently using to plan trips.
            </GoalListRow>
            <GoalListRow icon={iconTwo}>
              Understand the current user journey of trip planning and post-trip logistics.
            </GoalListRow>
            <GoalListRow icon={iconThree}>
              Identify potential pain points of the current trip planning process.
            </GoalListRow>
          </div>
        </div>

        <div className="h-px w-full bg-[#dddddd]" />

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h4 className={columnHeadingClass}>Surveys</h4>
            <div className="flex flex-col gap-8">
              <PercentStat percent="63%">
                of students are highly interested in going on trips with friends
              </PercentStat>
              <PercentStat percent="26%">
                say their plans make it out of the group chat
              </PercentStat>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className={columnHeadingClass}>Interviews</h4>
            <div className="flex flex-col gap-3.5">
              <QuoteCard avatar={interviewAvatar1} alt="Interview participant">
                &ldquo;It&rsquo;s hard to get everyone on common ground when deciding on
                activities&rdquo;
              </QuoteCard>
              <QuoteCard avatar={interviewAvatar2} alt="Interview participant">
                &ldquo;Usually one person does the planning and delegate tasks&rdquo;
              </QuoteCard>
              <QuoteCard avatar={interviewAvatar3} alt="Interview participant">
                &ldquo;[Currently uses] iMessage or a texting platform to plan trips&rdquo;
              </QuoteCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
