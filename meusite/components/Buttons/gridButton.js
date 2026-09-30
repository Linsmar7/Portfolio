import React from "react";
import { cn } from "../../utils/cn";

export default function GridButton({ icon, link, name, className = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      title={name}
      className={cn(
        "inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/70 dark:bg-purple-600/60 border border-purple-200/40 dark:border-purple-400/30 text-purple-300 dark:text-purple-100 hover:text-white hover:bg-purple-300 dark:hover:bg-purple-300 transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5",
        className
      )}
    >
      {icon}
    </a>
  );
}
