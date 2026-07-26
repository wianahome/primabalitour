"use client";

import React from "react";
import Link from "next/link";
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  
  ArrowUp,
  ShieldCheck
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info & Bio (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
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
              Penyedia jasa agen perjalanan dan sewa mobil terpercaya di Bali. Kami berkomitmen memberikan pengalaman liburan terbaik dengan harga transparan dan driver profesional.
            </p>

            {/* Legal / NIB Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Terdaftar Resmi • PT Prima Bali Tour</span>
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
              Navigasi Cepat
            </h3>
            <ul className="space-y-2 text-sm font-light">
              {[
                { name: "Beranda", href: "#" },
                { name: "Paket Tour Populer", href: "#paket" },
                { name: "Sewa Mobil & Driver", href: "#sewa-mobil" },
                { name: "Galeri Wisatawan", href: "#galeri" },
                { name: "Ulasan Pelanggan", href: "#faq" },
              ].map((link, idx) => (
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
              Layanan Favorit
            </h3>
            <ul className="space-y-2 text-sm font-light">
              {[
                "Nusa Penida Tour",
                "Ubud Cultural Trip",
                "Bedugul & Tanah Lot",
                "Honeymoon Bali Package",
                "Sewa HiAce Rombongan",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#paket" className="hover:text-emerald-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak & Kantor
            </h3>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jl. Raya Kuta No. 88, Badung, Bali - 80361</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+62 812-3456-7890</span>
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
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
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