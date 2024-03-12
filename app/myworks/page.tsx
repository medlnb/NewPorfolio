import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbFileTypeXml } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import Projects from "@components/Projects";

interface skill {
  title: string;
  persantage: number;
  icon: any;
}

function page() {
  const skills: skill[] = [
    {
      title: "React",
      persantage: 70,
      icon: <FaReact />,
    },
    {
      title: "Next",
      persantage: 80,
      icon: <SiNextdotjs />,
    },
    {
      title: "JavaScript",
      persantage: 70,
      icon: <IoLogoJavascript />,
    },
    {
      title: "TypeScript",
      persantage: 80,
      icon: <BiLogoTypescript />,
    },
    {
      title: "Css",
      persantage: 90,
      icon: <IoLogoCss3 />,
    },
    {
      title: "TailWind",
      persantage: 80,
      icon: <SiTailwindcss />,
    },
    {
      title: "Html",
      persantage: 90,
      icon: <FaHtml5 />,
    },
    {
      title: "Xml",
      persantage: 80,
      icon: <TbFileTypeXml />,
    },
    {
      title: "Java",
      persantage: 70,
      icon: <FaJava />,
    },
    {
      title: "Python",
      persantage: 70,
      icon: <FaPython />,
    },
    {
      title: "C",
      persantage: 60,
      icon: <h1>C</h1>,
    },
    {
      title: "MySql",
      persantage: 80,
      icon: <SiMysql />,
    },

    {
      title: "Mongodb",
      persantage: 80,
      icon: <BiLogoMongodb />,
    },
  ];
  return (
    <div className="mt-6 lg:p-8 lg:px-32 px-4 p-2 text-xs lg:text-base">
      <h1 className="text-center text-3xl font-medium  mb-10">
        4 Years of Skill Mastery
      </h1>
      <div className="grid lg:grid-cols-2  gap-4">
        {skills.map((skill) => (
          <div key={skill.title} className="flex  gap-2">
            <div className="w-40 gap-4 flex items-center">
              <div className="text-3xl">{skill.icon}</div>
              <p>{skill.title}</p>
            </div>
            <div className="h-1 w-full">
              <p className="text-xs" style={{ color: "#4d596a" }}>
                {skill.persantage}%
              </p>
              <div
                style={{ width: `${skill.persantage}%` }}
                className="h-full rounded-xl bg-blue-800"
              ></div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-center text-3xl font-medium  my-10">
        Using The Skills on Top You Can Make These
      </h1>
      <Projects />
    </div>
  );
}

export default page;
