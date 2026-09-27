"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isArabic, setLanguage } = useLanguage();

  const links = [
    { href: "#home", fr: "Accueil", ar: "الرئيسية" },
    { href: "#about", fr: "À propos", ar: "من نحن" },
    { href: "#activities", fr: "Activités", ar: "أنشطتنا" },
    { href: "#gallery", fr: "Galerie", ar: "معرض الصور" },
    { href: "#contact", fr: "Contact", ar: "اتصل بنا" },
  ];

  const toggleLanguage = () => {
    setLanguage(isArabic ? "fr" : "ar");
    setOpen(false);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white shadow-lg shadow-orange-500/10 transition duration-300 group-hover:scale-105">
              <img
                src="/images/logo-swani.jpg"
                alt="Association Swani"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-orange-500/0 transition duration-300 group-hover:bg-orange-500/10" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-sm font-black tracking-wide text-white transition duration-300 group-hover:text-orange-400">
                Association Swani
              </h1>

              <p className="mt-0.5 text-[11px] text-gray-500">
                {isArabic
                  ? "مبادرات مواطنة"
                  : "Initiatives Citoyennes"}
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:bg-white/5 hover:text-orange-400"
              >
                {isArabic ? link.ar : link.fr}

                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-6" />
              </a>
            ))}

            {/* LANGUAGE */}
            <button
              onClick={toggleLanguage}
              className="ml-3 rounded-xl border border-orange-400/30 bg-orange-500/10 px-4 py-2.5 text-xs font-black tracking-wider text-orange-400 transition duration-300 hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20"
            >
              {isArabic ? "FR" : "AR"}
            </button>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex items-center gap-2 md:hidden">

            <button
              onClick={toggleLanguage}
              className="rounded-xl border border-orange-400/30 bg-orange-500/10 px-3.5 py-2.5 text-xs font-black text-orange-400 transition duration-300 hover:bg-orange-500 hover:text-white"
            >
              {isArabic ? "FR" : "AR"}
            </button>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition duration-300 hover:border-orange-400/30 hover:bg-orange-500/10"
            >
              <span
                className={`transition-transform duration-300 ${
                  open ? "rotate-90" : ""
                }`}
              >
                {open ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open
              ? "max-h-[500px] pb-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-[#081525]/95 p-2 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-gray-300 transition duration-300 hover:bg-orange-500/10 hover:text-orange-400"
                >
                  <span>
                    {isArabic ? link.ar : link.fr}
                  </span>

                  <span className="translate-x-0 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}