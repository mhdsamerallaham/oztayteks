'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: string;
    name: string;
    image: string;
    color: string;
    quantity: string | number;
    notes?: string;
    category: string;
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string, color: string) => void;
    clearCart: () => void;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('oztayteks_cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse cart', e);
            }
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('oztayteks_cart', JSON.stringify(items));
    }, [items]);

    const addItem = (newItem: CartItem) => {
        setItems(prev => {
            // Check if item with same ID and color already exists
            const existingIndex = prev.findIndex(item => item.id === newItem.id && item.color === newItem.color);
            if (existingIndex > -1) {
                const updatedItems = [...prev];
                // For B2B, maybe we just overwrite or update quantity. For now, let's update.
                updatedItems[existingIndex] = { ...updatedItems[existingIndex], quantity: newItem.quantity, notes: newItem.notes };
                return updatedItems;
            }
            return [...prev, newItem];
        });
    };

    const removeItem = (id: string, color: string) => {
        setItems(prev => prev.filter(item => !(item.id === id && item.color === color)));
    };

    const clearCart = () => {
        setItems([]);
    };

    const totalItems = items.length;

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
