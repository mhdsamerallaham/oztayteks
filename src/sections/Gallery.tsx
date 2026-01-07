'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function Gallery() {
  const { t } = useTranslate()

  const instagramPosts = [
    { id: 1, link: "https://www.instagram.com/oztayteksofficial/p/DODnTO1DXxm/", image: "/images/instagram/ig-1.jpg" },
    { id: 2, link: "https://www.instagram.com/oztayteksofficial/p/DNP9jszsSwW/", image: "/images/instagram/ig-2.jpg" },
    { id: 3, link: "https://www.instagram.com/oztayteksofficial/p/DGxftNTMnG2/", image: "/images/instagram/ig-3.jpg" },
    { id: 4, link: "https://www.instagram.com/oztayteksofficial/p/DClkc8huYtK/", image: "/images/instagram/ig-4.jpg" },
    { id: 5, link: "https://www.instagram.com/oztayteksofficial/p/C_vAvvBIW78/", image: "/images/instagram/ig-5.jpg" },
    { id: 6, link: "https://www.instagram.com/oztayteksofficial/p/C_QCSnPMGK1/", image: "/images/instagram/ig-6.jpg" },
    { id: 7, link: "https://www.instagram.com/oztayteksofficial/p/C4-NaQIsoJz/", image: "/images/instagram/ig-7.jpg" },
    { id: 8, link: "https://www.instagram.com/oztayteksofficial/p/C4KXn33IJ2a/", image: "/images/instagram/ig-8.jpg" },
    { id: 9, link: "https://www.instagram.com/oztayteksofficial/p/C3Xwg_HItGo/", image: "/images/instagram/ig-9.jpg" },
  ];

  return (
    <Section id="gallery" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          {t('gallery.title') || "Görsel Yolculuk"}
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          {t('gallery.subtitle') || "Bizi Instagram'da takip edin ve üretim süreçlerimizi yakından inceleyin."}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {instagramPosts.map((post) => (
          <Link
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={post.image}
              alt={`Instagram post ${post.id}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="https://www.instagram.com/oztayteksofficial/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            {"Instagram'da Takip Et"}
          </Button>
        </Link>
      </div>
    </Section>
  )
}
