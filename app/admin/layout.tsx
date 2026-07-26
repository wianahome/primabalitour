"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FilePlus, 
  FolderOpen, 
  MapPin, 
  Hotel, 
  LogOut, 
  Compass,
  Menu,
  X
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Otomatis tutup sidebar mobile setiap kali ada perpindahan halaman (route change)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Buat Itinerary", href: "/admin/itinerary/new", icon: FilePlus },
    { label: "Daftar Proposal", href: "/admin/itinerary", icon: FolderOpen },
    { label: "Katalog Destinasi", href: "/admin/destinations", icon: MapPin },
    { label: "Katalog Hotel", href: "/admin/hotels", icon: Hotel },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 relative">
      
      {/* 1. OVERLAY BACKDROP (Hanya tampil saat sidebar mobile terbuka) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* 2. SIDEBAR (Fixed di Mobile, Sticky di Desktop) */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-slate-900 border-r border-white/10 
          flex flex-col justify-between shrink-0 p-4 z-50 transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="space-y-6">
          {/* Logo & Brand Admin + Tombol Close Mobile */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3 px-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-black text-sm text-white tracking-wide">PRIMA BALI</h2>
                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Admin Console</p>
              </div>
            </div>

            {/* Tombol Close (Hanya di layar Mobile) */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="pt-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400 hover:text-rose-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Ke Website Utama</span>
          </Link>
        </div>
      </aside>

      {/* 3. MAIN CONTENT WORKSPACE */}
      <div className="flex-1 min-w-0 flex flex-col">
        
        {/* Header Bar Mobile (Hanya tampil di Mobile) */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-white/10 sticky top-0 z-30 print:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-xl bg-slate-800 border border-white/10 text-slate-300 hover:text-emerald-400 transition-colors"
            aria-label="Buka Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-black tracking-wide text-white">PRIMA BALI</span>
          </div>

          {/* Spacer penyeimbang layout flex */}
          <div className="w-9" />
        </header>

        {/* Area Isi Halaman Utama */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}