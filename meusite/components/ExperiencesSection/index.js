import React from "react";
import { useTranslation } from "next-i18next";
import Experience from "./experience";
import { useScrollReveal } from "../../hooks/useScrollReveal";

import ChuvaLogo from "../../src/assets/chuvainclogo.png";
import UFBALogo from "../../src/assets/ufbalogo.png";
import InfoJrLogo from "../../src/assets/infojrufba.svg";

export default function Experiences() {
  const { t } = useTranslation();
  const [sectionRef, isVisible] = useScrollReveal();

  const experiences = [
    {
      name: t("experience.chuva.0.label"),
      date: t("experience.chuva.0.time"),
      description: "Chuva Inc.",
      icon: ChuvaLogo.src,
      link: "https://chuva.net.br/",
    },
    {
      name: t("experience.chuva.1.label"),
      date: t("experience.chuva.1.time"),
      description: "Chuva Inc.",
      icon: ChuvaLogo.src,
      link: "https://chuva.net.br/",
    },
    {
      name: t("experience.ufba.course"),
      date: t("experience.ufba.time"),
      description: "Universidade Federal da Bahia",
      icon: UFBALogo.src,
      link: "https://www.ufba.br/cursos/ciencia-da-computacao",
    },
    {
      name: t("experience.infojr.0.label"),
      date: t("experience.infojr.0.time"),
      description: "InfoJr UFBA",
      icon: InfoJrLogo.src,
      link: "https://infojr.com.br",
    },
    {
      name: t("experience.infojr.1.label"),
      date: t("experience.infojr.1.time"),
      description: "InfoJr UFBA",
      icon: InfoJrLogo.src,
      link: "https://infojr.com.br",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`scroll-mt-24 mb-28 px-4 transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="h-0.5 w-8 bg-purple-300 rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {t("experience.label")}
        </h2>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-10 shadow-xl">
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <Experience
              key={`${exp.name}-${idx}`}
              name={exp.name}
              icon={exp.icon}
              description={exp.description}
              date={exp.date}
              link={exp.link}
              isLast={idx === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
