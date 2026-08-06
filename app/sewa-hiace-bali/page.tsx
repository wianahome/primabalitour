// src/app/page.tsx
import React from "react";
import { Metadata } from "next";

import { CheckCircle2, MapPin, Clock, HelpCircle, Phone, HeartHandshake } from "lucide-react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { FleetPricingSection } from "./FleetPricingSection";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

// SEO Metadata Optimasi Google Ads & Search
export const metadata: Metadata = {
  title: "Sewa Hiace Bali Murah All-In | Commuter & Premio + Supir BBM",
  description: "Rental Hiace Commuter & Premio murah di Bali. Termasuk supir berpengalaman & BBM. Cocok untuk tour rombongan, antar jemput bandara & event.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Fleet Pricing Section (Dari Gambar) */}
      <FleetPricingSection />

      {/* 4. Section Inclusions / Keterangan Tambahan */}
      <section id="fasilitas" className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Ketentuan Layanan Transparan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Layanan Sewa Hiace Sudah Termasuk
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kami memastikan perjalanan liburan atau dinas Anda di Bali nyaman tanpa perlu memikirkan biaya-biaya tersembunyi.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Supir Lokal Ramah & Paham Rute</h4>
                    <p className="text-xs text-slate-600">Supir profesional yang menguasai jalanan Bali & objek wisata terbaik.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">BBM (Bahan Bakar Minyak)</h4>
                    <p className="text-xs text-slate-600">Sudah mencakup konsumsi bahan bakar untuk perjalanan rute Bali standar.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Mobil Bersih & Full AC</h4>
                    <p className="text-xs text-slate-600">Unit selalu diservis berkala, dibersihkan, dan wangi sebelum penjemputan.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Catatan Penting Sewa
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300 border-l border-slate-800 pl-4">
                <li>
                  <strong className="text-white block">Durasi Pemakaian:</strong>
                  12 jam per hari. Pemakaian melebihi 12 jam dikenakan charge overtime per jam sesuai jenis kendaraan.
                </li>
                <li>
                  <strong className="text-white block">Biaya Belum Termasuk:</strong>
                  Parkir mobil, tol Bali Mandara, tiket masuk objek wisata, dan makan/tip supir (sukarela).
                </li>
                <li>
                  <strong className="text-white block">Area Penjemputan:</strong>
                  Free antar-jemput area Bandara Ngurah Rai, Kuta, Seminyak, Legian, Denpasar, Sanur, dan Jimbaran.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section id="faq" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pertanyaan Sering Diajukan (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Apakah bisa sewa Hiace Bali lepas kunci (tanpa supir)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Saat ini demi kenyamanan dan keselamatan armada, semua pemesanan Toyota Hiace Commuter dan Premio wajib include dengan supir profesional kami.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Bagaimana jika jadwal penerbangan saya delay saat penjemputan bandara?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Supir kami selalu memantau *flight number* Anda. Kami membebaskan biaya tunggu apabila ada penundaan penerbangan.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Bagaimana sistem pembayarannya?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Sangat mudah! Anda bisa melakukan pelunasan pembayaran langsung kepada supir saat selesai pemakaian atau melalui transfer bank resmi kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-base">HiaceBali Transport</p>
            <p className="mt-1">Penyedia Jasa Rental Toyota Hiace Terbaik & Terpercaya di Bali.</p>
          </div>
          <p className="text-center">
            © {new Date().getFullYear()} HiaceBali. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* 7. Floating WhatsApp Conversion Button */}
      <FloatingWhatsApp />

    </main>
  );
}