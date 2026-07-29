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
  ShieldCheck,
  Compass
} from "lucide-react";

type Props = {
  lang: "id" | "en" | "ja";
};

export default function DetailMangrovePointPage({ lang }: Props) {
  const content = {
    id: {
      title: "Mangrove Point Nusa Lembongan",
      subtitle: "Nusa Lembongan, Bali",
      rating: "4.9/5 (180+ Ulasan)",
      badge: "Taman Terumbu Karang Terluas",
      description:
        "Mangrove Point terletak di ujung utara Nusa Lembongan, tepat di perbatasan hutan bakau alami. Spot ini terkenal dengan metode 'Drift Snorkeling', di mana Anda cukup terapung rileks dan membiarkan arus laut yang tenang membawa Anda melintasi taman terumbu karang yang sangat luas dan subur. Ribuan ikan hias tropis warna-warni akan mengelilingi Anda sepanjang perjalanan.",
      visibilityLabel: "Visibilitas",
      visibilityValue: "Sangat Jernih (15-25m)",
      currentLabel: "Kondisi Arus",
      currentValue: "Drift Snorkeling (Tenang)",
      highlightsTitle: "Keunggulan Spot Mangrove Point",
      highlights: [
        "Sensasi Drift Snorkeling: Mengikuti arus alami tanpa perlu banyak mengayuh",
        "Taman karang hidup terluas dengan kondisi ekosistem yang masih sangat terjaga",
        "Ribuan spesies ikan hias seperti Clownfish, Butterflyfish, dan Coral Trout",
        "Lokasi bersebelahan langsung dengan kawasan konservasi Hutan Mangrove Lembongan",
      ],
      packageTitle: "Pilihan Paket Snorkeling Mangrove Point",
      packageSubtitle: "Sudah termasuk perahu tradisional / boat, perlengkapan snorkeling lengkap, pemandu, dan tour hutan mangrove.",
      packages: [
        {
          name: "Paket Snorkeling Sharing Trip",
          price: "Rp 275.000",
          unit: "/ orang",
          popular: false,
          features: [
            "Perahu Snorkeling Sharing",
            "Eksplorasi Mangrove Point + Wall Bay",
            "Peralatan Snorkeling Lengkap (Masker, Snorkel, Fin)",
            "Pemandu Snorkeling Pengalaman",
            "Foto Underwater GoPro",
            "Air Mineral & Jaket Pelampung",
            "Asuransi Keselamatan",
          ],
        },
        {
          name: "Paket VIP Combo (Snorkeling + Tour Mangrove)",
          price: "Rp 475.000",
          unit: "/ orang (min. 2 pax)",
          popular: true,
          features: [
            "Perahu Private Snorkeling & Mangrove Tour",
            "Eksplorasi 3 Spot (Mangrove Point, Wall Bay, GT Point)",
            "Tour Hutan Mangrove dengan Perahu Kayu Tradisional",
            "Peralatan Snorkeling Premium",
            "Foto & Video GoPro Unlimited (HD)",
            "Makan Siang Restoran Pinggir Pantai",
            "Fasilitas Handuk, Mandi & Loker",
            "Asuransi Keselamatan VIP",
          ],
        },
      ],
      bookBtn: "Pesan via WhatsApp",
      backBtn: "Kembali ke Pilihan Spot",
      waMessage: "Halo Prima Bali Tour, saya ingin memesan Paket Snorkeling Mangrove Point Nusa Lembongan.",
    },
    en: {
      title: "Mangrove Point Nusa Lembongan",
      subtitle: "Nusa Lembongan, Bali",
      rating: "4.9/5 (180+ Reviews)",
      badge: "Largest Coral Garden Spot",
      description:
        "Mangrove Point is located at the northern tip of Nusa Lembongan, right next to the island's lush mangrove forest. It is famous for gentle 'Drift Snorkeling', where you simply float relaxed and let the mild current carry you over vast, healthy coral gardens. Countless tropical reef fish in every color imaginable will swim alongside you throughout the drift.",
      visibilityLabel: "Visibility",
      visibilityValue: "Crystal Clear (15-25m)",
      currentLabel: "Current Condition",
      currentValue: "Gentle Drift Current",
      highlightsTitle: "Highlights of Mangrove Point Nusa Lembongan",
      highlights: [
        "Effortless Drift Snorkeling experience guided by gentle, natural ocean currents",
        "Vast expanse of thriving, colorful hard and soft coral reefs",
        "Dense populations of reef fish including Clownfish, Butterflyfish & Damselfish",
        "Located right next to Nusa Lembongan's serene protected Mangrove Forest",
      ],
      packageTitle: "Mangrove Point Snorkeling Packages",
      packageSubtitle: "Includes boat transfers, full snorkeling equipment, certified guide, and optional mangrove canoe tour.",
      packages: [
        {
          name: "Sharing Snorkeling Trip",
          price: "$19",
          unit: "/ person",
          popular: false,
          features: [
            "Shared Snorkeling Boat",
            "Explore Mangrove Point + Wall Bay",
            "Full Gear (Mask, Snorkel, Fins & Life Vest)",
            "Experienced Local Guide",
            "GoPro Underwater Photos",
            "Mineral Water Included",
            "Safety Insurance Coverage",
          ],
        },
        {
          name: "VIP Combo Tour (Snorkel + Mangrove)",
          price: "$32",
          unit: "/ person (min. 2 pax)",
          popular: true,
          features: [
            "Private Boat Tour",
            "Explore 3 Spots (Mangrove Point, Wall Bay, GT Point)",
            "Traditional Wooden Canoe Mangrove Forest Tour",
            "Premium Snorkeling Gear",
            "Unlimited HD GoPro Photos & Videos",
            "Beachfront Restaurant Lunch",
            "Towel, Shower & Locker Facilities",
            "VIP Safety Insurance",
          ],
        },
      ],
      bookBtn: "Book via WhatsApp",
      backBtn: "Back to All Spots",
      waMessage: "Hello Prima Bali Tour, I would like to book the Mangrove Point Nusa Lembongan Snorkeling Package.",
    },
    ja: {
      title: "マングローブポイント ヌサレンボンガン",
      subtitle: "ヌサレンボンガン島・バリ",
      rating: "4.9/5 (180件以上のレビュー)",
      badge: "最大級のサンゴ礁スポット",
      description:
        "マングローブポイントは、ヌサレンボンガン島の最北端、マングローブ林のすぐそばに位置するバリ島屈指のシュノーケリングスポットです。穏やかな潮の流れに身をまかせて泳ぐ「ドリフトシュノーケリング」が名物で、広い範囲に広がる生き生きとしたサンゴ礁と、そこに群がるカラフルな熱帯魚を優雅に観察できます。",
      visibilityLabel: "透明度",
      visibilityValue: "非常に良好 (15-25m)",
      currentLabel: "海流の状態",
      currentValue: "穏やかなドリフト流",
      highlightsTitle: "マングローブポイントの魅力",
      highlights: [
        "潮の流れに身を任せる爽快なドリフトシュノーケリング体験",
        "色鮮やかなハードコーラル＆ソフトコーラルが広がる広大なサンゴ園",
        "カクレクマノミやチョウチョウウオなど、多種多様な熱帯魚の群れ",
        "神秘的なマングローブの自然保護区に隣接した最高のロケーション",
      ],
      packageTitle: "マングローブポイント シュノーケリングプラン",
      packageSubtitle: "ボート移動、フル機材レンタル、ガイド、マングローブ探検ツアー込み。",
      packages: [
        {
          name: "乗合シュノーケリング トリップ",
          price: "¥2,800",
          unit: "/ 1名様",
          popular: false,
          features: [
            "乗合シュノーケリングボート利用",
            "2スポット巡り（マングローブポイント ＋ ウォールベイ）",
            "シュノーケル機材一式＆ライフジャケット",
            "現地プロガイド",
            "GoPro水中写真撮影",
            "ミネラルウォーター付き",
            "傷害保険込み",
          ],
        },
        {
          name: "VIP コンボプラン（シュノーケル ＋ マングローブ探検）",
          price: "¥4,800",
          unit: "/ 1名様 (2名より)",
          popular: true,
          features: [
            "完全貸切プライベートボート",
            "3大スポット巡り（マングローブポイント、ウォールベイ、GTポイント）",
            "手漕ぎ木製ボートで行くマングローブ林探検ツアー",
            "プレミアムシュノーケル機材",
            "GoPro写真・HD動画撮り放題",
            "ビーチフロントレストランでの特製ランチ",
            "タオル・シャワー・ロッカー完備",
            "VIP傷害保険込み",
          ],
        },
      ],
      bookBtn: "WhatsAppで予約する",
      backBtn: "スポット一覧へ戻る",
      waMessage: "こんにちは Prima Bali Tour、マングローブポイント ヌサレンボンガンのシュノーケリングパッケージを予約したいです。",
    },
  };

  const t = content[lang] || content.id;
  const phoneNumber = "6282339616319";

  const priceLow = lang === "id" ? "275000" : lang === "en" ? "19" : "2800";
  const priceHigh = lang === "id" ? "475000" : lang === "en" ? "32" : "4800";
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
            "image": "https://res.cloudinary.com/dlerwn8af/image/upload/v1785302208/mangrove-point-nusa-lembongan-snorkeling_ghayzo.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "180"
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
              src="https://res.cloudinary.com/dlerwn8af/image/upload/v1785302208/mangrove-point-nusa-lembongan-snorkeling_ghayzo.jpg"
              alt={`${t.title} - ${t.subtitle}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-cyan-500 text-slate-950 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg">
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
            <Compass className="w-5 h-5 text-cyan-400" />
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