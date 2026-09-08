import { X, Send, Leaf } from 'lucide-react';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotationModal({ isOpen, onClose }: QuotationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Panel */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-emerald-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-lg text-white">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Form Pemesanan / Penawaran</h2>
              <p className="text-xs text-emerald-700 font-medium mt-0.5">PT HARMONI ASIA TBK</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Pesanan berhasil dikirim!'); onClose(); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                <input required type="text" placeholder="Masukkan nama Anda" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">No. WhatsApp</label>
                <input required type="tel" placeholder="Contoh: 08123456789" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Jenis Kayu</label>
                <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm appearance-none">
                  <option value="">Pilih Jenis Kayu</option>
                  <option value="meranti">Kayu Meranti</option>
                  <option value="jati">Kayu Jati</option>
                  <option value="bengkirai">Kayu Bengkirai</option>
                  <option value="ulin">Kayu Ulin</option>
                  <option value="mahoni">Kayu Mahoni</option>
                  <option value="kamper">Kayu Kamper</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Jumlah / Volume (m³)</label>
                <input required type="number" min="1" placeholder="Contoh: 50" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Lokasi Pengiriman</label>
              <input required type="text" placeholder="Masukkan alamat lengkap pengiriman" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Catatan Tambahan (Opsional)</label>
              <textarea rows={3} placeholder="Spesifikasi khusus atau permintaan lainnya..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm resize-none"></textarea>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button 
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-xl transition-colors text-sm"
              >
                Batal
              </button>
              <button 
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md shadow-emerald-200 text-sm"
              >
                <Send className="w-4 h-4" />
                Kirim Pesanan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
