import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baskılı Kumaşlar',
  description: 'Dijital baskı, rotasyon baskı ve transfer baskı kumaşlar. Moda, ev tekstili ve endüstriyel kullanım için premium baskılı kumaş çeşitleri.',
  openGraph: {
    title: 'Baskılı Kumaşlar | Oztayteks',
    description: 'Premium baskılı kumaş çeşitleri ve dijital baskı teknolojileri.',
  },
}

export default function PrintedFabricsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
