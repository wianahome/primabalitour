"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Waves, ArrowRight, Star } from "lucide-react";

type HeroProps = {
  dict?: any;
  lang: string;
};

export default function HeroSnorkeling({ dict, lang }: HeroProps) {
  // Safe Fallback Data untuk Dict berdasarkan Bahasa
  const heroData = dict?.snorkeling?.hero || {};

  // Teks Bawaan berdasarkan Bahasa jika Key di Dict Kosong
  const fallbackTexts = {
    badge:
      lang === "en"
        ? "Best Snorkeling Experience in Bali"
        : lang === "ja"
        ? "バリ島最高のシュノーケリング体験"
        : "Pengalaman Snorkeling Terbaik di Bali",
    title:
      lang === "en" ? (
        <>
          Discover Bali’s Underwater <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Paradise</span>
        </>
      ) : lang === "ja" ? (
        <>
          バリ島の美しき <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">水中楽園へ</span>
        </>
      ) : (
        <>
          Jelajahi Pesona Surga Bawah Laut <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Bali</span>
        </>
      ),
    subtitle:
      lang === "en"
        ? "Swim alongside Manta Rays in Nusa Penida, explore vibrant coral reefs in Blue Lagoon, or discover historical shipwrecks in Tulamben."
        : lang === "ja"
        ? "ヌサペニダで巨大マンタと泳ぎ、ブルーラグーンのカラフルなサンゴ礁やトゥランベンの歴史的な沈没船を探検しましょう。"
        : "Berenang bersama Ikan Pari Manta di Nusa Penida, temukan terumbu karang warna-warni di Blue Lagoon, atau jelajahi bangkai kapal bersejarah di Tulamben.",
    btnPackage:
      lang === "en"
        ? "Explore Packages"
        : lang === "ja"
        ? "ツアーパッケージを見る"
        : "Pilih Paket Tour",
    btnSpots:
      lang === "en"
        ? "Popular Spots"
        : lang === "ja"
        ? "人気スポットを見る"
        : "Lihat Spot Populer",
  };

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070"
          alt={
            lang === "en"
              ? "Snorkeling in Bali"
              : lang === "ja"
              ? "バリ島シュノーケリング"
              : "Snorkeling di Bali"
          }
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse-slow brightness-75"
        />
        {/* Gradient Overlay */}
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
            {heroData.badge || fallbackTexts.badge}
          </span>
        </motion.div>

        {/* Headline Utama */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight"
        >
          {heroData.title || fallbackTexts.title}
        </motion.h1>

        {/* Subtitle / Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
        >
          {heroData.subtitle || fallbackTexts.subtitle}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#paket"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95"
          >
            {heroData.btn_package || fallbackTexts.btnPackage}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#galeri"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white font-medium hover:bg-slate-700/80 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Compass className="w-5 h-5 text-cyan-400" />
            {heroData.btn_spots || fallbackTexts.btnSpots}
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
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Star className="w-5 h-5 fill-cyan-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">4.9/5.0</p>
              <p className="text-xs text-slate-400">
                {lang === "en"
                  ? "1,200+ Guest Reviews"
                  : lang === "ja"
                  ? "1,200+ レビュー"
                  : "1,200+ Review Tamu"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <span className="text-lg font-black">100%</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {lang === "en"
                  ? "Local Guide"
                  : lang === "ja"
                  ? "ローカルガイド"
                  : "Pemandu Lokal"}
              </p>
              <p className="text-xs text-slate-400">
                {lang === "en"
                  ? "Licensed & Experienced"
                  : lang === "ja"
                  ? "有資格・経験豊富"
                  : "Lisensi & Berpengalaman"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <span className="text-xs font-black tracking-tighter">GEAR</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {lang === "en"
                  ? "Full Gear"
                  : lang === "ja"
                  ? "フルギア含む"
                  : "Alat Lengkap"}
              </p>
              <p className="text-xs text-slate-400">
                {lang === "en"
                  ? "Sterilized & High Quality"
                  : lang === "ja"
                  ? "消毒済み・高品質"
                  : "Steril & Berkualitas"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <span className="text-xs font-black tracking-tighter">FREE</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {lang === "en"
                  ? "Documentation"
                  : lang === "ja"
                  ? "無料写真撮影"
                  : "Dokumentasi"}
              </p>
              <p className="text-xs text-slate-400">
                {lang === "en"
                  ? "GoPro Photos & Videos"
                  : lang === "ja"
                  ? "GoPro写真＆動画"
                  : "Foto & Video GoPro"}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}