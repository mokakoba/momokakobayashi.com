import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Cormorant_Garamond } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
})


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Momoka Kobayashi',
    template: '%s | Momoka Kobayashi',
  },
  description: 'Software engineer, writer, and maker in New York.',
  openGraph: {
    title: 'Momoka Kobayashi',
    description: 'Software engineer, writer, and maker in New York.',
    url: baseUrl,
    siteName: 'Momoka Kobayashi',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-stone-900 bg-[#f0ebe2] dark:text-stone-100 dark:bg-[#18140d]',
        GeistSans.variable,
        GeistMono.variable,
        cormorant.variable
      )}
    >
      <body className="antialiased max-w-xl mx-6 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
