import React from "react";
import { useTranslation } from "next-i18next";
import Skill from "./skill";
import { useScrollReveal } from "../../hooks/useScrollReveal";

import HTML5Logo from "../../src/assets/html5Logo.svg";
import CSS3Logo from "../../src/assets/css3Logo.svg";
import JSLogo from "../../src/assets/javascriptLogo.svg";
import ReactLogo from "../../src/assets/reactLogo.svg";
import StyledComponentsLogo from "../../src/assets/styledLogo.svg";
import MUILogo from "../../src/assets/materialuiLogo.svg";
import TailwindLogo from "../../src/assets/tailwindcssLogo.svg";
import GitLogo from "../../src/assets/gitLogo.svg";
import VSCodeLogo from "../../src/assets/vscodeLogo.svg";
import PythonLogo from "../../src/assets/pythonLogo.svg";
import CppLogo from "../../src/assets/cppLogo.svg";
import NextjsLogo from "../../src/assets/nextjs.svg";
import GatsbyLogo from "../../src/assets/gatsby.svg";
import TSLogo from "../../src/assets/typescript.svg";
import AngularLogo from "../../src/assets/angularLogo.svg";
import PHPLogo from "../../src/assets/phpLogo.svg";
import LaravelLogo from "../../src/assets/laravelLogo.svg";
import DrupalLogo from "../../src/assets/drupalLogo.svg";
import JestLogo from "../../src/assets/jest.svg";
import DockerLogo from "../../src/assets/docker.svg";
import PostgreSQLLogo from "../../src/assets/postgresql.svg";

export default function Skills() {
  const { t } = useTranslation();
  const [sectionRef, isVisible] = useScrollReveal();

  const skillCategories = [
    {
      title: t("skills.frontend"),
      items: [
        { name: "React", icon: ReactLogo },
        { name: "Next.js", icon: NextjsLogo },
        { name: "TypeScript", icon: TSLogo },
        { name: "Angular", icon: AngularLogo },
        { name: "JavaScript", icon: JSLogo },
        { name: "Tailwind CSS", icon: TailwindLogo },
        { name: "HTML5", icon: HTML5Logo },
        { name: "CSS3", icon: CSS3Logo },
        { name: "Styled Components", icon: StyledComponentsLogo },
        { name: "Material UI", icon: MUILogo },
        { name: "Gatsby", icon: GatsbyLogo },
      ],
    },
    {
      title: t("skills.backend"),
      items: [
        { name: "PHP", icon: PHPLogo },
        { name: "Laravel", icon: LaravelLogo },
        { name: "Drupal", icon: DrupalLogo },
        { name: "PostgreSQL", icon: PostgreSQLLogo },
        { name: "Python", icon: PythonLogo },
        { name: "C++", icon: CppLogo },
      ],
    },
    {
      title: t("skills.devops"),
      items: [
        { name: "Docker", icon: DockerLogo },
        { name: "Jest", icon: JestLogo },
        { name: "Git", icon: GitLogo },
        { name: "VS Code", icon: VSCodeLogo },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`scroll-mt-24 mb-28 px-4 transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="h-0.5 w-8 bg-purple-300 rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {t("skills.label")}
        </h2>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-10 shadow-xl space-y-10">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-purple-300 dark:text-purple-200">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {category.items.map((skill) => (
                <Skill key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
