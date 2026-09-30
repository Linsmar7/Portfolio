import React from "react";
import { cn } from "../../utils/cn";

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl px-5 py-2.5 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-purple-300 hover:bg-purple-200 text-white shadow-md hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-purple-100/10 hover:bg-purple-100/20 text-purple-300 dark:text-purple-100 border border-purple-300/30 hover:border-purple-300/60",
    outline:
      "border border-purple-300 text-purple-300 dark:text-purple-100 hover:bg-purple-300 hover:text-white dark:hover:bg-purple-300 dark:hover:text-white",
    ghost:
      "text-slate-600 dark:text-slate-300 hover:text-purple-300 dark:hover:text-white hover:bg-purple-500/10",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
