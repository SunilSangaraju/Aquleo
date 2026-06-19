import Link from 'next/link'
import type { Metadata } from 'next'
import PhoneMockup from '@/components/PhoneMockup'

export const metadata: Metadata = {
  title: 'Products — Aquleo Technologies',
  description: 'Lekka and PaisaaLens — software products built for real people.',
}

const Tag = ({ children, variant = 'default' }: { children: string; variant?: 'default' | 'green' | 'blue' }) => {
  const styles = {
    default: 'bg-white border border-gray-200 text-gray-text',
    green: 'bg-[#E1F5EE] border border-[#5DCAA5] text-[#085041]',
    blue: 'bg-navy-bg border border-navy-lighter text-navy-mid',
  }
  return (
    <span className={`inline-block text-[10px] font-montserrat font-medium rounded-full px-2.5 py-0.5 ${styles[variant]}`}>
      {children}
    </span>
  )
}

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-dark py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center bg-navy-mid text-navy-lightest border border-navy-light text-xs font-montserrat font-medium px-3 py-1.5 rounded-full mb-5">
            Our products
          </span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white leading-tight max-w-2xl">
            Software products built for{' '}
            <span className="italic text-gold-bright">real people</span>
          </h1>
          <p className="font-montserrat text-navy-lightest mt-4 max-w-xl leading-relaxed">
            We&apos;re builders first. Every product we make starts with a real problem we experienced
            ourselves.
          </p>
        </div>
      </section>

      {/* LEKKA ROW */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0">
          {/* Left */}
          <div className="py-12 md:py-16 md:pr-12 flex flex-col gap-5">
            <Tag variant="green">Launching soon</Tag>
            <h2 className="font-montserrat font-bold text-3xl text-navy-dark">
              Lekka — లెక్క
            </h2>
            <p className="font-montserrat italic text-gray-text text-sm">
              The smarter way to run your shop&apos;s accounts
            </p>
            <p className="font-montserrat text-gray-text text-sm leading-relaxed">
              Lekka is a lightweight ledger app built specifically for kirana and small shop owners
              across Andhra Pradesh and Telangana. Track who owes you, send WhatsApp reminders, and
              record cash transactions — all in Telugu or English, with full offline support.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Android', 'Offline-first', 'Voice entry', 'Telugu + English', 'WhatsApp'].map(
                (t) => <Tag key={t}>{t}</Tag>
              )}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-montserrat font-bold bg-gold-bright text-gold-dark px-6 py-2.5 rounded-md text-sm transition-opacity hover:opacity-90 w-fit mt-2"
            >
              Join waitlist
            </Link>
          </div>

          {/* Right — mockup */}
          <div className="bg-navy-bg flex items-center justify-center">
            <PhoneMockup variant="lekka" />
          </div>
        </div>
      </section>

      {/* PAISAALENS ROW */}
      <section>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0">
          {/* Left */}
          <div className="py-12 md:py-16 md:pr-12 flex flex-col gap-5">
            <Tag variant="blue">In development</Tag>
            <h2 className="font-montserrat font-bold text-3xl text-navy-dark">PaisaaLens</h2>
            <p className="font-montserrat italic text-gray-text text-sm">
              Know where every paisa goes
            </p>
            <p className="font-montserrat text-gray-text text-sm leading-relaxed">
              PaisaaLens automatically reads your UPI and bank SMS messages to categorise spending,
              track budgets across multiple accounts, and give you a clear picture of your monthly
              finances — secured with biometric authentication.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Android', 'SMS auto-import', 'Multi-bank', 'Biometric', 'UPI-ready'].map(
                (t) => <Tag key={t}>{t}</Tag>
              )}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-montserrat font-bold bg-gold-bright text-gold-dark px-6 py-2.5 rounded-md text-sm transition-opacity hover:opacity-90 w-fit mt-2"
            >
              Get early access
            </Link>
          </div>

          {/* Right — mockup */}
          <div className="bg-navy-bg flex items-center justify-center">
            <PhoneMockup variant="paisaalens" />
          </div>
        </div>
      </section>
    </>
  )
}
