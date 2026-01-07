'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
    const { t } = useTranslate()

    const values = [
        {
            key: 'quality',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            key: 'trust',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            key: 'transparency',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            key: 'flexibility',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m0 0H15" />
                </svg>
            )
        }
    ]

    const stats = [
        {
            key: 'exp',
            value: "25+",
            label: "Yıllık Tecrübe",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            key: 'partners',
            value: "50+",
            label: "Global İş Ortağı",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
        },
        {
            key: 'production',
            value: "1M+",
            label: "Yıllık Üretim (m)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            key: 'quality',
            value: "100%",
            label: "Kalite Kontrol",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ]

    const whyUs = [
        "Tutarlı ve izlenebilir kalite süreçleri",
        "Zamanında teslimat ve güçlü lojistik",
        "Esnek üretim seçenekleri",
        "Yılların verdiği uzmanlık ve sektör bilgisi"
    ]

    return (
        <main className="min-h-screen bg-background">
            {/* --- HERO SECTION --- */}
            <Section
                id="about-hero"
                bg="default"
                noPadding
                noContainer
                className="relative overflow-hidden"
            >
                <div className="relative min-h-[72vh] flex items-center py-28 lg:py-44">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/Dokuma%20Kuma%C5%9Flar%20hero.webp"
                            alt="Factory Background"
                            fill
                            className="object-cover object-center"
                            priority
                            quality={100}
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/80" />
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold tracking-widest uppercase shadow">
                                {t('nav.about')}
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.05]">
                                {t('about_page.title')}
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
                                {t('about_page.intro')}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- HISTORY SECTION --- */}
            <Section id="about-history" bg="default" className="py-24 lg:py-36 bg-surface">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left: Image with artistic border & caption */}
                    <div className="relative group animate-fade-in lg:col-span-5">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="/images/printing-service.jpg"
                                alt="OZTAYTEKS History"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-12 animate-slide-up [animation-delay:200ms] lg:col-span-7">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight tracking-[-0.02em]">
                                {t('about_page.history_title')}
                            </h2>
                            <div className="w-20 h-2 bg-primary rounded-full" />
                        </div>
                        <div className="space-y-8">
                            <p className="text-lg md:text-xl text-mutedForeground leading-[1.7] font-light">
                                {t('about_page.history_text')}
                            </p>
                            <div className="inline-flex items-center space-x-4 px-6 py-4 bg-surface-muted rounded-2xl border border-slate-200 text-slate-700 font-semibold text-base">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <span>oztayteks.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- VISION & MISSION SECTION --- */}
            <Section id="about-vision" bg="muted" className="py-24 lg:py-36 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    <div className="p-10 bg-surface rounded-3xl shadow-sm border border-slate-200">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 mb-7">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-5 tracking-[-0.02em]">{t('about_page.mission_title')}</h3>
                        <p className="text-lg text-mutedForeground leading-[1.7] font-light">
                            {t('about_page.mission_text')}
                        </p>
                    </div>

                    <div className="p-10 bg-primary rounded-3xl shadow-xl relative overflow-hidden border border-white/10">
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white/90 mb-7 border border-white/10">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-5 tracking-[-0.02em]">{t('about_page.vision_title')}</h3>
                            <p className="text-lg text-white/85 leading-[1.7] font-light">
                                {t('about_page.vision_text')}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- VALUES SECTION (Glassmorphism Cards) --- */}
            <Section id="about-values" bg="default" className="py-24 lg:py-36">
                <div className="text-center mb-20 space-y-6">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Kurumsal Kimliğimiz</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary tracking-[-0.02em]">{t('about_page.values_title')}</h2>
                    <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {values.map((v) => (
                        <div
                            key={v.key}
                            className="group relative p-9 bg-surface rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-6"
                        >
                            <div className="w-20 h-20 bg-surface-muted rounded-2xl flex items-center justify-center mx-auto text-primary transition-colors duration-200 shadow-sm border border-slate-200">
                                {v.icon}
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-slate-900 uppercase tracking-wider">
                                    {(t(`about_page.values.${v.key}`) ?? '').split(':')[0]}
                                </h4>
                                <p className="text-mutedForeground font-light leading-[1.7]">
                                    {(t(`about_page.values.${v.key}`) ?? '').split(':')[1]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- STATS SECTION (Integrated and Minimal) --- */}
            <Section id="about-stats" bg="primary" noPadding noContainer className="relative overflow-hidden">
                <div className="relative py-20 md:py-28">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark" />

                    <div className="container-custom relative z-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 text-white text-center">
                            {stats.map((s, i) => (
                                <div key={i} className="group space-y-3">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-accent shadow border border-white/10">
                                        {s.icon}
                                    </div>
                                    <div>
                                        <div className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">{s.value}</div>
                                        <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-white/70">{s.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- WHY US SECTION (Premium Content + Image) --- */}
            <Section id="why-us" bg="muted" className="py-24 lg:py-36 bg-surface">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
                    <div className="space-y-12 order-2 lg:order-1 lg:col-span-7">
                        <div className="space-y-6">
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Farkımız</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight tracking-[-0.02em]">
                                {t('about_page.why_us_title')}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {whyUs.map((point, i) => (
                                <div
                                    key={i}
                                    className="flex items-center space-x-6 p-7 bg-surface rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-secondary/20 text-slate-900 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-xl text-mutedForeground font-medium tracking-tight leading-snug">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 group lg:col-span-5">
                        <div className="relative aspect-square lg:aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                            <Image src="/images/hero-bg.png" alt="OZTAYTEKS Quality" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <Section id="about-cta" bg="default" className="py-28 lg:py-44 bg-surface-muted">
                <div className="max-w-6xl mx-auto rounded-[64px] overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-slate-900" />
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/20 to-transparent z-0" />

                    <div className="relative z-10 px-8 py-20 lg:p-32 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight">
                                {t('about_page.cta_title')}
                            </h2>
                            <p className="text-xl text-slate-300 font-light max-w-xl">
                                {t('about_page.cta_text')}
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <Link href="/contact">
                                <Button size="lg" className="min-w-[280px] text-xl">
                                    {t('nav.contact')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    )
}
