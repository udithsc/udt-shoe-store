'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../components/PopularProductCard';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    updateQuantity: (slug: string, quantity: number) => void;
    removeFromCart: (slug: string) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartLoaded, setCartLoaded] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem('udt-cart');
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCartItems(storedCart ? JSON.parse(storedCart) : []);
        setCartLoaded(true);
    }, []);

    useEffect(() => {
        if (!cartLoaded) return;
        localStorage.setItem('udt-cart', JSON.stringify(cartItems));
    }, [cartItems, cartLoaded]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.slug === product.slug);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.slug === product.slug
                        ? { ...item, quantity: Math.min(item.quantity + 1, item.stock ?? 99) }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (slug: string, quantity: number) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) => {
                    if (item.slug !== slug) return item;
                    const maxQuantity = item.stock ?? 99;
                    return { ...item, quantity: Math.max(1, Math.min(quantity, maxQuantity)) };
                })
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (slug: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price * item.quantity;
    }, 0);

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount }}
        >
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
