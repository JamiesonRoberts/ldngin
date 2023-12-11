import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'
import { Montserrat, Playfair_Display } from 'next/font/google'

import '@/components/_globals/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat',
  fallback: ['sans-serif'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--playfair-display',
  fallback: ['serif'],
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#DEDEDE' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1C1B' },
  ],
  colorScheme: 'dark light',
}

export const metadata = {
  metadataBase: new URL('https://ldngin.ca'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en-CA'
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <CloudflareWebAnalyticsProvider token={'XXXXXXXXX'} />
      <body>{children}</body>
    </html>
  )
}
