import RankedLyImg from "../../src/assets/rankedly.png";
import GridVideoImg from "../../src/assets/gridvideo.jpg";
import FeedbackWidget from "../../src/assets/feedbackwidget.png";
import SemcompImg from "../../src/assets/semcomp2021.png";
import PortfolioImg from "../../src/assets/portfolio.png";
import ParapaisImg from "../../src/assets/parapais.png";
import ConstrurecImg from "../../src/assets/construrec.webp";
import DiscordBot from "../../src/assets/discordbot.png";

import JSLogo from "../../src/assets/javascriptLogo.svg";
import HTML5Logo from "../../src/assets/html5Logo.svg";
import CSS3Logo from "../../src/assets/css3Logo.svg";
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
import PostgreSQLLogo from "../../src/assets/postgresql.svg";
import DockerLogo from "../../src/assets/docker.svg";
import ReactRouterLogo from "../../src/assets/reactrouter.svg";

export const projectsData = [
  {
    id: "rankedly",
    date: "2024-05",
    featured: true,
    skills: [
      { src: ReactLogo, title: "React" },
      { src: TypescriptLogo, title: "TypeScript" },
      { src: TailwindLogo, title: "Tailwind CSS" },
      { src: ReactRouterLogo, title: "React Router" },
      { src: PostgreSQLLogo, title: "PostgreSQL" },
      { src: DockerLogo, title: "Docker" },
      { src: GitLogo, title: "Git" },
    ],
    image: RankedLyImg,
    linkLive: "https://rankedly-gamma.vercel.app",
    linkRepo: "https://github.com/Linsmar7/ranked-lists",
  },
  {
    id: "gridvideo",
    date: "2024-04",
    skills: [
      { src: JSLogo, title: "JavaScript" },
      { src: HTML5Logo, title: "HTML5" },
      { src: CSS3Logo, title: "CSS3" },
      { src: GitLogo, title: "Git" },
    ],
    image: GridVideoImg,
    linkLive: "",
    linkRepo: "https://github.com/Linsmar7/gridvideo",
  },
  {
    id: "feedbackWidget",
    date: "2022-05",
    skills: [
      { src: ReactLogo, title: "React" },
      { src: TypescriptLogo, title: "TypeScript" },
      { src: TailwindLogo, title: "Tailwind CSS" },
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
    id: "semcomp2021",
    date: "2021-10",
    skills: [
      { src: ReactLogo, title: "React" },
      { src: TailwindLogo, title: "Tailwind CSS" },
      { src: GitLogo, title: "Git" },
    ],
    image: SemcompImg,
    linkLive: "https://dev-semcomp2021.netlify.app",
    linkRepo: "",
  },
  {
    id: "portfolio",
    date: "2021-08",
    skills: [
      { src: NextjsLogo, title: "Next.js" },
      { src: TailwindLogo, title: "Tailwind CSS" },
      { src: GitLogo, title: "Git" },
    ],
    image: PortfolioImg,
    linkLive: "https://www.linsmarvital.com",
    linkRepo: "https://github.com/Linsmar7/Portfolio",
  },
  {
    id: "parapais",
    date: "2021-06",
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
    id: "construrec",
    date: "2021-03",
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
    id: "discordBot",
    date: "2020-11",
    skills: [
      { src: JSLogo, title: "JavaScript" },
      { src: GitLogo, title: "Git" },
    ],
    image: DiscordBot,
    linkLive: "",
    linkRepo: "https://github.com/Linsmar7/MiniKrakenBOT",
  },
];
