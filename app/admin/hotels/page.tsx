"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Plus,
  Search,
  Building2,
  Trash2,
  Edit2,
  Loader2,
  RefreshCw,
  X,
  Image as ImageIcon,
  Star,
  MapPin,
} from "lucide-react";

interface HotelItem {
  id: string;
  name: string;
  area: string;
  star_rating: number;
  price_per_night: number;
  image_url: string;
  description: string;
  created_at: string;
}

export default function AdminHotels() {
  const [hotels, setHotels] = useState<HotelItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStar, setSelectedStar] = useState<number | "Semua">("Semua");

  // State Modal Form (Tambah / Edit)
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [area, setArea] = useState("Kuta");
  const [starRating, setStarRating] = useState(3);
  const [pricePerNight, setPricePerNight] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const starOptions = ["Semua", 5, 4, 3, 2, 1];

  // Fetch Hotel dari Supabase
  const fetchHotels = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("pbt_hotels")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setHotels(data || []);
    } catch (err: any) {
      alert("Gagal memuat data hotel: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  // Reset Form
  const resetForm = () => {
    setEditingId(null);
    setName("");
    setArea("Kuta");
    setStarRating(3);
    setPricePerNight(0);
    setImageUrl("");
    setDescription("");
  };

  // Open Modal Tambah
  const handleOpenAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  // Open Modal Edit
  const handleOpenEditModal = (item: HotelItem) => {
    setEditingId(item.id);
    setName(item.name);
    setArea(item.area || "Kuta");
    setStarRating(item.star_rating || 3);
    setPricePerNight(item.price_per_night || 0);
    setImageUrl(item.image_url || "");
    setDescription(item.description || "");
    setShowModal(true);
  };

  // Save (Create or Update)
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Nama Hotel wajib diisi!");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        name,
        area,
        star_rating: starRating,
        price_per_night: pricePerNight,
        image_url: imageUrl,
        description,
      };

      if (editingId) {
        // Update
        const { error } = await supabase
          .from("pbt_hotels")
          .update(payload)
          .eq("id", editingId);

        if (error) throw error;
        alert("Data hotel berhasil diperbarui!");
      } else {
        // Create
        const { error } = await supabase.from("pbt_hotels").insert(payload);

        if (error) throw error;
        alert("Hotel baru berhasil ditambahkan!");
      }

      setShowModal(false);
      resetForm();
      fetchHotels();
    } catch (err: any) {
      alert("Gagal menyimpan data hotel: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  // Delete Hotel
  const handleDelete = async (id: string, hotelName: string) => {
    if (!confirm(`Yakin ingin menghapus hotel "${hotelName}"?`)) return;

    try {
      const { error } = await supabase.from("pbt_hotels").delete().eq("id", id);

      if (error) throw error;
      setHotels((prev) => prev.filter((item) => item.id !== id));
      alert("Hotel berhasil dihapus!");
    } catch (err: any) {
      alert("Gagal menghapus hotel: " + err.message);
    }
  };

  // Filter Search & Star Rating
  const filteredHotels = hotels.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.area?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStar =
      selectedStar === "Semua" || item.star_rating === selectedStar;

    return matchesSearch && matchesStar;
  });

  return (
    <div className="p-6 lg:p-10 space-y-8">
      {/* Header Workspace */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
            Catalog Database
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Katalog Hotel & Akomodasi
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchHotels}
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 transition-all"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-emerald-400" : ""}`} />
          </button>

          <button
            onClick={handleOpenAddModal}
            className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Hotel</span>
          </button>
        </div>
      </div>

      {/* Search & Star Rating Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900 p-4 rounded-2xl border border-white/10">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama hotel atau area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:border-emerald-500 outline-none"
            />
          </div>

          <div className="text-xs text-slate-400 self-end sm:self-center">
            Total Hotel: <span className="text-white font-bold">{filteredHotels.length}</span>
          </div>
        </div>

        {/* Rating Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {starOptions.map((star) => (
            <button
              key={star.toString()}
              onClick={() => setSelectedStar(star as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedStar === star
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              {typeof star === "number" && <Star className="w-3.5 h-3.5 fill-current" />}
              <span>{typeof star === "number" ? `Bintang ${star}` : star}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid Content */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
          <p className="text-xs">Memuat katalog hotel...</p>
        </div>
      ) : filteredHotels.length === 0 ? (
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto text-slate-500">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Hotel tidak ditemukan</h3>
            <p className="text-xs text-slate-400 mt-1">
              Coba gunakan kata kunci lain atau tambahkan hotel baru.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-white/10 hover:border-emerald-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Image Preview */}
                <div className="h-44 bg-slate-950 relative overflow-hidden">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 gap-2">
                      <ImageIcon className="w-8 h-8" />
                      <span className="text-[10px]">Tanpa Gambar</span>
                    </div>
                  )}

                  {/* Area Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-emerald-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.area || "Bali"}
                  </span>

                  {/* Star Rating Badge */}
                  <span className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-amber-500/90 text-slate-950 font-black text-[11px] flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    {item.star_rating}
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                    Harga / Malam
                  </p>
                  <p className="text-sm font-black text-emerald-400">
                    {item.price_per_night > 0
                      ? `Rp ${item.price_per_night.toLocaleString("id-ID")}`
                      : "Sesuai Request"}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEditModal(item)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Edit Hotel"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                    title="Hapus Hotel"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form (Tambah / Edit) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl space-y-5 p-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <span>{editingId ? "Edit Data Hotel" : "Tambah Hotel Baru"}</span>
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Nama Hotel / Resort *
                </label>
                <input
                  type="text"
                  placeholder="e.g. The Anvaya Beach Resort Bali"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-emerald-500 outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Area / Lokasi
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kuta, Ubud, Seminyak"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Bintang Hotel
                  </label>
                  <select
                    value={starRating}
                    onChange={(e) => setStarRating(parseInt(e.target.value))}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-emerald-500 outline-none"
                  >
                    <option value={5}>Bintang 5 ⭐⭐⭐⭐⭐</option>
                    <option value={4}>Bintang 4 ⭐⭐⭐⭐</option>
                    <option value={3}>Bintang 3 ⭐⭐⭐</option>
                    <option value={2}>Bintang 2 ⭐⭐</option>
                    <option value={1}>Bintang 1 ⭐</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Harga Per Malam (Rp)
                </label>
                <input
                  type="number"
                  placeholder="750000"
                  value={pricePerNight}
                  onChange={(e) => setPricePerNight(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-emerald-400 font-bold focus:border-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  URL Gambar (Image URL)
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Deskripsi / Fasilitas Utama
                </label>
                <textarea
                  rows={3}
                  placeholder="Fasilitas utama, tipe kamar standar, jarak ke pantai, dll..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-slate-300 focus:border-emerald-500 outline-none"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{editingId ? "Simpan Perubahan" : "Tambah Hotel"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}