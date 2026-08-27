import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../ui/SectionHeading.jsx'
import TealPanel from '../ui/TealPanel.jsx'

import roadtrippersLogo from '../../assets/planit/competitor-roadtrippers-logo.png'
import wanderlogLogo from '../../assets/planit/competitor-wanderlog-logo.png'
import expediaLogo from '../../assets/planit/competitor-expedia-logo.png'
import redditLogo from '../../assets/planit/competitor-reddit-logo.png'

import interviewAvatar1 from '../../assets/planit/research-interview-avatar-1.jpg'
import interviewAvatar2 from '../../assets/planit/research-interview-avatar-2.jpg'

const cardClass =
  'mt-4 flex flex-col gap-8 rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 pt-10 pb-10 xl:px-[42px] xl:pt-12 xl:pb-12'

const TABS = [
  { id: 'user-research', label: 'User research' },
  { id: 'literature-review', label: 'Literature review' },
  { id: 'competitive-analysis', label: 'Competitive analysis' },
]

// Figma nodes 475:8423/8425/8427 — pill tabs (same visual language as Pill.jsx: bg
// #f8f8f8, border #ddd, rounded-full), plus an active state (filled #1b6d99) that
// isn't distinguished in the static Figma frame but mirrors the click-to-swap
// convention already used by SolutionPreview's caption rows.
function ResearchTab({ active, onClick, children, nudging = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`whitespace-nowrap rounded-[100px] border px-5 py-2 font-body text-[16px] leading-5 tracking-[0.1px] transition-colors ${
        active
          ? 'border-[#1b6d99] bg-[#1b6d99] text-white'
          : 'border-[#ddd] bg-[#f8f8f8] text-black hover:bg-[#eeeeee]'
      } ${nudging ? 'nudge-once' : ''}`}
    >
      {children}
    </button>
  )
}

// Figma node 456:5865 "competitive analysis" — a light-gray chip per competitor: logo on
// the left in a fixed-width column, one combined takeaway sentence (24px medium) on the right.
function CompetitiveHighlightRow({ logo, logoAlt, logoWidth, logoHeight, children }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-[8px] bg-[#e7e7e7] px-6 py-6 transition-transform duration-200 hover:scale-[1.02] sm:flex-row sm:items-center sm:gap-8 xl:px-8">
      <div className="flex h-[74px] w-[160px] shrink-0 items-center sm:w-[182px]">
        <img
          src={logo}
          alt={logoAlt}
          style={{ width: logoWidth, height: logoHeight }}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="font-body text-[16px] font-medium tracking-[0.02em] text-black">{children}</p>
    </div>
  )
}

// Figma node 475:8703 "user research" — a gray chip per finding: 50x50 rounded avatar
// photo + quote, gap 14px (mirrors the old QuoteCard's proportions but on a gray, not
// white, background).
function ResearchQuoteChip({ avatar, alt, children }) {
  return (
    <div className="flex items-center gap-3.5 rounded-[8px] bg-[#e7e7e7] p-5 transition-transform duration-200 hover:scale-[1.02]">
      <img src={avatar} alt={alt} className="size-[50px] shrink-0 rounded-[8px] object-cover" />
      <p className="min-w-0 flex-1 font-body text-[16px] tracking-[0.1px] text-black">{children}</p>
    </div>
  )
}

