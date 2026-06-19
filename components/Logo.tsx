type LogoSize = 'sm' | 'md' | 'lg'
type LogoVariant = 'default' | 'white'

interface LogoProps {
  size?: LogoSize
  variant?: LogoVariant
  showWordmark?: boolean
}

const configs = {
  sm: {
    px: 28,
    hexPoints: '14,2 24,8 24,20 14,26 4,20 4,8',
    droplet: 'M14,7 C17.5,10.5 20,14.5 20,18.5 A6,6 0 1,1 8,18.5 C8,14.5 10.5,10.5 14,7 Z',
    bolt: '15,10 11,16 14,16 12,22 17,16 14,16',
    wordSize: 'text-sm',
    subSize: 'text-[8px]',
  },
  md: {
    px: 44,
    hexPoints: '22,3 38,12 38,32 22,41 6,32 6,12',
    droplet: 'M22,11 C27.5,16.5 31,22.5 31,29 A9,9 0 1,1 13,29 C13,22.5 16.5,16.5 22,11 Z',
    bolt: '24,16 18,25 22,25 19,34 27,25 23,25',
    wordSize: 'text-base',
    subSize: 'text-[9px]',
  },
  lg: {
    px: 64,
    hexPoints: '32,4 56,18 56,46 32,60 8,46 8,18',
    droplet: 'M32,15 C40,23 45,32 45,42 A13,13 0 1,1 19,42 C19,32 24,23 32,15 Z',
    bolt: '34,22 26,36 32,36 28,50 38,36 33,36',
    wordSize: 'text-xl',
    subSize: 'text-[11px]',
  },
}

export default function Logo({ size = 'md', variant = 'default', showWordmark = true }: LogoProps) {
  const c = configs[size]
  const isWhite = variant === 'white'
  const hexFill = isWhite ? '#FFFFFF' : '#185FA5'
  const dropletFill = isWhite ? '#042C53' : '#E6F1FB'
  const wordColor = isWhite ? 'text-white' : 'text-navy-dark'
  const subColor = isWhite ? 'text-navy-lightest' : 'text-gray-muted'

  return (
    <div className="flex items-center gap-2">
      <svg
        width={c.px}
        height={c.px}
        viewBox={`0 0 ${c.px} ${c.px}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <polygon points={c.hexPoints} fill={hexFill} />
        <path d={c.droplet} fill={dropletFill} />
        <polygon points={c.bolt} fill="#EF9F27" />
      </svg>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={`font-montserrat font-bold tracking-widest uppercase ${c.wordSize} ${wordColor}`}>
            AQULEO
          </span>
          <span className={`font-montserrat font-medium tracking-widest uppercase ${c.subSize} ${subColor}`}>
            TECHNOLOGIES
          </span>
        </div>
      )}
    </div>
  )
}
