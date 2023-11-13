import { useNavigate, useParams } from "react-router-dom";

import projectData from "../data/projectData";
import Footer from "../ui/Footer";
import Tag from "../ui/Tag";
import BackToTopButton from "../ui/BackToTopButton";

import ProjectDetailLv from "../features/projects/ProjectDetailLv";
import ProjectDetailPhotography from "../features/projects/ProjectDetailPhotography";
import ProjectDetailNLSD from "../features/projects/ProjectDetailNLSD";
import ProjectDetailSketches from "../features/projects/ProjectDetailSketches";
import ProjectDetailResidential from "../features/projects/ProjectDetailResidential";
import ProjectDetailCommercial from "../features/projects/ProjectDetailCommercial";
import ProjectDetailIdentifiers from "../features/projects/ProjectDetailIdentifiers";
import ProjectDetailGraphic from "../features/projects/ProjectDetailGraphic";
import ProjectDetailArt from "../features/projects/ProjectDetailArt";
import ProjectDetailAAVS from "../features/projects/ProjectDetailAAVS";

function ProjectDetails() {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const project = projectData.filter(
    (project) => project.name === projectName,
  )[0];

  const isLv = project.name === "lv";
  const isPhotography = project.name === "photography";
  const isNLSD = project.name === "nlsd";
  const isSketches = project.name === "sketches";
  const isResidential = project.name === "residential";
  const isCommercial = project.name === "commercial";
  const isIdentifiers = project.name === "identifiers";
  const isGraphic = project.name === "graphic-design";
  const isArt = project.name === "art";
  const isAAVS = project.name === "aavs-workshop";

  return (
    <>
      <div className="min-h-screen w-screen bg-gradient-to-b from-orange-50 to-orange-100 to-10% dark:from-gray-950 dark:via-gray-900 dark:via-60% dark:to-gray-800 dark:to-90%">
        <div className="mx-9 flex flex-col items-center justify-center overflow-hidden p-1 text-teal-950 dark:text-orange-50/90 sm:mx-14 md:mx-28 2xl:mx-48">
          <div className="max-w-full pb-6 lg:max-w-[1536px]">
            <div className="mb-12 pt-28">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <div className="mt-3 flex flex-wrap opacity-80">
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

            {isLv && <ProjectDetailLv project={project} />}
            {isPhotography && <ProjectDetailPhotography project={project} />}
            {isNLSD && <ProjectDetailNLSD project={project} />}
            {isSketches && <ProjectDetailSketches project={project} />}
            {isResidential && <ProjectDetailResidential project={project} />}
            {isCommercial && <ProjectDetailCommercial project={project} />}
            {isIdentifiers && <ProjectDetailIdentifiers project={project} />}
            {isGraphic && <ProjectDetailGraphic project={project} />}
            {isArt && <ProjectDetailArt project={project} />}
            {isAAVS && <ProjectDetailAAVS project={project} />}

            <button
              className="mt-12 flex animate-bounce items-center justify-center rounded-xl text-[0.9rem] text-teal-900 underline hover:text-red-700 dark:text-orange-50/70 dark:hover:text-red-700 lg:text-lg"
              onClick={() => {
                navigate(-1);
                setTimeout(
                  () => window.scrollTo({ top: 0, behavior: "smooth" }),
                  50,
                );
              }}
            >
              <span className="decoration-0">&#x2190;</span>Back to Projects
            </button>
            <div className="mt-8">
              <BackToTopButton />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;
