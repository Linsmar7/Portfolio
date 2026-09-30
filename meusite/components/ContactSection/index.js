import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  BsEnvelope,
  BsArrowUpRight,
  BsCopy,
  BsCheck2,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import Button from "../Buttons/button";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Contact() {
  const { t } = useTranslation();
  const [sectionRef, isVisible] = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const email = "linsmarvital@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`scroll-mt-24 mb-20 px-4 transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="h-0.5 w-8 bg-purple-300 rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {t("contact.label")}
        </h2>
      </div>

      <div className="glass-card rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden text-center">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-purple-100/40 dark:bg-purple-500/40 border border-purple-200/50 dark:border-purple-400/30 flex items-center justify-center text-purple-300 dark:text-purple-100 mb-6 shadow-inner">
            <BsEnvelope size="1.8em" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t("contact.h1")}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-lg">
            {t("contact.p")}
          </p>

          <div className="w-full sm:w-auto p-2 sm:p-2.5 rounded-2xl bg-white/70 dark:bg-purple-600/60 border border-purple-200/50 dark:border-purple-400/30 flex flex-col sm:flex-row items-center gap-3 mb-8 shadow-md">
            <span className="px-4 py-2 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 select-all">
              {email}
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-purple-500/50 hover:bg-slate-200 dark:hover:bg-purple-400/40 transition-colors"
              >
                {copied ? (
                  <>
                    <BsCheck2 className="text-emerald-500" />
                    <span>{t("contact.copied")}</span>
                  </>
                ) : (
                  <>
                    <BsCopy />
                    <span>{t("contact.copyEmail")}</span>
                  </>
                )}
              </button>

              <a href={`mailto:${email}`} className="shrink-0">
                <Button variant="primary" className="py-2 px-4 text-xs gap-1.5">
                  <span>{t("contact.openMail")}</span>
                  <BsArrowUpRight />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">
            <span>{t("contact.findMeOn")}</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/linsmar-vital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/60 dark:bg-purple-600/40 hover:text-purple-300 dark:hover:text-purple-100 transition-colors"
              >
                <BsLinkedin size="1.2em" />
              </a>
              <a
                href="https://github.com/Linsmar7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white/60 dark:bg-purple-600/40 hover:text-purple-300 dark:hover:text-purple-100 transition-colors"
              >
                <BsGithub size="1.2em" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
