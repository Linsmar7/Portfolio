import { Element } from 'react-scroll'
import Experience from './experience'
import InfoJrLogo from "../../src/assets/infojrufba.svg"
import UFBALogo from '../../src/assets/ufbalogo.png'

const experiences = [
  {
    name: 'Bacharelado Ciência da Computação',
    date: '2019 - Cursando',
    description: 'Universidade Federal da Bahia',
    icon: UFBALogo.src,
    link: 'https://www.ufba.br/cursos/ciencia-da-computacao',
  },
  {
    name: 'Desenvolvedor Front-End',
    date: 'Set. 2019 - Fev. 2022',
    description: 'InfoJr UFBA',
    icon: InfoJrLogo.src,
    link: 'https://infojr.com.br',
  },
  {
    name: 'Gerente de Pessoas',
    date: 'Dez. 2019 - Ago. 2021',
    description: 'InfoJr UFBA',
    icon: InfoJrLogo.src,
    link: 'https://infojr.com.br',
  },
]

export default function Experiences({}) {
    return (
      <section className="flex flex-col mb-32">
        <Element name='experience' />
        <div className="flex flex-row items-center mb-10 ml-4">
          <span className="h-px w-10 bg-gray-500 mr-4"></span>
          <h2 className="text-3xl uppercase">Experiência</h2>
        </div>
        <div className="flex flex-col m-auto lg:flex-row w-10/12 justify-around lg:m-0 lg:w-full bg-white p-10 rounded-2xl border-purple-400 border-2">
            {
              experiences.map((e, idx) => (
                <Experience key={idx} name={e.name} icon={e.icon} description={e.description} date={e.date} link={e.link}/>
              ))
            }
        </div>
      </section>
    )
  }  