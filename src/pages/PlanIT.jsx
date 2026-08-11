import Sidebar from '../components/Sidebar.jsx'
import ScaleWrapper from '../components/ScaleWrapper.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import OriginalAndSolutionSection from '../components/sections/OriginalAndSolutionSection.jsx'
import ResearchSection from '../components/sections/ResearchSection.jsx'
import SynthesisSection from '../components/sections/SynthesisSection.jsx'
import DesignDecisionsSection from '../components/sections/DesignDecisionsSection.jsx'
import ReflectionSection from '../components/sections/ReflectionSection.jsx'

const NAV_LINKS = ['Context', 'Problem', 'Solution', 'Research', 'Design Decisions', 'Reflection']

// Most nav links jump to the top of their section, but a few need a more specific
// landing spot than "top of the section" — this is PlanIT's own answer to that,
// passed into the shared Sidebar rather than living inside it.
function getScrollTarget(id) {
  if (id === 'context') {
    const pill = document.querySelector('[data-nav-target="most-innovative-ux"]')
    if (!pill) return null
    return window.scrollY + pill.getBoundingClientRect().bottom
  }
  if (id === 'problem' || id === 'solution') {
    const heading = document.getElementById(id)
    if (!heading) return null
    return window.scrollY + heading.getBoundingClientRect().top - 64
  }
  if (id === 'design-decisions') {
    const heading = document.getElementById('before-after')
    if (!heading) return null
    return window.scrollY + heading.getBoundingClientRect().top - 64
  }
  return null
}

// Ported from Figma "case-studies-2026" file, frame "planit redesign" (node 1:71).
// Content column is 860px wide (matches the 1000px-wide "inner body - planit" frame
// minus its 70px side padding); the fixed left rail (Sidebar) reserves 250px on xl+.
//
// Sidebar is rendered outside ScaleWrapper and scales itself independently (see
// Sidebar.jsx) — a `transform` on an ancestor becomes the containing block for
// `position: fixed` descendants, which would break the sidebar's "stay pinned while
// scrolling" behavior if it were nested inside the scaled wrapper.
export default function PlanIT() {
  return (
    <>
      <Sidebar links={NAV_LINKS} getScrollTarget={getScrollTarget} />
      <ScaleWrapper>
        <div className="bg-white min-h-screen">
          <main className="xl:pl-[250px]">
            <div className="mx-auto max-w-[860px] px-6 py-14 xl:px-0">
              <IntroSection />
              <OriginalAndSolutionSection />
              <ResearchSection />
              {/* 16px gap between the User Research Goals card and the Takeaway panel */}
              <div className="mt-4">
                <SynthesisSection />
              </div>
              {/* 64px gap between Synthesis's closing panel and the Design Decisions lead-in visual */}
              <div className="mt-16">
                <DesignDecisionsSection />
              </div>
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
