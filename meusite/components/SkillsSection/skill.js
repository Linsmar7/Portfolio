import React from "react";

export default function Skill({ name, icon, title }) {
  const iconSrc = typeof icon === "object" ? icon.src : icon;

  return (
    <div
      title={title || name}
      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 dark:bg-purple-600/40 border border-purple-200/40 dark:border-purple-400/20 hover:border-purple-300 dark:hover:border-purple-300 hover:shadow-md hover:shadow-purple-300/10 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-7 h-7 flex items-center justify-center shrink-0">
        <img
          src={iconSrc}
          alt={name || title}
          className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-purple-300 dark:group-hover:text-purple-100 transition-colors">
        {name}
      </span>
    </div>
  );
}
