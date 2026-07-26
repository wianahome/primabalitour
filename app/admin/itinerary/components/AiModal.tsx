// app/admin/itinerary/components/AiModal.tsx
"use client";

import React, { useState } from "react";
import { Sparkles, Loader2, X } from "lucide-react";

interface AiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyResult: (aiData: any) => void;
  onApplyAiData?: (aiData: any) => void;
  
}

export default function AiModal({ isOpen, onClose, onApplyResult, onApplyAiData }: AiModalProps) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/ai/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate_itinerary",
          prompt: prompt,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Gagal memproses AI");
      }

      // Kirim hasil AI ke halaman utama (parent component)
      onApplyResult(result.data);
      onClose(); // Tutup modal setelah berhasil
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat memanggil AI");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-800 text-white rounded-xl w-full max-w-lg p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4 text-emerald-400">
          <Sparkles className="w-5 h-5" />
          <h3 className="text-lg font-bold">Generate Itinerary dengan AI</h3>
        </div>

        <p className="text-sm text-slate-400 mb-4">
          Tuliskan instruksi atau permintaan tour yang diinginkan (misal: "Tour Bali 3 hari 2 malam untuk 4 pax, fokus pantai dan kuliner Halal").
        </p>

        <textarea
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Contoh: Paket 3D2N honeymoon Ubud & Kuta dengan private dinner..."
          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:border-emerald-500 mb-3 text-slate-100 placeholder:text-slate-500"
        />

        {error && (
          <div className="p-3 bg-red-900/30 border border-red-500/50 text-red-300 text-xs rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-lg transition"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg transition"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Proses AI...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}