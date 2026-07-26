"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Calendar, MapPin, Sparkles, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Tambahkan logika navigasi atau filter pencarian di sini
    console.log("Searching for:", { destination, date });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-16">
      {/* 1. Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop"
          alt="Prima Bali Tour - Pura Ulun Danu Bratan"
          fill
          priority
          className="object-cover object-center scale-105 transform animate-pulse-slow"
        />
        {/* Dark & Gradient Overlay untuk Kontras Teks */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40" />
      </div>

      {/* Decorative Blur Effect */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        
        {/* Badge Intro */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-emerald-300 text-sm font-medium animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Jelajahi Surga Tropis Bersama Prima Bali Tour</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl">
          Nikmati Momen Unforgettable di <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-400 to-teal-300">Pulau Dewata</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
          Paket wisata eksklusif, sewa mobil terpercaya, dan keindahan budaya Bali yang disesuaikan khusus untuk perjalanan impian Anda.
        </p>

        {/* 3. Interactive Search Bar */}
        <div className="w-full max-w-4xl mt-10">
          <form
            onSubmit={handleSearch}
            className="p-3 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-3 transition-all duration-300 focus-within:border-emerald-400/50"
          >
            {/* Input Destinasi */}
            <div className="flex items-center gap-3 w-full px-4 py-3 bg-white/10 rounded-xl sm:rounded-full border border-white/10 sm:border-none">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs text-slate-300 font-medium">Destinasi / Tour</label>
                <input
                  type="text"
                  placeholder="Nusa Penida, Ubud, Uluwatu..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-white/20" />

            {/* Input Tanggal */}
            <div className="flex items-center gap-3 w-full px-4 py-3 bg-white/10 rounded-xl sm:rounded-full border border-white/10 sm:border-none">
              <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left w-full">
                <label className="block text-xs text-slate-300 font-medium">Tanggal Perjalanan</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-white text-sm focus:outline-none [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Tombol Cari */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl sm:rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-2 shrink-0 group"
            >
              <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Cari Paket</span>
            </button>
          </form>
        </div>

        {/* 4. Social Proof / Features Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span><strong>4.9/5.0</strong> Rating Pelanggan</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garansi Layanan Terbaik</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Driver / Guide Berpengalaman</span>
          </div>
        </div>

      </div>
    </section>
  );
}