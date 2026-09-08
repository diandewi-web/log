import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Trees } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b291a] text-white pt-20 pb-8 border-t-[8px] border-emerald-600">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-900 p-2.5 rounded-lg text-emerald-400 border border-emerald-800">
                <Trees className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-bold text-2xl leading-tight text-white tracking-tight">PT HARMONI ASIA TBK</h2>
                <p className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">Supplier Kayu Log Berkualitas</p>
              </div>
            </div>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Menyediakan kayu log berkualitas terbaik langsung dari sumbernya untuk berbagai kebutuhan konstruksi, furniture, dan industri Anda.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Tautan</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-emerald-100/70 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Beranda</a></li>
              <li><a href="#" className="text-emerald-100/70 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Katalog Produk</a></li>
              <li><a href="#" className="text-emerald-100/70 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Tentang Kami</a></li>
              <li><a href="#" className="text-emerald-100/70 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Layanan</a></li>
              <li><a href="#" className="text-emerald-100/70 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Kontak</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Hubungi Kami</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-emerald-900/30 p-6 rounded-2xl border border-emerald-800/50">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-900/50 p-2.5 rounded-lg border border-emerald-800/50 mt-1">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400/80 mb-1.5 font-medium uppercase tracking-wider">Telepon / WhatsApp</p>
                  <p className="text-base font-bold text-white">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-900/50 p-2.5 rounded-lg border border-emerald-800/50 mt-1">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400/80 mb-1.5 font-medium uppercase tracking-wider">Email</p>
                  <p className="text-base font-bold text-white">info@harmoniasia.co.id</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:col-span-2 pt-4 border-t border-emerald-800/50">
                <div className="bg-emerald-900/50 p-2.5 rounded-lg border border-emerald-800/50 mt-1 shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400/80 mb-1.5 font-medium uppercase tracking-wider">Lokasi / Gudang</p>
                  <p className="text-sm font-medium text-emerald-50 leading-relaxed">Jl. Raya Purwodadi - Blora Km. 10, Grobogan, Jawa Tengah, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-emerald-100/50 font-medium">© 2025 PT HARMONI ASIA TBK. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-emerald-900/50 border border-emerald-800/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-emerald-950 transition-all shadow-sm">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-emerald-900/50 border border-emerald-800/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-emerald-950 transition-all shadow-sm">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-emerald-900/50 border border-emerald-800/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-emerald-950 transition-all shadow-sm">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
