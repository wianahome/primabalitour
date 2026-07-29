"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Anchor, ShieldCheck } from "lucide-react";

type SnorkelingSpotsProps = {
  dict?: any;
  lang: string;
};

interface Spot {
  id: string;
  slug: string;
  title: string;
  location: string;
  image: string;
  badge: string;
  description: string;
  highlights: string[];
}

export default function SnorkelingSpots({ dict, lang }: SnorkelingSpotsProps) {
  // Data 7 Spot Snorkeling Multibahasa (ID, EN, JA)
  const spots: Spot[] = [
    {
      id: "pulau-menjangan",
      slug: "pulau-menjangan",
      title: "Pulau Menjangan",
      location: "Taman Nasional Bali Barat",
      image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1785303270/snorkeling-menjangan_gs4svl.jpg",
      badge:
        lang === "en"
          ? "Pristine Wall Drop-off"
          : lang === "ja"
          ? "抜群の透明度 & ドロップオフ"
          : "Wall Drop-off Memukau",
      description:
        lang === "en"
          ? "Ultra-clear water with breathtaking vertical wall drop-offs and remarkably calm currents."
          : lang === "ja"
          ? "非常に透明度が高い海、圧巻の断崖絶壁サンゴ礁（ドロップオフ）、そして穏やかな me が特徴です。"
          : "Laut sangat jernih, dinding karang (wall drop-off) memukau, dan arus tenang.",
      highlights:
        lang === "en"
          ? ["Ultra Clear Water", "Wall Drop-off", "Calm Currents"]
          : lang === "ja"
          ? ["超高透明度", "ドロップオフサンゴ", "穏やかな波"]
          : ["Laut Sangat Jernih", "Wall Drop-off", "Arus Tenang"],
    },
    {
      id: "pantai-jemeluk",
      slug: "pantai-jemeluk-amed",
      title: "Pantai Jemeluk",
      location: "Amed, Karangasem",
      image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1785302977/snorkeling-pantai-jemeluk_zamwx8.jpg",
      badge:
        lang === "en"
          ? "Underwater Statue & Volcano View"
          : lang === "ja"
          ? "水中像 & アグン山"
          : "Patung Bawah Laut",
      description:
        lang === "en"
          ? "Easy shore access featuring unique underwater statues and iconic Mount Agung backdrop."
          : lang === "ja"
          ? "ビーチから簡単にアクセス可能。神秘的な水中像と壮大なアグン山の景色が楽しめます。"
          : "Akses mudah dari pantai, ada patung bawah laut, dan pemandangan Gunung Agung.",
      highlights:
        lang === "en"
          ? ["Easy Shore Entry", "Underwater Statues", "Mt. Agung View"]
          : lang === "ja"
          ? ["ビーチエントリー", "水中彫像", "アグン山の絶景"]
          : ["Akses dari Pantai", "Patung Bawah Laut", "View Gunung Agung"],
    },
    {
      id: "blue-lagoon",
      slug: "blue-lagoon-padangbai",
      title: "Blue Lagoon",
      location: "Padangbai, Karangasem",
      image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1785211873/iar_jernih_blue_lagoon_iefmbw.jpg",
      badge:
        lang === "en"
          ? "Shallow Reef & White Sand"
          : lang === "ja"
          ? "浅瀬サンゴ & 白砂ビーチ"
          : "Karang Dangkal & Pasir Putih",
      description:
        lang === "en"
          ? "Shallow colorful coral reef, soft white sand bottom, and conveniently close to South Bali."
          : lang === "ja"
          ? "浅瀬の美しいサンゴ礁、白い砂浜の海底、南部エリアからのアクセスも良好です。"
          : "Terumbu karang dangkal, dasar pasir putih, dan dekat dari area Bali Selatan.",
      highlights:
        lang === "en"
          ? ["Shallow Coral Reef", "White Sand Bottom", "Near South Bali"]
          : lang === "ja"
          ? ["浅いサンゴ礁", "白砂の海底", "南部からアクセス良"]
          : ["Karang Dangkal", "Dasar Pasir Putih", "Dekat Bali Selatan"],
    },
    {
      id: "crystal-bay",
      slug: "crystal-bay-nusa-penida",
      title: "Crystal Bay",
      location: "Nusa Penida",
      image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1785302207/crystal-bay-snorkeling_csytt0.jpg",
      badge:
        lang === "en"
          ? "High Visibility & Healthy Coral"
          : lang === "ja"
          ? "最高の透明度"
          : "Visibilitas Sangat Tinggi",
      description:
        lang === "en"
          ? "Extremely high water visibility paired with vibrant, healthy coral gardens."
          : lang === "ja"
          ? "バリ島屈指の透明度を誇り、色鮮やかで健康的なサンゴ庭園が広がります。"
          : "Visibilitas air sangat tinggi dengan taman karang yang indah dan sehat.",
      highlights:
        lang === "en"
          ? ["Top Visibility", "Healthy Corals", "Crystal Clear Water"]
          : lang === "ja"
          ? ["抜群の透明度", "健康的なサンゴ", "クリスタルブルー"]
          : ["Visibilitas Tinggi", "Taman Karang Sehat", "Air Jernih Kristal"],
    },
    {
      id: "manta-point",
      slug: "manta-point-nusa-penida",
      title: "Manta Point",
      location: "Nusa Penida",
      image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1785303716/snorkeling-manta-point-nusa-penida_fgtifi.jpg",
      badge:
        lang === "en"
          ? "Swim with Manta Rays"
          : lang === "ja"
          ? "マンタ遭遇スポット"
          : "Berenang Bersama Manta",
      description:
        lang === "en"
          ? "Exclusive spot dedicated to the unforgettable experience of swimming alongside Manta Rays."
          : lang === "ja"
          ? "巨大なマンタ（オニイトマキエイ）と一緒に泳ぐ体験ができる特別スポット。"
          : "Spot khusus untuk pengalaman berenang langsung bersama Ikan Pari Manta.",
      highlights:
        lang === "en"
          ? ["Manta Rays Encounter", "Open Ocean Spot", "Unique Marine Life"]
          : lang === "ja"
          ? ["マンタと泳ぐ", "外洋スポット", "貴重な体験"]
          : ["Pari Manta Raksasa", "Spot Laut Lepas", "Pengalaman Langka"],
    },
    {
      id: "mangrove-point",
      slug: "mangrove-point-lembongan",
      title: "Mangrove Point",
      location: "Nusa Lembongan",
      image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1785302208/mangrove-point-nusa-lembongan-snorkeling_ghayzo.jpg",
      badge:
        lang === "en"
          ? "Drift Snorkeling Paradise"
          : lang === "ja"
          ? "ドリフトシュノーケリング"
          : "Drift Snorkeling Area",
      description:
        lang === "en"
          ? "Vast coral reef system located near mangrove forests, ideal for effortless drift snorkeling."
          : lang === "ja"
          ? "マングローブエリアに広がる広大なサンゴ礁。潮の流れに乗るドリフトシュノーケルに最適。"
          : "Terumbu karang luas di area bakau, cocok untuk drift snorkeling (mengikuti arus).",
      highlights:
        lang === "en"
          ? ["Drift Snorkeling", "Vast Coral Reef", "Mangrove Forest"]
          : lang === "ja"
          ? ["ドリフト体験", "広大なサンゴ礁", "マングローブの森"]
          : ["Drift Snorkeling", "Karang Luas", "Area Bakau / Mangrove"],
    },
    {
      id: "tanjung-benoa",
      slug: "tanjung-benoa",
      title: "Tanjung Benoa",
      location: "Nusa Dua, Badung",
      image: "https://res.cloudinary.com/dlerwn8af/image/upload/v1785302208/tanjung-benoa-snorkeling_nppupp.jpg",
      badge:
        lang === "en"
          ? "Family & Beginner Friendly"
          : lang === "ja"
          ? "初心者・ファミリー向け"
          : "Aman Pemula & Keluarga",
      description:
        lang === "en"
          ? "Very calm waters, safe for beginners and families, integrated with a full watersport hub."
          : lang === "ja"
          ? "波が非常に穏やかで初心者やファミリーも安心。マリンスポーツセンターと併設。"
          : "Perairan sangat tenang, aman untuk pemula/keluarga, dan terintegrasi pusat watersport.",
      highlights:
        lang === "en"
          ? ["Calm Waters", "Beginner Safe", "Integrated Watersport"]
          : lang === "ja"
          ? ["静かな波", "初心者安心", "マリンスポーツ充実"]
          : ["Air Sangat Tenang", "Aman Pemula", "Pusat Watersport"],
    },
  ];

  // Headings
  const title =
    lang === "en" ? (
      <>
        Explore Bali's Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Snorkeling Spots</span>
      </>
    ) : lang === "ja" ? (
      <>
        バリ島厳選 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">シュノーケリングエリア</span>
      </>
    ) : (
      <>
        Pilihan Area <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Snorkeling Terbaik</span> di Bali
      </>
    );

  const subtitle =
    lang === "en"
      ? "Discover incredible underwater locations, from giant manta rays to shallow calm coral reefs."
      : lang === "ja"
      ? "マンタと泳ぐ深海から穏やかな浅瀬まで、バリ島最高のシュノーケルスポットをご案内。"
      : "Temukan lokasi bawah laut spektakuler, dari spot pari manta hingga terumbu karang dangkal yang tenang.";

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Anchor className="w-3.5 h-3.5" />
            {lang === "en" ? "Destinations" : lang === "ja" ? "目的地" : "Destinasi Favorit"}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Spots Grid (Responsive Layout: 1 col on mobile, 2 on tablet, 3/4 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {spots.map((spot, index) => {
            // Dynamic URL sesuai bahasa (/id, /en, /ja)
            const spotDetailUrl = `/${lang}/snorkeling-bali/${spot.slug}`;

            return (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={spot.image}
                      alt={spot.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[11px] font-semibold px-3 py-1 rounded-full shadow-lg">
                      {spot.badge}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{spot.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                      {spot.title}
                    </h3>

                    <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 min-h-[60px]">
                      {spot.description}
                    </p>

                    {/* Highlights Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {spot.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          <ShieldCheck className="w-3 h-3 text-cyan-400" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clickable CTA Link */}
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    href={spotDetailUrl}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 group-hover:bg-cyan-500 text-slate-200 group-hover:text-slate-950 font-bold text-sm transition-all duration-300 shadow-md"
                  >
                    <span>
                      {lang === "en"
                        ? "View Spot Detail"
                        : lang === "ja"
                        ? "詳細を見る"
                        : "Lihat Detail Spot"}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}