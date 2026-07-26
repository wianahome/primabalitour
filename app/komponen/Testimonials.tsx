"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, MessageSquare } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string; // misal: "Family Vacation", "Honeymoon Couple", "Corporate Trip"
  location: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  tourTaken: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: "1",
      name: "Budi Santoso & Keluarga",
      role: "Family Vacation",
      location: "Jakarta",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      date: "2 Minggu yang lalu",
      comment:
        "Sangat puas liburan 4 hari 3 malam bersama Prima Bali Tour. Driver Bli Wayan sangat ramah, paham rute bebas macet, dan mobil Innova Reborn-nya sangat bersih. Anak-anak senang sekali pas trip Nusa Penida!",
      tourTaken: "Custom Family Tour 4D3N",
    },
    {
      id: "2",
      name: "Clara & David",
      role: "Honeymoon Trip",
      location: "Surabaya",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      date: "1 Bulan yang lalu",
      comment:
        "Paket honeymoon-nya juara! Candlelight dinner di Jimbaran romantis banget dan vila di Ubud sesuai ekspektasi. Pelayanan fast respon dari admin WhatsApp. Terima kasih Prima Bali Tour!",
      tourTaken: "Romantic Honeymoon Package",
    },
    {
      id: "3",
      name: "Rian Prasetya",
      role: "Group & Corporate Trip",
      location: "Bandung",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      date: "1 Bulan yang lalu",
      comment:
        "Sewa HiAce untuk rombongan kantor 12 orang. Driver tepat waktu jemput di Bandara Ngurah Rai, rekomendasi tempat makan lokalnya enak-enak dan harganya bersahabat. Rekomendasi banget!",
      tourTaken: "Sewa HiAce + Driver 3 Hari",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 border-b border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Google Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Ulasan Wisatawan
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Apa Kata Mereka Tentang Kami?
            </p>
          </div>

          {/* Google Review Trust Badge */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-white/10 flex items-center gap-4 self-start shadow-xl">
            <div className="flex flex-col items-center justify-center border-r border-white/10 pr-4">
              <span className="text-2xl font-black text-white">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                <span>Google Reviews</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <p className="text-[11px] text-slate-400">
                Berdasarkan <strong>500+ ulasan asli</strong> wisatawan
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/80 rounded-3xl border border-white/10 p-7 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 relative group"
            >
              <Quote className="w-10 h-10 text-white/5 absolute top-6 right-6 group-hover:text-emerald-500/10 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light italic">
                  "{item.comment}"
                </p>
              </div>

              {/* User Info Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-emerald-400/30">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tour Taken Tag */}
              <div className="mt-4 pt-2">
                <span className="inline-block text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  Trip: {item.tourTaken}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}