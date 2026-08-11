import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import scopeExpansion from '../../../assets/capital-one/beyond-scope-expansion.png'
import coffeeChats from '../../../assets/capital-one/beyond-coffee-chats.png'
import firesideChat1 from '../../../assets/capital-one/beyond-fireside-chat-1.png'
import firesideChat2 from '../../../assets/capital-one/beyond-fireside-chat-2.png'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10'

// Figma nodes 39:2285-2287 (heading), 39:2218/2289/2259-2261 (scope expansion),
// 39:2216/2288/2253-2255 (coffee chats), 39:2217/2290-2291/2256-2258 (fireside chat pair)
export default function BeyondDesignSection() {
  return (
    <div id="beyond-design" className="flex flex-col gap-6">
      <SectionHeading className="mt-16" subtitle="I strived to go beyond my role this summer to expand my range of knowledge.">
        Beyond design
      </SectionHeading>

      <div className="flex flex-col gap-4">
        <div className={cardClass}>
          <LabelValue label="Expanding my Scope">
            I had a growing interest in design strategy and wanted to expand my scope in the last
            2 weeks of my internship to explore that interest.
          </LabelValue>
          <img
            src={scopeExpansion}
            alt="Expanding scope: aligning with partners, research, competitive scan, and recommendations"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className={cardClass}>
          <LabelValue label="Coffee Chats">
            Finding community and learning from those I admire. So glad to have had the chance to
            get to know these amazing 33 individuals.
          </LabelValue>
          <img
            src={coffeeChats}
            alt="Grid of headshots from coffee chats across the org"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className={cardClass}>
          <LabelValue label="Design Leadership Fireside Chat">
            Amazing dive into what design leadership at Capital One looks like.
          </LabelValue>
          <div className="flex flex-wrap items-start gap-4">
            <img
              src={firesideChat1}
              alt="Fireside chat panelist headshots and closing advice"
              className="rounded-[12px]"
              style={{ flex: '633 1 0', minWidth: '220px' }}
            />
            <img
              src={firesideChat2}
              alt="Slack conversation arranging the fireside chat"
              className="rounded-[12px]"
              style={{ flex: '844 1 0', minWidth: '260px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
