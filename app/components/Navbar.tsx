import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-light tracking-wider">AKSAN</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900">Hakkımızda</Link>
          <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-gray-900">Hizmetlerimiz</Link>
          <Link href="/ekibimiz" className="text-gray-600 hover:text-gray-900">Ekibimiz</Link>
          <Link href="/kariyer" className="text-gray-600 hover:text-gray-900">Kariyer</Link>
          <Link href="/uluslararasi-masalar" className="text-gray-600 hover:text-gray-900">Uluslararası Masalar</Link>
          <Link href="/haberler-ve-makaleler" className="text-gray-600 hover:text-gray-900">Haberler ve Makaleler</Link>
          <Link href="/akademi" className="text-gray-600 hover:text-gray-900">Akademi</Link>
          <Link href="/iletisim" className="text-gray-600 hover:text-gray-900">İletişim</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">TR</button>
          <button className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 