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

export default function DetailCrystalBayPage({ lang }: Props) {
  const content = {
    id: {
      title: "Crystal Bay Nusa Penida",
      subtitle: "Nusa Penida, Bali",
      rating: "4.9/5 (150+ Ulasan)",
      badge: "Air Sejernih Kristal & Habitat Mola-Mola",
      description:
        "Crystal Bay adalah salah satu teluk paling terkenal di Nusa Penida yang menawarkan air laut sangat jernih seperti kristal dengan lanskap pulau batu kecil di tengah teluk. Tempat ini menjadi habitat alami ikan Sunfish raksasa (Mola-Mola) pada musim tertentu (Juli - Oktober). Selain itu, taman terumbu karangnya yang terlindungi menyajikan pemandangan bawah laut luar biasa bagi pencinta snorkeling.",
      visibilityLabel: "Visibilitas",
      visibilityValue: "Sangat Jernih (20-30m)",
      currentLabel: "Kondisi Arus",
      currentValue: "Tenang di Teluk Dalam",
      highlightsTitle: "Keunggulan Spot Crystal Bay Nusa Penida",
      highlights: [
        "Air teluk luar biasa jernih dengan pulau batu (rock islet) ikonik di tengah laut",
        "Kawasan konservasi laut dengan keanekaragaman terumbu karang & ikan hias",
        "Kesempatan langka melihat ikan raksasa Mola-Mola (Ocean Sunfish)",
        "Pantai pasir putih luas yang cocok untuk bersantai setelah snorkeling",
      ],
      packageTitle: "Pilihan Paket Snorkeling Crystal Bay",
      packageSubtitle: "Termasuk kapal speed boat / jukung, peralatan snorkeling, pemandu profesional, dan foto underwater.",
      packages: [
        {
          name: "Paket Snorkeling Trip Nusa Penida",
          price: "Rp 300.000",
          unit: "/ orang",
          popular: false,
          features: [
            "Perahu Snorkeling / Boat Sharing",
            "Eksplorasi Crystal Bay + Gamat Bay",
            "Peralatan Snorkeling Lengkap (Masker, Snorkel, Fin)",
            "Pemandu / Guide Snorkeling Lokal",
            "Dokumentasi Foto Underwater GoPro",
            "Air Mineral & Jaket Pelampung",
            "Asuransi Keselamatan",
          ],
        },
        {
          name: "Paket Private Boat VIP Tour",
          price: "Rp 550.000",
          unit: "/ orang (min. 2 pax)",
          popular: true,
          features: [
            "100% Private Speed Boat / Boat Khusus",
            "Eksplorasi 3 Spot (Crystal Bay + Manta Bay + Gamat Bay)",
            "Peralatan Snorkeling Premium",
            "Pemandu Khusus & Instruksi Snorkeling",
            "Foto & Video GoPro Unlimited (HD)",
            "Makan Siang Restoran Nusa Penida",
            "Transfer Antar-Jemput Pelabuhan Penida",
            "Asuransi Keselamatan",
          ],
        },
      ],
      bookBtn: "Pesan via WhatsApp",
      backBtn: "Kembali ke Pilihan Spot",
      waMessage: "Halo Prima Bali Tour, saya ingin memesan Paket Snorkeling Crystal Bay Nusa Penida.",
    },
    en: {
      title: "Crystal Bay Nusa Penida",
      subtitle: "Nusa Penida, Bali",
      rating: "4.9/5 (150+ Reviews)",
      badge: "Crystal Clear Waters & Mola-Mola Spot",
      description:
        "Crystal Bay is one of Nusa Penida's most legendary beaches, celebrated for its crystal-clear turquoise waters and picturesque rocky islet sitting in the middle of the bay. It is internationally famous as a natural habitat for giant Ocean Sunfish (Mola-Mola) during peak season (July to October). The sheltered reef provides unmatched underwater visibility and thriving marine life.",
      visibilityLabel: "Visibility",
      visibilityValue: "Crystal Clear (20-30m)",
      currentLabel: "Current Condition",
      currentValue: "Calm inside Bay Area",
      highlightsTitle: "Highlights of Crystal Bay Nusa Penida",
      highlights: [
        "Incredible water clarity featuring an iconic rock islet backdrop",
        "Protected coral bay bursting with vibrant tropical fish species",
        "Prime location for seasonal Mola-Mola (Ocean Sunfish) sightings",
        "Wide white sand beach perfect for relaxing and sunbathing post-snorkel",
      ],
      packageTitle: "Crystal Bay Snorkeling Packages",
      packageSubtitle: "Includes boat transfers, full equipment, professional local guide, and underwater photography.",
      packages: [
        {
          name: "Sharing Snorkeling Trip",
          price: "$20",
          unit: "/ person",
          popular: false,
          features: [
            "Shared Snorkeling Boat",
            "Explore Crystal Bay + Gamat Bay",
            "Full Snorkeling Gear (Mask, Snorkel, Fins)",
            "Experienced Local Snorkeling Guide",
            "GoPro Underwater Photo Documentation",
            "Mineral Water & Life Jacket",
            "Safety Insurance",
          ],
        },
        {
          name: "Private VIP Boat Tour",
          price: "$38",
          unit: "/ person (min. 2 pax)",
          popular: true,
          features: [
            "100% Private Boat Tour",
            "Explore 3 Top Spots (Crystal Bay + Manta Bay + Gamat Bay)",
            "Premium Snorkeling Equipment",
            "Dedicated Personal Guide & Instructor",
            "Unlimited HD GoPro Photos & Videos",
            "Set Lunch at Nusa Penida Restaurant",
            "Nusa Penida Harbor Pick-up Transfer",
            "Safety Insurance",
          ],
        },
      ],
      bookBtn: "Book via WhatsApp",
      backBtn: "Back to All Spots",
      waMessage: "Hello Prima Bali Tour, I would like to book the Crystal Bay Nusa Penida Snorkeling Package.",
    },
    ja: {
      title: "クリスタルベイ ヌサペニダ",
      subtitle: "ヌサペニダ島・バリ",
      rating: "4.9/5 (150件以上のレビュー)",
      badge: "透明度抜群 & マンボウ遭遇スポット",
      description:
        "クリスタルベイは、ヌサペニダ島で最も有名なビーチの一つで、その名の通り水晶のように澄み切った海と、湾の中央に浮かぶ絵画のような小島（ロックアイランド）が特徴です。シーズン中（7月〜10月）には巨大なマンボウ（Mola-Mola）が現れる世界的なスポットとしても知られており、浅瀬の美しいサンゴ礁と熱帯魚を間近で観察できます。",
      visibilityLabel: "透明度",
      visibilityValue: "最高レベル (20-30m)",
      currentLabel: "海流の状態",
      currentValue: "湾内は穏やか",
      highlightsTitle: "クリスタルベイ ヌサペニダの魅力",
      highlights: [
        "湾中央の小島を望む、抜群の透明度を誇るエメラルドグリーンの海",
        "色鮮やかなサンゴ礁と多様な熱帯魚が生息する海洋保護エリア",
        "シーズン（7〜10月）には巨大マンボウ（Mola-Mola）遭遇のチャンス",
        "シュノーケリング後にゆったり過ごせる広い白い砂浜ビーチ",
      ],
      packageTitle: "クリスタルベイ シュノーケリングプラン",
      packageSubtitle: "ボート移動、フル機材レンタル、プロガイド、水中写真撮影込み。",
      packages: [
        {
          name: "乗合シュノーケリング トリップ",
          price: "¥3,000",
          unit: "/ 1名様",
          popular: false,
          features: [
            "乗合シュノーケリングボート利用",
            "2スポット巡り（クリスタルベイ ＋ ガマットベイ）",
            "シュノーケル全機材（マスク・シュノーケル・フィン）",
            "現地プロシュノーケリングガイド",
            "GoPro水中写真撮影サービス",
            "ミネラルウォーター＆ライフジャケット",
            "傷害保険込み",
          ],
        },
        {
          name: "貸切 VIP プライベートボートプラン",
          price: "¥5,500",
          unit: "/ 1名様 (2名より)",
          popular: true,
          features: [
            "完全貸切プライベートボート",
            "3大スポット巡り（クリスタルベイ ＋ マンタベイ ＋ ガマットベイ）",
            "プレミアムシュノーケル機材",
            "専任ガイド＆インストラクター",
            "GoPro写真・HD動画撮り放題",
            "ヌサペニダ特製レストランランチ",
            "ペニダ島港送迎付き",
            "傷害保険込み",
          ],
        },
      ],
      bookBtn: "WhatsAppで予約する",
      backBtn: "スポット一覧へ戻る",
      waMessage: "こんにちは Prima Bali Tour、クリスタルベイ ヌサペニダのシュノーケリングパッケージを予約したいです。",
    },
  };

  const t = content[lang] || content.id;
  const phoneNumber = "6282339616319";

  const priceLow = lang === "id" ? "300000" : lang === "en" ? "20" : "3000";
  const priceHigh = lang === "id" ? "550000" : lang === "en" ? "38" : "5500";
  const currency = lang === "id" ? "IDR" : lang === "en" ? "USD" : "JPY";

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
      {/* Dynamic Schema.org JSON-LD untuk Rich Snippet Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": t.title,
            "description": t.description,
            "image": "https://res.cloudinary.com/dlerwn8af/image/upload/v1785302207/crystal-bay-snorkeling_csytt0.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": currency,
              "lowPrice": priceLow,
              "highPrice": priceHigh,
              "offerCount": "2"
            }
          }),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Navigation Link */}
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
              src="https://res.cloudinary.com/dlerwn8af/image/upload/v1785302207/crystal-bay-snorkeling_csytt0.jpg"
              alt={`${t.title} - ${t.subtitle}`}
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
    </main>
  );
}