import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Aquleo Technologies',
  description: 'Terms of service for Aquleo Technologies.',
}

export default function TermsPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-montserrat font-semibold text-[9px] uppercase tracking-[2.5px] text-gray-muted mb-3">
          Legal
        </p>
        <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-navy-dark mb-2">
          Terms of Service
        </h1>
        <p className="font-montserrat text-gray-muted text-xs mb-10">Last updated: June 2025</p>

        <div className="flex flex-col gap-8 font-montserrat text-gray-text text-sm leading-relaxed">
          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">1. Acceptance</h2>
            <p>
              By accessing this website or engaging Aquleo Technologies for services, you agree to
              these terms. If you do not agree, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">2. Services</h2>
            <p>
              Aquleo Technologies provides software development services and software products.
              Specific terms for client projects are governed by individual service agreements
              agreed upon before work begins.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">3. Intellectual property</h2>
            <p>
              All content on this website is the property of Aquleo Technologies unless otherwise
              stated. For client projects, intellectual property terms are defined in the project
              agreement — we offer full source code handover as standard.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">4. Limitation of liability</h2>
            <p>
              Aquleo Technologies is not liable for any indirect, incidental, or consequential
              damages arising from use of this website or our services beyond what is agreed in a
              signed service agreement.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">5. Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the
              jurisdiction of courts in Andhra Pradesh, India.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">6. Contact</h2>
            <p>
              For any questions about these terms, contact us at{' '}
              <a href="mailto:hello@aquleo.in" className="text-navy hover:underline">
                hello@aquleo.in
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="font-montserrat font-bold text-sm text-navy hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
