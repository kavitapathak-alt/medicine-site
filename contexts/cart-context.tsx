"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { CartItem, Medicine } from "@/lib/types"

interface CartContextType {
  items: CartItem[]
  addToCart: (medicine: Medicine) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("medcatalog_cart")
    if (savedCart) setItems(JSON.parse(savedCart))
  }, [])

  useEffect(() => {
    localStorage.setItem("medcatalog_cart", JSON.stringify(items))
  }, [items])

  const addToCart = (medicine: Medicine) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === medicine.id)
      if (existing) {
        return prev.map((item) => (item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...medicine, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.priceNumber * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) throw new Error("useCart must be used within a CartProvider")
  return context
}
