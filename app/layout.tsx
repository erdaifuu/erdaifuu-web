import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import Footer from './components/footer'
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-black"
    >
      <body className="antialiased bg-[url('/images/general/background.jpg')] bg-cover bg-center bg-fixed min-h-screen">
      <Popup
          variant="text"
          initialPosition={{ top: 30, left: 270 }}
          initialZIndex={100}
          className="bg-transparent shadow-none"
        >
          <Link href="/">
            <h1 className="text-2xl font-semibold tracking-tighter hover:text-blue-600 transition-colors cursor-pointer">
              Erdaifu (Carl) Luo
            </h1>
          </Link>
        </Popup>
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12">
          <div className="bg-white dark:bg-black shadow-2xl max-w-4xl w-full min-h-[85vh] p-8 md:p-12">
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
