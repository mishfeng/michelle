import ScaleWrapper from '../components/ScaleWrapper.jsx'
import PageHeader from '../components/site/PageHeader.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import SiteBackground from '../components/site/SiteBackground.jsx'
import WaveText from '../components/site/WaveText.jsx'
import PlayTagList from '../components/site/PlayTagList.jsx'
import PlayProjectSection from '../components/site/PlayProjectSection.jsx'
import PlayArtGrid from '../components/site/PlayArtGrid.jsx'
import Reveal from '../components/site/Reveal.jsx'
import iconInstagram from '../assets/site/icon-instagram.svg'
import iconLink from '../assets/play/icon-link.svg'

import hackdavis1 from '../assets/play/hackdavis-1.jpg'
import hackdavis2 from '../assets/play/hackdavis-2.jpg'
import hackdavis3 from '../assets/play/hackdavis-3.jpg'
import hackdavis4 from '../assets/play/hackdavis-4.jpg'
import hackdavis6 from '../assets/play/hackdavis-6.jpg'
import hackdavis7 from '../assets/play/hackdavis-7.jpg'
import hackdavis8 from '../assets/play/hackdavis-8.jpg'

import mishmatchy1 from '../assets/play/mishmatchy-1.jpg'
import mishmatchy2 from '../assets/play/mishmatchy-2.jpg'
import mishmatchy3 from '../assets/play/mishmatchy-3.jpg'
import mishmatchy4 from '../assets/play/mishmatchy-4.jpg'
import mishmatchy5 from '../assets/play/mishmatchy-5.jpg'
import mishmatchy6 from '../assets/play/mishmatchy-6.jpg'
import mishmatchy7 from '../assets/play/mishmatchy-7.jpg'
import mishmatchy8 from '../assets/play/mishmatchy-8.jpg'

import akpsi1 from '../assets/play/akpsi-1.jpg'
import akpsi2 from '../assets/play/akpsi-2.jpg'
import akpsi3 from '../assets/play/akpsi-3.jpg'
import akpsi4 from '../assets/play/akpsi-4.jpg'
import akpsi5 from '../assets/play/akpsi-5.jpg'

import picnicdayVideo1 from '../assets/play/picnicday-video-1.mp4'
import picnicdayVideo2 from '../assets/play/picnicday-video-2.mp4'
import picnicday2 from '../assets/play/picnicday-2.jpg'
import picnicday4 from '../assets/play/picnicday-4.jpg'
import picnicday5 from '../assets/play/picnicday-5.jpg'
import picnicday6 from '../assets/play/picnicday-6.jpg'
import picnicday7 from '../assets/play/picnicday-7.jpg'

import homecoming1 from '../assets/play/homecoming-1.jpg'
import homecoming2 from '../assets/play/homecoming-2.jpg'
import homecoming3 from '../assets/play/homecoming-3.jpg'
import homecoming4 from '../assets/play/homecoming-4.jpg'
import homecoming5 from '../assets/play/homecoming-5.jpg'
import homecoming6 from '../assets/play/homecoming-6.jpg'
import homecoming7 from '../assets/play/homecoming-7.jpg'

import seniorprom1 from '../assets/play/seniorprom-1.jpg'
import seniorprom2 from '../assets/play/seniorprom-2.jpg'
import seniorprom3 from '../assets/play/seniorprom-3.jpg'
import seniorprom4 from '../assets/play/seniorprom-4.jpg'
import seniorprom5 from '../assets/play/seniorprom-5.jpg'
import seniorprom6 from '../assets/play/seniorprom-6.jpg'
import seniorprom7 from '../assets/play/seniorprom-7.jpg'

import fineart1 from '../assets/play/fineart-1.jpg'
import fineart2 from '../assets/play/fineart-2.jpg'
import fineart3 from '../assets/play/fineart-3.jpg'
import fineart4 from '../assets/play/fineart-4.jpg'
import fineart5 from '../assets/play/fineart-5.jpg'
import fineart6 from '../assets/play/fineart-6.jpg'
import fineart7 from '../assets/play/fineart-7.jpg'
import fineart8 from '../assets/play/fineart-8.jpg'
import fineart9 from '../assets/play/fineart-9.jpg'
import fineart10 from '../assets/play/fineart-10.jpg'
import fineart11 from '../assets/play/fineart-11.jpg'
import fineart12 from '../assets/play/fineart-12.jpg'

