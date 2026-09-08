import { CheckCircle2, ArrowRight, Building2, TreePine, Scale, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Services() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* Header Banner */}
      <div className="bg-emerald-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Layanan Terpadu</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Solusi Hulu ke Hilir<br />Industri Perkayuan</h2>
          <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            PT HARMONI ASIA TBK melayani transaksi skala besar untuk penjualan dan pembelian kayu log dengan standar kualitas dan legalitas tertinggi.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 flex flex-col gap-12 lg:gap-20">
        
        {/* Section 1: Penjualan */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-2">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Penjualan & Suplai<br/>Kayu Log Industri</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Kami menjamin ketersediaan bahan baku kayu log berkualitas (Grade A) untuk pabrik pengolahan, konstruksi, dan kebutuhan ekspor. Kapasitas suplai kami dirancang untuk mendukung operasional bisnis Anda tanpa henti.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <p className="text-gray-800 font-medium">Kontrak Pasokan Jangka Panjang yang Stabil</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <p className="text-gray-800 font-medium">Pengiriman Skala Besar (Truk / Tongkang)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <p className="text-gray-800 font-medium">Kustomisasi Ukuran sesuai Kebutuhan Pabrik</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <p className="text-gray-800 font-medium">Dilengkapi Dokumen V-Legal / SVLK Resmi</p>
              </div>
            </div>
            <div className="pt-6">
              <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md">
                Ajukan PO (Purchase Order) <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=800&q=80" alt="Penjualan Kayu Log" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Garansi Kualitas</p>
                <p className="text-xs text-gray-500">Inspeksi ketat sebelum muat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Pembelian */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-2">
              <TreePine className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Kemitraan Pemasok &<br/>Pembelian Kayu</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Kami membuka peluang kemitraan dengan pemilik hutan rakyat, pemegang konsesi, dan pemasok lokal di seluruh Nusantara. Kami membeli kayu log Anda dengan harga yang kompetitif dan sistem yang transparan.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <p className="text-gray-800 font-medium">Pembayaran Transparan & Tepat Waktu</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <p className="text-gray-800 font-medium">Penilaian Mutu dan Volume Objektif di Lokasi</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <p className="text-gray-800 font-medium">Pendampingan Pengurusan Legalitas Kayu</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <p className="text-gray-800 font-medium">Kemitraan Jangka Panjang Berkelanjutan</p>
              </div>
            </div>
            <div className="pt-6">
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md">
                Tawarkan Kayu Anda <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80" alt="Pembelian Kayu" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Harga Terbaik</p>
                <p className="text-xs text-gray-500">Sesuai standar pasar</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-emerald-900 rounded-3xl p-10 lg:p-16 text-center mt-8 shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1611078813351-14eb023730e1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
           <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Mulai Transaksi Bersama Kami</h3>
              <p className="text-emerald-100/80 mb-8 max-w-xl mx-auto">
                Tim profesional kami siap membantu dan memberikan penawaran terbaik untuk segala kebutuhan bisnis kayu Anda.
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg mx-auto">
                <PhoneCall className="w-5 h-5" />
                Hubungi Divisi Komersial
              </button>
           </div>
        </div>

      </div>
    </div>
  );
}
