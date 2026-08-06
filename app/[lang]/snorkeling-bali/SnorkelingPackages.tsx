"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Waves,
  Clock,
  MapPin,
  CheckCircle2,
  Anchor,
  ShieldCheck,
  ChevronRight,
  Search,
} from "lucide-react";

type Language = "id" | "en" | "ja";

interface PackageItem {
  id: number;
  badge?: Record<Language, string>;
  name: Record<Language, string>;
  location: Record<Language, string>;
  duration: Record<Language, string>;
  priceRange: string;
  highlights: Record<Language, string[]>;
  description: Record<Language, string>;
}

export interface SnorkelingPackagesProps {
  dict: any; // atau sesuaikan dengan tipe data dictionary Anda
  lang: string;
}

// Multi-language UI labels
const translations = {
  id: {
    tagline: "Eksplorasi Keindahan Bawah Laut Bali",
    title: "Paket Harga Snorkeling Terlengkap",
    subtitle:
      "Pilih destinasi impian Anda dari 7 paket snorkeling populer di Bali dengan fasilitas terbaik dan instruktur profesional.",
    searchPlaceholder: "Cari lokasi atau nama paket...",
    tableView: "Tampilan Tabel",
    gridView: "Tampilan Kartu",
    tableNo: "No",
    tableName: "Nama Paket",
    tableLocation: "Lokasi Utama",
    tableDuration: "Durasi",
    tablePrice: "Estimasi Harga / Orang",
    tableHighlights: "Fasilitas & Highlight",
    tableAction: "Aksi",
    bookBtn: "Pesan",
    detailBtn: "Detail Paket",
    startingFrom: "MULAI DARI",
    inclusionsTitle: "FASILITAS TERMASUK:",
    feature1Title: "Peralatan Standar Lengkap",
    feature1Desc:
      "Seluruh paket mencakup Mask, Snorkel, Fins (sirip), dan Life Jacket berkondisi prima.",
    feature2Title: "Pemandu & Asuransi",
    feature2Desc:
      "Didampingi instruktur lokal berpengalaman serta perlindungan asuransi keselamatan dasar.",
    feature3Title: "Layanan Tambahan",
    feature3Desc:
      "Tersedia add-on penjemputan hotel, dokumentasi underwater GoPro, dan paket kustom.",
  },
  en: {
    tagline: "Explore Bali's Underwater Beauty",
    title: "Complete Snorkeling Package Prices",
    subtitle:
      "Choose your dream destination from 7 popular snorkeling packages in Bali with top facilities and professional guides.",
    searchPlaceholder: "Search location or package name...",
    tableView: "Table View",
    gridView: "Grid View",
    tableNo: "No",
    tableName: "Package Name",
    tableLocation: "Main Location",
    tableDuration: "Duration",
    tablePrice: "Est. Price / Person",
    tableHighlights: "Inclusions & Highlights",
    tableAction: "Action",
    bookBtn: "Book Now",
    detailBtn: "Package Details",
    startingFrom: "STARTING FROM",
    inclusionsTitle: "INCLUSIONS & HIGHLIGHTS:",
    feature1Title: "Complete Gear Included",
    feature1Desc:
      "All packages include top-condition Mask, Snorkel, Fins, and Life Jacket.",
    feature2Title: "Guides & Insurance",
    feature2Desc:
      "Accompanied by experienced local instructors and basic safety insurance coverage.",
    feature3Title: "Extra Services",
    feature3Desc:
      "Hotel transfer, GoPro underwater photography, and custom packages available.",
  },
  ja: {
    tagline: "バリ島の美しい水中世界を探検",
    title: "シュノーケリングパッケージ料金一覧",
    subtitle:
      "プロのガイドと充実した設備を備えた、バリ島で人気のシュノーケリング7プランからお選びください。",
    searchPlaceholder: "場所やパッケージ名で検索...",
    tableView: "テーブル表示",
    gridView: "カード表示",
    tableNo: "No",
    tableName: "プラン名",
    tableLocation: "主要エリア",
    tableDuration: "所要時間",
    tablePrice: "概算料金 / 1名様",
    tableHighlights: "セット内容・ハイライト",
    tableAction: "操作",
    bookBtn: "予約する",
    detailBtn: "詳細を見る",
    startingFrom: "最安料金",
    inclusionsTitle: "含まれるもの:",
    feature1Title: "一式レンタル付き",
    feature1Desc:
      "全プランにマスク、シュノーケル、フィン、ライフジャケットが含まれます。",
    feature2Title: "ガイド＆保険付き",
    feature2Desc:
      "経験豊富なローカルガイドが同行し、基本傷害保険も適用されます。",
    feature3Title: "追加サービス",
    feature3Desc:
      "ホテル送迎、GoPro水中写真撮影、カスタムプランも手配可能です。",
  },
};

