"use client";

import React from "react";
import {
  Smartphone,
  LayoutDashboard,
  ShoppingBag,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function ProductShowcaseSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-amber-50/20 to-white text-slate-900 overflow-hidden border-b border-orange-100/60">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-orange-200/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-rose-200/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-[10px] font-extrabold tracking-wide uppercase shadow-2xs">
            <Sparkles className="w-3 h-3 text-orange-600" />
            <span>Pengalaman Pengguna</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-snug">
            Gambaran Nyata{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Toko & Dashboard Kamu
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Lihat bagaimana kemudahan pembeli dalam memesan dan cara kamu
            mengendalikan semua pesanan di satu tempat.
          </p>
        </div>

        {/* ================= BAGIAN A: KATALOG YANG DILIHAT PELANGGAN ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Kiri: Deskripsi Teks & CTA */}
          <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[11px] font-bold">
              <Smartphone className="w-3 h-3" />
              <span>Sisi Pelanggan (Public Catalog)</span>
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 leading-snug">
              Toko Online Sederhana untuk Produkmu
            </h3>

            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
              Berikan pelanggan satu tautan praktis untuk melihat produk,
              memilih varian favorit, dan menentukan tanggal jadwal pengambilan
              tanpa ribet.
            </p>

            <ul className="space-y-1.5 pt-1.5 text-[11px] sm:text-xs text-slate-700 font-semibold text-left max-w-sm mx-auto lg:mx-0">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Desain responsif & ringan di ponsel pelanggan</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Pilihan tanggal & slot PO yang jelas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Langsung terhubung dengan format order WA</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="/demo-toko"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold text-orange-700 bg-orange-50 hover:bg-orange-100/80 border border-orange-200/80 rounded-full transition-all"
              >
                <span>Lihat Contoh Toko</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Kanan: Mockup Ponsel Katalog Pelanggan */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm bg-white border-4 border-slate-900 rounded-[32px] shadow-2xl p-3.5 overflow-hidden">
              {/* Notch HP */}
              <div className="w-24 h-3.5 bg-slate-900 mx-auto rounded-b-xl mb-2.5" />

              {/* Header Toko */}
              <div className="text-center pb-2.5 border-b border-slate-100 space-y-0.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 mx-auto flex items-center justify-center text-white font-black text-[11px] shadow-md">
                  DM
                </div>
                <h4 className="text-[11px] font-black text-slate-900">
                  Dapur Manis Ibu
                </h4>
                <p className="text-[9px] text-slate-400 font-medium">
                  Spesialis Fudgy Brownies & Pastry
                </p>
              </div>

              {/* Produk Card dalam HP */}
              <div className="my-2.5 p-2 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="w-full h-20 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-black text-[11px] shadow-inner">
                  [ Foto Fudgy Brownies ]
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h5 className="text-[11px] font-bold text-slate-800">
                      Fudgy Brownies Shiny Crust
                    </h5>
                    <span className="text-[11px] font-black text-orange-600">
                      Rp 65.000
                    </span>
                  </div>
                  <p className="text-[8px] text-slate-500 mt-0.5">
                    Ukuran 20x10 cm, tekstur lembut & cokelat lumer.
                  </p>
                </div>

                {/* Pilihan Tanggal PO */}
                <div className="pt-1.5 border-t border-slate-200/60 space-y-1">
                  <span className="text-[8px] font-bold text-slate-500 uppercase block">
                    Pilih Tanggal Pengambilan:
                  </span>
                  <div className="grid grid-cols-2 gap-1">
                    <button className="p-1 rounded-lg bg-orange-500 text-white text-[8px] font-bold text-center shadow-2xs">
                      Jumat, 28 Okt (Sisa 5)
                    </button>
                    <button className="p-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-[8px] font-semibold text-center">
                      Sabtu, 29 Okt (Sisa 8)
                    </button>
                  </div>
                </div>

                {/* Tombol Pesan */}
                <button className="w-full py-1.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[9px] font-extrabold rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-1 mt-1.5">
                  <ShoppingBag className="w-2.5 h-2.5" />
                  <span>Pesan Sekarang via WA</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BAGIAN B: DASHBOARD YANG DIGUNAKAN PEMILIK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Kiri (Desktop Order Shifted): Mockup Dashboard Pemilik */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-3.5 sm:p-4 shadow-xl space-y-3">
              {/* Header Mini Dashboard */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-orange-500 text-white flex items-center justify-center font-black text-[10px]">
                    OL
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block leading-none">
                      Dashboard Pemilik Toko
                    </span>
                    <span className="text-[8px] text-slate-400">
                      Ringkasan Operasional PO
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-extrabold border border-emerald-200">
                  Live Sync
                </span>
              </div>

              {/* Ringkasan Kapasitas & Metric Widget */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="p-2 rounded-2xl bg-orange-50/80 border border-orange-100 text-left">
                  <span className="text-[8px] font-bold text-slate-500 block">
                    Pesanan Masuk
                  </span>
                  <span className="text-xs font-black text-orange-600 block mt-0.5">
                    14 Order
                  </span>
                  <span className="text-[7px] text-orange-500 font-semibold">
                    +3 Hari ini
                  </span>
                </div>
                <div className="p-2 rounded-2xl bg-amber-50/80 border border-amber-100 text-left">
                  <span className="text-[8px] font-bold text-slate-500 block">
                    Kuota Produksi
                  </span>
                  <span className="text-xs font-black text-amber-700 block mt-0.5">
                    15/20 Box
                  </span>
                  <span className="text-[7px] text-amber-600 font-semibold">
                    Terisi 75%
                  </span>
                </div>
                <div className="p-2 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-left">
                  <span className="text-[8px] font-bold text-slate-500 block">
                    Status PO
                  </span>
                  <span className="text-xs font-black text-emerald-700 block mt-0.5">
                    Aktif
                  </span>
                  <span className="text-[7px] text-emerald-600 font-semibold">
                    Jumat, 28 Okt
                  </span>
                </div>
              </div>

              {/* Daftar Pesanan Masuk (Table Style) */}
              <div className="space-y-1 text-left">
                <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1">
                  <span>Daftar Pesanan Terbaru</span>
                  <span className="text-orange-600 font-bold">Lihat Semua</span>
                </div>

                <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 text-[8px] font-black flex items-center justify-center">
                      #01
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">
                        Siti Rahma (2 Box Fudgy)
                      </div>
                      <div className="text-[8px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-2 h-2 text-slate-400" />
                        <span>Kirim: 28 Okt, 14:00</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-[8px] font-bold">
                    Perlu Konfirmasi
                  </span>
                </div>

                <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 text-[8px] font-black flex items-center justify-center">
                      #02
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">
                        Budi Santoso (Dimsum Frozen)
                      </div>
                      <div className="text-[8px] text-slate-400 flex items-center gap-1">
                        <CheckCircle2 className="w-2 h-2 text-emerald-600" />
                        <span>Lunas via Transfer</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[8px] font-bold">
                    Diproses
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: Deskripsi Teks */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-3.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-[11px] font-bold">
              <LayoutDashboard className="w-3 h-3" />
              <span>Sisi Pemilik Toko (Dashboard)</span>
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 leading-snug">
              Pesanan Tersusun, Jadwal Lebih Terkendali
            </h3>

            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
              Pantau pesanan yang masuk, konfirmasi status pelanggan, dan
              kontrol kapasitas harian tanpa harus berpindah-pindah catatan
              kertas atau tumpukan chat.
            </p>

            <ul className="space-y-1.5 pt-1.5 text-[11px] sm:text-xs text-slate-700 font-semibold text-left max-w-sm mx-auto lg:mx-0">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Dashboard ringkas yang mudah dipahami</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Pantau kapasitas produksi harian secara otomatis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Status pesanan terbarui dengan satu klik</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
