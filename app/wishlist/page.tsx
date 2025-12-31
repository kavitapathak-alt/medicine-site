"use client"

import { useWishlist } from "@/contexts/wishlist-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WishlistPage() {
  const { items } = useWishlist()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-6 pt-32">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Your wishlist is empty</h1>
          <p className="text-muted-foreground mb-8">Save your favorite medicines for later.</p>
          <Link href="/">
            <Button className="rounded-full px-8 font-bold">Explore Catalog</Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((med, i) => (
            <ProductCard key={med.id} {...med} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
