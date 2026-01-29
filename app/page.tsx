"use client"

import { useMemo } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// ✅ Sample Medicine Data
const MEDICINES = [
  {
    id: 1,
    name: "HepBest (Tenofovir Alafenamide Tablets 25mg)",
    category: "Antiviral / Clinical",
    image:
      "https://assets.truemeds.in/Images/ProductImage/TM-COOM1-003795/skinshine-cream-30gm_skinshine-cream-30gm--TM-COOM1-003795_1.png?width=320",
    price: "₹1,599",
    priceNumber: 1599,
    description:
      "Tenofovir Alafenamide 25mg tablets used for chronic Hepatitis B management. Helps reduce viral load and supports liver health as prescribed by a specialist.",
  },
  {
    id: 2,
    name: "Zerodol-SP Tablet",
    category: "Pain Relief / Therapeutics",
    image:
      "https://www.practostatic.com/practopedia-images/v3/res-750/betnovaten-20-grm-1-s_ff17cce4-7aeb-4a58-958b-c49925642752.JPG",
    price: "₹120",
    priceNumber: 120,
    description:
      "Combination of Aceclofenac, Paracetamol & Serratiopeptidase for relief from pain, swelling, and inflammation. Use only as prescribed by a doctor.",
  },
  {
    id: 3,
    name: "ChiroRab (Rabies Vaccine, Human I.P.) 1ml",
    category: "Vaccine / Clinical",
    image: "https://cpimg.tistatic.com/10281729/b/4/Mometasone-Tretinoin-Hydroqunione-Cream..jpg",
    price: "₹350",
    priceNumber: 350,
    description:
      "Human rabies vaccine (PCEC) for intramuscular injection. Used for rabies prevention and post-exposure protection as advised by a doctor.",
  },
  {
    id: 4,
    name: "Humalog KwikPen (Insulin Lispro I.P.)",
    category: "Diabetes / Clinical",
    image: "https://images.apollo247.in/pub/media/catalog/product/e/l/elo0033_2.jpg?tr=q-80",
    price: "₹1,799",
    priceNumber: 1799,
    description:
      "Rapid-acting insulin (Insulin Lispro) in a convenient prefilled pen for diabetes management. Helps control blood sugar spikes after meals as prescribed by a doctor.",
  },
  {
    id: 5,
    name: "NovoRapid FlexPen (Insulin Aspart I.P.)",
    category: "Diabetes / Clinical",
    image: "https://cdn01.pharmeasy.in/dam/products/023625/betadine-10-tube-of-15gm-ointment-3-1632924310.jpg",
    price: "₹1,050",
    priceNumber: 1050,
    description:
      "Fast-acting insulin (Insulin Aspart) for effective blood sugar control in diabetes patients. Helps manage post-meal glucose levels quickly and safely.",
  },
  {
    id: 7,
    name: "MED PLUS+ Sterile Powdered Disposable Latex Surgical Gloves",
    category: "Clinical / Surgical",
    image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/gnsem6ircqxmwmjkprkw.jpg",
    price: "₹99",
    priceNumber: 99,
    description:
      "Sterile powdered disposable latex surgical gloves for safe, hygienic medical use. Premium quality with EO sterilization for reliable protection during procedures.",
  },
  {
    id: 8,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "/ozempic-semaglutide-1mg.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
]

export default function MedicineCatalog() {
  const heroItems = useMemo(() => {
    // slider me zyada cards dikhane ke liye repeat
    return [...MEDICINES, ...MEDICINES]
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Header />

      {/* ✅ Top Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
           

           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDICINES.map((m, i) => (
              <ImageOnlyProductCard key={m.id} image={m.image} name={m.name} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      
    </div>
  )
}

/* -----------------------------
   HERO SLIDER ROW
------------------------------ */
function AutoCardRow({
  items,
  direction = "left",
}: {
  items: any[]
  direction?: "left" | "right"
}) {
  return (
    <div className="relative marquee-hover-pause">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <div className="overflow-hidden">
        <div
          className={`flex gap-6 w-max ${
            direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
          }`}
        >
          {items.map((m, idx) => (
            <HeroImageCard key={`${m.id}-${idx}`} image={m.image} name={m.name} index={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* -----------------------------
   HERO IMAGE CARD (premium)
------------------------------ */
function HeroImageCard({ image, name, index }: { image: string; name: string; index: number }) {
  return (
    <div
      className="group relative w-[260px] md:w-[300px] rounded-3xl p-[3px] overflow-hidden
                 bg-gradient-to-br from-emerald-400 via-cyan-500 to-indigo-500
                 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
                 transition-all duration-500
                 hover:shadow-2xl hover:shadow-emerald-400/20"
      style={{ animationDelay: `${0.05 * (index + 1)}s` }}
    >
      <div className="bg-white/95 rounded-3xl p-5">
        <div className="aspect-square rounded-2xl bg-white flex items-center justify-center">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

/* -----------------------------
   GRID PRODUCT CARD (image only)
   - no corner cut
   - full image show
------------------------------ */
function ImageOnlyProductCard({ image, name, index }: { image: string; name: string; index: number }) {
  return (
    <div
      className="group relative rounded-3xl p-[3px] overflow-hidden
                 bg-gradient-to-br from-green-400 via-emerald-500 to-lime-400
                 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
                 transition-all duration-500 animate-reveal opacity-0
                 hover:shadow-2xl hover:shadow-emerald-400/20"
      style={{ animationDelay: `${0.08 * (index + 1)}s` }}
    >
      <div className="bg-white rounded-3xl p-5">
        <div className="aspect-square flex items-center justify-center bg-white">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
