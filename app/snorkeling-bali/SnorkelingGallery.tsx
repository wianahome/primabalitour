"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Maximize2, X, MapPin } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: "all" | "nusa-penida" | "blue-lagoon" | "tulamben";
  src: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Berenang Bersama Manta Ray",
    location: "Manta Bay, Nusa Penida",
    category: "nusa-penida",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
  },
  {
    id: "2",
    title: "Terumbu Karang Warna-Warni",
    location: "Blue Lagoon, Padangbai",
    category: "blue-lagoon",
    src: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1200",
  },
  {
    id: "3",
    title: "Eksplorasi Bangkai Kapal PD II",
    location: "USAT Liberty Wreck, Tulamben",
    category: "tulamben",
    src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1200",
  },
  {
    id: "4",
    title: "Kawanan Ikan Tropis",
    location: "Gamat Bay, Nusa Penida",
    category: "nusa-penida",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
  },
  {
    id: "5",
    title: "Keindahan Air Jernih Blue Lagoon",
    location: "Tanjung Jepun, Padangbai",
    category: "blue-lagoon",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
  },
  {
    id: "6",
    title: "Penyu Laut di Terumbu Karang",
    location: "Coral Garden, Tulamben",
    category: "tulamben",
    src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=1200",
  },
];

const categories = [
  { id: "all", label: "Semua Foto" },
  { id: "nusa-penida", label: "Nusa Penida" },
  { id: "blue-lagoon", label: "Blue Lagoon" },
  { id: "tulamben", label: "Tulamben" },
];

export default function SnorkelingGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Camera className="w-3.5 h-3.5" />
            Dokumentasi Wisatawan
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Bawah Laut</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Intip keseruan dan momen indahnya pemandangan bawah laut Bali yang diabadikan langsung oleh peserta tour kami.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-800 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Info Text & Icon */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="p-2.5 rounded-full bg-slate-900/80 text-cyan-400 backdrop-blur-md">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-950 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="relative h-[60vh] sm:h-[70vh] w-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Modal Caption */}
                <div className="p-6 bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-sm text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      {selectedImage.location}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const text = `Halo, saya tertarik dengan lokasi snorkeling di *${selectedImage.location}* (${selectedImage.title})`;
                      window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:from-cyan-400 hover:to-teal-400 transition-all text-sm shadow-md"
                  >
                    Tanyakan Spot Ini
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}