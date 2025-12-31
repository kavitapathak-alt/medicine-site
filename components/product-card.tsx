"use client"

import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
// <CHANGE> Added cart and wishlist functionality
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { Medicine } from "@/lib/types"

interface ProductCardProps extends Medicine {
  index: number
}

export function ProductCard({ id, name, category, image, price, priceNumber, description, index }: ProductCardProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(id)

  const handleAddToCart = () => {
    addToCart({ id, name, category, image, price, priceNumber, description })
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(id)
    } else {
      addToWishlist({ id, name, category, image, price, priceNumber, description })
    }
  }

  return (
    <div
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 animate-reveal opacity-0"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold uppercase tracking-wider py-1 px-3 bg-white/90 backdrop-blur rounded-full text-primary border border-primary/10">
            {category}
          </span>
        </div>
        {/* <CHANGE> Added wishlist button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart className={`h-5 w-5 ${inWishlist ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
        </button>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">{price}</span>
          {/* <CHANGE> Updated button to add to cart */}
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white border-none px-4 font-bold text-[11px] uppercase tracking-wider transition-all"
          >
            <ShoppingCart className="h-3 w-3 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
