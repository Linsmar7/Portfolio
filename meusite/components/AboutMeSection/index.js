import React from "react";
import { useTranslation } from "next-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function AboutMe() {
  const { t } = useTranslation();
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      id="aboutme"
      ref={sectionRef}
      className={`scroll-mt-24 mb-28 px-4 transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="h-0.5 w-8 bg-purple-300 rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {t("aboutme.label")}
        </h2>
      </div>

      <div className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="pointer-events-none absolute -right-20 -bottom-20 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl space-y-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
          <p className="text-xl sm:text-2xl font-semibold text-purple-300 dark:text-purple-200">
            {t("aboutme.question")}
          </p>
          <p>{t("aboutme.firstp")}</p>
          <p>{t("aboutme.secondp")}</p>
        </div>
      </div>
    </section>
  );
}
