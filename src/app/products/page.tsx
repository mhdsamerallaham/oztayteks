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
            color: "from-amber-600/20"
        },
        {
            key: 'woven',
            title: t('products.woven_title') || "Dokuma Kumaş",
            desc: t('products.woven_desc'),
            image: "/images/woven-fabric.jpg",
            color: "from-slate-800/20"
        },
        {
            key: 'printed',
            title: t('products.printed_title') || "Baskılı Kumaş",
            desc: t('products.printed_desc'),
            image: "/images/printed-fabric-new.jpg",
            color: "from-rose-600/20"
        }
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* HERO: IMMERSIVE CATEGORY SELECTOR */}
            <section className="relative h-[90vh] lg:h-screen w-full flex flex-col lg:flex-row overflow-hidden pt-16 lg:pt-0">
                {categories.map((cat, idx) => {
                    const content = (
                        <div
                            className="group relative flex-1 h-full overflow-hidden transition-all duration-700 ease-in-out lg:hover:flex-[1.5] border-r border-white/10"
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
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
                                <div className="mb-4">
                                    <span className="text-white/60 text-xs font-bold tracking-[0.3em] uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                        {t('products.title')}
                                    </span>
                                    <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight">
                                        {cat.title}
                                    </h2>
                                </div>
                                <p className="text-white/80 font-light leading-relaxed max-w-sm h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                    {cat.desc}
                                </p>

                                {/* Decorative line */}
                                <div className="w-12 h-1 bg-amber-500 mt-6 group-hover:w-full transition-all duration-700" />
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500 pointer-events-none" />
                        </div>
                    );

                    if (cat.key === 'knitted') {
                        return (
                            <Link key={cat.key} href="/products/knitted" className="flex-1 h-full flex">
                                {content}
                            </Link>
                        );
                    }

                    if (cat.key === 'woven') {
                        return (
                            <Link key={cat.key} href="/products/woven" className="flex-1 h-full flex">
                                {content}
                            </Link>
                        );
                    }

                    if (cat.key === 'printed') {
                        return (
                            <Link key={cat.key} href="/baskili-kumaslar" className="flex-1 h-full flex">
                                {content}
                            </Link>
                        );
                    }

                    return (
                        <div key={cat.key} className="flex-1 h-full flex">
                            {content}
                        </div>
                    );
                })}
            </section>
        </main>
    )
}
