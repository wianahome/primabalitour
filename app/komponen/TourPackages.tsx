"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

// Tipe Data untuk Paket Tour
interface PackageItem {
  id: string;
  title: string;
  category: "day-trip" | "honeymoon" | "adventure";
  image: string;
  duration: string;
  location: string;
  rating: number;
  reviewsCount: number;
  price: string;
  highlights: string[];
  isPopular?: boolean;
}

export default function TourPackages() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const packages: PackageItem[] = [
    {
      id: "1",
      title: "Exotic Nusa Penida Island Tour",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hari (Full Day)",
      location: "Nusa Penida, Bali",
      rating: 4.9,
      reviewsCount: 320,
      price: "Rp 650.000",
      highlights: ["Kelingking Beach", "Broken Beach", "Angel's Billabong", "Speedboat PP Included"],
      isPopular: true,
    },
    {
      id: "2",
      title: "Romantic Honeymoon Package 3D2N",
      category: "honeymoon",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
      duration: "3 Hari 2 Malam",
      location: "Ubud & Seminyak",
      rating: 5.0,
      reviewsCount: 185,
      price: "Rp 3.850.000",
      highlights: ["Private Villa + Pool", "Candlelight Dinner", "Flower Spa Session", "Private Transport"],
      isPopular: true,
    },
    {
      id: "3",
      title: "Ubud Cultural & Waterfall Tour",
      category: "day-trip",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hari (Full Day)",
      location: "Ubud, Gianyar",
      rating: 4.8,
      reviewsCount: 240,
      price: "Rp 500.000",
      highlights: ["Tegalalang Rice Terrace", "Tegenungan Waterfall", "Monkey Forest", "Luwak Coffee Testing"],
      isPopular: false,
    },
    {
      id: "4",
      title: "Bedugul & Sunset Tanah Lot Tour",
      category: "day-trip",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Hari (Full Day)",
      location: "Tabanan & Bedugul",
      rating: 4.9,
      reviewsCount: 195,
      price: "Rp 550.000",
      highlights: ["Pura Ulun Danu Bratan", "Handara Gate", "Wanagiri Hidden Hill", "Sunset Tanah Lot"],
      isPopular: false,
    },
    {
      id: "5",
      title: "Mount Batur Sunrise Trekking",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop",
      duration: "12 Jam (Dini Hari)",
      location: "Kintamani, Bangli",
      rating: 4.9,
      reviewsCount: 410,
      price: "Rp 450.000",
      highlights: ["Sunrise Above Clouds", "Local Guide & Safety Gear", "Breakfast on Peak", "Natural Hot Spring"],
      isPopular: false,
    },
    {
      id: "6",
      title: "Uluwatu Sunset & Kecak Dance",
      category: "day-trip",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
      duration: "Half Day (Sore)",
      location: "Uluwatu, Badung",
      rating: 4.8,
      reviewsCount: 280,
      price: "Rp 400.000",
      highlights: ["Pura Luhur Uluwatu", "Tiket Tari Kecak Included", "Jimbaran Seafood Dinner", "Private Car"],
      isPopular: false,
    },
  ];

  // Filter paket berdasarkan tab aktif
  const filteredPackages =
    activeTab === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === activeTab);

  const whatsappNumber = "6281234567890";

  return (
    <section id="paket" className="py-20 bg-slate-900 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              Pilihan Wisata Terfavorit
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Paket Tour Populer Bali
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-950 p-1.5 rounded-2xl border border-white/10 self-start">
            {[
              { id: "all", label: "Semua Paket" },
              { id: "day-trip", label: "Day Trip" },
              { id: "honeymoon", label: "Honeymoon" },
              { id: "adventure", label: "Petualangan" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-950 rounded-3xl border border-white/10 overflow-hidden flex flex-col hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl"
            >
              {/* Image & Badge Wrapper */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* Popular Badge */}
                {pkg.isPopular && (
                  <span className="absolute top-4 left-4 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Terlaris
                  </span>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 text-xs text-white">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-bold">{pkg.rating}</span>
                  <span className="text-slate-400">({pkg.reviewsCount})</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location & Duration */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {pkg.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-400" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {pkg.title}
                  </h3>

                  {/* Highlights List */}
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                      Mulai Dari
                    </span>
                    <span className="text-lg font-extrabold text-amber-400">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 font-normal"> /pax</span>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Halo Prima Bali Tour, saya berminat memesan paket: ${pkg.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-slate-950 text-white font-semibold text-xs transition-all duration-300 border border-white/10 hover:border-emerald-500"
                  >
                    <span>Pesan Cepat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}