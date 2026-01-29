"use client"

interface ProductCardProps {
  image?: string
  name: string
  index: number
}

export function ProductCard({ image, name, index }: ProductCardProps) {
  return (
  <div
  className="group relative rounded-3xl p-[3px] 
             bg-gradient-to-br from-green-400 via-emerald-500 to-lime-400
             transition-all duration-500 animate-reveal opacity-0
             overflow-hidden"
  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
>
  {/* INNER CARD */}
  <div className="bg-white rounded-3xl p-4">
    <div className="aspect-square flex items-center justify-center bg-white">
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="max-w-full max-h-full object-contain
                   transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </div>
</div>

  )
}
