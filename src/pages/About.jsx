import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteNav from '../components/site/SiteNav.jsx'
import SiteHero from '../components/site/SiteHero.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import SiteBackground from '../components/site/SiteBackground.jsx'
import AboutJumpNav from '../components/site/AboutJumpNav.jsx'
import ExperienceEntry from '../components/site/ExperienceEntry.jsx'
import PhilosophyCard from '../components/site/PhilosophyCard.jsx'
import SideQuestSection from '../components/site/SideQuestSection.jsx'
import heroVideo from '../assets/site/about-hero.mp4'
import aboutPhoto from '../assets/site/about-photo.jpeg'
import iconLinkedin from '../assets/site/icon-linkedin.svg'

import logoCapitalOne from '../assets/about/logo-capital-one.png'
import logoHackdavis from '../assets/about/logo-hackdavis.png'
import logoAdobe from '../assets/about/logo-adobe.png'
import logoDesignInteractive from '../assets/about/logo-design-interactive.png'

import iconMapArtGallery from '../assets/about/icon-map-art-gallery.svg'
import iconAppleFilled from '../assets/about/icon-apple-filled.svg'
import iconPaper from '../assets/about/icon-paper.svg'
import iconVideo from '../assets/about/icon-video.svg'

import linkedin1 from '../assets/about/linkedin-1-visited-office.jpg'
import linkedin2 from '../assets/about/linkedin-2-my-posts.jpg'
import linkedin3 from '../assets/about/linkedin-3-chloe-shih.jpg'
import linkedin4 from '../assets/about/linkedin-4-hackathon-workshop.jpg'

import florence1 from '../assets/about/florence-1-oil-painting.jpg'
import florence2 from '../assets/about/florence-2-abroad-friends.jpg'
import florence3 from '../assets/about/florence-3-palazzo-pitti.jpg'
import florence4 from '../assets/about/florence-4-pasta-making.jpg'

import teaching1 from '../assets/about/teaching-1-my-students.jpg'
import teaching2 from '../assets/about/teaching-2-ice-breaker.jpg'
import teaching3 from '../assets/about/teaching-3-presentation-runthrough.jpg'
import teaching4 from '../assets/about/teaching-4-tote-bag-design.jpg'

const captionClass =
  'mt-4 pl-4 font-body text-[16px] leading-normal tracking-[0.1px] text-black opacity-0 transition-opacity duration-200 group-hover:opacity-50'

const sectionHeadingClass = 'font-heading text-[24px] font-medium leading-normal tracking-[0.1px] text-black'
const sectionSubtitleClass = 'font-body text-[16px] leading-normal tracking-[0.1px] text-black'

// Ported from Figma "portfolio-2026" file, node 308:114 ("home about page") —
// the Experience/Philosophy/Side Quests sections below the bio, plus the
// Experience/Philosophy/Side quests jump rail. Every photo, logo, and icon
// below is a real asset pulled from that Figma file (see src/assets/about/),
// not a placeholder — the "View here" hrefs are the one thing Figma has no
// URL for, and stay as "#" until real links are supplied.
const JUMP_ITEMS = [
  { label: 'Experience', targetId: 'experience' },
  { label: 'Philosophy', targetId: 'philosophy' },
  { label: 'Side quests', targetId: 'side-quests' },
]

const EXPERIENCE = [
  { logo: logoCapitalOne, logoAlt: 'Capital One', role: 'Product Design Intern', company: 'Capital One', year: '2025' },
  { logo: logoHackdavis, logoAlt: 'HackDavis', role: 'Product Designer', company: 'HackDavis', year: '2025' },
  { logo: logoAdobe, logoAlt: 'Adobe', role: 'Product Ambassador', company: 'Adobe', year: '2025' },
  {
    logo: logoDesignInteractive,
    logoAlt: 'Design Interactive',
    role: 'UI/UX Design Intern',
    company: 'Design Interactive',
    year: '2023',
  },
]

const PHILOSOPHY = [
  'Character is who you are when no one is watching.',
  'Be proactively reactive, not reactively proactive.',
  'Do what you love, and love what you do.',
]

