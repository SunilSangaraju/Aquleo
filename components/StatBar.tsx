const stats = [
  {
    value: '2',
    label: 'Products in development',
    highlight: false,
  },
  {
    value: '48h',
    label: 'Response guaranteed',
    highlight: true,
  },
  {
    value: '2025',
    label: 'Year founded',
    highlight: true,
  },
  {
    value: 'Global',
    label: 'Built for anywhere',
    highlight: false,
  },
]

export default function StatBar() {
  return (
    <div className="bg-white border-y border-gray-100 grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center py-6 px-4 ${
            i < stats.length - 1 ? 'border-r border-gray-100' : ''
          } ${s.highlight ? 'bg-gold-lightest' : ''}`}
        >
          <span
            className={`font-montserrat font-bold text-2xl ${
              s.highlight ? 'text-gold-darker' : 'text-navy'
            }`}
          >
            {s.value}
          </span>
          <span
            className={`font-montserrat font-medium text-xs mt-1 text-center ${
              s.highlight ? 'text-gold-mid' : 'text-gray-text'
            }`}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  )
}
