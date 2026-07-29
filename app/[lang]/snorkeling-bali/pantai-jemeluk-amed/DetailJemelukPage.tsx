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

export default function DetailJemelukPage({ lang }: Props) {
  const content = {
    id: {
      title: "Pantai Jemeluk Amed",
      subtitle: "Karangasem, Bali Timur",
      rating: "4.8/5 (95+ Ulasan)",
      badge: "Ikon Candi Bawah Laut",
      description:
        "Pantai Jemeluk di kawasan Amed, Karangasem, adalah salah satu destinasi snorkeling paling ikonik di Bali Timur. Terkenal dengan perairannya yang tenang dengan pasir hitam vulkanik, Teluk Jemeluk menyimpan daya tarik unik berupa 'Candi Bawah Laut' (Submarine Temple) serta 'Underwater Post Office'. Spot ini menawarkan taman terumbu karang yang melimpah dan berbagai spesies ikan tropis hanya beberapa meter dari bibir pantai.",
      visibilityLabel: "Visibilitas",
      visibilityValue: "Jernih (15-25m)",
      currentLabel: "Kondisi Arus",
      currentValue: "Sangat Tenang & Hangat",
      highlightsTitle: "Keunggulan Spot Pantai Jemeluk Amed",
      highlights: [
        "Spot unik Candi Bawah Laut (Submarine Temple) & Kotak Pos Bawah Laut",
        "Terumbu karang sehat dan dekat dengan bibir pantai",
        "Ombak tenang dan perairan hangat, cocok untuk pemula & anak-anak",
        "Pemandangan Gunung Agung yang megah dari atas kapal jukung",
      ],
      packageTitle: "Pilihan Paket Snorkeling Pantai Jemeluk",
      packageSubtitle: "Termasuk perahu jukung tradisional, pemandu lokal profesional, dan alat snorkeling.",
      packages: [
        {
          name: "Paket Jukung Sharing / Open Trip",
          price: "Rp 350.000",
          unit: "/ orang",
          popular: false,
          features: [
            "Perahu Jukung Tradisional (Gabungan)",
            "Peralatan Snorkeling Lengkap (Masker & Fin)",
            "Pemandu / Guide Lokal Amed",
            "Satu Botol Air Mineral",
            "Dokumentasi Foto Underwater (HP/GoPro)",
            "Asuransi Keselamatan",
          ],
        },
        {
          name: "Paket Private Jukung Tour",
          price: "Rp 600.000",
          unit: "/ orang (min. 2 pax)",
          popular: true,
          features: [
            "Perahu Jukung Private (Khusus Rombongan)",
            "Eksplorasi 2 Spot (Teluk Jemeluk + Japanese Shipwreck)",
            "Peralatan Snorkeling Premium",
            "Pemandu Khusus & Instruktur Snorkeling",
            "Foto & Video GoPro Sepuasnya",
            "Makan Siang Khas Amed",
            "Asuransi Keselamatan",
          ],
        },
      ],
      bookBtn: "Pesan via WhatsApp",
      backBtn: "Kembali ke Pilihan Spot",
      waMessage: "Halo Prima Bali Tour, saya ingin memesan Paket Snorkeling Pantai Jemeluk Amed.",
    },
    en: {
      title: "Jemeluk Bay Amed",
      subtitle: "Karangasem, East Bali",
      rating: "4.8/5 (95+ Reviews)",
      badge: "Famous Underwater Temple",
      description:
        "Jemeluk Bay in Amed, Karangasem, is one of East Bali's most iconic snorkeling destinations. Famous for its calm waters and volcanic black sand, Jemeluk Bay hides a unique attraction: an underwater 'Submarine Temple' and Mailbox. This spot offers vibrant coral gardens and a rich array of tropical fish just a short swim from the shore.",
      visibilityLabel: "Visibility",
      visibilityValue: "Clear (15-25m)",
      currentLabel: "Current Condition",
      currentValue: "Very Calm & Warm",
      highlightsTitle: "Highlights of Jemeluk Bay Amed",
      highlights: [
        "Unique underwater 'Submarine Temple' & Mailbox attraction",
        "Lush coral gardens accessible close to the shore",
        "Calm waves and warm water, ideal for beginners and families",
        "Stunning backdrop views of Mount Agung from the traditional Jukung boat",
      ],
      packageTitle: "Jemeluk Bay Snorkeling Packages",
      packageSubtitle: "Includes traditional Jukung boat transfer, local guide, and full snorkeling gear.",
      packages: [
        {
          name: "Sharing Jukung Boat Package",
          price: "$23",
          unit: "/ person",
          popular: false,
          features: [
            "Shared Traditional Jukung Boat",
            "Full Snorkeling Gear (Mask & Fins)",
            "Experienced Local Amed Guide",
            "Mineral Water",
            "Underwater Photo Documentation",
            "Safety Insurance",
          ],
        },
        {
          name: "Private Jukung Tour Package",
          price: "$40",
          unit: "/ person (min. 2 pax)",
          popular: true,
          features: [
            "100% Private Jukung Boat",
            "Explore 2 Spots (Jemeluk Bay + Japanese Shipwreck)",
            "Premium Snorkeling Gear",
            "Dedicated Guide & Instructor",
            "Unlimited GoPro Photos & Videos",
            "Local Set Lunch",
            "Safety Insurance",
          ],
        },
      ],
      bookBtn: "Book via WhatsApp",
      backBtn: "Back to All Spots",
      waMessage: "Hello Prima Bali Tour, I would like to book the Jemeluk Bay Amed Snorkeling Package.",
    },
    ja: {
      title: "アメッド・ジュメルックビーチ",
      subtitle: "東バリ・カランガスム",
      rating: "4.8/5 (95件以上のレビュー)",
      badge: "有名な水中寺院スポット",
      description:
        "東バリのカランガスム県アメッドにあるジュメルックビーチは、穏やかな波と黒い火山砂が特徴の人気のシュノーケリングスポットです。海中には珍しい「水中寺院（Submarine Temple）」や「水中ポスト」が沈んでおり、ビーチから目と鼻の先で美しいサンゴ礁やたくさんの熱帯魚に出会うことができます。",
      visibilityLabel: "透明度",
      visibilityValue: "良好 (15-25m)",
      currentLabel: "海流の状態",
      currentValue: "非常に穏やか・温かい",
      highlightsTitle: "ジュメルックビーチの特徴",
      highlights: [
        "幻想的な「水中寺院」と水中ポストのユニークな underwater spot",
        "ビーチから近く、豊かなサンゴ礁と熱帯魚群が観察可能",
        "波が穏やかで水温も高め、初心者やファミリーに最適",
        "ジュクン（伝統小舟）から望む聖峰アグン山の絶景",
      ],
      packageTitle: "ジュメルックビーチ シュノーケリングプラン",
      packageSubtitle: "伝統小舟ジュクン、地元プロガイド、機材レンタルがすべて含まれています。",
      packages: [
        {
          name: "乗合ジュクン ボートプラン",
          price: "¥3,500",
          unit: "/ 1名様",
          popular: false,
          features: [
            "乗合ジュクンボート利用",
            "シュノーケル全機材（マスク・フィン）",
            "アメッド現地プロガイド",
            "ミネラルウォーター",
            "水中写真撮影サービス",
            "傷害保険込み",
          ],
        },
        {
          name: "貸切プライベート ジュクンプラン",
          price: "¥6,000",
          unit: "/ 1名様 (2名より)",
          popular: true,
          features: [
            "貸切ジュクンボート",
            "2 Big スポット巡り（ジュメルック湾＋沈没船 Japanese Shipwreck）",
            "プレミアムシュノーケル機材",
            "専任ガイド & インストラクター",
            "GoPro写真・動画撮り放題",
            "アメッド風ランチ付き",
            "傷害保険込み",
          ],
        },
      ],
      bookBtn: "WhatsAppで予約する",
      backBtn: "スポット一覧へ戻る",
      waMessage: "こんにちは Prima Bali Tour、アメッド・ジュメルックビーチのシュノーケリングパッケージを予約したいです。",
    },
  };

  const t = content[lang] || content.id;
  const phoneNumber = "6282339616319";

  const priceLow = lang === "id" ? "350000" : lang === "en" ? "23" : "3500";
  const priceHigh = lang === "id" ? "600000" : lang === "en" ? "40" : "6000";
  const currency = lang === "id" ? "IDR" : lang === "en" ? "USD" : "JPY";

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": t.title,
            "description": t.description,
            "image": "https://res.cloudinary.com/dlerwn8af/image/upload/v1785303020/snorkeling-pantai-jemeluk_muuoqe.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "95"
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
        <div className="mb-8">
          <Link
            href={`/${lang}/snorkeling-bali`}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backBtn}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dlerwn8af/image/upload/v1785303020/snorkeling-pantai-jemeluk_muuoqe.jpg"
              alt={`${t.title} - ${t.subtitle}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-cyan-500 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
              {t.badge}
            </div>
          </div>

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

        <div id="paket" className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              {t.packageTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.packageSubtitle}
            </p>
          </div>

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

                    <ul className="space-y-3.5 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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