import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { BsPerson, BsTelephone, BsKeyboard, BsCodeSlash, BsMusicNoteBeamed } from 'react-icons/bs'

const navigation = [
    {
        name: 'Sobre mim',
        href: '',
        icon: <BsPerson size='1.2em' color=''/>,
    },
    {
        name: 'Experiência',
        href: '',
        icon: <BsKeyboard size='1.2em' color=''/>,
    },
    {
        name: 'Skills',
        href: '',
        icon: <BsCodeSlash size='1.2em' color=''/>,
    },
    {
        name: 'Contato',
        href: '',
        icon: <BsTelephone size='1.2em' color=''/>,
    },
    {
        name: 'Music',
        href: 'https://soundcloud.com/linsmar/tracks',
        icon: <BsMusicNoteBeamed size='1.2em' color=''/>,
    },
]

export default function Navbar({open}) {
  return (
    <>
    <header className='hidden lg:flex flex-row w-full h-20 bg-purple-300 text-white text-xl items-center justify-evenly fixed top-0'>
        <Link href='#'>
            <a className=''>LV</a>
        </Link>
        <div className='flex flex-row justify-center justify-between items-center gap-x-12 uppercase xl:ml-60'>
            {
                navigation.map((e, idx) => (
                    <>
                        <Link key={idx} href={e.href}>
                            <a className='transition duration-700 hover:text-purple-100 bg-gradient-to-r from-purple-100 to-purple-100 bg-growing-underline'>
                                {e.name}
                            </a>
                        </Link>
                    </>
                ))
            }
            <span className='absolute w-full transform scale-x-0 h-3 bottom-0 left-0 bg-purple-100 origin-bottom-right transition duration-75 ease-out hover:scale-x-100 hover:origin-bottom-left'></span>
        </div>
    </header>
    <header className={'transform '+open+' lg:hidden w-2/4 h-full bg-purple-300 text-white text-xl fixed top-0 transition duration-300'}>
        <div className='flex flex-col items-center h-2/4 justify-evenly'>
            <Link href='#'>
                <a className='my-28'>LV</a>
            </Link>
            <div className='flex flex-col gap-y-4 uppercase'>
                {
                    navigation.map((e, idx) => (
                        <Link key={idx} href={e.href}>
                            <a>
                                <span className='flex flex-row gap-x-2 items-center'>
                                    {e.icon}
                                    {e.name}
                                </span>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    </header>
    </>
  )
}
