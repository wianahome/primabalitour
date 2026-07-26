"use client";

import AiModal from "../components/AiModal";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { 
  Plus, 
  Trash2, 
  Clock, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  Save,
  Copy,
  Sparkles,
  Loader2,
  X
} from "lucide-react";

interface EventItem {
  time_start: string;
  time_end: string;
  activity_title: string;
  location: string;
  description: string;
}

interface DayItem {
  day_number: number;
  title: string;
  description: string;
  events: EventItem[];
}

interface SavedItinerary {
  id: string;
  title: string;
  client_name: string;
  total_price: number;
  pax_count: number;
  include_notes: string;
  exclude_notes: string;
}

export default function AdminItineraryBuilder() {
  const [proposalTitle, setProposalTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [paxCount, setPaxCount] = useState<number>(2);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [includeNotes, setIncludeNotes] = useState(
    "• Mobil Avanza/Innova Full AC\n• Driver Profesional merangkap Tour Guide\n• BBM & Biaya Parkir\n• Tiket Masuk Seluruh Destinasi\n• Air Mineral per hari"
  );
  const [excludeNotes, setExcludeNotes] = useState(
    "• Tiket Pesawat PP\n• Pengeluaran Pribadi\n• Tipping Driver (Sukarela)"
  );

  const [days, setDays] = useState<DayItem[]>([
    {
      day_number: 1,
      title: "Kedatangan & Penjemputan Bandara",
      description: "Penyambutan manis di Bandara Ngurah Rai dilanjutkan dengan perjalanan santai di Bali Selatan.",
      events: [
        {
          time_start: "14:00",
          time_end: "15:00",
          activity_title: "Penjemputan Bandara I Gusti Ngurah Rai",
          location: "Bandara Ngurah Rai",
          description: "Driver kami siap menyambut di area kedatangan dengan membawa signboard nama tamu.",
        },
      ],
    },
  ]);

  const [saving, setSaving] = useState(false);

  // State Modal Template / Copy Proposal & AI
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [savedList, setSavedList] = useState<SavedItinerary[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);

  // --- Handlers: Timelines ---
  const handleAddDay = () => {
    const nextDayNum = days.length + 1;
    setDays((prevDays) => [
      ...prevDays,
      {
        day_number: nextDayNum,
        title: `Eksplorasi Hari ke-${nextDayNum}`,
        description: "",
        events: [],
      },
    ]);
  };

  const handleRemoveDay = (dayIndex: number) => {
    setDays((prevDays) =>
      prevDays
        .filter((_, idx) => idx !== dayIndex)
        .map((d, idx) => ({ ...d, day_number: idx + 1 }))
    );
  };

  const handleAddEvent = (dayIndex: number) => {
    setDays((prevDays) =>
      prevDays.map((day, idx) => {
        if (idx !== dayIndex) return day;
        return {
          ...day,
          events: [
            ...day.events,
            {
              time_start: "09:00",
              time_end: "11:00",
              activity_title: "",
              location: "",
              description: "",
            },
          ],
        };
      })
    );
  };

  const handleRemoveEvent = (dayIndex: number, eventIndex: number) => {
    setDays((prevDays) =>
      prevDays.map((day, idx) => {
        if (idx !== dayIndex) return day;
        return {
          ...day,
          events: day.events.filter((_, eIdx) => eIdx !== eventIndex),
        };
      })
    );
  };

  const handleUpdateEvent = (
    dayIndex: number,
    eventIndex: number,
    field: keyof EventItem,
    value: string
  ) => {
    setDays((prevDays) =>
      prevDays.map((day, idx) => {
        if (idx !== dayIndex) return day;
        const updatedEvents = day.events.map((ev, eIdx) => {
          if (eIdx !== eventIndex) return ev;
          return { ...ev, [field]: value };
        });
        return { ...day, events: updatedEvents };
      })
    );
  };

  // --- Handlers: Fetch & Duplicate Proposal ---
  const fetchSavedProposals = async () => {
    setLoadingList(true);
    setShowCopyModal(true);
    try {
      const { data, error } = await supabase
        .from("pbt_itineraries")
        .select("id, title, client_name, total_price, pax_count, include_notes, exclude_notes")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSavedList(data || []);
    } catch (err: any) {
      alert("Gagal memuat daftar template: " + (err.message || err));
    } finally {
      setLoadingList(false);
    }
  };

  const handleDuplicateProposal = async (itineraryId: string) => {
    setLoadingList(true);
    try {
      // Direct Relational Query: Ambil Itinerary + Days + Day Events sekaligus
      const { data: itin, error: itinErr } = await supabase
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
        .eq("id", itineraryId)
        .single();

      if (itinErr) throw itinErr;

      // Urutkan Days berdasarkan day_number
      const rawDays = itin.days || [];
      const sortedDays = rawDays.sort((a: any, b: any) => a.day_number - b.day_number);

      const loadedDays: DayItem[] = sortedDays.map((d: any) => {
        const rawEvents = d.events || [];
        // Urutkan Events berdasarkan sort_order
        const sortedEvents = rawEvents.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));

        return {
          day_number: d.day_number,
          title: d.title || "",
          description: d.description || "",
          events: sortedEvents.map((e: any) => ({
            time_start: e.time_start || "",
            time_end: e.time_end || "",
            activity_title: e.activity_title || "",
            location: e.location || "",
            description: e.description || "",
          })),
        };
      });

      // Populate State Form
      setProposalTitle(`${itin.title || ""} (Copy)`);
      setClientName(""); // Reset nama klien agar diisi baru
      setClientPhone("");
      setPaxCount(itin.pax_count || 2);
      setTotalPrice(itin.total_price || 0);
      setIncludeNotes(itin.include_notes || "");
      setExcludeNotes(itin.exclude_notes || "");
      setDays(loadedDays);

      setShowCopyModal(false);
    } catch (err: any) {
      alert("Gagal menyalin proposal: " + (err.message || err));
    } finally {
      setLoadingList(false);
    }
  };

  // --- Handlers: Save Proposal ---
  const handleSaveItinerary = async () => {
    if (!proposalTitle.trim() || !clientName.trim()) {
      alert("Mohon isi Judul Paket dan Nama Klien!");
      return;
    }

    setSaving(true);
    try {
      // 1. Simpan Header Itinerary
      const { data: itineraryData, error: itinError } = await supabase
        .from("pbt_itineraries")
        .insert({
          title: proposalTitle,
          client_name: clientName,
          client_phone: clientPhone,
          pax_count: paxCount,
          total_price: totalPrice,
          include_notes: includeNotes,
          exclude_notes: excludeNotes,
          status: "confirmed",
        })
        .select()
        .single();

      if (itinError) throw itinError;

      // 2. Simpan Hari & Event
      for (const day of days) {
        const { data: dayData, error: dayError } = await supabase
          .from("pbt_itinerary_days")
          .insert({
            itinerary_id: itineraryData.id,
            day_number: day.day_number,
            title: day.title,
            description: day.description,
          })
          .select()
          .single();

        if (dayError) throw dayError;

        if (day.events.length > 0) {
          const eventsToInsert = day.events.map((ev, idx) => ({
            day_id: dayData.id,
            time_start: ev.time_start,
            time_end: ev.time_end,
            activity_title: ev.activity_title,
            location: ev.location,
            description: ev.description,
            sort_order: idx + 1,
          }));

          const { error: eventError } = await supabase
            .from("pbt_day_events")
            .insert(eventsToInsert);

          if (eventError) throw eventError;
        }
      }

      alert("Proposal Baru Berhasil Disimpan!");
    } catch (err: any) {
      alert("Gagal menyimpan itinerary: " + (err.message || err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 lg:p-10 space-y-8">
      {/* Top Header Workspace */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
            Interactive Tour Builder
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Buat Proposal Itinerary
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Tombol Generate AI */}
          <button
            type="button"
            onClick={() => setShowAiModal(true)}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Generate via AI</span>
          </button>

          {/* Tombol Salin Template */}
          <button
            type="button"
            onClick={fetchSavedProposals}
            className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all flex items-center gap-2 border border-white/10"
          >
            <Copy className="w-4 h-4 text-emerald-400" />
            <span>Salin dari Template/Lama</span>
          </button>

          {/* Tombol Simpan */}
          <button
            type="button"
            onClick={handleSaveItinerary}
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? "Simpan..." : "Simpan Proposal"}</span>
          </button>
        </div>
      </div>

      {/* Form Details */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Judul Paket Itinerary</label>
            <input
              type="text"
              placeholder="e.g. Private Honeymoon Package 4D3N Bali"
              value={proposalTitle}
              onChange={(e) => setProposalTitle(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-emerald-500 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Nama Klien</label>
              <input
                type="text"
                placeholder="Pak Raffi"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">WhatsApp Klien</label>
              <input
                type="text"
                placeholder="0812345678"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-emerald-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 bg-slate-950 p-4 rounded-xl border border-white/5">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Jumlah Peserta (Pax)</label>
            <input
              type="number"
              min={1}
              value={paxCount}
              onChange={(e) => setPaxCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-emerald-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Total Harga Paket (Rp)</label>
            <input
              type="number"
              min={0}
              value={totalPrice}
              onChange={(e) => setTotalPrice(parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-sm font-bold text-emerald-400 focus:border-emerald-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Timeline Builder */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" /> Detail Rangkaian Acara (Itinerary Timeline)
          </h2>
          <button
            type="button"
            onClick={handleAddDay}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> Tambah Hari
          </button>
        </div>

        {days.map((day, dayIdx) => (
          <div key={dayIdx} className="bg-slate-900 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3 flex-1">
                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs shrink-0">
                  HARI {day.day_number}
                </span>
                <input
                  type="text"
                  placeholder="Judul Rute Hari Ini"
                  value={day.title}
                  onChange={(e) => {
                    const updated = [...days];
                    updated[dayIdx].title = e.target.value;
                    setDays(updated);
                  }}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2 text-sm font-bold text-white focus:border-emerald-500 outline-none"
                />
              </div>

              {days.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveDay(dayIdx)}
                  className="p-2 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <div>
              <textarea
                rows={2}
                placeholder="Deskripsi singkat gambaran suasana trip pada hari ini..."
                value={day.description || ""}
                onChange={(e) => {
                  const updated = [...days];
                  updated[dayIdx].description = e.target.value;
                  setDays(updated);
                }}
                className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-slate-300 focus:border-emerald-500 outline-none"
              />
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Jadwal Jam & Aktivitas
                </span>
                <button
                  type="button"
                  onClick={() => handleAddEvent(dayIdx)}
                  className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <Plus className="w-3 h-3" /> Tambah Jam/Aktivitas
                </button>
              </div>

              {(day.events || []).map((ev, evIdx) => (
                <div key={evIdx} className="bg-slate-950 p-4 rounded-xl border border-white/5 grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                  <div className="md:col-span-3 flex items-center gap-1">
                    <input
                      type="text"
                      placeholder="08:00"
                      value={ev.time_start}
                      onChange={(e) => handleUpdateEvent(dayIdx, evIdx, "time_start", e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-center text-emerald-400 font-mono outline-none"
                    />
                    <span className="text-slate-500 text-xs">-</span>
                    <input
                      type="text"
                      placeholder="10:00"
                      value={ev.time_end}
                      onChange={(e) => handleUpdateEvent(dayIdx, evIdx, "time_end", e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-center text-emerald-400 font-mono outline-none"
                    />
                  </div>

                  <div className="md:col-span-8 space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Nama Aktivitas"
                        value={ev.activity_title}
                        onChange={(e) => handleUpdateEvent(dayIdx, evIdx, "activity_title", e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-1.5 text-xs font-semibold text-white outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Lokasi"
                        value={ev.location}
                        onChange={(e) => handleUpdateEvent(dayIdx, evIdx, "location", e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 outline-none"
                      />
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Deskripsi detail kegiatan..."
                      value={ev.description}
                      onChange={(e) => handleUpdateEvent(dayIdx, evIdx, "description", e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg p-2.5 text-xs text-slate-300 outline-none"
                    />
                  </div>

                  <div className="md:col-span-1 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleRemoveEvent(dayIdx, evIdx)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Includes / Excludes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 space-y-2">
          <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Fasilitas Termasuk (Includes)
          </h3>
          <textarea
            rows={5}
            value={includeNotes}
            onChange={(e) => setIncludeNotes(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-slate-300 outline-none leading-relaxed"
          />
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 space-y-2">
          <h3 className="text-sm font-bold text-rose-400 flex items-center gap-1.5">
            <FileText className="w-4 h-4" /> Tidak Termasuk (Excludes)
          </h3>
          <textarea
            rows={5}
            value={excludeNotes}
            onChange={(e) => setExcludeNotes(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-slate-300 outline-none leading-relaxed"
          />
        </div>
      </div>

      {/* Modal Salin Template / Proposal Lama */}
      {showCopyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Copy className="w-5 h-5 text-emerald-400" /> Pilih Proposal untuk Disalin
              </h3>
              <button
                type="button"
                onClick={() => setShowCopyModal(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {loadingList ? (
              <div className="py-12 flex flex-col items-center justify-center text-slate-400 gap-2">
                <Loader2 className="w-6 h-6 animate-spin text-emerald-400" />
                <span className="text-xs">Memuat daftar proposal...</span>
              </div>
            ) : savedList.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400">
                Belum ada proposal tersimpan di database.
              </p>
            ) : (
              <div className="max-h-96 overflow-y-auto space-y-2 pr-1">
                {savedList.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-slate-950 border border-white/5 hover:border-emerald-500/50 flex items-center justify-between gap-4 transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400">
                        Klien: {item.client_name} • Pax: {item.pax_count} • Rp {item.total_price.toLocaleString("id-ID")}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDuplicateProposal(item.id)}
                      className="px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 text-xs font-bold transition-all flex items-center gap-1 shrink-0"
                    >
                      <Copy className="w-3.5 h-3.5" /> Gunakan
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Generate AI */}
      {showAiModal && (
        <AiModal 
          isOpen={showAiModal} 
          onClose={() => setShowAiModal(false)} 
          onApplyResult={(aiData: any) => {
            if (aiData?.title) setProposalTitle(aiData.title);

            if (aiData?.days && Array.isArray(aiData.days)) {
              const formattedDays = aiData.days.map((day: any, dIdx: number) => {
                const rawEvents = day.events || day.activities || day.schedule || [];

                const formattedEvents = rawEvents.map((ev: any, eIdx: number) => ({
                  time_start: ev.time_start || ev.startTime || (ev.time ? ev.time.split("-")[0]?.trim() : "") || "09:00",
                  time_end: ev.time_end || ev.endTime || (ev.time ? ev.time.split("-")[1]?.trim() : "") || "10:00",
                  activity_title: ev.activity_title || ev.title || ev.activity || ev.name || "",
                  location: ev.location || ev.place || "",
                  description: ev.description || ev.notes || "",
                }));

                return {
                  day_number: day.day_number || dIdx + 1,
                  title: day.title || `Hari ke-${dIdx + 1}`,
                  description: day.description || "",
                  events: formattedEvents,
                };
              });

              setDays(formattedDays);
            }

            setShowAiModal(false);
          }}
        />
      )}
    </div>
  );
}