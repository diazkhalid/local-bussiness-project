"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Store, Sparkles, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Untuk Siapa", href: "#untuk-siapa" },
  { label: "FAQ", href: "#faq" },
];

export default function FloatingNavbarFestive() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
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

    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300"
    >
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border border-orange-200/80 shadow-xl shadow-orange-500/10 py-2.5 px-5"
            : "bg-white/70 backdrop-blur-md border border-orange-100/60 shadow-lg shadow-orange-500/5 py-3.5 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* ================= LOGO BRAND ================= */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 via-rose-500 to-amber-400 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
              <Store className="w-4 h-4" />
            </div>
            <span className="text-lg font-black tracking-tight text-slate-900">
              Order
              <span className="bg-gradient-to-r from-orange-600 to-rose-500 bg-clip-text text-transparent">
                Lokal
              </span>
            </span>
          </a>

          {/* ================= MENU DESKTOP ================= */}
          <nav className="hidden md:flex items-center gap-1 p-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="px-4 py-1.5 text-xs font-bold text-slate-700 hover:text-orange-600 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ================= ACTION BUTTONS ================= */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/login"
              className="px-4 py-1.5 text-xs font-bold text-slate-700 hover:text-orange-600 transition-colors duration-200"
            >
              Masuk
            </a>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 hover:opacity-95 active:scale-95 rounded-full shadow-md shadow-orange-500/25 transition-all duration-200"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Buat Toko Gratis</span>
            </a>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/register"
              className="px-3.5 py-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-rose-500 rounded-full shadow-xs"
            >
              Buat Toko
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 hover:bg-orange-50 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN CARD DENGAN FRAMER MOTION ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="max-w-7xl mx-auto mt-2 p-4 rounded-3xl bg-white/95 border border-orange-100 backdrop-blur-2xl shadow-2xl space-y-3 md:hidden"
          >
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="px-4 py-2.5 text-sm font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50/60 rounded-2xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-orange-100 flex flex-col gap-2">
              <a
                href="/login"
                className="w-full text-center py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors"
              >
                Masuk
              </a>
              <a
                href="/register"
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-extrabold text-white bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 rounded-2xl shadow-md shadow-orange-500/20 active:scale-98 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Buat Toko Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
