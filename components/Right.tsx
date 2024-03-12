"use client";
import { useEffect, useState } from "react";
import Project from "@components/Project";
import PropagateLoader from "react-spinners/PropagateLoader";

function Right() {
  const [projects, setProjects] = useState<
    | {
        title: string;
        presentation: string[];
        link: string;
      }[]
    | null
  >(null);
  const [first, setfirst] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch("/api/project/2");
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    };
    getProjects();
  }, []);
  if (!projects)
    return (
      <div className="flex-1 flex items-center justify-center">
        <PropagateLoader color={"white"} size={30} />
      </div>
    );

  return (
    <div className="flex-1 h-full w-full mx-auto relative pb-20">
      <Project
        isfirst={first}
        fun={() => setfirst((prev) => !prev)}
        title={projects[1].title}
        content={projects[1].presentation}
        link={projects[1].link}
      />
      <Project
        isfirst={!first}
        fun={() => setfirst((prev) => !prev)}
        title={projects[0].title}
        content={projects[0].presentation}
        link={projects[0].link}
      />
    </div>
  );
}

export default Right;
