import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aquleo.in'),
  title: 'Aquleo Technologies — Built in India. Built for the World.',
  description:
    'Software products and IT services from Andhra Pradesh, India. We build mobile apps, web platforms, and custom software.',
  keywords: ['software company', 'India', 'Andhra Pradesh', 'mobile apps', 'web development'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Aquleo Technologies',
    description: 'Built in India. Built for the World.',
    url: 'https://www.aquleo.in',
    siteName: 'Aquleo Technologies',
    images: [
      {
        url: 'https://www.aquleo.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aquleo Technologies — Built in India. Built for the World.',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aquleo Technologies',
    description: 'Built in India. Built for the World.',
    images: ['https://www.aquleo.in/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
