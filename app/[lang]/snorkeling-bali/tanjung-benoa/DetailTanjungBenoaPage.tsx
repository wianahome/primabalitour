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

export default function DetailTanjungBenoaPage({ lang }: Props) {
  const content = {
    id: {
      title: "Tanjung Benoa Bali",
      subtitle: "Badung, Bali Selatan",
      rating: "4.85/5 (250+ Ulasan)",
      badge: "Pusat Water Sport & Snorkeling Keluarga",
      description:
        "Tanjung Benoa adalah pusat wisata bahari dan water sport paling populer di Bali Selatan. Terkenal dengan garis pantai pasir putih yang panjang serta perairan teluk yang sangat tenang dan dangkal. Tempat ini sangat cocok untuk aktivitas snorkeling keluarga, anak-anak, hingga pemula yang ingin memberi makan ikan tropis warna-warni secara langsung, atau mengombinasikannya dengan kunjungan ke Pulau Penyu (Turtle Island).",
      visibilityLabel: "Visibilitas",
      visibilityValue: "Jernih (10-15m)",
      currentLabel: "Kondisi Arus",
      currentValue: "Sangat Tenang & Dangkal",
      highlightsTitle: "Keunggulan Spot Tanjung Benoa",
      highlights: [
        "Perairan paling tenang di Bali, sangat aman untuk anak-anak & pemula",
        "Sensasi Fish Feeding: Memberi makan ratusan ikan hias langsung dari tangan Anda",
        "Akses lokasi sangat strategis dekat dengan Kuta, Seminyak, Nusa Dua, & Bandara",
        "Dapat dikombinasikan dengan Tour Glass Bottom Boat & Penangkaran Pulau Penyu",
      ],
      packageTitle: "Pilihan Paket Snorkeling Tanjung Benoa",
      packageSubtitle: "Sudah termasuk perahu motor, peralatan snorkeling lengkap, instruktur, pemandu, dan asuransi keselamatan.",
      packages: [
        {
          name: "Paket Snorkeling + Fish Feeding",
          price: "Rp 200.000",
          unit: "/ orang",
          popular: false,
          features: [
            "Perahu Motor Snorkeling",
            "Eksplorasi Spot Karang Tanjung Benoa",
            "Peralatan Snorkeling Lengkap (Masker, Snorkel, Fin)",
            "Roti / Makanan Ikan (Fish Food) Gratis",
            "Pemandu / Instruktur Snorkeling Lokal",
            "Fasilitas Kamar Mandi, Loker, & Handuk",
            "Asuransi Keselamatan",
          ],
        },
        {
          name: "Paket Combo VIP (Snorkeling + Glass Bottom + Pulau Penyu)",
          price: "Rp 375.000",
          unit: "/ orang (min. 2 pax)",
          popular: true,
          features: [
            "Perahu Glass Bottom Boat (Lantai Kaca Transparan)",
            "Eksplorasi Snorkeling + Feeding Ikan Tropis",
            "Tiket Masuk Konservasi Pulau Penyu (Turtle Island)",
            "Foto Bersama Penyu Raksasa, Burung Kakatua, & Ular Piton",
            "Peralatan Snorkeling Premium",
            "Pemandu Khusus Selama Tour",
            "Fasilitas Mandi, Loker, Handuk, & Air Mineral",
            "Asuransi Keselamatan VIP",
          ],
        },
      ],
      bookBtn: "Pesan via WhatsApp",
      backBtn: "Kembali ke Pilihan Spot",
      waMessage: "Halo Prima Bali Tour, saya ingin memesan Paket Snorkeling Tanjung Benoa.",
    },
    en: {
      title: "Tanjung Benoa Bali",
      subtitle: "Badung, South Bali",
      rating: "4.85/5 (250+ Reviews)",
      badge: "Water Sport & Family Snorkeling Hub",
      description:
        "Tanjung Benoa is the premier water sports and marine tourism hub in South Bali. Celebrated for its long stretch of white sand beach and exceptionally calm, shallow waters. It is the ideal location for family snorkeling, kids, and beginners looking to feed colorful reef fish by hand, or combine their experience with a visit to the famous Turtle Island sanctuary.",
      visibilityLabel: "Visibility",
      visibilityValue: "Clear (10-15m)",
      currentLabel: "Current Condition",
      currentValue: "Very Calm & Shallow",
      highlightsTitle: "Highlights of Tanjung Benoa",
      highlights: [
        "Calm waters in South Bali, making it 100% safe for kids and first-time snorkelers",
        "Interactive Fish Feeding: Feed hundreds of tropical fish directly from your hand",
        "Prime location close to Nusa Dua, Kuta, Seminyak, and Ngurah Rai Airport",
        "Easy combo options with Glass Bottom Boat rides and Turtle Island Conservation",
      ],
      packageTitle: "Tanjung Benoa Snorkeling Packages",
      packageSubtitle: "Includes motorboat, full gear, instructor, fish food, and safety insurance.",
      packages: [
        {
          name: "Snorkeling + Fish Feeding Package",
          price: "$15",
          unit: "/ person",
          popular: false,
          features: [
            "Motorboat Ride to Snorkeling Spot",
            "Explore Tanjung Benoa Reef Spot",
            "Full Gear (Mask, Snorkel, Fins, & Life Jacket)",
            "Free Fish Food Package",
            "Local Snorkeling Instructor & Guide",
            "Shower, Locker, & Towel Facilities",
            "Safety Insurance Coverage",
          ],
        },
        {
          name: "VIP Combo (Snorkel + Glass Bottom + Turtle Island)",
          price: "$26",
          unit: "/ person (min. 2 pax)",
          popular: true,
          features: [
            "Glass Bottom Boat Ride (Transparent Glass Floor)",
            "Snorkeling & Hand Fish Feeding Session",
            "Admission Ticket to Turtle Island Sanctuary",
            "Photo ops with Giant Sea Turtles, Birds, & Exotic Reptiles",
            "Premium Snorkeling Gear",
            "Dedicated Tour Guide",
            "Shower, Towel, Locker, & Mineral Water",
            "VIP Safety Insurance",
          ],
        },
      ],
      bookBtn: "Book via WhatsApp",
      backBtn: "Back to All Spots",
      waMessage: "Hello Prima Bali Tour, I would like to book the Tanjung Benoa Snorkeling Package.",
    },
    ja: {
      title: "タンジュンベノア バリ",
      subtitle: "バドゥン県・南バリ",
      rating: "4.85/5 (250件以上のレビュー)",
      badge: "マリンスポーツ＆ファミリー向けスポット",
      description:
        "タンジュンベノアは、南バリ島を代表するマリンスポーツとマリンアクティビティの中心地です。美しい白い砂浜と、波がほとんどない浅瀬の海が特徴。お子様連れのファミリーや初めてシュノーケリングを体験する方に最適で、手から直接熱帯魚に餌をあげる体験や、ウミガメ島（Turtle Island）保護区の観光と合わせたプランが大人気です。",
      visibilityLabel: "透明度",
      visibilityValue: "良好 (10-15m)",
      currentLabel: "海流の状態",
      currentValue: "非常に穏やか・浅瀬",
      highlightsTitle: "タンジュンベノアの魅力",
      highlights: [
        "バリ島で最も波が穏やかなエリア。お子様や泳ぎが得意でない方も安心",
        "熱帯魚の餌やり体験（フィッシュフィーディング）でカラフルな魚たちに囲まれる感動",
        "ヌサドゥア、クタ、スミニャック、空港からのアクセスが抜群の好立地",
        "グラスボトムボート（底がガラスの船）やウミガメ島観光とのセットがおすすめ",
      ],
      packageTitle: "タンジュンベノア シュノーケリングプラン",
      packageSubtitle: "モーターボート移動、フル機材レンタル、インストラクター、魚のエサ、傷害保険込み。",
      packages: [
        {
          name: "シュノーケリング ＋ 魚のエサやりプラン",
          price: "¥2,200",
          unit: "/ 1名様",
          popular: false,
          features: [
            "モーターボート移動",
            "タンジュンベノア サンゴ礁スポット巡り",
            "シュノーケル機材一式＆ライフジャケット",
            "無料の魚のエサ（Fish Food）付き",
            "現地プロガイド＆インストラクター",
            "シャワー・ロッカー・タオル完備",
            "傷害保険込み",
          ],
        },
        {
          name: "VIPコンボ（シュノーケル ＋ グラスボトム ＋ ウミガメ島）",
          price: "¥3,900",
          unit: "/ 1名様 (2名より)",
          popular: true,
          features: [
            "グラスボトムボート（船底ガラス船）乗船",
            "シュノーケリング＆熱帯魚の餌やり体験",
            "ウミガメ島（Turtle Island）保護区入場チケット",
            "巨大ウミガメやオウム、爬虫類との記念撮影",
            "プレミアムシュノーケル機材",
            "専任ツアーガイド",
            "シャワー・タオル・ロッカー・水付き",
            "VIP傷害保険込み",
          ],
        },
      ],
      bookBtn: "WhatsAppで予約する",
      backBtn: "スポット一覧へ戻ur",
      waMessage: "こんにちは Prima Bali Tour、タンジュンベノアのシュノーケリングパッケージを予約したいです。",
    },
  };

  const t = content[lang] || content.id;
  const phoneNumber = "6282339616319";

  const priceLow = lang === "id" ? "200000" : lang === "en" ? "15" : "2200";
  const priceHigh = lang === "id" ? "375000" : lang === "en" ? "26" : "3900";
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
            "image": "https://res.cloudinary.com/dlerwn8af/image/upload/v1785302208/tanjung-benoa-snorkeling_nppupp.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.85",
              "reviewCount": "250"
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
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200"
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
                      Paling Populer
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