import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './../components/navbar'
import Header from './../components/Header'
import HamburgerIcon from '../components/navbar/hamburgerIcon'

export default function Home() {
  const [mobile, setMobile] = useState('-translate-x-full')
  function changeMobileHook() {
    if (mobile == '-translate-x-full') setMobile('translate-x-0')
    else setMobile('-translate-x-full')
  }
  return (
    <main>
      <Navbar open={mobile} />
      <HamburgerIcon onClick={() => changeMobileHook()} />
      <Header />
    </main>
  )
}
