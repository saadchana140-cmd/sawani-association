"use client";

import { useLanguage } from "./LanguageContext";

export default function About() {
  const { isArabic } = useLanguage();

  const objectives = isArabic
    ? [
        "تشجيع مشاركة الشباب والنساء في الحياة العامة",
        "التربية على حقوق الإنسان والمواطنة",
        "محو الأمية والدعم المدرسي والتربوي",
        "المواكبة الاجتماعية والقانونية",
        "المساهمة في التنمية المحلية",
        "دعم التعليم والتكوين",
        "التمكين الاجتماعي والاقتصادي للنساء والشباب",
        "تحسين ظروف عيش الأسر",
        "إدماج المهاجرين الأجانب في المجتمع المحلي ثقافياً واجتماعياً واقتصادياً",
        "خلق فضاءات للتنشيط والترفيه والثقافة والتخييم",
        "الحفاظ على تماسك الأسرة وتقوية الروابط الاجتماعية",
        "تثمين التنوع الثقافي المغربي الأمازيغي والعربي",
      ]
    : [
        "Encourager la participation des jeunes et des femmes à la vie publique",
        "Éducation aux droits humains et à la citoyenneté",
        "Alphabétisation et accompagnement scolaire et éducatif",
        "Accompagnement social et juridique",
        "Contribution au développement local",
        "Soutien à l'éducation et à la formation",
        "Autonomisation sociale et économique des femmes et des jeunes",
        "Amélioration des conditions de vie des familles",
        "Intégration des migrants étrangers dans la société locale sur les plans culturel, social et économique",
        "Création d'espaces d'animation, de loisirs, de culture et de camping",
        "Préservation de la cohésion familiale et renforcement des liens sociaux",
        "Valorisation de la diversité culturelle marocaine amazighe et arabe",
      ];

  return (
    <section
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#081525] px-6 py-24"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-500/5 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            {isArabic ? "من نحن" : "À propos de nous"}
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            {isArabic ? (
              <>
                جمعية من أجل
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  مواطنة فاعلة
                </span>
              </>
            ) : (
              <>
                Une association pour une
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  citoyenneté active
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {isArabic
              ? "جمعية السواني مبادرات مواطنة هي جمعية مدنية تأسست بمدينة الخميسات سنة 2006، وتعمل على تعزيز المشاركة المواطنة والمساهمة في التنمية المحلية."
              : "L'Association Swani Initiatives Citoyennes est une association civile créée à Khémisset en 2006. Elle œuvre pour renforcer la participation citoyenne et contribuer au développement local."}
          </p>
        </div>

        {/* PRESENTATION */}
        <div className="mt-20 grid items-stretch gap-6 lg:grid-cols-2">

          {/* ASSOCIATION */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:border-orange-400/20 hover:bg-white/[0.045] md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
                  🏛️
                </div>

                <div>
                  <p className="text-sm font-semibold text-orange-400">
                    {isArabic ? "جمعية السواني" : "Association Swani"}
                  </p>

                  <h3 className="text-xl font-black text-white">
                    {isArabic
                      ? "مبادرات مواطنة"
                      : "Initiatives Citoyennes"}
                  </h3>
                </div>
              </div>

              <p className="mt-7 leading-8 text-gray-400">
                {isArabic
                  ? "منذ تأسيسها في 20 ماي 2006 بمدينة الخميسات، تسعى الجمعية إلى المساهمة كقوة اقتراحية في تدبير الشأن المحلي، وتعزيز المشاركة المواطنة والديمقراطية التشاركية."
                  : "Depuis sa création le 20 mai 2006 à Khémisset, l'association cherche à contribuer comme force de proposition à la gestion des affaires locales et à renforcer la participation citoyenne et la démocratie participative."}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-5 transition duration-300 hover:border-orange-400/20">
                  <p className="text-3xl font-black text-orange-400">
                    2006
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {isArabic ? "سنة التأسيس" : "Année de création"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 p-5 transition duration-300 hover:border-orange-400/20">
                  <p className="text-xl font-black text-orange-400">
                    Khémisset
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {isArabic ? "المقر" : "Localisation"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MISSION */}
          <div className="group relative overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-orange-500/[0.03] to-transparent p-8 transition duration-500 hover:border-orange-400/30 md:p-10">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl shadow-lg shadow-orange-500/20">
                🎯
              </div>

              <h3 className="mt-7 text-2xl font-black text-white">
                {isArabic ? "رسالتنا" : "Notre mission"}
              </h3>

              <p className="mt-5 text-lg leading-9 text-gray-300">
                {isArabic
                  ? "المساهمة كقوة اقتراحية في تدبير الشأن المحلي، وتعزيز المشاركة المواطنة والديمقراطية التشاركية، ودعم المبادرات التي تخدم المجتمع."
                  : "Contribuer comme force de proposition à la gestion des affaires locales, renforcer la participation citoyenne et la démocratie participative, et soutenir les initiatives au service de la communauté."}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  isArabic ? "المواطنة" : "Citoyenneté",
                  isArabic ? "الشباب" : "Jeunesse",
                  isArabic ? "التضامن" : "Solidarité",
                  isArabic ? "التنمية" : "Développement",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-orange-400/30 hover:text-orange-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              {isArabic ? "فريق الجمعية" : "Notre équipe"}
            </span>

            <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
              {isArabic
                ? "أشخاص وراء المبادرة"
                : "Les personnes derrière l'initiative"}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* PRESIDENT */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-orange-400/30">
              <div className="relative h-[420px] overflow-hidden bg-[#0b1727]">
                <img
                  src="/images/noureddine-chana1.jpg"
                  alt="Noureddine Chana"
                  className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#081525] via-[#081525]/30 to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-orange-300 backdrop-blur-md">
                  {isArabic
                    ? "رئيس الجمعية"
                    : "Président de l'association"}
                </div>
              </div>

              <div className="p-7">
                <h4 className="text-2xl font-black text-white">
                  Noureddine Chana
                </h4>

                <p className="mt-3 leading-7 text-gray-400">
                  {isArabic
                    ? "رئيس جمعية السواني مبادرات مواطنة."
                    : "Président de l'Association Swani Initiatives Citoyennes."}
                </p>
              </div>
            </div>

            {/* FACILITATOR */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-orange-400/30">
              <div className="relative h-[420px] overflow-hidden bg-[#0b1727]">
                <img
                  src="/images/adil-benkacem1.jpg"
                  alt="Dr. Adil Benkacem"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#081525] via-[#081525]/30 to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-orange-300 backdrop-blur-md">
                  {isArabic ? "الميسّر" : "Facilitateur"}
                </div>
              </div>

              <div className="p-7">
                <h4 className="text-2xl font-black text-white">
                  Dr. Adil Benkacem
                </h4>

                <p className="mt-3 leading-7 text-gray-400">
                  {isArabic
                    ? "مساهم في التأطير والتيسير ومواكبة المبادرات."
                    : "Contributeur à la facilitation, à l'accompagnement et à l'animation des initiatives."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OBJECTIVES */}
        <div className="mt-24">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              {isArabic ? "أهدافنا" : "Nos objectifs"}
            </span>

            <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
              {isArabic
                ? "مجالات عملنا"
                : "Nos principaux axes d'action"}
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              {isArabic
                ? "مجموعة من المحاور التي توجه عمل الجمعية ومبادراتها."
                : "Les principaux axes qui orientent le travail et les initiatives de l'association."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-orange-500/[0.04]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xs font-black text-orange-400 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-gray-400 transition duration-300 group-hover:text-gray-300">
                    {objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL STATEMENT */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/5 p-8 text-center md:p-12">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-2xl font-black text-white md:text-3xl">
              {isArabic
                ? "معاً من أجل مواطنة فاعلة وتنمية محلية مستدامة."
                : "Ensemble pour une citoyenneté active et un développement local durable."}
            </p>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              {isArabic
                ? "نؤمن بأن المشاركة والعمل الجماعي يمكن أن يصنعا أثراً حقيقياً داخل المجتمع."
                : "Nous croyons que la participation et l'action collective peuvent créer un impact réel au sein de la communauté."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}