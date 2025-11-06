import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { baseUrl } from './sitemap'
import { Popup } from './components/popup'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Carl Carl Carl',
    template: '%s | Carl',
  },
  description: 'Carl Luo\'s Portfolio? Website.',
  openGraph: {
    title: 'erdaifuu.com',
    description: 'This is Carl.',
    url: baseUrl,
    siteName: 'erdaifuu.com',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white"
    >
      <body className="antialiased bg-[url('/images/general/background.jpg')] bg-cover bg-center bg-fixed min-h-screen">
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12">
          <div className="bg-white shadow-2xl max-w-[120vh] w-full min-h-[85vh] p-8 md:p-12 relative">
            <Popup
              variant="text"
              initialPosition={{ top: -25, left: 60 }}
              initialZIndex={100}
              className="bg-transparent shadow-none"
            >
              <Link href="/">
                <h1 className="text-2xl font-semibold tracking-tighter hover:text-blue-600 transition-colors cursor-pointer">
                  Erdaifu (Carl) Luo
                </h1>
              </Link>
            </Popup>
            <main className="flex-auto min-w-0 flex flex-col">
              <Navbar />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}