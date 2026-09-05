// Figma nodes 309:388/392/396/404 (logo tile) + 309:382-403 (role/company text) —
// a #f8f8f8/#ddd bordered logo tile above a semibold role and a regular
// "Company · Year" line.
export default function ExperienceEntry({ logo, logoAlt, role, company, year }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-3 sm:w-[252px]">
      <div className="flex h-[112px] items-center justify-center rounded-[8px] border-[0.5px] border-[#ddd] bg-[#f8f8f8]">
        <img src={logo} alt={logoAlt} className="max-h-[54px] max-w-[70%] object-contain" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-body text-[16px] font-semibold leading-normal tracking-[0.1px] text-black">
          {role}
        </p>
        <p className="font-body text-[16px] leading-normal tracking-[0.1px] text-black">
          {company} · {year}
        </p>
      </div>
    </div>
  )
}
