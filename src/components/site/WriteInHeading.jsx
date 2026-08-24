// Splits text into per-letter spans so it can stagger in on mount, approximating
// being "written out" rather than just appearing all at once. Runs once on page
// load (CSS animation on mount, not tied to hover/interaction) — shared by Home's
// "michelle feng" and PageHeader's title (Studio's "open studio", About's "about
// me"). Letters are grouped per word in a nowrap span — each letter being its own
// inline-block box otherwise gives the browser a break opportunity at every single
// letter, not just at the real spaces, which was wrapping mid-word on narrow
// viewports ("michelle fe" / "ng"). The nowrap wrapper keeps line breaks legal
// only where a real space is.
export default function WriteInHeading({ text, className }) {
  let globalIndex = 0
  const words = text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap">
      {Array.from(word).map((char, charIndex) => {
        const delay = globalIndex * 45
        globalIndex += 1
        return (
          <span
            key={charIndex}
            aria-hidden="true"
            className="inline-block animate-[write-in_0.55s_ease-out_both]"
            style={{ animationDelay: `${delay}ms` }}
          >
            {char}
          </span>
        )
      })}
    </span>
  ))

  return (
    <h1 className={className} aria-label={text}>
      {words.reduce((nodes, word, i) => (i === 0 ? [word] : [...nodes, ' ', word]), [])}
    </h1>
  )
}
