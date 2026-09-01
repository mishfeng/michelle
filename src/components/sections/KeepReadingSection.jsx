import capitalOneCover from '../../assets/planit/keep-reading-capital-one.png'
import planitCover from '../../assets/planit/keep-reading-planit.png'
import remiCover from '../../assets/planit/keep-reading-remi.png'

const cardShellClass = 'relative aspect-[422/283] w-full overflow-hidden rounded-[8px] border-[0.5px] border-[#ddd]'

function ReadNextCard({ href, external, image, alt, title, subtitle }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className="group flex min-w-0 flex-col"
    >
      <div className={cardShellClass}>
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 flex flex-col font-body text-[16px] leading-normal text-black">
        <p className="font-semibold">{title}</p>
        <p>{subtitle}</p>
      </div>
    </a>
  )
}

const CAPITAL_ONE_CARD = {
  href: '/capital-one/',
  image: capitalOneCover,
  alt: 'Capital One Platinum credit card',
  title: 'Funding Component clarifies deposits for customers',
  subtitle: 'Capital One · 2025',
}

const PLANIT_CARD = {
  href: '/planit/',
  image: planitCover,
  alt: 'PlanIT overview and itinerary screens',
  title: 'PlanIT makes trip planner simpler',
  subtitle: 'PlanIT · 2026',
}

const REMI_CARD = {
  href: 'https://devpost.com/software/remi-ft132o',
  external: true,
  image: remiCover,
  alt: 'REMI product dashboard and mobile app',
  title: "REMI helps people with Alzheimer's disease",
  subtitle: 'SF Hacks 3x Prize Winner · 2025',
}

// Figma nodes 464:5972-5984 ("planit redesign", portfolio-2026 file) — a "keep
// reading" teaser linking out to two other projects, added right before the
// footer. The heading is Figtree SemiBold 24px per that node, not the case
// study's usual SF Pro SectionHeading treatment — Figma specifies it
// differently here. `cards` defaults to PlanIT's page (Capital One + REMI);
// other case study pages pass their own pair so the page never links to itself
// (e.g. Capital One's page passes [PLANIT_CARD, REMI_CARD]).
export default function KeepReadingSection({ cards = [CAPITAL_ONE_CARD, REMI_CARD], className = 'mt-16' }) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <h2 className="text-center font-body text-[20px] font-semibold leading-normal tracking-[0.1px] text-black">
        keep reading...
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cards.map((card) => (
          <ReadNextCard key={card.href} {...card} />
        ))}
      </div>
    </div>
  )
}

export { CAPITAL_ONE_CARD, PLANIT_CARD, REMI_CARD }
