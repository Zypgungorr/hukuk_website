'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen">
      
      {/* Hikayemiz Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-16 min-h-screen md:h-screen bg-[#b4b1b1] text-white"
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <motion.div 
          variants={fadeInUp}
          className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4 md:px-6"
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal mb-8 md:mb-16 text-center tracking-wide"
          >
            Hikayemiz
          </motion.h1>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl"
          >
            <motion.div 
              variants={fadeInUp}
              className="space-y-4 md:space-y-6"
            >
              <p className="font-body text-base md:text-lg font-light leading-relaxed">
                Gedikli Hukuk Bürosu, 1984 yılında kuruldu. Başlangıçta tekstil endüstrisinde faaliyet gösteren şirketlerin hukuki dosyalarıyla ilgilenirken, zamanla portföyünü genişletti. İlerleyen süreçte, uluslararası ticaret ve özellikle ihracat işlemlerine odaklanarak uluslararası alanda da etkin bir şekilde çalışmalarını sürdürdü.
              </p>
              <p className="font-body text-base md:text-lg font-light leading-relaxed">
                2000'li yıllarında başında Gedikli; finans, ağır sanayi ve ilaç sektörlerinde faaliyet gösteren kurumsal müvekkillerine yönelik danışmanlık hizmetlerini arttırmıştır. Ayrıca kendi bünyesinde de insan kaynakları, finans ve bilgi işlem gibi destek birimlerini de oluşturarak bünyesinde kurduğu bu sistemler ile müvekkillerine daha kapsamlı bir hizmet sunmayı amaçladı.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="space-y-4 md:space-y-6"
            >
              <p className="font-body text-base md:text-lg font-light leading-relaxed">
                Nihayet 2010'lu yıllar ile birlikte Gedikli, hizmet alanlarını genişletti ve teknoloji odaklı şirketlere ve yerli ve yabancı yatırımcılara yönelik bir yaklaşım geliştirmeye başladı. Türkiye'de öncü bir çalışma takımı kurarak bu alanda faaliyetlerine devam eden Gedikli, ayrıca, Teknopark İstanbul'da yeni bir ofis açarak teknoloji şirketlerine daha yakın bir şekilde hizmet vermeyi hedeflemektedir.
              </p>
              <p className="font-body text-base md:text-lg font-light leading-relaxed">
                Bunlar ile birlikte, birleşme devralmalar, vergi hukuku ve fikri mülkiyet hukuku gibi alanlarda çalışma grupları oluşturarak müvekkillerimize kapsamlı ve kaliteli hizmet sunmaya devam etmektedir.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Hakkımızda Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative min-h-screen bg-[#273042] text-white"
      >
        <motion.div 
          variants={fadeInUp}
          className="container mx-auto px-4 md:px-6 py-16 md:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              variants={fadeInUp}
              className="space-y-6"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-light"
              >
                Hukuki Çözüm Ortağınız
              </motion.h2>
              <motion.div 
                variants={staggerContainer}
                className="space-y-4"
              >
                <p className="text-base md:text-lg font-light leading-relaxed">
                  Gedikli Hukuk Bürosu olarak, müvekkillerimize kapsamlı ve yenilikçi hukuki çözümler sunuyoruz. Deneyimli ekibimiz ve global vizyonumuz ile ulusal ve uluslararası hukuk alanında güvenilir çözüm ortağınız olmaya devam ediyoruz.
                </p>
                <p className="text-base md:text-lg font-light leading-relaxed">
                  Müvekkillerimizin ihtiyaçlarını en iyi şekilde anlayarak, her bir dosya için özel stratejiler geliştiriyoruz. Hukuki süreçleri şeffaf bir şekilde yönetiyor, müvekkillerimizi her aşamada bilgilendiriyoruz.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="relative mt-8 lg:mt-0"
            >
              <motion.div 
                variants={fadeIn}
                className="w-full aspect-square"
              >
                {/* Klasik bina çizimi */}
                <div className="border-2 border-white p-4 md:p-8">
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
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Aksan Ağı Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-16 min-h-screen bg-[#70282e] text-white"
      >
        <motion.div 
          variants={fadeInUp}
          className="container mx-auto px-4 md:px-6 py-8 md:py-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal mb-8 md:mb-16 text-center tracking-wide"
            >
              Aksan Ağı
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="space-y-8 md:space-y-12"
            >
              <motion.p 
                variants={fadeInUp}
                className="font-body text-base md:text-lg font-light leading-relaxed text-center max-w-4xl mx-auto"
              >
                Aksan Hukuk Bürosu, güçlü ve çeşitli bir Aksan Ağı oluşturmak için hem değerli çalışma arkadaşlarına hem de değerli müvekkillerine odaklanmaktadır. Aksan Ağı, yurt içinde ve yurtdışındaki ilişkileri ile işbirliği ve güvene dayalı ilişkileri içeren kapsamlı bir yapı oluşturur.
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                className="space-y-4 md:space-y-8"
              >
                <motion.p 
                  variants={fadeInUp}
                  className="font-body text-base md:text-lg font-light leading-relaxed"
                >
                  Hukukun çeşitli alanlarındaki bilgi ve deneyimleriyle donanmış olan çalışma arkadaşlarımız, müvekkillerimize en kaliteli hizmeti sunmak için bir araya gelirler. Aksan Ağı, çalışma arkadaşlarımız arasındaki işbirliğini teşvik eder ve her biri birbirini tamamlayan yetenekler sunar. Önceden işbirliği yaptığımız çalışma arkadaşlarımız da ağımızda kalmaya devam ederler, böylece uzun vadeli işbirliği ve güvene dayalı ilişkilerimizi sürdürürüz.
                </motion.p>

                <motion.p 
                  variants={fadeInUp}
                  className="font-body text-base md:text-lg font-light leading-relaxed"
                >
                  Öte yandan Aksan'ın müvekkil ağı, farklı sektörlerden ve bölgelerden de geniş bir yelpazeyi kapsar. Aksan Ağı, müvekkillerimizle kurduğumuz sağlam ilişkileri ve onların ihtiyaçlarını anlama yeteneğimizi yansıtır.
                </motion.p>

                <motion.p 
                  variants={fadeInUp}
                  className="font-body text-base md:text-lg font-light leading-relaxed"
                >
                  Aksan Ağı, hem çalışma arkadaşlarımızın hem de müvekkillerimizin başarılarını desteklemeyi ve güvene dayalı uzun vadeli ilişkiler kurmayı amaçlar. Bu çerçevede, işbirliği ve etkileşim, Aksan'ın hizmet kalitesini sürekli olarak artırmak için temel unsurlardır.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

