"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp,
  ShieldCheck
} from "lucide-react";

type Props = {
  lang?: "id" | "en" | "ja";
};

export default function Footer({ lang: propLang }: Props) {
  const pathname = usePathname();

  // Deteksi bahasa otomatis berdasarkan URL path
  const currentLang: "id" | "en" | "ja" = pathname?.startsWith("/en")
    ? "en"
    : pathname?.startsWith("/ja")
    ? "ja"
    : propLang || "id";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // Dictionary 3 Bahasa untuk Footer
  const translations = {
    id: {
      bio: "Penyedia jasa agen perjalanan dan sewa mobil terpercaya di Bali. Kami berkomitmen memberikan pengalaman liburan terbaik dengan harga transparan dan driver profesional.",
      registered: "Terdaftar Resmi • PT Prima Bali Tour",
      quickNav: "Navigasi Cepat",
      home: "Beranda",
      popularPackages: "Paket Tour Populer",
      carRental: "Sewa Mobil & Driver",
      gallery: "Galeri Wisatawan",
      reviews: "Ulasan Pelanggan",
      favoriteServices: "Layanan Favorit",
      contactAndOffice: "Kontak & Kantor",
      address: "Jl. Raya Kuta No. 88, Badung, Bali - 80361",
      terms: "Syarat & Ketentuan",
      privacy: "Kebijakan Privasi",
    },
    en: {
      bio: "Your trusted tour agent and car rental provider in Bali. We are committed to providing the best holiday experience with transparent pricing and professional drivers.",
      registered: "Officially Registered • PT Prima Bali Tour",
      quickNav: "Quick Navigation",
      home: "Home",
      popularPackages: "Popular Tour Packages",
      carRental: "Car Rental & Driver",
      gallery: "Tourist Gallery",
      reviews: "Customer Reviews",
      favoriteServices: "Popular Services",
      contactAndOffice: "Contact & Office",
      address: "Jl. Raya Kuta No. 88, Badung, Bali - 80361",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
    },
    ja: {
      bio: "バリ島で信頼される旅行代理店およびレンタカーサービスです。明朗会計とプロのドライバーで最高の休日体験をお届けします。",
      registered: "公式登録済み • PT Prima Bali Tour",
      quickNav: "クイックナビ",
      home: "ホーム",
      popularPackages: "人気ツアーパッケージ",
      carRental: "レンタカー & ドライバー",
      gallery: "ツーリストギャラリー",
      reviews: "お客様の声",
      favoriteServices: "人気サービス",
      contactAndOffice: "お問い合わせ & 事務所",
      address: "バリ島バドゥン県クタ通り88号 - 80361",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
    },
  };

  const t = translations[currentLang] || translations.id;

  // Tautan Navigasi Cepat
  const quickNavLinks = [
    { name: t.home, href: `/${currentLang}` },
    { name: t.popularPackages, href: `/${currentLang}/#paket` },
    { name: t.carRental, href: `/${currentLang}/#sewa-mobil` },
    { name: t.gallery, href: `/${currentLang}/#galeri` },
    { name: t.reviews, href: `/${currentLang}/#faq` },
  ];

  // Tautan Layanan Favorit
  const favoriteServiceLinks = [
    { name: "Nusa Penida Tour", href: `/${currentLang}/#paket` },
    { name: "Ubud Cultural Trip", href: `/${currentLang}/#paket` },
    { name: "Bedugul & Tanah Lot", href: `/${currentLang}/#paket` },
    { name: "Honeymoon Bali Package", href: `/${currentLang}/#paket` },
    { name: "Sewa HiAce Rombongan", href: `/${currentLang}/#sewa-mobil` },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info & Bio (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={`/${currentLang}`} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider text-white leading-tight">
                  PRIMA BALI
                </span>
                <span className="text-[10px] tracking-widest text-emerald-400 font-medium uppercase">
                  Tour & Travel
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              {t.bio}
            </p>

            {/* Legal / NIB Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.registered}</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: ArrowUp, href: "#", label: "Instagram" },
              ].map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-white/10 transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.quickNav}
            </h3>
            <ul className="space-y-2 text-sm font-light">
              {quickNavLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tour Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.favoriteServices}
            </h3>
            <ul className="space-y-2 text-sm font-light">
              {favoriteServiceLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.contactAndOffice}
            </h3>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+62 823-3961-6319</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@primabalitour.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p>
            © {currentYear} <strong>Prima Bali Tour</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              {t.terms}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.privacy}
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-400 hover:bg-white/10 transition-all flex items-center gap-1 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}