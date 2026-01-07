import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Oztayteks ile iletişime geçin. WhatsApp, telefon ve e-posta ile 7/24 ulaşabilirsiniz. Teklif almak için hemen yazın.',
  openGraph: {
    title: 'İletişim | Oztayteks',
    description: 'Bizimle iletişime geçin, teklif alın.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
