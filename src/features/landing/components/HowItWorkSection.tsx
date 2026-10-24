"use client";

import React from "react";
import {
  PlusCircle,
  Share2,
  LayoutDashboard,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Copy,
  ExternalLink,
} from "lucide-react";

interface StepItem {
  number: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}

const steps: StepItem[] = [
  {
    number: "01",
    badge: "Langkah 1",
    title: "Buat Katalog Toko",
    description:
      "Tambahkan nama bisnis, produk, harga, foto menarik, dan atur informasi jadwal pre-order dengan mudah.",
    icon: <PlusCircle className="w-4.5 h-4.5 text-orange-600" />,
    visual: (
      <div className="w-full max-w-md p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-orange-100 shadow-xs space-y-1.5 text-left">
        <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
          <span>Form Produk Baru</span>
          <span className="text-emerald-600 font-extrabold">+ Tambah</span>
        </div>
        <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/80 space-y-1.5">
          <div>
            <div className="text-[9px] font-bold text-slate-600">
              Nama Produk
            </div>
            <div className="text-[10px] font-bold text-slate-900 bg-white p-1.5 rounded-lg border border-slate-200/60 mt-0.5">
              Fudgy Brownies Classic
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div>
              <div className="text-[9px] font-bold text-slate-600">Harga</div>
              <div className="text-[10px] font-extrabold text-orange-600 bg-white p-1.5 rounded-lg border border-slate-200/60 mt-0.5">
                Rp 65.000
              </div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-slate-600">
                Status PO
              </div>
              <div className="text-[9px] font-extrabold text-amber-700 bg-amber-50 p-1.5 rounded-lg border border-amber-200 mt-0.5 text-center">
                Pre-Order
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    badge: "Langkah 2",
    title: "Bagikan Tautan Toko",
    description:
      "Setelah katalog siap, bagikan tautan unik toko Anda ke WhatsApp, bio Instagram, atau media sosial lainnya.",
    icon: <Share2 className="w-4.5 h-4.5 text-rose-600" />,
    visual: (
      <div className="w-full max-w-md p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-rose-100 shadow-xs space-y-1.5 text-left">
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
          Tautan Toko Anda
        </div>
        <div className="bg-slate-50/80 p-2.5 rounded-xl border border-rose-200/60 space-y-1.5">
          <div className="flex items-center justify-between gap-2 bg-white p-2 rounded-lg border border-orange-200/80">
            <span className="text-[10px] font-bold text-orange-900 truncate">
              orderlokal.id/toko/kue-mama
            </span>
            <div className="flex items-center gap-1">
              <span className="p-0.5 rounded bg-orange-50 text-orange-600">
                <Copy className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] text-slate-500 font-semibold px-0.5">
            <span className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 className="w-2.5 h-2.5" /> Siap Bagikan
            </span>
            <span className="flex items-center gap-0.5 text-slate-400">
              Preview <ExternalLink className="w-2 h-2" />
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    badge: "Langkah 3",
    title: "Kelola Pesanan dari Dashboard",
    description:
      "Pelanggan memesan via katalog. Anda dapat melihat rincian pesanan, mengonfirmasi pembayarannya, dan mengubah statusnya.",
    icon: <LayoutDashboard className="w-4.5 h-4.5 text-emerald-600" />,
    visual: (
      <div className="w-full max-w-md p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-emerald-100 shadow-xs space-y-1.5 text-left">
        <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
          <span>Daftar Pesanan</span>
          <span className="text-slate-600 font-extrabold">2 Masuk</span>
        </div>
        <div className="space-y-1.5">
          <div className="bg-slate-50/80 p-2 rounded-xl border border-slate-200/80 flex items-center justify-between gap-2">
            <div>
              <div className="text-[10px] font-bold text-slate-800">
                Rina — Dimsum (2 Pack)
              </div>
              <div className="text-[8px] text-slate-400">Total: Rp 50.000</div>
            </div>
            <span className="px-1.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-[8px] font-extrabold">
              Perlu Konfirmasi
            </span>
          </div>
          <div className="bg-slate-50/80 p-2 rounded-xl border border-slate-200/80 flex items-center justify-between gap-2">
            <div>
              <div className="text-[10px] font-bold text-slate-800">
                Andi — Brownies Box
              </div>
              <div className="text-[8px] text-slate-400">
                Kirim: Besok, 10:00
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[8px] font-extrabold">
              Diproses
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksTimeline() {
  return (
    <section
      id="cara-kerja"
      className="relative py-16 bg-gradient-to-b from-white via-amber-50/20 to-white text-slate-900 overflow-hidden border-b border-orange-100/60"
    >
      {/* Decorative Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-orange-100/30 via-rose-100/40 to-amber-100/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-[10px] font-extrabold tracking-wide uppercase shadow-2xs">
            <Sparkles className="w-3 h-3 text-orange-600" />
            <span>Alur Praktis Tanpa Setup Rumit</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-snug">
            Mulai Menerima Pesanan dalam{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              3 Langkah Sederhana
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Tidak butuh waktu lama untuk mengarahkan pembeli dari pesan manual
            ke katalog terstruktur.
          </p>
        </div>

        {/* ================= STEPPED TIMELINE (NO CARDS) ================= */}
        <div className="relative space-y-12 md:space-y-16">
          {/* Garis Penghubung Vertikal Tengah (Desktop Only) */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-orange-300 via-rose-300 to-amber-300" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* SISI A: PENJELASAN TEKS */}
                <div
                  className={`w-full md:w-1/2 text-center ${isEven ? "md:text-left" : "md:text-right"}`}
                >
                  <div
                    className={`inline-flex items-center gap-1.5 mb-1.5 ${isEven ? "md:justify-start" : "md:justify-end"}`}
                  >
                    <span className="text-[10px] font-black text-orange-600 bg-orange-100/80 px-2 py-0.5 rounded-full border border-orange-200">
                      {step.badge}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      Langkah {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    {step.title}
                  </h3>

                  <p
                    className={`text-[11px] sm:text-xs text-slate-600 font-medium mt-1.5 leading-relaxed max-w-md mx-auto ${
                      isEven ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* TITIK INDIKATOR TENGAH (DESKTOP) */}
                <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full bg-white border-2 border-orange-400 shadow-md shadow-orange-500/20 flex items-center justify-center font-black text-[11px] text-orange-600">
                  {step.number}
                </div>

                {/* SISI B: VISUAL PREVIEW UI */}
                <div
                  className={`w-full md:w-1/2 flex justify-center ${isEven ? "md:justify-end" : "md:justify-start"}`}
                >
                  {step.visual}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= CTA BANNER TANPA KARTU ================= */}
        <div className="mt-16 text-center space-y-2.5">
          <a
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 hover:opacity-95 active:scale-95 rounded-full shadow-md shadow-orange-500/25 transition-all duration-200"
          >
            <span>Coba Buat Toko</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <p className="text-[11px] font-semibold text-slate-400">
            Pendaftaran cepat tanpa perlu kartu kredit.
          </p>
        </div>
      </div>
    </section>
  );
}
