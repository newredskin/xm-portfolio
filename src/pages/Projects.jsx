import { useState } from "react";

import projectData from "../features/projects/projectData";
import Footer from "../ui/Footer";
import SortingMenu from "../features/projects/SortingMenu";
import Tag from "../ui/Tag";

function Projects() {
  const [activeSort, setActiveSort] = useState("all");
  const [activeProjectList, setActiveProjectList] = useState(projectData);

  function handleSort(sortOption) {
    setActiveSort(sortOption);
  }

  return (
    <>
      <div className="w-screen h-screen bg-orange-50/90 overflow-auto">
        <div className="text-teal-900 mx-16 md:mx-28 lg:mx-64 p-1 flex flex-col justify-center items-center">
          <div className="pb-6 lg:max-w-[1280px] max-w-full">
            <h1 className="font-bold text-4xl mb-10 pt-28">Projects.</h1>
            <div className="overflow-auto">
              <SortingMenu activeSort={activeSort} handleSort={handleSort} />
            </div>
            <div className="columns-1 md:columns-2">
              {activeProjectList.map((project) => {
                return (
                  <div className="rounded-2xl cursor-pointer relative group">
                    <img
                      key={project.name}
                      src={project.images[0]}
                      alt=""
                      className="mb-4 rounded-2xl shadow-md object-cover group-hover:opacity-100"
                    />
                    <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-0 group-hover:opacity-50  transition-all duration-500"></div>
                    <div className="absolute inset-6 md:inset-10 flex flex-col justify-end">
                      <h3 className="text-stone-100 mb-3 text-md sm:text-2xl md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 font-bold">
                        {project.title}
                      </h3>
                      <p className="text-[9px] sm:text-xs text-stone-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        {project.introduction}
                      </p>
                      <div className="flex flex-wrap mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        {project.tools.map((tool) => (
                          <Tag>{tool}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;
