import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Providers } from '@/components/layout/Providers'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://oztayteks.com'),
  title: {
    default: 'Oztayteks | Premium Tekstil Çözümleri',
    template: '%s | Oztayteks',
  },
  description: 'Örme, dokuma ve baskılı kumaş üretiminde lider. Sürdürülebilir ve yenilikçi tekstil çözümleri.',
  keywords: ['tekstil', 'kumaş', 'örme kumaş', 'dokuma kumaş', 'baskılı kumaş', 'Türkiye tekstil'],
  authors: [{ name: 'Oztayteks' }],
  creator: 'Oztayteks',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: 'Oztayteks',
    title: 'Oztayteks | Premium Tekstil Çözümleri',
    description: 'Örme, dokuma ve baskılı kumaş üretiminde lider. Sürdürülebilir ve yenilikçi tekstil çözümleri.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oztayteks | Premium Tekstil Çözümleri',
    description: 'Örme, dokuma ve baskılı kumaş üretiminde lider.',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <Providers>
          <ErrorBoundary>
            {/* Page Content */}
            <div className="relative z-10 flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  )
}