// Figma node 475:8703 "user research" — a single-color donut/pie stat (nodes 475:8711/
// 8714 "pie-02"), redrawn as a conic-gradient circle rather than an exported SVG so it
// stays consistent with the Literature Review tab's hand-coded bar/stacked-bar charts.
function PieStat({ percent, children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-[8px] bg-[#e7e7e7] px-6 py-8 transition-transform duration-200 hover:scale-[1.02]">
      <div
        className="size-[190px] shrink-0 rounded-full"
        style={{ background: `conic-gradient(#1b6d99 0% ${percent}%, #ffffff ${percent}% 100%)` }}
      />
      <p className="text-center font-body text-[16px] tracking-[0.1px] text-black">
        <span className="font-bold">{percent}%</span> {children}
      </p>
    </div>
  )
}

// Figma nodes 1:295/1:296 (heading), 475:8423/8425/8427 (tab pills — "User research" /
// "Literature review" / "Competitive analysis"), 475:8703 (User research tab content,
// default), 475:8684 (Literature Review tab content), 456:5865 (Competitive Analysis
// tab content). All three share one card and swap on tab click, the same interaction
// SolutionPreview already uses for the Solution section above.
// Nudges the "Literature review" tab once, 2s after the Research section first
// scrolls into view — a small attention cue toward the tabs, since it's not
// otherwise obvious they're clickable.
const NUDGE_TAB_ID = 'literature-review'
const NUDGE_DELAY_MS = 2000

export default function ResearchSection() {
  const [activeTab, setActiveTab] = useState('user-research')
  const [nudging, setNudging] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    let nudgeTimer
    let resetTimer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        nudgeTimer = setTimeout(() => {
          setNudging(true)
          resetTimer = setTimeout(() => setNudging(false), 700)
        }, NUDGE_DELAY_MS)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(nudgeTimer)
      clearTimeout(resetTimer)
    }
  }, [])

  return (
    <div id="research" ref={sectionRef} className="flex flex-col">
      <SectionHeading id="research-heading" accent className="mt-[84px]">
        research
      </SectionHeading>

      <div className="mt-8 flex flex-wrap gap-3">
        {TABS.map((tab) => (
          <ResearchTab
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            nudging={nudging && tab.id === NUDGE_TAB_ID}
          >
            {tab.label}
          </ResearchTab>
        ))}
      </div>

      {activeTab === 'user-research' && (
        <div className={cardClass}>
          <p className="text-center font-body text-[20px] font-medium tracking-[0.1px] text-black">
            We want to understand the <span className="font-bold">current user journey</span> of trip
            planning, identify <span className="font-bold">pain points</span>, and platforms students are
            currently using
          </p>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <ResearchQuoteChip avatar={interviewAvatar1} alt="Interview participant">
              &ldquo;It&rsquo;s hard to get everyone on common ground when deciding on activities&rdquo;
            </ResearchQuoteChip>
            <ResearchQuoteChip avatar={interviewAvatar2} alt="Interview participant">
              &ldquo;Usually one person does the planning and delegate tasks&rdquo;
            </ResearchQuoteChip>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <PieStat percent={63}>of students are highly interested in going on trips with friends</PieStat>
            <PieStat percent={26}>say their plans make it out of the group chat</PieStat>
          </div>
        </div>
      )}

      {activeTab === 'literature-review' && (
        <div className={cardClass}>
          <p className="text-center font-body text-[20px] font-medium tracking-[0.1px] text-black">
            We want to understand the <span className="font-bold">problem space</span> of
            &ldquo;vacationing&rdquo; vs &ldquo;trip planning&rdquo; and the current knowledge of
            user about travel planning
          </p>

          {/* items-center on the cross axis, justify-between on the main axis so both
              panels' captions land flush with the bottom of the box regardless of how
              tall the chart above them is (node 475:8694/8695 — the two captions sit
              at different heights in Figma because they're bottom-, not top-, aligned). */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="flex flex-col items-center justify-between gap-6 rounded-[8px] bg-[#e7e7e7] px-6 py-8 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-end gap-4">
                <div className="w-[47px] rounded-t-[8px] bg-[#1b6d99]" style={{ height: 75 }} />
                <div className="w-[47px] rounded-t-[8px] bg-[#1b6d99]" style={{ height: 121 }} />
                <div className="w-[47px] rounded-t-[8px] bg-[#1b6d99]" style={{ height: 172 }} />
              </div>
              <p className="text-center font-body text-[16px] tracking-[0.1px] text-black">
                Overnight trips have increased by 7% and day trips have increased by 20%
              </p>
            </div>

            {/* Legend, bars, and caption are three independent items on the same
                justify-between axis as the left panel — the stacked bar sits at the
                vertical midpoint between the key above it and the caption below,
                rather than glued directly under the legend. */}
            <div className="flex flex-col items-center justify-between gap-6 rounded-[8px] bg-[#e7e7e7] px-6 py-8 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-1">
                  <span className="size-[15px] shrink-0 rounded-[2px] bg-[#1b6d99]" />
                  <span className="font-body text-[16px] tracking-[0.1px] text-black">
                    short getaways
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="size-[15px] shrink-0 rounded-[2px] bg-[#2e9d8c]" />
                  <span className="font-body text-[16px] tracking-[0.1px] text-black">
                    long vacations
                  </span>
                </div>
              </div>
              <div className="flex w-full max-w-[319px] flex-col gap-2">
                <div className="h-[35px] w-full max-w-[227px] rounded-[8px] bg-[#1b6d99]" />
                <div className="h-[35px] w-[56%] max-w-[128px] rounded-[8px] bg-[#2e9d8c]" />
              </div>
              <p className="text-center font-body text-[16px] tracking-[0.1px] text-black">
                Global travelers plan to take more short getaways (&le;3 nights) than longer
                vacations (&gt;3 nights) in the next 12m
              </p>
            </div>
          </div>

          <TealPanel className="px-6 py-8 text-center xl:px-[42px] xl:py-[40px]">
            <p className="font-body text-[20px] font-medium tracking-[0.1px] text-white">
              Overnight trips and day trips are <span className="font-bold">gaining popularity</span>
            </p>
          </TealPanel>
        </div>
      )}

      {activeTab === 'competitive-analysis' && (
        <div className={cardClass}>
          <div className="flex flex-col gap-4">
            <CompetitiveHighlightRow logo={wanderlogLogo} logoAlt="Wanderlog" logoWidth={182} logoHeight={74}>
              Creates personalized plan &amp; shows the 5 steps of planning
            </CompetitiveHighlightRow>
            <CompetitiveHighlightRow
              logo={roadtrippersLogo}
              logoAlt="Roadtrippers"
              logoWidth={147}
              logoHeight={60}
            >
              Asks for your end destination &amp; links to places on yelp
            </CompetitiveHighlightRow>
            <CompetitiveHighlightRow logo={redditLogo} logoAlt="Reddit" logoWidth={153} logoHeight={57}>
              Great to see opinions on traveling &amp; provides more realistic experience
            </CompetitiveHighlightRow>
            <CompetitiveHighlightRow logo={expediaLogo} logoAlt="Expedia" logoWidth={152} logoHeight={62}>
              &ldquo;One-stop-shop&rdquo; feeling &amp; customize dates, price, and flight preferences
            </CompetitiveHighlightRow>
          </div>
        </div>
      )}
    </div>
  )
}
