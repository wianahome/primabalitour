"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ChevronDown, Compass, Car, Anchor } from "lucide-react";
import PuraLogo from "./PuraLogo";

export default function Navbar() {
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

  const whatsappNumber = "6282339616319";
  const whatsappMessage = "Halo Prima Bali Tour, saya ingin bertanya mengenai layanan tur & wisata Bali.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Sub-layanan items
  const serviceItems = [
    {
      name: "Paket Tour",
      href: "/#paket",
      icon: Compass,
      desc: "Eksplorasi destinasi terbaik Bali",
    },
    {
      name: "Sewa Mobil",
      href: "/#sewa-mobil",
      icon: Car,
      desc: "Armada nyaman + driver berpengalaman",
    },
    {
      name: "Snorkeling Bali",
      href: "/snorkeling-bali",
      icon: Anchor,
      desc: "Petualangan bawah laut terbaik di Bali",
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
          <Link href="/" className="flex items-center gap-2 group">
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
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors rounded-full hover:bg-white/5"
            >
              Beranda
            </Link>

            {/* Sub-menu Dropdown Layanan */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors rounded-full hover:bg-white/5 focus:outline-none"
              >
                <span>Layanan</span>
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
              href="/#tentang"
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors rounded-full hover:bg-white/5"
            >
              Tentang Kami
            </Link>

            {/* FAQ */}
            <Link
              href="/#faq"
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors rounded-full hover:bg-white/5"
            >
              FAQ
            </Link>
          </nav>

          {/* 3. Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-300 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* 4. Mobile View */}
          <div className="flex md:hidden items-center gap-2">
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
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors"
            >
              Beranda
            </Link>

            <div className="py-2 px-4 rounded-xl bg-white/5 border border-white/5 my-1">
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-2 pt-1">
                Layanan
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
              href="/#tentang"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors"
            >
              Tentang Kami
            </Link>

            <Link
              href="/#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors"
            >
              FAQ
            </Link>

            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Hubungi Kami</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}