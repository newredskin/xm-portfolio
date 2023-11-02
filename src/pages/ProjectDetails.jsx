import { useNavigate, useParams } from "react-router-dom";

import projectData from "../data/projectData";
import Footer from "../ui/Footer";
import ProjectDetailLayout from "../features/projects/ProjectDetailLayout";
import Tag from "../ui/Tag";

function ProjectDetails() {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const project = projectData.filter(
    (project) => project.name === projectName
  )[0];

  return (
    <>
      <div className="w-screen min-h-screen bg-orange-50/90 dark:bg-gray-800">
        <div className="text-teal-900 dark:text-stone-300 mx-8 sm:mx-14 md:mx-28 2xl:mx-48 p-1 flex flex-col justify-center items-center">
          <div className="pb-6 lg:max-w-[1536px] max-w-full">
            <div className="mb-12 pt-28">
              <h1 className="font-bold text-3xl">{project.title}</h1>
              <div className="flex mt-3 opacity-80">
                {project.tools.map((tool) => (
                  <Tag>{tool}</Tag>
                ))}
              </div>
            </div>

            <ProjectDetailLayout project={project} />

            <button
              className="underline rounded-xl flex items-center justify-center text-sm dark:text-stone-400 dark:hover:text-red-700 mt-12 animate-bounce hover:text-red-700"
              onClick={() => navigate(-1)}
            >
              <span className="decoration-0">&#x2190;</span>Back to Projects
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;
