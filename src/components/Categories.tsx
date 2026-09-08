import { ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Kayu Meranti', desc: 'Konstruksi, Furniture', img: 'https://images.unsplash.com/photo-1546414603-f30c6a8fb713?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Jati', desc: 'Furniture Premium', img: 'https://images.unsplash.com/photo-1611078813351-14eb023730e1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Bengkirai', desc: 'Decking, Konstruksi', img: 'https://images.unsplash.com/photo-1590054366914-41b3dfbf53b1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Ulin', desc: 'Konstruksi, Outdoor', img: 'https://images.unsplash.com/photo-1591546372589-9b9322c3476e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Mahoni', desc: 'Furniture, Interior', img: 'https://images.unsplash.com/photo-1510252568600-9856fdbba185?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kayu Kamper', desc: 'Furniture, Plywood', img: 'https://images.unsplash.com/photo-1622359419163-547e8fc909a3?auto=format&fit=crop&w=600&q=80' },
];

export default function Categories() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Kategori Kayu Log</h3>
          <p className="text-gray-500 text-sm">Temukan berbagai jenis kayu log sesuai kebutuhan proyek Anda.</p>
        </div>
        <a href="#" className="text-emerald-700 font-semibold flex items-center gap-1 hover:text-emerald-800 transition-colors text-sm whitespace-nowrap">
          Lihat Semua Kategori <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="group cursor-pointer rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
            <div className="h-40 overflow-hidden bg-gray-100">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="p-5 flex justify-between items-center bg-white">
              <div>
                <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-800 transition-colors">{cat.name}</h4>
                <p className="text-xs text-gray-500 mt-1.5 font-medium">{cat.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <ChevronRight className="w-4 h-4 text-emerald-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