const packagesData: PackageItem[] = [
  {
    id: 1,
    badge: {
      id: "Pemula & Keluarga",
      en: "Beginner & Family",
      ja: "初心者・ファミリー向け",
    },
    name: {
      id: "Tanjung Benoa Snorkeling",
      en: "Tanjung Benoa Snorkeling",
      ja: "タンジュン・ベノア シュノーケリング",
    },
    location: {
      id: "Tanjung Benoa, Nusa Dua",
      en: "Tanjung Benoa, Nusa Dua",
      ja: "ヌサドゥア・タンジュンベノア",
    },
    duration: { id: "1 - 2 Jam", en: "1 - 2 Hours", ja: "1〜2時間" },
    priceRange: "Rp 150.000 - Rp 250.000",
    highlights: {
      id: [
        "Peralatan Snorkeling Lengkap",
        "Instruktur / Pemandu",
        "Jaket Pelampung",
        "Fasilitas Ruang Bilas & Loker",
      ],
      en: [
        "Full Snorkeling Equipment",
        "Instructor / Guide",
        "Life Jacket",
        "Shower & Locker Facilities",
      ],
      ja: [
        "シュノーケリング器材一式",
        "インストラクター/ガイド",
        "ライフジャケット",
        "シャワー＆ロッカー利用",
      ],
    },
    description: {
      id: "Sangat cocok untuk pemula dan keluarga yang ingin menikmati pemandangan bawah laut dasar dengan gelombang tenang.",
      en: "Ideal for beginners and families looking to enjoy basic underwater views in calm waters.",
      ja: "波が穏やかで、初心者やご家族連れが安心して楽しめるエントリープランです。",
    },
  },
  {
    id: 2,
    badge: { id: "Populer", en: "Popular", ja: "人気" },
    name: {
      id: "Padangbai Blue Lagoon",
      en: "Padangbai Blue Lagoon",
      ja: "パダンバイ ブルーラグーン",
    },
    location: {
      id: "Padangbai, Karangasem",
      en: "Padangbai, Karangasem",
      ja: "カランガセム・パダンバイ",
    },
    duration: {
      id: "Half Day (4 - 5 Jam)",
      en: "Half Day (4 - 5 Hours)",
      ja: "半日 (4〜5時間)",
    },
    priceRange: "Rp 350.000 - Rp 500.000",
    highlights: {
      id: [
        "Perahu Tradisional (Jukung)",
        "2 Titik Snorkeling (Blue Lagoon & Tanjung Jepun)",
        "Makan Siang",
        "Pemandu & Equipment",
      ],
      en: [
        "Traditional Boat (Jukung)",
        "2 Snorkeling Spots (Blue Lagoon & Tanjung Jepun)",
        "Lunch Included",
        "Guide & Equipment",
      ],
      ja: [
        "ジュクン（ジュクン伝統船）乗船",
        "2つのシュノーケリングスポット（ブルーラグーン＆タンジュンジュプン）",
        "ランチ付き",
        "ガイド＆器材一式",
      ],
    },
    description: {
      id: "Nikmati keindahan terumbu karang warna-warni dan keberagaman ikan tropis di dua spot snorkeling terbaik Padangbai.",
      en: "Enjoy colorful coral reefs and diverse tropical fish at Padangbai's top two snorkeling spots.",
      ja: "パダンバイを代表する2大スポットで、色鮮やかなサンゴ礁と熱帯魚の群れを鑑賞できます。",
    },
  },
  {
    id: 3,
    badge: { id: "Best Seller", en: "Best Seller", ja: "一番人気" },
    name: {
      id: "Nusa Penida Manta Spot",
      en: "Nusa Penida Manta Spot",
      ja: "ペニダ島 マンタスポット",
    },
    location: {
      id: "Manta Bay & Crystal Bay, Nusa Penida",
      en: "Manta Bay & Crystal Bay, Nusa Penida",
      ja: "ペニダ島 マンタベイ＆クリスタルベイ",
    },
    duration: {
      id: "Full Day (7 - 8 Jam)",
      en: "Full Day (7 - 8 Hours)",
      ja: "終日 (7〜8時間)",
    },
    priceRange: "Rp 750.000 - Rp 950.000",
    highlights: {
      id: [
        "Tiket Fast Boat PP",
        "Berenang Bersama Pari Manta",
        "3-4 Spot Snorkeling Terbaik",
        "Makan Siang Restoran Nusa Penida",
      ],
      en: [
        "Round-trip Fast Boat Ticket",
        "Swim with Manta Rays",
        "3-4 Top Snorkeling Spots",
        "Restaurant Lunch in Nusa Penida",
      ],
      ja: [
        "スピードボート往復チケット",
        "マンタと一緒に泳ぐ体験",
        "3〜4ヶ所のベストスポット巡り",
        "ペニダ島レストランでのランチ",
      ],
    },
    description: {
      id: "Pengalaman langka berenang bersama Manta Ray yang megah di perairan jernih Pulau Nusa Penida.",
      en: "A rare opportunity to swim alongside majestic Manta Rays in the crystal-clear waters of Nusa Penida.",
      ja: "ペニダ島の澄み切った海で、優雅に泳ぐ巨大マンタと一緒に泳ぐ感動体験。",
    },
  },
  {
    id: 4,
    name: {
      id: "Nusa Lembongan & Ceningan Combo",
      en: "Nusa Lembongan & Ceningan Combo",
      ja: "レンボンガン島＆チェニガン島 コンボ",
    },
    location: {
      id: "Mangrove Point & Wall Bay",
      en: "Mangrove Point & Wall Bay",
      ja: "マングローブポイント＆ウォールベイ",
    },
    duration: {
      id: "Full Day (6 - 7 Jam)",
      en: "Full Day (6 - 7 Hours)",
      ja: "終日 (6〜7時間)",
    },
    priceRange: "Rp 650.000 - Rp 850.000",
    highlights: {
      id: [
        "Fast Boat PP",
        "3 Titik Snorkeling",
        "Tour Hutan Mangrove dengan Sampan",
        "Makan Siang & Antar-Jemput Hotel",
      ],
      en: [
        "Round-trip Fast Boat",
        "3 Snorkeling Spots",
        "Mangrove Forest Tour by Canoe",
        "Lunch & Hotel Transfer",
      ],
      ja: [
        "スピードボート往復",
        "3ヶ所のシュノーケリングポイント",
        "小舟で行くマングローブ探検ツアー",
        "ランチ＆ホテル送迎付き",
      ],
    },
    description: {
      id: "Kombinasi eksplorasi bawah laut dan keindahan alam hutan mangrove di Lembongan & Ceningan.",
      en: "A combined experience of underwater exploration and natural mangrove beauty in Lembongan & Ceningan.",
      ja: "シュノーケリングとマングローブの自然探検を組み合わせた欲張りプラン。",
    },
  },
  {
    id: 5,
    name: {
      id: "Amed Coral Reef & Shipwreck",
      en: "Amed Coral Reef & Shipwreck",
      ja: "アメッド サンゴ礁＆沈没船",
    },
    location: {
      id: "Amed & Japanese Shipwreck",
      en: "Amed & Japanese Shipwreck",
      ja: "アメッド＆沈船ポイント",
    },
    duration: {
      id: "Full Day (6 - 8 Jam)",
      en: "Full Day (6 - 8 Hours)",
      ja: "終日 (6〜8時間)",
    },
    priceRange: "Rp 400.000 - Rp 600.000",
    highlights: {
      id: [
        "Eksplorasi Bangkai Kapal Jepang",
        "Pemandu Lokal Berpengalaman",
        "Taman Terumbu Karang Alami",
        "Makan Siang",
      ],
      en: [
        "Explore Japanese Shipwreck",
        "Experienced Local Guide",
        "Natural Coral Reef Garden",
        "Lunch Included",
      ],
      ja: [
        "日本船の沈没船スポット探索",
        "ベテランローカルガイド",
        "天然サンゴ礁ガーデン",
        "ランチ付き",
      ],
    },
    description: {
      id: "Menyusuri sejarah bawah laut di spot Kapal Karam Jepang yang dipenuhi kehidupan laut memukau.",
      en: "Explore underwater history at the Japanese Shipwreck site, teeming with vibrant marine life.",
      ja: "豊かな海洋生物が集まる旧日本軍の沈没船スポットで、神秘的な水中世界を満喫。",
    },
  },
  {
    id: 6,
    name: {
      id: "Tulamben USAT Liberty & Reef",
      en: "Tulamben USAT Liberty & Reef",
      ja: "トランベン USATリバティ号＆リーフ",
    },
    location: {
      id: "Tulamben, Karangasem",
      en: "Tulamben, Karangasem",
      ja: "カランガセム・トランベン",
    },
    duration: {
      id: "Full Day (7 - 8 Jam)",
      en: "Full Day (7 - 8 Hours)",
      ja: "終日 (7〜8時間)",
    },
    priceRange: "Rp 450.000 - Rp 650.000",
    highlights: {
      id: [
        "Situs Bersejarah USAT Liberty Wreck",
        "Pemandu Profesional",
        "Perlengkapan Snorkeling Full Set",
        "Makan Siang Khas Bali",
      ],
      en: [
        "Historic USAT Liberty Wreck Site",
        "Professional Guide",
        "Full Snorkeling Equipment Set",
        "Balinese Lunch",
      ],
      ja: [
        "歴史的沈没船USATリバティ号",
        "プロガイド同行",
        "シュノーケリング一式",
        "バリ風ランチ",
      ],
    },
    description: {
      id: "Melihat dari dekat bangkai kapal perang dunia II USAT Liberty yang megah hanya dari permukaan laut.",
      en: "View the historic WWII USAT Liberty shipwreck up close right from the sea surface.",
      ja: "第二次世界大戦の歴史的沈没船USATリバティ号を、水面から間近に観察できます。",
    },
  },
  {
    id: 7,
    badge: {
      id: "Premium Experience",
      en: "Premium Experience",
      ja: "プレミアム体験",
    },
    name: {
      id: "Menjangan Island Marine Park",
      en: "Menjangan Island Marine Park",
      ja: "ムンジャンガン島 海洋公園",
    },
    location: {
      id: "Taman Nasional Bali Barat",
      en: "West Bali National Park",
      ja: "西部バリ国立公園",
    },
    duration: {
      id: "Full Day (8 - 10 Jam)",
      en: "Full Day (8 - 10 Hours)",
      ja: "終日 (8〜10時間)",
    },
    priceRange: "Rp 850.000 - Rp 1.100.000",
    highlights: {
      id: [
        "Tiket Masuk TNBB & Izin Konservasi",
        "Perahu Kapal Motor PP",
        "2 Spot Wall Diving / Snorkeling",
        "Makan Siang Box / Picnic",
      ],
      en: [
        "National Park Entry & Conservation Permit",
        "Round-trip Motorized Boat",
        "2 Wall Reef Snorkeling Spots",
        "Boxed / Picnic Lunch",
      ],
      ja: [
        "国立公園入園料・保全許可",
        "モーターボート往復",
        "2ヶ所のウォールドロップオフスポット",
        "ランチボックス付き",
      ],
    },
    description: {
      id: "Eksplorasi tebing bawah laut (wall reef) dengan visibilitas paling jernih di kawasan konservasi terlindungi.",
      en: "Explore underwater drop-offs (wall reefs) with top clarity in a protected conservation area.",
      ja: "バリ島最高の透明度を誇る保護区で、ダイナミックな水中ドロップオフを体験。",
    },
  },
];

