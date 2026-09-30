import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import Project from "./project";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { projectsData } from "./projectsData";

export default function Projects() {
  const { t } = useTranslation();
  const [sectionRef, isVisible] = useScrollReveal();

  const { featuredProject, otherProjects } = useMemo(() => {
    // 1. Featured project é explicitamente o que possui featured: true (ou o primeiro como fallback)
    const featured = projectsData.find((p) => p.featured) || projectsData[0];

    // 2. Todos os demais projetos são ordenados por data decrescente (mais recente primeiro)
    const others = projectsData
      .filter((p) => p.id !== featured.id)
      .sort((a, b) => b.date.localeCompare(a.date));

    const mapProject = (p) => ({
      ...p,
      name: t(`projects.items.${p.id}.name`),
      position: t(`projects.items.${p.id}.position`),
      description: t(`projects.items.${p.id}.description`),
    });

    return {
      featuredProject: featured ? mapProject(featured) : null,
      otherProjects: others.map(mapProject),
    };
  }, [t]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`scroll-mt-24 mb-28 px-4 transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="h-0.5 w-8 bg-purple-300 rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {t("projects.label")}
        </h2>
      </div>

      {featuredProject && (
        <Project
          key={featuredProject.id}
          name={featuredProject.name}
          position={featuredProject.position}
          description={featuredProject.description}
          skills={featuredProject.skills}
          image={featuredProject.image}
          linkLive={featuredProject.linkLive}
          linkRepo={featuredProject.linkRepo}
          featured={true}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((p) => (
          <Project
            key={p.id}
            name={p.name}
            position={p.position}
            description={p.description}
            skills={p.skills}
            image={p.image}
            linkLive={p.linkLive}
            linkRepo={p.linkRepo}
          />
        ))}
      </div>
    </section>
  );
}
