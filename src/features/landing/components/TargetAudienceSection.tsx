"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface AudienceCategory {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  examples: string[];
  mainNeed: string;
  imageUrl: string;
  imageAlt: string;
}

const categories: AudienceCategory[] = [
  {
    id: "bakery",
    title: "Usaha Kue dan Bakery",
    badge: "Kue & Pastry",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    examples: ["Kue ulang tahun", "Brownies", "Roti", "Dessert box"],
    mainNeed: "Mengatur jumlah pesanan & tanggal pengambilan",
    imageUrl:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Usaha Kue dan Bakery",
  },
  {
    id: "catering",
    title: "Katering dan Nasi Kotak",
    badge: "Katering & Acara",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    examples: [
      "Katering rumahan",
      "Nasi kotak",
      "Konsumsi acara",
      "Paket makanan",
    ],
    mainNeed: "Merekap jumlah porsi & jadwal pemenuhan pesanan",
    imageUrl:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Katering dan Nasi Kotak",
  },
  {
    id: "frozen-food",
    title: "Frozen Food",
    badge: "Makanan Beku",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    examples: ["Dimsum", "Risoles", "Nugget rumahan", "Makanan beku"],
    mainNeed: "Menampilkan produk, varian, & jumlah pesanan",
    imageUrl:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Frozen Food",
  },
  {
    id: "hampers",
    title: "Hampers dan Produk Custom",
    badge: "Parcel & Gift",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    examples: [
      "Hampers Lebaran",
      "Hampers pernikahan",
      "Parcel",
      "Produk khusus",
    ],
    mainNeed: "Mengatur pesanan yang butuh waktu persiapan",
    imageUrl:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Hampers dan Produk Custom",
  },
];

export default function TargetAudienceSection() {
  return (
    <section
      id="untuk-siapa"
      className="relative py-16 bg-gradient-to-b from-white via-orange-50/20 to-white text-slate-900 overflow-hidden border-b border-orange-100/60"
    >
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-orange-100/30 via-amber-100/40 to-rose-100/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-[10px] font-extrabold tracking-wide uppercase shadow-2xs">
            <Sparkles className="w-3 h-3 text-orange-600" />
            <span>Target Pengguna</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-snug">
            Dibuat untuk Bisnis yang{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Mengandalkan Pesanan
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            OrderLokal tidak terbatas pada satu jenis usaha. Temukan bagaimana
            OrderLokal menyesuaikan kebutuhan operasional bisnis kamu.
          </p>
        </div>

        {/* ================= 4 CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Foto Produk (Header Card) */}
                <div className="relative w-full h-36 overflow-hidden bg-slate-100">
                  <Image
                    src={category.imageUrl}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Badge Kategori di Atas Foto */}
                  <span
                    className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full border text-[9px] font-extrabold shadow-2xs ${category.badgeColor}`}
                  >
                    {category.badge}
                  </span>
                </div>

                {/* Konten Teks */}
                <div className="p-4 space-y-2.5">
                  <h3 className="text-sm font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                    {category.title}
                  </h3>

                  {/* Contoh Produk */}
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Contoh Produk:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {category.examples.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[9px] font-bold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Kebutuhan Utama (Footer Card) */}
              <div className="p-4 pt-0">
                <div className="p-2.5 rounded-2xl bg-orange-50/80 border border-orange-100/80 space-y-0.5 text-left">
                  <span className="text-[9px] font-extrabold text-orange-900 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-orange-600 flex-shrink-0" />
                    Kebutuhan Utama:
                  </span>
                  <p className="text-[10px] font-bold text-slate-700 leading-snug">
                    {category.mainNeed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="mt-10 text-center">
          <p className="text-xs font-semibold text-slate-500">
            Punya bisnis kuliner atau produk pre-order jenis lain?{" "}
            <a
              href="/register"
              className="text-orange-600 hover:text-orange-700 font-extrabold underline underline-offset-4 inline-flex items-center gap-1"
            >
              <span>Buat katalog tokomu sekarang</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
