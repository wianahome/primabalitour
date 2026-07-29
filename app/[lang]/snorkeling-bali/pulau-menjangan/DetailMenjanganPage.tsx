"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  CheckCircle2, 
  Waves, 
  ArrowLeft, 
  MessageCircle, 
  Star,
  ShieldCheck
} from "lucide-react";

type Props = {
  lang: "id" | "en" | "ja";
};

export default function DetailMenjanganPage({ lang }: Props) {
  // 1. Data Konten & Deskripsi Spot (3 Bahasa)
  const content = {
    id: {
      title: "Pulau Menjangan",
      subtitle: "Taman Nasional Bali Barat",
      rating: "4.9/5 (120+ Ulasan)",
      badge: "Wall Drop-off Terbaik",
      description:
        "Pulau Menjangan adalah bagian dari Taman Nasional Bali Barat yang terkenal dengan perairannya yang sangat jernih (jarak pandang hingga 50 meter) dan ekosistem laut yang terlindungi. Tempat ini menjadi surga utama bagi pecinta snorkeling karena memiliki dinding karang vertikal (wall drop-off) yang spektakuler, penuh dengan terumbu karang warna-warni, penyu laut, dan keanekaragaman ikan hias tanpa arus kencang.",
      visibilityLabel: "Visibilitas",
      visibilityValue: "Sangat Jernih (30-50m)",
      currentLabel: "Kondisi Arus",
      currentValue: "Tenang / Aman",
      highlightsTitle: "Keunggulan Spot Pulau Menjangan",
      highlights: [
        "Jarak pandang (visibilitas) air laut hingga 50 meter",
        "Dinding karang vertikal (Wall Drop-off) spektakuler",
        "Arus perairan sangat tenang & aman untuk keluarga",
        "Kawasan Taman Nasional yang sangat terlindungi",
      ],
      packageTitle: "Pilihan Paket Snorkeling Pulau Menjangan",
      packageSubtitle: "Sudah termasuk izin Taman Nasional, kapal perahu, pemandu, dan alat snorkeling lengkap.",
      packages: [
        {
          name: "Paket Sharing / Open Trip",
          price: "Rp 650.000",
          unit: "/ orang",
          popular: false,
          features: [
            "Perahu Sharing (Gabungan)",
            "Izin Masuk Taman Nasional",
            "Peralatan Snorkeling Lengkap (Fin & Masker)",
            "Snorkel Guide Profesional",
            "Makan Siang Box & Air Mineral",
            "Dokumentasi Foto Underwater",
            "Asuransi Keselamatan",
          ],
        },
        {
          name: "Paket Private Boat Tour",
          price: "Rp 1.150.000",
          unit: "/ orang (min. 2 pax)",
          popular: true,
          features: [
            "Perahu Private (Tidak digabung)",
            "Izin Masuk Taman Nasional",
            "Peralatan Snorkeling Premium",
            "Pemandu Khusus & Instruktur",
            "Makan Siang Seafood / Set Menu",
            "Foto & Video GoPro Gratis",
            "Jemputan Area Pemuteran / Lovina",
            "Asuransi Keselamatan",
          ],
        },
      ],
      bookBtn: "Pesan via WhatsApp",
      backBtn: "Kembali ke Pilihan Spot",
      waMessage: "Halo Prima Bali Tour, saya ingin memesan Paket Snorkeling Pulau Menjangan.",
    },
    en: {
      title: "Menjangan Island",
      subtitle: "West Bali National Park",
      rating: "4.9/5 (120+ Reviews)",
      badge: "Best Wall Drop-off",
      description:
        "Menjangan Island is part of the West Bali National Park, renowned for its crystal-clear waters (visibility up to 50 meters) and protected marine sanctuary. It is a premier snorkeling paradise featuring dramatic vertical wall drop-offs, vibrant living coral gardens, sea turtles, and rich marine life with virtually no strong currents.",
      visibilityLabel: "Visibility",
      visibilityValue: "Crystal Clear (30-50m)",
      currentLabel: "Current Condition",
      currentValue: "Calm / Safe",
      highlightsTitle: "Highlights of Menjangan Island",
      highlights: [
        "Unmatched underwater visibility up to 50 meters",
        "Breathtaking vertical wall drop-off corals",
        "Extremely calm currents, safe for all experience levels",
        "Protected National Marine Park environment",
      ],
      packageTitle: "Menjangan Snorkeling Packages",
      packageSubtitle: "Includes National Park permits, boat transfers, guide, and full snorkeling gear.",
      packages: [
        {
          name: "Sharing / Open Trip Package",
          price: "$42",
          unit: "/ person",
          popular: false,
          features: [
            "Shared Boat",
            "National Park Entry Permit",
            "Full Snorkeling Gear (Mask & Fins)",
            "Professional Snorkel Guide",
            "Lunch Box & Mineral Water",
            "Underwater Photo Documentation",
            "Safety Insurance",
          ],
        },
        {
          name: "Private Boat Tour Package",
          price: "$75",
          unit: "/ person (min. 2 pax)",
          popular: true,
          features: [
            "100% Private Boat",
            "National Park Entry Permit",
            "Premium Snorkeling Equipment",
            "Dedicated Guide & Instructor",
            "Set Menu / Seafood Lunch",
            "Free GoPro Photos & Videos",
            "Hotel Pick-up (Pemuteran/Lovina)",
            "Safety Insurance",
          ],
        },
      ],
      bookBtn: "Book via WhatsApp",
      backBtn: "Back to All Spots",
      waMessage: "Hello Prima Bali Tour, I would like to book the Menjangan Island Snorkeling Package.",
    },
    ja: {
      title: "ムンジャンガン島",
      subtitle: "西バリ国立公園",
      rating: "4.9/5 (120件以上のレビュー)",
      badge: "最高のドロップオフ",
      description:
        "ムンジャンガン島は西バリ国立公園内に位置し、最大50mを誇る抜群の透明度と保護された美しい海が魅力の聖地です。圧巻の垂直ドロップオフ（断崖絶壁のサンゴ礁）、カラフルな熱帯魚、ウミガメに出会えます。波や流れが非常に穏やかなため、初心者やファミリーにも最適です。",
      visibilityLabel: "透明度",
      visibilityValue: "抜群の透明度 (30-50m)",
      currentLabel: "海流の状態",
      currentValue: "穏やか / 安全",
      highlightsTitle: "ムンジャンガン島の特徴",
      highlights: [
        "最大50メートルの超高透明度な海",
        "ダイナミックな垂直ドロップオフ（サンゴの壁）",
        "波と流が非常に穏やかで安全",
        "国立公園として手つかずの大自然が保護",
      ],
      packageTitle: "ムンジャンガン島 シュノーケリングプラン",
      packageSubtitle: "国立公園入園許可証、ボート代、ガイド、機材レンタルがすべて含まれています。",
      packages: [
        {
          name: "乗合（オープン）ツアー",
          price: "¥6,500",
          unit: "/ 1名様",
          popular: false,
          features: [
            "乗合ボート利用",
            "国立公園入園ライセンス",
            "シュノーケル全機材（マスク・フィン）",
            "プロガイド同行",
            "ランチボックス & お水",
            "水中写真撮影付き",
            "傷害保険込み",
          ],
        },
        {
          name: "プライベートボート ツアー",
          price: "¥11,500",
          unit: "/ 1名様 (2名より)",
          popular: true,
          features: [
            "貸切プライベートボート",
            "国立公園入園ライセンス",
            "プレミアムシュノーケル機材",
            "専任ガイド & インストラクター",
            "選べるランチセット",
            "GoPro写真・動画撮影サービス",
            "ホテル送迎（ムプトラン/ロビナエリア）",
            "傷害保険込み",
          ],
        },
      ],
      bookBtn: "WhatsAppで予約する",
      backBtn: "スポット一覧へ戻る",
      waMessage: "こんにちは Prima Bali Tour、ムンジャンガン島シュノーケリングパッケージを予約したいです。",
    },
  };

  const t = content[lang] || content.id;
  const phoneNumber = "6282339616319";

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Tombol Kembali */}
        <div className="mb-8">
          <Link
            href={`/${lang}/snorkeling-bali`}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backBtn}</span>
          </Link>
        </div>

        {/* 1. HERO & SPOT HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Image */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dlerwn8af/image/upload/v1785302208/snorkeling-pulau-menjangan_wljyuc.jpg"
              alt={t.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-cyan-500 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
              {t.badge}
            </div>
          </div>

          {/* Header Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-cyan-400 text-sm mb-2 font-medium">
              <MapPin className="w-4 h-4" />
              <span>{t.subtitle}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              {t.title}
            </h1>

            <div className="flex items-center gap-2 mb-6 text-amber-400 text-sm font-semibold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{t.rating}</span>
            </div>

            <p className="text-slate-300 text-base leading-relaxed font-light mb-6">
              {t.description}
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{t.visibilityLabel}</p>
                  <p className="text-sm font-bold text-slate-200">{t.visibilityValue}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{t.currentLabel}</p>
                  <p className="text-sm font-bold text-slate-200">{t.currentValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. HIGHLIGHTS SPOT */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-20">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span>{t.highlightsTitle}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <p className="text-slate-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PAKET & HARGA */}
        <div id="paket" className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              {t.packageTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.packageSubtitle}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.packages.map((pkg, idx) => {
              const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                `${t.waMessage} (${pkg.name})`
              )}`;

              return (
                <div
                  key={idx}
                  className={`relative bg-slate-900 border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? "border-cyan-500 shadow-xl shadow-cyan-500/10"
                      : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      Best Value
                    </span>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>

                    <div className="flex items-baseline gap-1 my-4">
                      <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-slate-400">{pkg.unit}</span>
                    </div>

                    <div className="w-full h-px bg-slate-800 my-6" />

                    {/* Features List */}
                    <ul className="space-y-3.5 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg ${
                      pkg.popular
                        ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                        : "bg-slate-800 hover:bg-cyan-500 text-white hover:text-slate-950"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{t.bookBtn}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

      </div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": t.title,
            "description": t.description,
            "image": "https://res.cloudinary.com/dlerwn8af/image/upload/v1785302208/snorkeling-pulau-menjangan_wljyuc.jpg",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "120"
            },
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": lang === "id" ? "IDR" : lang === "en" ? "USD" : "JPY",
                "lowPrice": lang === "id" ? "650000" : lang === "en" ? "42" : "6500",
                "highPrice": lang === "id" ? "1150000" : lang === "en" ? "75" : "11500",
                "offerCount": "2"
            }
            }),
        }}
        />
    </main>
  );
}