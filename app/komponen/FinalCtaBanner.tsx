"use client";

import React from "react";
import Image from "next/image";
import { PhoneCall, Sparkles, ShieldCheck, ArrowRight, Clock } from "lucide-react";

export default function FinalCtaBanner() {
  const whatsappNumber = "6281234567890";
  const whatsappMessage = encodeURIComponent(
    "Halo Prima Bali Tour, saya ingin konsultasi dan pesan paket liburan Bali."
  );

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-b border-white/10">
      {/* Decorative Glow Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/15 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl backdrop-blur-xl">
          
          {/* Subtle Background Pattern / Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop"
              alt="Bali Texture Background"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Badge Top */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Rencanakan Liburan Tanpa Ribet Sekarang</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Siap Menikmati Liburan Impian di <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Pulau Bali?</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-10">
              Jangan biarkan momen liburan Anda terganggu oleh urusan transportasi dan rute. Serahkan pada <strong>Prima Bali Tour</strong>, dan nikmati perjalanan yang nyaman, aman, serta berkesan.
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary CTA: WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-base transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 flex items-center justify-center gap-3 group"
              >
                <PhoneCall className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Konsultasi Gratis via WhatsApp</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Catalog/Detail */}
              <a
                href="#paket"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-base transition-all duration-300 backdrop-blur-md flex items-center justify-center"
              >
                Lihat Semua Paket
              </a>
            </div>

            {/* Micro-Trust Guarantees */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 font-light">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Respon Cepat &lt; 5 Menit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garansi Layanan Terbaik</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}