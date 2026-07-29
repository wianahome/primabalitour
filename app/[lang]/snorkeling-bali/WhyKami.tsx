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

type WhyChooseUsProps = {
  dict?: any;
  lang: string;
};

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string;
}

export default function WhyChooseUs({ dict, lang }: WhyChooseUsProps) {
  // Data Fitur / Keunggulan Multibahasa (ID, EN, JA)
  const features: Feature[] = [
    {
      icon: UserCheck,
      title:
        lang === "en"
          ? "Licensed Local Guides"
          : lang === "ja"
          ? "ライセンス保持のローカルガイド"
          : "Pemandu Lokal Berlisensi",
      description:
        lang === "en"
          ? "Accompanied by experienced local instructors who know the best spots, ocean current conditions, and safety protocols inside out."
          : lang === "ja"
          ? " ベストスポット、潮の流れ、各ロケーションの安全基準を熟知した経験豊富なローカルインストラクターが同行します。"
          : "Didampingi instruktur lokal berpengalaman yang paham betul titik spot terbaik, kondisi arus laut, dan keamanan di setiap lokasi.",
      highlight:
        lang === "en"
          ? "100% Licensed"
          : lang === "ja"
          ? "100% ライセンス保有"
          : "100% Berlisensi",
    },
    {
      icon: Camera,
      title:
        lang === "en"
          ? "Free HD GoPro Documentation"
          : lang === "ja"
          ? "GoPro HD撮影が無料"
          : "Gratis Dokumentasi GoPro HD",
      description:
        lang === "en"
          ? "Capture beautiful underwater moments at no extra charge. High-resolution photos & videos sent straight to your phone."
          : lang === "ja"
          ? "追加料金なしで水中での美しい瞬間を撮影。高解像度の写真や動画をあなたのスマートフォンへ直接送付します。"
          : "Abadikan momen indah di bawah laut tanpa biaya tambahan. File foto & video resolusi tinggi langsung dikirim ke HP Anda.",
      highlight:
        lang === "en"
          ? "Free Photos & Videos"
          : lang === "ja"
          ? "写真・動画無料"
          : "Foto & Video Gratis",
    },
    {
      icon: ShieldCheck,
      title:
        lang === "en"
          ? "Sterile & Premium Equipment"
          : lang === "ja"
          ? "清潔で高品質な器材"
          : "Peralatan Steril & Berkualitas",
      description:
        lang === "en"
          ? "Masks, snorkels, fins, and life jackets are meticulously disinfected with eco-friendly solutions after every use."
          : lang === "ja"
          ? "マスク、シュノーケル、フィン、ライフジャケットは、使用ごとに環境に優しい消毒液で丁寧に洗浄されています。"
          : "Masker, snorkel, fin, dan jaket pelampung selalu dibersihkan dengan disinfektan ramah lingkungan setelah setiap penggunaan.",
      highlight:
        lang === "en"
          ? "High Safety Standards"
          : lang === "ja"
          ? "高い安全基準"
          : "Standar Keamanan Tinggi",
    },
    {
      icon: HeartHandshake,
      title:
        lang === "en"
          ? "Beginner & Non-Swimmer Friendly"
          : lang === "ja"
          ? "初心者＆泳げない方も安心"
          : "Ramah Pemula & Non-Perenang",
      description:
        lang === "en"
          ? "Never snorkeled before or can't swim? Our patient team will guide you step-by-step until you feel comfortable in the water."
          : lang === "ja"
          ? "シュノーケリングが初めての方や泳げない方でも大丈夫！スタッフが水中で安心できるまで丁寧にステップ・バイ・ステップでサポートします。"
          : "Belum pernah snorkeling atau tidak bisa berenang? Tim kami akan membimbing step-by-step hingga Anda nyaman di air.",
      highlight:
        lang === "en"
          ? "Safe & Easy"
          : lang === "ja"
          ? "安心・安全"
          : "Pasti Bisa & Aman",
    },
    {
      icon: LifeBuoy,
      title:
        lang === "en"
          ? "Travel Insurance Included"
          : lang === "ja"
          ? "傷害保険込み"
          : "Asuransi Perjalanan Termasuk",
      description:
        lang === "en"
          ? "Your safety is our top priority. Every participant is covered by travel accident insurance during all activities."
          : lang === "ja"
          ? "お客様の安全が最優先事項です。すべてのアクティビティ参加者に保険が適用されます。"
          : "Keselamatan Anda adalah prioritas utama kami. Setiap peserta tercover asuransi perlindungan diri selama aktivitas berlangsung.",
      highlight:
        lang === "en"
          ? "Full Protection"
          : lang === "ja"
          ? "充実の補償"
          : "Proteksi Penuh",
    },
    {
      icon: Sparkles,
      title:
        lang === "en"
          ? "Satisfaction Guarantee & Exclusive Trip"
          : lang === "ja"
          ? "満足保証＆プライベート体験"
          : "Garansi Kepuasan / Garansi Uang Kembali",
      description:
        lang === "en"
          ? "Flexible private or semi-private tours without overcrowded groups, ensuring an exclusive and memorable experience."
          : lang === "ja"
          ? "混雑のないプライベート感あふれるツアー設定。特別で思い出に残る体験をお約束します。"
          : "Layanan privat atau semi-privat yang fleksibel, tanpa rombongan terlalu padat agar pengalaman Anda tetap eksklusif.",
      highlight:
        lang === "en"
          ? "Exclusive Experience"
          : lang === "ja"
          ? "プライベート感覚"
          : "Pengalaman Eksklusif",
    },
  ];

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
            {lang === "en"
              ? "Our Service Highlights"
              : lang === "ja"
              ? "当ツアーの強み・特徴"
              : "Keunggulan Layanan Kami"}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            {lang === "en" ? (
              <>
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Prima Bali Tour?</span>
              </>
            ) : lang === "ja" ? (
              <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Prima Bali Tour</span> が選ばれる理由
              </>
            ) : (
              <>
                Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Prima Bali Tour?</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            {lang === "en"
              ? "We ensure your Bali snorkeling adventure is safe, comfortable, and leaves you with unforgettable memories."
              : lang === "ja"
              ? "バリ島でのシュノーケリングアドベンチャーが安全かつ快適で、素晴らしい思い出になるよう全力でサポートします。"
              : "Kami memastikan petualangan snorkeling Anda di Bali berjalan aman, nyaman, dan meninggalkan kenangan indah yang tak terlupakan."}
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