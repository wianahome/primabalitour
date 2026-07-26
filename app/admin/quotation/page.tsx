"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Trash2, 
  Printer, 
  Palmtree, 
  CheckCircle2,
  XCircle
} from "lucide-react";

interface TourItem {
  id: string;
  title: string;
  description: string;
  pax: number;
  pricePerPax: number;
}

// Logo Pura Bali (SVG Candi Bentar / Meru)
const BaliTempleLogo = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 text-emerald-500 fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base Pedestal */}
    <rect x="20" y="82" width="60" height="6" rx="1" />
    <rect x="25" y="76" width="50" height="6" rx="1" />
    
    {/* Meru Roof 1 */}
    <polygon points="15,76 50,62 85,76" />
    <rect x="35" y="60" width="30" height="3" />
    
    {/* Meru Roof 2 */}
    <polygon points="22,60 50,48 78,60" />
    <rect x="38" y="46" width="24" height="3" />
    
    {/* Meru Roof 3 */}
    <polygon points="28,46 50,36 72,46" />
    <rect x="41" y="34" width="18" height="3" />
    
    {/* Top Peak */}
    <polygon points="35,34 50,20 65,34" />
    <circle cx="50" cy="16" r="3" />
  </svg>
);

export default function PrimaBaliQuotation() {
  // --- State Identitas Prima Bali Tour & Travel ---
  const [companyName, setCompanyName] = useState("Prima Bali Tour & Travel");
  const [companyDetails, setCompanyDetails] = useState(
    "Jl. Utama Bali, Kuta Selatan, Bali\nEmail: info@primabalitour.com | WA: 0812-3456-7890"
  );

  // --- State Klien & Detail Paket ---
  const [clientName, setClientName] = useState("Pak Raffi");
  const [clientPhone, setClientPhone] = useState("0812-3456-7890");
  const [quotationNumber, setQuotationNumber] = useState("PBT/QUO/2026/07/001");
  const [quotationDate, setQuotationDate] = useState("2026-07-26");
  const [validUntil, setValidUntil] = useState("2026-08-10");

  // --- State Item Penawaran Paket Wisata ---
  const [items, setItems] = useState<TourItem[]>([
    {
      id: "1",
      title: "Paket Tour Bali Selatan 4D3N (Private Tour)",
      description: "Penjemputan Bandara, Pandawa Beach, Uluwatu Sunset, Jimbaran Seafood Dinner, Bedugul & Tanah Lot.",
      pax: 2,
      pricePerPax: 3250000,
    },
  ]);

  // --- State Catatan & Fasilitas ---
  const [includeNotes, setIncludeNotes] = useState(
    "• Mobil Avanza/Innova Full AC (Private)\n• Driver Profesional merangkap Tour Guide\n• BBM & Biaya Parkir Seluruh Destinasi\n• Tiket Masuk Seluruh Objek Wisata\n• Air Mineral 1 Botol/Hari/Orang"
  );
  const [excludeNotes, setExcludeNotes] = useState(
    "• Tiket Pesawat PP\n• Pengeluaran Pribadi & Tipping Driver (Sukarela)"
  );

  const [discountPercent, setDiscountPercent] = useState<number>(0);

  // --- Handlers Item Paket (Tambah, Edit, Hapus) ---
  const handleAddItem = () => {
    const newItem: TourItem = {
      id: Date.now().toString(),
      title: "",
      description: "",
      pax: 2,
      pricePerPax: 0,
    };
    setItems([...items, newItem]);
  };

  const handleUpdateItem = (id: string, field: keyof TourItem, value: any) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --- Kalkulasi Total ---
  const subtotal = items.reduce((acc, curr) => acc + curr.pax * curr.pricePerPax, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const grandTotal = subtotal - discountAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Style Global Khusus Cetak: Sembunyikan Sidebar, Nav, & Sisa Halaman */}
      <style jsx global>{`
        @media print {
          /* Sembunyikan semua elemen di luar komponen penawaran (seperti Sidebar, Header Layout) */
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            border: none !important;
          }
          @page {
            size: auto;
            margin: 10mm;
          }
        }
      `}</style>

      <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans print:p-0 print:bg-white print:text-black">
        {/* Header Aksi - Luar Form (Sembunyi saat cetak) */}
        <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Palmtree className="w-6 h-6 text-emerald-400" /> Prima Bali Tour - Penawaran Harga
            </h1>
            <p className="text-xs text-slate-400">
              Kelola penawaran paket wisata Bali untuk klien dengan fleksibel.
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Printer className="w-4 h-4" /> Cetak / Download PDF
          </button>
        </div>

        {/* DOKUMEN UTAMA PENAWARAN */}
        <div 
          id="print-area"
          className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl print:bg-white print:border-none print:shadow-none print:text-black print:p-0"
        >
          {/* HEADER & LOGO PURA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-slate-800 print:border-slate-300">
            <div className="flex items-start gap-4">
              {/* Logo Pura Bali */}
              <div className="flex-shrink-0 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl print:bg-transparent print:border-none">
                <BaliTempleLogo />
              </div>

              <div className="space-y-1 flex-1">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Nama Perusahaan Tour"
                  className="w-full bg-transparent text-lg font-bold text-white print:text-black focus:outline-none focus:border-b border-emerald-500"
                />
                <textarea
                  rows={2}
                  value={companyDetails}
                  onChange={(e) => setCompanyDetails(e.target.value)}
                  placeholder="Alamat & Kontak"
                  className="w-full bg-transparent text-xs text-slate-400 print:text-slate-600 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="text-left sm:text-right space-y-3">
              <h2 className="text-2xl font-black text-emerald-400 print:text-emerald-700 tracking-tight">PENAWARAN PAKET WISATA</h2>
              <div className="space-y-1.5 text-xs">
                <div className="flex sm:justify-end items-center gap-2">
                  <span className="text-slate-500">No. Penawaran:</span>
                  <input
                    type="text"
                    value={quotationNumber}
                    onChange={(e) => setQuotationNumber(e.target.value)}
                    className="bg-slate-950 sm:text-right print:bg-transparent border border-slate-800 print:border-none px-2 py-1 rounded text-white print:text-black focus:outline-none"
                  />
                </div>
                <div className="flex sm:justify-end items-center gap-2">
                  <span className="text-slate-500">Tanggal:</span>
                  <input
                    type="date"
                    value={quotationDate}
                    onChange={(e) => setQuotationDate(e.target.value)}
                    className="bg-slate-950 sm:text-right print:bg-transparent border border-slate-800 print:border-none px-2 py-1 rounded text-white print:text-black focus:outline-none"
                  />
                </div>
                <div className="flex sm:justify-end items-center gap-2">
                  <span className="text-slate-500">Berlaku Sampai:</span>
                  <input
                    type="date"
                    value={validUntil}
                    onChange={(e) => setValidUntil(e.target.value)}
                    className="bg-slate-950 sm:text-right print:bg-transparent border border-slate-800 print:border-none px-2 py-1 rounded text-white print:text-black focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* INFO KLIEN TOUR */}
          <div className="py-6 border-b border-slate-800 print:border-slate-300">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
              PENAWARAN DITUJUKAN KEPADA:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 bg-slate-950 print:bg-transparent border border-slate-800 print:border-none px-3 py-1.5 rounded">
                <span className="text-slate-500">Nama Tamu/Klien:</span>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Nama Klien"
                  className="bg-transparent text-white print:text-black font-semibold focus:outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2 bg-slate-950 print:bg-transparent border border-slate-800 print:border-none px-3 py-1.5 rounded">
                <span className="text-slate-500">WhatsApp/HP:</span>
                <input
                  type="text"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="No WhatsApp"
                  className="bg-transparent text-slate-300 print:text-slate-700 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>

          {/* TABEL PAKET WISATA */}
          <div className="py-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 print:border-slate-300 text-slate-400">
                    <th className="py-2 px-2 w-12 text-center">No.</th>
                    <th className="py-2 px-2">Rincian Paket / Destinasi Tour</th>
                    <th className="py-2 px-2 w-20 text-center">Peserta</th>
                    <th className="py-2 px-2 w-36 text-right">Harga / Pax (Rp)</th>
                    <th className="py-2 px-2 w-36 text-right">Total (Rp)</th>
                    <th className="py-2 px-2 w-10 text-center print:hidden"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 print:divide-slate-200">
                  {items.map((item, index) => (
                    <tr key={item.id}>
                      <td className="py-3 px-2 text-center font-mono text-slate-500">
                        {index + 1}
                      </td>

                      <td className="py-3 px-2 space-y-1">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleUpdateItem(item.id, "title", e.target.value)}
                          placeholder="Judul Paket Tour"
                          className="w-full bg-slate-950 print:bg-transparent border border-slate-800 print:border-none px-2 py-1 rounded text-white print:text-black font-semibold focus:outline-none"
                        />
                        <textarea
                          rows={2}
                          value={item.description}
                          onChange={(e) => handleUpdateItem(item.id, "description", e.target.value)}
                          placeholder="Rute & Destinasi Singkat..."
                          className="w-full bg-slate-950 print:bg-transparent border border-slate-800 print:border-none px-2 py-1 rounded text-slate-400 print:text-slate-600 focus:outline-none resize-none"
                        />
                      </td>

                      <td className="py-3 px-2">
                        <div className="flex items-center justify-center gap-1">
                          <input
                            type="number"
                            min={1}
                            value={item.pax}
                            onChange={(e) => handleUpdateItem(item.id, "pax", Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-14 bg-slate-950 print:bg-transparent border border-slate-800 print:border-none px-2 py-1 rounded text-center text-white print:text-black focus:outline-none"
                          />
                          <span className="text-[10px] text-slate-500">Pax</span>
                        </div>
                      </td>

                      <td className="py-3 px-2">
                        <input
                          type="number"
                          min={0}
                          value={item.pricePerPax}
                          onChange={(e) => handleUpdateItem(item.id, "pricePerPax", parseFloat(e.target.value) || 0)}
                          className="w-full bg-slate-950 print:bg-transparent border border-slate-800 print:border-none px-2 py-1 rounded text-right text-white print:text-black font-mono focus:outline-none"
                        />
                      </td>

                      <td className="py-3 px-2 text-right font-mono font-semibold text-emerald-400 print:text-black">
                        {(item.pax * item.pricePerPax).toLocaleString("id-ID")}
                      </td>

                      <td className="py-3 px-2 text-center print:hidden">
                        {items.length > 1 && (
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                            title="Hapus Baris"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={handleAddItem}
              className="mt-4 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold rounded-lg text-xs transition-all flex items-center gap-1.5 print:hidden"
            >
              <Plus className="w-3.5 h-3.5" /> Tambah Paket / Pilihan Wisata
            </button>
          </div>

          {/* INCLUDES & EXCLUDES FASILITAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 border-t border-slate-800 print:border-slate-300">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 print:text-emerald-700 flex items-center gap-1 uppercase tracking-widest">
                <CheckCircle2 className="w-3.5 h-3.5" /> Fasilitas Termasuk (Includes):
              </span>
              <textarea
                rows={5}
                value={includeNotes}
                onChange={(e) => setIncludeNotes(e.target.value)}
                className="w-full bg-slate-950 print:bg-transparent border border-slate-800 print:border-none p-2 rounded text-xs text-slate-300 print:text-slate-700 focus:outline-none resize-none leading-relaxed"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-rose-400 print:text-rose-700 flex items-center gap-1 uppercase tracking-widest">
                <XCircle className="w-3.5 h-3.5" /> Tidak Termasuk (Excludes):
              </span>
              <textarea
                rows={5}
                value={excludeNotes}
                onChange={(e) => setExcludeNotes(e.target.value)}
                className="w-full bg-slate-950 print:bg-transparent border border-slate-800 print:border-none p-2 rounded text-xs text-slate-300 print:text-slate-700 focus:outline-none resize-none leading-relaxed"
              />
            </div>
          </div>

          {/* RINGKASAN HARGA AKHIR */}
          <div className="pt-4 border-t border-slate-800 print:border-slate-300 flex justify-end">
            <div className="w-full sm:w-72 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-400 print:text-black">
                <span>Subtotal:</span>
                <span className="font-mono text-white print:text-black">
                  Rp {subtotal.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-400 print:text-black">
                <div className="flex items-center gap-1">
                  <span>Diskon Paket (%):</span>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(parseFloat(e.target.value) || 0)}
                    className="w-12 bg-slate-950 print:bg-transparent border border-slate-800 print:border-none px-1 py-0.5 rounded text-center text-white print:text-black focus:outline-none"
                  />
                </div>
                <span className="font-mono text-rose-400 print:text-black">
                  - Rp {discountAmount.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-800 print:border-slate-300 text-sm font-bold">
                <span className="text-emerald-400 print:text-black">Total Penawaran:</span>
                <span className="font-mono text-emerald-400 print:text-black text-base">
                  Rp {grandTotal.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          </div>

          {/* TANDA TANGAN */}
          <div className="mt-12 grid grid-cols-2 gap-6 text-center text-xs print:mt-16">
            <div></div>
            <div className="space-y-12">
              <p className="text-slate-400 print:text-slate-600">
                Hormat Kami,<br />
                <strong className="text-white print:text-black">{companyName}</strong>
              </p>
              <div className="border-b border-slate-700 print:border-black w-48 mx-auto"></div>
              <p className="font-semibold text-white print:text-black">Tour Reservation Manager</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}