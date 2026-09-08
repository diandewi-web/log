import { Search, ShieldCheck, Award, Truck, BadgeDollarSign, Leaf, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-emerald-950 min-h-[520px] flex flex-col justify-between p-8 md:p-12 shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-50 mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522079089984-d6219cb8e919?auto=format&fit=crop&w=1600&q=80")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mt-4">
        <p className="text-emerald-300 font-semibold tracking-widest text-xs mb-4 uppercase">Supplier Kayu Log Terpercaya</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
          Kayu Berkualitas <br />
          <span className="text-emerald-400">untuk Masa Depan yang Lebih Baik</span>
        </h2>
        <p className="text-gray-200 text-lg mb-10 max-w-xl leading-relaxed">
          Kami menyediakan berbagai jenis kayu log pilihan untuk kebutuhan industri, konstruksi, furniture, dan ekspor. Dengan kualitas terjamin, pengiriman tepat waktu, dan harga kompetitif.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mb-12 bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Cari jenis kayu, diameter, panjang, atau lokasi pengiriman..."
              className="w-full pl-5 pr-4 py-3.5 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner font-medium placeholder:font-normal placeholder:text-gray-400"
            />
          </div>
          <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-md">
            <Search className="w-5 h-5" />
            Cari
          </button>
        </div>
      </div>

      {/* Features Bottom */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20 mt-4">
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-emerald-400 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-white font-bold text-sm">Kayu Legal</p>
            <p className="text-gray-300 text-xs mt-0.5">& Tersertifikasi</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Award className="w-10 h-10 text-emerald-400 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-white font-bold text-sm">Kualitas Terjamin</p>
            <p className="text-gray-300 text-xs mt-0.5">Grade A</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Truck className="w-10 h-10 text-emerald-400 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-white font-bold text-sm">Pengiriman Cepat</p>
            <p className="text-gray-300 text-xs mt-0.5">Seluruh Indonesia</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BadgeDollarSign className="w-10 h-10 text-emerald-400 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-white font-bold text-sm">Harga Kompetitif</p>
            <p className="text-gray-300 text-xs mt-0.5">Langsung dari Sumber</p>
          </div>
        </div>
      </div>

      {/* Overlapping Card */}
      <div className="absolute right-8 bottom-8 bg-white rounded-xl p-5 shadow-2xl hidden xl:flex items-start gap-4 max-w-sm animate-in slide-in-from-right duration-700 border border-gray-100">
        <div className="bg-emerald-50 p-3 rounded-lg text-emerald-700 shrink-0">
          <Leaf className="w-7 h-7" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-1.5 text-sm leading-tight">Kayu dari Hutan Lestari untuk Masa Depan</h4>
          <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">Kami berkomitmen menyediakan kayu yang berasal dari sumber legal dan dikelola secara berkelanjutan.</p>
          <a href="#" className="text-emerald-700 text-xs font-bold flex items-center gap-1 hover:text-emerald-800 transition-colors">
            Pelajari lebih lanjut <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
