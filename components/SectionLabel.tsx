interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className={`font-montserrat font-semibold uppercase tracking-[2.5px] text-[9px] ${
        light ? 'text-navy-light' : 'text-gray-muted'
      }`}
    >
      {children}
    </p>
  )
}
