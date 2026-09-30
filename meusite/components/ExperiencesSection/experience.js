import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Experience({ icon, name, description, date, link, isLast }) {
  const iconSrc = typeof icon === "object" ? icon.src : icon;

  return (
    <div className="relative flex gap-6 sm:gap-8 group">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-white dark:bg-purple-600 border-2 border-purple-300 flex items-center justify-center p-2 shrink-0 shadow-md group-hover:scale-110 group-hover:border-purple-200 transition-all duration-300">
          {iconSrc ? (
            <img
              src={iconSrc}
              alt={description}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          ) : (
            <span className="w-2.5 h-2.5 rounded-full bg-purple-300" />
          )}
        </div>
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-purple-300/40 via-purple-300/20 to-transparent my-2" />
        )}
      </div>

      <div className="grow pb-10">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-5 sm:p-6 rounded-2xl bg-white/60 dark:bg-purple-600/40 border border-purple-200/40 dark:border-purple-400/20 hover:border-purple-300/60 dark:hover:border-purple-300/60 hover:shadow-lg hover:shadow-purple-300/5 transition-all duration-300 group-hover:-translate-y-0.5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              {name}
              <BsArrowUpRight className="text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100/30 dark:bg-purple-500/40 text-purple-300 dark:text-purple-200">
              {date}
            </span>
          </div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </a>
      </div>
    </div>
  );
}
