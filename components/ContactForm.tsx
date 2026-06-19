'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import Logo from './Logo'

type Status = 'idle' | 'loading' | 'success' | 'error'

const EMPTY_FORM = { name: '', email: '', company: '', subject: '', message: '' }

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [status, setStatus] = useState<Status>('idle')
  const [validationError, setValidationError] = useState('')

  useEffect(() => {
    const subject = searchParams.get('subject')
    if (subject) {
      setFormData((prev) => ({ ...prev, subject: decodeURIComponent(subject) }))
    }
  }, [searchParams])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (validationError) setValidationError('')
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your full name.'
    if (!formData.email.trim()) return 'Please enter your email address.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address.'
    if (!formData.subject) return 'Please select a subject.'
    if (!formData.message.trim()) return 'Please enter a message.'
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const error = validate()
    if (error) { setValidationError(error); return }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData(EMPTY_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full font-montserrat text-sm text-navy-dark bg-white border border-gray-200 rounded-md px-4 py-2.5 outline-none focus:border-navy-light transition-colors placeholder:text-gray-muted disabled:opacity-50'
  const labelClass = 'font-montserrat font-medium text-xs text-navy-dark mb-1.5 block'
  const isLoading = status === 'loading'
  const isDone = status === 'success'

  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
      {/* Left: Form */}
      <div className="bg-white rounded-xl p-7 md:p-8" style={{ border: '0.5px solid #e5e7eb' }}>
        <h2 className="font-montserrat font-bold text-xl text-navy-dark mb-6">
          Send us a message
        </h2>

        {status === 'success' && (
          <div className="mb-5 rounded-md px-4 py-3 bg-[#E1F5EE] border border-[#5DCAA5]">
            <p className="font-montserrat font-medium text-sm text-[#085041]">
              Message sent! We will reply within 48 hours.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-5 rounded-md px-4 py-3 bg-red-50 border border-red-200">
            <p className="font-montserrat font-medium text-sm text-red-700">
              Failed to send. Please email{' '}
              <a href="mailto:hello@aquleo.in" className="underline">
                hello@aquleo.in
              </a>{' '}
              directly.
            </p>
          </div>
        )}

        {validationError && (
          <div className="mb-5 rounded-md px-4 py-3 bg-red-50 border border-red-200">
            <p className="font-montserrat font-medium text-sm text-red-700">{validationError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div>
            <label htmlFor="name" className={labelClass}>Full name</label>
            <input
              id="name" name="name" type="text"
              placeholder="Your full name"
              value={formData.name} onChange={handleChange}
              disabled={isLoading || isDone}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>Email address</label>
            <input
              id="email" name="email" type="email"
              placeholder="you@example.com"
              value={formData.email} onChange={handleChange}
              disabled={isLoading || isDone}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Company <span className="text-gray-muted font-normal">(optional)</span>
            </label>
            <input
              id="company" name="company" type="text"
              placeholder="Your company name"
              value={formData.company} onChange={handleChange}
              disabled={isLoading || isDone}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="subject" className={labelClass}>Subject</label>
            <select
              id="subject" name="subject"
              value={formData.subject} onChange={handleChange}
              disabled={isLoading || isDone}
              className={inputClass}
            >
              <option value="" disabled>Select a subject</option>
              <option value="New project">New project</option>
              <option value="Product enquiry">Product enquiry</option>
              <option value="Lekka Waitlist">Lekka Waitlist</option>
              <option value="PaisaaLens Early Access">PaisaaLens Early Access</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Message</label>
            <textarea
              id="message" name="message"
              rows={5}
              placeholder="Tell us about your project or question..."
              value={formData.message} onChange={handleChange}
              disabled={isLoading || isDone}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || isDone}
            className="w-full font-montserrat font-bold bg-gold-bright text-gold-dark py-3 rounded-md text-sm transition-opacity hover:opacity-90 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : isDone ? 'Message sent ✅' : 'Send message'}
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
              <a href="mailto:hello@aquleo.in" className="font-montserrat text-navy-dark text-sm hover:text-navy transition-colors">
                hello@aquleo.in
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail size={18} className="text-navy mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-montserrat font-medium text-xs text-gray-muted mb-1">Business</p>
              <a href="mailto:business@aquleo.in" className="font-montserrat text-navy-dark text-sm hover:text-navy transition-colors">
                business@aquleo.in
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessageSquare size={18} className="text-navy mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-montserrat font-medium text-xs text-gray-muted mb-1">WhatsApp</p>
              {/* TODO: Replace XXXXXXXXXX with real WhatsApp number */}
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-navy-dark text-sm hover:text-navy transition-colors"
              >
                +91 XXXXXXXXXX
              </a>
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
  )
}
