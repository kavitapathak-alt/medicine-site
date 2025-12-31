"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Order } from "@/lib/types"
import { useRouter } from "next/navigation"
import { Package, MapPin, Phone, Mail, UserIcon, Calendar } from "lucide-react"

export default function AccountPage() {
  const { user, isAuthenticated } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    const savedOrders = localStorage.getItem("medcatalog_orders")
    if (savedOrders) {
      const allOrders = JSON.parse(savedOrders)
      // Only show orders for current user email (simulated)
      setOrders(allOrders.filter((o: Order) => o.shippingAddress.email === user?.email).reverse())
    }
  }, [isAuthenticated, user, router])

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-border space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <UserIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user?.name}</h1>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" /> {user?.email}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold">My Orders ({orders.length})</h2>
            {orders.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-border text-center space-y-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Package className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">You haven't placed any orders yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white rounded-2xl border border-border overflow-hidden">
                    <div className="bg-muted/50 p-4 flex justify-between items-center border-b">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          Order ID
                        </p>
                        <p className="font-bold text-sm">{order.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          Date
                        </p>
                        <p className="font-bold text-sm flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <div className="flex gap-3 items-center">
                              <img
                                src={item.image || "/placeholder.svg"}
                                className="w-10 h-10 rounded-lg object-cover"
                                alt=""
                              />
                              <div>
                                <p className="font-bold">{item.name}</p>
                                <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                              </div>
                            </div>
                            <span className="font-bold">₹{(item.priceNumber * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t flex justify-between items-end">
                        <div className="text-xs space-y-1">
                          <p className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" /> {order.shippingAddress.address}, {order.shippingAddress.city}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-3 w-3" /> {order.shippingAddress.phone}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">
                            Total Amount
                          </p>
                          <p className="text-xl font-bold text-primary">₹{order.total.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest border border-green-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {order.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
