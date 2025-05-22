'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Close the menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="w-full px-6 py-4 border-b bg-white z-50 sticky top-0">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-10 flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={50} 
              height={50} 
              className="h-12 w-auto mr-3"
              priority
            />
            <Image 
              src="/images/Gedikli_hukuk_yazi2.png" 
              alt="Gedikli Hukuk Yazı" 
              width={150} 
              height={40} 
              className="h-8 w-auto hidden sm:block"
              priority
            />
          </div>
        </Link>

        {/* Navigation Links - Desktop Only */}
        <div className="hidden lg:flex items-center space-x-16">
          <Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900">Hakkımızda</Link>

          <div className="relative group">
            <button>
              <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-gray-900">Hizmetlerimiz</Link>
            </button>

            {/* Dropdown - Only visible on desktop */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <ul className="flex flex-col">
                <li>
                  <Link href="/hizmetlerimiz/a" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    a
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetlerimiz/b" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    b
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetlerimiz/c" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    c
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetlerimiz/d" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    d
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/ekibimiz" className="text-gray-600 hover:text-gray-900">Ekibimiz</Link>
          <Link href="/kariyer" className="text-gray-600 hover:text-gray-900">Kariyer</Link>
          <Link href="/haberlerVeMakaleler" className="text-gray-600 hover:text-gray-900">Haberler ve Makaleler</Link>
          <Link href="/iletisim" className="text-gray-600 hover:text-gray-900">İletişim</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">TR</button>
          
          {/* Mobile menu toggle button */}
          <button 
            className="text-gray-600 hover:text-gray-900 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div 
        className={` mt-4 lg:hidden absolute left-0 right-0 bg-white border-t  border-gray-200 transition-all duration-500 ease-in-out transform ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4 max-w-[1400px] mx-auto">
          <Link 
            href="/hakkimizda" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hakkımızda
          </Link>
          
          {/* Mobile version of Hizmetlerimiz - no dropdown */}
          <Link 
            href="/hizmetlerimiz" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hizmetlerimiz
          </Link>
          
          <Link 
            href="/ekibimiz" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ekibimiz
          </Link>
          
          <Link 
            href="/kariyer" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kariyer
          </Link>
          
          <Link 
            href="/haberlerVeMakaleler" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Haberler ve Makaleler
          </Link>
          
          <Link 
            href="/iletisim" 
            className="text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}
