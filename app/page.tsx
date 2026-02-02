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
    image: "https://www.practostatic.com/practopedia-images/v3/res-750/clop-g-cream-30gm_7cf21bf7-845e-4d64-8d5e-ed14e9d8de19.JPG",
    price: "₹99",
    priceNumber: 99,
    description:
      "Sterile powdered disposable latex surgical gloves for safe, hygienic medical use. Premium quality with EO sterilization for reliable protection during procedures.",
  },
  {
    id: 8,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://ayushcare.in/cdn/shop/files/ZanduBalm25ml.png?crop=center&height=922&v=1683113125&width=922",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 9,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/10/461162064/EP/FV/XG/85825727/panderm-plus-cream-500x500.jpeg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 10,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://www.practostatic.com/practopedia-images/v3/res-750/betnovate-c-30grm-cream-1-s_40f8cc80-fc89-4f82-90a2-5448fe3ee1db.JPG",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 11,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://images.apollo247.in/pub/media/catalog/product/a/n/ano0003.png",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 12,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/ANDROID/Default/2025/6/522111831/PC/MI/NQ/197261491/product-jpeg-1000x1000.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  ,
  {
    id: 13,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://www.bing.com/th/id/OIP.uo9SvjF0oCyo3uMJns4l3QHaDi?w=359&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },,
  {
    id: 14,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://www.bing.com/th/id/OIP.aTAQW2sE08Wde96EBbZoOgHaEo?w=229&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },,
  {
    id: 15,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse1.mm.bing.net/th/id/OIP.BBkdd0rX-EMuPxMh_qD4uwHaHa?pid=ImgDet&w=187&h=187&c=7",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },,
  {
    id: 16,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://www.bing.com/th/id/OIP.XtCsnBPa9JBhFGdyil9MPQHaGV?w=214&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },,
  {
    id: 17,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/407801097/RC/YV/RU/13501949/furosemide-20mg-spironolactone-50mg-tablets-1000x1000.jpeg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 18,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/1/AV/FS/MP/13166357/frusemde-ip-20mg-spironolactone-ip-50mg--1000x1000.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 19,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://alleviareindia.com/wp-content/uploads/elementor/thumbs/evrysdi-qd79yu1mhqvj81z21wpnct3yk5svfcpw6zxtue1y14.webp",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },,
  {
    id: 20,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/10/551583915/XE/BP/CX/201394365/iressa-gefitinib-tablet-250-mgjpg-1000x1000.jpeg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },,
  {
    id: 21,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByTQ59EcvFFziNtmQAl_Xn3xaXBORhrI_uiCk5WMsBVilkBsZb5rENbQ&s",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },,
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://apollosage.in/assets/upload/blog/zerodol-sp-tablet_1758880022.webp",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },,
  {
    id: 23,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438070405/II/LV/QT/86228023/tagrisso-osimertinib-80-mg-tablets-1000x1000.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 24,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://cdn01.pharmeasy.in/dam/products/024365/bevac-vial-of-1ml-vaccine-3-1739969263.jpg?dim=480x480&q=75",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/5/418881443/FK/KY/WS/133082746/kamagra-fx-oral-jelly-500x500.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://th.bing.com/th/id/R.f819385736704d0e5650a4867661ca64?rik=g8ZKgxAO3tiQ3A&riu=http%3a%2f%2fegyptiandrugstore.com%2fimage%2fcache%2fdata%2fmanar%2fnovoseven-400x400.png&ehk=alPpd0bbohYAnM1%2b6Yl5mLvEucxPIZwYZxUCI2YrLH0%3d&risl=&pid=ImgRaw&r=0",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/408657614/QN/XB/WR/10526113/faslodex-injection-500x500.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse1.mm.bing.net/th/id/OIP.T5Bz7GBkQ21_YobF5ppfSgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=187&c=7&dpr=1.3&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse3.mm.bing.net/th/id/OIP.Wnp7ihzSG2dnQax_5096MgHaHW?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://th.bing.com/th/id/OIP.ChVAJ5AZJ43pOAB9eZxkRAHaHa?w=177&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse1.mm.bing.net/th/id/OIP.M9VrUcTdJAqftaplawJ_5gAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=153&c=7&dpr=1.3&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse3.mm.bing.net/th/id/OIP.WYnZdRBtC4zghv0QW_fqBgHaFz?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=146&c=7&dpr=1.3&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  {
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse1.mm.bing.net/th/id/OIP.BBkdd0rX-EMuPxMh_qD4uwHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=187&c=7&dpr=1.3&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  } ,{
    id: 23,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/LX/AD/RL/67230705/zoladex-injection-goserelin-acetate-500x500.jpeg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },
  ,{
    id: 24,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse3.mm.bing.net/th/id/OIP.pFY0DGfsUKebw6heSiq7WwAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=187&h=143&c=7&dpr=1.3&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 25,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse4.mm.bing.net/th/id/OIP.FwPIPC_T21l5ubSSsigZJQHaGt?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=166&c=7&dpr=1.3&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 26,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse4.mm.bing.net/th/id/OIP.40ypQWZ0psmjipxgoYKTRwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 27,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/CZ/HP/OA/13087301/cefoperazone-1000mg-sulbactam-500mg-1000x1000.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 28,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse2.mm.bing.net/th/id/OIP.V13WGvVyiqUlWFOHESWxMAAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/4/303127563/WO/AI/OG/182944038/paracetamol-1000mg-intravenous-infusion-500x500.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse3.mm.bing.net/th/id/OIP.RVUws3MDk9ttNlZMLfNC2gHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://gdmedz.net/wp-content/uploads/2018/12/velasof-28tablets_hetero_sofosbuvir-400mg-velpatasvir-100mg.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://tse1.mm.bing.net/th/id/OIP.l8r-if_XRnBT1nB-GnkquQHaH_?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://www.drugs.com/pro/images/16da660b-9981-4d24-a14a-94c7744fce4f/combivir-spl-graphic-03.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://nowkamagra.com/wp-content/uploads/2023/10/Kamagra-100mg.webp",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/5/CX/ZL/CW/55019577/bevac-hepatitis-b-vaccine-ip-1000x1000.jpg",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://www.bing.com/th/id/OIP.Ak6fJtFCRG2WAmwT7HNoZAHaLT?w=160&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  },{
    id: 22,
    name: "Ozempic (Semaglutide Injection) 1mg",
    category: "Diabetes / Clinical",
    image: "https://www.bing.com/th/id/OIP.a1QrcvNG7g2h_bNC_Nj-hAHaHa?w=211&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    price: "₹9,999",
    priceNumber: 9999,
    description:
      "Once-weekly semaglutide injection in prefilled pen for diabetes management. Helps improve blood sugar control and supports weight management as prescribed by a doctor.",
  }
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
              //@ts-ignore
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
