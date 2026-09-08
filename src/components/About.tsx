import { ShieldCheck, Leaf, Globe, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* Header Banner */}
      <div className="bg-emerald-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80")' }}></div>
        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tentang Kami</h2>
          <p className="text-emerald-100/90 text-xl leading-relaxed">
            Membangun infrastruktur masa depan melalui penyediaan kayu log berkualitas, legal, dan dikelola secara berkelanjutan.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Intro */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">Profil Singkat<br/><span className="text-emerald-700">PT HARMONI ASIA TBK</span></h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Didirikan dengan komitmen teguh terhadap kualitas dan pelestarian lingkungan, PT HARMONI ASIA TBK telah menjadi pelopor dalam rantai pasok kayu log nasional dan internasional. Kami menjembatani hasil kekayaan alam Nusantara ke berbagai industri strategis, dari konstruksi berat hingga furnitur premium kelas dunia.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Seluruh operasi kami dilandasi oleh kepatuhan penuh terhadap standar Sistem Verifikasi Legalitas Kayu (SVLK), memastikan setiap batang kayu yang Anda terima memiliki asal-usul yang jelas dan tersertifikasi.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] transform -rotate-3 z-0"></div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img src="https://images.unsplash.com/photo-1611078813351-14eb023730e1?auto=format&fit=crop&w=800&q=80" alt="Kayu Nusantara" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Vision Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-emerald-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Globe className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 <ShieldCheck className="w-8 h-8 text-emerald-400" /> Visi Kami
              </h4>
              <p className="text-emerald-100 text-lg leading-relaxed">
                Menjadi perusahaan supplier kayu log terdepan di Asia Tenggara yang mengedepankan kualitas premium, inovasi rantai pasok, dan kelestarian ekosistem hutan secara berkelanjutan.
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <TrendingUp className="w-32 h-32 text-gray-900" />
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                 <TrendingUp className="w-8 h-8 text-emerald-700" /> Misi Kami
              </h4>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                  Menyediakan kayu bermutu tinggi dengan harga kompetitif.
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                  Mendukung legalitas dan transparansi asal usul kayu (SVLK).
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                  Memberdayakan petani hutan rakyat dan perekonomian lokal.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-4xl font-bold text-emerald-800 mb-2">15+</p>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">Tahun Pengalaman</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-4xl font-bold text-emerald-800 mb-2">50k</p>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">m³ Volume Terjual</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-4xl font-bold text-emerald-800 mb-2">200+</p>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">Klien Industri</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-4xl font-bold text-emerald-800 mb-2">100%</p>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">Kayu Tersertifikasi</p>
          </div>
        </div>

      </div>
    </div>
  );
}
