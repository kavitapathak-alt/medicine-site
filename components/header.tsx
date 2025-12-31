"use client"

import { Plus, ShoppingCart, Menu, Heart, User, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
// <CHANGE> Added useAuth and useCart hooks
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  // <CHANGE> Added mobile menu state
  const [menuOpen, setMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md py-3 border-b shadow-sm" : "py-6"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* <CHANGE> Made logo clickable to go to homepage */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <Plus className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">MedCatalog</span>
        </Link>

        {/* <CHANGE> Added navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            All Medicines
          </Link>
          <Link href="/wishlist" className="hover:text-primary transition-colors">
            Wishlist
          </Link>
          <Link href="/cart" className="hover:text-primary transition-colors">
            Cart
          </Link>
          {isAuthenticated && (
            <Link href="/account" className="hover:text-primary transition-colors">
              My Account
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-5">
          {/* <CHANGE> Added wishlist button */}
          <Link href="/wishlist" className="hidden lg:block relative p-2 text-muted-foreground hover:text-primary transition-colors">
            <Heart className="h-6 w-6" />
          </Link>
          
          {/* <CHANGE> Updated cart button with dynamic count and link */}
          <Link href="/cart" className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 text-[10px] font-bold bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* <CHANGE> Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* <CHANGE> Updated auth buttons */}
          {isAuthenticated ? (
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/account">
                <Button variant="ghost" className="rounded-full px-4 font-semibold">
                  <User className="h-4 w-4 mr-2" />
                  {user?.name}
                </Button>
              </Link>
              <Button onClick={logout} variant="outline" className="rounded-full px-6 font-semibold">
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login" className="hidden lg:block">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* <CHANGE> Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-semibold hover:text-primary" onClick={() => setMenuOpen(false)}>
              All Medicines
            </Link>
            <Link href="/wishlist" className="text-sm font-semibold hover:text-primary" onClick={() => setMenuOpen(false)}>
              Wishlist
            </Link>
            <Link href="/cart" className="text-sm font-semibold hover:text-primary" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>
            {isAuthenticated ? (
              <>
                <Link href="/account" className="text-sm font-semibold hover:text-primary" onClick={() => setMenuOpen(false)}>
                  My Account
                </Link>
                <Button onClick={() => { logout(); setMenuOpen(false); }} variant="outline" className="rounded-full font-semibold">
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold">
                  Sign In
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
