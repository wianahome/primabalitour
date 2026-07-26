"use client";

import { motion } from "framer-motion";
import { Check, Clock, MapPin, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

interface PackageItem {
  id: string;
  title: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  duration: string;
  location: string;
  isPopular?: boolean;
  features: string[];
}

const packages: PackageItem[] = [
  {
    id: "blue-lagoon",
    title: "Blue Lagoon & Tanjung Jepun",
    tagline: "Cocok untuk pemula & keluarga dengan ombak yang tenang.",
    price: "Rp 350.000",
    originalPrice: "Rp 500.000",
    duration: "2 - 3 Jam",
    location: "Padangbai, Karangasem",
    isPopular: false,
    features: [
      "Perahu tradisional (Jukung)",
      "Peralatan snorkeling lengkap (Mask & Fin)",
      "Pemandu snorkeling lokal berpengalaman",
      "Dokumentasi Foto/Video Under Water (GoPro)",
      "Makan siang bento & air mineral",
      "Handuk & fasilitas ruang bilas",
    ],
  },
  {
    id: "nusa-penida",
    title: "Nusa Penida Manta Spot",
    tagline: "Pengalaman terbaik berenang bersama Ikan Pari Manta Raksasa.",
    price: "Rp 750.000",
    originalPrice: "Rp 950.000",
    duration: "Full Day (8 Jam)",
    location: "Nusa Penida (Manta Bay & Gamat Bay)",
    isPopular: true,
    features: [
      "Tiket Fastboat PP (Sanur - Nusa Penida)",
      "Boat Snorkeling",
      "4 Spot: Manta Bay, Gamat Bay, Wall Point, SD Point",
      "Peralatan snorkeling & jaket pelampung",
      "Dokumentasi GoPro (HD Quality)",
      "Makan siang di Restoran lokal Penida",
      "Asuransi perjalanan",
    ],
  },
  {
    id: "tulamben-wreck",
    title: "Tulamben USAT Liberty Wreck",
    tagline: "Eksplorasi bangkai kapal bersejarah PD II dan terumbu karang unik.",
    price: "Rp 450.000",
    originalPrice: "Rp 600.000",
    duration: "Half Day (4 - 5 Jam)",
    location: "Tulamben, Bali Timur",
    isPopular: false,
    features: [
      "Snorkeling dari bibir pantai (Shore Entry)",
      "Pemandu khusus biota laut",
      "Peralatan snorkeling standar internasional",
      "Foto & Video GoPro underwater",
      "Makan siang & minuman segar",
      "Fasilitas loker & shower",
    ],
  },
];

export default function SnorkelingPackages() {
  const handleBooking = (packageName: string) => {
    const text = `Halo, saya ingin bertanya/booking paket snorkeling: *${packageName}*`;
    const encodedText = encodeURIComponent(text);
    // Ganti nomor WhatsApp berikut sesuai kebutuhan
    window.open(`https://wa.me/6281234567890?text=${encodedText}`, "_blank");
  };

  return (
    <section id="paket-snorkeling" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Pilihan Paket Wisata
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Paket Snorkeling <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Favorit di Bali</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Semua paket sudah termasuk peralatan lengkap, pemandu berpengalaman, dan dokumentasi foto/video bawah laut gratis!
          </motion.p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl flex flex-col justify-between p-8 transition-all duration-300 ${
                pkg.isPopular
                  ? "bg-slate-900/90 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/10 scale-105 lg:-translate-y-2"
                  : "bg-slate-900/50 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-extrabold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md">
                  Paling Populer
                </div>
              )}

              <div>
                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{pkg.tagline}</p>

                {/* Location & Duration Meta */}
                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-300 mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  {pkg.originalPrice && (
                    <span className="text-xs text-slate-500 line-through mr-2 font-medium">
                      {pkg.originalPrice}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-slate-400 text-xs font-normal">/ orang</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Sudah Termasuk:
                  </p>
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <button
                onClick={() => handleBooking(pkg.title)}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95 ${
                  pkg.isPopular
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 hover:from-cyan-400 hover:to-teal-400 shadow-cyan-500/25"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                Pesan via WhatsApp
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            <span className="text-sm text-slate-300">Garansi Layanan & Peralatan Steril</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <UserCheck className="w-6 h-6 text-teal-400 shrink-0" />
            <span className="text-sm text-slate-300">Pemandu Lokal Berlisensi Resmi</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6 text-emerald-400 shrink-0" />
            <span className="text-sm text-slate-300">Gratis File Dokumentasi HD GoPro</span>
          </div>
        </div>

      </div>
    </section>
  );
}