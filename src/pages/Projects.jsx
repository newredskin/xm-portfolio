import { useEffect, useState } from "react";

import projectData from "../data/projectData";
import Footer from "../ui/Footer";
import SortingMenu from "../features/projects/SortingMenu";
import Tag from "../ui/Tag";
import BackToTopButton from "../ui/BackToTopButton";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [activeSort, setActiveSort] = useState("web-dev");
  const [activeProjectList, setActiveProjectList] = useState(projectData);
  const navigate = useNavigate();

  useEffect(
    function () {
      setActiveProjectList(
        activeSort === "all"
          ? projectData
          : projectData.filter((project) =>
              project.category.includes(activeSort)
            )
      );
    },
    [activeSort]
  );

  function handleSort(sortOption) {
    setActiveSort(sortOption);
  }

  return (
    <>
      <div className="w-screen min-h-screen bg-orange-50/90 dark:bg-gray-800">
        <div className="text-teal-900 dark:text-stone-300 mx-8 sm:mx-14 md:mx-28 lg:mx-56 xl:mx-64 p-1 flex flex-col justify-center items-center">
          <div className="pb-6 lg:max-w-[1280px] max-w-full">
            <h1 className="font-bold text-4xl mb-10 pt-28">Projects.</h1>
            <div className="overflow-x-auto mb-5 mt-20">
              <SortingMenu activeSort={activeSort} handleSort={handleSort} />
            </div>
            <div className="columns-1 xl:columns-2 space-y-4 mb-6">
              {activeProjectList.map((project) => {
                const isVideo = project.images[0].slice(-3) === "mp4";

                return (
                  <div className="bg-gradient-to-t from-stone-100/70 to-transparent relative group shadow-md rounded-2xl w-full">
                    {isVideo ? (
                      <div className="grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0">
                        <video
                          className="rounded-2xl object-cover"
                          key={project.name}
                          autoPlay
                          loop
                          muted
                          disablePictureInPicture
                          playsInline
                        >
                          <source src={project.images[0]} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      <div className="grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0">
                        <img
                          key={project.name}
                          src={project.images[0]}
                          alt={`images of ${project.title}`}
                          className="rounded-2xl object-cover"
                        />
                      </div>
                    )}
                    <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-stone-950 from-60% to-transparent opacity-0 group-hover:opacity-50 transition-all duration-500" />
                    <div className="absolute inset-4 md:inset-6 2xl:inset-12 flex flex-col justify-end">
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
                    <div className="absolute inset-0 flex justify-end text-stone-200">
                      <ArrowUpRightIcon
                        className="h-8 w-8 hover:cursor-pointer bg-red-700/90 hover:bg-red-600 rounded-tr-2xl p-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                        onClick={() => navigate(`/projects/${project.name}`)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <BackToTopButton />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;
