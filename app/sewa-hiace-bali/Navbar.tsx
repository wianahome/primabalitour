// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, ShieldCheck } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ganti dengan nomor WhatsApp aktif (format internasional tanpa +)
  const waNumber = "6282339616319"; 
  const waMessage = encodeURIComponent(
    "Halo Admin, saya ingin tanya ketersediaan sewa Hiace di Bali."
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
  const phoneUrl = "tel:+6282339616319";

  // Fungsi helper untuk event tracking Google Ads
  const trackConversion = (type: "whatsapp" | "phone") => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: type === "whatsapp" ? "AW-XXXXXXX/WA_CLICK" : "AW-XXXXXXX/PHONE_CLICK",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top Announcement Bar - Google Ads Trust Signal */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-mx-auto flex justify-between items-center text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sewa Hiace Bali Resmi • All-In (Supir + BBM) • Tanpa Biaya Tersembunyi</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-gray-300">
            <span>Layanan 24/7</span>
            <span>|</span>
            <a 
              href={phoneUrl} 
              onClick={() => trackConversion("phone")}
              className="hover:text-white transition-colors"
            >
              Call Center: +62 823-3961-6319
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white font-black text-xl px-2.5 py-1 rounded-lg group-hover:bg-blue-700 transition-colors">
              HB
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-tight tracking-tight">
                Hiace<span className="text-blue-600">Bali</span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
                Transport & Tour
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
            <Link href="#armada" className="hover:text-blue-600 transition-colors">
              Pilihan Hiace
            </Link>
            <Link href="#fasilitas" className="hover:text-blue-600 transition-colors">
              Fasilitas & Layanan
            </Link>
            <Link href="#harga" className="hover:text-blue-600 transition-colors">
              Daftar Harga
            </Link>
            <Link href="#faq" className="hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={phoneUrl}
              onClick={() => trackConversion("phone")}
              className="inline-flex items-center justify-center p-2.5 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all"
              title="Telepon Langsung"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp")}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp")}
              className="inline-flex items-center gap-1 bg-emerald-600 text-white font-medium text-xs px-3 py-1.5 rounded-full"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WA Now</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 font-medium text-gray-700 py-2">
            <Link
              href="#armada"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-gray-50 text-sm"
            >
              Pilihan Hiace
            </Link>
            <Link
              href="#fasilitas"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-gray-50 text-sm"
            >
              Fasilitas & Layanan
            </Link>
            <Link
              href="#harga"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-gray-50 text-sm"
            >
              Daftar Harga
            </Link>
            <Link
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-gray-50 text-sm"
            >
              FAQ
            </Link>
          </nav>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp")}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold text-sm py-2.5 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat via WhatsApp</span>
            </a>
            <a
              href={phoneUrl}
              onClick={() => trackConversion("phone")}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-200"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi +62 823-3961-6319</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;