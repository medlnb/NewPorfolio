// import Image from "next/image";
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

function Project_in_page({ content }: any) {
  const utils = content.utils_data.map((language: any) => {
    return <li key={language}>{language}</li>;
  });
  return (
    <>
      <div className="flex justify-center items-center flex-1 h-96">
        <img
          src={content.img}
          alt="project picture"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="text-end">
        <h4 style={{ color: "#c09f5e" }}>{content.page_shown}</h4>
        <h2 className="text-3xl font-medium">{content.project_name}</h2>
        <div className="relative h-60 p-4 w-96" >
          <div
            className="shadow-md absolute max-w-full right-0 h-full py-16 px-8"
            style={{ background: "#010409"}}
          >
            <p className="text-start">{content.description}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4 text-gray-500 mt-3 list-none">
          {utils}
        </div>
      </div>
    </>
  );
}

export default Project_in_page;