export default function SnorkelingPackages({ dict, lang }: SnorkelingPackagesProps) {
  // Tentukan bahasa aktif dari prop (dengan fallback ke "id")
  const currentLang = (lang as Language) in translations ? (lang as Language) : "id";
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"grid" | "table">("table");

  const t = translations[currentLang];

  const filteredPackages = packagesData.filter((pkg) => {
    const nameStr = pkg.name[currentLang]?.toLowerCase() || "";
    const locStr = pkg.location[currentLang]?.toLowerCase() || "";
    const term = searchTerm.toLowerCase();
    return nameStr.includes(term) || locStr.includes(term);
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            key={`tagline-${currentLang}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3"
          >
            <Waves className="w-4 h-4" />
            {t.tagline}
          </motion.div>
          <motion.h1
            key={`title-${currentLang}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {t.title}
          </motion.h1>
          <motion.p
            key={`sub-${currentLang}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Filter & View Switcher */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          <div className="flex bg-slate-200 p-1 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("table")}
              className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "table"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.tableView}
            </button>
            <button
              onClick={() => setActiveTab("grid")}
              className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "grid"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.gridView}
            </button>
          </div>
        </div>

        {/* Content View: Table */}
        {activeTab === "table" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-5 font-semibold">{t.tableNo}</th>
                    <th className="py-4 px-5 font-semibold">{t.tableName}</th>
                    <th className="py-4 px-5 font-semibold">{t.tableLocation}</th>
                    <th className="py-4 px-5 font-semibold">{t.tableDuration}</th>
                    <th className="py-4 px-5 font-semibold">{t.tablePrice}</th>
                    <th className="py-4 px-5 font-semibold">{t.tableHighlights}</th>
                    <th className="py-4 px-5 font-semibold text-center">{t.tableAction}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredPackages.map((pkg, index) => (
                    <tr
                      key={pkg.id}
                      className="hover:bg-blue-50/40 transition-colors duration-150"
                    >
                      <td className="py-4 px-5 font-medium text-slate-400">
                        {index + 1}
                      </td>
                      <td className="py-4 px-5 font-bold text-slate-900">
                        {pkg.name[currentLang]}
                        {pkg.badge && (
                          <span className="ml-2 inline-block bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                            {pkg.badge[currentLang]}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                          {pkg.location[currentLang]}
                        </div>
                      </td>
                      <td className="py-4 px-5 text-slate-600 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {pkg.duration[currentLang]}
                        </div>
                      </td>
                      <td className="py-4 px-5 font-bold text-emerald-600 whitespace-nowrap">
                        {pkg.priceRange}
                      </td>
                      <td className="py-4 px-5 text-slate-600 min-w-[280px]">
                        <ul className="space-y-1">
                          {pkg.highlights[currentLang].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-4 px-5 text-center whitespace-nowrap">
                        <button className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors shadow-sm">
                          {t.bookBtn} <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Content View: Grid */}
        {activeTab === "grid" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      #{pkg.id}
                    </span>
                    {pkg.badge && (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {pkg.badge[currentLang]}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pkg.name[currentLang]}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                    {pkg.description[currentLang]}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      <span>{pkg.location[currentLang]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>{pkg.duration[currentLang]}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 mb-6">
                    <p className="text-[10px] font-bold text-slate-400 mb-2 tracking-wider">
                      {t.inclusionsTitle}
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.highlights[currentLang].map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                      {t.startingFrom}
                    </span>
                    <span className="text-base font-extrabold text-emerald-600">
                      {pkg.priceRange.split(" - ")[0]}
                    </span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                    {t.detailBtn}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* General Inclusions Footer */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{t.feature1Title}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.feature1Desc}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{t.feature2Title}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.feature2Desc}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{t.feature3Title}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.feature3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}