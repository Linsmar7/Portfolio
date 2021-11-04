import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="flex flex-row w-full h-20 bg-purple-300 text-white text-xl items-center justify-between">
        <a href='#' className='text-base cursor-pointer'>
            <p className="ml-60">LV</p>
        </a>
        <div className="flex flex-row justify-center justify-between items-center gap-x-12 mr-60">
            <a href='#' className='text-base cursor-pointer'>
                <p className="">Sobre mim</p>
            </a>
            <a href='#' className='text-base cursor-pointer'>
                <p className="">Portfólio</p>
            </a>
            <a href='#' className='text-base cursor-pointer'>
                <p className="">Experiência</p>
            </a>
            <a href='#' className='text-base cursor-pointer'>
                <p className="">Contato</p>
            </a>
            <a href='#' className='text-base cursor-pointer'>
                <p className="">Music</p>
            </a>
        </div>
    </header>
  )
}
