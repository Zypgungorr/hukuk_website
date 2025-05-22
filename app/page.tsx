import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gray-100">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-white max-w-2xl">
            Hukuki çözüm ortağınız
          </h1>
          <p className="text-lg md:text-xl font-light mb-6 md:mb-8 text-white max-w-xl">
            Ulusal ve uluslararası hukuk alanında geniş tecrübe
          </p>
          <button className="bg-white text-gray-900 px-6 sm:px-8 py-2 sm:py-3 hover:bg-gray-100 transition-colors">
            Daha Fazla Bilgi
          </button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Hizmetlerimiz */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light text-gray-900">Hizmetlerimiz</h2>
              <p className="text-gray-600">
                Şirketler hukuku, fikri mülkiyet, iş hukuku ve daha fazlası için kapsamlı hukuki danışmanlık hizmetleri sunuyoruz.
              </p>
              <Link href="/hizmetlerimiz" className="text-gray-900 hover:underline inline-block">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Ekibimiz */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light text-gray-900">Ekibimiz</h2>
              <p className="text-gray-600">
                Deneyimli hukuk ekibimiz ile ulusal ve uluslararası hukuk alanında çözümler üretiyoruz.
              </p>
              <Link href="/ekibimiz" className="text-gray-900 hover:underline inline-block">
                Ekibimizi Tanıyın →
              </Link>
            </div>

            {/* Uluslararası Masalar */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light text-gray-900">Uluslararası Masalar</h2>
              <p className="text-gray-600">
                Global iş dünyasının ihtiyaçlarına yönelik uluslararası hukuk masalarımız ile hizmet veriyoruz.
              </p>
              <Link href="/uluslararasi-masalar" className="text-gray-900 hover:underline inline-block">
                Masalarımız →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12">Son Haberler ve Makaleler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 space-y-4">
                <span className="text-sm text-gray-500">21 Mayıs 2025</span>
                <h3 className="text-lg md:text-xl font-light text-gray-900">Güncel Hukuki Gelişmeler</h3>
                <p className="text-gray-600">
                  Hukuk dünyasındaki son gelişmeler ve güncel yasal düzenlemeler hakkında bilgiler.
                </p>
                <Link href="/haberlerVeMakaleler" className="text-gray-900 hover:underline inline-block">
                  Devamını Oku →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12">Uzmanlık Alanlarımız</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
                <h3 className="text-base md:text-lg font-light text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900">Global Ağımız</h2>
              <p className="text-gray-600">
                Dünya çapında güvenilir iş ortaklarımız ve geniş ağımız ile müvekkillerimize uluslararası hukuk alanında kapsamlı hizmetler sunuyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-2">
                  <span className="text-2xl md:text-3xl font-light text-gray-900">25+</span>
                  <p className="text-sm text-gray-600">Ülke</p>
                </div>
                <div className="space-y-2">
                  <span className="text-2xl md:text-3xl font-light text-gray-900">100+</span>
                  <p className="text-sm text-gray-600">İş Ortağı</p>
                </div>
                <div className="space-y-2">
                  <span className="text-2xl md:text-3xl font-light text-gray-900">1000+</span>
                  <p className="text-sm text-gray-600">Başarılı Proje</p>
                </div>
                <div className="space-y-2">
                  <span className="text-2xl md:text-3xl font-light text-gray-900">50+</span>
                  <p className="text-sm text-gray-600">Uzman Avukat</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] bg-gray-200">
              {/* Placeholder for world map or office image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Dünya Haritası Görseli
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
