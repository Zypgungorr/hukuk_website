import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // 👈 ekledik

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-source',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Gedikli Hukuk Bürosu",
  description: "Gedikli Hukuk Bürosu Resmi Web Sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${libreBaskerville.variable} ${sourceSans.variable}`}>
<body className="antialiased font-body bg-white" suppressHydrationWarning>
<Navbar />
        {children}
        <ScrollToTop /> {/* 👈 Buraya eklendi */}
        <Footer />
      </body>
    </html>
  );
}
