// Shared scale factor for the PlanIT case study page — everything (fonts, spacing,
// images, the fixed sidebar) scales together via ScaleWrapper. Bump this single
// number to resize the whole frame while keeping every proportion identical.
export const SCALE = 1.2
export const DESIGN_WIDTH = 1500

// The scaled canvas is DESIGN_WIDTH * SCALE wide (plus the 250px sidebar rail), so
// the fixed-width + transform mode must not switch on before the viewport can
// actually fit it — otherwise the page gets a horizontal scrollbar. Below this,
// ScaleWrapper renders children unscaled at their natural (unscaled, 1x) size;
// sections still apply their `xl:` (1280px) styles in that range, which is exactly
// the "1x desktop" layout the design was built from before the 1.2x scale-up.
export const DESKTOP_BREAKPOINT = DESIGN_WIDTH * SCALE

// Below DESKTOP_BREAKPOINT, page sections already switch into their "1x desktop"
// layout at Tailwind's `xl:` breakpoint (1280px) — see ScaleWrapper. The Sidebar
// must become visible at that same point, not wait for DESKTOP_BREAKPOINT, or it
// stays hidden across the whole 1280-1800px range that most real laptop screens
// actually report (previously it only appeared above 1800px, i.e. almost never).
export const SIDEBAR_BREAKPOINT = 1280