import digitalart1 from '../assets/play/digitalart-1.jpg'
import digitalart2 from '../assets/play/digitalart-2.jpg'
import digitalart3 from '../assets/play/digitalart-3.jpg'
import digitalart4 from '../assets/play/digitalart-4.jpg'
import digitalart5 from '../assets/play/digitalart-5.jpg'
import digitalart6 from '../assets/play/digitalart-6.jpg'
import digitalart7 from '../assets/play/digitalart-7.jpg'

// Figma nodes 317:547-549 carry designer annotations mapping each tag to the
// project(s) it should jump to (e.g. "Brand & graphic" -> hackdavis/akpsi).
// targetId is where a click jumps to; sectionIds (defaulting to just
// targetId) is the full set of project sections that tag's scroll-spy should
// track, since a tag can cover more than one section (e.g. "Brand & graphic"
// spans hackdavis, mishmatchy, and akpsi; "Event planning" spans homecoming
// and seniorprom).
const TAGS = [
  { label: 'Brand & graphic', targetId: 'hackdavis', sectionIds: ['hackdavis', 'mishmatchy', 'akpsi'] },
  { label: 'Marketing', targetId: 'picnicday' },
  { label: 'Event planning', targetId: 'homecoming', sectionIds: ['homecoming', 'seniorprom'] },
  { label: 'Fine art', targetId: 'fineart' },
  { label: 'Digital art', targetId: 'digitalart' },
]

const instagramLink = (href) => ({ icon: iconInstagram, href, label: 'Instagram' })

const PROJECTS = [
  {
    id: 'hackdavis',
    title: 'HackDavis',
    links: [instagramLink('https://www.instagram.com/hackdavis/')],
    category: 'Graphics',
    dateRange: '2023 - 2025',
    description: 'Curated insightful graphics to encourage 800+ hackers to build for social good',
    images: [hackdavis1, hackdavis2, hackdavis3, hackdavis4, hackdavis6, hackdavis7, hackdavis8].map((src) => ({ src })),
  },
  {
    id: 'mishmatchy',
    title: 'MishMatchy',
    links: [instagramLink('https://www.instagram.com/mishmatchy/')],
    category: 'Brand & graphics',
    dateRange: '2021',
    description:
      "My sticker business where I led operations, marketing, graphics, customer service, finance... everything",
    images: [mishmatchy1, mishmatchy2, mishmatchy3, mishmatchy4, mishmatchy5, mishmatchy6, mishmatchy7, mishmatchy8].map((src) => ({ src })),
  },
  {
    id: 'akpsi',
    title: 'Alpha Kappa Psi',
    links: [],
    category: 'Brand & graphics',
    dateRange: '2024',
    description: 'Created informational recruitment material to encourage the attendance of 200+ students',
    images: [akpsi1, akpsi2, akpsi3, akpsi4, akpsi5].map((src) => ({ src })),
    imageRadius: '0px',
  },
  {
    id: 'picnicday',
    title: 'Picnic Day',
    links: [
      { icon: iconLink, href: 'https://picnicday.ucdavis.edu/', label: 'Website' },
      instagramLink('https://www.instagram.com/ucdpicnicday/'),
    ],
    category: 'Event Marketing',
    dateRange: '2022 - 2024',
    description: 'Maintained a positive image through press releases, newsletters, social media content, giveaways, etc.',
    images: [
      { video: picnicdayVideo1 },
      { src: picnicday2 },
      { video: picnicdayVideo2 },
      { src: picnicday4 },
      { src: picnicday5 },
      { src: picnicday6 },
      { src: picnicday7 },
    ],
  },
  {
    id: 'homecoming',
    title: 'Homecoming',
    links: [instagramLink('https://www.instagram.com/lowell2022wbd/')],
    category: 'Event Design',
    dateRange: '2022',
    description: 'Hosted the 1st event post-covid through organizing logistics, graphics, social media, banner painting, etc',
    images: [homecoming1, homecoming2, homecoming3, homecoming4, homecoming5, homecoming6, homecoming7].map((src) => ({ src })),
  },
  {
    id: 'seniorprom',
    title: 'Senior Prom',
    links: [instagramLink('https://www.instagram.com/lowell2022sprom/')],
    category: 'Event Design',
    dateRange: '2022',
    description:
      'Hosted the largest event for seniors through painting a 12x12 ft banner, graphics, fundraisers, and photography',
    images: [seniorprom1, seniorprom2, seniorprom3, seniorprom4, seniorprom5, seniorprom6, seniorprom7].map((src) => ({ src })),
  },
]

