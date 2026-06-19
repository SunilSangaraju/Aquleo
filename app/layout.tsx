import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aquleo Technologies — Built in India. Built for the World.',
  description:
    'Aquleo Technologies is a software company from Andhra Pradesh, India. We build products and IT services that work.',
  keywords: ['software company', 'India', 'Andhra Pradesh', 'mobile apps', 'web development'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
