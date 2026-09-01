import Sidebar from '../components/Sidebar.jsx'
import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import IntroSection from '../components/sections/capital-one/IntroSection.jsx'
import ProblemSection from '../components/sections/capital-one/ProblemSection.jsx'
import DesignSection from '../components/sections/capital-one/DesignSection.jsx'
import TestSection from '../components/sections/capital-one/TestSection.jsx'
import DeliverSection from '../components/sections/capital-one/DeliverSection.jsx'
import BeyondDesignSection from '../components/sections/capital-one/BeyondDesignSection.jsx'
import KeepReadingSection, { PLANIT_CARD, REMI_CARD } from '../components/sections/KeepReadingSection.jsx'

// Figma node 510:1241 — nav label list for the "capital one case 1.2" frame.
// "Reflection" no longer has its own heading in this design (its photo
// collage/closing card now read as part of "Beyond Design"), so it's dropped
// from the nav; a "keep reading" teaser (linking to PlanIT + REMI, since this
// page can't link to itself) was added instead, right before the footer.
const NAV_LINKS = ['Context', 'Problem', 'Design', 'Test', 'Solution', 'Beyond Design']

// "Context" lands 64px above the "Capital One" title rather than the top of
// the section.
function getScrollTarget(id) {
  if (id === 'context') {
    const title = document.getElementById('capital-one-title')
    if (!title) return null
    return window.scrollY + title.getBoundingClientRect().top - 64
  }
  return null
}

// Ported from Figma "case-studies-2026" file, frame "capital one case" (node
// 39:2296). Same 860px content column / 250px sidebar convention as PlanIT.jsx.
export default function CapitalOne() {
  return (
    <>
      <Sidebar links={NAV_LINKS} getScrollTarget={getScrollTarget} />
      <ScaleWrapper>
        <div className="bg-white min-h-screen">
          <main className="xl:pl-[250px]">
            <div className="mx-auto max-w-[860px] px-6 pt-14 pb-16 xl:px-0">
              <IntroSection />
              <ProblemSection />
              <DesignSection />
              <TestSection />
              <DeliverSection />
              <BeyondDesignSection />
              <KeepReadingSection cards={[PLANIT_CARD, REMI_CARD]} className="mt-[100px]" />
            </div>
          </main>
        </div>
      </ScaleWrapper>
      {/* Own ScaleWrapper (centered) rather than nesting inside the one above —
          the footer isn't part of the sidebar-reserving content column, so it
          shouldn't inherit that canvas's flush-left positioning. */}
      <ScaleWrapper center>
        <SiteFooter />
      </ScaleWrapper>
    </>
  )
}
