import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service — Aquleo Technologies',
  description: 'Terms of service for Aquleo Technologies website.',
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-3">
    <h2 className="font-montserrat font-bold text-navy-dark text-lg">{title}</h2>
    <div className="font-montserrat text-gray-text text-sm leading-[1.7]">{children}</div>
  </div>
)

export default function TermsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-dark py-12 md:py-16">
        <div className="max-w-[760px] mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-montserrat font-medium text-navy-lightest text-sm hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-white">
            Terms of Service
          </h1>
          <p className="font-montserrat text-navy-lighter text-sm mt-3">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[760px] mx-auto px-6 flex flex-col gap-10">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing aquleo.in, you agree to these terms. If you do not agree, please do not
              use this website.
            </p>
          </Section>

          <Section title="2. About Aquleo Technologies">
            <p>
              Aquleo Technologies is a software products and IT services company based in Andhra
              Pradesh, India. We build mobile applications, web platforms, and custom software
              solutions.
            </p>
          </Section>

          <Section title="3. Use of Website">
            <p className="mb-3">You may use this website to:</p>
            <ul className="flex flex-col gap-1.5 pl-4 mb-4">
              {[
                'Learn about our products and services',
                'Contact us with business enquiries',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-navy mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-3">You may not use this website to:</p>
            <ul className="flex flex-col gap-1.5 pl-4">
              {[
                'Submit false or misleading information',
                'Attempt to gain unauthorised access to our systems',
                'Use our content without permission',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-navy mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content on aquleo.in — including text, design, logos, and graphics — is owned by
              Aquleo Technologies. You may not reproduce or use our content without prior written
              permission.
            </p>
          </Section>

          <Section title="5. Products and Services">
            <p>
              Our software products (Lekka, PaisaaLens) and IT services are subject to separate
              agreements provided at the time of engagement. Information on this website is for
              general informational purposes only and does not constitute a contractual offer.
            </p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>
              This website is provided &ldquo;as is&rdquo; without warranties of any kind. We do
              not guarantee uninterrupted or error-free operation of this website.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              Aquleo Technologies shall not be liable for any indirect, incidental, or consequential
              damages arising from use of this website. Our total liability is limited to the maximum
              extent permitted by applicable law.
            </p>
          </Section>

          <Section title="8. Governing Law">
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of courts in Andhra Pradesh, India.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have any questions about these terms, please contact us:</p>
            <div className="mt-3 flex flex-col gap-1">
              <a href="mailto:hello@aquleo.in" className="text-navy font-medium hover:underline">
                hello@aquleo.in
              </a>
              <span>Aquleo Technologies</span>
              <span>Andhra Pradesh, India</span>
            </div>
          </Section>

          <Section title="10. Updates to These Terms">
            <p>
              We may update these terms at any time. Continued use of this website after changes are
              posted constitutes your acceptance of the updated terms.
            </p>
          </Section>

          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-navy hover:underline"
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
