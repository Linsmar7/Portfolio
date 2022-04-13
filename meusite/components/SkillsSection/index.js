import React from "react";
import Skill from "./skill";
import HTML5Logo from "../../src/assets/html5Logo.svg";
import CSS3Logo from "../../src/assets/css3Logo.svg";
import JSLogo from "../../src/assets/javascriptLogo.svg";
import ReactLogo from "../../src/assets/reactLogo.svg";
import StyledComponentsLogo from "../../src/assets/styledLogo.svg";
import MUILogo from "../../src/assets/materialuiLogo.svg";
import TailwindLogo from "../../src/assets/tailwindcssLogo.svg";
import GitLogo from "../../src/assets/gitLogo.svg";
import VSCodeLogo from "../../src/assets/vscodeLogo.svg";
import OfficeLogo from "../../src/assets/officeLogo.svg";
import PythonLogo from "../../src/assets/pythonLogo.svg";
import CppLogo from "../../src/assets/cppLogo.svg";
import { Element } from "react-scroll";

const skills = [
  {
    name: "HTML",
    icon: HTML5Logo,
  },
  {
    name: "CSS",
    icon: CSS3Logo,
  },
  {
    name: "Javascript",
    icon: JSLogo,
  },
  {
    name: "React",
    icon: ReactLogo,
  },
  {
    name: "styled components",
    icon: StyledComponentsLogo,
  },
  {
    name: "Material UI",
    icon: MUILogo,
  },
  {
    name: "Tailwindcss",
    icon: TailwindLogo,
  },
  {
    name: "Git",
    icon: GitLogo,
  },
  {
    name: "VS Code",
    icon: VSCodeLogo,
  },
  {
    name: "Office",
    icon: OfficeLogo,
  },
  {
    name: "Python",
    icon: PythonLogo,
  },
  {
    name: "C++",
    icon: CppLogo,
  },
];

export default function Skills() {
  return (
    <section className="flex flex-col mb-32">
      <Element name="skills" />
      <div className="flex flex-row items-center mb-10 ml-4">
        <span className="h-px w-10 bg-gray-500 mr-4"></span>
        <h2 className="text-3xl uppercase">Skills</h2>
      </div>
      <div className="w-10/12 m-auto lg:m-0 lg:w-full bg-white p-10 rounded-2xl border-purple-400 border-2">
        <div className="m-auto lg:w-10/12 flex flex-row flex-wrap justify-around gap-x-2">
          {skills.map((e, idx) => (
            <Skill
              key={idx}
              name={e.name}
              icon={e.icon.src}
              divClass="w-20 h-20 lg:w-24 lg:h-24 lg:gap-y-2 gap-x-4 p-2 lg:m-2 border-2"
              iconClass="lg:w-10 lg:h-10 w-8 h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
