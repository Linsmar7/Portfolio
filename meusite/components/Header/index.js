import React from "react";
import Image from "next/image";
import { BsLinkedin, BsGithub, BsDownload, BsArrowDown } from "react-icons/bs";
import { useTranslation } from "next-i18next";
import LinsmarPicture from "../../src/assets/AvatarLinsmar.png";
import Button from "../Buttons/button";
import GridButton from "../Buttons/gridButton";

const socials = [
  {
    name: "LinkedIn",
    icon: <BsLinkedin size="1.25em" />,
    link: "https://www.linkedin.com/in/linsmar-vital/",
  },
  {
    name: "GitHub",
    icon: <BsGithub size="1.25em" />,
    link: "https://github.com/Linsmar7",
  },
];

export default function Header() {
  const { t } = useTranslation();

  const handleScrollDown = () => {
    const target = document.getElementById("aboutme");
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="header"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/15 dark:bg-purple-300/10 blur-[130px] rounded-full" />

      <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 z-10 my-auto">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-300 via-purple-200 to-purple-400 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500" />
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/60 dark:border-purple-300/40 shadow-2xl bg-purple-500">
            <Image
              src={LinsmarPicture}
              alt="Linsmar Vital"
              fill
              sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/30 dark:bg-purple-500/40 border border-purple-200/40 dark:border-purple-400/30 text-purple-300 dark:text-purple-100 text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t("headerBadge")}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 bg-clip-text text-transparent">
              LINSMAR
            </span>{" "}
            VITAL
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {t("textheader1")}{" "}
            <span className="font-semibold text-purple-300 dark:text-purple-200">
              {t("span2")}
            </span>{" "}
            {t("textheader2")}{" "}
            <span className="font-semibold text-purple-300 dark:text-purple-200">
              {t("span1")}
            </span>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href={t("resumelink")} download>
              <Button variant="primary" className="gap-2 text-sm px-6 py-3">
                <BsDownload size="1.1em" />
                {t("resume")}
              </Button>
            </a>

            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <GridButton
                  key={social.name}
                  link={social.link}
                  icon={social.icon}
                  name={social.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        aria-label="Scroll to About Me"
        className="mt-8 flex flex-col items-center gap-2 text-slate-400 hover:text-purple-300 dark:hover:text-purple-200 transition-colors focus:outline-none cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100">
          {t("scroll")}
        </span>
        <BsArrowDown className="animate-bounce" size="1.1em" />
      </button>
    </section>
  );
}
