import Sidebar from '../components/Sidebar.jsx'
import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import IntroSection from '../components/sections/capital-one/IntroSection.jsx'
import ProblemSection from '../components/sections/capital-one/ProblemSection.jsx'
import DesignSection from '../components/sections/capital-one/DesignSection.jsx'
import TestSection from '../components/sections/capital-one/TestSection.jsx'
import DeliverSection from '../components/sections/capital-one/DeliverSection.jsx'
import BeyondDesignSection from '../components/sections/capital-one/BeyondDesignSection.jsx'
import ReflectionSection from '../components/sections/capital-one/ReflectionSection.jsx'

// Figma node 39:4240 — nav label list for the "capital one case" frame.
const NAV_LINKS = ['Context', 'Problem', 'Design', 'Test', 'Solution', 'Beyond Design']

// The "Solution" nav label has no section of its own in the source file — it
// lands on the "Deliver" heading instead (same mismatched-label pattern as
// PlanIT's "Design Decisions" -> "before-after"). "Context" lands 64px above
// the "Capital One" title rather than the top of the section.
function getScrollTarget(id) {
  if (id === 'context') {
    const title = document.getElementById('capital-one-title')
    if (!title) return null
    return window.scrollY + title.getBoundingClientRect().top - 64
  }
  if (id === 'solution') {
    const heading = document.getElementById('deliver-heading')
    if (!heading) return null
    return window.scrollY + heading.getBoundingClientRect().top - 64
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
          <main className="min-[1800px]:pl-[250px]">
            <div className="mx-auto max-w-[860px] px-6 py-14 xl:px-0">
              <IntroSection />
              <ProblemSection />
              <DesignSection />
              <TestSection />
              <DeliverSection />
              <BeyondDesignSection />
              <ReflectionSection />
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
