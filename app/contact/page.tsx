'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import Logo from '@/components/Logo'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Backend integration to be added
    alert('Thank you! We will get back to you within 48 hours.')
  }

  const inputClass =
    'w-full font-montserrat text-sm text-navy-dark bg-white border border-gray-200 rounded-md px-4 py-2.5 outline-none focus:border-navy-light transition-colors placeholder:text-gray-muted'
  const labelClass = 'font-montserrat font-medium text-xs text-navy-dark mb-1.5 block'

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

      {/* 2-COLUMN SPLIT */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="bg-white rounded-xl p-7 md:p-8" style={{ border: '0.5px solid #e5e7eb' }}>
            <h2 className="font-montserrat font-bold text-xl text-navy-dark mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>
                  Company <span className="text-gray-muted font-normal">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="new-project">New project</option>
                  <option value="product-enquiry">Product enquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or question..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full font-montserrat font-bold bg-gold-bright text-gold-dark py-3 rounded-md text-sm transition-opacity hover:opacity-90 mt-1"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right: Contact info */}
          <div className="bg-navy-bg rounded-xl p-7 md:p-8 flex flex-col gap-6" style={{ border: '0.5px solid #e5e7eb' }}>
            <h2 className="font-montserrat font-bold text-xl text-navy-dark">Contact details</h2>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-montserrat font-medium text-xs text-gray-muted mb-1">General</p>
                  <a
                    href="mailto:hello@aquleo.in"
                    className="font-montserrat text-navy-dark text-sm hover:text-navy transition-colors"
                  >
                    hello@aquleo.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-montserrat font-medium text-xs text-gray-muted mb-1">Business</p>
                  <a
                    href="mailto:business@aquleo.in"
                    className="font-montserrat text-navy-dark text-sm hover:text-navy transition-colors"
                  >
                    business@aquleo.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare size={18} className="text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-montserrat font-medium text-xs text-gray-muted mb-1">WhatsApp</p>
                  <span className="font-montserrat text-navy-dark text-sm">+91 XXXXXXXXXX</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-montserrat font-medium text-xs text-gray-muted mb-1">Location</p>
                  <span className="font-montserrat text-navy-dark text-sm">Andhra Pradesh, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-montserrat font-medium text-xs text-gray-muted mb-1">Response time</p>
                  <p className="font-montserrat font-bold text-navy-dark text-sm">
                    Within 48 hours — guaranteed.
                  </p>
                  <p className="font-montserrat text-gray-text text-xs mt-0.5">
                    Available 9 AM – 6 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Logo seal */}
            <div className="mt-auto bg-navy-dark rounded-xl p-5 flex items-center gap-3">
              <Logo size="sm" variant="white" showWordmark={false} />
              <div>
                <p className="font-montserrat font-bold text-white text-xs tracking-wide">
                  AQULEO TECHNOLOGIES
                </p>
                <p className="font-montserrat italic text-navy-lightest text-[10px] mt-0.5">
                  Built in India. Built for the World.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
