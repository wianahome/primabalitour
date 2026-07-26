"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("1"); // FAQ pertama terbuka secara default

  const faqs: FaqItem[] = [
    {
      id: "1",
      question: "Bagaimana cara melakukan pemesanan paket tour atau sewa mobil?",
      answer:
        "Pemesanan sangat mudah! Anda cukup memilih paket tour atau mobil yang diinginkan, lalu klik tombol 'Pesan Cepat' atau 'Sewa Sekarang' untuk terhubung langsung dengan Tim Admin kami via WhatsApp. Kami akan mengonfirmasi ketersediaan dan detail perjalanan Anda.",
    },
    {
      id: "2",
      question: "Apakah harga yang tertera sudah termasuk Driver dan BBM?",
      answer:
        "Ya, benar! Semua tarif sewa mobil harian maupun paket tour di Prima Bali Tour sudah bersifat All-In (termasuk Driver ramah berpengalaman & BBM), kecuali disebutkan secara khusus untuk tol atau parkir di beberapa tempat.",
    },
    {
      id: "3",
      question: "Bagaimana sistem pembayaran dan deposit (DP)?",
      answer:
        "Untuk mengamankan jadwal armada dan guide, kami mengenakan DP (Down Payment) sebesar 20% - 30% dari total transaksi melalui transfer bank resmi. Pelunasan sisa pembayaran dapat dilakukan secara tunai ke driver atau transfer saat tiba di Bali.",
    },
    {
      id: "4",
      question: "Bagaimana jika jadwal penerbangan saya delay atau berubah?",
      answer:
        "Jangan khawatir! Cukup infokan nomor penerbangan dan perubahan jadwal Anda kepada kami via WhatsApp secepatnya. Tim penjemputan kami akan menyesuaikan waktu penjemputan di Bandara I Gusti Ngurah Rai tanpa biaya tambahan.",
    },
    {
      id: "5",
      question: "Apakah saya bisa mengubah rute destinasi (Custom Itinerary)?",
      answer:
        "Tentu saja! Kami sangat fleksibel. Anda bisa mendiskusikan rute tempat wisata impian Anda bersama kami sebelum perjalanan dimulai atau langsung berdiskusi dengan driver saat hari-H.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappNumber = "6281234567890";

  return (
    <section id="faq" className="py-20 bg-slate-900 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 inline-flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Pertanyaan Umum
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sering Ditanyakan (FAQ)
          </p>
          <p className="text-slate-400 text-sm mt-3 font-light max-w-xl mx-auto">
            Temukan jawaban lengkap mengenai layanan, metode pembayaran, dan kenyamanan perjalanan Anda bersama Prima Bali Tour.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-950 border-emerald-500/50 shadow-lg shadow-emerald-500/5"
                    : "bg-slate-950/50 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Accordion Header / Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-white/5 text-emerald-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-emerald-500/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Body / Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 text-center bg-slate-950 p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-white">
              Punya Pertanyaan Lain yang Belum Terjawab?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Tim Customer Service kami siap melayani Anda 24 jam sehari.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Halo Prima Bali Tour, saya ingin bertanya lebih lanjut mengenai layanan tour."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all duration-300 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Tanyakan via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}