const SIDE_QUESTS = [
  {
    id: 'linkedin-creator',
    icon: iconLinkedin,
    iconSize: 40,
    title: 'LinkedIn Creator',
    viewHereIcon: iconLinkedin,
    viewHereHref: 'https://www.linkedin.com/in/missmichfeng/',
    dateRange: '2023 - Present',
    description:
      'Helping non-technical majors (like myself) break into tech through posting my career journey, event recaps, and my work. Proud to be inspiring over 11,500 product builders alike.',
    images: [
      { src: linkedin1, caption: 'Visited the LinkedIn office', width: '253px' },
      { src: linkedin2, caption: 'My posts on LinkedIn', width: '254px' },
      { src: linkedin3, caption: 'Met my role model, Chloe Shih', width: '253px' },
      { src: linkedin4, caption: 'Led "Hackathon 101" workshop', width: '254px' },
    ],
  },
  {
    id: 'florence',
    icon: iconMapArtGallery,
    iconSize: 32,
    title: 'Designer in Florence, Italy',
    viewHereIcon: iconPaper,
    viewHereHref: 'https://docs.google.com/document/d/1oLrB7DXtLD5Qwqym-H0ST1gty7z0Ut1Y6M1ibJ0Jo70/edit?tab=t.0',
    dateRange: '2026',
    description:
      'Still surreal, learning from renowned artists in the birthplace of Renaissance art. Grateful to have had the opportunity to immerse myself in the Florentine lifestyle for a season.',
    images: [
      { src: florence1, caption: 'Oil painting our own references', width: '253px' },
      { src: florence2, caption: 'Abroad friends', width: '254px' },
      { src: florence3, caption: 'Palazzo Pitti', width: '253px' },
      { src: florence4, caption: 'Pasta making class', width: '254px' },
    ],
  },
  {
    id: 'teaching',
    icon: iconAppleFilled,
    iconSize: 28,
    title: 'High school teacher',
    viewHereIcon: iconVideo,
    viewHereHref: 'https://youtu.be/aa4rT_PS7ks',
    dateRange: '2023 - 24',
    description:
      "As the oldest sister, I've always found a sense of purpose teaching people new concepts. Spending my summers teaching younger students business and technology is quite rejuvenating to me.",
    images: [
      { src: teaching1, caption: 'My students!', width: '358px' },
      { src: teaching2, caption: 'Ice breaker', width: '198px' },
      { src: teaching3, caption: 'Pre-presentation runthrough', width: '254px' },
      { src: teaching4, caption: 'Tote bag design', width: '201px' },
    ],
  },
]

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
                Leading with curiosity, following with my heart
                <br />
                <span className="text-[#5c5c5c]">Currently based in San Francisco</span>
              </p>
            </div>
            <SiteNav active="about" />
          </div>

          <div className="mt-[41px] flex flex-col items-start gap-8 sm:flex-row sm:gap-[52px]">
            <AboutJumpNav items={JUMP_ITEMS} />

            <div className="flex min-w-0 flex-1 flex-col gap-[100px]">
              <div className="flex flex-col items-start gap-8 sm:flex-row sm:gap-[60px]">
                <div className="group w-full max-w-[462px] shrink-0 sm:w-[401px]">
                  <img
                    src={aboutPhoto}
                    alt="Michelle smiling in front of a coastal cliffside village"
                    className="aspect-[451/319] w-full -rotate-[1.94deg] rounded-[8px] border-[0.5px] border-[#ddd] object-cover transition-transform duration-300 group-hover:rotate-[0.5deg]"
                  />
                  <p className={captionClass}>cinque terre, my happy place</p>
                </div>

                <div className="min-w-0 flex-1 sm:max-w-[579px]">
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

              <section id="experience" className="flex flex-col gap-6">
                <h2 className={sectionHeadingClass}>Experience</h2>
                <div className="flex flex-wrap gap-6">
                  {EXPERIENCE.map((entry) => (
                    <ExperienceEntry key={entry.company} {...entry} />
                  ))}
                </div>
              </section>

              <section id="philosophy" className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className={sectionHeadingClass}>Philosophy</h2>
                  <p className={sectionSubtitleClass}>What gets me up in the morning</p>
                </div>
                <div className="flex flex-wrap gap-6">
                  {PHILOSOPHY.map((quote) => (
                    <PhilosophyCard key={quote}>{quote}</PhilosophyCard>
                  ))}
                </div>
              </section>

              <section id="side-quests" className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className={sectionHeadingClass}>Side quests</h2>
                  <p className={sectionSubtitleClass}>Cheers to all the evening and weekend crafts!</p>
                </div>
                <div className="flex flex-col gap-10">
                  {SIDE_QUESTS.map((quest) => (
                    <SideQuestSection key={quest.id} {...quest} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        <SiteFooter />
      </div>
    </ScaleWrapper>
  )
}
