"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  Calendar,
  User,
  Phone,
  Users,
  MapPin,
  Building2,
  Printer,
  Loader2,
  FileText,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface DayEvent {
  id: string;
  time_start: string;
  time_end: string;
  activity_title: string;
  location?: string;
  description?: string;
  sort_order?: number;
}

interface ItineraryDay {
  id: string;
  day_number: number;
  title: string;
  description?: string;
  events?: DayEvent[];
}

interface ItineraryDetail {
  id: string;
  title: string;
  client_name: string;
  client_phone: string;
  pax_count: number;
  total_price: number;
  status: string;
  days?: ItineraryDay[];
  created_at: string;
  description?: string;
}

export default function AdminItineraryDetail() {
  const params = useParams();
  const id = params?.id as string;

  const [itinerary, setItinerary] = useState<ItineraryDetail | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch Detail Itinerary & Relasinya dari Supabase
  useEffect(() => {
    async function fetchDetail() {
      if (!id) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("pbt_itineraries")
          .select(`
            *,
            days:pbt_itinerary_days (
              id,
              day_number,
              title,
              description,
              events:pbt_day_events (
                id,
                time_start,
                time_end,
                activity_title,
                location,
                description,
                sort_order
              )
            )
          `)
          .eq("id", id)
          .single();

        if (error) throw error;

        // Sorting urutan hari dan urutan jam/event
        if (data?.days) {
          data.days.sort((a: ItineraryDay, b: ItineraryDay) => a.day_number - b.day_number);
          data.days.forEach((day: ItineraryDay) => {
            if (day.events) {
              day.events.sort((a: DayEvent, b: DayEvent) => (a.sort_order || 0) - (b.sort_order || 0));
            }
          });
        }

        setItinerary(data);
      } catch (err: any) {
        console.error("Gagal mengambil detail proposal:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDetail();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center text-slate-400 gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
        <p className="text-xs">Memuat detail proposal...</p>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="p-6 lg:p-10 space-y-6">
        <Link
          href="/admin/itinerary"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Proposal
        </Link>
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-12 text-center space-y-4">
          <FileText className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">Proposal Tidak Ditemukan</h3>
          <p className="text-xs text-slate-400">
            Data proposal dengan ID tersebut tidak ditemukan atau telah dihapus.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-5xl mx-auto print:p-0 print:m-0 print:max-w-none">
      {/* Action Bar (Hanya tampil saat tidak di-print) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden border-b border-white/10 pb-6">
        <Link
          href="/admin/itinerary"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 text-xs font-bold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Export PDF</span>
          </button>
        </div>
      </div>

      {/* Sheet Proposal Printable */}
      <div className="bg-slate-900 print:bg-white border print:border-none border-white/10 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl print:shadow-none text-white print:text-slate-900">
        
        {/* Document Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-white/10 print:border-slate-200 pb-8">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 print:bg-emerald-100 border border-emerald-500/20 print:border-emerald-300 text-emerald-400 print:text-emerald-800 font-bold uppercase text-[10px] tracking-wider inline-block">
              {itinerary.status || "CONFIRMED"}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white print:text-slate-900">
              {itinerary.title}
            </h1>
            <p className="text-xs text-slate-400 print:text-slate-500 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              Dibuat pada:{" "}
              {new Date(itinerary.created_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="sm:text-right bg-slate-950/50 print:bg-slate-50 p-4 rounded-xl border border-white/10 print:border-slate-200 min-w-[200px]">
            <p className="text-[10px] text-slate-400 print:text-slate-500 uppercase font-semibold tracking-wider">
              Total Investasi Paket
            </p>
            <p className="text-2xl font-black text-emerald-400 print:text-emerald-700 mt-1">
              Rp {itinerary.total_price ? itinerary.total_price.toLocaleString("id-ID") : "0"}
            </p>
          </div>
        </div>

        {/* Client & Booking Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/40 print:bg-slate-50 p-5 rounded-xl border border-white/5 print:border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 print:bg-emerald-100 text-emerald-400 print:text-emerald-700 flex items-center justify-center shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 print:text-slate-500 uppercase font-medium">Nama Klien</p>
              <p className="text-sm font-bold text-white print:text-slate-900">{itinerary.client_name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 print:bg-emerald-100 text-emerald-400 print:text-emerald-700 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 print:text-slate-500 uppercase font-medium">No. Telepon / WA</p>
              <p className="text-sm font-bold text-white print:text-slate-900">{itinerary.client_phone || "-"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 print:bg-emerald-100 text-emerald-400 print:text-emerald-700 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 print:text-slate-500 uppercase font-medium">Jumlah Peserta</p>
              <p className="text-sm font-bold text-white print:text-slate-900">{itinerary.pax_count} Pax</p>
            </div>
          </div>
        </div>

        {/* Description / Notes if available */}
        {itinerary.description && (
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-wider">
              Catatan Proposal
            </h3>
            <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed bg-slate-950/20 print:bg-slate-50 p-4 rounded-xl border border-white/5 print:border-slate-200">
              {itinerary.description}
            </p>
          </div>
        )}

        {/* Day-by-Day Itinerary Breakdown */}
        <div className="space-y-6 pt-4">
          <h2 className="text-lg font-bold text-white print:text-slate-900 border-b border-white/10 print:border-slate-200 pb-3">
            Rincian Perjalanan (Itinerary)
          </h2>

          {itinerary.days && itinerary.days.length > 0 ? (
            <div className="space-y-6">
              {itinerary.days.map((day, idx) => (
                <div
                  key={day.id || idx}
                  className="bg-slate-950/60 print:bg-slate-50 border border-white/10 print:border-slate-200 rounded-xl p-5 space-y-4"
                >
                  {/* Header Hari */}
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/20 print:bg-emerald-200 text-emerald-400 print:text-emerald-900 font-bold text-xs shrink-0">
                      HARI {day.day_number || idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white print:text-slate-900">
                      {day.title || `Hari ke-${idx + 1}`}
                    </h3>
                  </div>

                  {day.description && (
                    <p className="text-xs text-slate-300 print:text-slate-700 italic">
                      {day.description}
                    </p>
                  )}

                  {/* Rincian Event / Jam */}
                  {day.events && day.events.length > 0 ? (
                    <div className="space-y-2.5 pt-2">
                      {day.events.map((ev, evIdx) => (
                        <div
                          key={ev.id || evIdx}
                          className="bg-slate-900/80 print:bg-white p-3.5 rounded-lg border border-white/5 print:border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between"
                        >
                          <div className="flex items-start sm:items-center gap-3">
                            <span className="px-2.5 py-1 rounded bg-emerald-500/10 print:bg-emerald-50 text-emerald-400 print:text-emerald-700 text-xs font-mono font-bold flex items-center gap-1.5 shrink-0">
                              <Clock className="w-3 h-3" />
                              {ev.time_start || "00:00"} - {ev.time_end || "00:00"}
                            </span>
                            <div>
                              <p className="text-xs font-bold text-white print:text-slate-900">
                                {ev.activity_title}
                              </p>
                              {ev.description && (
                                <p className="text-[11px] text-slate-400 print:text-slate-600 mt-0.5">
                                  {ev.description}
                                </p>
                              )}
                            </div>
                          </div>

                          {ev.location && (
                            <span className="text-[11px] text-slate-400 print:text-slate-600 flex items-center gap-1 bg-slate-950/50 print:bg-slate-100 px-2.5 py-1 rounded-md shrink-0">
                              <MapPin className="w-3 h-3 text-emerald-400 print:text-emerald-600" />
                              {ev.location}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 italic">Tidak ada aktivitas terjadwal pada hari ini.</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 italic">Belum ada rincian harian untuk proposal ini.</p>
          )}
        </div>

        {/* Proposal Footer */}
        <div className="pt-8 border-t border-white/10 print:border-slate-200 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© Prima Bali Tour — Solusi Perjalanan Wisata Bali</p>
          <p>Terima kasih atas kepercayaan Anda.</p>
        </div>
      </div>
    </div>
  );
}