import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  BsPerson,
  BsTelephone,
  BsKeyboard,
  BsCodeSlash,
  BsMusicNoteBeamed,
  BsBriefcase,
} from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import BRFlag from "./../../src/assets/brazilflag.svg";
import USAFlag from "./../../src/assets/usaflag.svg";
import { useTranslation } from "next-i18next";
import { ThemeToggle } from "../ThemeToggle";

export default function Navbar({ open }) {
  const { t } = useTranslation();
  const router = useRouter();
  const navigation = [
    {
      name: t("aboutme.label"),
      href: "aboutme",
      icon: <BsPerson size="1.2em" color="" />,
    },
    {
      name: "Skills",
      href: "skills",
      icon: <BsCodeSlash size="1.2em" color="" />,
    },
    {
      name: t("experience.label"),
      href: "experience",
      icon: <BsKeyboard size="1.2em" color="" />,
    },
    {
      name: t("projects.label"),
      href: "projects",
      icon: <BsBriefcase size="1.2em" color="" />,
    },
    {
      name: t("contact.label"),
      href: "contact",
      icon: <BsTelephone size="1.2em" color="" />,
    },
    {
      name: "Music",
      href: "https://soundcloud.com/linsmar/tracks",
      icon: <BsMusicNoteBeamed size="1.2em" color="" />,
    },
  ];
  const [navbar, setNavbar] = useState(true);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const [langNav, setLangNav] = useState(
    "-translate-x-full invisible opacity-0"
  );
  function changeLangNavHook() {
    if (langNav == "-translate-x-full invisible opacity-0")
      setLangNav("translate-x-0 visible opacity-100");
    else setLangNav("-translate-x-full invisible opacity-0");
  }

  return (
    <>
      <header
        className={navbar ? "navbar-active" : "navbar-transparent" + " z-50"}
      >
        <ScrollLink
          onClick={() => scroll.scrollToTop()}
          to="header"
          smooth={true}
          duration={500}
          className="cursor-pointer opacity-100"
        >
          <p target="_blank" className="italic font-medium gradient-text">
            &lt;
            <span className="text-transparent">Linsmar</span> /&gt;
          </p>
        </ScrollLink>
        <div className="flex flex-row justify-center justify-between items-center gap-x-12 uppercase xl:ml-60 opacity-100">
          {navigation.map((e, idx) => {
            if (idx == 5)
              return (
                <Link key={idx} href={e.href}>
                  <a
                    target="_blank"
                    className="transition duration-700 hover:text-purple-100 bg-gradient-to-r from-purple-100 to-purple-100 bg-growing-underline"
                  >
                    {e.name}
                  </a>
                </Link>
              );
            return (
              <ScrollLink
                key={idx}
                to={e.href}
                offset={-120}
                smooth={true}
                duration={500}
                className="transition duration-700 hover:text-purple-100 bg-gradient-to-r from-purple-100 to-purple-100 bg-growing-underline"
              >
                {e.name}
              </ScrollLink>
            );
          })}
          <div className="flex gap-x-2 items-center">
            <MdLanguage
              size="1.4em"
              color=""
              className="cursor-pointer"
              onClick={() => changeLangNavHook()}
            />
            <div
              className={
                "flex w-6 h-6 gap-x-2 cursor-pointer lang-transition transform mr-10 " +
                langNav
              }
            >
              <Link href={router.pathname} locale="en">
                <img src={USAFlag.src} alt="english" />
              </Link>
              <Link href={router.pathname} locale="pt">
                <img src={BRFlag.src} alt="português" />
              </Link>
            </div>
            <ThemeToggle />
          </div>
          <span className="absolute w-full transform scale-x-0 h-3 bottom-0 left-0 bg-purple-100 origin-bottom-right transition duration-75 ease-out hover:scale-x-100 hover:origin-bottom-left"></span>
        </div>
      </header>
      <header
        className={
          "transform " +
          open +
          " lg:hidden w-2/4 h-full bg-purple-300 text-white text-xl fixed top-0 transition duration-300 z-50"
        }
      >
        <div className="flex flex-col items-center h-2/4 justify-evenly">
          <ScrollLink
            onClick={() => scroll.scrollToTop()}
            to="header"
            smooth={true}
            duration={500}
            className="cursor-pointer my-28"
          >
            <p className="italic font-medium gradient-text">
              &lt;<span className="text-transparent">Linsmar</span> /&gt;
            </p>
          </ScrollLink>
          <div className="flex flex-col gap-y-4 uppercase">
            {navigation.map((e, idx) => {
              if (idx == 5)
                return (
                  <Link key={idx} href={e.href}>
                    <a target="_blank">
                      <span className="flex flex-row gap-x-2 items-center">
                        {e.icon}
                        {e.name}
                      </span>
                    </a>
                  </Link>
                );
              return (
                <ScrollLink
                  key={idx}
                  to={e.href}
                  offset={-120}
                  smooth={true}
                  duration={500}
                >
                  <span className="flex flex-row gap-x-2 items-center">
                    {e.icon}
                    {e.name}
                  </span>
                </ScrollLink>
              );
            })}
            <div className="flex gap-x-2 items-center">
              <MdLanguage
                size="1.4em"
                color=""
                className="cursor-pointer"
                onClick={() => changeLangNavHook()}
              />
              <div
                className={
                  "flex w-6 h-6 gap-x-2 cursor-pointer lang-transition transform " +
                  langNav
                }
              >
                <Link href={router.pathname} locale="en">
                  <img src={USAFlag.src} alt="english" />
                </Link>
                <Link href={router.pathname} locale="pt">
                  <img src={BRFlag.src} alt="português" />
                </Link>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}

Navbar.propTypes = {
  open: PropTypes.string,
};
