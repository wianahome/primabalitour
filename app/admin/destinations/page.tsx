"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Plus,
  Search,
  MapPin,
  Trash2,
  Edit2,
  Loader2,
  RefreshCw,
  X,
  Image as ImageIcon,
  DollarSign,
  Tag,
} from "lucide-react";

interface DestinationItem {
  id: string;
  name: string;
  category: string;
  price_per_person: number;
  image_url: string;
  description: string;
  created_at: string;
}

export default function AdminDestinations() {
  const [destinations, setDestinations] = useState<DestinationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // State Modal Form (Tambah / Edit)
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Wisata Alam");
  const [pricePerPerson, setPricePerPerson] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const categories = ["Semua", "Wisata Alam", "Pantai", "Budaya & Candi", "Petualangan", "Kuliner"];

  // Fetch Destinasi dari Supabase
  const fetchDestinations = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("pbt_destinations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setDestinations(data || []);
    } catch (err: any) {
      alert("Gagal memuat data destinasi: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // Reset Form
  const resetForm = () => {
    setEditingId(null);
    setName("");
    setCategory("Wisata Alam");
    setPricePerPerson(0);
    setImageUrl("");
    setDescription("");
  };

  // Open Modal Tambah
  const handleOpenAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  // Open Modal Edit
  const handleOpenEditModal = (item: DestinationItem) => {
    setEditingId(item.id);
    setName(item.name);
    setCategory(item.category);
    setPricePerPerson(item.price_per_person);
    setImageUrl(item.image_url || "");
    setDescription(item.description || "");
    setShowModal(true);
  };

  // Save (Create or Update)
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Nama Destinasi wajib diisi!");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        name,
        category,
        price_per_person: pricePerPerson,
        image_url: imageUrl,
        description,
      };

      if (editingId) {
        // Update
        const { error } = await supabase
          .from("pbt_destinations")
          .update(payload)
          .eq("id", editingId);

        if (error) throw error;
        alert("Destinasi berhasil diperbarui!");
      } else {
        // Create
        const { error } = await supabase.from("pbt_destinations").insert(payload);

        if (error) throw error;
        alert("Destinasi baru berhasil ditambahkan!");
      }

      setShowModal(false);
      resetForm();
      fetchDestinations();
    } catch (err: any) {
      alert("Gagal menyimpan destinasi: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  // Delete Destinasi
  const handleDelete = async (id: string, destName: string) => {
    if (!confirm(`Yakin ingin menghapus destinasi "${destName}"?`)) return;

    try {
      const { error } = await supabase.from("pbt_destinations").delete().eq("id", id);

      if (error) throw error;
      setDestinations((prev) => prev.filter((item) => item.id !== id));
      alert("Destinasi berhasil dihapus!");
    } catch (err: any) {
      alert("Gagal menghapus destinasi: " + err.message);
    }
  };

  // Filter Search & Category
  const filteredDestinations = destinations.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
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
            Katalog Destinasi Wisata
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchDestinations}
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
            <span>Tambah Destinasi</span>
          </button>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900 p-4 rounded-2xl border border-white/10">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari destinasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:border-emerald-500 outline-none"
            />
          </div>

          <div className="text-xs text-slate-400 self-end sm:self-center">
            Total Destinasi: <span className="text-white font-bold">{filteredDestinations.length}</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Content */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
          <p className="text-xs">Memuat katalog destinasi...</p>
        </div>
      ) : filteredDestinations.length === 0 ? (
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto text-slate-500">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Destinasi tidak ditemukan</h3>
            <p className="text-xs text-slate-400 mt-1">
              Coba gunakan kata kunci lain atau tambahkan destinasi baru.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((item) => (
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
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                    {item.category}
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
                    Tiket / Pax
                  </p>
                  <p className="text-sm font-black text-emerald-400">
                    {item.price_per_person > 0
                      ? `Rp ${item.price_per_person.toLocaleString("id-ID")}`
                      : "Gratis / Variable"}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEditModal(item)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Edit Destinasi"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                    title="Hapus Destinasi"
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
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>{editingId ? "Edit Destinasi" : "Tambah Destinasi Baru"}</span>
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
                  Nama Destinasi *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pura Luhur Uluwatu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-emerald-500 outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Kategori
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-emerald-500 outline-none"
                  >
                    <option value="Wisata Alam">Wisata Alam</option>
                    <option value="Pantai">Pantai</option>
                    <option value="Budaya & Candi">Budaya & Candi</option>
                    <option value="Petualangan">Petualangan</option>
                    <option value="Kuliner">Kuliner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Harga Tiket / Pax (Rp)
                  </label>
                  <input
                    type="number"
                    placeholder="50000"
                    value={pricePerPerson}
                    onChange={(e) => setPricePerPerson(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-emerald-400 font-bold focus:border-emerald-500 outline-none"
                  />
                </div>
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
                  Deskripsi / Catatan Tempat
                </label>
                <textarea
                  rows={3}
                  placeholder="Penjelasan singkat tempat wisata, daya tarik utama, atau jam buka..."
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
                  <span>{editingId ? "Simpan Perubahan" : "Tambah Destinasi"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}