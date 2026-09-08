import { ChevronRight, Ruler, Target, MessageCircle } from 'lucide-react';

const products = [
  { name: 'Kayu Jati', latin: 'Tectona grandis', diam: '20 - 60 cm', pjg: '2 - 6 m', price: 'Rp 8.500.000', img: 'https://images.unsplash.com/photo-1611078813351-14eb023730e1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Meranti', latin: 'Shorea spp.', diam: '15 - 50 cm', pjg: '2 - 6 m', price: 'Rp 6.200.000', img: 'https://images.unsplash.com/photo-1546414603-f30c6a8fb713?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Bengkirai', latin: 'Yellow Balau', diam: '20 - 60 cm', pjg: '2 - 6 m', price: 'Rp 7.800.000', img: 'https://images.unsplash.com/photo-1590054366914-41b3dfbf53b1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Ulin', latin: 'Eusideroxylon zwageri', diam: '15 - 50 cm', pjg: '2 - 6 m', price: 'Rp 9.500.000', img: 'https://images.unsplash.com/photo-1591546372589-9b9322c3476e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Mahoni', latin: 'Swietenia macrophylla', diam: '15 - 45 cm', pjg: '2 - 6 m', price: 'Rp 5.800.000', img: 'https://images.unsplash.com/photo-1510252568600-9856fdbba185?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Kamper', latin: 'Dryobalanops spp.', diam: '20 - 50 cm', pjg: '2 - 6 m', price: 'Rp 7.200.000', img: 'https://images.unsplash.com/photo-1622359419163-547e8fc909a3?auto=format&fit=crop&w=600&q=80' },
];

export default function Products() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Produk Unggulan</h3>
          <p className="text-gray-500 text-sm">Pilihan kayu log terbaik dengan kualitas terjamin.</p>
        </div>
        <a href="#" className="text-emerald-700 font-semibold flex items-center gap-1 hover:text-emerald-800 transition-colors text-sm whitespace-nowrap">
          Lihat Semua Produk <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col group">
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <div className="absolute top-4 left-4 bg-emerald-600/95 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-md z-10 tracking-wide uppercase shadow-sm">
                Ready Stock
              </div>
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-5">
                <h4 className="font-bold text-gray-900 text-xl">{p.name}</h4>
                <p className="text-sm font-medium text-gray-400 italic mt-0.5">{p.latin}</p>
              </div>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center text-sm text-gray-600 gap-3 pb-3 border-b border-gray-50">
                  <div className="bg-gray-50 p-1.5 rounded">
                    <Target className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="text-gray-500 font-medium">Diameter</span>
                  <span className="ml-auto font-bold text-gray-900">{p.diam}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-3">
                  <div className="bg-gray-50 p-1.5 rounded">
                    <Ruler className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="text-gray-500 font-medium">Panjang</span>
                  <span className="ml-auto font-bold text-gray-900">{p.pjg}</span>
                </div>
              </div>

              <div className="pt-5 border-t border-gray-100 mt-auto">
                <div className="text-emerald-800 font-bold text-2xl mb-4 tracking-tight">
                  {p.price} <span className="text-sm font-medium text-gray-400 tracking-normal">/ m³</span>
                </div>
                <button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-md hover:shadow-lg">
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
