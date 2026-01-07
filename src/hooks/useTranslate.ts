'use client'

import { useTranslate as useTranslateContext } from '@/context/LanguageContext'

// Re-export the hook from the context file
// This maintains backward compatibility with existing imports
export const useTranslate = useTranslateContext
export default useTranslate
