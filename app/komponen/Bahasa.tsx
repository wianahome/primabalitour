'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Bahasa() {
  const pathname = usePathname();
  const router = useRouter();

  // 1. Ambil segmen bahasa & path halaman tanpa prefix bahasa
  // Contoh pathname: "/id/snorkeling-bali" -> segments: ["", "id", "snorkeling-bali"]
  const segments = pathname ? pathname.split('/') : [];
  const currentLang = segments[1] || 'id';

  // Gabungkan sisa segmen untuk mengetahui path halaman saat ini (misal: "/", "/snorkeling-bali", "/syarat-ketentuan")
  const pagePath = '/' + segments.slice(2).join('/');

  // -------------------------------------------------------------
  // 2. TENTUKAN HALAMAN MANA SAJA YANG BOLEH MENAMPILKAN BENDERA
  // -------------------------------------------------------------
  // Berisi rute halaman yang sudah mendukung 3 bahasa (ID, EN, JA)
  const allowedMultiLangRoutes = [
                     // Halaman Utama / Landing Page
    '/snorkeling-bali',  // Halaman Snorkeling Bali
    // Tambahkan path multi-bahasa lain di sini jika ada, misal: '/sewa-mobil'
  ];

  // Cek apakah halaman saat ini diizinkan
  const isAllowed = allowedMultiLangRoutes.includes(pagePath);

  // Jika halaman BUKAN salah satu dari daftar di atas (misal halaman khusus ID saja), sembunyikan komponen ini
  if (!isAllowed) {
    return null;
  }

  // -------------------------------------------------------------
  // 3. Fungsi Switch / Change Language
  // -------------------------------------------------------------
  const changeLanguage = (newLang: string) => {
    if (!pathname) return;
    const newSegments = [...segments];
    newSegments[1] = newLang; // Mengganti segment bahasa (/id, /en, /ja)
    router.push(newSegments.join('/'));
  };

  const languages = [
    { 
      code: 'id', 
      label: 'ID', 
      flag: 'https://flagcdn.com/w40/id.png' 
    },
    { 
      code: 'en', 
      label: 'EN', 
      flag: 'https://flagcdn.com/w40/gb.png' 
    },
    { 
      code: 'ja', 
      label: 'JA', 
      flag: 'https://flagcdn.com/w40/jp.png' 
    },
  ];

  return (
    <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-full border border-white/10 shadow-md backdrop-blur-md">
      {languages.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            title={`Bahasa ${lang.label}`}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              isActive
                ? 'bg-emerald-500 text-slate-950 shadow-sm scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {/* Gambar Bendera */}
            <img
              src={lang.flag}
              alt={lang.label}
              className="w-4 h-3 object-cover rounded-[2px]"
            />
            <span className="text-[11px] leading-none">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}