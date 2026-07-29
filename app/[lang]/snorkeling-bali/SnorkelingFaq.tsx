"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

type FAQProps = {
  dict?: any;
  lang: string;
};

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function SnorkelingFAQ({ dict, lang }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // FAQ pertama terbuka secara default

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Data FAQ Multibahasa (ID, EN, JA)
  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question:
        lang === "en"
          ? "I cannot swim, is it safe for me to join snorkeling?"
          : lang === "ja"
          ? "泳げないのですが、シュノーケリングに参加しても safe ですか？"
          : "Saya tidak bisa berenang, apakah aman untuk ikut snorkeling?",
      answer:
        lang === "en"
          ? "Absolutely safe! We provide high-quality life jackets and experienced professional guides who will accompany you personally in the water from start to finish."
          : lang === "ja"
          ? "非常に安全です！高品質のライフジャケットとプロのガイドが付き、海に入ってから上がるまでマンツーマンでサポートいたします。"
          : "Sangat aman! Kami menyediakan jaket pelampung (life jacket) berkualitas tinggi dan pemandu profesional yang akan mendampingi Anda secara personal di dalam air dari awal hingga akhir.",
    },
    {
      id: "faq-2",
      question:
        lang === "en"
          ? "Are the underwater GoPro photos and videos really free?"
          : lang === "ja"
          ? "GoProでの水中写真・動画撮影は本当に無料ですか？"
          : "Apakah foto dan video bawah laut (GoPro) benar-benar gratis?",
      answer:
        lang === "en"
          ? "Yes, 100% free with no hidden charges! Our guide will capture your best snorkeling moments using a GoPro camera. High-definition files will be transferred directly to your smartphone on the same day."
          : lang === "ja"
          ? "はい、追加料金は一切かかりません！ガイドがGoProカメラでシュノーケリング中の様子を撮影し、HD画質のファイルを当日お客様のスマートフォンに転送いたします。"
          : "Ya, 100% gratis tanpa biaya tambahan! Pemandu kami akan mengambil foto dan video aksi Anda selama snorkeling menggunakan kamera GoPro. File HD akan dikirimkan langsung ke smartphone Anda di hari yang sama.",
    },
    {
      id: "faq-3",
      question:
        lang === "en"
          ? "What should I bring for the snorkeling tour?"
          : lang === "ja"
          ? "シュノーケリングツアーの持参 free は何ですか？"
          : "Apa saja yang perlu saya bawa saat tour snorkeling?",
      answer:
        lang === "en"
          ? "You only need to bring swimwear, a change of clothes, sunscreen, sunglasses, and a towel. All technical snorkeling equipment (mask, snorkel, fins, life jacket) is fully provided."
          : lang === "ja"
          ? "水着、着替え、日焼け止め、サングラス、タオルをお持ちください。マスク、シュノーケル、フィン、ライフジャケットなどの機材一式はすべて用意しております。"
          : "Anda hanya perlu membawa pakaian renang/baju ganti, tabir surya (sunscreen), kacamata hitam, dan pakaian santai. Semua peralatan teknis snorkeling seperti masker, snorkel, fin, dan pelampung sudah kami sediakan.",
    },
    {
      id: "faq-4",
      question:
        lang === "en"
          ? "What if the weather is bad or ocean waves are high?"
          : lang === "ja"
          ? "悪天候や高波の場合はどうなりますか？"
          : "Bagaimana jika cuaca buruk atau gelombang laut tinggi?",
      answer:
        lang === "en"
          ? "Your safety is our top priority. If the conditions are declared unsafe by authorities or our captain, we can reschedule your trip or provide a 100% full deposit refund."
          : lang === "ja"
          ? "お客様の安全が最優先です。悪天候や海洋状況により危険と判断された場合は、日程変更またはデポジット（予約金）の100%全額返金対応をいたします。"
          : "Keamanan Anda adalah prioritas nomor satu. Jika cuaca atau kondisi laut dinyatakan tidak aman oleh pemandu/syahbandar, jadwal dapat direschedule atau dana deposit Anda akan dikembalikan penuh (100% refund).",
    },
    {
      id: "faq-5",
      question:
        lang === "en"
          ? "How long is the duration of the snorkeling activity?"
          : lang === "ja"
          ? "シュノーケリングの所要時間はどれくらいですか？"
          : "Berapa lama durasi kegiatan snorkeling?",
      answer:
        lang === "en"
          ? "In-water snorkeling time is usually 2 to 3 hours depending on the chosen package. For Nusa Penida, total trip duration is Full Day (around 7-8 hours including fastboat return trips)."
          : lang === "ja"
          ? "水中でのシュノーケリング時間はパッケージにより約2〜3時間です。ヌサペニダツアーの場合は、往復スピードボート含め終日（約7〜8時間）となります。"
          : "Durasi kegiatan di dalam air berkisar antara 2 hingga 3 jam tergantung paket yang dipilih. Untuk paket Nusa Penida, total durasi tour adalah Full Day (sekitar 7-8 jam termasuk perjalanan fastboat PP).",
    },
    {
      id: "faq-6",
      question:
        lang === "en"
          ? "Are shower facilities and storage lockers available?"
          : lang === "ja"
          ? "シャワー施設や荷物ロッカーはありますか？"
          : "Apakah ada fasilitas ruang bilas dan loker penyimpanan barang?",
      answer:
        lang === "en"
          ? "Yes! All our basecamp meeting points in Blue Lagoon, Nusa Penida, and Tulamben are equipped with toilets, fresh water shower facilities, and secure luggage storage."
          : lang === "ja"
          ? "はい！ブルーラグーン、ヌサペニダ、トゥランベンの各集合場所（ベースキャンプ）には、トイレ、シャワー施設、安全な荷物保管スペースが完備されています。"
          : "Ya, seluruh basecamp tempat titik kumpul kami di Blue Lagoon, Nusa Penida, maupun Tulamben sudah dilengkapi dengan fasilitas toilet, kamar mandi shower untuk bilas, dan tempat penyimpanan barang yang aman.",
    },
  ];

  // Handler Kontak WA Dinamis
  const handleContactWA = () => {
    let text = "Halo, saya punya pertanyaan mengenai paket snorkeling yang tidak ada di daftar FAQ.";

    if (lang === "en") {
      text = "Hello, I have a question regarding the snorkeling package that is not listed in the FAQ.";
    } else if (lang === "ja") {
      text = "こんにちは、FAQに記載されていないシュノーケリングパッケージについて質問があります。";
    }

    window.open(`https://wa.me/6282339616319?text=${encodeURIComponent(text)}`, "_blank");
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
            {lang === "en" ? "Frequently Asked Questions" : lang === "ja" ? "よくある質問" : "Pertanyaan Umum"}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            {lang === "en" ? (
              <>
                Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">(FAQ)</span>
              </>
            ) : lang === "ja" ? (
              <>
                よくあるご質問 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">(FAQ)</span>
              </>
            ) : (
              <>
                Sering Ditanyakan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">(FAQ)</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            {lang === "en"
              ? "Have questions before booking? Find all the answers you need below."
              : lang === "ja"
              ? "ご予約前の疑問やご不安を解決します。以下をご確認ください。"
              : "Punya pertanyaan sebelum memesan? Temukan jawaban lengkapnya di bawah ini."}
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
              {lang === "en"
                ? "Still Have Questions?"
                : lang === "ja"
                ? "他にご質問はありますか？"
                : "Punya Pertanyaan Lain?"}
            </h3>
            <p className="text-sm text-slate-400">
              {lang === "en"
                ? "Our support team is ready to help customize your snorkeling plan."
                : lang === "ja"
                ? "カスタマーサポートがお客様のトリッププランをサポートします。"
                : "Tim CS kami siap membantu menjawab detail rencana trip Anda."}
            </p>
          </div>
          <button
            onClick={handleContactWA}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shrink-0 active:scale-95 shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            {lang === "en"
              ? "Ask via WhatsApp"
              : lang === "ja"
              ? "WhatsAppで問い合わせる"
              : "Tanya via WhatsApp"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}