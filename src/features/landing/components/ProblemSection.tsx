"use client";

import React from "react";
import {
  MessageSquareOff,
  CalendarDays,
  FileSpreadsheet,
  AlertCircle,
} from "lucide-react";

interface ProblemItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  visual: React.ReactNode;
}

const problems: ProblemItem[] = [
  {
    icon: <MessageSquareOff className="w-4.5 h-4.5 text-rose-600" />,
    badge: "Masalah 1",
    title: "Pesanan Tersebar di Banyak Chat",
    description:
      "Pelanggan memesan melalui WhatsApp atau media sosial. Pemilik bisnis harus mencari kembali informasi pesanan ketika ingin memprosesnya.",
    visual: (
      <div className="space-y-1.5 p-2.5 bg-slate-50 rounded-2xl border border-slate-100 font-sans">
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-rose-100 shadow-2xs">
          <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-[9px] font-bold">
            WA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] font-bold text-slate-800 truncate">
              Siti (Kue Bika Ambon)
            </p>
            <p className="text-[8px] text-slate-400 truncate">
              "Sis, pesan 2 box ya untuk besok..."
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-amber-100 shadow-2xs">
          <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[9px] font-bold">
            IG
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] font-bold text-slate-800 truncate">
              @budi_dimsum
            </p>
            <p className="text-[8px] text-slate-400 truncate">
              "Daftar menu frozen food-nya apa aja?"
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <CalendarDays className="w-4.5 h-4.5 text-orange-600" />,
    badge: "Masalah 2",
    title: "Sulit Mengatur Pre-Order",
    description:
      "Pemilik bisnis harus mengingat tanggal pengambilan, jumlah pesanan, dan batas kapasitas produksi setiap hari agar tidak over-capacity.",
    visual: (
      <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
          <div className="p-1 rounded-lg bg-white border border-slate-200 text-slate-600 font-semibold">
            <span>Sen</span>
            <span className="block font-black text-slate-800 text-[11px] mt-0.5">
              12
            </span>
            <span className="text-[7px] text-rose-500 font-extrabold">
              Full PO
            </span>
          </div>
          <div className="p-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 font-semibold">
            <span>Sel</span>
            <span className="block font-black text-orange-900 text-[11px] mt-0.5">
              13
            </span>
            <span className="text-[7px] text-orange-600 font-bold">5 Box?</span>
          </div>
          <div className="p-1 rounded-lg bg-white border border-slate-200 text-slate-600 font-semibold">
            <span>Rab</span>
            <span className="block font-black text-slate-800 text-[11px] mt-0.5">
              14
            </span>
            <span className="text-[7px] text-slate-400">Tutup</span>
          </div>
          <div className="p-1 rounded-lg bg-white border border-slate-200 text-slate-600 font-semibold">
            <span>Kam</span>
            <span className="block font-black text-slate-800 text-[11px] mt-0.5">
              15
            </span>
            <span className="text-[7px] text-amber-600 font-bold">
              Cek Chat
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <FileSpreadsheet className="w-4.5 h-4.5 text-amber-600" />,
    badge: "Masalah 3",
    title: "Risiko Pesanan Terlewat",
    description:
      "Informasi pelanggan, produk, jumlah, dan catatan khusus pesanan tidak selalu tersusun dalam satu format yang konsisten.",
    visual: (
      <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
        <div className="p-1.5 rounded-xl bg-rose-50/70 border border-rose-100 flex items-center justify-between">
          <span className="text-[9px] font-bold text-rose-800 line-through">
            Note: Roti Sobek (Lupa Varian)
          </span>
          <span className="text-[8px] font-black text-rose-600 uppercase">
            Risiko Salah
          </span>
        </div>
        <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
          <span className="text-[9px] font-bold text-emerald-800">
            OrderLokal: Brownies (Lunas)
          </span>
          <span className="text-[8px] font-black text-emerald-600 uppercase">
            Rapi
          </span>
        </div>
      </div>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-orange-50/30 to-white text-slate-900 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-orange-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-[10px] font-extrabold tracking-wide uppercase shadow-2xs">
            <AlertCircle className="w-3 h-3 text-rose-600" />
            <span>Tantangan Bisnis Rumahan</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-snug">
            Masih Mengelola Pesanan dengan{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Cara Manual?
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Saat pesanan semakin banyak, mengandalkan chat dan catatan manual
            bisa membuat pekerjaan semakin sulit.
          </p>
        </div>

        {/* ================= 3 KARTU MASALAH ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl p-5 bg-white border border-slate-200/85 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                {/* Header Kartu: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[9px] font-extrabold text-slate-600">
                    {item.badge}
                  </span>
                </div>

                {/* Judul & Deskripsi */}
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Visual Preview Masalah */}
              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Situasi Lapangan:
                </span>
                {item.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
