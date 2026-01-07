'use client'

import { useEffect, useState } from 'react'
import { 
  t, 
  initTranslations, 
  switchLanguage, 
  getLanguage, 
  getAvailableLanguages, 
  type Language 
} from '@/lib/translations'

export function useTranslations() {
  const [currentLang, setCurrentLang] = useState<Language>('tr')
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initialize = async () => {
      try {
        await initTranslations()
        setCurrentLang(getLanguage())
        setIsInitialized(true)
      } catch (error) {
        console.error('Failed to initialize translations:', error)
      } finally {
        setIsLoading(false)
      }
    }

    initialize()
  }, [])

  const handleLanguageSwitch = async (lang: Language) => {
    setIsLoading(true)
    try {
      await switchLanguage(lang)
      setCurrentLang(lang)
    } catch (error) {
      console.error('Failed to switch language:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    t,
    currentLang,
    isLoading,
    isInitialized,
    switchLanguage: handleLanguageSwitch,
    availableLanguages: getAvailableLanguages(),
  }
}

export default useTranslations
