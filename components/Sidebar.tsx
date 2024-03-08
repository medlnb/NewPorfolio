interface props {
  Projects: string[];
  project_index: number;
  changeprojectshowed: any;
}
function Sidebar({ Projects, project_index, changeprojectshowed }: props) {
  const sidebar = Projects.map((element, index) => {
    return (
      <li key={element}>
        <button
          className={`bg-none p-2 text-gray-400 font-medium relative whitespace-nowrap transition-padding duration-300 hover:p-4 hover:text-xl margin-left-bold ${
            index == project_index
              ? "text-xl text-yellow-800 p-4 margin-left-bold-selected"
              : "text-lg "
          }`}
          onClick={() => changeprojectshowed(index)}
        >
          {element}
        </button>
      </li>
    );
  });
  return (
    <div className="w-52  h-full">
      <ul className="relative ">{sidebar}</ul>
    </div>
  );
}

export default Sidebar;
