"use client";

import React from "react";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Clock, 
  Car, 
  Smile, 
  Sparkles 
} from "lucide-react";

export default function TrustSection() {
  // Data Statistik Kunci
  const stats = [
    {
      id: 1,
      icon: Users,
      value: "15.000+",
      label: "Wisatawan Puas",
      description: "Melayani wisatawan lokal & mancanegara",
    },
    {
      id: 2,
      icon: Award,
      value: "10+ Thn",
      label: "Pengalaman",
      description: "Ahli dalam rute & budaya Bali",
    },
    {
      id: 3,
      icon: Smile,
      value: "4.9/5.0",
      label: "Rating Ulasan",
      description: "Berdasarkan review Google & TripAdvisor",
    },
    {
      id: 4,
      icon: Car,
      value: "50+",
      label: "Armada Terbaru",
      description: "Kendaraan bersih, prima & terawat",
    },
  ];

  // Data Nilai Keunggulan (Value Propositions)
  const features = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Jaminan Harga Transparan",
      description: "Tanpa biaya tersembunyi. Apa yang Anda lihat di penawaran adalah harga bersih yang Anda bayar.",
      color: "from-emerald-500/20 to-teal-500/5",
      iconColor: "text-emerald-400",
    },
    {
      id: 2,
      icon: Clock,
      title: "Layanan & Layanan 24/7",
      description: "Tim customer service dan driver kami siap membantu kebutuhan perjalanan Anda kapan saja.",
      color: "from-amber-500/20 to-orange-500/5",
      iconColor: "text-amber-400",
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Driver & Guide Lokal Lisensi",
      description: "Ramah, berpengalaman, dan tahu spot-spot tersembunyi (hidden gems) paling estetis di Bali.",
      color: "from-teal-500/20 to-cyan-500/5",
      iconColor: "text-teal-400",
    },
  ];

  return (
    <section className="relative bg-slate-950 py-20 overflow-hidden border-b border-white/10">
      {/* Background Decorator / Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Key Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col items-center text-center hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-emerald-400 mt-1">
                  {stat.label}
                </span>
                <p className="text-xs text-slate-400 mt-2 font-light">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2. Section Header: Value Proposition */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
            Mengapa Memilih Kami
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Pengalaman Liburan di Bali yang Aman, Nyaman, dan Tanpa Khawatir
          </p>
        </div>

        {/* 3. Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`p-8 rounded-3xl bg-gradient-to-b ${feature.color} border border-white/10 backdrop-blur-md flex flex-col items-start hover:border-white/20 transition-all duration-300 group`}
              >
                <div className={`p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 ${feature.iconColor} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}