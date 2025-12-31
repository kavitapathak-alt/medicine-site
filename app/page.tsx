"use client"

import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

// Sample Medicine Data
const MEDICINES = [
  {
    id: 1,
    name: "Regenerative Pain Relief",
    category: "Therapeutics",
    image: "/ibuprofen-capsules.jpg",
    price: "₹899",
    priceNumber: 899,
    description: "Advanced formula for rapid pain relief and anti-inflammatory support.",
  },
  {
    id: 2,
    name: "Immune Catalyst 500",
    category: "Vitality",
    image: "/vitamin-c-tablets.png",
    price: "₹1,249",
    priceNumber: 1249,
    description: "High-potency Vitamin C supplement for enhanced immune system function.",
  },
  {
    id: 3,
    name: "Advanced Respiratory Care",
    category: "Essentials",
    image: "/allergy-medicine.png",
    price: "₹650",
    priceNumber: 650,
    description: "Effective relief from respiratory discomfort and common allergies.",
  },
  {
    id: 4,
    name: "Systemic Equilibrium",
    category: "Digestive",
    image: "/stomach-medicine.png",
    price: "₹1,100",
    priceNumber: 1100,
    description: "Specialized digestive support for maintaining gut health and balance.",
  },
  {
    id: 5,
    name: "Bacterial Defense Max",
    category: "Clinical",
    image: "/antibiotic-pills.jpg",
    price: "₹1,599",
    priceNumber: 1599,
    description: "Broad-spectrum support for clinical bacterial defense and recovery.",
  },
  {
    id: 6,
    name: "Essential Lipid Balance",
    category: "Vitality",
    image: "/paracetamol-box.jpg",
    price: "₹450",
    priceNumber: 450,
    description: "Standard clinical solution for temperature regulation and mild relief.",
  },
]

export default function MedicineCatalog() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-reveal opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted Healthcare Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Quality Care, <br />
              <span className="text-primary">Delivered Home.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Browse our curated selection of high-quality medicines and healthcare products. Safe, reliable, and
              expert-approved.
            </p>

            <div className="relative group max-w-md">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <Input
                className="rounded-full border-primary/20 bg-white h-14 pl-12 pr-6 text-base shadow-sm focus-visible:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                placeholder="Search medicines, health products..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-reveal opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-4 pt-8 md:pt-12">
              <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 md:border-4 border-white">
                <img src="/pharmacist-helping-patient.jpg" alt="Medical Care" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 md:border-4 border-white">
                <img src="/medical-pills-capsules.jpg" alt="Quality Meds" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 md:border-4 border-white">
                <img src="/doctor-stethoscope.jpg" alt="Expert Support" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 md:border-4 border-white">
                <img
                  src="/diverse-medical-equipment.png"
                  alt="Clinical Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">Top Categories</h2>
              <p className="text-muted-foreground">Quality clinical solutions for your wellbeing.</p>
            </div>
            <Button
              variant="outline"
              className="rounded-full gap-2 border-primary/20 hover:bg-primary/5 text-primary bg-transparent"
            >
              View Entire Catalog <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDICINES.map((med, i) => (
              <ProductCard key={med.id} {...med} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
