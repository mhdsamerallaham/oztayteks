export type Language = 'tr' | 'en' | 'ar'
export type TranslationKey = string

// Translation cache
let translations: Record<Language, Record<string, any>> = {
  tr: {},
  en: {},
  ar: {}
}

let currentLanguage: Language = 'tr'

/**
 * Load translations for a specific language
 */
export async function loadTranslations(lang: Language): Promise<Record<string, any>> {
  try {
    const response = await fetch(`/locales/${lang}.json`)
    const data = await response.json()
    translations[lang] = data
    return data
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error)
    return {}
  }
}

/**
 * Set the current language
 */
export function setLanguage(lang: Language): void {
  currentLanguage = lang
  if (typeof window !== 'undefined') {
    localStorage.setItem('oztayteks-language', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }
}

/**
 * Get the current language
 */
export function getLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('oztayteks-language') as Language
    if (stored && ['tr', 'en', 'ar'].includes(stored)) {
      return stored
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0] as Language
    if (['tr', 'en', 'ar'].includes(browserLang)) {
      return browserLang
    }
  }
  
  return currentLanguage
}

/**
 * Initialize translation system
 */
export async function initTranslations(): Promise<void> {
  const lang = getLanguage()
  setLanguage(lang)
  await loadTranslations(lang)
}

/**
 * Get translation by key
 */
export function t(key: TranslationKey, params?: Record<string, string | number>): string {
  const keys = key.split('.')
  let value: any = translations[currentLanguage]
  
  // Navigate through nested keys
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      // Fallback to Turkish if key not found
      value = translations.tr
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey]
        } else {
          return key // Return key if not found
        }
      }
      break
    }
  }
  
  if (typeof value !== 'string') {
    return key // Return key if value is not a string
  }
  
  // Replace parameters in the translation
  if (params) {
    let result = value
    for (const [param, replacement] of Object.entries(params)) {
      result = result.replace(new RegExp(`{${param}}`, 'g'), String(replacement))
    }
    return result
  }
  
  return value
}

/**
 * Get all available languages
 */
export function getAvailableLanguages(): { code: Language; name: string; native: string }[] {
  return [
    { code: 'tr', name: 'Turkish', native: 'Türkçe' },
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ar', name: 'Arabic', native: 'العربية' }
  ]
}

/**
 * Switch to a different language
 */
export async function switchLanguage(lang: Language): Promise<void> {
  if (!translations[lang] || Object.keys(translations[lang]).length === 0) {
    await loadTranslations(lang)
  }
  setLanguage(lang)
}

/**
 * Get translation with fallback
 */
export function tWithFallback(key: TranslationKey, fallbackLang: Language = 'tr'): string {
  const keys = key.split('.')
  
  // Try current language first
  let value: any = translations[currentLanguage]
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      value = null
      break
    }
  }
  
  if (typeof value === 'string') {
    return value
  }
  
  // Try fallback language
  value = translations[fallbackLang]
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return key if not found
    }
  }
  
  return typeof value === 'string' ? value : key
}

/**
 * Check if a translation key exists
 */
export function hasTranslation(key: TranslationKey): boolean {
  const keys = key.split('.')
  let value = translations[currentLanguage]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return false
    }
  }
  
  return typeof value === 'string'
}

/**
 * Get all translation keys for current language
 */
export function getTranslationKeys(): string[] {
  const keys: string[] = []
  
  function collectKeys(obj: any, prefix = ''): void {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        collectKeys(obj[key], prefix ? `${prefix}.${key}` : key)
      } else {
        keys.push(prefix ? `${prefix}.${key}` : key)
      }
    }
  }
  
  collectKeys(translations[currentLanguage])
  return keys
}

// Export main translation function as default
export default {
  t,
  setLanguage,
  getLanguage,
  initTranslations,
  switchLanguage,
  getAvailableLanguages,
  hasTranslation,
  getTranslationKeys
}
