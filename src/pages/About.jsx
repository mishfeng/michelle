import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteNav from '../components/site/SiteNav.jsx'
import SiteHero from '../components/site/SiteHero.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import SiteBackground from '../components/site/SiteBackground.jsx'
import heroVideo from '../assets/site/about-hero.mp4'
import aboutPhoto from '../assets/site/about-photo.jpeg'

const captionClass =
  'mt-4 pl-4 font-body text-[16px] leading-normal tracking-[0.1px] text-black opacity-0 transition-opacity duration-200 group-hover:opacity-50'

// Ported from Figma "case-studies-2026" file, frame "about page" (node 55:4361).
// Shares SiteNav/SiteHero/SiteFooter with Home.jsx — same page shell, different
// hero photo/quote and a bio instead of the project grid.
export default function About() {
  return (
    <ScaleWrapper center>
      <div className="relative bg-white min-h-screen">
        <SiteBackground />

        <div className="relative mx-auto max-w-[1500px] px-6 pt-11 pb-20 xl:px-[70px]">
          <SiteHero
            video={heroVideo}
            alt="Watching a paraglider land at a small airfield"
            quote="What if I fall? Oh, but my darling, what if you fly?"
          />

          <div className="mt-[53px] flex flex-wrap items-start justify-between gap-6">
            <div className="flex max-w-[528px] flex-col gap-2">
              <h1 className="font-heading text-[32px] font-medium leading-normal tracking-[0.64px] text-black">
                Michelle Feng
              </h1>
              <p className="font-body text-[16px] leading-normal tracking-[0.32px] text-black">
                Human connection through product, events, and stories
                <br />
                <span className="text-[#5c5c5c]">Currently based in San Francisco</span>
              </p>
            </div>
            <SiteNav active="about" />
          </div>

          <div className="mt-[41px] flex flex-wrap items-center gap-8 sm:gap-[63px]">
            <div className="group w-full max-w-[462px] shrink-0 sm:ml-[28px] sm:w-[45%]">
              <img
                src={aboutPhoto}
                alt="Michelle smiling in front of a coastal cliffside village"
                className="aspect-[451/319] w-full -rotate-[1.94deg] rounded-[8px] border-[0.5px] border-[#ddd] object-cover transition-transform duration-300 group-hover:rotate-[0.5deg]"
              />
              <p className={captionClass}>cinque terre, my happy place</p>
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="font-heading text-[24px] font-medium leading-normal tracking-[0.1px] text-black">
                Hey, I&apos;m Michelle!
              </h2>
              <div className="mt-[19px] flex flex-col gap-4 font-body text-[16px] leading-normal tracking-[0.1px] text-black">
                <p>
                  I lead with curiosity and follow with my heart. I believe all of us have something
                  that makes our hearts twirl, and designing seamless experiences for people makes
                  mine do summersaults.
                </p>
                <p>
                  In my past life, I&apos;ve explored interfaces at capital one and studied design
                  in florence, italy and davis, ca. Previously, I competed in 12 hackathons, hosted 2
                  hackathons, taught 50 high schoolers, and cultivated a linkedIn community of 11.5k
                  product builders.
                </p>
                <p>Building cool stuff? Let&apos;s chat :)</p>
              </div>
            </div>
          </div>
        </div>

        <SiteFooter />
      </div>
    </ScaleWrapper>
  )
}
