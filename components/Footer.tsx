import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-darkest">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size="sm" variant="white" showWordmark={false} />
          <div className="flex flex-col leading-tight">
            <span className="font-montserrat font-bold text-white text-sm tracking-wide">
              AQULEO TECHNOLOGIES
            </span>
            <span className="font-montserrat font-medium italic text-gray-muted text-xs mt-0.5">
              Built in India. Built for the World.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 font-montserrat text-xs text-gray-muted">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <span>·</span>
          <span>© {new Date().getFullYear()} Aquleo Technologies</span>
          <span>·</span>
          <span>Monika Dommaraju</span>
          <span>·</span>
          <span>Founder, Aquleo Technologies</span>
          <span>·</span>
          <a href="mailto:hello@aquleo.in" className="hover:text-white transition-colors">hello@aquleo.in</a>
        </div>
      </div>
    </footer>
  )
}
