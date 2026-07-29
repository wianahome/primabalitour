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

export default function DetailMantaPointPage({ lang }: Props) {
  const content = {
    id: {
      title: "Manta Point Nusa Penida",
      subtitle: "Nusa Penida, Bali",
      rating: "4.95/5 (210+ Ulasan)",
      badge: "Spot Utama Pari Manta Raksasa",
      description:
        "Manta Point adalah destinasi snorkeling paling spektakuler dan ikonik di Nusa Penida. Terletak di balik tebing dramatis selatan pulau, spot ini merupakan 'Cleaning Station' alami tempat Pari Manta raksasa (Oceanic Manta Ray) berkumpul untuk dibersihkan oleh ikan-ikan kecil. Di sini Anda dapat berenang berdekatan secara aman dengan ikan pari anggun berukuran 3 hingga 5 meter sepanjang tahun.",
      visibilityLabel: "Visibilitas",
      visibilityValue: "15 - 25 Meter",
      currentLabel: "Kondisi Arus",
      currentValue: "Sedang & Bergelombang",
      highlightsTitle: "Keunggulan Spot Manta Point",
      highlights: [
        "Peluang hingga 90% berenang bersama Pari Manta raksasa di habitat alaminya",
        "Lokasi alami Manta Cleaning Station yang aktif sepanjang tahun",
        "Latar belakang pemandangan tebing kapur megah dan laut lepas Nusa Penida",
        "Sensasi berenang bersama biota laut raksasa yang ramah dan tidak berbahaya",
      ],
      packageTitle: "Pilihan Paket Snorkeling Manta Point",
      packageSubtitle: "Sudah termasuk perlengkapan snorkeling lengkap, perahu khusus, instruktur profesional, dan foto dokumentasi GoPro.",
      packages: [
        {
          name: "Paket Snorkeling Sharing Trip",
          price: "Rp 350.000",
          unit: "/ orang",
          popular: false,
          features: [
            "Speed Boat Sharing Snorkeling",
            "Eksplorasi Manta Point + Crystal Bay",
            "Peralatan Snorkeling Lengkap & Jaket Pelampung",
            "Pemandu & Instruktur Snorkeling Pengalaman",
            "Foto & Video GoPro Underwater",
            "Air Mineral & Handuk",
            "Asuransi Keselamatan",
          ],
        },
        {
          name: "Paket VIP Private Boat Tour",
          price: "Rp 650.000",
          unit: "/ orang (min. 2 pax)",
          popular: true,
          features: [
            "100% Private Speed Boat (Tanpa Antre)",
            "Eksplorasi 4 Spot (Manta Point, Manta Bay, Crystal Bay, Gamat Bay)",
            "Peralatan Snorkeling Premium",
            "Pemandu Pribadi Khusus Pengambil Foto Manta",
            "Dokumentasi Foto & Video GoPro Unlimited (HD/4K)",
            "Makan Siang Restoran Nusa Penida",
            "Transfer Antar-Jemput Pelabuhan Penida",
            "Asuransi Keselamatan VIP",
          ],
        },
      ],
      bookBtn: "Pesan Manta Trip via WA",
      backBtn: "Kembali ke Pilihan Spot",
      waMessage: "Halo Prima Bali Tour, saya ingin memesan Paket Snorkeling Manta Point Nusa Penida.",
    },
    en: {
      title: "Manta Point Nusa Penida",
      subtitle: "Nusa Penida, Bali",
      rating: "4.95/5 (210+ Reviews)",
      badge: "Premier Giant Manta Ray Spot",
      description:
        "Manta Point is Nusa Penida's most iconic and breathtaking snorkeling destination. Tucked beneath the island's towering southern cliffs, this spot acts as a natural cleaning station where giant Oceanic Manta Rays gather year-round to be groomed by reef fish. Enjoy the unforgettable experience of swimming safely alongside these gentle ocean giants measuring 3 to 5 meters wide.",
      visibilityLabel: "Visibility",
      visibilityValue: "15 - 25 Meters",
      currentLabel: "Current Condition",
      currentValue: "Moderate & Swelly",
      highlightsTitle: "Highlights of Manta Point Nusa Penida",
      highlights: [
        "Up to 90% chance to swim alongside giant Manta Rays in their wild habitat",
        "Active natural Manta Cleaning Station operating all year long",
        "Stunning backdrop of Nusa Penida's dramatic sea cliffs and open ocean",
        "Safe and magical interaction with gentle marine giants",
      ],
      packageTitle: "Manta Point Snorkeling Packages",
      packageSubtitle: "Includes full snorkeling gear, boat transfer, certified local guide, and underwater photography.",
      packages: [
        {
          name: "Sharing Snorkeling Trip",
          price: "$23",
          unit: "/ person",
          popular: false,
          features: [
            "Shared Speed Boat Tour",
            "Explore Manta Point + Crystal Bay",
            "Full Snorkeling Equipment & Life Jacket",
            "Experienced Local Snorkeling Guide",
            "GoPro Underwater Photography",
            "Mineral Water & Towel",
            "Safety Insurance Coverage",
          ],
        },
        {
          name: "VIP Private Boat Tour",
          price: "$45",
          unit: "/ person (min. 2 pax)",
          popular: true,
          features: [
            "100% Private Speed Boat",
            "Explore 4 Top Spots (Manta Point, Manta Bay, Crystal Bay, Gamat Bay)",
            "Premium Snorkeling Gear",
            "Dedicated Personal Guide & Manta Photo Specialist",
            "Unlimited HD/4K GoPro Photos & Videos",
            "Set Lunch at Nusa Penida Restaurant",
            "Nusa Penida Harbor Pick-up Transfer",
            "VIP Safety Insurance",
          ],
        },
      ],
      bookBtn: "Book Manta Trip via WA",
      backBtn: "Back to All Spots",
      waMessage: "Hello Prima Bali Tour, I would like to book the Manta Point Nusa Penida Snorkeling Package.",
    },
    ja: {
      title: "マンタポイント ヌサペニダ",
      subtitle: "ヌサペニダ島・バリ",
      rating: "4.95/5 (210件以上のレビュー)",
      badge: "巨大ナンヨウマンタ遭遇スポット",
      description:
        "マンタポイントは、ヌサペニダ島で最も人気と感動を誇るシュノーケリングスポットです。島 an 南側の切り立ったダイナミックな断崖絶壁の下に位置し、年間を通じて巨大なナンヨウマンタ（Oceanic Manta Ray）が集まる天然の「クリーニングステーション」となっています。体長3〜5メートルにもなる優雅でフレンドリーなマンタと一緒に泳ぐ夢のような時間を体験できます。",
      visibilityLabel: "透明度",
      visibilityValue: "15 - 25 メートル",
      currentLabel: "海流の状態",
      currentValue: "中程度（波あり）",
      highlightsTitle: "マンタポイント ヌサペニダの魅力",
      highlights: [
        "野生の巨大マンタと一緒に泳げる確率が年間を通じて非常に高いスポット",
        "小魚がマンタの体を掃除する天然のクリーニングステーション",
        "ヌサペニダの雄大な断崖絶壁と外洋が織りなす圧倒的な絶景",
        "おとなしく人間にも慣れている安全で幻想的な海洋生物との遭遇",
      ],
      packageTitle: "マンタポイント シュノーケリングプラン",
      packageSubtitle: "全シュノーケル機材、スピードボート、プロガイド、水中GoPro撮影込み。",
      packages: [
        {
          name: "乗合シュノーケリング トリップ",
          price: "¥3,500",
          unit: "/ 1名様",
          popular: false,
          features: [
            "乗合スピードボート利用",
            "2スポット巡り（マンタポイント ＋ クリスタルベイ）",
            "シュノーケル機材一式＆ライフジャケット",
            "経験 re 豊富な現地ガイド",
            "GoPro水中写真撮影",
            "ミネラルウォーター＆タオル",
            "傷害保険込み",
          ],
        },
        {
          name: "貸切 VIP プライベートボートプラン",
          price: "¥6,500",
          unit: "/ 1名様 (2名より)",
          popular: true,
          features: [
            "完全貸切プライベートスピードボート",
            "4大スポット巡り（マンタポイント、マンタベイ、クリスタルベイ、ガマットベイ）",
            "プレミアムシュノーケル機材",
            "マンタ撮影専任プライベートガイド",
            "GoPro写真・HD/4K動画撮り放題",
            "ヌサペニダ特製レストランランチ",
            "ペニダ島港送迎付き",
            "VIP傷害保険込み",
          ],
        },
      ],
      bookBtn: "WhatsAppでマンタトリップを予約",
      backBtn: "スポット一覧へ戻る",
      waMessage: "こんにちは Prima Bali Tour、マンタポイント ヌサペニダのシュノーケリングパッケージを予約したいです。",
    },
  };

  const t = content[lang] || content.id;
  const phoneNumber = "6282339616319";

  const priceLow = lang === "id" ? "350000" : lang === "en" ? "23" : "3500";
  const priceHigh = lang === "id" ? "650000" : lang === "en" ? "45" : "6500";
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
            "image": "https://res.cloudinary.com/dlerwn8af/image/upload/v1785303716/snorkeling-manta-point-nusa-penida_fgtifi.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.95",
              "reviewCount": "210"
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
              src="https://res.cloudinary.com/dlerwn8af/image/upload/v1785303716/snorkeling-manta-point-nusa-penida_fgtifi.jpg"
              alt={`${t.title} - ${t.subtitle}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg">
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
                      Best Seller
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