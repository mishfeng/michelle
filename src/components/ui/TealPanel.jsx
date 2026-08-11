// Figma node 1:78 / 1:79 / 1:210 — accent panel, rounded-8. Defaults to Planit's
// teal; case studies with a different accent (e.g. Capital One's navy #163b58)
// pass their own `color`.
export default function TealPanel({ children, className = '', color = '#2e9d8c' }) {
  return (
    <div className={`rounded-[8px] px-[42px] py-[40px] ${className}`} style={{ backgroundColor: color }}>
      {children}
    </div>
  )
}
