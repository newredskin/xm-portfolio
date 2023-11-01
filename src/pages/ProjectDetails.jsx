import { useNavigate, useParams } from "react-router-dom";

import projectData from "../data/projectData";

function ProjectDetails() {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const project = projectData.filter(
    (project) => project.name === projectName
  )[0];

  return (
    <div>
      <div className="w-screen min-h-screen bg-orange-50/90 dark:bg-gray-800">
        <div className="text-teal-900 dark:text-stone-300 mx-16  md:mx-28 lg:mx-56 xl:mx-64 p-1 flex flex-col justify-center items-center">
          <div className="pb-6 lg:max-w-[1280px] max-w-full">
            <h1 className="font-bold text-4xl mb-10 pt-28">{project.name}</h1>
            <button
              className="underline rounded-xl flex items-center justify-center text-sm dark:text-stone-400"
              onClick={() => navigate(-1)}
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
