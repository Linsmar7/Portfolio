import React, { useState } from "react";
import Navbar from "../components/navbar";
import HamburgerIcon from "../components/navbar/hamburgerIcon";
import Header from "../components/Header";
import AboutMe from "../components/AboutMeSection";
import Skills from "../components/SkillsSection";
import Experiences from "../components/ExperiencesSection";
import Projects from "../components/ProjectsSection";
import Contact from "../components/ContactSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

// eslint-disable-next-line react/prop-types
export default function Home({ locale }) {
  const [mobile, setMobile] = useState("-translate-x-full");
  function changeMobileHook() {
    if (mobile == "-translate-x-full") setMobile("translate-x-0");
    else setMobile("-translate-x-full");
  }
  return (
    <>
      <Navbar open={mobile} />
      <HamburgerIcon onClick={() => changeMobileHook()} />
      <Header />
      <main className="mx-auto max-w-screen-lg flex flex-col">
        <AboutMe name="aboutme" id="aboutme" />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
