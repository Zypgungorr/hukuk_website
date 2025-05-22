import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 // Navbar'ı ekliyoruz

export const metadata: Metadata = {
  title: "Hello World",
  description: "A simple Hello World page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* Tüm sayfalarda görünmesini sağlayan kısım */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
