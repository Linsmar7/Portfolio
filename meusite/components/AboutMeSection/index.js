import React from "react";
import { Element } from "react-scroll";
import { useTranslation } from "next-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col mb-32">
      <Element name="aboutme" />
      <div className="flex flex-row items-center mb-10 ml-4">
        <span className="h-px w-10 bg-gray-500 mr-4"></span>
        <h2 className="text-3xl uppercase">{t("aboutme.label")}</h2>
      </div>
      <div className="w-10/12 m-auto text-sm lg:m-0 lg:w-full bg-white self-center lg:text-xl p-10 rounded-2xl border-purple-400 border-2 dark:bg-purple-500">
        <p className="mb-4">{t("aboutme.question")}</p>
        <p className="mb-4">{t("aboutme.firstp")}</p>
        <p>{t("aboutme.secondp")}</p>
      </div>
    </section>
  );
}
