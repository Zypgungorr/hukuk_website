'use client';
import { useState } from 'react';
import ArticleCard from "../components/ArticleCard";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const contents = [
  {
    title: "Mart | Fikri Mülkiyet Bülteni",
    excerpt: "Tiplemelerin Fikir ve Sanat Eserleri Kanunu kapsamındaki yeri günümüzde sosyal medya platformlarının etkisiyle, dizi, film ve sinema sektöründe üretilen içerikler...",
    link: "/haberlerVeMakaleler/fikri-mulkiyet",
    date: "Ocak"
  },
  {
    title: "Reklam Kurulu Aralık 2024 Kararları",
    excerpt: "Ticaret Bakanlığı bünyesinde faaliyet gösteren Reklam Kurulu (“Kurul”) tarafından 12 Aralık 2024 tarihinde gerçekleştirilen ve ana gündem konusu tüketicileri aldatan...",
    link: "/haberlerVeMakaleler/reklam-kararlari",
    date: "Ocak"
  },
  {
    title: "Elektronik Ticarette Aracı Hizmet Sağlayıcılar Mevzuatı",
    excerpt: "8 Mart 2025 tarihli 32385 sayılı Resmi Gazete’de yayımlanan yönetmelik ile Elektronik Ticaret Aracı Hizmet Sağlayıcı ve Elektronik Ticaret Hizmet Sağlayıcılar hakkında...",
    link: "/haberlerVeMakaleler/e-ticaret",
    date: "Mart"
  },
];

export default function HaberlerVeMakalelerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("Hepsi");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Ay sayımlarını hesapla
  const monthCounts = contents.reduce((acc, item) => {
    acc[item.date] = (acc[item.date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const uniqueMonths = Object.keys(monthCounts);

  const filteredContents = contents.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMonth =
      selectedMonth === "Hepsi" || item.date === selectedMonth;

    return matchesSearch && matchesMonth;
  });

  const totalPages = Math.ceil(filteredContents.length / itemsPerPage);
  const paginatedContents = filteredContents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-gray-900 mb-8">Haberler ve Makaleler</h2>

        {/* Arama ve filtre */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-10">
          {/* Arama kutusu */}
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-blue-900 focus:outline-none focus:border-blue-900 shadow-sm"
            />
          </div>

          {/* Ay filtresi */}
          <div className="w-full md:w-1/10">
            <select
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 border border-gray-300 text-blue-900 rounded-md focus:outline-none focus:border-blue-900 shadow-sm"
            >
              <option value="Hepsi">Ay seçin</option>
              {uniqueMonths.map((month) => (
                <option key={month} value={month}>
                  {month} ({monthCounts[month]})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {paginatedContents.length > 0 ? (
            paginatedContents.map((item, idx) => (
              <ArticleCard key={idx} {...item} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">Aradığınız kriterlere uygun içerik bulunamadı.</p>
          )}
        </div>

        {/* Sayfalama */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? 'bg-blue-900 text-white'
                    : 'text-blue-900 hover:bg-blue-100'
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
