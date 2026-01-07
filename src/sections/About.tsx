'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Section from '@/components/ui/Section'
import Image from 'next/image'

export default function About() {
  const { t } = useTranslate()

  const stats = [
    { value: "25+", label: t('about.stats.exp') || "Yıl Sektör Deneyimi" },
    { value: "50+", label: t('about.stats.partners') || "Aktif İş Ortağı" },
    { value: "1M+", label: t('about.stats.production') || "Metre Yıllık Üretim" },
    { value: "%100", label: t('about.stats.quality') || "Kalite Kontrol Süreci" },
  ];

  return (
    <Section id="about" className="overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left: Content - Focusing on clean, readable, B2B text */}
        <div className="space-y-10 animate-slide-up order-2 lg:order-1">

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
              {t('about.title') || "1999’dan Beri Tekstilde Güvenilir Üretim"}
            </h2>
            <div className="w-16 h-1 bg-amber-700/60"></div>
          </div>

          <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-light">
            <p>
              {t('about.description') || "ÖZTAYTEKS, 1999 yılından bu yana kumaş üretimi ve tedariki alanında faaliyet gösteren bir tekstil firmasıdır. Uzun yıllara dayanan deneyimimiz, üretim süreçlerimize istikrar, kalite ve süreklilik kazandırmaktadır."}
            </p>
            <p>
              {t('about.description_2') || "Ürünlerimiz; hammaddeden son kontrole kadar belirlenmiş kalite standartları doğrultusunda üretilir. Fonksiyonel, dengeli ve uzun ömürlü kumaş çözümleriyle, farklı ölçeklerdeki işletmelerin üretim süreçlerine güvenilir bir tedarikçi olarak katkı sağlıyoruz."}
            </p>
            <p className="font-normal text-slate-900 border-l-4 border-slate-200 pl-4">
              {t('about.description_3') || "Güncel üretim altyapımız ve planlı çalışma anlayışımız sayesinde, zamanında teslimat ve tutarlı kalite sunarız. ÖZTAYTEKS için iş ortaklığı; yalnızca ürün sağlamak değil, süreklilik ve karşılıklı güven üzerine kurulu uzun vadeli bir ilişkidir."}
            </p>
          </div>

          {/* Clean, Net Numbers */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-8 border-t border-slate-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900 font-heading tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-slate-500 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image - Elegant Apartment/Fabric Context */}
        <div className="relative h-[600px] lg:h-[750px] w-full bg-slate-100 order-1 lg:order-2">
          <Image
            src="/images/Elegant Decoration Ideas for a Luxury Apartment _.jpg"
            alt="Oztayteks Quality Fabrics"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  )
}
