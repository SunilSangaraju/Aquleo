'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-navy-dark border-b border-navy-mid sticky top-0 z-50" style={{ borderBottomWidth: '0.5px' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Logo size="sm" variant="white" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-montserrat font-medium text-navy-lightest hover:text-white transition-colors text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center font-montserrat font-bold text-sm text-white border border-white px-4 py-1.5 rounded-md transition-colors hover:bg-white hover:text-navy-dark"
          style={{ borderWidth: '1.5px' }}
        >
          Contact us
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-dark border-t border-navy-mid px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-montserrat font-medium text-navy-lightest hover:text-white transition-colors text-sm"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center font-montserrat font-bold text-sm text-white border border-white px-4 py-1.5 rounded-md transition-colors hover:bg-white hover:text-navy-dark w-full mt-1"
            style={{ borderWidth: '1.5px' }}
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  )
}
