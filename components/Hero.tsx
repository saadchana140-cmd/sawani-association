"use client";

import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { isArabic } = useLanguage();

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#07111f] px-6 pb-16 pt-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500/5 blur-[130px]" />
      </div>

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* LEFT */}
        <div className="animate-fade-up">

          {/* BADGE */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2.5 text-sm text-orange-300 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
            </span>

            <span>
              {isArabic
                ? "جمعية السواني مبادرات مواطنة"
                : "Association Swani Initiatives Citoyennes"}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[76px]">
            {isArabic ? (
              <>
                نعمل اليوم
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  لبناء الغد.
                </span>
              </>
            ) : (
              <>
                Agir aujourd'hui
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  pour construire demain.
                </span>
              </>
            )}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl">
            {isArabic
              ? "جمعية مدنية بمدينة الخميسات، ملتزمة بالمواطنة، الشباب، التضامن والتنمية المحلية."
              : "Une association civile à Khémisset, engagée pour la citoyenneté, la jeunesse, la solidarité et le développement local."}
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#activities"
              className="group inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-xl shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              <span>
                {isArabic
                  ? "اكتشف أنشطتنا"
                  : "Découvrir nos activités"}
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/10"
            >
              {isArabic ? "تواصل معنا" : "Nous contacter"}
            </a>
          </div>

          {/* STATS */}
          <div className="mt-12 flex flex-wrap items-center gap-7 border-t border-white/10 pt-7">

            <div>
              <p className="text-2xl font-black text-white">
                2006
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {isArabic ? "سنة التأسيس" : "Année de création"}
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-black text-white">
                Khémisset
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {isArabic ? "المقر" : "Localisation"}
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-black text-white">
                🤝
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {isArabic ? "تضامن" : "Solidarité"}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto flex h-[430px] w-full max-w-[520px] items-center justify-center sm:h-[500px]">

          {/* GLOW */}
          <div className="absolute h-64 w-64 rounded-full bg-orange-500/20 blur-[90px] sm:h-80 sm:w-80" />

          {/* RINGS */}
          <div className="absolute h-64 w-64 animate-pulse rounded-full border border-orange-400/20 sm:h-80 sm:w-80" />

          <div className="absolute h-80 w-80 rounded-full border border-blue-400/10 sm:h-96 sm:w-96" />

          <div className="absolute h-[360px] w-[360px] rounded-full border border-white/5 sm:h-[430px] sm:w-[430px]" />

          {/* DECORATIVE DOTS */}
          <div className="absolute left-10 top-16 h-3 w-3 animate-pulse rounded-full bg-orange-400 shadow-lg shadow-orange-400/50" />

          <div className="absolute right-12 top-20 h-2.5 w-2.5 animate-pulse rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />

          <div className="absolute bottom-20 left-16 h-2 w-2 rounded-full bg-orange-300" />

          {/* LOGO */}
          <div className="group relative z-10 flex h-56 w-56 items-center justify-center rounded-full bg-white p-2 shadow-2xl shadow-orange-500/30 transition duration-700 hover:scale-105 hover:rotate-2 sm:h-72 sm:w-72">

            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl" />

            <img
              src="/images/logo-swani.jpg"
              alt="Association Swani Initiatives Citoyennes"
              className="relative h-full w-full rounded-full object-cover"
            />
          </div>

          {/* SOLIDARITY CARD */}
          <div className="absolute left-0 top-16 rounded-2xl border border-white/10 bg-[#0b1727]/80 px-4 py-3 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/30 sm:left-2 sm:px-5 sm:py-4 animate-float">
            <div className="text-2xl">🤝</div>

            <p className="mt-1 text-sm font-bold text-white">
              {isArabic ? "التضامن" : "Solidarité"}
            </p>
          </div>

          {/* JUSTICE CARD */}
          <div className="absolute right-0 top-3 rounded-2xl border border-white/10 bg-[#0b1727]/80 px-4 py-3 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/30 sm:right-2 sm:px-5 sm:py-4 animate-float">
            <div className="text-2xl">⚖️</div>

            <p className="mt-1 text-sm font-bold text-white">
              {isArabic ? "العدالة" : "Justice"}
            </p>
          </div>

          {/* YOUTH CARD */}
          <div className="absolute bottom-5 right-2 rounded-2xl border border-white/10 bg-[#0b1727]/80 px-4 py-3 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/30 sm:bottom-8 sm:right-5 sm:px-5 sm:py-4 animate-float">
            <div className="text-2xl">🚀</div>

            <p className="mt-1 text-sm font-bold text-white">
              {isArabic ? "الشباب" : "Jeunesse"}
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition duration-300 hover:text-orange-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {isArabic ? "اكتشف المزيد" : "Découvrir"}
        </span>

        <span className="animate-bounce text-lg">
          ↓
        </span>
      </a>
    </section>
  );
}