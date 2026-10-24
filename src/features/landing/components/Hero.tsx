"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle2, Zap, Gift, Store } from "lucide-react";

export default function HeroSectionFestive() {
  const handleScrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("cara-kerja");
    if (elem) {
      const navbarOffset = 90;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-rose-50/60 text-slate-900">
      {/* Background Festive Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-300/30 via-amber-200/40 to-rose-300/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-orange-400/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-400/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Decorative Floating Sparkles */}
      <div className="absolute bottom-20 right-[8%] text-orange-400 animate-bounce hidden lg:block">
        <Zap className="w-4 h-4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ================= KIRI: COPYWRITING & CTA ================= */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4">
            {/* Badge Meriah Kecil - Dinaikkan ke text-[10px] */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[10px] font-extrabold tracking-wide uppercase shadow-md shadow-orange-500/20">
              <Gift className="w-3.5 h-3.5" />
              <span className="mt-[1px]">Solusi Pesanan Bisnis Lokal</span>
            </div>

            {/* Judul Utama - Dinaikkan 1 tingkat ke lg:text-5xl */}
            <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.15]">
              Pesanan Lebih Rapi, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                Bisnis Lebih Mudah Dikelola!
              </span>
            </h1>

            {/* Deskripsi - Dinaikkan 1 tingkat ke text-xs sm:text-sm */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Buat katalog produk online, terima pesanan pre-order, dan kelola
              pesanan pelanggan dalam satu tempat. Tidak perlu lagi repot
              mencari pesanan di antara tumpukan chat WhatsApp.
            </p>

            {/* Tombol CTA Utama & Sekunder - Dinaikkan 1 tingkat */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5">
              <a
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 hover:opacity-95 active:scale-95 rounded-full shadow-md shadow-orange-500/30 hover:shadow-orange-500/40 transition-all duration-200"
              >
                <span>Buat Toko Gratis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#cara-kerja"
                onClick={handleScrollToHowItWorks}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-slate-700 hover:text-orange-600 bg-white hover:bg-orange-50/50 border border-orange-200/80 rounded-full shadow-2xs transition-all duration-200"
              >
                <Play className="w-3 h-3 text-orange-500 fill-orange-500" />
                <span>Lihat Cara Kerjanya</span>
              </a>
            </div>

            {/* Teks Pendukung di bawah Tombol - Dinaikkan 1 tingkat ke text-[11px] sm:text-xs */}
            <div className="pt-0.5 flex items-center justify-center lg:justify-start gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              <span>
                Mulai dengan katalog produk dan pengelolaan pesanan yang
                sederhana.
              </span>
            </div>
          </div>

          {/* ================= KANAN: MERIAH E-COMMERCE IMAGE DISPLAY ================= */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Container Bergaya E-commerce Showcase */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-tr from-orange-400 via-rose-400 to-amber-300 shadow-xl shadow-orange-500/20 group">
                {/* Frame Image Utama */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-white border border-white/60 flex items-center justify-center shadow-inner">
                  {/* Gambar Utama (Mockup Toko / E-commerce Banner) */}
                  <Image
                    src="/images/hero-mockup.png"
                    alt="OrderLokal E-Commerce Showcase"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  {/* Fallback Display jika file gambar belum ada */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 flex flex-col items-center justify-center p-5 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-md shadow-orange-500/30 mb-2.5">
                      <Store className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-800">
                      [ Image Preview Katalog / Toko ]
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 mt-1 max-w-xs">
                      Tempatkan foto produk kue, frozen food, atau screenshot
                      tampilan toko di sini
                    </span>
                  </div>
                </div>

                {/* Floating E-commerce Badge 1 (Kanan Atas) */}
                <div className="absolute -top-3 -right-3 bg-white border border-orange-100 px-3 py-1.5 rounded-2xl shadow-md flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <Store className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Status Order
                    </div>
                    <div className="text-[11px] font-black text-emerald-600">
                      Auto-Rekap WA
                    </div>
                  </div>
                </div>

                {/* Floating E-commerce Badge 2 (Kiri Bawah) */}
                <div className="absolute -bottom-3 -left-3 bg-slate-900 text-white px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2 hidden sm:flex">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black">
                    <Zap className="w-3.5 h-3.5 fill-slate-950" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-200">
                      Siap Pakai 1 Menit
                    </div>
                    <div className="text-[9px] text-slate-400">
                      Tanpa Setup Rumit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
