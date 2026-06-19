import Link from 'next/link'
import { Smartphone, Globe, Briefcase, Rocket, Clock, Code } from 'lucide-react'
import Logo from '@/components/Logo'
import StatBar from '@/components/StatBar'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aquleo Technologies — We build software that works.',
  description:
    'Aquleo Technologies builds software products and IT services from Andhra Pradesh, India.',
}

const productTags = (items: string[]) =>
  items.map((t) => (
    <span
      key={t}
      className="inline-block text-[10px] font-montserrat font-medium border border-gray-200 rounded-full px-2.5 py-0.5 text-gray-text bg-white"
    >
      {t}
    </span>
  ))

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Logo feature block */}
          <div className="flex flex-col items-center md:items-start gap-3 md:w-64 flex-shrink-0">
            <Logo size="lg" variant="white" showWordmark={false} />
            <p className="font-montserrat font-bold text-2xl text-white tracking-wide text-center md:text-left">
              AQULEO TECHNOLOGIES
            </p>
            <p className="font-montserrat font-medium text-[10px] text-navy-lighter tracking-[2.5px] uppercase text-center md:text-left">
              Andhra Pradesh, India
            </p>
            <p className="font-montserrat font-medium italic text-gold-bright text-sm text-center md:text-left">
              Built in India. Built for the World.
            </p>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-5 flex-1 items-center md:items-start text-center md:text-left">
            <span className="inline-flex items-center bg-navy-mid text-navy-lightest border border-navy-light text-xs font-montserrat font-medium px-3 py-1.5 rounded-full">
              Software products &amp; IT services
            </span>

            <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-white leading-tight">
              We build software that{' '}
              <span className="italic text-gold-bright">works.</span>
            </h1>

            <p className="font-montserrat font-normal text-navy-lightest max-w-lg leading-relaxed text-base">
              From Andhra Pradesh to the world — we ship mobile apps, web platforms, and custom
              software that real people actually use.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                href="/products"
                className="font-montserrat font-bold bg-gold-bright text-gold-dark px-6 py-2.5 rounded-md text-sm transition-opacity hover:opacity-90"
              >
                Explore products
              </Link>
              <Link
                href="/services"
                className="font-montserrat font-bold border border-navy-light text-navy-lightest px-6 py-2.5 rounded-md text-sm transition-colors hover:bg-navy-light hover:text-white"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <StatBar />

      {/* PRODUCTS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Our Products</SectionLabel>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy-dark mt-3 mb-4">
            Software people actually use
          </h2>
          <p className="font-montserrat text-gray-text max-w-xl mb-10 leading-relaxed">
            We build our own products first — so every decision is informed by the experience of
            being a real user.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="bg-white rounded-xl p-5"
              style={{ border: '0.5px solid #e5e7eb', borderTop: '3px solid #185FA5' }}
            >
              <p className="font-montserrat font-bold text-xl text-navy-dark mb-3">
                Lekka — లెక్క
              </p>
              <p className="font-montserrat text-gray-text text-sm leading-relaxed mb-4">
                A simple ledger app for kirana shop owners to track credit, collect payments, and
                manage customers — in Telugu and English, with voice entry support.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {productTags(['Telugu + English', 'Voice entry', 'Android', 'Launching soon'])}
              </div>
            </div>

            <div
              className="bg-white rounded-xl p-5"
              style={{ border: '0.5px solid #e5e7eb', borderTop: '3px solid #EF9F27' }}
            >
              <p className="font-montserrat font-bold text-xl text-navy-dark mb-3">PaisaaLens</p>
              <p className="font-montserrat text-gray-text text-sm leading-relaxed mb-4">
                Personal finance tracker that auto-imports UPI transactions via SMS, supports
                multiple banks, and shows exactly where your money is going.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {productTags(['UPI-ready', 'Multi-bank', 'Android', 'In development'])}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy-dark mt-3 mb-10">
            We also build for you
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Smartphone size={22} className="text-navy" />,
                title: 'Mobile apps',
                desc: 'React Native, Expo — Android & iOS',
              },
              {
                icon: <Globe size={22} className="text-navy" />,
                title: 'Web platforms',
                desc: 'Next.js full-stack web applications',
              },
              {
                icon: <Briefcase size={22} className="text-gold-bright" />,
                title: 'Custom software',
                desc: 'Bespoke tools for your business workflow',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-5 flex items-start gap-4"
                style={{ border: '0.5px solid #e5e7eb' }}
              >
                <div className="mt-0.5 flex-shrink-0">{s.icon}</div>
                <div>
                  <p className="font-montserrat font-bold text-navy-dark text-sm">{s.title}</p>
                  <p className="font-montserrat text-gray-text text-xs mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AQULEO */}
      <section className="bg-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel light>Why Aquleo</SectionLabel>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mt-3 mb-10">
            Why businesses choose us
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Rocket size={22} className="text-gold-bright" />,
                title: 'We are product builders',
                body: 'We build our own apps — so we know exactly what it takes to ship yours.',
              },
              {
                icon: <Clock size={22} className="text-gold-bright" />,
                title: '48h response guarantee',
                body: 'Every enquiry answered within 48 hours. No exceptions.',
              },
              {
                icon: <Code size={22} className="text-gold-bright" />,
                title: 'You own the code',
                body: 'Full source code handover. No lock-in. Ever.',
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-navy-mid border border-navy rounded-xl p-6 flex flex-col gap-3"
              >
                {c.icon}
                <p className="font-montserrat font-bold text-white text-base">{c.title}</p>
                <p className="font-montserrat text-navy-lightest text-sm leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gold-bright py-14">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gold-dark">
            Ready to build something great?
          </h2>
          <p className="font-montserrat text-gold-darker text-base max-w-md">
            Let&apos;s talk about your idea. No obligation, no jargon.
          </p>
          <Link
            href="/contact"
            className="font-montserrat font-bold bg-navy-dark text-white px-8 py-3 rounded-md text-sm transition-opacity hover:opacity-90 mt-2"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
