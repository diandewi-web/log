import { ShieldCheck, Award, Package, Truck, Users, MessageCircle, Leaf, Handshake } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-28">
      {/* Mengapa Memilih Kami */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-start gap-3 leading-tight">
          <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
            <Leaf className="text-emerald-700 w-6 h-6" />
          </div>
          Mengapa Memilih Kami?<br/><span className="text-emerald-700">untuk Masa Depan</span>
        </h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 shadow-sm border border-emerald-900">
              <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-sm text-emerald-950">Kayu Legal & Bersertifikat</h4>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Dilengkapi dokumen SVLK dan asal usul kayu yang jelas.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 shadow-sm border border-emerald-900">
              <Award className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-sm text-emerald-950">Kualitas Grade A</h4>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Hanya kayu pilihan dengan kualitas terbaik.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 shadow-sm border border-emerald-900">
              <Package className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-sm text-emerald-950">Stok Lengkap</h4>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Berbagai jenis kayu tersedia dalam jumlah besar.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 shadow-sm border border-emerald-900">
              <Truck className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-sm text-emerald-950">Pengiriman Tepat Waktu</h4>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Ke seluruh Indonesia dan luar negeri.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 shadow-sm border border-emerald-900">
              <Users className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-sm text-emerald-950">Tim Profesional</h4>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Siap membantu kebutuhan kayu Anda.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner WA */}
      <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-800">
            <Handshake className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-gray-900 text-lg">Butuh penawaran khusus?</h4>
        </div>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">Hubungi tim kami untuk mendapatkan harga terbaik sesuai kebutuhan proyek Anda.</p>
        <button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-colors shadow-md">
          <MessageCircle className="w-5 h-5" />
          Hubungi Kami via WhatsApp
        </button>
      </div>

      {/* Footer Card */}
      <div className="relative rounded-2xl overflow-hidden bg-emerald-950 text-center p-8 h-[280px] flex flex-col justify-center shadow-lg">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
        <div className="relative z-10 mt-auto">
          <h4 className="text-white font-bold text-xl mb-8 leading-snug tracking-wide">Bersama menjaga hutan,<br/>untuk generasi mendatang.</h4>
          <div className="flex justify-center gap-8 text-white">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-7 h-7 mb-3 text-emerald-400" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-widest font-semibold">Legal</span>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-7 h-7 mb-3 text-emerald-400" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-widest font-semibold">Lestari</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-7 h-7 mb-3 text-emerald-400" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-widest font-semibold">Berkelanjutan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
