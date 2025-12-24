"use client";

import { PageHeader } from "@/components/page-header";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { DATA } from "@/data";

const ProjectsPage = () => {
  const allProjects = DATA.projects.work;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
      <PageHeader texts={DATA.morphingTexts.projects} />
      
      <div className="mb-6 sm:mb-8 text-center px-4">
        <p className="text-foreground-600 text-base sm:text-lg">
          {DATA.projects.sectionDescription}
        </p>
      </div>

      <ProjectsGrid projects={allProjects} />
    </div>
  );
};

export default ProjectsPage;
