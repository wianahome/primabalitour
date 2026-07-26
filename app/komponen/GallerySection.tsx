"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, MapPin, Maximize2, X } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  spanClass?: string; // Untuk variasi ukuran grid (Masonry effect)
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Keindahan Pura Ulun Danu Bratan",
      location: "Bedugul, Tabanan",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      spanClass: "md:col-span-2 md:row-span-2",
    },
    {
      id: "2",
      title: "Tegalalang Rice Terrace",
      location: "Ubud, Gianyar",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
      spanClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: "3",
      title: "Kelingking Beach Beachfront",
      location: "Nusa Penida",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
      spanClass: "md:col-span-1 md:row-span-2",
    },
    {
      id: "4",
      title: "Tari Kecak Uluwatu Sunset",
      location: "Uluwatu, Badung",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800&auto=format&fit=crop",
      spanClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: "5",
      title: "Matahari Terbit Gunung Batur",
      location: "Kintamani, Bangli",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
      spanClass: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="galeri" className="py-20 bg-slate-950 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 inline-flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Dokumentasi Wisatawan
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Momen Unforgettable Bersama Prima Bali Tour
          </p>
          <p className="text-slate-400 text-sm mt-3 font-light">
            Sekilas potret keindahan Pulau Dewata dan kebahagiaan para kustomer kami selama perjalanan trip.
          </p>
        </div>

        {/* Masonry Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-emerald-500/50 transition-all duration-500 ${
                item.spanClass || ""
              }`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Expand Icon Badge */}
              <div className="absolute top-4 right-4 bg-slate-900/60 backdrop-blur-md p-2 rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Content Description */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 mb-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal View */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-slate-950/80 p-2.5 rounded-full border border-white/20 text-white hover:text-emerald-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-[60vh] sm:h-[70vh] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10">
              <div>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedImage.location}
                </span>
                <h4 className="text-xl font-bold text-white">
                  {selectedImage.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="self-start sm:self-auto px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}