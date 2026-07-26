import { NextResponse } from "next/server";

const SUMOPOD_API_KEY = process.env.SUMOPOD_API_KEY || "";
const SUMOPOD_BASE_URL = "https://ai.sumopod.com/v1/chat/completions";
const CHOSEN_MODEL = "gpt-4o-mini";

export async function POST(req: Request) {
  try {
    const { action, prompt, payload } = await req.json();

    if (!action) {
      return NextResponse.json(
        { error: "Action (intent) harus ditentukan." },
        { status: 400 }
      );
    }

    let systemPrompt = "";
    let userContent = "";

    switch (action) {
      case "generate_itinerary":
        systemPrompt = `Anda adalah Agent Travel Expert untuk Prima Bali Tour. 
Tugas Anda adalah membuat rencana perjalanan (Itinerary) lengkap dalam format JSON murni.
Format JSON harus persis seperti berikut:
{
  "title": "Nama Paket Itinerary",
  "pax_count": number,
  "estimated_price": number,
  "description": "Ringkasan singkat mengenai perjalanan ini",
  "days": [
    {
      "day_number": 1,
      "title": "Judul kegiatan hari ke-1",
      "destinations": ["Destinasi A", "Destinasi B"],
      "hotel_suggestion": "Rekomendasi Nama Hotel",
      "notes": "Catatan singkat / arahan konsumsi"
    }
  ]
}`;
        userContent = `Buatkan itinerary perjalanan dengan detail: ${prompt}. Informasi tambahan: ${JSON.stringify(
          payload || {}
        )}`;
        break;

      case "generate_proposal":
        systemPrompt = `Anda adalah proposal writer profesional untuk agen perjalanan. 
Buatkan draft proposal penawaran tour untuk klien dalam format JSON murni:
{
  "client_name": "Nama Klien",
  "package_title": "Judul Paket Penawaran",
  "pax_count": number,
  "total_price": number,
  "highlights": ["Highlight 1", "Highlight 2"],
  "summary_notes": "Pesan personal untuk klien"
}`;
        userContent = `Buat proposal berdasarkan permintaan: ${prompt}`;
        break;

      case "create_destination":
        systemPrompt = `Anda adalah kurator tempat wisata Bali. 
Buatkan data tempat wisata baru untuk katalog dalam format JSON murni:
{
  "name": "Nama Destinasi",
  "category": "Pantai / Alam / Budaya / Kuliner / Wahana",
  "area": "Kuta / Ubud / Nusa Dua / dll",
  "entry_fee": number,
  "description": "Deskripsi singkat dan daya tarik tempat ini"
}`;
        userContent = `Detail destinasi yang ingin dibuat: ${prompt}`;
        break;

      case "create_hotel":
        systemPrompt = `Anda adalah kurator akomodasi & hotel. 
Buatkan data hotel baru untuk katalog dalam format JSON murni:
{
  "name": "Nama Hotel / Villa",
  "area": "Seminyak / Ubud / Sanur / dll",
  "star_rating": number,
  "price_per_night": number,
  "description": "Deskripsi fasilitas utama dan kenyamanan"
}`;
        userContent = `Detail hotel yang ingin ditambahkan: ${prompt}`;
        break;

      default:
        return NextResponse.json(
          { error: "Action tidak dikenal." },
          { status: 400 }
        );
    }

    // Call API SumoPod menggunakan fetch native
    const res = await fetch(SUMOPOD_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUMOPOD_API_KEY}`,
      },
      body: JSON.stringify({
        model: CHOSEN_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userContent },
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`SumoPod API Error (${res.status}): ${errText}`);
    }

    const resData = await res.json();
    const aiResultRaw = resData.choices?.[0]?.message?.content || "{}";
    const parsedData = JSON.parse(aiResultRaw);

    return NextResponse.json({
      success: true,
      model_used: CHOSEN_MODEL,
      data: parsedData,
    });
  } catch (error: any) {
    console.error("Agent AI Error:", error);
    return NextResponse.json(
      { error: error.message || "Gagal memproses AI Agent" },
      { status: 500 }
    );
  }
}