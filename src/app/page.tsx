import { Metadata } from 'next'
import { getPageSEO, generateOrganizationStructuredData, generateWebsiteStructuredData } from '@/lib/seo'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Products from '@/sections/Products'
import PrintingCapabilities from '@/sections/PrintingCapabilities'
import Gallery from '@/sections/Gallery'
import Contact from '@/sections/Contact'

export const metadata: Metadata = getPageSEO('home')

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationStructuredData()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteStructuredData()),
        }}
      />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Products Section */}
      <Products />

      {/* Printing Capabilities Section */}
      <PrintingCapabilities />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />
    </>
  )
}
