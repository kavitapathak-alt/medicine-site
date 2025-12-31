"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [placed, setPlaced] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate order placement
    const order = {
      id: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
      items: [...items],
      total: totalPrice,
      date: new Date().toISOString(),
      status: "confirmed",
      shippingAddress: { ...formData },
    }

    const orders = JSON.parse(localStorage.getItem("medcatalog_orders") || "[]")
    orders.push(order)
    localStorage.setItem("medcatalog_orders", JSON.stringify(orders))

    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-6 pt-32">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground mb-8 text-center max-w-md">
            Thank you for your order. We've sent a confirmation email to your address.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => router.push("/account")} variant="outline" className="rounded-full px-8 font-bold">
              View Orders
            </Button>
            <Button onClick={() => router.push("/")} className="rounded-full px-8 font-bold">
              Continue Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-border space-y-6">
              <h2 className="text-xl font-bold">Shipping Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    className="rounded-xl"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="rounded-xl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  required
                  className="rounded-xl"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  required
                  className="rounded-xl"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    required
                    className="rounded-xl"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    required
                    className="rounded-xl"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-border space-y-6">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="space-y-4 max-h-[300px] overflow-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-bold">₹{(item.priceNumber * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t space-y-4">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
                </div>
                <Button type="submit" className="w-full rounded-xl h-14 font-bold text-lg shadow-lg shadow-primary/20">
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
