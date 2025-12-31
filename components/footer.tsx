import { Plus } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Plus className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">MedCatalog</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Providing safe, reliable, and affordable healthcare solutions since 2025. Your health is our priority.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Practice</h4>
              <ul className="space-y-3 text-sm">
                {["All Services", "The Team", "Case Studies", "Contact"].map((u) => (
                  <li key={u}>
                    <a href="#" className="hover:text-primary transition-colors">
                      {u}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Journal</h4>
              <ul className="space-y-3 text-sm">
                {["Research", "FAQ", "Logistics", "Privacy"].map((u) => (
                  <li key={u}>
                    <a href="#" className="hover:text-primary transition-colors">
                      {u}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Categories</h4>
            <ul className="space-y-3 text-sm">
              {["Therapeutics", "Vitality", "Clinical Essentials", "Digestive Health"].map((u) => (
                <li key={u}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {u}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Contact Support", "Privacy Policy", "Terms of Service"].map((u) => (
                <li key={u}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {u}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact Us</h4>
            <p className="text-sm leading-relaxed opacity-80">
              124 Healthcare Boulevard <br />
              Mumbai, MH 400001 <br />
              support@medcatalog.com
            </p>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium opacity-60">
          <p>© 2025 MedCatalog Healthcare. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
