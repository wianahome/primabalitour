"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare, CheckCircle2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  origin: string;
  avatar: string;
  rating: number;
  packageTaken: string;
  comment: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & David",
    role: "Pasangan Honeymoon",
    origin: "Jakarta, Indonesia",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300",
    rating: 5,
    packageTaken: "Nusa Penida Manta Spot",
    comment:
      "Pengalaman terbaik selama di Bali! Kita berhasil berenang bareng 3 pari manta raksasa di Manta Bay. Pemandunya sabar banget ngarahin aku yang awalnya agak cemas di laut. Foto dan video GoPro-nya dikirim hari itu juga dan hasilnya jernih banget!",
    date: "Mei 2026",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Solo Traveler",
    origin: "Singapura",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    rating: 5,
    packageTaken: "Tulamben USAT Liberty Wreck",
    comment:
      "As a beginner in ocean snorkeling, I felt 100% safe. Spot Tulamben keren banget, bangkai kapal PD II kelihatan jelas dari permukaan. Peralatannya bersih dan wangi, gak ada bau laut bekas orang lain. Highly recommended!",
    date: "April 2026",
  },
  {
    id: "3",
    name: "Keluarga Handoko",
    role: "Keluarga (4 Orang)",
    origin: "Surabaya, Indonesia",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300",
    rating: 5,
    packageTaken: "Blue Lagoon & Tanjung Jepun",
    comment:
      "Ajak anak-anak umur 8 dan 12 tahun snorkeling di Blue Lagoon. Arusnya sangat tenang dan ikannya ramai banget. Guide-nya standby nemenin anak-anak terus. Pelayanan dari Prima Bali Tour bintang lima!",
    date: "Juni 2026",
  },
];

export default function SnorkelingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Ulasan Wisatawan
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Apa Kata Mereka yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Sudah Snorkeling?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Lebih dari 1.200+ wisatawan telah menikmati keindahan bawah laut Bali bersama Prima Bali Tour.
          </motion.p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-slate-950/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
            
            {/* Quote Icon Accent */}
            <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-800/50 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8"
              >
                {/* Rating Stars & Package Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Paket: {current.packageTaken}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-lg sm:text-2xl text-slate-200 font-light leading-relaxed italic">
                  "{current.comment}"
                </p>

                {/* User Profile */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-500/50 shrink-0">
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {current.name}
                        </h4>
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400">
                        {current.role} • {current.origin}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-500 hidden sm:inline-block">
                    {current.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800/40">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-8 bg-cyan-400"
                        : "w-2.5 bg-slate-700 hover:bg-slate-600"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}