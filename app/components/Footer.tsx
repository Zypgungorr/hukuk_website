import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36">
            <div>
              <Image className="pb-6" src="/images/footerlogo1.png" alt="Gedikli Hukuk" width={180} height={180}/>
              <h3 className="text-xl font-light mb-4">Gedikli Hukuk</h3>
              <p className="text-gray-400 text-sm">
                1990'dan beri hukuk alanında öncü ve yenilikçi çözümler sunuyoruz.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mt-10 mb-4">Hızlı Erişim</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a></li>
                <li><a href="/hizmetlerimiz" className="hover:text-white">Hizmetlerimiz</a></li>
                <li><a href="/ekibimiz" className="hover:text-white">Ekibimiz</a></li>
                <li><a href="/kariyer" className="hover:text-white">Kariyer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mt-10 mb-4">Hizmetler</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/sirketler-hukuku" className="hover:text-white">Şirketler Hukuku</a></li>
                <li><a href="/is-hukuku" className="hover:text-white">İş Hukuku</a></li>
                <li><a href="/vergi-hukuku" className="hover:text-white">Vergi Hukuku</a></li>
                <li><a href="/fikri-mulkiyet" className="hover:text-white">Fikri Mülkiyet</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mt-10 mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>İstanbul, Türkiye</li>
                <li>+90 (212) XXX XX XX</li>
                <li>info@gedikli.av.tr</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Gedikli Hukuk. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    );
  } 