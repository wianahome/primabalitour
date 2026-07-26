"use client";

import React, { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { askAiAgent } from "@/lib/ai-agent"; // jika memakai Pilihan 1

export default function NewItineraryPage() {
  const [prompt, setPrompt] = useState("");
  const [loadingAi, setLoadingAi] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [paxCount, setPaxCount] = useState(2);
  const [totalPrice, setTotalPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [daysData, setDaysData] = useState<any[]>([]);

  // FUNGSI PEMANGGILAN AI AGENT
  const handleGenerateItineraryWithAI = async () => {
    if (!prompt.trim()) {
      alert("Masukkan petunjuk/prompt untuk AI terlebih dahulu.");
      return;
    }

    setLoadingAi(true);

    try {
      // Pemanggilan via helper (atau via fetch langsung)
      const data = await askAiAgent({
        action: "generate_itinerary",
        prompt: prompt,
      });

      // Otomatis mengisi state form dengan data balasan AI SumoPod
      if (data) {
        setTitle(data.title || "");
        setPaxCount(data.pax_count || 2);
        setTotalPrice(data.estimated_price || 0);
        setDescription(data.description || "");
        setDaysData(data.days || []);
        
        alert("Itinerary berhasil dibuat oleh AI Agent!");
      }
    } catch (err: any) {
      alert("Gagal membuat itinerary: " + err.message);
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white">Buat Itinerary Baru</h1>

      {/* Box Input Prompt AI */}
      <div className="bg-slate-900 border border-emerald-500/30 p-5 rounded-2xl space-y-3">
        <label className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          Generate Otomatis Dengan AI Agent (SumoPod)
        </label>
        
        <div className="flex gap-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Contoh: Tour 3H2M di Ubud & Kuta untuk 4 pax budget 5 juta..."
            className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-emerald-500 outline-none"
          />
          <button
            type="button"
            onClick={handleGenerateItineraryWithAI}
            disabled={loadingAi}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 transition-all"
          >
            {loadingAi ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Memproses...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Form Input Biasa (Akan Terisi Otomatis) */}
      <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl space-y-4">
        <div>
          <label className="text-xs text-slate-400">Judul Proposal</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-slate-400">Jumlah Peserta (Pax)</label>
            <input
              type="number"
              value={paxCount}
              onChange={(e) => setPaxCount(Number(e.target.value))}
              className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white mt-1"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400">Estimasi Total Harga (Rp)</label>
            <input
              type="number"
              value={totalPrice}
              onChange={(e) => setTotalPrice(Number(e.target.value))}
              className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white mt-1"
            />
          </div>
        </div>

        {/* Render Rincian Hari dari AI */}
        {daysData.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xs font-bold text-white uppercase">Rincian Perjalanan dari AI:</h3>
            {daysData.map((d, i) => (
              <div key={i} className="bg-slate-950 p-3 rounded-xl border border-white/5 text-xs text-slate-300">
                <p className="font-bold text-emerald-400">Hari {d.day_number}: {d.title}</p>
                <p className="text-slate-400 mt-1">Destinasi: {d.destinations?.join(", ")}</p>
                {d.hotel_suggestion && <p className="text-slate-400">Hotel: {d.hotel_suggestion}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}