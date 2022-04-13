import React from "react";
import { Element } from "react-scroll";
import Project from "./project";
import ParapaisImg from "../../src/assets/parapais.png";
import ConstrurecImg from "../../src/assets/construrec.webp";
import SemcompImg from "../../src/assets/semcomp2021.png";
import DiscordBot from "../../src/assets/discordbot.png";
import PortfolioImg from "../../src/assets/portfolio.png";
import JSLogo from "../../src/assets/javascriptLogo.svg";
import ReactLogo from "../../src/assets/reactLogo.svg";
import StyledComponentsLogo from "../../src/assets/styledLogo.svg";
import MUILogo from "../../src/assets/materialuiLogo.svg";
import TailwindLogo from "../../src/assets/tailwindcssLogo.svg";
import GitLogo from "../../src/assets/gitLogo.svg";

const projects = [
  {
    name: "Semcomp 2021",
    position: "Desenvolvedor Front-end",
    description:
      "Desenvolvimento web de um site para o evento de Semana da Computação que é feito pela InfoJr. (Projeto feito na InfoJr)",
    skills: [ReactLogo, GitLogo, TailwindLogo],
    image: SemcompImg,
    linkLive: "https://dev-semcomp2021.netlify.app",
    linkRepo: "",
  },
  {
    name: "Portfolio",
    position: "Criador",
    description:
      "Desenvolvimento web de um site para ser um portfólio de um desenvolvedor web.",
    skills: [ReactLogo, GitLogo, TailwindLogo],
    image: PortfolioImg,
    linkLive: "https://www.linsmarvital.com",
    linkRepo: "https://github.com/Linsmar7/Portfolio",
  },
  {
    name: "Parapais",
    position: "Gerente e Desenvolvedor Front-end",
    description:
      "Organização, acompanhamento de equipe e desenvolvimento web de um site institucional e sistema para o grupo de pesquisa Parapais, do Instituto de Psicologia da UFBA. (Projeto feito na InfoJr)",
    skills: [ReactLogo, StyledComponentsLogo, GitLogo, MUILogo],
    image: ParapaisImg,
    linkLive: "http://parapais.ips.ufba.br",
    linkRepo: "",
  },
  {
    name: "Construrec",
    position: "Desenvolvedor Front-end",
    description:
      "Desenvolvimento web de um site profissional com as tecnologias para a empresa júnior de Engenharia Civil ConstruREC. (Projeto feito na InfoJr)",
    skills: [ReactLogo, StyledComponentsLogo, GitLogo, MUILogo],
    image: ConstrurecImg,
    linkLive: "",
    linkRepo: "",
  },
  {
    name: "Discord Bot (MiniKrakenBOT)",
    position: "Criador",
    description:
      "Um bot de Discord com algumas funções simples feito com Discord.js",
    skills: [JSLogo, GitLogo],
    image: DiscordBot,
    linkLive: "",
    linkRepo: "https://github.com/Linsmar7/MiniKrakenBOT",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col mb-32">
      <Element name="projects" />
      <div className="flex flex-row items-center mb-10 ml-4">
        <span className="h-px w-10 bg-gray-500 mr-4"></span>
        <h2 className="text-3xl uppercase">Projetos</h2>
      </div>
      <div className="flex flex-col w-10/12 m-auto lg:m-0 lg:w-full bg-white p-10 rounded-2xl border-purple-400 border-2 gap-y-4">
        {projects.map((e, idx) => (
          <Project
            key={idx}
            name={e.name}
            position={e.position}
            description={e.description}
            skills={e.skills}
            image={e.image.src}
            linkLive={e.linkLive}
            linkRepo={e.linkRepo}
          />
        ))}
      </div>
    </section>
  );
}
