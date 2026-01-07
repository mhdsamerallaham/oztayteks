'use client'

import { useTranslate } from '@/hooks/useTranslate'

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, isLoading, availableLanguages } = useTranslate()

  const handleLanguageChange = async (lang: typeof currentLanguage) => {
    if (lang !== currentLanguage && !isLoading) {
      await changeLanguage(lang)
    }
  }

  return (
    <div className="language-switcher flex items-center gap-1">
      {availableLanguages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          disabled={isLoading}
          className={`
            px-3 py-2 min-h-11 min-w-11 text-sm font-medium rounded-lg transition-all duration-200
            ${currentLanguage === lang.code
              ? 'bg-primary text-white shadow-lg'
              : 'bg-surface text-mutedForeground hover:text-foreground hover:bg-surface-muted border border-border'
            }
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            ${lang.code === 'ar' ? 'font-arabic' : ''}
          `}
          aria-label={`Switch to ${lang.name}`}
          title={`${lang.native} (${lang.name})`}
        >
          {lang.code.toUpperCase()}
        </button>
      ))}
      
      {isLoading && (
        <div className="loading-spinner flex items-center">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
