"use client";
import Project_in_page from "@components/Project_in_page";
import Sidebar from "@components/Sidebar";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

interface Project {
  description: string;
  img: string;
  landscape: boolean;
  link: string;
  page_shown: string;
  project_name: string;
  presentation: string[];
  utils_data: string[];
}

function Projects_Page() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [projectshowed, setprojectshowed] = useState(0);

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch("/api/project");
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    };
    getProjects();
  }, []);

  function HandleCLick(index: number) {
    setprojectshowed(index);
  }
  if (!projects)
    return (
      <div className="mt-10 flex justify-center">
        <PropagateLoader
          color={"white"}
          loading={projects === null}
          size={30}
        />
      </div>
    );
  return (
    <div className="flex lg:flex-row lg:gap-0 gap-16 flex-col justify-between relative lg:py-32 py-10 pl-8 pr-1">
      <Sidebar
        Projects={projects.map((project) => project.project_name)}
        project_index={projectshowed}
        changeprojectshowed={HandleCLick}
      />
      <Project_in_page content={projects[projectshowed]} />
    </div>
  );
}

export default Projects_Page;
