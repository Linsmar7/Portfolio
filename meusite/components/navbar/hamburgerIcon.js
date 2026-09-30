import React from "react";

export default function HamburgerIcon({ isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle navigation menu"
      className="lg:hidden p-2 rounded-xl text-purple-300 dark:text-purple-100 hover:bg-purple-100/10 focus:outline-none transition-colors"
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span
          className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 transform origin-left ${
            isOpen ? "rotate-45 translate-x-0.5" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full bg-current rounded-full transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 transform origin-left ${
            isOpen ? "-rotate-45 translate-x-0.5" : ""
          }`}
        />
      </div>
    </button>
  );
}
