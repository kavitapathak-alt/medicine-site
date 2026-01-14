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
  name: "HepBest (Tenofovir Alafenamide Tablets 25mg)",
  category: "Antiviral / Clinical",
  image: "https://5.imimg.com/data5/EK/XO/WD/SELLER-38103990/tenofovir-alafenamide-tablets.jpg",
  price: "₹1,599",
  priceNumber: 1599,
  description: "Tenofovir Alafenamide 25mg tablets used for chronic Hepatitis B management. Helps reduce viral load and supports liver health as prescribed by a specialist.",
}
,
  {
  id: 2,
  name: "Zerodol-SP Tablet",
  category: "Pain Relief / Therapeutics",
  image: "https://www.practostatic.com/practopedia-images/v3/res-750/zerodol-sp-tablet-10-s_404d2128-fd3e-43ac-ba74-3a30ba35525c.JPG",
  price: "₹120",
  priceNumber: 120,
  description: "Combination of Aceclofenac, Paracetamol & Serratiopeptidase for relief from pain, swelling, and inflammation. Use only as prescribed by a doctor.",
}
,
  {
  id: 3,
  name: "ChiroRab (Rabies Vaccine, Human I.P.) 1ml",
  category: "Vaccine / Clinical",
  image: "/allergy-medicine.png",
  price: "₹350",
  priceNumber: 350,
  description: "Human rabies vaccine (PCEC) for intramuscular injection. Used for rabies prevention and post-exposure protection as advised by a doctor.",
}
,
  {
  id: 4,
  name: "Humalog KwikPen (Insulin Lispro I.P.)",
  category: "Diabetes / Clinical",
  image: "/stomach-medicine.png",
  price: "₹1,799",
  priceNumber: 1799,
  description: "Rapid-acting insulin (Insulin Lispro) in a convenient prefilled pen for diabetes management. Helps control blood sugar spikes after meals as prescribed by a doctor.",
}
,
  {
  id: 5,
  name: "NovoRapid FlexPen (Insulin Aspart I.P.)",
  category: "Diabetes / Clinical",
  image: "/antibiotic-pills.jpg",
  price: "₹1,050",
  priceNumber: 1050,
  description: "Fast-acting insulin (Insulin Aspart) for effective blood sugar control in diabetes patients. Helps manage post-meal glucose levels quickly and safely.",
}
,
  
  {
  id: 7,
  name: "MED PLUS+ Sterile Powdered Disposable Latex Surgical Gloves",
  category: "Clinical / Surgical",
  image: "/med-plus-surgical-gloves.jpg",
  price: "₹99",
  priceNumber: 99,
  description: "Sterile powdered disposable latex surgical gloves for safe, hygienic medical use. Premium quality with EO sterilization for reliable protection during procedures.",
}
,{
  id: 8,
  name: "Ozempic (Semaglutide Injection) 1mg",
  category: "Diabetes / Clinical",
  image: "/ozempic-semaglutide-1mg.jpg",
  price: "₹9,999",
  priceNumber: 9999,
  description: "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
}

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
                <img src="/pharmacist-helping-patient.jpg" alt="Medical Care" className="w-full h-full object-contain bg-white p-2" />
              </div>
              <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 md:border-4 border-white">
                <img src="/medical-pills-capsules.jpg" alt="Quality Meds" className="w-full h-full object-contain bg-white p-2" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 md:border-4 border-white">
                <img src="/doctor-stethoscope.jpg" alt="Expert Support" className="w-full h-full object-contain bg-white p-2" />
              </div>
              <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 md:border-4 border-white">
                <img
                  src="/diverse-medical-equipment.png"
                  alt="Clinical Excellence"
                  className="w-full h-full object-contain bg-white p-2"
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
