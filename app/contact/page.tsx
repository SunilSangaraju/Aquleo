import { Suspense } from 'react'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Aquleo Technologies',
  description: 'Get in touch with Aquleo Technologies. We respond within 48 hours.',
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-dark py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center bg-navy-mid text-navy-lightest border border-navy-light text-xs font-montserrat font-medium px-3 py-1.5 rounded-full mb-5">
            Get in touch
          </span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white leading-tight italic">
            &ldquo;Let&apos;s talk&rdquo;
          </h1>
          <p className="font-montserrat text-navy-lightest mt-4 max-w-xl leading-relaxed">
            We respond to every message within 48 hours.
          </p>
        </div>
      </section>

      {/* FORM — Suspense required for useSearchParams in ContactForm */}
      <section className="py-14 md:py-20">
        <Suspense fallback={
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-96 rounded-xl bg-gray-50 animate-pulse" />
          </div>
        }>
          <ContactForm />
        </Suspense>
      </section>
    </>
  )
}
