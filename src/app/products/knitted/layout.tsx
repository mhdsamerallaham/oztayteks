import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Örme Kumaşlar',
  description: 'Süprem, ribana, interlok, polar ve daha fazla örme kumaş çeşidi. T-shirt, sweatshirt ve spor giyim için premium örme kumaşlar.',
  openGraph: {
    title: 'Örme Kumaşlar | Oztayteks',
    description: 'Premium örme kumaş çeşitleri.',
  },
}

export default function KnittedFabricsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
