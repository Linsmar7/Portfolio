import Image from 'next/image'
import Link from 'next/link'
import Avatar from 'react-avatar';
import LinsmarPicture from '../../src/assets/AvatarLinsmar.png'
import Button from './../Buttons/button.js'
import GridButton from './../Buttons/gridButton.js'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { IconContext } from "react-icons";

const socials = [
    {
        name: 'LinkedIn',
        icon: <BsLinkedin size='1.5em' color='#5A378C'/>,
        link: 'https://www.linkedin.com/in/linsmar-vital/',
    },
    {
        name: 'GitHub',
        icon: <BsGithub size='1.5em' color='#5A378C'/>,
        link: 'https://github.com/Linsmar7',
    },
]

console.log(socials[0].link)

export default function Header() {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-0 lg:mt-60 justify-center items-center mt-44 gap-y-8'>
        <Avatar round={true} src={LinsmarPicture.src} name='Linsmar Vital' size='300'/>
        <div className='lg:w-1/4 lg:items-stretch lg:ml-28 flex flex-col items-center gap-y-4'>
            <h1 className='font-bold text-5xl'><span className='text-purple-300'>LINSMAR</span> VITAL</h1>
            <h2 className='lg:px-0 lg:text-left text-xl px-2 text-center'>
                Um estudante de <span className='text-purple-300 font-bold'>Ciência da Computação</span> explorando o mundo da programação web, suas tecnologias
                 e novas experiências como <span className='text-purple-300 font-bold'>Desenvolvedor Front-End</span>.
            </h2>
            <div className='flex flex-row items-center'>
                <Button color='purple-300' textColor='white' margin='mr-20'><a href="/Curriculo.pdf" download>Currículo</a></Button>
                {socials.map((e, idx) => (
                    <GridButton key={idx} href={e.link} icon={e.icon} color='white' link={e.link}></GridButton>
                ))}
            </div>
        </div>
    </div>
  )
}
