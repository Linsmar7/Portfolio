import React from "react";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <section className="flex flex-col mb-32">
      <Element name="contact" />
      <div className="flex flex-row items-center mb-10 ml-4">
        <span className="h-px w-10 bg-gray-500 mr-4"></span>
        <h2 className="text-3xl uppercase">Contato</h2>
      </div>
      <div className="w-10/12 m-auto lg:m-0 lg:w-full bg-white p-10 rounded-2xl border-purple-400 border-2">
        <p>[Construindo formulário de contato]</p>
        <p>
          Estou atualmente em busca de oportunidades do nível de estágio ou
          júnior! Se você sabe de alguma vaga, se tem alguma pergunta ou apenas
          quer falar comigo sobre qualquer coisa, você pode me mandar um email
          em:
        </p>
        <a
          href="mailto:linsmarvital@gmail.com"
          className="text-lg text-purple-200"
        >
          linsmarvital@gmail.com
        </a>
      </div>
    </section>
  );
}
