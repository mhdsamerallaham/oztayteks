'use client'

import { LanguageProvider } from '@/context/LanguageContext'
import { CartProvider } from '@/context/CartContext'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </CartProvider>
    )
}
