'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Bahasa() {
  const pathname = usePathname();
  const router = useRouter();

  // -------------------------------------------------------------
  // 1. TAMBAHAN LOGIKA: Hanya tampilkan jika di halaman snorkeling
  // -------------------------------------------------------------
  const isSnorkelingPage = pathname?.includes('/snorkeling-bali');

  // Jika BUKAN halaman snorkeling (termasuk halaman utama '/'), sembunyikan komponen ini
  if (!isSnorkelingPage) {
    return null;
  }

  // -------------------------------------------------------------
  // 2. Fungsi Change Language & Data
  // -------------------------------------------------------------
  const changeLanguage = (newLang: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLang; // Mengganti segment bahasa (/id, /en, /ja)
    router.push(segments.join('/'));
  };

  const currentLang = pathname?.split('/')[1] || 'id';

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