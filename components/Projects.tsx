"use client";
import { useEffect, useState } from "react";
import ProjectInPage from "@components/ProjectInPage";

interface ProjectType {
  _id: string;
  title: string;
  utils_data: string[];
  description: string;
  demo: string;
  repository: string;
  img: string;
  presentation: string[];
}
function Projects() {
  const [ProjectsData, setProjectsData] = useState<ProjectType[] | null>(null);
  useEffect(() => {
    const getchProjectsData = async () => {
      const response = await fetch("/api/project");
      if (response.ok) {
        const data = await response.json();
        setProjectsData(data);
      }
    };
    getchProjectsData();
  }, []);
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {ProjectsData
        ? ProjectsData.map((project, index) => (
            <ProjectInPage key={project._id} {...{...project, index}} />
          ))
        : "loading"}
    </div>
  );
}

export default Projects;
