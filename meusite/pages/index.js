import React, { useState } from 'react';;
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import HamburgerIcon from '../components/navbar/hamburgerIcon';
import Header from '../components/Header';
import AboutMe from '../components/AboutMeSection';
import Skills from '../components/SkillsSection';
import Experience from '../components/ExperienceSection';
import Projects from '../components/ProjectsSection';
import Contact from '../components/ContactSection'

export default function Home() {
  const [mobile, setMobile] = useState('-translate-x-full')
  function changeMobileHook() {
    if (mobile == '-translate-x-full') setMobile('translate-x-0')
    else setMobile('-translate-x-full')
  }
  return (
    <>
      <Navbar open={mobile} />
      <HamburgerIcon onClick={() => changeMobileHook()} />
      <Header />
      <main className='mx-auto max-w-screen-lg flex flex-col'>
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
