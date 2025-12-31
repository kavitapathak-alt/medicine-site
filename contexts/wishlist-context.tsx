"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Medicine } from "@/lib/types"

interface WishlistContextType {
  items: Medicine[]
  addToWishlist: (medicine: Medicine) => void
  removeFromWishlist: (id: number) => void
  isInWishlist: (id: number) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Medicine[]>([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem("medcatalog_wishlist")
    if (savedWishlist) setItems(JSON.parse(savedWishlist))
  }, [])

  useEffect(() => {
    localStorage.setItem("medcatalog_wishlist", JSON.stringify(items))
  }, [items])

  const addToWishlist = (medicine: Medicine) => {
    setItems((prev) => {
      if (prev.some((item) => item.id === medicine.id)) return prev
      return [...prev, medicine]
    })
  }

  const removeFromWishlist = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const isInWishlist = (id: number) => items.some((item) => item.id === id)

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) throw new Error("useWishlist must be used within a WishlistProvider")
  return context
}
