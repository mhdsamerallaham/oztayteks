'use client'

import { useTranslate } from '@/hooks/useTranslate'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void
    YT: any
  }
}

export default function Hero() {
  const { t } = useTranslate()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)

    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    if (mq.addEventListener) {
      mq.addEventListener('change', handleChange)
    } else {
      mq.addListener(handleChange)
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handleChange)
      } else {
        mq.removeListener(handleChange)
      }
    }
  }, [])

  useEffect(() => {
    if (!mounted || isMobile) return
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
  }, [mounted, isMobile])

  useEffect(() => {
    if (!mounted || isMobile || !shouldLoadVideo) return

    let player: any
    let loopInterval: number | undefined

    const initPlayer = () => {
      if (!document.getElementById('youtube-player')) return
      if (!window.YT || !window.YT.Player) return

      player = new window.YT.Player('youtube-player', {
        videoId: '4uKisswmYSs',
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          start: 45,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          vq: 'hd1080',
        },
        events: {
          onReady: (event: any) => {
            setVideoReady(true)

            event.target.mute()
            if (event.target.setPlaybackQuality) {
              event.target.setPlaybackQuality('hd1080')
            }
            event.target.playVideo()

            loopInterval = window.setInterval(() => {
              try {
                const currentTime = event.target.getCurrentTime()
                if (currentTime && currentTime >= 90) {
                  event.target.seekTo(45)
                }
              } catch (e) {
              }
            }, 1000)
          },
        },
      })
    }

    setVideoReady(false)

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = () => {
        initPlayer()
      }
    }

    return () => {
      if (loopInterval) {
        window.clearInterval(loopInterval)
      }
      if (player && player.destroy) {
        player.destroy()
      }
    }
  }, [mounted, isMobile, shouldLoadVideo])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {shouldLoadVideo && !isMobile && (
        <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload" />
      )}
      {/* Video Background */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/poster%20imege.png"
            alt="Oztayteks hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 hidden md:block">
          <div
            className={`absolute inset-0 z-10 transition-opacity duration-300 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
          >
            <Image
              src="/images/poster%20imege.png"
              alt="Oztayteks hero"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {mounted && !isMobile && (
            <div className="absolute inset-0 z-0 w-full h-full">
              <div
                id="youtube-player"
                className="absolute top-1/2 left-1/2 w-[300%] h-[300%] md:w-[177.77vh] md:min-w-full md:min-h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none md:scale-[1.35]"
              // Mobile: Force much larger width/height to ensure coverage and center crop
              // Desktop: Use precise aspect ratio scaling
              />
            </div>
          )}
        </div>

        {/* Overlays for readability and aesthetics */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40 opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight animate-fade-in drop-shadow-2xl">
            {t('hero.title') || "Masters of Textile Innovation"}
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up [animation-delay:200ms] drop-shadow-md">
            {t('hero.subtitle') || "Combining industrial precision with sustainable artistry to weave the fabrics of tomorrow."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up [animation-delay:400ms]">
            <Link
              href="/contact"
              className="min-w-[200px] inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm tracking-wide px-8 py-4 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              {t('hero.contact_us') || "Contact Us"}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>
    </section>
  )
}
