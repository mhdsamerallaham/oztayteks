'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useTranslate } from '@/hooks/useTranslate'

type QuoteBasketDrawerProps = {
    isOpen: boolean
    onClose: () => void
}

export default function QuoteBasketDrawer({ isOpen, onClose }: QuoteBasketDrawerProps) {
    const { t } = useTranslate()
    const { items, removeItem, clearCart } = useCart()

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    const generateWhatsAppMessage = () => {
        let message = "Merhaba OZTAYTEKS, aşağıdaki ürünler için teklif almak istiyorum:\n\n"

        items.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`
            message += `   Renk: ${item.color}\n`
            message += `   Miktar: ${item.quantity}\n`
            if (item.notes) message += `   Not: ${item.notes}\n`
            message += "\n"
        })

        message += "İyi çalışmalar dilerim."

        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/905302473702?text=${encodedMessage}`, '_blank')
    }

    return (
        <div
            className={`fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            aria-hidden={!isOpen}
        >
            <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            <aside
                className={`absolute right-0 top-0 h-[100dvh] w-full lg:w-[35vw] bg-white shadow-2xl transition-transform duration-300 ease transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between px-6 lg:px-8 py-5 border-b border-slate-200">
                        <div className="space-y-1">
                            <h2 className="text-lg font-heading font-bold text-slate-900">
                                Teklif Sepeti ({items.length})
                            </h2>
                            <p className="text-xs text-slate-500">
                                {t('quote_basket.subtitle') || 'Seçtiğiniz ürünler için WhatsApp üzerinden teklif alın.'}
                            </p>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-3 -m-1 min-h-11 min-w-11 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                            aria-label="Close"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-6">
                        {items.length === 0 ? (
                            <div className="text-center space-y-6 py-12">
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-heading font-bold text-slate-900">Teklif Sepetiniz Boş</h3>
                                    <p className="text-slate-600 font-light">Ürünlerden sepete ekleyerek teklif alabilirsiniz.</p>
                                </div>
                                <Link
                                    href="/products/knitted"
                                    onClick={onClose}
                                    className="inline-flex items-center justify-center bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-500 transition-colors"
                                >
                                    Ürünleri İncele
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={clearCart}
                                        className="text-slate-400 hover:text-red-600 text-sm font-medium transition-colors"
                                    >
                                        Sepeti Temizle
                                    </button>
                                </div>

                                {items.map((item) => (
                                    <div
                                        key={`${item.id}-${item.color}`}
                                        className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex gap-4"
                                    >
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-50 flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>

                                        <div className="flex-1 min-w-0 space-y-2">
                                            <div className="flex justify-between items-start gap-3">
                                                <div className="min-w-0">
                                                    <h4 className="text-sm font-bold text-slate-900 truncate">{item.name}</h4>
                                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">{item.category} Kumaş</span>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id, item.color)}
                                                    className="p-3 -m-2 min-h-11 min-w-11 text-slate-300 hover:text-red-500 transition-colors"
                                                    aria-label="Remove"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="space-y-0.5">
                                                    <span className="text-[10px] uppercase tracking-widest text-slate-400 block">Renk</span>
                                                    <span className="text-sm font-bold text-slate-700 truncate">{item.color}</span>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <span className="text-[10px] uppercase tracking-widest text-slate-400 block">Miktar</span>
                                                    <span className="text-sm font-bold text-slate-700 truncate">{item.quantity}</span>
                                                </div>
                                            </div>

                                            {item.notes && (
                                                <div className="space-y-0.5">
                                                    <span className="text-[10px] uppercase tracking-widest text-slate-400 block">Not</span>
                                                    <span className="text-sm text-slate-600 italic line-clamp-1">{item.notes}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-3 text-sm text-slate-500">
                                    Seçtiğiniz ürünler için en doğru fiyatlandırma; miktar, renk ve güncel üretim programına göre WhatsApp üzerinden size iletilecektir.
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="px-6 lg:px-8 py-5 border-t border-slate-200 bg-white">
                        <button
                            onClick={generateWhatsAppMessage}
                            disabled={items.length === 0}
                            className="w-full py-4 bg-green-600 disabled:bg-slate-200 disabled:text-slate-500 text-white rounded-xl font-heading font-bold text-base hover:bg-green-500 transition-colors flex items-center justify-center space-x-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>WhatsApp ile Teklif Al</span>
                        </button>
                        <div className="h-[env(safe-area-inset-bottom)]" />
                    </div>
                </div>
            </aside>
        </div>
    )
}
