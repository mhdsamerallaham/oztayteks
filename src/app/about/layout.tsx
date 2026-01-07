import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: '20+ yıllık tecrübesiyle Oztayteks, kaliteli örme, dokuma ve baskılı kumaş üretiminde güvenilir çözüm ortağınız. Misyonumuz, vizyonumuz ve değerlerimiz.',
  openGraph: {
    title: 'Hakkımızda | Oztayteks',
    description: '20+ yıllık tecrübesiyle kaliteli tekstil üretimi.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
