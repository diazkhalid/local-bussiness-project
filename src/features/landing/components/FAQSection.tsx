"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apa itu OrderLokal?",
    answer:
      "OrderLokal adalah platform untuk membuat katalog produk online dan mengelola pesanan bisnis lokal, khususnya bagi usaha yang menerima sistem pre-order (PO).",
  },
  {
    id: "faq-2",
    question: "Apakah saya perlu memiliki website sendiri?",
    answer:
      "Tidak perlu. OrderLokal langsung menyediakan halaman toko online siap pakai yang memiliki tautan unik untuk dibagikan ke pelanggan.",
  },
  {
    id: "faq-3",
    question: "Apakah pelanggan harus membuat akun untuk memesan?",
    answer:
      "Tidak. Pelanggan cukup membuka tautan toko kamu, memilih produk, serta mengisi informasi pemesanan yang diperlukan tanpa harus membuat akun.",
  },
  {
    id: "faq-4",
    question: "Apakah OrderLokal mendukung pemesanan melalui WhatsApp?",
    answer:
      "Ya. OrderLokal dirancang untuk melengkapi kebiasaan bisnis menggunakan WhatsApp. Tautan katalog dapat dibagikan via WhatsApp, dan kamu dapat menghubungi pelanggan secara langsung melalui tombol yang tersedia.",
  },
  {
    id: "faq-5",
    question: "Bisakah saya membatasi jumlah pesanan setiap hari?",
    answer:
      "Bisa. Kamu dapat mengaktifkan batasan kapasitas produksi harian agar kuota pesanan otomatis terkontrol dan kamu tidak menerima pesanan melebihi kemampuan dapur/produksi.",
  },
  {
    id: "faq-6",
    question: "Apakah OrderLokal gratis?",
    answer:
      "Saat ini OrderLokal masih dalam tahap pengembangan & uji coba terbatas (Beta). Kamu dapat mendaftar sekarang secara gratis untuk mencoba dan mengikuti program uji coba awal.",
  },
  {
    id: "faq-7",
    question: "Apakah OrderLokal menerima pembayaran online?",
    answer:
      "Untuk versi saat ini, pembayaran diatur langsung antara pemilik bisnis dan pelanggan sesuai metode yang disepakati (seperti transfer bank atau E-Wallet).",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-16 bg-white text-slate-900 overflow-hidden border-b border-orange-100/60"
    >
      {/* Background Decorative Light Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-orange-100/40 via-amber-100/40 to-rose-100/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-[10px] font-extrabold tracking-wide uppercase shadow-2xs">
            <HelpCircle className="w-3 h-3 text-orange-600" />
            <span>Pertanyaan Umum</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-snug">
            Sering Ditanyakan Mengenai{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              OrderLokal
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Temukan jawaban untuk membantu kamu memahami bagaimana OrderLokal
            dapat mempermudah rekap pesanan usaha kuliner kamu.
          </p>
        </div>

        {/* ================= ACCORDION FAQ ================= */}
        <div className="space-y-2.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-r from-orange-50/60 via-amber-50/40 to-white border-orange-200 shadow-md shadow-orange-500/5"
                    : "bg-slate-50/70 hover:bg-slate-100/80 border-slate-200/80"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-orange-500 text-white rotate-180 shadow-xs"
                        : "bg-white border border-slate-200 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
                        <p className="border-t border-orange-100/80 pt-2.5">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ================= CALLOUT BANNER (ADA PERTANYAAN LAIN) ================= */}
        <div className="mt-10 rounded-2xl bg-amber-50 border border-amber-200/80 p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <MessageCircle className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900">
                Punya pertanyaan lain yang belum terjawab?
              </h4>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                Tim kami siap membantu menjelaskan cara kerja platform
                OrderLokal.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 text-[11px] font-extrabold text-orange-700 bg-white hover:bg-orange-100/50 border border-orange-300 rounded-full shadow-2xs transition-colors flex-shrink-0"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
