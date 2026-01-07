import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dokuma Kumaşlar',
  description: 'Poplin, gabardin, saten, twill ve daha fazla dokuma kumaş çeşidi. Gömlek, pantolon ve ceket üretimi için premium dokuma kumaşlar.',
  openGraph: {
    title: 'Dokuma Kumaşlar | Oztayteks',
    description: 'Premium dokuma kumaş çeşitleri.',
  },
}

export default function WovenFabricsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
