// Figma node 1:2011 — inlined (rather than <img>) so its stroke can inherit the
// parent's text color via currentColor, letting Tailwind text-color classes control
// both the darken-on-hover state and the default 50%-opacity state.
export default function BackArrowIcon({ className }) {
  return (
    <svg viewBox="0 0 21.5 21.5" fill="none" className={className}>
      <path
        d="M10.75 14.25V8.25M10.75 20.75C16.273 20.75 20.75 16.273 20.75 10.75C20.75 5.227 16.273 0.75 10.75 0.75C5.227 0.75 0.75 5.227 0.75 10.75C0.75 16.273 5.227 20.75 10.75 20.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 10.25L10.75 7.25L13.75 10.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
