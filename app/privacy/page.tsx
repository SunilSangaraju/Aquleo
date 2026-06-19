import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Aquleo Technologies',
  description: 'Privacy policy for Aquleo Technologies.',
}

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-montserrat font-semibold text-[9px] uppercase tracking-[2.5px] text-gray-muted mb-3">
          Legal
        </p>
        <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-navy-dark mb-2">
          Privacy Policy
        </h1>
        <p className="font-montserrat text-gray-muted text-xs mb-10">Last updated: June 2025</p>

        <div className="flex flex-col gap-8 font-montserrat text-gray-text text-sm leading-relaxed">
          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">1. Who we are</h2>
            <p>
              Aquleo Technologies is a software company registered in Andhra Pradesh, India.
              We operate the website at aquleo.in and build software products including Lekka and
              PaisaaLens.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">2. Information we collect</h2>
            <p>
              When you use our contact form, we collect your name, email address, company name
              (optional), and the message you submit. We do not collect any information
              automatically beyond standard server logs.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">3. How we use your information</h2>
            <p>
              We use your contact details solely to respond to your enquiry. We do not sell, rent,
              or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">4. Data retention</h2>
            <p>
              We retain enquiry emails for as long as necessary to respond and follow up. You may
              request deletion of your data at any time by emailing{' '}
              <a href="mailto:hello@aquleo.in" className="text-navy hover:underline">
                hello@aquleo.in
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-bold text-navy-dark text-base mb-2">5. Contact</h2>
            <p>
              For any privacy-related questions, contact us at{' '}
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
