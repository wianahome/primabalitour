"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FilePlus, 
  FolderOpen, 
  MapPin, 
  Hotel, 
  LogOut, 
  Compass 
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "Buat Itinerary", href: "/admin/itinerary/new", icon: FilePlus },
    { label: "Daftar Proposal", href: "/admin/itinerary", icon: FolderOpen },
    { label: "Katalog Destinasi", href: "/admin/destinations", icon: MapPin },
    { label: "Katalog Hotel", href: "/admin/hotels", icon: Hotel },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar Kiri Fixed */}
      <aside className="w-64 bg-slate-900 border-r border-white/10 flex flex-col justify-between shrink-0 h-screen sticky top-0 p-4">
        <div className="space-y-6">
          {/* Logo & Brand Admin */}
          <div className="flex items-center gap-3 px-2 py-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-black text-sm text-white tracking-wide">PRIMA BALI</h2>
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Admin Console</p>
            </div>
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

      {/* Main Content Workspace */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}