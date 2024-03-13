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
  icon: any;
}

function Page() {
  const skills: { type: string; data: skill[] }[] = [
    {
      type: "Web",
      data: [
        {
          title: "React",
          icon: <FaReact />,
        },
        {
          title: "Next",

          icon: <SiNextdotjs />,
        },
        {
          title: "JavaScript",
          icon: <IoLogoJavascript />,
        },
        {
          title: "TypeScript",

          icon: <BiLogoTypescript />,
        },
        {
          title: "Css",
          icon: <IoLogoCss3 />,
        },
        {
          title: "TailWind",

          icon: <SiTailwindcss />,
        },
        {
          title: "Html",
          icon: <FaHtml5 />,
        },
      ],
    },
    {
      type: "Android",
      data: [
        {
          title: "Xml",
          icon: <TbFileTypeXml />,
        },
        {
          title: "Java",
          icon: <FaJava />,
        },
      ],
    },
    {
      type: "Data Base",
      data: [
        {
          title: "MySql",
          icon: <SiMysql />,
        },

        {
          title: "Mongodb",
          icon: <BiLogoMongodb />,
        },
      ],
    },
    {
      type: "others",
      data: [
        {
          title: "Python",
          icon: <FaPython />,
        },
        {
          title: "C",
          icon: <h1>C</h1>,
        },
      ],
    },
  ];
  return (
    <div className="mt-6 lg:p-8 lg:px-32 px-4 p-2 text-xs lg:text-base">
      <h1 className="text-center text-3xl font-medium  mb-10">
        4 Years of Skill Mastery
      </h1>
      <div className="grid md:grid-cols-2 gap-3">
        {skills.map((skill) => (
          <SkillContainer
            key={skill.type}
            title={skill.type}
            skillData={skill.data}
          />
        ))}
      </div>
      <h1 className="text-center text-3xl font-medium  my-10">
        Using The Skills on Top You Can Make These
      </h1>
      <Projects />
    </div>
  );
}

export default Page;

const SkillContainer = ({
  skillData,
  title,
}: {
  skillData: skill[];
  title: string;
}) => {
  return (
    <div className="border border-gray-600 rounded-md flex flex-wrap justify-center items-center p-4 gap-4 relative">
      {skillData.map((skill) => (
        <div key={skill.title} className="flex  gap-2">
          <div className="gap-2 flex flex-col items-center">
            <div className="text-3xl">{skill.icon}</div>
            <p>{skill.title}</p>
          </div>
        </div>
      ))}
      <p
        className="absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 lg:text-5xl text-3xl whitespace-nowrap -z-10"
        style={{ color: "rgb(69, 78, 92)" }}
      >
        {title}
      </p>
    </div>
  );
};
