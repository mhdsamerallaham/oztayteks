'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type Language = 'tr' | 'en' | 'ar'
export type TranslationKey = string

interface Translations {
    [key: string]: string | Translations
}

interface LanguageContextType {
    t: (key: TranslationKey, params?: Record<string, string | number>) => string
    currentLanguage: Language
    isLoading: boolean
    error: string | null
    changeLanguage: (lang: Language) => Promise<void>
    availableLanguages: { code: Language; name: string; native: string }[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_KEY = 'oztayteks-language'
const DEFAULT_LANGUAGE: Language = 'tr'

const availableLanguages: { code: Language; name: string; native: string }[] = [
    { code: 'tr', name: 'Turkish', native: 'Türkçe' },
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ar', name: 'Arabic', native: 'العربية' }
]

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [translations, setTranslations] = useState<Translations>({})
    const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const loadTranslations = useCallback(async (lang: Language): Promise<Translations> => {
        try {
            const response = await fetch(`/locales/${lang}.json`)
            if (!response.ok) {
                throw new Error(`Failed to load translations for ${lang}`)
            }
            const data = await response.json()
            return data
        } catch (err) {
            console.error(`Error loading translations for ${lang}:`, err)
            throw err
        }
    }, [])

    const getNestedValue = useCallback((obj: Translations, path: string): string | null => {
        const keys = path.split('.')
        let current: any = obj

        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key]
            } else {
                return null
            }
        }

        return typeof current === 'string' ? current : null
    }, [])

    const t = useCallback((key: TranslationKey, params?: Record<string, string | number>): string => {
        let value = getNestedValue(translations, key)

        if (value) {
            if (params) {
                let result = value
                for (const [param, replacement] of Object.entries(params)) {
                    result = result.replace(new RegExp(`{${param}}`, 'g'), String(replacement))
                }
                return result
            }
            return value
        }

        // Return null if not found so component can use fallback OR return key if intent is strict
        // Typically returning key is safer if fallback is missing, but returning null allows || operator.
        // Given the codebase uses || 'Default', we return null or empty string if loading?
        // Actually, logic: if value is null, return key. 
        // BUT the problem was that returning key makes || 'Default' never happen.
        // So we return NULL if translations are EMPTY (loading) or if valid translation missing?
        // To support {t('key') || 'Default'}, t MUST return falsy if missing.
        return null as unknown as string // Return null to allow fallback
    }, [translations, getNestedValue])

    const changeLanguage = useCallback(async (lang: Language): Promise<void> => {
        setIsLoading(true)
        setError(null)

        try {
            const newTranslations = await loadTranslations(lang)
            setTranslations(newTranslations)
            setCurrentLanguage(lang)

            if (typeof window !== 'undefined') {
                localStorage.setItem(LANGUAGE_KEY, lang)
                document.documentElement.lang = lang
                document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
                if (lang === 'ar') {
                    document.body.classList.add('rtl-layout')
                } else {
                    document.body.classList.remove('rtl-layout')
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to change language')
        } finally {
            setIsLoading(false)
        }
    }, [loadTranslations])

    useEffect(() => {
        const initializeTranslations = async () => {
            try {
                let initialLanguage: Language = DEFAULT_LANGUAGE

                if (typeof window !== 'undefined') {
                    const stored = localStorage.getItem(LANGUAGE_KEY) as Language
                    if (stored && ['tr', 'en', 'ar'].includes(stored)) {
                        initialLanguage = stored
                    } else {
                        const browserLang = navigator.language.split('-')[0] as Language
                        if (['tr', 'en', 'ar'].includes(browserLang)) {
                            initialLanguage = browserLang
                        }
                    }
                }

                const initialTranslations = await loadTranslations(initialLanguage)
                setTranslations(initialTranslations)
                setCurrentLanguage(initialLanguage)

                if (typeof window !== 'undefined') {
                    document.documentElement.lang = initialLanguage
                    document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr'
                    if (initialLanguage === 'ar') {
                        document.body.classList.add('rtl-layout')
                    } else {
                        document.body.classList.remove('rtl-layout')
                    }
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to initialize translations')
            } finally {
                setIsLoading(false)
            }
        }

        initializeTranslations()
    }, [loadTranslations])

    return (
        <LanguageContext.Provider value={{ t, currentLanguage, isLoading, error, changeLanguage, availableLanguages }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useTranslate() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useTranslate must be used within a LanguageProvider')
    }
    return context
}
