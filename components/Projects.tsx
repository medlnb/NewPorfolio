"use client";
import { useEffect, useState } from "react";
import ProjectInPage from "@components/ProjectInPage";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

interface ProjectType {
  _id: string;
  title: string;
  utils_data: string[];
  description: string;
  demo?: string;
  repository?: string;
  img: string;
  presentation: string[];
}
function Projects() {
  const [ProjectsData, setProjectsData] = useState<ProjectType[] | null>(null);
  useEffect(() => {
    const getchProjectsData = async () => {
      const response = await fetch("/api/project/10");
      if (response.ok) {
        const data = await response.json();
        setProjectsData(data);
      }
    };
    getchProjectsData();
  }, []);
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {ProjectsData ? (
        ProjectsData.map((project, index) => (
          <ProjectInPage key={project._id} {...{ ...project, index }} />
        ))
      ) : (
        <div className="bg-white text-center text-black rounded-md p-4 relative overflow-hidden transition duration-200 hover:bg-black hover:text-white hover:outline hover:outline-1 ">
          <div className="text-content relative z-10">
            <h1 className="loading--background rounded-md w-32 mx-auto h-5"></h1>
            <h1 className="loading--background rounded-md w-52 my-2 mx-auto h-5"></h1>
            <div className="text-gray-600 text-xs my-4">
              <h1 className="loading--background rounded-md  my-1 mx-auto h-4"></h1>
              <h1 className="loading--background rounded-md  my-1 mx-auto h-4"></h1>
              <h1 className="loading--background rounded-md w-36 my-1 h-4"></h1>
            </div>
            <div className="flex justify-center items-center gap-6">
              <IoLogoGithub />
              <FaExternalLinkAlt />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
