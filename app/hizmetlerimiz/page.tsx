import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] bg-white flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-light mb-6 text-[#9B1B30]">Çalışma Alanlarımız</h1>
            <p className="text-xl font-light text-gray-600">
              Aksan, küresel gelişmeler doğrultusunda gelişen departmanlardan oluşan özel bölümlere ev sahipliği yapmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Şirketler Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">Şirketler Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Şirket kuruluşları, birleşme ve devralmalar, ortaklık yapılandırmaları ve kurumsal yönetim konularında danışmanlık.
              </p>
              <a href="/services/corporate-law" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Fikri Mülkiyet Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">Fikri Mülkiyet Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Patent, marka, tasarım hakları, telif hakları ve lisanslama konularında hukuki danışmanlık.
              </p>
              <a href="/services/intellectual-property" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* İş Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">İş Hukuku</h3>
              <p className="text-gray-600 mb-6">
                İş sözleşmeleri, toplu iş hukuku, iş uyuşmazlıkları ve sosyal güvenlik konularında danışmanlık.
              </p>
              <a href="/services/labor-law" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Vergi Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">Vergi Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Vergi planlaması, vergi uyuşmazlıkları ve uluslararası vergi hukuku konularında danışmanlık.
              </p>
              <a href="/services/tax-law" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Gayrimenkul Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">Gayrimenkul Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Gayrimenkul alım-satımı, kira hukuku, imar hukuku ve gayrimenkul projeleri konularında danışmanlık.
              </p>
              <a href="/services/real-estate-law" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Enerji Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">Enerji Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Enerji projeleri, lisanslama, düzenleyici işlemler ve enerji sözleşmeleri konularında danışmanlık.
              </p>
              <a href="/services/energy-law" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Rekabet Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">Rekabet Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Rekabet uyum programları, birleşme devralma işlemleri ve rekabet soruşturmaları konularında danışmanlık.
              </p>
              <a href="/services/competition-law" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Bankacılık ve Finans Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">Bankacılık ve Finans Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Finansal işlemler, krediler, sermaye piyasası işlemleri ve finansal regülasyon konularında danışmanlık.
              </p>
              <a href="/services/banking-finance-law" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Teknoloji Hukuku */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-light text-[#9B1B30] mb-4">Teknoloji Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Bilişim hukuku, veri koruma, e-ticaret ve teknoloji sözleşmeleri konularında danışmanlık.
              </p>
              <a href="/services/technology-law" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8 text-gray-900">
              Hukuki Danışmanlık İçin Bize Ulaşın
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12">
              Deneyimli ekibimiz ile size en uygun hukuki çözümleri sunmak için hazırız.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#9B1B30] text-white px-8 py-4 text-lg font-light hover:bg-[#7d1626] transition-colors"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
} 