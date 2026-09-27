"use client";

import { useLanguage } from "./LanguageContext";

export default function Activities() {
  const { isArabic } = useLanguage();

  const activities = isArabic
    ? [
        {
          icon: "⚖️",
          number: "01",
          title: "الشباب والعدالة",
          text: "تعزيز وعي الشباب بحقوقهم وتشجيعهم على المشاركة في الحياة المدنية والمجتمعية.",
        },
        {
          icon: "🤝",
          number: "02",
          title: "المشاركة المواطنة",
          text: "تشجيع المواطنين على المشاركة في تدبير الشأن المحلي والديمقراطية التشاركية.",
        },
        {
          icon: "🎓",
          number: "03",
          title: "التكوين والمواكبة",
          text: "تنظيم دورات تكوينية وورشات تهدف إلى تطوير القدرات والمهارات.",
        },
        {
          icon: "🫂",
          number: "04",
          title: "المواكبة الاجتماعية",
          text: "تقديم الدعم والمواكبة الاجتماعية والقانونية للفئات التي تحتاج إلى المساعدة.",
        },
        {
          icon: "🚀",
          number: "05",
          title: "تمكين النساء والشباب",
          text: "دعم المبادرات التي تساهم في التمكين الاجتماعي والاقتصادي للنساء والشباب.",
        },
        {
          icon: "🌍",
          number: "06",
          title: "الاندماج الاجتماعي",
          text: "المساهمة في تعزيز الاندماج والتعايش وتقوية الروابط داخل المجتمع المحلي.",
        },
      ]
    : [
        {
          icon: "⚖️",
          number: "01",
          title: "Jeunesse & Justice",
          text: "Renforcer la connaissance des droits chez les jeunes et encourager leur participation à la vie civile et sociale.",
        },
        {
          icon: "🤝",
          number: "02",
          title: "Participation citoyenne",
          text: "Encourager les citoyens à participer à la gestion des affaires locales et à la démocratie participative.",
        },
        {
          icon: "🎓",
          number: "03",
          title: "Formation & accompagnement",
          text: "Organiser des formations et des ateliers visant à développer les capacités et les compétences.",
        },
        {
          icon: "🫂",
          number: "04",
          title: "Accompagnement social",
          text: "Apporter un accompagnement social et juridique aux personnes et aux groupes qui en ont besoin.",
        },
        {
          icon: "🚀",
          number: "05",
          title: "Autonomisation",
          text: "Soutenir les initiatives favorisant l'autonomisation sociale et économique des femmes et des jeunes.",
        },
        {
          icon: "🌍",
          number: "06",
          title: "Intégration sociale",
          text: "Contribuer à l'intégration, au vivre-ensemble et au renforcement des liens au sein de la communauté locale.",
        },
      ];

  return (
    <section
      id="activities"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#07111f] px-6 py-24"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            {isArabic ? "ماذا نفعل؟" : "Ce que nous faisons"}
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            {isArabic ? (
              <>
                أنشطتنا من أجل
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  مجتمع أفضل
                </span>
              </>
            ) : (
              <>
                Nos actions pour une
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  société meilleure
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {isArabic
              ? "نعمل من خلال مجموعة من المبادرات والأنشطة التي تضع الإنسان والمجتمع في صلب اهتمامنا."
              : "À travers différentes initiatives et actions, nous plaçons les personnes et la communauté au cœur de notre engagement."}
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-white/[0.045]"
            >
              {/* BIG NUMBER */}
              <span className="pointer-events-none absolute right-6 top-2 text-7xl font-black text-white/[0.025] transition duration-500 group-hover:text-orange-500/[0.06]">
                {activity.number}
              </span>

              {/* GLOW */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/0 blur-3xl transition duration-500 group-hover:bg-orange-500/10" />

              {/* ICON */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-3xl transition-all duration-500 group-hover:scale-110 group-hover:border-orange-400/40 group-hover:bg-orange-500/20">
                {activity.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative mt-7 text-xl font-black text-white transition duration-300 group-hover:text-orange-400">
                {activity.title}
              </h3>

              {/* TEXT */}
              <p className="relative mt-4 leading-7 text-gray-400 transition duration-300 group-hover:text-gray-300">
                {activity.text}
              </p>

              {/* LINE */}
              <div className="mt-7 h-[2px] w-10 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* COMMITMENT */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-orange-500/[0.03] to-transparent">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-center gap-8 p-8 text-center md:flex-row md:p-12 md:text-left">
            
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-orange-500 text-4xl shadow-xl shadow-orange-500/20">
              🤝
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-black text-white md:text-3xl">
                {isArabic
                  ? "نؤمن بقوة العمل الجماعي"
                  : "Nous croyons en la force du collectif"}
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-gray-400">
                {isArabic
                  ? "كل مبادرة يمكن أن تساهم في تغيير إيجابي. لذلك نعمل مع الشباب والنساء والمواطنين والشركاء من أجل بناء مجتمع أكثر مشاركة وتضامناً."
                  : "Chaque initiative peut contribuer à un changement positif. Nous travaillons avec les jeunes, les femmes, les citoyens et nos partenaires pour construire une société plus participative et solidaire."}
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              {isArabic ? "تواصل معنا" : "Nous contacter"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}