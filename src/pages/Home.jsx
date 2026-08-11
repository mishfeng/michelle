import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteNav from '../components/site/SiteNav.jsx'
import SiteHero from '../components/site/SiteHero.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import SiteBackground from '../components/site/SiteBackground.jsx'
import heroImage from '../assets/site/home-hero.jpeg'
import textureImage from '../assets/site/texture.png'
import capitalOneTeaser from '../assets/site/c1-teaser.mp4'
import planitThumbnail from '../assets/site/planit-thumbnail.mp4'

const cardShellClass =
  'relative flex aspect-[668/448] w-full items-center justify-center overflow-hidden rounded-[12.664px] border-[0.792px] border-[#ddd]'
const thumbnailClass = 'origin-left transition-transform duration-200 group-hover:scale-[0.97]'
const captionClass =
  'pl-4 font-body text-[16px] leading-normal tracking-[0.1px] text-black opacity-0 transition-opacity duration-200 group-hover:opacity-50'

// Ported from Figma "case-studies-2026" file, frame "home page" (node 55:4305).
// Replaces the temporary placeholder that used to live directly in index.html.
//
// Uses the same 1500px design canvas + ScaleWrapper convention as the PlanIT/
// Capital One case studies (see scale.js) so the 70px side margins from Figma
// hold at every width, instead of the page just centering in a `max-w` column
// with ever-growing whitespace on wide screens.
export default function Home() {
  return (
    <ScaleWrapper center>
      <div className="relative bg-white min-h-screen">
        <SiteBackground />

        <div className="relative mx-auto max-w-[1500px] px-6 pt-11 pb-20 xl:px-[70px]">
          <SiteHero
            image={heroImage}
            alt="Standing on a golden hillside at sunset"
            quote="it takes experiencing the sunset, to fully appreciate the sunrise"
            overlay={false}
            bordered={false}
          />

          <div className="mt-[53px] flex flex-wrap items-start justify-between gap-6">
            <div className="flex max-w-[528px] flex-col gap-2">
              <h1 className="font-heading text-[32px] font-medium leading-normal tracking-[0.64px] text-black">
                Michelle Feng
              </h1>
              <p className="font-body text-[16px] leading-normal tracking-[0.32px] text-black">
                Designing human interfaces for human connection
                <br />
                <span className="text-[#5c5c5c]">Previously at Capital One</span>
              </p>
            </div>
            <SiteNav active="work" />
          </div>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row">
            <a href="/capital-one/" className="group flex min-w-0 flex-1 flex-col gap-2">
              <div className={`${cardShellClass} ${thumbnailClass}`}>
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[12.664px] opacity-15"
                  style={{ backgroundImage: `url(${textureImage})`, backgroundSize: 'cover' }}
                />
                <div className="relative aspect-[494/312] w-[73.9%] overflow-hidden rounded-[12.664px]">
                  <video
                    src={capitalOneTeaser}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label="Capital One credit card teaser"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-15"
                    style={{ backgroundImage: `url(${textureImage})`, backgroundSize: 'cover' }}
                  />
                </div>
              </div>
              <p className={captionClass}>Helping customers know what their deposit means</p>
            </a>

            <a href="/planit/" className="group flex min-w-0 flex-1 flex-col gap-2">
              <div className={`${cardShellClass} ${thumbnailClass}`}>
                <video
                  src={planitThumbnail}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="PlanIT date selection teaser"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <p className={captionClass}>A simpler way to plan trips with friends</p>
            </a>
          </div>
        </div>

        <SiteFooter />
      </div>
    </ScaleWrapper>
  )
}
