import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HakkimizdaPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-gray-900">İletişime Geçin</h2>
            <p className="text-gray-600">
              Hukuki ihtiyaçlarınız için bizimle iletişime geçin. Size en uygun çözümü sunalım.
            </p>
            <div className="space-y-4">
              {/* Adres */}
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-gray-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-light text-gray-900">Adres</h3>
                  <p className="text-gray-600">İstanbul, Türkiye</p>
                </div>
              </div>

              {/* E-posta */}
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-gray-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-light text-gray-900">E-posta</h3>
                  <p className="text-gray-600">info@aksan.av.tr</p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-gray-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="text-lg font-light text-gray-900">Telefon</h3>
                  <p className="text-gray-600">+90 (212) XXX XX XX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-100 p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-900 mb-2">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none text-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-900 mb-2">E-posta</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none text-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-900 mb-2">Mesajınız</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none text-black"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
