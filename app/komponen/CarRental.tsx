"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Fuel, ShieldCheck, Check, ArrowRight, Car } from "lucide-react";

interface CarItem {
  id: string;
  name: string;
  category: "MPV" | "SUV" | "Minibus" | "Luxury";
  image: string;
  capacity: string;
  transmission: "Manual" | "Matic" | "Matic/Manual";
  pricePerDay: string;
  includes: string[];
  isBestSeller?: boolean;
}

export default function CarRental() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const cars: CarItem[] = [
    {
      id: "1",
      name: "Toyota All New Avanza",
      category: "MPV",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop",
      capacity: "5-6 Orang",
      transmission: "Matic/Manual",
      pricePerDay: "Rp 500.000",
      includes: ["Driver Ramah & Lokal", "BBM / Petrol", "Durasi 10-12 Jam", "AC Dingin & Bersih"],
      isBestSeller: true,
    },
    {
      id: "2",
      name: "Toyota Innova Reborn",
      category: "MPV",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
      capacity: "6-7 Orang",
      transmission: "Matic",
      pricePerDay: "Rp 800.000",
      includes: ["Driver Nyaman & Berpengalaman", "BBM / Petrol", "Durasi 10-12 Jam", "Interior Ekstra Nyaman"],
      isBestSeller: true,
    },
    {
      id: "3",
      name: "Toyota HiAce Commuter",
      category: "Minibus",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop",
      capacity: "14-15 Orang",
      transmission: "Manual",
      pricePerDay: "Rp 1.200.000",
      includes: ["Driver Khusus Rombongan", "BBM / Petrol", "Durasi 10-12 Jam", "Bagasi Luas & Legroom Lega"],
      isBestSeller: false,
    },
    {
      id: "4",
      name: "Toyota Alphard / Vellfire",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop",
      capacity: "5-6 Orang",
      transmission: "Matic",
      pricePerDay: "Rp 2.500.000",
      includes: ["VIP Professional Driver", "BBM / Petrol", "Durasi 10-12 Jam", "Pilot Seat Premium"],
      isBestSeller: false,
    },
  ];

  const filteredCars =
    activeCategory === "all"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  const whatsappNumber = "6281234567890";

  return (
    <section id="sewa-mobil" className="py-20 bg-slate-950 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2">
              <Car className="w-4 h-4" />
              Layanan Sewa Mobil + Driver
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Armada Prima & Driver Berlisensi
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-2xl border border-white/10 self-start">
            {[
              { id: "all", label: "Semua Armada" },
              { id: "MPV", label: "Family MPV" },
              { id: "Minibus", label: "Grup / HiAce" },
              { id: "Luxury", label: "VIP Luxury" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeCategory === tab.id
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-slate-900/60 rounded-3xl border border-white/10 overflow-hidden flex flex-col hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1.5 backdrop-blur-sm"
            >
              {/* Image & Badges */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {car.isBestSeller && (
                  <span className="absolute top-4 left-4 bg-amber-400 text-slate-950 text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-md">
                    Terfavorit
                  </span>
                )}
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {car.name}
                  </h3>

                  {/* Specs Pill */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-5">
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      {car.capacity}
                    </span>
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      <Fuel className="w-3.5 h-3.5 text-teal-400" />
                      {car.transmission}
                    </span>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Fasilitas Sudah Termasuk:
                    </span>
                    {car.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium block">
                      Harga / 12 Jam
                    </span>
                    <span className="text-xl font-extrabold text-amber-400">
                      {car.pricePerDay}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Halo Prima Bali Tour, saya ingin menyewa mobil: ${car.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all duration-300 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/30"
                  >
                    <span>Sewa Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Note Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <span>
              <strong>Garansi Kenyamanan:</strong> Seluruh mobil telah melalui disinfeksi, servis rutin resmi, dan pengemudi telah lulus seleksi standar pelayanan pariwisata.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}