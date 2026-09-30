import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import {
  BsPerson,
  BsKeyboard,
  BsCodeSlash,
  BsMusicNoteBeamed,
  BsBriefcase,
  BsEnvelope,
  BsSun,
  BsMoon,
} from "react-icons/bs";
import HamburgerIcon from "./hamburgerIcon";
import BRFlag from "../../src/assets/brazilflag.svg";
import USAFlag from "../../src/assets/usaflag.svg";

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("aboutme.label"), href: "aboutme", icon: <BsPerson size="1.1em" /> },
    { name: "Skills", href: "skills", icon: <BsCodeSlash size="1.1em" /> },
    { name: t("experience.label"), href: "experience", icon: <BsKeyboard size="1.1em" /> },
    { name: t("projects.label"), href: "projects", icon: <BsBriefcase size="1.1em" /> },
    { name: t("contact.label"), href: "contact", icon: <BsEnvelope size="1.1em" /> },
    {
      name: "Music",
      href: "https://soundcloud.com/linsmar/tracks",
      external: true,
      icon: <BsMusicNoteBeamed size="1.1em" />,
    },
  ];

  const handleNavClick = (e, item) => {
    if (item.external) return;
    e.preventDefault();
    setMobileOpen(false);

    const element = document.getElementById(item.href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b transition-[padding,background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#07030e]/85 backdrop-blur-lg border-purple-200/40 dark:border-purple-500/20 shadow-lg shadow-purple-950/5 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="text-xl font-bold tracking-tight text-slate-800 dark:text-white group flex items-center gap-1 focus:outline-none"
          >
            <span className="text-purple-300 transition-transform group-hover:-translate-x-0.5">
              &lt;
            </span>
            <span className="bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
              Linsmar
            </span>
            <span className="text-purple-300 transition-transform group-hover:translate-x-0.5">
              /&gt;
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-300 hover:text-purple-300 dark:hover:text-purple-100 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-slate-600 dark:text-slate-300 hover:text-purple-300 dark:hover:text-purple-100 transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              )
            )}

            <div className="h-4 w-px bg-slate-200 dark:bg-purple-500/40" />

            <div className="flex items-center gap-2">
              <Link
                href={router.asPath}
                locale="en"
                className={`p-1 rounded-md transition-opacity ${
                  router.locale === "en" ? "opacity-100 ring-2 ring-purple-300/40" : "opacity-40 hover:opacity-80"
                }`}
                aria-label="Switch to English"
              >
                <img src={USAFlag.src} alt="English" className="w-5 h-4 object-cover rounded-sm" />
              </Link>
              <Link
                href={router.asPath}
                locale="pt"
                className={`p-1 rounded-md transition-opacity ${
                  router.locale === "pt" ? "opacity-100 ring-2 ring-purple-300/40" : "opacity-40 hover:opacity-80"
                }`}
                aria-label="Mudar para Português"
              >
                <img src={BRFlag.src} alt="Português" className="w-5 h-4 object-cover rounded-sm" />
              </Link>
            </div>

            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 rounded-xl text-slate-600 dark:text-purple-100 hover:text-purple-300 hover:bg-purple-100/10 transition-colors"
              >
                {theme === "dark" ? <BsSun size="1.2em" /> : <BsMoon size="1.2em" />}
              </button>
            )}
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 rounded-xl text-slate-600 dark:text-purple-100 hover:text-purple-300 transition-colors"
              >
                {theme === "dark" ? <BsSun size="1.2em" /> : <BsMoon size="1.2em" />}
              </button>
            )}
            <HamburgerIcon isOpen={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-purple-600 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-6 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-purple-100/30">
            <span className="text-lg font-bold text-slate-800 dark:text-white">
              {t("nav.menu")}
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-slate-500 hover:text-purple-300 p-2"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-base text-slate-700 dark:text-slate-200 hover:text-purple-300 dark:hover:text-purple-100 py-2 transition-colors"
                >
                  <span className="text-purple-300">{item.icon}</span>
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center gap-3 text-base text-slate-700 dark:text-slate-200 hover:text-purple-300 dark:hover:text-purple-100 py-2 transition-colors cursor-pointer"
                >
                  <span className="text-purple-300">{item.icon}</span>
                  {item.name}
                </a>
              )
            )}
          </nav>
        </div>

        <div className="pt-6 border-t border-purple-100/30 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400">
            {t("nav.language")}
          </span>
          <div className="flex items-center gap-2">
            <Link
              href={router.asPath}
              locale="en"
              onClick={() => setMobileOpen(false)}
              className={`p-1.5 rounded-md ${
                router.locale === "en" ? "ring-2 ring-purple-300" : "opacity-50"
              }`}
            >
              <img src={USAFlag.src} alt="English" className="w-5 h-4 object-cover rounded-sm" />
            </Link>
            <Link
              href={router.asPath}
              locale="pt"
              onClick={() => setMobileOpen(false)}
              className={`p-1.5 rounded-md ${
                router.locale === "pt" ? "ring-2 ring-purple-300" : "opacity-50"
              }`}
            >
              <img src={BRFlag.src} alt="Português" className="w-5 h-4 object-cover rounded-sm" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
