"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { 
  Plus, 
  Search, 
  FileText, 
  Calendar, 
  User, 
  Trash2, 
  Eye, 
  Loader2,
  RefreshCw,
  LayoutGrid,
  List
} from "lucide-react";

interface ProposalItem {
  id: string;
  title: string;
  client_name: string;
  client_phone: string;
  pax_count: number;
  total_price: number;
  status: string;
  created_at: string;
}

export default function AdminItineraryList() {
  const [proposals, setProposals] = useState<ProposalItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  // State untuk mode tampilan: 'grid' (card) atau 'list' (tabel)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Fetch data proposal dari Supabase
  const fetchProposals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("pbt_itineraries")
        .select("id, title, client_name, client_phone, pax_count, total_price, status, created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProposals(data || []);
    } catch (err: any) {
      alert("Gagal mengambil data proposal: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  // Handler Hapus Proposal
  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Apakah Anda yakin ingin menghapus proposal "${title}"?`)) return;

    try {
      const { error } = await supabase
        .from("pbt_itineraries")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      setProposals((prev) => prev.filter((p) => p.id !== id));
      alert("Proposal berhasil dihapus!");
    } catch (err: any) {
      alert("Gagal menghapus proposal: " + err.message);
    }
  };

  // Filter pencarian
  const filteredProposals = proposals.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      (p.title && p.title.toLowerCase().includes(query)) ||
      (p.client_name && p.client_name.toLowerCase().includes(query)) ||
      (p.client_phone && p.client_phone.includes(query))
    );
  });

  return (
    <div className="p-6 lg:p-10 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
            Proposal Management
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Daftar Proposal Itinerary
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchProposals}
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 transition-all"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-emerald-400" : ""}`} />
          </button>

          <Link
            href="/admin/detail/itinerary/new"
            className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Proposal Baru</span>
          </Link>
        </div>
      </div>

      {/* Filter & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900 p-4 rounded-2xl border border-white/10">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari berdasarkan paket atau nama klien..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:border-emerald-500 outline-none"
          />
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-xs text-slate-400">
            Total Proposal: <span className="text-white font-bold">{filteredProposals.length}</span>
          </div>

          {/* Toggle View Mode Buttons */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-emerald-500 text-slate-950 shadow"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Tampilan Card Grid"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-emerald-500 text-slate-950 shadow"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Tampilan List Tabel"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
          <p className="text-xs">Memuat daftar proposal...</p>
        </div>
      ) : filteredProposals.length === 0 ? (
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto text-slate-500">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Tidak ada proposal ditemukan</h3>
            <p className="text-xs text-slate-400 mt-1">
              {searchQuery ? "Coba ubah kata kunci pencarian Anda." : "Belum ada proposal yang pernah dibuat."}
            </p>
          </div>
          {!searchQuery && (
            <Link
              href="/admin/itinerary/new"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold"
            >
              <Plus className="w-4 h-4" /> Buat Sekarang
            </Link>
          )}
        </div>
      ) : viewMode === "grid" ? (
        /* --- CARD / GRID VIEW --- */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProposals.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-white/10 hover:border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                {/* Status & Date Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase text-[10px] tracking-wider">
                    {item.status || "CONFIRMED"}
                  </span>
                  <span className="text-slate-500 text-[11px] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Title & Client Info */}
                <div>
                  <Link href={`/admin/itinerary/detail/${item.id}`}>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="mt-3 space-y-1 text-xs text-slate-400">
                    <p className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-slate-200 font-medium">{item.client_name}</span>
                      {item.client_phone && (
                        <span className="text-slate-500">({item.client_phone})</span>
                      )}
                    </p>
                    <p className="text-[11px] text-slate-400 pl-5">
                      Jumlah Peserta: <span className="text-white font-semibold">{item.pax_count} Pax</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Price & Action Buttons */}
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Total Harga</p>
                  <p className="text-sm font-black text-emerald-400">
                    Rp {item.total_price ? item.total_price.toLocaleString("id-ID") : "0"}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Link
                    href={`/admin/itinerary/${item.id}`}
                    className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
                    title="Lihat Detail Proposal"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                    title="Hapus Proposal"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* --- LIST / TABLE VIEW --- */
        <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/60 text-slate-400 uppercase text-[10px] tracking-wider border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-5 font-semibold">Judul Proposal</th>
                  <th className="py-3.5 px-5 font-semibold">Klien</th>
                  <th className="py-3.5 px-5 font-semibold">Pax</th>
                  <th className="py-3.5 px-5 font-semibold">Total Harga</th>
                  <th className="py-3.5 px-5 font-semibold">Tanggal</th>
                  <th className="py-3.5 px-5 font-semibold">Status</th>
                  <th className="py-3.5 px-5 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {filteredProposals.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-5 font-bold text-white">
                      <Link href={`/admin/itinerary/detail/${item.id}`} className="hover:text-emerald-400 transition-colors">
                        {item.title}
                      </Link>
                    </td>
                    <td className="py-4 px-5">
                      <div className="font-medium text-slate-200">{item.client_name}</div>
                      {item.client_phone && <div className="text-[11px] text-slate-500">{item.client_phone}</div>}
                    </td>
                    <td className="py-4 px-5 font-medium">{item.pax_count} Pax</td>
                    <td className="py-4 px-5 font-bold text-emerald-400">
                      Rp {item.total_price ? item.total_price.toLocaleString("id-ID") : "0"}
                    </td>
                    <td className="py-4 px-5 text-slate-400">
                      {new Date(item.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-4 px-5">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase">
                        {item.status || "CONFIRMED"}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          href={`/admin/detail/itinerary/${item.id}`}
                          className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
                          title="Lihat Detail Proposal"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id, item.title)}
                          className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                          title="Hapus Proposal"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}