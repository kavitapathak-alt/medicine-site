export interface Medicine {
  id: number
  name: string
  category: string
  image: string
  price: string
  priceNumber: number
  description: string
}

export interface User {
  email: string
  name: string
}

export interface CartItem extends Medicine {
  quantity: number
}

export interface OrderItem extends CartItem {}

export interface Order {
  id: string
  date: string
  items: OrderItem[]
  total: number
  status: "Processing" | "Shipped" | "Delivered"
}
