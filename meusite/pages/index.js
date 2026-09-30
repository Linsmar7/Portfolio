import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/navbar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMeSection";
import Skills from "../components/SkillsSection";
import Experiences from "../components/ExperiencesSection";
import Projects from "../components/ProjectsSection";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#07030e] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Header />
      <main className="max-w-5xl mx-auto w-full flex flex-col grow">
        <AboutMe />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
