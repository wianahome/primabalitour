"use client";

import React, { useState } from "react";
import { Sparkles, Compass, Send, CheckCircle2, MapPin } from "lucide-react";

export default function CustomTripBanner() {
  const [destinationInput, setDestinationInput] = useState("");
  const [durationInput, setDurationInput] = useState("");
  const [paxInput, setPaxInput] = useState("");

  const whatsappNumber = "6281234567890";

  const handleCustomRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Halo Prima Bali Tour, saya ingin konsultasi Custom Trip Bali dengan detail berikut:
- Destinasi Impian: ${destinationInput || "Belum ditentukan"}
- Durasi: ${durationInput || "Belum ditentukan"}
- Jumlah Peserta: ${paxInput || "Belum ditentukan"}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden border-b border-white/10">
      {/* Background Decorators / Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Bebas Atur Rute Liburan Anda</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Punya Rute Wisata Impian Sendiri di <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Bali?</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Tidak perlu terikat paket kaku. Rancang tempat wisata, jam keberangkatan, dan tipe kendaraan sesuai selera Anda. Tim kami siap mengaturkan itinerary terbaik tanpa biaya tambahan!
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Fleksibel menentukan destinasi",
                  "Konsultasi itinerary Gratis",
                  "Privat Trip (Tidak digabung)",
                  "Menyesuaikan budget Anda",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Form Box Column */}
            <div className="lg:col-span-5">
              <form
                onSubmit={handleCustomRequest}
                className="bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl space-y-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">
                    Form Rencana Trip Singkat
                  </h3>
                </div>

                {/* Input Destinasi */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Destinasi / Aktivitas yang Diinginkan
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Contoh: Ubud, Sunset Dinner, Nusa Penida"
                      value={destinationInput}
                      onChange={(e) => setDestinationInput(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                    <MapPin className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
                  </div>
                </div>

                {/* Input Durasi & Pax Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Estimasi Durasi
                    </label>
                    <input
                      type="text"
                      placeholder="Misal: 3D2N / 1 Hari"
                      value={durationInput}
                      onChange={(e) => setDurationInput(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Jumlah Peserta
                    </label>
                    <input
                      type="text"
                      placeholder="Misal: 4 orang"
                      value={paxInput}
                      onChange={(e) => setPaxInput(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 group mt-2"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>Konsultasikan via WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}