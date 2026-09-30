import React from "react";
import { useTranslation } from "next-i18next";
import { BsGithub, BsLinkedin, BsEnvelope, BsMusicNoteBeamed } from "react-icons/bs";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Linsmar7",
      icon: <BsGithub size="1.2em" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/linsmar-vital/",
      icon: <BsLinkedin size="1.2em" />,
    },
    {
      name: "SoundCloud",
      href: "https://soundcloud.com/linsmar/tracks",
      icon: <BsMusicNoteBeamed size="1.2em" />,
    },
    {
      name: "Email",
      href: "mailto:linsmarvital@gmail.com",
      icon: <BsEnvelope size="1.2em" />,
    },
  ];

  return (
    <footer className="border-t border-purple-200/40 dark:border-purple-500/20 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-lg font-bold text-slate-800 dark:text-white">
            <span className="text-purple-300">&lt;</span>
            <span className="bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
              Linsmar Vital
            </span>
            <span className="text-purple-300"> /&gt;</span>
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t("footer.role")}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-600/50 text-slate-600 dark:text-slate-300 hover:text-purple-300 dark:hover:text-purple-100 hover:bg-purple-100/40 transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {currentYear} Linsmar Vital. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
