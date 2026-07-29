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

export default function DetailBlueLagoonPage({ lang }: Props) {
  const content = {
    id: {
      title: "Blue Lagoon Padangbai",
      subtitle: "Karangasem, Bali Timur",
      rating: "4.9/5 (120+ Ulasan)",
      badge: "Spot Snorkeling Terfavorit",
      description:
        "Blue Lagoon di Padangbai, Karangasem, adalah salah satu surga snorkeling terbaik dan paling populer di Bali. Terkenal dengan teluk berpasir putih dan air laut berwarna biru pirus yang jernih. Pantai ini memiliki perairan yang relatif dangkal sehingga sangat aman dan ideal bagi pemula maupun keluarga. Di sini Anda dapat menjumpai penyu laut, ikan badut (Nemo), hingga terumbu karang hias yang memukau.",
      visibilityLabel: "Visibilitas",
      visibilityValue: "Sangat Jernih (15-20m)",
      currentLabel: "Kondisi Arus",
      currentValue: "Tenang & Ramah Pemula",
      highlightsTitle: "Keunggulan Spot Blue Lagoon & Tanjung Jepun",
      highlights: [
        "Kombinasi 2 spot terbaik: Blue Lagoon (Pasir Putih) & Tanjung Jepun (Spot Penyu)",
        "Perairan dangkal dengan visibilitas jernih, cocok untuk anak-anak & pemula",
        "Kaya akan keanekaragaman hayati: Penyu laut, Ikan Nemo, Coral Fish, & Terumbu Karang",
        "Akses cepat menggunakan Perahu Tradisional Jukung dari Pelabuhan Padangbai",
      ],
      packageTitle: "Pilihan Paket Snorkeling Blue Lagoon",
      packageSubtitle: "Termasuk perahu jukung tradisional, pemandu profesional, alat snorkeling, dan makan siang.",
      packages: [
        {
          name: "Paket Sharing / Open Trip",
          price: "Rp 250.000",
          unit: "/ orang",
          popular: false,
          features: [
            "Perahu Jukung Tradisional (Gabungan)",
            "Eksplorasi 2 Spot (Blue Lagoon + Tanjung Jepun)",
            "Peralatan Snorkeling Lengkap (Masker & Fin)",
            "Pemandu / Guide Snorkeling Lokal",
            "Makan Siang & Air Mineral",
            "Fasilitas Handuk, Kamar Mandi & Loker",
            "Asuransi Keselamatan",
          ],
        },
        {
          name: "Paket Private VIP Tour",
          price: "Rp 450.000",
          unit: "/ orang (min. 2 pax)",
          popular: true,
          features: [
            "Perahu Jukung Private (Khusus Rombongan)",
            "Eksplorasi 2 Spot Bebas Durasi (Blue Lagoon + Tanjung Jepun)",
            "Peralatan Snorkeling Premium",
            "Pemandu Khusus & Instruktur Snorkeling",
            "Dokumentasi Foto & Video GoPro Unlimited",
            "Makan Siang Menu Bebas Pilih",
            "Fasilitas Handuk, Kamar Mandi & Loker",
            "Asuransi Keselamatan",
          ],
        },
      ],
      bookBtn: "Pesan via WhatsApp",
      backBtn: "Kembali ke Pilihan Spot",
      waMessage: "Halo Prima Bali Tour, saya ingin memesan Paket Snorkeling Blue Lagoon Padangbai.",
    },
    en: {
      title: "Blue Lagoon Padangbai",
      subtitle: "Karangasem, East Bali",
      rating: "4.9/5 (120+ Reviews)",
      badge: "Most Popular Snorkeling Spot",
      description:
        "Blue Lagoon in Padangbai, Karangasem, is one of the best and most famous snorkeling paradises in Bali. Renowned for its white sandy bay and crystal-clear turquoise waters. Featuring shallow and calm waters, this spot is exceptionally safe and perfect for beginners and families. Expect to swim alongside sea turtles, clownfish (Nemo), and vibrant coral formations.",
      visibilityLabel: "Visibility",
      visibilityValue: "Crystal Clear (15-20m)",
      currentLabel: "Current Condition",
      currentValue: "Calm & Beginner-Friendly",
      highlightsTitle: "Highlights of Blue Lagoon & Tanjung Jepun",
      highlights: [
        "2 Best Spots Combined: Blue Lagoon (White Sand) & Tanjung Jepun (Turtle Spot)",
        "Shallow waters with high visibility, perfect for kids and beginners",
        "Abundant marine life: Sea turtles, Clownfish (Nemo), and colorful corals",
        "Fast boat ride with traditional Jukung boat from Padangbai Harbor",
      ],
      packageTitle: "Blue Lagoon Snorkeling Packages",
      packageSubtitle: "Includes traditional Jukung boat, professional guide, full gear, and lunch.",
      packages: [
        {
          name: "Sharing Boat Package",
          price: "$18",
          unit: "/ person",
          popular: false,
          features: [
            "Shared Traditional Jukung Boat",
            "Explore 2 Spots (Blue Lagoon + Tanjung Jepun)",
            "Full Snorkeling Gear (Mask & Fins)",
            "Local Snorkeling Guide",
            "Set Lunch & Mineral Water",
            "Towel, Shower & Locker Facilities",
            "Safety Insurance",
          ],
        },
        {
          name: "Private VIP Tour Package",
          price: "$30",
          unit: "/ person (min. 2 pax)",
          popular: true,
          features: [
            "100% Private Jukung Boat",
            "Explore 2 Spots with Flexible Timing",
            "Premium Snorkeling Gear",
            "Dedicated Guide & Instructor",
            "Unlimited GoPro Photos & Videos",
            "A la carte Lunch Selection",
            "Towel, Shower & Locker Facilities",
            "Safety Insurance",
          ],
        },
      ],
      bookBtn: "Book via WhatsApp",
      backBtn: "Back to All Spots",
      waMessage: "Hello Prima Bali Tour, I would like to book the Blue Lagoon Padangbai Snorkeling Package.",
    },
    ja: {
      title: "ブルーラグーン パダンバイ",
      subtitle: "東バリ・カランガスム",
      rating: "4.9/5 (120件以上のレビュー)",
      badge: "1番人気のシュノーケリングスポット",
      description:
        "カランガスム県パダンバイにあるブルーラグーンは、バリ島で最も人気のあるシュノーケリング天国の一つです。白い砂浜と澄み切ったエメラルドグリーンの海が特徴。波が穏やかで浅瀬が広がっているため、初心者やお子様連れのファミリーにも非常に安全です。野生のウミガメやカクレクマノミ（ニモ）、美しいサンゴ礁に出会えます。",
      visibilityLabel: "透明度",
      visibilityValue: "非常に良好 (15-20m)",
      currentLabel: "海流の状態",
      currentValue: "穏やか・初心者向け",
      highlightsTitle: "ブルーラグーン＆タンジュンジュプンの魅力",
      highlights: [
        "2大人気スポットを巡る：ブルーラグーン（白砂）＆ タンジュンジュプン（ウミガメ）",
        "透明度の高い浅瀬エリアで、お子様や泳ぎが得意でない方でも安心",
        "ウミガメ、熱帯魚、カラフルなサンゴ礁などの豊かな海洋生物",
        "パダンバイ港から伝統小舟ジュクンでわずか数分の好アクセス",
      ],
      packageTitle: "ブルーラグーン シュノーケリングプラン",
      packageSubtitle: "伝統ジュクンボート、プロガイド、機材一式、ランチ、シャワー施設込み。",
      packages: [
        {
          name: "乗合ジュクン ボートプラン",
          price: "¥2,500",
          unit: "/ 1名様",
          popular: false,
          features: [
            "乗合ジュクンボート利用",
            "2スポット巡り（ブルーラグーン ＋ タンジュンジュプン）",
            "シュノーケル全機材（マスク・フィン）",
            "現地シュノーケリングガイド",
            "ランチ＆ミネラルウォーター",
            "タオル・シャワー・ロッカー完備",
            "傷害保険込み",
          ],
        },
        {
          name: "貸切 VIP プライベートプラン",
          price: "¥4,500",
          unit: "/ 1名様 (2名より)",
          popular: true,
          features: [
            "完全貸切ジュクンボート",
            "2スポットを時間制限なしで満喫",
            "プレミアムシュノーケル機材",
            "専任ガイド＆インストラクター",
            "GoPro写真・動画撮り放題",
            "選べる特製ランチ",
            "タオル・シャワー・ロッカー完備",
            "傷害保険込み",
          ],
        },
      ],
      bookBtn: "WhatsAppで予約する",
      backBtn: "スポット一覧へ戻る",
      waMessage: "こんにちは Prima Bali Tour、ブルーラグーン パダンバイのシュノーケリングパッケージを予約したいです。",
    },
  };

  const t = content[lang] || content.id;
  const phoneNumber = "6282339616319";

  const priceLow = lang === "id" ? "250000" : lang === "en" ? "18" : "2500";
  const priceHigh = lang === "id" ? "450000" : lang === "en" ? "30" : "4500";
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
            "image": "https://res.cloudinary.com/dlerwn8af/image/upload/v1785211873/iar_jernih_blue_lagoon_iefmbw.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "120"
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
              src="https://res.cloudinary.com/dlerwn8af/image/upload/v1785211873/iar_jernih_blue_lagoon_iefmbw.jpg"
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