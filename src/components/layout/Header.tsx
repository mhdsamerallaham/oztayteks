'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { useTranslate } from '@/hooks/useTranslate'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import QuoteBasketDrawer from '@/components/cart/QuoteBasketDrawer'
import { throttle } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, currentLanguage } = useTranslate()
  const pathname = usePathname()
  const router = useRouter()
  const { totalItems } = useCart()

  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 10)
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const isOverlayOpen = isCartOpen || isMenuOpen
    if (!isOverlayOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isCartOpen, isMenuOpen])

  useEffect(() => {
    setIsCartOpen(false)
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = useMemo(() => [
    { label: t('nav.home') || 'Home', href: '/' },
    { label: t('nav.about') || 'About Us', href: '/about' },
    { label: t('nav.products') || 'Products', href: '/products' },
    { label: t('nav.contact') || 'Contact', href: '/contact' },
  ], [t])

  const isActive = useCallback((path: string) => pathname === path, [pathname])

  const handleBack = useCallback(() => {
    try {
      if (typeof window !== 'undefined' && window.history.length > 1) {
        router.back()
        return
      }
    } catch {
      // Fallback to home if router.back fails
    }
    router.push('/')
  }, [router])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-[background-color,box-shadow] duration-300 ease
          ${isScrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
            : 'bg-transparent shadow-none'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Left: Back + Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {!isHome && (
              <button
                type="button"
                onClick={handleBack}
                className={`p-3 -m-1 min-h-11 min-w-11 rounded-xl transition-colors duration-200 ${
                  isScrolled
                    ? 'text-mutedForeground hover:text-primary hover:bg-surface-muted'
                    : 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] hover:opacity-90'
                }`}
                aria-label={t('nav.back') || 'Back'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <Link href="/">
              <h1
                className={`text-lg lg:text-[1.35rem] font-bold tracking-wide cursor-pointer hover:opacity-80 transition-opacity ${
                  !isScrolled && isHome
                    ? 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]'
                    : 'text-foreground'
                }`}
              >
                OZTAYTEKS
              </h1>
            </Link>
          </div>

          {/* Menu - Right */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center space-x-8 ${currentLanguage === 'ar' ? 'space-x-reverse' : ''}`}
              style={currentLanguage === 'ar' ? { wordSpacing: '0.12em' } : undefined}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                    ? 'text-primary font-bold'
                    : 'text-mutedForeground hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Shopping Cart Icon */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="p-3 -m-1 min-h-11 min-w-11 text-mutedForeground hover:text-primary transition-colors duration-200 relative group"
                aria-label="Quote Basket"
                aria-haspopup="dialog"
                aria-expanded={isCartOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-0 -right-0 bg-amber-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button - Placeholder for future logic */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-3 -m-1 min-h-11 min-w-11 text-mutedForeground hover:text-primary transition-colors duration-200"
                aria-label="Open menu"
                aria-haspopup="dialog"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      </header>

      <div
        className={`fixed inset-0 z-[55] ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 h-[100dvh] w-full max-w-[420px] bg-surface shadow-2xl transition-transform duration-300 ease transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="space-y-1">
                <h2 className="text-lg font-heading font-bold text-foreground">{t('nav.menu') || 'Menü'}</h2>
                <p className="text-xs text-mutedForeground">{t('nav.products') || 'Products'} • {t('nav.contact') || 'Contact'}</p>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-3 -m-1 min-h-11 min-w-11 rounded-xl text-mutedForeground hover:text-foreground hover:bg-surface-muted transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full flex items-center justify-between rounded-2xl px-4 py-4 min-h-11 text-base font-medium transition-colors ${isActive(link.href)
                      ? 'bg-surface-muted text-foreground'
                      : 'text-mutedForeground hover:text-foreground hover:bg-surface-muted'
                      }`}
                  >
                    <span>{link.label}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-6 py-5 border-t border-border bg-surface">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsCartOpen(true)
                }}
                className="w-full min-h-11 py-4 bg-primary text-white rounded-xl font-heading font-bold text-base hover:bg-primary-dark transition-colors flex items-center justify-center gap-3"
              >
                <span>{t('quote_basket.title') || 'Teklif Sepeti'}</span>
                {totalItems > 0 && (
                  <span className="bg-white/15 text-white text-xs font-bold px-2.5 py-1 rounded-full">{totalItems}</span>
                )}
              </button>
              <div className="h-[env(safe-area-inset-bottom)]" />
            </div>
          </div>
        </aside>
      </div>

      <QuoteBasketDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
