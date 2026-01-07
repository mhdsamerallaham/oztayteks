import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürünler',
  description: 'Örme, dokuma ve baskılı kumaş kategorilerimizi keşfedin. Premium kalitede tekstil ürünleri ve geniş ürün yelpazesi.',
  openGraph: {
    title: 'Ürünler | Oztayteks',
    description: 'Örme, dokuma ve baskılı kumaş kategorilerimizi keşfedin.',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
