"use client";

import React from "react";
import { Store, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export default function FooterSection() {
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);

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
    }
  };

  const productLinks: FooterLink[] = [
    { label: "Fitur Utama", href: "#fitur" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Untuk Siapa", href: "#untuk-siapa" },
    { label: "FAQ", href: "#faq" },
  ];

  const supportLinks: FooterLink[] = [
    {
      label: "Kontak WhatsApp",
      href: "https://wa.me/628123456789",
      isExternal: true,
    },
    {
      label: "Email Dukungan",
      href: "mailto:halo@orderlokal.id",
      isExternal: true,
    },
  ];

  const legalLinks: FooterLink[] = [
    { label: "Syarat & Ketentuan", href: "/terms" },
    { label: "Kebijakan Privasi", href: "/privacy" },
  ];

  return (
    <footer className="relative bg-slate-50 text-slate-700 pt-14 pb-6 border-t border-orange-100/80 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= 4 KOLOM UTAMA ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 border-b border-slate-200/80">
          {/* KOLOM 1 — BRAND (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            {/* Logo Brand */}
            <a href="#" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 via-rose-500 to-amber-400 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
                <Store className="w-4 h-4" />
              </div>
              <span className="text-base font-black tracking-tight text-slate-900">
                Order
                <span className="bg-gradient-to-r from-orange-600 to-rose-500 bg-clip-text text-transparent">
                  Lokal
                </span>
              </span>
            </a>

            {/* Deskripsi Singkat */}
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed max-w-sm">
              Platform pembuatan katalog online & pengelolaan pesanan pre-order
              sederhana untuk UMKM kuliner, bakery, frozen food, dan hampers.
            </p>

            {/* Tautan Media Sosial */}
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 transition-all shadow-2xs"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-all shadow-2xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:halo@orderlokal.id"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 transition-all shadow-2xs"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* KOLOM 2 — PRODUK (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">
              Produk
            </h3>
            <ul className="space-y-1.5 text-[11px] sm:text-xs font-semibold">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3 — BANTUAN (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">
              Bantuan & Kontak
            </h3>
            <ul className="space-y-1.5 text-[11px] sm:text-xs font-semibold">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : "_self"}
                    rel={link.isExternal ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.isExternal && (
                      <ArrowUpRight className="w-2.5 h-2.5 text-slate-400" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 4 — LEGAL (2 Cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-1.5 text-[11px] sm:text-xs font-semibold">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= BARIS PALING BAWAH (HAK CIPTA DINAMIS) ================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-medium text-slate-500">
          <p>© 2026 OrderLokal. Semua hak dilindungi.</p>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Sistem Katalog & Pre-order Aktif</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
