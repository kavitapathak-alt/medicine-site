"use client"

import { Plus, ShoppingCart, Menu, Heart, User, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
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
      className={`fixed top-0 z-50 w-full transition-all duration-500
        ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-slate-950/90 to-transparent py-6"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-500 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-primary/20">
            <Plus className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            MedCatalog
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-slate-300">
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

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="hidden lg:block relative p-2 text-slate-300 hover:text-primary transition-colors"
          >
            <Heart className="h-6 w-6" />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 text-slate-300 hover:text-primary transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-slate-300 hover:text-primary transition-colors"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Auth */}
          {isAuthenticated ? (
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/account">
                <Button
                  variant="ghost"
                  className="rounded-full px-4 font-semibold text-slate-200 hover:text-primary hover:bg-white/5"
                >
                  <User className="h-4 w-4 mr-2" />
                  {user?.name}
                </Button>
              </Link>
              <Button
                onClick={logout}
                variant="outline"
                className="rounded-full px-6 font-semibold border-white/20 text-white hover:bg-white/10"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login" className="hidden lg:block">
              <Button className="bg-gradient-to-r from-primary to-emerald-500 hover:opacity-90 text-white rounded-full px-6 font-semibold shadow-lg shadow-primary/20">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-white/10">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-5 text-slate-200">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-primary">
              All Medicines
            </Link>
            <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="hover:text-primary">
              Wishlist
            </Link>
            <Link href="/cart" onClick={() => setMenuOpen(false)} className="hover:text-primary">
              Cart
            </Link>

            {isAuthenticated ? (
              <>
                <Link href="/account" onClick={() => setMenuOpen(false)} className="hover:text-primary">
                  My Account
                </Link>
                <Button
                  onClick={() => {
                    logout()
                    setMenuOpen(false)
                  }}
                  variant="outline"
                  className="rounded-full font-semibold border-white/20 text-white hover:bg-white/10"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-emerald-500 text-white rounded-full font-semibold">
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
