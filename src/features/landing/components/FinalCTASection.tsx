"use client";

import React from "react";
import {
  ArrowRight,
  Store,
  Sparkles,
  Package,
  ShoppingBag,
} from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden">
      {/* Background Decorative Pattern & Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-amber-300/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Pattern Effect Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Floating Icons (Ilustrasi Paket & Toko) */}
      <div className="absolute top-10 left-[8%] p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 hidden lg:block animate-bounce duration-1000">
        <Store className="w-5 h-5" />
      </div>
      <div className="absolute bottom-10 right-[8%] p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 hidden lg:block animate-pulse">
        <Package className="w-5 h-5" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        {/* Label Kecil Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-emerald-100 text-[10px] font-extrabold tracking-wide uppercase backdrop-blur-md shadow-xs">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>Langkah Terakhir</span>
        </div>

        {/* Judul Utama Kontras Tinggi - Max diturunkan ke 3xl */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-snug">
          Siap Mengelola Pesanan <br className="hidden sm:inline" />
          dengan Lebih Rapi?
        </h2>

        {/* Deskripsi Singkat - Dikecilkan ~10% */}
        <p className="text-xs sm:text-sm text-emerald-100 font-medium max-w-xl mx-auto leading-relaxed">
          Mulai buat katalog toko dan kelola pesanan pre-order dalam satu
          tempat.
        </p>

        {/* SATU CTA Utama - Padding & Font Dikecilkan ~10% */}
        <div className="pt-1">
          <a
            href="/register"
            className="inline-flex items-center justify-center gap-1.5 px-7 py-3 text-xs sm:text-sm font-extrabold text-slate-900 bg-white hover:bg-amber-300 active:scale-95 rounded-full shadow-xl shadow-slate-950/20 hover:shadow-amber-300/30 transition-all duration-200 group"
          >
            <span>Buat Toko Sekarang</span>
            <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Teks Pendukung - Dikecilkan ~10% */}
        <p className="text-[11px] sm:text-xs font-semibold text-emerald-100/90 pt-0.5">
          Siapkan katalog produkmu dan bagikan tautannya kepada pelanggan.
        </p>

        {/* Visual Mini Preview Toko Simpel */}
        <div className="pt-4 max-w-xs mx-auto">
          <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between text-left text-xs font-semibold text-emerald-100 shadow-inner">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black">
                <ShoppingBag className="w-3 h-3" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">
                  orderlokal.id/toko-kamu
                </div>
                <div className="text-[9px] text-emerald-200">
                  Siap dibagikan ke pelanggan
                </div>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded-md bg-emerald-400/20 text-amber-300 border border-amber-300/30 text-[9px] font-bold">
              Aktif
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
