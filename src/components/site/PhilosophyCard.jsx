// Figma nodes 317:501-503 — centered-text card, #f8f8f8/#ddd border, rounded-8,
// h-[171px], used for the three Philosophy statements.
export default function PhilosophyCard({ children }) {
  return (
    <div className="flex h-[171px] w-full min-w-0 flex-1 items-center justify-center rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8] px-6 text-center">
      <p className="font-body text-[20px] leading-normal tracking-[0.1px] text-black">{children}</p>
    </div>
  )
}
