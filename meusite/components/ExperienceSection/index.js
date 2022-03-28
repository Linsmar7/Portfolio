import { Element } from 'react-scroll'

export default function Experience({}) {
    return (
      <section className="flex flex-col mb-32">
        <Element name='experience' />
        <div className="flex flex-row items-center mb-10 ml-4">
          <span className="h-px w-10 bg-gray-500 mr-4"></span>
          <h2 className="text-3xl uppercase">Experiência</h2>
        </div>
        <div className="w-10/12 m-auto lg:m-0 lg:w-full bg-white p-10 rounded-2xl border-purple-400 border-2">
          <p>Construindo</p>
        </div>
      </section>
    )
  }  