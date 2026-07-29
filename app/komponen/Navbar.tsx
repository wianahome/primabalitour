"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import { Menu, X, PhoneCall, ChevronDown, Compass, Car, Anchor } from "lucide-react";
import PuraLogo from "./PuraLogo";
import Bahasa from "./Bahasa";

type Props = {
  lang?: "id" | "en" | "ja";
};

export default function Navbar({ lang: propLang }: Props) {
  const pathname = usePathname(); // 2. Ambil path URL saat ini (misal: /en/..., /ja/...)

  // 3. Deteksi bahasa dari segmen awal URL. Jika tidak ada di URL, gunakan prop/default 'id'
  const currentLang: "id" | "en" | "ja" = pathname?.startsWith("/en")
    ? "en"
    : pathname?.startsWith("/ja")
    ? "ja"
    : propLang || "id";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Deteksi scroll untuk background navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown saat klik di luar area menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dictionary 3 Bahasa
  const translations = {
    id: {
      home: "Beranda",
      services: "Layanan",
      tourPackage: "Paket Tour",
      carRental: "Sewa Mobil",
      snorkeling: "Snorkeling Bali",
      about: "Tentang Kami",
      faq: "FAQ",
      contactUs: "Hubungi Kami",
      waMessage: "Halo Prima Bali Tour, saya ingin bertanya mengenai layanan tur & wisata Bali.",
    },
    en: {
      home: "Home",
      services: "Services",
      tourPackage: "Tour Packages",
      carRental: "Car Rental",
      snorkeling: "Bali Snorkeling",
      about: "About Us",
      faq: "FAQ",
      contactUs: "Contact Us",
      waMessage: "Hello Prima Bali Tour, I would like to inquire about Bali tour & travel services.",
    },
    ja: {
      home: "ホーム",
      services: "サービス",
      tourPackage: "ツアーパッケージ",
      carRental: "レンタカー",
      snorkeling: "バリ島シュノーケリング",
      about: "会社概要",
      faq: "よくある質問",
      contactUs: "お問い合わせ",
      waMessage: "こんにちは Prima Bali Tour、バリ島ツアーについてお問い合わせしたいです。",
    },
  };

  // Gunakan currentLang yang terdeteksi otomatis dari URL
  const t = translations[currentLang] || translations.id;

  const whatsappNumber = "6282339616319";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.waMessage)}`;

  // Sub-layanan items
  const serviceItems = [
    {
      name: t.tourPackage,
      href: `/${currentLang}/#paket`,
      icon: Compass,
      desc: {
        id: "Eksplorasi destinasi terbaik Bali",
        en: "Explore Bali's best destinations",
        ja: "バリ島の人気観光スポット巡り",
      }[currentLang],
    },
    {
      name: t.carRental,
      href: `/${currentLang}/#sewa-mobil`,
      icon: Car,
      desc: {
        id: "Armada nyaman + driver berpengalaman",
        en: "Comfortable fleet + experienced driver",
        ja: "快適な車両とベテランドライバー",
      }[currentLang],
    },
    {
      name: t.snorkeling,
      href: `/${currentLang}/snorkeling-bali`,
      icon: Anchor,
      desc: {
        id: "Petualangan bawah laut terbaik di Bali",
        en: "Best underwater adventures in Bali",
        ja: "バリ島最高の水中アクティビティ",
      }[currentLang],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 1. Brand Logo */}
          <Link href={`/${currentLang}`} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform">
              <PuraLogo className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-wider text-white leading-tight">
                PRIMA BALI
              </span>
              <span className="text-[10px] tracking-widest text-emerald-400 font-medium uppercase">
                Tour & Travel
              </span>
            </div>
          </Link>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {/* Beranda */}
            <Link
              href={`/${currentLang}`}
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors rounded-full hover:bg-white/5"
            >
              {t.home}
            </Link>

            {/* Sub-menu Dropdown Layanan */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors rounded-full hover:bg-white/5 focus:outline-none"
              >
                <span>{t.services}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              {/* Dropdown Menu Box */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl transition-all"
                >
                  {serviceItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 font-light mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Tentang Kami */}
            <Link
              href={`/${currentLang}/#tentang`}
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors rounded-full hover:bg-white/5"
            >
              {t.about}
            </Link>

            {/* FAQ */}
            <Link
              href={`/${currentLang}/#faq`}
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors rounded-full hover:bg-white/5"
            >
              {t.faq}
            </Link>
          </nav>

          {/* 3. Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Bahasa />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-300 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.contactUs}</span>
            </a>
          </div>

          {/* 4. Mobile View */}
          <div className="flex md:hidden items-center gap-2">
            <Bahasa />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 transition-all">
          <nav className="flex flex-col gap-1">
            <Link
              href={`/${currentLang}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors"
            >
              {t.home}
            </Link>

            <div className="py-2 px-4 rounded-xl bg-white/5 border border-white/5 my-1">
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-2 pt-1">
                {t.services}
              </div>
              <div className="flex flex-col gap-1 pl-2 border-l border-white/10">
                {serviceItems.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 py-2 px-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                    >
                      <IconComp className="w-4 h-4 text-emerald-400" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href={`/${currentLang}/#tentang`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors"
            >
              {t.about}
            </Link>

            <Link
              href={`/${currentLang}/#faq`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors"
            >
              {t.faq}
            </Link>

            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t.contactUs}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}