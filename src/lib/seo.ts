export interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  ogUrl?: string
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
}

/**
 * Default SEO configuration for Oztayteks
 */
const defaultSEO: SEOProps = {
  title: 'Oztayteks - Premium Textile Solutions',
  description: 'Discover luxury textile excellence with Oztayteks. Premium fabrics, sustainable practices, and global textile solutions from Istanbul, Turkey.',
  ogImage: '/og-image.jpg',
  ogType: 'website',
  keywords: [
    'textile',
    'fabric',
    'luxury textiles',
    'premium fabrics',
    'sustainable textiles',
    'turkish textiles',
    'istanbul textiles',
    'oztayteks',
    'textile solutions',
    'fabric manufacturing'
  ],
  author: 'Oztayteks',
}

/**
 * Generate complete SEO metadata
 */
export function generateSEO(seo: SEOProps = {}): {
  title: string
  description: string
  keywords: string
  openGraph: {
    title: string
    description: string
    images: { url: string }[]
    type: string
    url?: string
    siteName: string
    locale: string
  }
  twitter: {
    card: string
    title: string
    description: string
    images: string[]
  }
  robots: {
    index: boolean
    follow: boolean
  }
  canonical?: string
  authors?: { name: string }[]
} {
  const title = seo.title || defaultSEO.title || ''
  const description = seo.description || defaultSEO.description || ''
  const keywords = seo.keywords?.join(', ') || defaultSEO.keywords?.join(', ') || ''
  
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: seo.ogImage ? [{ url: seo.ogImage }] : [],
      type: seo.ogType || defaultSEO.ogType || 'website',
      url: seo.ogUrl,
      siteName: 'Oztayteks',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
    robots: {
      index: !seo.noindex,
      follow: !seo.nofollow,
    },
    canonical: seo.canonical,
    authors: seo.author ? [{ name: seo.author }] : [],
  }
}

/**
 * Generate structured data (JSON-LD) for organization
 */
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Oztayteks',
    description: 'Premium textile solutions and luxury fabrics',
    url: 'https://oztayteks.com',
    logo: 'https://oztayteks.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'Turkey',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['English', 'Turkish'],
    },
    sameAs: [
      // Add social media URLs when available
    ],
  }
}

/**
 * Generate structured data for website
 */
export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Oztayteks',
    url: 'https://oztayteks.com',
    description: 'Premium textile solutions and luxury fabrics',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://oztayteks.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Page-specific SEO configurations
 */
export const pageSEO = {
  home: {
    title: 'Oztayteks - Premium Textile Solutions',
    description: 'Discover luxury textile excellence with Oztayteks. Premium fabrics, sustainable practices, and global textile solutions from Istanbul, Turkey.',
    ogImage: '/og-home.jpg',
  },
  about: {
    title: 'About Oztayteks - Our Story in Textiles',
    description: 'Learn about Oztayteks\' journey in the textile industry, our commitment to quality, and sustainable manufacturing practices.',
    ogImage: '/og-about.jpg',
  },
  products: {
    title: 'Premium Textile Products - Oztayteks',
    description: 'Explore our collection of premium textiles and luxury fabrics. From traditional to contemporary designs.',
    ogImage: '/og-products.jpg',
  },
  sustainability: {
    title: 'Sustainable Textile Practices - Oztayteks',
    description: 'Discover Oztayteks\' commitment to sustainable textile manufacturing and environmental responsibility.',
    ogImage: '/og-sustainability.jpg',
  },
  gallery: {
    title: 'Textile Gallery - Oztayteks Collections',
    description: 'Browse our gallery of premium textile collections and luxury fabric designs.',
    ogImage: '/og-gallery.jpg',
  },
  contact: {
    title: 'Contact Oztayteks - Get in Touch',
    description: 'Contact Oztayteks for premium textile solutions. Reach out from Istanbul, Turkey to anywhere in the world.',
    ogImage: '/og-contact.jpg',
  },
}

/**
 * Helper function to get page SEO with fallback to defaults
 */
export function getPageSEO(page: keyof typeof pageSEO, customSEO?: Partial<SEOProps>) {
  return generateSEO({
    ...pageSEO[page],
    ...customSEO,
  })
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path?: string): string {
  const baseUrl = 'https://oztayteks.com'
  return path ? `${baseUrl}${path}` : baseUrl
}

export default {
  generateSEO,
  generateOrganizationStructuredData,
  generateWebsiteStructuredData,
  pageSEO,
  getPageSEO,
  generateCanonicalUrl,
  defaultSEO,
}
