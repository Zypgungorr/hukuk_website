import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-100">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-6">
          <h1 className="text-white text-5xl font-light mb-6 max-w-2xl">
            Hukuki çözüm ortağınız
          </h1>
          <p className="text-white text-xl font-light mb-8 max-w-xl">
            Ulusal ve uluslararası hukuk alanında geniş tecrübe
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors">
            Daha Fazla Bilgi
          </button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Hizmetlerimiz */}
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900">Hizmetlerimiz</h2>
              <p className="text-gray-600">
                Şirketler hukuku, fikri mülkiyet, iş hukuku ve daha fazlası için kapsamlı hukuki danışmanlık hizmetleri sunuyoruz.
              </p>
              <a href="/hizmetlerimiz" className="text-gray-900 hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Ekibimiz */}
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900">Ekibimiz</h2>
              <p className="text-gray-600">
                Deneyimli hukuk ekibimiz ile ulusal ve uluslararası hukuk alanında çözümler üretiyoruz.
              </p>
              <a href="/ekibimiz" className="text-gray-900 hover:underline inline-block">
                Ekibimizi Tanıyın →
              </a>
            </div>

            {/* Uluslararası Masalar */}
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900">Uluslararası Masalar</h2>
              <p className="text-gray-600">
                Global iş dünyasının ihtiyaçlarına yönelik uluslararası hukuk masalarımız ile hizmet veriyoruz.
              </p>
              <a href="/uluslararasi-masalar" className="text-gray-900 hover:underline inline-block">
                Masalarımız →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Son Haberler ve Makaleler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 space-y-4">
                <span className="text-sm text-gray-500">21 Mayıs 2025</span>
                <h3 className="text-xl font-light text-gray-900">Güncel Hukuki Gelişmeler</h3>
                <p className="text-gray-600">
                  Hukuk dünyasındaki son gelişmeler ve güncel yasal düzenlemeler hakkında bilgiler.
                </p>
                <a href="/haberler-ve-makaleler" className="text-gray-900 hover:underline inline-block">
                  Devamını Oku →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Uzmanlık Alanlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Şirketler Hukuku",
              "Fikri Mülkiyet Hukuku",
              "İş Hukuku",
              "Vergi Hukuku",
              "Gayrimenkul Hukuku",
              "Enerji Hukuku",
              "Rekabet Hukuku",
              "Bankacılık ve Finans Hukuku"
            ].map((area, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4 py-2 hover:border-gray-900 transition-colors">
                <h3 className="text-lg font-light text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900">Global Ağımız</h2>
              <p className="text-gray-600">
                Dünya çapında güvenilir iş ortaklarımız ve geniş ağımız ile müvekkillerimize uluslararası hukuk alanında kapsamlı hizmetler sunuyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-2">
                  <span className="text-3xl font-light text-gray-900">25+</span>
                  <p className="text-sm text-gray-600">Ülke</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl font-light text-gray-900">100+</span>
                  <p className="text-sm text-gray-600">İş Ortağı</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl font-light text-gray-900">1000+</span>
                  <p className="text-sm text-gray-600">Başarılı Proje</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl font-light text-gray-900">50+</span>
                  <p className="text-sm text-gray-600">Uzman Avukat</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] bg-gray-200">
              {/* Placeholder for world map or office image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Dünya Haritası Görseli
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900">İletişime Geçin</h2>
              <p className="text-gray-600">
                Hukuki ihtiyaçlarınız için bizimle iletişime geçin. Size en uygun çözümü sunalım.
              </p>
              <div className="space-y-4">
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
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-gray-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-light text-gray-900">E-posta</h3>
                    <p className="text-gray-600">info@aksan.av.tr</p>
                  </div>
                </div>
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
            <div className="bg-gray-100 p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-900 mb-2">Ad Soyad</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-900 mb-2">E-posta</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-900 mb-2">Mesajınız</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-light mb-4">AKSAN</h3>
              <p className="text-gray-400 text-sm">
                1990'dan beri hukuk alanında öncü ve yenilikçi çözümler sunuyoruz.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Hızlı Erişim</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a></li>
                <li><a href="/hizmetlerimiz" className="hover:text-white">Hizmetlerimiz</a></li>
                <li><a href="/ekibimiz" className="hover:text-white">Ekibimiz</a></li>
                <li><a href="/kariyer" className="hover:text-white">Kariyer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Hizmetler</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/sirketler-hukuku" className="hover:text-white">Şirketler Hukuku</a></li>
                <li><a href="/is-hukuku" className="hover:text-white">İş Hukuku</a></li>
                <li><a href="/vergi-hukuku" className="hover:text-white">Vergi Hukuku</a></li>
                <li><a href="/fikri-mulkiyet" className="hover:text-white">Fikri Mülkiyet</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>İstanbul, Türkiye</li>
                <li>+90 (212) XXX XX XX</li>
                <li>info@aksan.av.tr</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 AKSAN. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
