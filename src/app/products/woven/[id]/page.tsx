'use client'

import { useParams, useRouter } from 'next/navigation'
import { useTranslate } from '@/hooks/useTranslate'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { WOVEN_PRODUCTS } from '@/data/products'

export default function WovenProductDetailPage() {
    const { id } = useParams()
    const router = useRouter()
    const { t } = useTranslate()
    const { addItem } = useCart()

    const product = WOVEN_PRODUCTS.find(p => p.id === id)

    const [color, setColor] = useState('')
    const [quantity, setQuantity] = useState('')
    const [notes, setNotes] = useState('')
    const [isAdded, setIsAdded] = useState(false)

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold text-slate-900">Ürün bulunamadı</h1>
                    <Link href="/products/woven" className="text-amber-600 hover:underline">
                        Dokuma kumaşlara geri dön
                    </Link>
                </div>
            </div>
        )
    }

    const handleAddToQuote = () => {
        addItem({
            id: product.id,
            name: t(product.nameKey),
            image: product.image,
            color: color || '',
            quantity: quantity || '',
            notes,
            category: product.category
        })

        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 3000)
    }

    const handleWhatsAppInquiry = () => {
        const message = encodeURIComponent(
            `Merhabalar, ${t(product.nameKey)} ürününün fiyatını öğrenmek istiyorum. ${window.location.href}`
        )
        
        const whatsappUrl = `https://wa.me/905302473702?text=${message}`
        window.open(whatsappUrl, '_blank')
    }

    const getCategoryLabel = () => {
        switch (product.category) {
            case 'classic': return 'Klasik Dokuma'
            case 'specialty': return 'Özel Dokuma'
            case 'luxury': return 'Lüks Dokuma'
            case 'utility': return 'Endüstriyel Dokuma'
            case 'modern': return 'Modern Dokuma'
            default: return 'Dokuma'
        }
    }

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-20">
            <div className="container-custom">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-slate-500 mb-8">
                    <Link href="/" className="hover:text-amber-600 transition-colors">{t('nav.home')}</Link>
                    <span className="text-slate-400">/</span>
                    <Link href="/products" className="hover:text-amber-600 transition-colors">{t('nav.products')}</Link>
                    <span className="text-slate-400">/</span>
                    <Link href="/products/woven" className="hover:text-amber-600 transition-colors">Dokuma Kumaşlar</Link>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-900 font-medium break-words">{t(product.nameKey)}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Image Gallery + Usage Areas + Advantages */}
                    <div className="space-y-6">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl">
                            <Image
                                src={product.image}
                                alt={t(product.nameKey)}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Usage Areas Section */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-3">
                                <span className="w-1.5 h-6 bg-amber-600 rounded-full" />
                                <span>{t('products.knitted_fabrics.details_labels.usage_areas')}</span>
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {product.usageAreas.map((area, i) => (
                                    <div key={i} className="px-4 py-2 bg-amber-50 text-amber-700 rounded-xl font-medium text-sm border border-amber-100 hover:bg-amber-100 transition-colors">
                                        {area}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WhatsApp Quick Inquiry Button */}
                        <div className="bg-green-600 rounded-[2rem] p-6 border border-green-500 shadow-lg space-y-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-2 flex items-center space-x-3">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        <span>Hızlı Fiyat Sorgulama</span>
                                    </h3>
                                    <p className="text-green-100 text-sm">
                                        * Bu ürün fiyatlandırması sipariş miktarı, renk ve üretim planına göre değişiklik gösterebilir. WhatsApp üzerinden hızlı teklif alabilirsiniz.
                                    </p>
                                </div>
                                <button
                                    onClick={handleWhatsAppInquiry}
                                    className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                                >
                                    <span>Fiyatı Hemen Sor</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Advantages Section */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-3">
                                <span className="w-1.5 h-6 bg-amber-600 rounded-full" />
                                <span>{t('products.knitted_fabrics.details_labels.advantages')}</span>
                            </h3>
                            <ul className="space-y-3">
                                {product.advantages.map((advantage, i) => (
                                    <li key={i} className="flex items-start space-x-3 group">
                                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{advantage}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Content & Form */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 bg-amber-600/10 rounded-full">
                                <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">
                                    {getCategoryLabel()} Kumaş
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
                                {t(product.nameKey)}
                            </h1>
                            <p className="text-lg text-slate-600 font-light leading-relaxed">
                                {t(product.descKey)}
                            </p>
                        </div>

                        {/* Technical Information Table */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-3">
                                <span className="w-1.5 h-6 bg-amber-600 rounded-full" />
                                <span>Teknik Bilgiler</span>
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { label: 'Gramaj', value: product.specs.grammage },
                                    { label: 'En', value: product.specs.width },
                                    { label: 'İçerik', value: product.specs.composition },
                                    { label: 'Minimum Sipariş', value: product.specs.minOrder },
                                    { label: 'Üretim Süresi', value: product.specs.leadTime }
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors px-2 rounded-lg">
                                        <span className="text-slate-500 font-medium">{spec.label}</span>
                                        <span className="text-slate-900 font-bold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Options Form */}
                        <div className="bg-slate-900 rounded-[2rem] p-8 text-white space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                            <h3 className="text-xl font-bold flex items-center space-x-3 relative z-10">
                                <span className="w-1.5 h-6 bg-amber-600 rounded-full" />
                                <span>Talep Seçenekleri (Opsiyonel)</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Renk Seçimi (Opsiyonel)</label>
                                    <input
                                        type="text"
                                        placeholder="Örn: Siyah, Beyaz veya Pantone No"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-colors"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Miktar (kg / metre) (Opsiyonel)</label>
                                    <input
                                        type="text"
                                        placeholder="Örn: 500 kg"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-colors"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Not / Özel İstek (Opsiyonel)</label>
                                    <textarea
                                        placeholder="Eklemek istediğiniz detaylar..."
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-colors h-24 resize-none"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleAddToQuote}
                                className={`w-full py-5 rounded-xl font-heading font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center space-x-3 shadow-2xl ${isAdded
                                    ? 'bg-green-600 text-white'
                                    : 'bg-amber-600 text-white hover:bg-amber-500 hover:-translate-y-1 shadow-amber-600/20'
                                    }`}
                            >
                                {isAdded ? (
                                    <>
                                        <svg className="w-6 h-6 animate-in zoom-in duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Teklif Sepetine Eklendi</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <span>Teklif Sepetine Ekle</span>
                                    </>
                                )}
                            </button>

                            <p className="text-[10px] text-zinc-400 text-center relative z-10 px-4">
                                * Bu ürün fiyatlandırması sipariş miktarı, renk ve üretim planına göre değişiklik gösterebilir. Sepetinizi oluşturarak WhatsApp üzerinden hızlı teklif alabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
