type MockupVariant = 'lekka' | 'paisaalens'

interface PhoneMockupProps {
  variant: MockupVariant
}

function LekkaScreen() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3" style={{ backgroundColor: '#04342C' }}>
        <p className="font-montserrat font-bold text-xs tracking-wide" style={{ color: '#5DCAA5' }}>
          LEKKA — లెక్క
        </p>
        <p className="font-montserrat text-[10px] mt-0.5" style={{ color: '#A0D9C8' }}>
          Shop ledger · Today
        </p>
      </div>
      {/* Body */}
      <div className="flex-1 px-3 py-3" style={{ backgroundColor: '#F5F0E8' }}>
        {/* Balance card */}
        <div className="rounded-lg p-3 mb-3" style={{ backgroundColor: '#04342C' }}>
          <p className="font-montserrat text-[9px] font-medium" style={{ color: '#A0D9C8' }}>
            OUTSTANDING BALANCE
          </p>
          <p className="font-montserrat font-bold text-lg text-white mt-0.5">₹5,450</p>
          <p className="font-montserrat text-[9px]" style={{ color: '#5DCAA5' }}>
            3 customers · Updated now
          </p>
        </div>
        {/* Customer rows */}
        {[
          { name: 'Raju Stores', amount: '₹1,200' },
          { name: 'Lakshmi Shop', amount: '₹850' },
          { name: 'Venkat Traders', amount: '₹3,400' },
        ].map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between py-2 border-b"
            style={{ borderColor: '#E0D9CC' }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                style={{ backgroundColor: '#04342C' }}
              >
                {c.name[0]}
              </div>
              <span className="font-montserrat text-[10px] font-medium text-gray-text">{c.name}</span>
            </div>
            <span className="font-montserrat text-[10px] font-bold" style={{ color: '#04342C' }}>
              {c.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PaisaaLensScreen() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 bg-navy-dark">
        <p className="font-montserrat font-bold text-xs tracking-wide text-navy-lightest">
          PAISAALENS
        </p>
        <p className="font-montserrat text-[10px] mt-0.5 text-navy-lighter">
          June 2026 · All accounts
        </p>
      </div>
      {/* Body */}
      <div className="flex-1 px-3 py-3 bg-navy-bg">
        {/* Total card */}
        <div className="rounded-lg p-3 mb-3 bg-navy-dark">
          <p className="font-montserrat text-[9px] font-medium text-navy-lighter">
            TOTAL SPENDING
          </p>
          <p className="font-montserrat font-bold text-lg text-white mt-0.5">₹38,200</p>
          <p className="font-montserrat text-[9px] text-navy-lightest">
            This month · 3 categories
          </p>
        </div>
        {/* Category rows */}
        {[
          { name: 'Food & dining', amount: '₹12,400', pct: 32 },
          { name: 'Transport', amount: '₹8,600', pct: 22 },
          { name: 'Subscriptions', amount: '₹4,200', pct: 11 },
        ].map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between py-2 border-b border-navy-lighter/30"
          >
            <div className="flex-1">
              <p className="font-montserrat text-[10px] font-medium text-navy-dark">{c.name}</p>
              <div className="h-1 rounded-full bg-navy-lighter/30 mt-1 w-full">
                <div
                  className="h-1 rounded-full bg-navy"
                  style={{ width: `${c.pct}%` }}
                />
              </div>
            </div>
            <span className="font-montserrat text-[10px] font-bold text-navy-dark ml-3">
              {c.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PhoneMockup({ variant }: PhoneMockupProps) {
  return (
    <div className="flex items-center justify-center py-8 px-4">
      {/* Phone frame */}
      <div
        className="relative rounded-[2rem] overflow-hidden border-2 border-gray-200"
        style={{ width: 200, height: 360, backgroundColor: '#fff' }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-xl z-10" />
        {/* Screen content */}
        <div className="absolute inset-0 mt-5 overflow-hidden">
          {variant === 'lekka' ? <LekkaScreen /> : <PaisaaLensScreen />}
        </div>
        {/* Home bar */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full" />
      </div>
    </div>
  )
}
