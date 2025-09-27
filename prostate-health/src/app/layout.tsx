import type { Metadata, Viewport } from 'next'
import './globals.css'
import UTMTracker from '../components/UTMTracker'

export const metadata: Metadata = {
  title: 'ProstaVive - The Most Potent Formula for Prostate Health & Strong Flow | SixtyPlusUSA',
  description: 'Discover ProstaVive - the most potent, fast-acting formula for prostate health and strong flow. Thousands of men trust our all-natural ingredients for better prostate function, energy, and sleep.',
  keywords: 'ProstaVive, prostate health, prostate supplement, natural prostate support, strong urine flow, men over 60, prostate health formula, all natural ingredients',
  authors: [{ name: 'SixtyPlusUSA' }],
  robots: 'index, follow',
  openGraph: {
    title: 'ProstaVive - The Most Potent Formula for Prostate Health & Strong Flow',
    description: 'Discover ProstaVive - the most potent, fast-acting formula for prostate health and strong flow. Thousands of men trust our all-natural ingredients.',
    type: 'website',
    locale: 'en_US',
    url: 'https://prostavive.org/',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <UTMTracker>
          {children}
        </UTMTracker>
      </body>
    </html>
  )
}