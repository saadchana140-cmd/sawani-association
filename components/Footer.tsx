"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { isArabic } = useLanguage();

  const year = new Date().getFullYear();

  const links = [
    { href: "#home", fr: "Accueil", ar: "الرئيسية" },
    { href: "#about", fr: "À propos", ar: "من نحن" },
    { href: "#activities", fr: "Activités", ar: "أنشطتنا" },
    { href: "#gallery", fr: "Galerie", ar: "معرض الصور" },
    { href: "#contact", fr: "Contact", ar: "اتصل بنا" },
  ];

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-white/10 bg-[#050d18] px-6 pt-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="group inline-flex items-center gap-4"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-orange-500/10 transition duration-300 group-hover:scale-105">
                <img
                  src="/images/logo-swani.jpg"
                  alt="Association Swani"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-black text-white transition group-hover:text-orange-400">
                  Association Swani
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {isArabic
                    ? "مبادرات مواطنة"
                    : "Initiatives Citoyennes"}
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-xl leading-8 text-gray-400">
              {isArabic
                ? "جمعية مدنية بمدينة الخميسات تعمل من أجل تعزيز المشاركة المواطنة، دعم الشباب والنساء، والمساهمة في التنمية المحلية."
                : "Une association civile à Khémisset engagée pour la participation citoyenne, l'accompagnement des jeunes et des femmes et le développement local."}
            </p>

            {/* SOCIAL */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/asic.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-400"
              >
                Instagram
              </a>

              <a
                href="https://web.facebook.com/asic_ma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-400"
              >
                Facebook
              </a>

              <a
                href="https://www.tiktok.com/@asic.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-400"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              {isArabic ? "التنقل" : "Navigation"}
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-500 transition duration-300 hover:text-orange-400"
                >
                  <span className="text-orange-500 opacity-0 transition duration-300 group-hover:opacity-100">
                    →
                  </span>

                  <span>
                    {isArabic ? link.ar : link.fr}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              {isArabic ? "معلومات الاتصال" : "Contact"}
            </h3>

            <div className="mt-6 space-y-5">

              {/* ADDRESS */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=N°+15+Rue+Zalaka+Quartier+Lirak+Khémisset+15000+Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3"
              >
                <span className="text-lg">📍</span>

                <span className="text-sm leading-6 text-gray-500 transition group-hover:text-orange-400">
                  {isArabic
                    ? "رقم 15، شارع زلاقة، حي ليراك، الخميسات 15000، المغرب"
                    : "N° 15, Rue Zalaka, Quartier Lirak, Khémisset 15000, Maroc"}
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:contact@swani.ma"
                className="group flex gap-3"
              >
                <span className="text-lg">✉️</span>

                <span className="text-sm text-gray-500 transition group-hover:text-orange-400">
                  contact@swani.ma
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 text-center md:flex-row md:text-left">

          <p className="text-sm text-gray-600">
            © {year}{" "}
            <span className="font-semibold text-gray-500">
              Association Swani
            </span>
            .{" "}
            {isArabic
              ? "جميع الحقوق محفوظة."
              : "Tous droits réservés."}
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-400 transition duration-300 hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-400"
          >
            <span>
              {isArabic ? "العودة إلى الأعلى" : "Retour en haut"}
            </span>

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}