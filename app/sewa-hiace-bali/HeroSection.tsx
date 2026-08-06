// src/components/HeroSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Star, Users, Calendar, ArrowRight, MessageCircle } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [selectedFleet, setSelectedFleet] = useState("Hiace Premio (13 Seat)");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("1");

  // Ganti nomor WA aktif (tanpa tanda + atau 0 di depan, gunakan 62)
  const waNumber = "6282339616319";

  const handleQuickBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Admin, saya mau cek ketersediaan sewa Hiace di Bali:%0A%0A` +
      `• *Pilihan Armada:* ${selectedFleet}%0A` +
      `• *Tgl Pemakaian:* ${startDate || "Belum ditentukan"}%0A` +
      `• *Durasi:* ${duration} Hari%0A%0A` +
      `Mohon info ketersediaan dan total harganya. Terima kasih!`;

    // Event tracking Google Ads (Opsional)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-XXXXXXX/HERO_FORM_SUBMIT",
      });
    }

    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Copywriting & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Rating Badges */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-blue-200">
                4.9/5 dari 850+ Wisatawan di Bali
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Sewa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Toyota Hiace Bali</span>
              <br />
              Sudah Termasuk Supir & BBM
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Solusi transportasi rombongan paling nyaman & hemat untuk Tour Bali, Transfer Bandara, hingga keperluan Corporate/Event. Armada bersih, dingin, dan supir berpengalaman.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Driver Lokal Ramah</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">BBM Termasuk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Tanpa Biaya Ringan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Antar Jemput Bandara</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Unit Bersih & Wangi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Layanan 24 Jam</span>
              </div>
            </div>

            {/* Direct WhatsApp Call-to-Action for Mobile */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${waNumber}?text=Halo%20Admin,%20saya%20mau%20tanya%20sewa%20Hiace%20Bali`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Konsultasi Rute via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Quick Booking Form / Card Highlight */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-100 relative">
              
              {/* Form Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Cek Ketersediaan Cepat
              </div>

              <div className="mt-2 mb-5 text-center">
                <h3 className="text-lg font-bold text-slate-900">Hitung & Pesan Armada</h3>
                <p className="text-xs text-slate-500">Pilih jenis Hiace & tanggal rencana trip Anda</p>
              </div>

              <form onSubmit={handleQuickBooking} className="space-y-4">
                {/* Field Pilihan Armada */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    Pilih Jenis Hiace
                  </label>
                  <select
                    value={selectedFleet}
                    onChange={(e) => setSelectedFleet(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                  >
                    <option value="Hiace Commuter (15 Seat)">Toyota Hiace Commuter (15 Seat) - Rp1.200.000</option>
                    <option value="Hiace Premio (13 Seat)">Toyota Hiace Premio (13 Seat) - Rp1.500.000</option>
                  </select>
                </div>

                {/* Field Tanggal Pemakaian */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    Tanggal Pemakaian
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Field Durasi */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Durasi Sewa (Hari)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["1", "2", "3+"].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setDuration(item)}
                        className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                          duration === item
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {item} {item === "3+" ? "Hari More" : "Hari"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pricing Hint */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600 flex justify-between items-center">
                  <span>Estimasi Mulai:</span>
                  <span className="font-bold text-slate-900 text-sm">
                    {selectedFleet.includes("Commuter") ? "Rp1.200.000" : "Rp1.500.000"} <span className="text-[10px] font-normal text-slate-500">/ 12 Jam</span>
                  </span>
                </div>

                {/* Submit Form Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Cek Ketersediaan via WA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Security/Trust footer on form */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Tanpa DP / Pembayaran Cukup Saat Bertemu Driver</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;