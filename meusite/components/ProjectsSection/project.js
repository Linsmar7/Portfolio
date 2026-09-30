import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useTranslation } from "next-i18next";
import Button from "../Buttons/button";

export default function Project({
  name,
  description,
  image,
  skills,
  linkLive,
  linkRepo,
  position,
  featured = false,
}) {
  const { t } = useTranslation();
  const imgSrc = typeof image === "object" ? image.src : image;

  if (featured) {
    return (
      <div className="relative rounded-2xl glass-card border border-purple-300/40 dark:border-purple-300/30 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 transition-all duration-300 hover:border-purple-300/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative group overflow-hidden rounded-xl border border-purple-200/40 dark:border-purple-400/20 shadow-lg">
            <div className="aspect-[16/10] w-full overflow-hidden bg-purple-900/10">
              <img
                src={imgSrc}
                alt={name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="flex gap-2">
                {linkLive && (
                  <a
                    href={linkLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/90 text-purple-900 hover:bg-white text-xs font-semibold flex items-center gap-1 shadow"
                  >
                    {t("projects.liveDemo")} <BsArrowUpRight />
                  </a>
                )}
                {linkRepo && (
                  <a
                    href={linkRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-purple-900/90 text-white hover:bg-purple-900 text-xs font-semibold flex items-center gap-1 shadow"
                  >
                    {t("projects.repo")} <BsGithub />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/40 dark:bg-purple-500/40 border border-purple-200/50 dark:border-purple-400/30 text-purple-300 dark:text-purple-100 text-xs font-bold uppercase tracking-wider w-fit mb-3">
              ★ {t("projects.featured")}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {name}
            </h3>

            <p className="text-xs font-semibold text-purple-300 dark:text-purple-200 uppercase tracking-wider mb-4">
              {position}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((s, idx) => {
                const iconSrc = typeof s.src === "object" ? s.src.src : s.src;
                return (
                  <div
                    key={idx}
                    title={s.title}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/70 dark:bg-purple-600/60 border border-purple-200/30 dark:border-purple-400/20 text-xs font-medium text-slate-700 dark:text-slate-200"
                  >
                    {iconSrc && (
                      <img src={iconSrc} alt={s.title} className="w-3.5 h-3.5 object-contain" />
                    )}
                    <span>{s.title}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              {linkLive && (
                <a href={linkLive} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="gap-2">
                    {t("projects.liveDemo")} <BsArrowUpRight />
                  </Button>
                </a>
              )}
              {linkRepo && (
                <a href={linkRepo} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="gap-2">
                    <BsGithub /> {t("projects.sourceCode")}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group rounded-2xl glass-card border border-purple-200/40 dark:border-purple-400/20 hover:border-purple-300 dark:hover:border-purple-300/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-purple-900/10">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col grow justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-300 dark:group-hover:text-purple-100 transition-colors">
              {name}
            </h3>
          </div>

          <p className="text-xs font-semibold text-purple-300 dark:text-purple-200 uppercase tracking-wider mb-3">
            {position}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {skills.map((s, idx) => {
              const iconSrc = typeof s.src === "object" ? s.src.src : s.src;
              return (
                <div
                  key={idx}
                  title={s.title}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/70 dark:bg-purple-600/50 border border-purple-100/40 dark:border-purple-400/20 text-[11px] font-medium text-slate-700 dark:text-slate-200"
                >
                  {iconSrc && (
                    <img src={iconSrc} alt={s.title} className="w-3 h-3 object-contain" />
                  )}
                  <span>{s.title}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-purple-100/30 dark:border-purple-400/10">
            {linkLive && (
              <a
                href={linkLive}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-purple-300 dark:text-purple-200 hover:underline flex items-center gap-1"
              >
                {t("projects.live")} <BsArrowUpRight />
              </a>
            )}
            {linkLive && linkRepo && (
              <span className="text-slate-300 dark:text-purple-400/40">•</span>
            )}
            {linkRepo && (
              <a
                href={linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-purple-300 dark:text-purple-200 hover:underline flex items-center gap-1"
              >
                {t("projects.repo")} <BsGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
