import { Ruler, Target, MessageCircle, Info } from 'lucide-react';

const allProducts = [
  { name: 'Kayu Jati', latin: 'Tectona grandis', diam: '20 - 60 cm', pjg: '2 - 6 m', price: 'Rp 8.500.000', stock: 'Tersedia', img: 'https://images.unsplash.com/photo-1611078813351-14eb023730e1?auto=format&fit=crop&w=600&q=80', desc: 'Sangat awet, tahan rayap, ideal untuk furniture premium.' },
  { name: 'Kayu Meranti', latin: 'Shorea spp.', diam: '15 - 50 cm', pjg: '2 - 6 m', price: 'Rp 6.200.000', stock: 'Ready Stock Besar', img: 'https://images.unsplash.com/photo-1546414603-f30c6a8fb713?auto=format&fit=crop&w=600&q=80', desc: 'Kuat dan mudah dibentuk, pilihan utama untuk konstruksi.' },
  { name: 'Kayu Bengkirai', latin: 'Yellow Balau', diam: '20 - 60 cm', pjg: '2 - 6 m', price: 'Rp 7.800.000', stock: 'Tersedia', img: 'https://images.unsplash.com/photo-1590054366914-41b3dfbf53b1?auto=format&fit=crop&w=600&q=80', desc: 'Sangat keras, cocok untuk decking dan jembatan.' },
  { name: 'Kayu Ulin', latin: 'Eusideroxylon zwageri', diam: '15 - 50 cm', pjg: '2 - 6 m', price: 'Rp 9.500.000', stock: 'Terbatas', img: 'https://images.unsplash.com/photo-1591546372589-9b9322c3476e?auto=format&fit=crop&w=600&q=80', desc: 'Kayu besi tahan air laut, untuk konstruksi berat.' },
  { name: 'Kayu Mahoni', latin: 'Swietenia macrophylla', diam: '15 - 45 cm', pjg: '2 - 6 m', price: 'Rp 5.800.000', stock: 'Tersedia', img: 'https://images.unsplash.com/photo-1510252568600-9856fdbba185?auto=format&fit=crop&w=600&q=80', desc: 'Serat halus kemerahan, elegan untuk interior.' },
  { name: 'Kayu Kamper', latin: 'Dryobalanops spp.', diam: '20 - 50 cm', pjg: '2 - 6 m', price: 'Rp 7.200.000', stock: 'Tersedia', img: 'https://images.unsplash.com/photo-1622359419163-547e8fc909a3?auto=format&fit=crop&w=600&q=80', desc: 'Aroma khas anti serangga, bagus untuk kusen.' },
  { name: 'Kayu Sungkai', latin: 'Peronema canescens', diam: '15 - 40 cm', pjg: '2 - 4 m', price: 'Rp 4.500.000', stock: 'Tersedia', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80', desc: 'Warna cerah kekuningan, populer untuk veneer.' },
  { name: 'Kayu Akasia', latin: 'Acacia mangium', diam: '15 - 35 cm', pjg: '2 - 4 m', price: 'Rp 3.800.000', stock: 'Ready Stock Besar', img: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=600&q=80', desc: 'Cepat tumbuh, cocok untuk industri pulp dan kertas.' },
];

export default function ProductsPage({ onOpenQuote }: { onOpenQuote: () => void }) {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* Header Banner */}
      <div className="bg-emerald-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522079089984-d6219cb8e919?auto=format&fit=crop&w=1600&q=80")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Katalog Kayu Log</h2>
          <p className="text-emerald-100/80 text-lg max-w-2xl">
            Eksplorasi koleksi kayu log kualitas ekspor kami. Spesifikasi lengkap, ketersediaan terjamin, dan harga langsung dari sumbernya.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {allProducts.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col group relative">
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <div className="absolute top-4 left-4 bg-emerald-600/95 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-md z-10 tracking-wide uppercase shadow-sm">
                  {p.stock}
                </div>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 text-xl">{p.name}</h4>
                  <p className="text-sm font-medium text-gray-400 italic mt-0.5">{p.latin}</p>
                </div>

                <div className="mb-5 flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                   <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                   <p className="text-xs text-gray-600 leading-relaxed font-medium">{p.desc}</p>
                </div>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-600 gap-3 pb-3 border-b border-gray-100">
                    <div className="bg-emerald-50 p-1.5 rounded text-emerald-700">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="text-gray-500 font-medium">Diameter</span>
                    <span className="ml-auto font-bold text-gray-900">{p.diam}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 gap-3 pb-3 border-b border-gray-100">
                    <div className="bg-emerald-50 p-1.5 rounded text-emerald-700">
                      <Ruler className="w-4 h-4" />
                    </div>
                    <span className="text-gray-500 font-medium">Panjang</span>
                    <span className="ml-auto font-bold text-gray-900">{p.pjg}</span>
                  </div>
                </div>

                <div className="pt-2 mt-auto">
                  <div className="text-emerald-800 font-bold text-2xl mb-4 tracking-tight">
                    {p.price} <span className="text-sm font-medium text-gray-400 tracking-normal">/ m³</span>
                  </div>
                  <button 
                    onClick={onOpenQuote}
                    className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Pesan / Tanya Harga
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