// Fine art / Digital art are a static photo collage in Figma (not a scroll
// row) — each entry's x/y/w/h is that image's exact Figma-frame-relative box
// within its section, used to reproduce the same collage via PlayArtGrid.
const FINE_ART = {
  width: 1179,
  height: 1798,
  images: [
    { src: fineart1, x: 0, y: 0, w: 365, h: 465 },
    { src: fineart2, x: 381, y: 0, w: 405, h: 340 },
    { src: fineart3, x: 803, y: 0, w: 376, h: 493 },
    { src: fineart4, x: 381, y: 356, w: 405, h: 547 },
    { src: fineart5, x: 803, y: 509, w: 376, h: 281 },
    { src: fineart6, x: 0, y: 481, w: 365, h: 274 },
    { src: fineart7, x: 0, y: 771, w: 365, h: 527 },
    { src: fineart8, x: 381, y: 919, w: 405, h: 379 },
    { src: fineart9, x: 802, y: 806, w: 377, h: 484 },
    { src: fineart10, x: 0, y: 1314, w: 365, h: 484 },
    { src: fineart11, x: 381, y: 1314, w: 405, h: 484 },
    { src: fineart12, x: 802, y: 1314, w: 377, h: 484 },
  ],
}

const DIGITAL_ART = {
  width: 1179,
  height: 894,
  images: [
    { src: digitalart1, x: 0, y: 0, w: 383, h: 383 },
    { src: digitalart2, x: 399, y: 0, w: 383, h: 383 },
    { src: digitalart3, x: 797, y: 1, w: 382, h: 382 },
    { src: digitalart4, x: 0, y: 399, w: 383, h: 275 },
    { src: digitalart5, x: 399, y: 399, w: 381, h: 509 },
    { src: digitalart6, x: 802, y: 399, w: 382, h: 383 },
    { src: digitalart7, x: 0, y: 689, w: 383, h: 205 },
  ],
}

// Ported from Figma "portfolio-2026" file, frame "home play page" (node 404:4858,
// "portfolio-2026" iteration 9/10 redesign — the "open studio" header replaces the
// old video hero + name/tagline block; everything below the header is unchanged).
// Shares SiteFooter/SiteBackground/PageHeader with Home.jsx and About.jsx.
export default function Studio() {
  return (
    <ScaleWrapper center>
      <div className="relative bg-white min-h-screen">
        <SiteBackground />

        <div className="relative mx-auto max-w-[1500px] px-6 pt-[32px] pb-20 xl:px-[70px]">
          <PageHeader
            active="studio"
            title="open studio"
            subtitle={
              <>
                is where the <WaveText className="font-accent text-[24px] font-normal italic">magic</WaveText> happens
              </>
            }
            caption="my virtual wall of crafts"
          />

          <div className="mt-[41px] flex flex-wrap gap-x-[27px] gap-y-10">
            <PlayTagList tags={TAGS} />

            <div className="flex min-w-0 flex-1 basis-full flex-col gap-16 sm:basis-0">
              {PROJECTS.map((project) => (
                <Reveal key={project.id}>
                  <PlayProjectSection {...project} />
                </Reveal>
              ))}

              <Reveal as="section" id="fineart" className="flex min-w-0 flex-col">
                <h3 className="font-body text-[24px] leading-normal tracking-[0.1px] text-black">Fine art</h3>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <div className="flex w-full flex-col font-body text-[16px] leading-normal tracking-[0.1px] text-black sm:w-[174px] sm:shrink-0">
                    <p>2009 - Present</p>
                  </div>
                  <p className="min-w-0 max-w-[411px] flex-1 font-body text-[16px] leading-normal tracking-[0.1px] text-black opacity-50">
                    Painted in Florence, Italy and San Francisco, CA
                  </p>
                </div>
                <div className="mt-8">
                  <PlayArtGrid {...FINE_ART} />
                </div>
              </Reveal>

              <Reveal as="section" id="digitalart" className="flex min-w-0 flex-col">
                <h3 className="font-body text-[24px] leading-normal tracking-[0.1px] text-black">Digital art</h3>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <div className="flex w-full flex-col font-body text-[16px] leading-normal tracking-[0.1px] text-black sm:w-[174px] sm:shrink-0">
                    <p>2018 - 2022</p>
                  </div>
                  <p className="min-w-0 max-w-[411px] flex-1 font-body text-[16px] leading-normal tracking-[0.1px] text-black opacity-50">
                    Lowell Arts Department, San Francisco
                  </p>
                </div>
                <div className="mt-8">
                  <PlayArtGrid {...DIGITAL_ART} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <SiteFooter />
      </div>
    </ScaleWrapper>
  )
}
