"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

interface CartItem extends Product {
  quantity: number
}

interface Order {
  id: string
  date: string
  items: CartItem[]
  total: number
  status: "Processing" | "Shipped" | "Delivered"
}

interface User {
  id: string
  name: string
  email: string
}

interface StoreContextType {
  user: User | null
  cart: CartItem[]
  wishlist: Product[]
  orders: Order[]
  login: (email: string, name: string) => void
  logout: () => void
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  placeOrder: () => void
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [orders, setOrders] = useState<Order[]>([])

  // Load from local storage (for demo purposes since DB was skipped)
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) setUser(JSON.parse(savedUser))

    const savedCart = localStorage.getItem("cart")
    if (savedCart) setCart(JSON.parse(savedCart))

    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))

    const savedOrders = localStorage.getItem("orders")
    if (savedOrders) setOrders(JSON.parse(savedOrders))
  }, [])

  // Save to local storage
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user))
    else localStorage.removeItem("user")
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
    localStorage.setItem("orders", JSON.stringify(orders))
  }, [user, cart, wishlist, orders])

  const login = (email: string, name: string) => {
    setUser({ id: Math.random().toString(36).substr(2, 9), email, name })
  }

  const logout = () => setUser(null)

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(productId)
    setCart((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const addToWishlist = (product: Product) => {
    if (!wishlist.find((p) => p.id === product.id)) {
      setWishlist((prev) => [...prev, product])
    }
  }

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId))
  }

  const placeOrder = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const newOrder: Order = {
      id: `ORD-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      date: new Date().toLocaleDateString(),
      items: [...cart],
      total,
      status: "Processing",
    }
    setOrders((prev) => [newOrder, ...prev])
    setCart([])
  }

  return (
    <StoreContext.Provider
      value={{
        user,
        cart,
        wishlist,
        orders,
        login,
        logout,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        placeOrder,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context
}
