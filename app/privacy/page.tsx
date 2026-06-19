import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Aquleo Technologies',
  description: 'Privacy policy for Aquleo Technologies website.',
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-3">
    <h2 className="font-montserrat font-bold text-navy-dark text-lg">{title}</h2>
    <div className="font-montserrat text-gray-text text-sm leading-[1.7]">{children}</div>
  </div>
)

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="font-montserrat text-navy-lighter text-sm mt-3">
            Last updated: June 2025
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[760px] mx-auto px-6 flex flex-col gap-10">

          <Section title="1. Introduction">
            <p>
              Aquleo Technologies (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
              committed to protecting your privacy. This policy explains how we handle information
              submitted through aquleo.in.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p className="mb-3">
              We only collect information you voluntarily provide through our contact form:
            </p>
            <ul className="flex flex-col gap-1.5 pl-4">
              {[
                'Full name',
                'Email address',
                'Company name (optional)',
                'Subject of enquiry',
                'Message content',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-navy mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p className="mb-3">We use your information only for the following purposes:</p>
            <ul className="flex flex-col gap-1.5 pl-4">
              {[
                'To respond to your enquiry',
                'To communicate about potential projects',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-navy mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your information with third parties for marketing
              purposes.
            </p>
          </Section>

          <Section title="4. Data Storage">
            <p>
              Form submissions are transmitted via Resend (resend.com) and delivered to our email
              inbox. We do not store form data in any database.
            </p>
          </Section>

          <Section title="5. Third Party Services">
            <p className="mb-3">We use the following third-party services to operate this website:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                { name: 'Resend', desc: 'email delivery', url: 'https://resend.com/privacy' },
                { name: 'Vercel', desc: 'website hosting', url: 'https://vercel.com/legal/privacy-policy' },
                { name: 'Zoho Mail', desc: 'email management', url: 'https://zoho.com/privacy.html' },
              ].map((s) => (
                <li key={s.name} className="flex items-start gap-2">
                  <span className="text-navy mt-0.5">—</span>
                  <span>
                    <strong className="font-semibold text-navy-dark">{s.name}</strong>{' '}
                    ({s.desc}) —{' '}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy underline hover:opacity-75"
                    >
                      {s.url.replace('https://', '')}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="6. Cookies">
            <p>
              This website does not use tracking cookies or analytics cookies. No cookie consent
              banner is required.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p className="mb-3">
              You may contact us at{' '}
              <a href="mailto:hello@aquleo.in" className="text-navy underline hover:opacity-75">
                hello@aquleo.in
              </a>{' '}
              to:
            </p>
            <ul className="flex flex-col gap-1.5 pl-4">
              {[
                'Request deletion of any information you shared with us',
                'Ask what information we hold about you',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-navy mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="8. Contact Us">
            <p>If you have any questions about this policy, please contact us:</p>
            <div className="mt-3 flex flex-col gap-1">
              <a href="mailto:hello@aquleo.in" className="text-navy font-medium hover:underline">
                hello@aquleo.in
              </a>
              <span>Aquleo Technologies</span>
              <span>Andhra Pradesh, India</span>
            </div>
          </Section>

          <Section title="9. Updates to This Policy">
            <p>
              We may update this policy from time to time. Any changes will be posted on this page
              with an updated date at the top.
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
