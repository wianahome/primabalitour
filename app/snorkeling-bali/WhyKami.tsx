"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Camera, 
  UserCheck, 
  Sparkles, 
  HeartHandshake, 
  LifeBuoy 
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string;
}

const features: Feature[] = [
  {
    icon: UserCheck,
    title: "Pemandu Lokal Berlisensi",
    description: "Didampingi instruktur lokal berpengalaman yang paham betul titik spot terbaik, kondisi arus laut, dan keamanan di setiap lokasi.",
    highlight: "100% Berlisensi",
  },
  {
    icon: Camera,
    title: "Gratis Dokumentasi GoPro HD",
    description: "Abadikan momen indah di bawah laut tanpa biaya tambahan. File foto & video resolusi tinggi langsung dikirim ke HP Anda.",
    highlight: "Foto & Video Gratis",
  },
  {
    icon: ShieldCheck,
    title: "Peralatan Steril & Berkualitas",
    description: "Masker, snorkel, fin, dan jaket pelampung selalu dibersihkan dengan disinfektan ramah lingkungan setelah setiap penggunaan.",
    highlight: "Standar Keamanan Tinggi",
  },
  {
    icon: HeartHandshake,
    title: "Ramah Pemula & Non-Perenang",
    description: "Belum pernah snorkeling atau tidak bisa berenang? Tim kami akan membimbing step-by-step hingga Anda nyaman di air.",
    highlight: "Pasti Bisa & Aman",
  },
  {
    icon: LifeBuoy,
    title: "Asuransi Perjalanan Termasuk",
    description: "Keselamatan Anda adalah prioritas utama kami. Setiap peserta tercover asuransi perlindungan diri selama aktivitas berlangsung.",
    highlight: "Proteksi Penuh",
  },
  {
    icon: Sparkles,
    title: "Garansi Kepuasan / Garansi Uang Kembali",
    description: "Layanan privat atau semi-privat yang fleksibel, tanpa rombongan terlalu padat agar pengalaman Anda tetap eksklusif.",
    highlight: "Pengalaman Eksklusif",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Keunggulan Layanan Kami
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Prima Bali Tour?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Kami memastikan petualangan snorkeling Anda di Bali berjalan aman, nyaman, dan meninggalkan kenangan indah yang tak terlupakan.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.highlight && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700/60">
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}