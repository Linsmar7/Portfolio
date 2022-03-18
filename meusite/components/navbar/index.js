import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='flex flex-row w-full h-20 bg-purple-300 text-white text-xl items-center justify-between'>
        <Link href='#'>
            <a className='ml-60'>LV</a>
        </Link>
        <div className='flex flex-row justify-center justify-between items-center gap-x-12 mr-60 uppercase'>
            <Link href='#'>
                <a className=''>Sobre mim</a>
            </Link>
            <Link href='#'>
                <a className=''>Experiência</a>
            </Link>
            <Link href='#'>
                <a className=''>Competências</a>
            </Link>
            <Link href='#'>
                <a className=''>Contato</a>
            </Link>
            <Link href='https://soundcloud.com/linsmar/tracks'>
                <a className='' target='_blank'>Music</a>
            </Link>
        </div>
    </header>
  )
}
