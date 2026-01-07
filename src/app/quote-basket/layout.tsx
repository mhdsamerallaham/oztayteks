import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teklif Sepeti',
  description: 'Seçtiğiniz kumaşlar için toplu teklif alın. Hızlı ve kolay teklif talebi.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function QuoteBasketLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
