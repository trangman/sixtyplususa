import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UTMTracker from '../components/UTMTracker'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SixtyPlusUSA - Health & Wellness for Americans 60+',
  description: 'Helping Americans 60+ live healthier, happier lives through trusted health resources and wellness guidance.',
  keywords: 'senior health, wellness, 60 plus, health resources, senior wellness, aging health',
  authors: [{ name: 'SixtyPlusUSA' }],
  robots: 'index, follow',
  icons: [
    { rel: 'icon', url: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'icon', url: '/favicon.png', type: 'image/png' },
    { rel: 'shortcut icon', url: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', url: '/favicon.png', type: 'image/png' }
  ],
  openGraph: {
    title: 'SixtyPlusUSA - Health & Wellness for Americans 60+',
    description: 'Helping Americans 60+ live healthier, happier lives through trusted health resources and wellness guidance.',
    type: 'website',
    locale: 'en_US',
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
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <UTMTracker>
          {children}
        </UTMTracker>
      </body>
    </html>
  )
}