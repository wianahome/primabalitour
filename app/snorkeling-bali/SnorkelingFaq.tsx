"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Saya tidak bisa berenang, apakah aman untuk ikut snorkeling?",
    answer: "Sangat aman! Kami menyediakan jaket pelampung (life jacket) berkualitas tinggi dan pemandu profesional yang akan mendampingi Anda secara personal di dalam air dari awal hingga akhir.",
  },
  {
    id: "faq-2",
    question: "Apakah foto dan video bawah laut (GoPro) benar-benar gratis?",
    answer: "Ya, 100% gratis tanpa biaya tambahan! Pemandu kami akan mengambil foto dan video aksi Anda selama snorkeling menggunakan kamera GoPro. File HD akan dikirimkan langsung ke smartphone Anda di hari yang sama.",
  },
  {
    id: "faq-3",
    question: "Apa saja yang perlu saya bawa saat tour snorkeling?",
    answer: "Anda hanya perlu membawa pakaian renang/baju ganti, tabir surya (sunscreen), kacamata hitam, dan pakaian santai. Semua peralatan teknis snorkeling seperti masker, snorkel, fin, dan pelampung sudah kami sediakan.",
  },
  {
    id: "faq-4",
    question: "Bagaimana jika cuaca buruk atau gelombang laut tinggi?",
    answer: "Keamanan Anda adalah prioritas nomor satu. Jika cuaca atau kondisi laut dinyatakan tidak aman oleh pemandu/syahbandar, jadwal dapat direschedule atau dana deposit Anda akan dikembalikan penuh (100% refund).",
  },
  {
    id: "faq-5",
    question: "Berapa lama durasi kegiatan snorkeling?",
    answer: "Durasi kegiatan di dalam air berkisar antara 2 hingga 3 jam tergantung paket yang dipilih. Untuk paket Nusa Penida, total durasi tour adalah Full Day (sekitar 7-8 jam termasuk perjalanan fastboat PP).",
  },
  {
    id: "faq-6",
    question: "Apakah ada fasilitas ruang bilas dan loker penyimpanan barang?",
    answer: "Ya, seluruh basecamp tempat titik kumpul kami di Blue Lagoon, Nusa Penida, maupun Tulamben sudah dilengkapi dengan fasilitas toilet, kamar mandi shower untuk bilas, dan tempat penyimpanan barang yang aman.",
  },
];

export default function SnorkelingFAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // FAQ pertama terbuka secara default

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleContactWA = () => {
    const text = "Halo, saya punya pertanyaan mengenai paket snorkeling yang tidak ada di daftar FAQ.";
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Pertanyaan Umum
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Sering Ditanyakan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">(FAQ)</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Punya pertanyaan sebelum memesan? Temukan jawaban lengkapnya di bawah ini.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-500/5"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-100 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-cyan-500 text-slate-950 rotate-180"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-800/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900/80 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h3 className="text-lg font-bold text-white mb-1">
              Punya Pertanyaan Lain?
            </h3>
            <p className="text-sm text-slate-400">
              Tim CS kami siap membantu menjawab detail rencana trip Anda.
            </p>
          </div>
          <button
            onClick={handleContactWA}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shrink-0 active:scale-95 shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Tanya via WhatsApp
          </button>
        </motion.div>

      </div>
    </section>
  );
}