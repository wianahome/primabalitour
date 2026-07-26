"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Waves, ArrowRight, Star } from "lucide-react";

export default function HeroSnorkeling() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070" // Gambar underwater snorkeling
          alt="Snorkeling di Bali"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse-slow brightness-75"
        />
        {/* Gradient Overlay untuk keterbacaan teks */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md mb-6"
        >
          <Waves className="w-4 h-4 text-cyan-400" />
          <span className="text-xs sm:text-sm font-medium text-cyan-200 uppercase tracking-wider">
            Pengalaman Snorkeling Terbaik di Bali
          </span>
        </motion.div>

        {/* Headline Utama */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight"
        >
          Jelajahi Pesona Surga Bawah Laut <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Bali</span>
        </motion.h1>

        {/* Subtitle / Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
        >
          Berenang bersama Ikan Pari Manta di Nusa Penida, temukan terumbu karang warna-warni di Blue Lagoon, atau jelajahi bangkai kapal bersejarah di Tulamben.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#paket-snorkeling"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95"
          >
            Pilih Paket Tour
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#lokasi"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white font-medium hover:bg-slate-700/80 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Compass className="w-5 h-5 text-cyan-400" />
            Lihat Spot Populer
          </Link>
        </motion.div>

        {/* Social Proof / Key Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl w-full"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Star className="w-5 h-5 fill-cyan-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">4.9/5.0</p>
              <p className="text-xs text-slate-400">1,200+ Review Pasien</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="text-lg font-black">100%</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Pemandu Lokal</p>
              <p className="text-xs text-slate-400">Lisensi & Berpengalaman</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="text-lg font-black">GEAR</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Alat Lengkap</p>
              <p className="text-xs text-slate-400">Steril & Berkualitas</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="text-lg font-black">FREE</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Dokumentasi</p>
              <p className="text-xs text-slate-400">Foto & Video Go Pro</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}