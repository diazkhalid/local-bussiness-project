"use client";

import React from "react";
import {
  Share2,
  Inbox,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface PillarItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  gradient: string;
}

const pillars: PillarItem[] = [
  {
    icon: <Share2 className="w-5 h-5 text-orange-600" />,
    title: "Mudah Dibagikan",
    description:
      "Bagikan katalog toko Anda dengan cepat melalui satu tautan langsung ke WhatsApp, Bio Instagram, atau status media sosial.",
    badge: "1-Click Share",
    gradient: "from-orange-500/10 to-amber-500/10 border-orange-200/80",
  },
  {
    icon: <Inbox className="w-5 h-5 text-rose-600" />,
    title: "Fokus pada Pesanan",
    description:
      "Pantau semua pesanan masuk secara terstruktur di satu dashboard rapi tanpa perlu scroll & cari chat pelanggan satu per satu.",
    badge: "Bebas Tumpukan WA",
    gradient: "from-rose-500/10 to-pink-500/10 border-rose-200/80",
  },
  {
    icon: <CalendarCheck className="w-5 h-5 text-emerald-600" />,
    title: "Dirancang untuk Pre-Order",
    description:
      "Atur tanggal pengiriman, slot ketersediaan, dan kuota harian khusus untuk bisnis kuliner pre-order (PO) dengan presisi.",
    badge: "Kelola Kuota PO",
    gradient: "from-emerald-500/10 to-teal-500/10 border-emerald-200/80",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-16 bg-white overflow-hidden text-slate-900 border-y border-orange-100/60">
      {/* Decorative Light Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-orange-200/20 via-amber-200/30 to-rose-200/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          {/* Badge Dikecilkan ~10% ( text-[10px] ) */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-[10px] font-extrabold tracking-wide uppercase shadow-2xs">
            <ShieldCheck className="w-3 h-3 text-orange-600" />
            <span>Fokus pada Kebutuhan Bisnis Anda</span>
          </div>

          {/* Judul Utama Dikecilkan ~10% */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-snug">
            Dirancang Khusus untuk Cara Kerja{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Bisnis Lokal & Kuliner
            </span>
          </h2>

          {/* Deskripsi Dikecilkan ~10% ( text-xs sm:text-sm ) */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            OrderLokal dibangun untuk menyelesaikan masalah rekap pesanan harian
            secara praktis, tanpa alur rumit yang membingungkan.
          </p>
        </div>

        {/* ================= 3 PILAR KARAKTERISTIK PRODUK ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-5 bg-gradient-to-b ${item.gradient} border backdrop-blur-xs hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group flex flex-col justify-between`}
            >
              <div className="space-y-3.5">
                {/* Header Kartu: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 border border-slate-200/60 text-[9px] font-extrabold text-slate-700 shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description Dikecilkan ~10% */}
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span className="flex items-center gap-1 text-[10px] text-slate-500 group-hover:text-orange-600 transition-colors">
                  <Sparkles className="w-3 h-3 text-orange-500" />
                  Siap digunakan
                </span>
                <span className="text-[10px] font-black text-slate-400 group-hover:text-slate-900 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FOOTER BANNER / CATATAN SIMPEL ================= */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 p-0.5 shadow-md shadow-orange-500/10">
          <div className="rounded-[15px] bg-white px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs font-bold text-slate-800">
                Siap mempermudah rekap pesanan usaha kue atau frozen food Anda
                hari ini?
              </p>
            </div>

            <a
              href="/register"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-white bg-slate-900 hover:bg-orange-600 rounded-full transition-colors flex-shrink-0"
            >
              <span>Buat Toko Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
