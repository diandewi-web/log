import { Search, User, Trees } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onOpenQuote: () => void;
}

export default function Navbar({ activeView, onViewChange, onOpenQuote }: NavbarProps) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-emerald-900 bg-emerald-50 p-2 rounded-lg">
              <Trees className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="font-bold text-xl text-emerald-900 leading-tight tracking-tight">PT HARMONI ASIA TBK</h1>
              <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Supplier Kayu Log Berkualitas</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onViewChange('beranda')}
              className={`${activeView === 'beranda' ? 'text-emerald-800 font-bold border-emerald-800' : 'text-gray-600 hover:text-emerald-800 font-medium border-transparent'} border-b-2 pb-1 transition-colors`}
            >
              Beranda
            </button>
            <button 
              onClick={() => onViewChange('produk')}
              className={`${activeView === 'produk' ? 'text-emerald-800 font-bold border-emerald-800' : 'text-gray-600 hover:text-emerald-800 font-medium border-transparent'} border-b-2 pb-1 transition-colors`}
            >
              Produk
            </button>
            <button 
              onClick={() => onViewChange('tentang')}
              className={`${activeView === 'tentang' ? 'text-emerald-800 font-bold border-emerald-800' : 'text-gray-600 hover:text-emerald-800 font-medium border-transparent'} border-b-2 pb-1 transition-colors`}
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => onViewChange('layanan')}
              className={`${activeView === 'layanan' ? 'text-emerald-800 font-bold border-emerald-800' : 'text-gray-600 hover:text-emerald-800 font-medium border-transparent'} border-b-2 pb-1 transition-colors`}
            >
              Layanan
            </button>
            <button 
              onClick={() => onViewChange('kontak')}
              className={`${activeView === 'kontak' ? 'text-emerald-800 font-bold border-emerald-800' : 'text-gray-600 hover:text-emerald-800 font-medium border-transparent'} border-b-2 pb-1 transition-colors`}
            >
              Kontak
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Cari jenis kayu, ukuran, atau lokasi..."
                className="pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm w-72 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
              <Search className="absolute right-3.5 top-3 w-4 h-4 text-gray-400" />
            </div>
            <button className="p-2.5 text-gray-600 hover:bg-gray-100 hover:text-emerald-800 rounded-full transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={onOpenQuote}
              className="bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all shadow-sm hover:shadow"
            >
              Ajukan Penawaran
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
