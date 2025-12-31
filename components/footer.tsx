import { Plus, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 pt-24 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">✓</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  MedCatalog
                </span>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-1">Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80 max-w-md">
              Providing safe, reliable, and affordable healthcare solutions since 2025. 
              Your health is our priority. 24/7 customer support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">24/7 Support</p>
                  <p className="font-semibold text-white">1800-123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Us</p>
                  <p className="font-semibold text-white">support@medcatalog.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div>
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {["Online Consultation", "Lab Tests at Home", "Medicine Delivery", "Emergency Care", "Health Checkups", "Corporate Plans"].map((item) => (
                <li key={item} className="group">
                  <a href="#" className="flex items-center gap-2 hover:text-primary transition-all hover:translate-x-1">
                    <div className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-primary"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div>
              Categories
            </h4>
            <ul className="space-y-3 text-sm">
              {["Prescription Drugs", "OTC Medicines", "Ayurvedic Care", "Mother & Baby", "Fitness Supplements", "Medical Devices", "Personal Care", "COVID Essentials"].map((item) => (
                <li key={item} className="group">
                  <a href="#" className="flex items-center gap-2 hover:text-primary transition-all hover:translate-x-1">
                    <div className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-primary"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div>
              Stay Updated
            </h4>
            <p className="text-sm leading-relaxed opacity-80">
              Subscribe to get health tips, offers, and updates.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 px-4 py-1.5 bg-gradient-to-r from-primary to-emerald-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

        {/* Social & Bottom Section */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Social Icons */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook", color: "bg-blue-600 hover:bg-blue-700" },
                  { icon: Twitter, label: "Twitter", color: "bg-sky-500 hover:bg-sky-600" },
                  { icon: Instagram, label: "Instagram", color: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" },
                  { icon: Youtube, label: "YouTube", color: "bg-red-600 hover:bg-red-700" },
                  { icon: Linkedin, label: "LinkedIn", color: "bg-blue-700 hover:bg-blue-800" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className={`${social.color} w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Secure Payments</h4>
              <div className="flex gap-2">
                {["Visa", "MasterCard", "Razorpay", "Paytm", "UPI"].map((method) => (
                  <div key={method} className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-xs font-medium">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <p>© 2025 MedCatalog Healthcare. All rights reserved.</p>
              <span className="hidden md:inline">•</span>
              <p className="flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> in India
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Shipping Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Return Policy
              </a>
            </div>
          </div>

          {/* App Download Badges */}
          <div className="mt-8 flex justify-center gap-4">
            <a href="#" className="px-4 py-2 bg-black/30 rounded-xl border border-slate-700 hover:border-primary transition-colors flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400">Download on the</div>
                <div className="font-bold text-white">App Store</div>
              </div>
            </a>
            <a href="#" className="px-4 py-2 bg-black/30 rounded-xl border border-slate-700 hover:border-primary transition-colors flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xl">▶️</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400">Get it on</div>
                <div className="font-bold text-white">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}