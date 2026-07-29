import { Metadata } from "next";
import DetailMantaPointPage from "./DetailMantaPonitPage";


type PageProps = {
  params: Promise<{
    lang: "id" | "en" | "ja";
  }>;
};

// Dynamic Metadata API untuk SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    id: "Paket Snorkeling Manta Point Nusa Penida | Berenang Bersama Pari Manta",
    en: "Manta Point Nusa Penida Snorkeling Tour Bali | Swim with Manta Rays",
    ja: "バリ島 マンタポイント ヌサペニダ シュノーケリングツアー | マンタと泳ぐ",
  };

  const descriptions = {
    id: "Pengalaman terbaik snorkeling di Manta Point Nusa Penida Bali. Berenang bersama Pari Manta raksasa (Oceanic Manta Ray) di stasiun pembersihan alami sepanjang tahun.",
    en: "Experience snorkeling at Manta Point Nusa Penida, Bali. Swim alongside giant Oceanic Manta Rays at their natural cleaning station all year round.",
    ja: "ヌサペニダのマンタポイントで夢のシュノーケリング体験！年間を通じて巨大なナンヨウマンタ（Oceanic Manta Ray）と一緒に泳げる大人気スポット。",
  };

  return {
    title: titles[lang] || titles.id,
    description: descriptions[lang] || descriptions.id,
    alternates: {
      canonical: `https://nusaprimadigital.com/${lang}/snorkeling-bali/manta-point`,
      languages: {
        id: "/id/snorkeling-bali/manta-point",
        en: "/en/snorkeling-bali/manta-point",
        ja: "/ja/snorkeling-bali/manta-point",
      },
    },
    openGraph: {
      title: titles[lang] || titles.id,
      description: descriptions[lang] || descriptions.id,
      images: [
        {
          url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
          width: 1200,
          height: 630,
          alt: "Snorkeling Manta Point Nusa Penida Bali",
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <DetailMantaPointPage lang={lang} />;
}