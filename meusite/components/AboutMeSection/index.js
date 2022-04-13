import React from "react";
import { Element } from "react-scroll";

export default function AboutMe() {
  return (
    <section className="flex flex-col mb-32">
      <Element name="aboutme" />
      <div className="flex flex-row items-center mb-10 ml-4">
        <span className="h-px w-10 bg-gray-500 mr-4"></span>
        <h2 className="text-3xl uppercase">Sobre mim</h2>
      </div>
      <div className="w-10/12 m-auto text-sm lg:m-0 lg:w-full bg-white self-center lg:text-xl p-10 rounded-2xl border-purple-400 border-2">
        <p className="mb-4">
          Hello World, como posso te ajudar a mudar o mundo?
        </p>
        <p className="mb-4">
          Tive um grande aprendizado dentro da empresa júnior de informática da
          UFBA, a grande InfoJr, me apaixonei por programação web e fui atrás
          das novidades que esse mundo traz todos os dias, participei de
          projetos reais em equipe como desenvolvedor front-end e desenvolvi
          soft-skills na diretoria de gestão de pessoas.
        </p>
        <p>
          Atualmente estou me especializando mais em front-end e começando a
          aprender back-end, gosto de desafios e criar soluções. Quero trazer
          soluções de uma forma impactante, e ai, vamos codar?
        </p>
      </div>
    </section>
  );
}
