import { createPortal } from 'react-dom'

// Full-viewport click-to-close preview for carousel images (see PlayProjectSection's
// ScrollRow) — rendered through a portal straight into <body> rather than in place,
// since ScaleWrapper wraps the rest of the page in a `transform: scale()` ancestor
// once the viewport passes DESKTOP_BREAKPOINT, and a transformed ancestor breaks
// `position: fixed` (same reasoning as AboutJumpNav's pinned-nav portal).
export default function Lightbox({ src, alt, onClose }) {
  if (!src) return null

  return createPortal(
    <div
      role="button"
      tabIndex={0}
      aria-label="Close preview"
      onClick={onClose}
      className="fixed inset-0 z-[10000] flex cursor-pointer items-center justify-center bg-black/90 p-6"
    >
      <img src={src} alt={alt || ''} className="max-h-[90vh] max-w-[90vw] object-contain" />
    </div>,
    document.body,
  )
}
