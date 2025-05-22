import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Title */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-[#9B1B30] text-center md:text-left">
              İletişim
            </h1>
            <p className="text-base md:text-lg font-light text-gray-600 mb-0 text-center md:text-left">
              Hukuki danışmanlık için bize ulaşın, size en iyi çözümleri sunalım.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 md:mb-2">Bize Ulaşın</h2>
              <p className="text-gray-600">
                Hukuki ihtiyaçlarınız için bizimle iletişime geçin. Size en uygun çözümü sunalım.
              </p>
              
              <div className="space-y-5 mt-8">
                <div className="flex items-start space-x-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9B1B30] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900">Adres</h3>
                    <p className="text-gray-600">
                      Büyükdere Caddesi No: 123<br />
                      Şişli, İstanbul, Türkiye
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9B1B30] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900">E-posta</h3>
                    <p className="text-gray-600">info@aksan.av.tr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9B1B30] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900">Telefon</h3>
                    <p className="text-gray-600">+90 (212) XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9B1B30] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi - Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-10">
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-4">Bizi Takip Edin</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#9B1B30] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#9B1B30] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#9B1B30] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#9B1B30] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
              <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6">Mesaj Gönder</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      name="first-name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      name="last-name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none"
                  >
                    <option value="">Seçiniz</option>
                    <option value="genel-bilgi">Genel Bilgi</option>
                    <option value="sirketler-hukuku">Şirketler Hukuku</option>
                    <option value="is-hukuku">İş Hukuku</option>
                    <option value="vergi-hukuku">Vergi Hukuku</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="privacy-policy" 
                    name="privacy-policy" 
                    type="checkbox" 
                    className="h-4 w-4 text-[#9B1B30] border-gray-300 rounded focus:ring-[#9B1B30]" 
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    <span>Kişisel verilerin işlenmesine ilişkin </span>
                    <a href="#" className="text-[#9B1B30] hover:underline">aydınlatma metnini</a>
                    <span> okudum ve kabul ediyorum.</span>
                  </label>
                </div>
                
                <div>
                  <button type="submit" className="w-full bg-[#9B1B30] text-white py-3 px-4 rounded-md hover:bg-[#7d1626] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:ring-opacity-50">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center">Lokasyonumuz</h2>
          <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Google Harita Buraya Eklenecek</span>
          </div>
        </div>
      </section>
    </div>
  );
}
