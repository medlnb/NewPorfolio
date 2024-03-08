// import "./Project.css";
interface props {
  isfirst: boolean;
  fun: any;
  projectname: string;
  content: string[];
  link: string;
}

function Project({ isfirst, fun, projectname, content, link }: props) {
  let presentation = `\n  */
  `;
  for (let index = content.length - 1; index >= 0; index--) {
    presentation = "\n * " + content[index] + presentation;
  }

  return (
    <div
      className={`lg:text-base text-sm  border rounded-md p-6 transform left-1/2 -translate-x-1/2  ${
        isfirst
          ? "z-100 slide-out-animation relative"
          : "z-10 slide-in-animation absolute "
      }`}
      style={{ background: "#0d1117", borderColor: "#212d3a" }}
    >
      <div
        onClick={() => {
          if (isfirst) fun();
        }}
        className="whitespace-nowrap flex justify-between items-center"
      >
        <h1 style={{ color: "#ab873f" }}>{projectname}</h1>
        <h2 style={{ color: "#353e4a" }}>07/23</h2>
      </div>
      <div
        className="w-full rounded-mdd p-4 mt-3 border light-shadow"
        style={{ background: "#0a0d12", borderColor: "#070a0f" }}
      >
        <div>
          <p style={{ color: "#747c85" }}>{"/**"}</p>
          <div className="ml-2 whitespace-pre-wrap relative margin-left">
            <p>{presentation}</p>
          </div>
        </div>
        <button
          className="w-full mb-4 text-start py-1 px-4 bg-yellow-700 hover:bg-yellow-600"
          style={{ color: "#282319" }}
        >
          <a target="_blank" href={link}>
            {projectname == "My Portfolio" ? "resume.get()" : "see the project"}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Project;
