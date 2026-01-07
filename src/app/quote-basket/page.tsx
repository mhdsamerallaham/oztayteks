'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function QuoteBasketPage() {
    const { t } = useTranslate()
    const { items, removeItem, clearCart } = useCart()

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

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-slate-50 pt-32 pb-20 flex items-center justify-center">
                <div className="container-custom text-center space-y-8">
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto text-slate-400">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-heading font-bold text-slate-900">Teklif Sepetiniz Boş</h1>
                        <p className="text-slate-600 font-light max-w-md mx-auto">
                            Henüz herhangi bir ürün seçmediniz. Ürünlerimizi inceleyerek teklif almak istediklerinizi sepete ekleyebilirsiniz.
                        </p>
                    </div>
                    <Link
                        href="/products/knitted"
                        className="inline-block bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-500 transition-all transform hover:-translate-y-1 shadow-xl shadow-amber-600/20"
                    >
                        Ürünleri İncele
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Product List */}
                    <div className="flex-grow space-y-8">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                            <h1 className="text-3xl font-heading font-bold text-slate-900">Teklif Sepeti ({items.length})</h1>
                            <button
                                onClick={clearCart}
                                className="text-slate-400 hover:text-red-600 text-sm font-medium transition-colors"
                            >
                                Sepeti Temizle
                            </button>
                        </div>

                        <div className="space-y-6">
                            {items.map((item) => (
                                <div key={`${item.id}-${item.color}`} className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                                    {/* Item Image */}
                                    <div className="relative w-full md:w-32 aspect-square rounded-2xl overflow-hidden border border-slate-50">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>

                                    {/* Item Details */}
                                    <div className="flex-grow space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                                                <span className="text-xs text-slate-400 uppercase tracking-widest">{item.category} Kumaş</span>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id, item.color)}
                                                className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                            <div className="space-y-1">
                                                <span className="text-[10px] uppercase tracking-widest text-slate-400 block">Seçilen Renk</span>
                                                <span className="text-sm font-bold text-slate-700">{item.color}</span>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-[10px] uppercase tracking-widest text-slate-400 block">Miktar</span>
                                                <span className="text-sm font-bold text-slate-700">{item.quantity}</span>
                                            </div>
                                            {item.notes && (
                                                <div className="space-y-1 col-span-2 md:col-span-1">
                                                    <span className="text-[10px] uppercase tracking-widest text-slate-400 block">Not/Özel İstek</span>
                                                    <span className="text-sm text-slate-600 italic line-clamp-1">{item.notes}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Summary & Action */}
                    <div className="lg:w-96">
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white space-y-8 sticky top-32 shadow-2xl shadow-slate-900/20">
                            <h2 className="text-2xl font-bold font-heading">Teklif Özeti</h2>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-slate-400 text-sm">
                                    <span>Toplam Ürün Sayısı</span>
                                    <span className="text-white font-bold">{items.length}</span>
                                </div>
                                <div className="h-[1px] bg-slate-800" />
                                <div className="space-y-2">
                                    <span className="text-xs uppercase tracking-widest text-slate-500">Teklif Hakkında</span>
                                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                                        Seçtiğiniz ürünler için en doğru fiyatlandırma; miktar, renk ve güncel üretim programına göre WhatsApp üzerinden size iletilecektir.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={generateWhatsAppMessage}
                                className="w-full py-5 bg-green-600 text-white rounded-xl font-heading font-bold text-lg hover:bg-green-500 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 shadow-xl shadow-green-600/20"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>WhatsApp ile Teklif Al</span>
                            </button>

                            <Link
                                href="/products/knitted"
                                className="w-full flex items-center justify-center text-slate-400 hover:text-white text-sm transition-colors pt-4 font-medium"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Ürün Eklemeye Devam Et
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
