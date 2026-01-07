'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
    const { t } = useTranslate()

    const categories = [
        {
            key: 'knitted',
            title: t('products.knitted_title') || "Örme Kumaş",
            desc: t('products.knitted_desc'),
            image: "/images/knitted-fabric.jpg",
            color: "from-amber-600/20",
            href: "/products/knitted"
        },
        {
            key: 'woven',
            title: t('products.woven_title') || "Dokuma Kumaş",
            desc: t('products.woven_desc'),
            image: "/images/woven-fabric.jpg",
            color: "from-slate-800/20",
            href: "/products/woven"
        },
        {
            key: 'printed',
            title: t('products.printed_title') || "Baskılı Kumaş",
            desc: t('products.printed_desc'),
            image: "/images/printed-fabric-new.jpg",
            color: "from-rose-600/20",
            href: "/baskili-kumaslar"
        }
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* HERO: IMMERSIVE CATEGORY SELECTOR */}
            <section className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden pt-16 lg:pt-0">
                {categories.map((cat, idx) => (
                    <Link 
                        key={cat.key} 
                        href={cat.href} 
                        className="group relative flex-1 min-h-[28vh] sm:min-h-[30vh] lg:min-h-0 lg:h-full overflow-hidden transition-all duration-700 ease-in-out lg:hover:flex-[1.5] border-b lg:border-b-0 lg:border-r border-white/10 last:border-b-0 last:lg:border-r-0"
                    >
                        {/* Background Image */}
                        <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, 100vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            priority={idx === 0}
                        />

                        {/* Overlays */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                        <div className="absolute inset-0 bg-black/50 lg:bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-12 z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
                            <div className="mb-2 lg:mb-4">
                                <span className="text-white/80 lg:text-white/60 text-[10px] sm:text-xs font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase block mb-1 lg:mb-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                    {t('products.title')}
                                </span>
                                <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-heading font-bold text-white leading-tight">
                                    {cat.title}
                                </h2>
                            </div>
                            <p className="text-white/80 font-light leading-relaxed max-w-sm text-sm lg:text-base lg:h-0 lg:opacity-0 lg:group-hover:h-auto lg:group-hover:opacity-100 transition-all duration-500 overflow-hidden line-clamp-2 lg:line-clamp-none">
                                {cat.desc}
                            </p>

                            {/* Decorative line */}
                            <div className="w-10 sm:w-12 h-1 bg-amber-500 mt-3 sm:mt-4 lg:mt-6 group-hover:w-20 lg:group-hover:w-full transition-all duration-700" />
                        </div>

                        {/* Hover Border Effect */}
                        <div className="absolute inset-2 lg:inset-4 border border-white/10 lg:border-white/0 lg:group-hover:border-white/20 rounded-lg lg:rounded-xl transition-all duration-500 pointer-events-none" />
                        
                        {/* Mobile tap indicator */}
                        <div className="lg:hidden absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )
}
