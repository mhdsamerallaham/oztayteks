'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady?: () => void
  }
}

export default function PrintingCapabilities() {
  const { t } = useTranslate()
  const playerRef = useRef<any>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const loopIntervalRef = useRef<number | null>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) {
      setShouldLoadVideo(true)
      return
    }

    if (!('IntersectionObserver' in window)) {
      setShouldLoadVideo(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadVideo(true)
          obs.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoadVideo) return

    // Unique ID for this player
    const playerId = 'printing-video-player'

    const initPlayer = () => {
      // Check if player already exists to avoid re-initialization
      if (playerRef.current) return;

      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player(playerId, {
          videoId: '4uKisswmYSs',
          playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            start: 12, // Start at 12s
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            iv_load_policy: 3,
            disablekb: 1,
            vq: 'hd1080',
          },
          events: {
            onReady: (event: any) => {
              event.target.mute()
              if (event.target.setPlaybackQuality) {
                event.target.setPlaybackQuality('hd1080')
              }
              event.target.playVideo()

              // Loop Monitor: 0:12 -> 0:39
              loopIntervalRef.current = window.setInterval(() => {
                try {
                  const currentTime = event.target.getCurrentTime()
                  // If we pass 39s, go back to 12
                  if (currentTime && currentTime >= 39) {
                    event.target.seekTo(12)
                  }
                } catch (e) {
                  // Ignore errors
                }
              }, 1000)
            }
          }
        })
      }
    }

    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === 'function') prev()
      initPlayer()
    }

    // If the API is already available (e.g., loaded by Hero), init immediately.
    if (window.YT && window.YT.Player) {
      initPlayer()
    }

    return () => {
      if (loopIntervalRef.current) {
        window.clearInterval(loopIntervalRef.current)
        loopIntervalRef.current = null
      }
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy()
        playerRef.current = null
      }

      // Restore previous handler so we don't break other listeners.
      window.onYouTubeIframeAPIReady = prev
    }
  }, [shouldLoadVideo])

  return (
    <Section id="printing-capabilities" bg="secondary" className="relative">
      <div ref={sectionRef}>
        {shouldLoadVideo && (
          <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload" />
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: Video Side - Large and Impactful */}
        <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group animate-fade-in">
          {/* Video Player Container */}
          <div className="absolute inset-0 w-full h-full bg-slate-900">
            <div id="printing-video-player" className="absolute top-1/2 left-1/2 w-[300%] h-[300%] md:w-[250%] md:h-[250%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none" />
          </div>

          {/* Artistic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl pointer-events-none" />

          <div className="absolute bottom-10 left-10 right-10 text-white pointer-events-none">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-10 h-[2px] bg-amber-500" />
              <span className="text-amber-500 text-sm font-bold tracking-[0.2em] uppercase">Premium Printing</span>
            </div>
            <p className="text-2xl font-heading font-medium text-white/90 leading-tight">
              {t('printing.subtitle') || "Yaratıcılığınızı kumaşla buluşturuyoruz."}
            </p>
          </div>
        </div>

        {/* Right: Content Side */}
        <div className="space-y-10 animate-slide-up [animation-delay:200ms]">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
                {t('printing.title') || "Baskı ve Tasarım Hizmetleri"}
              </h2>
              <div className="w-24 h-1.5 bg-amber-600 mt-6 rounded-full"></div>
            </div>

            <p className="text-xl text-slate-600 font-light leading-relaxed">
              {t('printing.description') || "Sınırsız desen çalışmaları ve kumaş üzeri baskı çözümleri."}
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-700 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {t('printing.design_support') || "Özel Tasarım Desteği"}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {t('printing.design_desc') || "Desen çalışmalarında profesyonel destek ve özgün yaratıcılık."}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-700 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {t('printing.flexible_production') || "Esnek Üretim"}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {t('printing.flexible_desc') || "Müşterinin istediği baskıyı, istediği kumaş türüne uygulama esnekliği."}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="bg-amber-700 hover:bg-amber-800 min-w-[220px] shadow-lg shadow-amber-900/10">
                {t('contact.title') || "Bize Ulaşın"}
              </Button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </Section>
  )
}
