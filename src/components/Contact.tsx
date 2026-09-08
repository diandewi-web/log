import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="bg-emerald-950 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
          <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Tim layanan pelanggan dan divisi komersial kami siap membantu segala pertanyaan dan kebutuhan Anda.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Details */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Silakan kunjungi kantor / gudang kami atau hubungi kami melalui saluran berikut untuk konsultasi harga, ketersediaan stok, dan pengiriman.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="bg-emerald-50 p-3.5 rounded-xl text-emerald-700 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Telepon & WhatsApp</p>
                  <p className="text-xl font-bold text-gray-900">+62 812 3456 7890</p>
                  <p className="text-sm text-gray-500 mt-1">Layanan 24/7 untuk keadaan darurat</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="bg-emerald-50 p-3.5 rounded-xl text-emerald-700 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email Perusahaan</p>
                  <p className="text-xl font-bold text-gray-900">info@harmoniasia.co.id</p>
                  <p className="text-sm text-gray-500 mt-1">Kami membalas dalam waktu 1x24 jam</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="bg-emerald-50 p-3.5 rounded-xl text-emerald-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Alamat Kantor & Gudang</p>
                  <p className="text-lg font-bold text-gray-900 mb-1">PT HARMONI ASIA TBK</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Jl. Raya Purwodadi - Blora Km. 10,<br/>
                    Kawasan Industri Kayu Terpadu,<br/>
                    Grobogan, Jawa Tengah, Indonesia 58111
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-100/50 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h3>
              <p className="text-gray-500 text-sm mb-8">Isi formulir di bawah ini dan perwakilan kami akan segera menghubungi Anda.</p>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Pesan Anda berhasil dikirim!'); }}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                  <input required type="text" placeholder="Masukkan nama Anda" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email atau No. WhatsApp</label>
                  <input required type="text" placeholder="Untuk membalas pesan Anda" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subjek</label>
                  <select required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm appearance-none">
                    <option value="">Pilih Subjek Pembicaraan</option>
                    <option value="pembelian">Permintaan Penawaran (Beli)</option>
                    <option value="penjualan">Penawaran Kayu (Jual)</option>
                    <option value="kemitraan">Kerjasama / Kemitraan</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Pesan Anda</label>
                  <textarea required rows={4} placeholder="Tuliskan pesan atau pertanyaan Anda di sini..." className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md">
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
