'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Products() {
  const { t } = useTranslate()

  // High Quality Pinterest Images reused ("Banana" approved)
  // Image 1 (Knitted/Texture focus): Selanik Image or similar textured
  const knittedImage = "/images/knitted-fabric.jpg"

  // Image 2 (Woven/Elegant focus): Premium Viskon or clean surface
  const wovenImage = "/images/woven-fabric.jpg"

  // Image 3 (Printed/Creative focus): Patterned/Printed Fabric
  const printedImage = "/images/printed-fabric-new.jpg"

  return (
    <Section id="products" bg="default">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4 lg:mb-6 tracking-tight">
            {t('products.title') || "Üretim Uzmanlığımız"}
          </h2>
          <div className="w-16 lg:w-20 h-1 bg-amber-700 mx-auto mb-4 lg:mb-6"></div>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed font-light">
            {t('products.subtitle') || "Yüksek teknolojiyle donatılmış tesisimizde, hem örme hem de dokuma kumaşlarda üstün kalite sunuyoruz."}
          </p>
        </div>

        {/* 3-Column Focus Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12">

          {/* Item 1: Knitted Fabric */}
          <div className="group flex flex-col items-center text-center space-y-4 lg:space-y-6">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl">
              <Image
                src={knittedImage}
                alt={t('products.knitted_title')}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="max-w-md mx-auto space-y-2 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-heading font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {t('products.knitted_title') || "Örme Kumaş Kalitesi"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {t('products.knitted_desc') || "Süprem, İnterlok, Selanik ve daha fazlası..."}
              </p>
            </div>
          </div>

          {/* Item 2: Woven Fabric */}
          <div className="group flex flex-col items-center text-center space-y-4 lg:space-y-6">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl">
              <Image
                src={wovenImage}
                alt={t('products.woven_title')}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="max-w-md mx-auto space-y-2 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-heading font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {t('products.woven_title') || "Dokuma Kumaş Zarafeti"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {t('products.woven_desc') || "Viskon, Pamuk ve özel karışımlar..."}
              </p>
            </div>
          </div>

          {/* Item 3: Printed Fabric */}
          <div className="group flex flex-col items-center text-center space-y-4 lg:space-y-6 sm:col-span-2 md:col-span-1">
            <div className="relative w-full max-w-md sm:max-w-none aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl">
              <Image
                src={printedImage}
                alt={t('products.printed_title') || "Baskılı Kumaş Yaratıcılığı"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="max-w-md mx-auto space-y-2 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-heading font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {t('products.printed_title') || "Baskılı Kumaş Yaratıcılığı"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {t('products.printed_desc') || "Dijital ve rotasyon baskı seçenekleriyle, sınırsız renk ve desen dünyasını kumaşla buluşturuyoruz."}
              </p>
            </div>
          </div>

        </div>

        {/* Unified CTA */}
        <div className="text-center mt-10 lg:mt-16">
          <Link href="/products">
            <Button variant="outline" size="lg" className="min-w-[160px] sm:min-w-[200px] border-slate-300 text-slate-700 hover:border-amber-700 hover:text-amber-700">
              {t('hero.cta') || "Tüm Koleksiyonu İncele"}
            </Button>
          </Link>
        </div>

      </div>
    </Section>
  )
}
