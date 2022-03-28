import React, { useState, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { BsPerson, BsTelephone, BsKeyboard, BsCodeSlash, BsMusicNoteBeamed, BsBriefcase } from 'react-icons/bs'

const navigation = [
    {
        name: 'Sobre mim',
        href: 'aboutme',
        icon: <BsPerson size='1.2em' color=''/>,
    },
    {
        name: 'Skills',
        href: 'skills',
        icon: <BsCodeSlash size='1.2em' color=''/>,
    },
    {
        name: 'Experiência',
        href: 'experience',
        icon: <BsKeyboard size='1.2em' color=''/>,
    },
    {
        name: 'Projetos',
        href: 'projects',
        icon: <BsBriefcase size='1.2em' color=''/>,
    },
    {
        name: 'Contato',
        href: 'contact',
        icon: <BsTelephone size='1.2em' color=''/>,
    },
    {
        name: 'Music',
        href: 'https://soundcloud.com/linsmar/tracks',
        icon: <BsMusicNoteBeamed size='1.2em' color=''/>,
    },
]

export default function Navbar({open}) {
    const [navbar, setNavbar] = useState('purple-300')
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 80) {
          setNavbar('purple-transparent')
        } else {
          setNavbar('purple-300')
        }
    }
    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

  return (
    <>
    <header className={'hidden lg:flex flex-row w-full h-20 bg-'+navbar+' text-white text-xl items-center justify-evenly fixed top-0 hover:bg-purple-300 transition-colors ease-in duration-500'}>
        <ScrollLink onClick={() => scroll.scrollToTop()} smooth={true} duration={500} className='cursor-pointer'>
            <p className='italic font-medium gradient-text'>&lt;<span className="text-transparent">Linsmar</span> /&gt;</p>
        </ScrollLink>
        <div className='flex flex-row justify-center justify-between items-center gap-x-12 uppercase xl:ml-60'>
            {
                navigation.map((e, idx) => {
                    if(idx == 5) return(<Link key={idx} href={e.href}>
                        <a target='_blank' className='transition duration-700 hover:text-purple-100 bg-gradient-to-r from-purple-100 to-purple-100 bg-growing-underline'>
                            {e.name}
                        </a>
                    </Link>)
                    return (
                    <ScrollLink key={idx} to={e.href} offset={-120} smooth={true} duration={500} className='transition duration-700 hover:text-purple-100 bg-gradient-to-r from-purple-100 to-purple-100 bg-growing-underline'>
                        {e.name}
                    </ScrollLink>
                    )
                })
            }
            <span className='absolute w-full transform scale-x-0 h-3 bottom-0 left-0 bg-purple-100 origin-bottom-right transition duration-75 ease-out hover:scale-x-100 hover:origin-bottom-left'></span>
        </div>
    </header>
    <header className={'transform '+open+' lg:hidden w-2/4 h-full bg-purple-300 text-white text-xl fixed top-0 transition duration-300'}>
        <div className='flex flex-col items-center h-2/4 justify-evenly'>
            <ScrollLink onClick={() => scroll.scrollToTop()} smooth={true} duration={500} className='cursor-pointer my-28'>
                <p className='italic font-medium gradient-text'>&lt;<span className='text-transparent'>Linsmar</span> /&gt;</p>
            </ScrollLink>
            <div className='flex flex-col gap-y-4 uppercase'>
                {
                    navigation.map((e, idx) => {
                        if(idx == 5) return(<Link key={idx} href={e.href}>
                            <a target='_blank'>
                                <span className='flex flex-row gap-x-2 items-center'>
                                    {e.icon}
                                    {e.name}
                                </span>
                            </a>
                        </Link>)
                        return(
                        <ScrollLink key={idx} to={e.href} offset={-120} smooth={true} duration={500}>
                            <span className='flex flex-row gap-x-2 items-center'>
                                {e.icon}
                                {e.name}
                            </span>
                        </ScrollLink>)
                    })
                }
            </div>
        </div>
    </header>
    </>
  )
}
