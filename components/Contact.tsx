"use client";

import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { isArabic } = useLanguage();

  const address = isArabic
    ? "رقم 15، شارع زلاقة، حي ليراك، الخميسات 15000، المغرب"
    : "N° 15, Rue Zalaka, Quartier Lirak, Khémisset 15000, Maroc";

  return (
    <section
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#07111f] px-6 py-24"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/5 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            {isArabic ? "تواصل معنا" : "Contact"}
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            {isArabic ? (
              <>
                نحن دائماً
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  في خدمتكم
                </span>
              </>
            ) : (
              <>
                Nous sommes toujours
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  à votre écoute
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {isArabic
              ? "للتواصل معنا أو للاستفسار حول أنشطتنا ومبادراتنا، يسعدنا استقبال رسائلكم."
              : "Pour nous contacter ou obtenir des informations sur nos activités et initiatives, nous sommes à votre écoute."}
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">

          {/* EMAIL */}
          <a
            href="mailto:contact@swani.ma"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-orange-500/5"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/0 blur-3xl transition duration-500 group-hover:bg-orange-500/10" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-2xl transition duration-500 group-hover:scale-110 group-hover:bg-orange-500/20">
                ✉️
              </div>

              <h3 className="mt-6 text-xl font-black text-white">
                {isArabic ? "البريد الإلكتروني" : "Email"}
              </h3>

              <p className="mt-3 break-all text-sm text-gray-400 transition group-hover:text-orange-400">
                contact@swani.ma
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-orange-400">
                <span>{isArabic ? "إرسال رسالة" : "Envoyer un message"}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </a>

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=N°+15+Rue+Zalaka+Quartier+Lirak+Khémisset+15000+Morocco"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-orange-500/5"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/0 blur-3xl transition duration-500 group-hover:bg-orange-500/10" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-2xl transition duration-500 group-hover:scale-110 group-hover:bg-orange-500/20">
                📍
              </div>

              <h3 className="mt-6 text-xl font-black text-white">
                {isArabic ? "مقر الجمعية" : "Notre adresse"}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400 transition group-hover:text-gray-300">
                {address}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-orange-400">
                <span>
                  {isArabic
                    ? "فتح Google Maps"
                    : "Ouvrir Google Maps"}
                </span>
                <span>↗</span>
              </div>
            </div>
          </a>

          {/* SOCIAL */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-orange-500/5">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/0 blur-3xl transition duration-500 group-hover:bg-orange-500/10" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-2xl transition duration-500 group-hover:scale-110 group-hover:bg-orange-500/20">
                🌐
              </div>

              <h3 className="mt-6 text-xl font-black text-white">
                {isArabic ? "تابعونا" : "Suivez-nous"}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="https://www.instagram.com/asic.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-gray-400 transition hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-400"
                >
                  Instagram
                </a>

                <a
                  href="https://web.facebook.com/asic_ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-gray-400 transition hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-400"
                >
                  Facebook
                </a>

                <a
                  href="https://www.tiktok.com/@asic.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-gray-400 transition hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-400"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COLLABORATION */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-orange-500/[0.03] to-transparent">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-center gap-8 p-8 text-center md:flex-row md:p-12 md:text-left">
            
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-orange-500 text-4xl shadow-xl shadow-orange-500/20">
              🤝
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-black text-white md:text-3xl">
                {isArabic
                  ? "هل ترغبون في التعاون معنا؟"
                  : "Vous souhaitez collaborer avec nous ?"}
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-gray-400">
                {isArabic
                  ? "نرحب بالشراكات والمبادرات التي تساهم في خدمة المجتمع وتعزيز المشاركة المواطنة."
                  : "Nous accueillons les partenariats et les initiatives qui contribuent au service de la communauté et au renforcement de la participation citoyenne."}
              </p>
            </div>

            <a
              href="mailto:contact@swani.ma"
              className="shrink-0 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              {isArabic ? "راسلونا" : "Écrivez-nous"}
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=N°+15+Rue+Zalaka+Quartier+Lirak+Khémisset+15000+Morocco"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-400"
          >
            <span>📍</span>

            <span>
              {isArabic
                ? "شاهد موقع الجمعية على الخريطة"
                : "Voir l'association sur la carte"}
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}