'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: number | string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  shade?: string;
  size?: string;
  image: string;
  quantity: number;
  slug?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any) => void;
  updateQuantity: (id: number | string, delta: number) => void;
  removeItem: (id: number | string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // পেজ লোড হলে LocalStorage থেকে কার্ট ডাটা লোড করা
  useEffect(() => {
    const savedCart = localStorage.getItem('lumina_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // কার্ট চেঞ্জ হলেই LocalStorage-এ সেভ করা
  useEffect(() => {
    localStorage.setItem('lumina_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // কার্টে প্রোডাক্ট যোগ করা (যদি অলরেডি থাকে তবে কোয়ান্টিটি বাড়বে)
  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += (product.quantity || 1);
        return updated;
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: product.price,
          originalPrice: product.originalPrice,
          discount: product.badge || product.discount || '-25%',
          shade: product.shade || 'Rosewood',
          size: product.size || '3.5 g',
          image: product.image,
          quantity: product.quantity || 1,
          slug: product.slug
        }];
      }
    });
    alert('Product added to cart successfully!');
  };

  const updateQuantity = (id: number | string, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number | string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}