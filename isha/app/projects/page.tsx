"use client";

import { PageHeader } from "@/components/page-header";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { DATA } from "@/data";

const ProjectsPage = () => {
  const allProjects = DATA.projects.work;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader texts={DATA.morphingTexts.projects} />

      <ProjectsGrid projects={allProjects} />
    </div>
  );
};

export default ProjectsPage;
