// src/components/FleetPricingSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Users, ShieldCheck, Check, Sparkles, MessageCircle } from "lucide-react";

export interface FleetPackage {
  id: string;
  name: string;
  capacity: string;
  image: string;
  price12Hours: string;
  overtimePerHour: string;
  includes: string[];
  features: string[];
  isPopular?: boolean;
}

const fleetData: FleetPackage[] = [
  {
    id: "hiace-commuter",
    name: "Toyota Hiace Commuter",
    capacity: "15 Penumpang",
    image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1786052427/sewa-hiace-commuter-bali_xgykjq.webp",
    price12Hours: "Rp1.200.000",
    overtimePerHour: "Rp108.000",
    includes: ["Termasuk Supir Professional", "Termasuk BBM (Bahan Bakar)"],
    features: [
      "Kapasitas Luas 15 Seat",
      "Full AC Dual Zone Cold",
      "Reclining Seats Comfortable",
      "Audio & USB Port Charger",
    ],
    isPopular: false,
  },
  {
    id: "hiace-premio",
    name: "Toyota Hiace Premio",
    capacity: "13 Penumpang",
    image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1786052275/sewa-hiace-premio-bali_xr9vkf.webp",
    price12Hours: "Rp1.500.000",
    overtimePerHour: "Rp125.000",
    includes: ["Termasuk Supir Professional", "Termasuk BBM (Bahan Bakar)"],
    features: [
      "Kapasitas Mewah 13 Seat",
      "Kabin Senyap & Interior Executive",
      "Legroom Ekstra Luas & Nyaman",
      "Suspensi Lebih Halus",
      "Audio Premium & Charger Port",
    ],
    isPopular: true,
  },
];

export const FleetPricingSection: React.FC = () => {
  const waNumber = "6282339616319"; // Ganti dengan nomor WhatsApp aktif Anda

  const handleBooking = (fleetName: string, price: string) => {
    const message = encodeURIComponent(
      `Halo Admin, saya ingin pesan *${fleetName}* (${price} / 12 jam). Mohon info ketersediaan unit untuk di Bali.`
    );
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="harga" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Pilihan Armada Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Harga Sewa Hiace Bali All-In
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Harga transparan tanpa biaya tersembunyi. Sudah termasuk supir berpengalaman dan BBM selama 12 jam per hari.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {fleetData.map((fleet) => (
            <div
              key={fleet.id}
              className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between relative ${
                fleet.isPopular
                  ? "border-blue-500 shadow-xl ring-2 ring-blue-500/20"
                  : "border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Badge Paling Laris */}
              {fleet.isPopular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Paling Laris</span>
                </div>
              )}

              {/* Card Top: Image & Title */}
              <div>
                <div className="relative bg-gradient-to-b from-slate-100 to-white p-6 flex justify-center items-center h-64 border-b border-slate-100">
                  <div className="relative w-full h-full">
                    <Image
                      src={fleet.image}
                      alt={`Sewa ${fleet.name} Bali`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">{fleet.name}</h3>
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                        <Users className="w-3.5 h-3.5 text-blue-600" />
                        <span>Kapasitas: {fleet.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Price Box */}
                  <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-blue-600">
                        {fleet.price12Hours}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">/ 12 Jam</span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Termasuk Supir & BBM
                      </span>
                      <span className="text-slate-500">
                        Overtime: <strong className="text-slate-800">{fleet.overtimePerHour}</strong>/jam
                      </span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fasilitas Kendaraan</p>
                    {fleet.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => handleBooking(fleet.name, fleet.price12Hours)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                    fleet.isPopular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Pesan {fleet.name} Sekarang</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FleetPricingSection;