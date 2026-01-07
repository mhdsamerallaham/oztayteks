'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { PRINTED_PRODUCTS } from '@/data/printed-products'

export default function PrintedFabricsPage() {
    const { t } = useTranslate()

    const sections = [
        {
            id: 'printed',
            title: 'Baskılı Kumaşlar',
            items: PRINTED_PRODUCTS
        }
    ]

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Immersive Hero Section */}
            <div className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden flex items-center">
                {/* Background Image */}
                <Image
                    src="/images/printed-fabric-new.jpg"
                    alt="Baskılı Kumaşlar"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10" />

                {/* Content */}
                <div className="container-custom relative z-20">
                    <div className="max-w-4xl space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-amber-600/20 backdrop-blur-md border border-amber-600/30 rounded-full">
                            <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">
                                {t('products.printed_title') || 'Baskılı Kumaş'}
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight">
                            {'Baskılı Kumaşlar'}
                        </h1>
                        <div className="w-24 h-1.5 bg-amber-600" />
                        <p className="text-xl lg:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl">
                            {'Dijital, reaktif, pigment ve daha fazlası: koleksiyon, kurumsal ve özel tasarım baskılı kumaş çözümleri.'}
                        </p>
                    </div>
                </div>

            </div>

            {/* Content Overlap Section */}
            <div className="relative z-30 -mt-24">
                <div className="container-custom">
                    <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-slate-900/10 border border-white/20">
                        {/* Fabric Sections */}
                        <div className="space-y-12">
                            {sections.map((section) => (
                                <Section key={section.id} id={section.id} className="py-8 lg:py-12" noPadding>
                                    <div className="flex items-center space-x-4 mb-8">
                                        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-800 uppercase tracking-wider">
                                            {section.title}
                                        </h2>
                                        <div className="flex-grow h-[1px] bg-slate-200" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {section.items.map((product) => (
                                            <Link
                                                key={product.id}
                                                href={`/baskili-kumaslar/${product.id}`}
                                                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                            >
                                                {/* Image Frame */}
                                                <div className="relative aspect-[4/3] overflow-hidden">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.title}
                                                        fill
                                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                </div>

                                                {/* Content */}
                                                <div className="p-8 space-y-4">
                                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                                                        {product.title}
                                                    </h3>
                                                    <p className="text-slate-600 font-light leading-relaxed text-sm lg:text-base">
                                                        {product.description}
                                                    </p>

                                                    {/* Details Table - Aesthetic */}
                                                    <div className="pt-4 border-t border-slate-50 grid grid-cols-2 gap-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                        <div className="space-y-1">
                                                            <span className="text-[10px] uppercase tracking-widest text-slate-400 block">
                                                                {t('products.knitted_fabrics.details_labels.width')}
                                                            </span>
                                                            <span className="text-xs font-bold text-slate-700">{product.specs.width}</span>
                                                        </div>
                                                        <div className="space-y-1 text-right">
                                                            <span className="text-[10px] uppercase tracking-widest text-slate-400 block">
                                                                {t('products.knitted_fabrics.details_labels.weight')}
                                                            </span>
                                                            <span className="text-xs font-bold text-slate-700">{product.specs.grammage}</span>
                                                        </div>

                                                        {/* Action Button (visual only; card is fully clickable) */}
                                                        <div className="col-span-2 pt-2">
                                                            <div className="w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-xl flex items-center justify-center space-x-2 group/btn">
                                                                <span>{t('products.view_details') || 'Detayı Gör'}</span>
                                                                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Section>
                            ))}
                        </div>

                        {/* Bottom CTA / Inquiry */}
                        <div className="mt-12 text-center">
                            <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                                    <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight">
                                        {t('about_page.cta_title')}
                                    </h2>
                                    <p className="text-slate-300 text-lg font-light">
                                        {t('about_page.cta_text')}
                                    </p>
                                    <a
                                        href="https://wa.me/905302473702"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-amber-600 text-white px-10 py-5 rounded-full font-bold hover:bg-amber-500 transition-all transform hover:scale-105 shadow-xl"
                                    >
                                        {t('contact.whatsapp_btn')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
