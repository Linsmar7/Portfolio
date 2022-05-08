import React from "react";
import { Element } from "react-scroll";
import Project from "./project";
import ParapaisImg from "../../src/assets/parapais.png";
import ConstrurecImg from "../../src/assets/construrec.webp";
import SemcompImg from "../../src/assets/semcomp2021.png";
import DiscordBot from "../../src/assets/discordbot.png";
import PortfolioImg from "../../src/assets/portfolio.png";
import FeedbackWidget from "../../src/assets/feedbackwidget.png";
import JSLogo from "../../src/assets/javascriptLogo.svg";
import ReactLogo from "../../src/assets/reactLogo.svg";
import StyledComponentsLogo from "../../src/assets/styledLogo.svg";
import MUILogo from "../../src/assets/materialuiLogo.svg";
import TailwindLogo from "../../src/assets/tailwindcssLogo.svg";
import GitLogo from "../../src/assets/gitLogo.svg";
import GatsbyLogo from "../../src/assets/gatsby.svg";
import NextjsLogo from "../../src/assets/nextjs.svg";
import ExpressJsLogo from "../../src/assets/expressjs.svg";
import HeadlessUILogo from "../../src/assets/headlessui.svg";
import JestLogo from "../../src/assets/jest.svg";
import PrismaLogo from "../../src/assets/prisma.svg";
import TypescriptLogo from "../../src/assets/typescript.svg";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      name: t("projects.allProjects.0.name"),
      position: t("projects.allProjects.0.position"),
      description: t("projects.allProjects.0.description"),
      skills: [
        { src: ReactLogo, title: "React" },
        { src: TypescriptLogo, title: "Typescript" },
        { src: TailwindLogo, title: "Tailwindcss" },
        { src: HeadlessUILogo, title: "HeadlessUI" },
        { src: PrismaLogo, title: "Prisma" },
        { src: JestLogo, title: "Jest" },
        { src: ExpressJsLogo, title: "Express.js" },
        { src: GitLogo, title: "Git" },
      ],
      image: FeedbackWidget,
      linkLive: "http://feedback-widget-nlw-ten.vercel.app/",
      linkRepo: "https://github.com/Linsmar7/feedback-widget-nlw",
    },
    {
      name: t("projects.allProjects.1.name"),
      position: t("projects.allProjects.1.position"),
      description: t("projects.allProjects.1.description"),
      skills: [
        { src: ReactLogo, title: "React" },
        { src: TailwindLogo, title: "Tailwindcss" },
        { src: GitLogo, title: "Git" },
      ],
      image: SemcompImg,
      linkLive: "https://dev-semcomp2021.netlify.app",
      linkRepo: "",
    },
    {
      name: t("projects.allProjects.2.name"),
      position: t("projects.allProjects.2.position"),
      description: t("projects.allProjects.2.description"),
      skills: [
        { src: NextjsLogo, title: "Next.js" },
        { src: TailwindLogo, title: "Tailwindcss" },
        { src: GitLogo, title: "Git" },
      ],
      image: PortfolioImg,
      linkLive: "https://www.linsmarvital.com",
      linkRepo: "https://github.com/Linsmar7/Portfolio",
    },
    {
      name: t("projects.allProjects.3.name"),
      position: t("projects.allProjects.3.position"),
      description: t("projects.allProjects.3.description"),
      skills: [
        { src: NextjsLogo, title: "Next.js" },
        { src: StyledComponentsLogo, title: "Styled Components" },
        { src: MUILogo, title: "Material UI" },
        { src: GitLogo, title: "Git" },
      ],
      image: ParapaisImg,
      linkLive: "http://parapais.ips.ufba.br",
      linkRepo: "",
    },
    {
      name: t("projects.allProjects.4.name"),
      position: t("projects.allProjects.4.position"),
      description: t("projects.allProjects.4.description"),
      skills: [
        { src: GatsbyLogo, title: "Gatsby" },
        { src: StyledComponentsLogo, title: "Styled Components" },
        { src: MUILogo, title: "Material UI" },
        { src: GitLogo, title: "Git" },
      ],
      image: ConstrurecImg,
      linkLive: "",
      linkRepo: "",
    },
    {
      name: t("projects.allProjects.5.name"),
      position: t("projects.allProjects.5.position"),
      description: t("projects.allProjects.5.description"),
      skills: [
        { src: JSLogo, title: "Javascript" },
        { src: GitLogo, title: "Git" },
      ],
      image: DiscordBot,
      linkLive: "",
      linkRepo: "https://github.com/Linsmar7/MiniKrakenBOT",
    },
  ];
  return (
    <section className="flex flex-col mb-32">
      <Element name="projects" />
      <div className="flex flex-row items-center mb-10 ml-4">
        <span className="h-px w-10 bg-gray-500 mr-4"></span>
        <h2 className="text-3xl uppercase">{t("projects.label")}</h2>
      </div>
      <div className="flex flex-col w-10/12 m-auto lg:m-0 lg:w-full bg-white dark:bg-purple-500 p-10 rounded-2xl border-purple-400 border-2 gap-y-4">
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
