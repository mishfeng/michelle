import SectionHeading from '../../ui/SectionHeading.jsx'
import LabelValue from '../../ui/LabelValue.jsx'
import scopeExpansion from '../../../assets/capital-one/beyond-scope-expansion.png'
import coffeeChats from '../../../assets/capital-one/beyond-coffee-chats.png'
import firesideChat1 from '../../../assets/capital-one/beyond-fireside-chat-1.png'
import firesideChat2 from '../../../assets/capital-one/beyond-fireside-chat-2.png'
import photoTop from '../../../assets/capital-one/reflection-photo-top.jpg'
import photoBottomLeft from '../../../assets/capital-one/reflection-photo-bottom-left.jpg'
import photoBottomRight from '../../../assets/capital-one/reflection-photo-bottom-right.jpg'
import closingPhoto from '../../../assets/capital-one/reflection-closing-photo.png'

const cardClass =
  'flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10'

// Figma node 510:1241 — heading is now lowercase accent-style with no
// subtitle. The old separate "Reflection" section (its own heading + photo
// collage + closing recap card) no longer has a heading of its own in this
// design — its photo collage and closing card now read as a visual
// continuation of "beyond design" instead, so that content moved in here.
export default function BeyondDesignSection() {
  return (
    <div id="beyond-design" className="flex flex-col gap-6">
      <SectionHeading accent accentColor="#013c5b" className="mt-16">
        beyond design
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

        <img
          src={photoTop}
          alt="Presenting the design internship program to the team"
          className="w-full rounded-t-[8px] object-cover"
          style={{ aspectRatio: '860 / 432', objectPosition: '50% 70%' }}
        />
        <div className="flex gap-4">
          <img
            src={photoBottomLeft}
            alt="Group photo outside on the National Mall"
            className="min-w-0 flex-1 rounded-bl-[8px] object-cover"
            style={{ aspectRatio: '422 / 246' }}
          />
          <img
            src={photoBottomRight}
            alt="Welcome to Experience Design swag box"
            className="min-w-0 flex-1 rounded-br-[8px] object-cover"
            style={{ aspectRatio: '422 / 246' }}
          />
        </div>

        <div className={cardClass}>
          <img
            src={closingPhoto}
            alt="Closing reflections: showing up for myself, leading with curiosity, and looking for the root problem"
            className="w-full rounded-[8px] object-cover"
            style={{ aspectRatio: '786 / 305' }}
          />
        </div>
      </div>
    </div>
  )
}
