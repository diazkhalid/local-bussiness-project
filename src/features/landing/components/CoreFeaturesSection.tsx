"use client";

import React from "react";
import {
  ShoppingBag,
  ListOrdered,
  CalendarDays,
  Gauge,
  Sparkles,
} from "lucide-react";

interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeColor: string;
  visual: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: "katalog",
    badge: "Fitur 1",
    title: "Katalog Produk Online",
    description:
      "Tampilkan produk, foto, harga, dan pilihan varian dalam satu halaman toko yang rapi dan mudah dibagikan kepada pelanggan.",
    icon: <ShoppingBag className="w-4.5 h-4.5 text-orange-600" />,
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    visual: (
      <div className="p-3 bg-slate-50/90 rounded-2xl border border-slate-200/80 space-y-2">
        <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
          <span>Preview Katalog Toko</span>
          <span className="text-orange-600 font-bold">
            orderlokal.id/dapur-ibu
          </span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white text-[9px] font-black flex-shrink-0">
              KUE
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-800 truncate">
                Fudgy Brownies Classic
              </div>
              <div className="text-[9px] font-extrabold text-orange-600">
                Rp 65.000
              </div>
            </div>
          </div>
          <div className="flex gap-1 pt-1 border-t border-slate-100 text-[8px] font-bold">
            <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
              Almond (+Rp 5rb)
            </span>
            <span className="px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
              Keju (+Rp 5rb)
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "manajemen",
    badge: "Fitur 2",
    title: "Manajemen Pesanan",
    description:
      "Lihat detail pesanan, informasi pelanggan, jumlah produk, dan status pengerjaan langsung dari satu dashboard terpusat.",
    icon: <ListOrdered className="w-4.5 h-4.5 text-rose-600" />,
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    visual: (
      <div className="p-3 bg-slate-50/90 rounded-2xl border border-slate-200/80 space-y-1.5 text-left">
        <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
          <span>Daftar Pesanan Masuk</span>
          <span className="text-slate-600 font-bold">Terbaru</span>
        </div>
        <div className="space-y-1.5">
          <div className="bg-white p-1.5 rounded-xl border border-slate-200 flex items-center justify-between gap-2 shadow-2xs">
            <div>
              <div className="text-[10px] font-bold text-slate-800">
                Siti — 2 Box Fudgy
              </div>
              <div className="text-[8px] text-slate-400">Tgl Kirim: Besok</div>
            </div>
            <span className="px-1.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-[8px] font-extrabold">
              Menunggu Konfirmasi
            </span>
          </div>
          <div className="bg-white p-1.5 rounded-xl border border-slate-200 flex items-center justify-between gap-2 shadow-2xs">
            <div>
              <div className="text-[10px] font-bold text-slate-800">
                Budi — Dimsum Frozen
              </div>
              <div className="text-[8px] text-slate-400">Sudah Transfer</div>
            </div>
            <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[8px] font-extrabold">
              Diproses
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "jadwal",
    badge: "Fitur 3",
    title: "Jadwal Pre-Order",
    description:
      "Tentukan tanggal pemesanan dan jadwal pengambilan secara fleksibel agar pengiriman produk lebih teratur.",
    icon: <CalendarDays className="w-4.5 h-4.5 text-amber-600" />,
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    visual: (
      <div className="p-3 bg-slate-50/90 rounded-2xl border border-slate-200/80 space-y-1.5">
        <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
          <span>Kalender Pengiriman PO</span>
          <span className="text-amber-700 font-bold">Oktober</span>
        </div>
        <div className="grid grid-cols-3 gap-1 bg-white p-1.5 rounded-xl border border-slate-200 text-center">
          <div className="p-1 rounded-lg bg-orange-50 border border-orange-200">
            <span className="text-[8px] font-bold text-orange-600 block">
              Jumat, 28
            </span>
            <span className="text-[9px] font-black text-orange-900">
              12 Order
            </span>
          </div>
          <div className="p-1 rounded-lg bg-amber-50 border border-amber-200">
            <span className="text-[8px] font-bold text-amber-600 block">
              Sabtu, 29
            </span>
            <span className="text-[9px] font-black text-amber-900">
              8 Order
            </span>
          </div>
          <div className="p-1 rounded-lg bg-slate-50 border border-slate-200 opacity-60">
            <span className="text-[8px] font-bold text-slate-400 block">
              Minggu, 30
            </span>
            <span className="text-[8px] font-extrabold text-slate-500">
              Tutup PO
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "kapasitas",
    badge: "Fitur 4",
    title: "Kapasitas Produksi",
    description:
      "Tentukan batas maksimal pesanan untuk setiap tanggal agar kamu bisa mengendalikan jumlah produksi sesuai kemampuan bisnis.",
    icon: <Gauge className="w-4.5 h-4.5 text-emerald-600" />,
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    visual: (
      <div className="p-3 bg-slate-50/90 rounded-2xl border border-slate-200/80 space-y-1.5">
        <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
          <span>Indikator Kuota Harian</span>
          <span className="text-emerald-700 font-bold">15/20 Box</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-1.5">
          <div className="flex justify-between text-[9px] font-bold">
            <span className="text-slate-700">Slot Jumat (28 Okt)</span>
            <span className="text-emerald-600">Sisa 5 Slot</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[75%]" />
          </div>
          <div className="text-[8px] text-slate-400 font-semibold flex items-center justify-between pt-0.5">
            <span>Terisi 75%</span>
            <span className="text-amber-600 font-bold">
              Auto-Close jika penuh
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function CoreFeaturesSection() {
  return (
    <section
      id="fitur"
      className="relative py-16 bg-gradient-to-b from-white via-orange-50/20 to-white text-slate-900 overflow-hidden border-b border-orange-100/60"
    >
      {/* Decorative Light Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-orange-100/40 via-amber-100/40 to-rose-100/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-[10px] font-extrabold tracking-wide uppercase shadow-2xs">
            <Sparkles className="w-3 h-3 text-orange-600" />
            <span>Fitur Utama OrderLokal</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-snug">
            Semua yang Kamu Butuhkan untuk{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Mengelola Pre-Order
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Fokus pada empat fitur utama yang dirancang khusus agar rekap
            pesanan usaha kuliner Anda selalu rapi dan terkontrol.
          </p>
        </div>

        {/* ================= 4 CORE FEATURES GRID (CARDLESS / SEAMLESS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative flex flex-col justify-between space-y-3 p-2 rounded-3xl transition-all duration-200 group"
            >
              <div className="space-y-2.5">
                {/* Header Fitur: Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full border text-[9px] font-extrabold uppercase tracking-wide ${feature.badgeColor}`}
                  >
                    {feature.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                </div>

                {/* Judul & Deskripsi */}
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Visual UI Preview Mini */}
              <div className="pt-1.5">{feature.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
