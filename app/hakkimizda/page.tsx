import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

            {/* Hero Section */}
            <section className="relative h-[100vh] bg-white flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-light mb-6 text-[#9B1B30]">Gelecek, bizimle.</h1>
            <p className="text-xl font-light text-gray-600">
              Aksan, küresel gelişmeler doğrultusunda gelişen departmanlardan oluşan özel bölümlere ev sahipliği yapmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Hikayemiz Section */}
      <section className="relative h-screen bg-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6">
          <h1 className="text-6xl font-light mb-16 text-center">Hikayemiz</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed">
                Aksan Hukuk Bürosu, 1984 yılında kuruldu. Başlangıçta tekstil endüstrisinde faaliyet gösteren şirketlerin hukuki dosyalarıyla ilgilenirken, zamanla portföyünü genişletti. İlerleyen süreçte, uluslararası ticaret ve özellikle ihracat işlemlerine odaklanarak uluslararası alanda da etkin bir şekilde çalışmalarını sürdürdü.
              </p>
              <p className="text-lg font-light leading-relaxed">
                2000'li yıllarında başında Aksan; finans, ağır sanayi ve ilaç sektörlerinde faaliyet gösteren kurumsal müvekkillerine yönelik danışmanlık hizmetlerini arttırmıştır. Ayrıca kendi bünyesinde de insan kaynakları, finans ve bilgi işlem gibi destek birimlerini de oluşturarak bünyesinde kurduğu bu sistemler ile müvekkillerine daha kapsamlı bir hizmet sunmayı amaçladı.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed">
                Nihayet 2010'lu yıllar ile birlikte Aksan, hizmet alanlarını genişletti ve teknoloji odaklı şirketlere ve yerli ve yabancı yatırımcılara yönelik bir yaklaşım geliştirmeye başladı. Türkiye'de öncü bir çalışma takımı kurarak bu alanda faaliyetlerine devam eden Aksan, ayrıca, Teknopark İstanbul'da yeni bir ofis açarak teknoloji şirketlerine daha yakın bir şekilde hizmet vermeyi hedeflemektedir.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Bunlar ile birlikte, birleşme devralmalar, vergi hukuku ve fikri mülkiyet hukuku gibi alanlarda çalışma grupları oluşturarak müvekkillerimize kapsamlı ve kaliteli hizmet sunmaya devam etmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section className="relative min-h-screen bg-[#7a1425] text-white">
        <div className="container mx-auto py-20 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-5xl font-light mb-12">Hakkımızda</h2>
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed">
                  Aksan Hukuk Bürosu, 1984 yılında kurulmuş bağımsız bir hukuk firmasıdır ve çeşitli hukuk alanlarında hizmet vermektedir. Başlangıcından itibaren, müşterilerine güvenilir bir danışmanlık hizmeti sunmayı kendine ilke edinmiştir.
                </p>
                <p className="text-lg font-light leading-relaxed">
                  Aksan, müşterilerine dünya standartlarında hizmet sunmayı hedefler ve bunu titizlikle ve en yüksek kalitede gerçekleştirmek için çaba harcar. Hem ulusal hem de uluslararası düzeydeki değişimleri yakından takip ederek, müşterilerinin ihtiyaçlarını karşılamak ve kaliteyi sürekli kılmak için sürekli olarak kendini geliştirir.
                </p>
                <p className="text-lg font-light leading-relaxed">
                  Uzun yıllardır birlikte yol yürüdüğü çalışma arkadaşlarına ve küresel bir müşteri ağına sahip olan Aksan, müvekkillerine uygun hukuki çözümler sunabilmek adına dünya genelindeki hukuk büroları, meslek örgütleri ve güçlü çözüm ortaklarıyla da irtibat halinde kalarak gerekli yönlendirmeleri sağlar.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square">
                {/* Klasik bina çizimi */}
                <div className="border-2 border-white p-8">
                  <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none">
                    <path d="M60,180 L60,40 L140,40 L140,180" strokeWidth="2"/>
                    <path d="M50,40 L150,40" strokeWidth="2"/>
                    <path d="M80,180 L80,60 L120,60 L120,180" strokeWidth="2"/>
                    <path d="M90,100 L110,100" strokeWidth="2"/>
                    <path d="M90,120 L110,120" strokeWidth="2"/>
                    <path d="M90,140 L110,140" strokeWidth="2"/>
                    <path d="M90,160 L110,160" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

