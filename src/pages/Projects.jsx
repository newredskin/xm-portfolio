import { useEffect, useState } from "react";

import projectData from "../data/projectData";
import Footer from "../ui/Footer";
import SortingMenu from "../features/projects/SortingMenu";
import Tag from "../ui/Tag";
import BackToTopButton from "../ui/BackToTopButton";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [activeSort, setActiveSort] = useState(() => {
    const storeActiveSort = localStorage.getItem("projectActiveSort");
    if (!storeActiveSort) return "all";
    return storeActiveSort;
  });
  const [activeProjectList, setActiveProjectList] = useState(projectData);
  const navigate = useNavigate();

  useEffect(
    function () {
      setActiveProjectList(
        activeSort === "all"
          ? projectData
          : projectData.filter((project) =>
              project.category.includes(activeSort),
            ),
      );
      localStorage.setItem("projectActiveSort", activeSort);
    },
    [activeSort],
  );

  function handleSort(sortOption) {
    setActiveSort(sortOption);
  }

  function handleDirectToDetail(project) {
    navigate(`/projects/${project.name}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="min-h-screen w-screen bg-gradient-to-b from-orange-50 to-orange-100 to-10% dark:from-gray-950 dark:via-gray-900 dark:via-60% dark:to-gray-800 dark:to-90%">
        <div className="mx-8 flex flex-col items-center justify-center p-1 text-teal-950 dark:text-orange-50/90 sm:mx-14 md:mx-28 lg:mx-56 xl:mx-64">
          <div className="max-w-full pb-6 lg:max-w-[1280px]">
            <h1 className="mb-10 pt-28 text-4xl font-bold">Projects.</h1>
            <div className="mb-5 mt-20 overflow-x-auto">
              <SortingMenu activeSort={activeSort} handleSort={handleSort} />
            </div>
            <div className="mb-6 columns-1 space-y-4 xl:columns-2">
              {activeProjectList.map((project) => {
                const isVideo = project.images[0].slice(-3) === "mp4";

                return (
                  <div
                    className="group relative w-full rounded-2xl bg-gradient-to-t from-stone-100/70 to-transparent shadow-md"
                    key={project.name}
                  >
                    {isVideo ? (
                      <div className="opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0">
                        <video
                          className="rounded-2xl object-cover"
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
                      <div className="opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0">
                        <img
                          src={project.images[0]}
                          alt={`images of ${project.title}`}
                          className="rounded-2xl object-cover"
                        />
                      </div>
                    )}
                    <div className="duration-600 absolute inset-0 rounded-2xl bg-gradient-to-t from-stone-950 from-50% to-transparent opacity-0 transition-all group-hover:opacity-50" />
                    <div className="absolute inset-4 flex flex-col justify-end md:inset-6 2xl:inset-12">
                      <h3 className="text-md ml-1 font-bold text-orange-100 opacity-0 transition-all duration-500 group-hover:opacity-100 dark:text-orange-50/90 sm:text-2xl md:text-lg">
                        {project.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {project.tools[0].map((tool) => (
                          <Tag
                            key={`${project.name} ${tool}`}
                            color="bg-teal-900/80 dark:bg-gray-800/80"
                          >
                            {tool}
                          </Tag>
                        ))}
                        {project.tools[1].map((tool) => (
                          <Tag
                            key={`${project.name} ${tool}`}
                            color="bg-teal-700/90 dark:bg-gray-700/70"
                          >
                            {tool}
                          </Tag>
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex justify-end text-stone-200">
                      <ArrowUpRightIcon
                        className="h-8 w-8 rounded-tr-2xl bg-red-700/90 p-2 opacity-0 transition-opacity duration-300 hover:cursor-pointer hover:bg-red-600 group-hover:opacity-100"
                        onClick={() => handleDirectToDetail(project)}
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
