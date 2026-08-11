import SectionHeading from '../../ui/SectionHeading.jsx'
import photoTop from '../../../assets/capital-one/reflection-photo-top.jpg'
import photoBottomLeft from '../../../assets/capital-one/reflection-photo-bottom-left.jpg'
import photoBottomRight from '../../../assets/capital-one/reflection-photo-bottom-right.jpg'
import closingPhoto from '../../../assets/capital-one/reflection-closing-photo.png'

// Figma nodes 39:2279-2281 (heading), 39:2282-2284 (photo collage, bare), 39:2278/2292
// (closing recap card)
export default function ReflectionSection() {
  return (
    <div id="reflection" className="flex flex-col gap-6">
      <SectionHeading className="mt-16" subtitle="Gems of knowledge I carry beyond this summer">
        Reflection
      </SectionHeading>

      <div className="flex flex-col gap-4">
        <img
          src={photoTop}
          alt="Presenting the design internship program to the team"
          className="w-full rounded-t-[8px] object-cover"
          style={{ aspectRatio: '860 / 432' }}
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

        <div className="flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 py-8 xl:px-[42px] xl:py-10">
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
