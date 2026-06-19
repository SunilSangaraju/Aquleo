import type { Metadata } from 'next'
import Logo from '@/components/Logo'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'About — Aquleo Technologies',
  description:
    'Aquleo Technologies is a software company based in Andhra Pradesh, India. Built in India. Built for the World.',
}

const Tag = ({ children }: { children: string }) => (
  <span className="inline-block text-[10px] font-montserrat font-medium border border-gray-200 rounded-full px-2.5 py-0.5 text-gray-text bg-white">
    {children}
  </span>
)

const values = [
  {
    name: 'Simplicity',
    desc: 'We remove complexity, not add to it.',
  },
  {
    name: 'Reliability',
    desc: 'Software that works when it needs to.',
  },
  {
    name: 'Honesty',
    desc: 'Clear timelines, clear pricing, clear communication.',
  },
  {
    name: 'Impact',
    desc: 'We measure success by what changes for our users.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-dark py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center bg-navy-mid text-navy-lightest border border-navy-light text-xs font-montserrat font-medium px-3 py-1.5 rounded-full mb-5">
            About us
          </span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white leading-tight max-w-2xl italic">
            &ldquo;Aquleo Technologies is a software company.&rdquo;
          </h1>
          <p className="font-montserrat text-navy-lightest mt-5 max-w-xl leading-relaxed">
            No fluff. No buzzwords. We are a small, focused team that builds software products and
            helps businesses ship technology — from Andhra Pradesh, India.
          </p>
        </div>
      </section>

      {/* 2-COLUMN SPLIT */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Left: Mission + Info */}
          <div className="flex flex-col gap-7">
            <div>
              <SectionLabel>Mission</SectionLabel>
              <h2 className="font-montserrat font-bold text-2xl text-navy-dark mt-3 mb-4">
                Build software that matters
              </h2>
              <p className="font-montserrat text-gray-text text-sm leading-relaxed">
                Aquleo Technologies was founded in 2025 with one goal: to build software that real
                people actually use. We started with products for kirana store owners and personal
                finance users in Andhra Pradesh — people who needed simple, reliable tools in their
                own language.
              </p>
              <p className="font-montserrat text-gray-text text-sm leading-relaxed mt-3">
                Today, we also take on client projects — helping startups and businesses across
                India and internationally to design, develop, and ship software. Everything we do
                is guided by the same principles: simplicity, reliability, and honesty.
              </p>
            </div>

            <div>
              <SectionLabel>Company</SectionLabel>
              <p className="font-montserrat text-gray-text text-sm leading-relaxed mt-3 mb-4">
                We are a registered MSME in Andhra Pradesh, India. We invoice in INR and
                internationally, and work with clients remotely across time zones.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Tag>Founded 2025</Tag>
                <Tag>Andhra Pradesh</Tag>
                {/* TODO: Add GST number once registered */}
                <Tag>GST registered</Tag>
                {/* TODO: Add MSME certificate number once registered */}
                <Tag>MSME certified</Tag>
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="flex flex-col">
            <SectionLabel>Values</SectionLabel>
            <div className="mt-4 flex flex-col divide-y divide-gray-100">
              {values.map((v) => (
                <div key={v.name} className="py-5">
                  <p className="font-montserrat font-bold text-navy-dark text-sm">{v.name}</p>
                  <p className="font-montserrat text-gray-text text-sm mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAGLINE CLOSE */}
      <section className="bg-navy-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <Logo size="md" variant="white" showWordmark={false} />
          <p className="font-montserrat font-medium text-[10px] text-navy-lighter tracking-[2.5px] uppercase">
            Andhra Pradesh, India · Est. 2025
          </p>
          <p className="font-montserrat font-bold text-3xl md:text-4xl italic text-gold-bright max-w-xl leading-snug">
            &ldquo;Built in India. Built for the World.&rdquo;
          </p>
        </div>
      </section>
    </>
  )
}
