import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Cog6ToothIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

import Introduction from "../features/about/Introduction";
import SkillChart from "../features/about/SkillChart";
import CareerPath from "../ui/CareerPath";
import Footer from "../ui/Footer";
import SkillTag from "../ui/SkillTag";
import EducationList from "../features/about/EducationList";
import Paragraph from "../features/about/Paragraph";
import BackToTopButton from "../ui/BackToTopButton";
import { useNavigate } from "react-router-dom";

const codingSkills = [
  { name: "JavaScript", color: "bg-red-700" },
  { name: "TypeScript", color: "bg-red-700" },
  { name: "Node.js", color: "bg-red-700" },
  { name: "Java", color: "bg-red-700" },
  { name: "Python", color: "bg-red-700" },
  { name: "HTML&CSS", color: "bg-red-700" },
  { name: "React", color: "bg-red-700" },
  { name: "Git", color: "bg-red-700" },
  { name: "Express", color: "bg-red-700" },
  { name: "MangoDB", color: "bg-red-700" },
  { name: "MySQL", color: "bg-red-700" },
];

const laSkills = [
  { name: "Photoshop", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "Illustrator", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "InDesign", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "Premiere Pro", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "After Effects", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "AutoCAD", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "SketchUp", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "Rhino", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "Processing", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "Figma", color: "bg-teal-950/80 dark:bg-gray-900/80" },
  { name: "Procreate", color: "bg-teal-950/80 dark:bg-gray-900/80" },
];

function About() {
  const navigate = useNavigate();

  useEffect(function () {
    AOS.init();
    AOS.refresh();
  }, []);

  function handleProjectClick() {
    localStorage.setItem("projectActiveSort", "all");
    navigate("/projects");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="min-h-screen w-screen bg-gradient-to-b from-orange-50 to-orange-100 to-10% dark:from-gray-950 dark:via-gray-900 dark:via-60% dark:to-gray-800 dark:to-90%">
        <div className="mx-8 flex flex-col items-center justify-center overflow-hidden text-teal-950 dark:text-orange-50 sm:mx-14 md:mx-28 xl:mx-48 2xl:mx-56">
          <h1 className="mb-10 pt-28 text-4xl font-bold">
            I&apos;m <span className="text-red-700">Xiye</span>.
          </h1>
          <div className="pb-6 text-sm md:text-base lg:max-w-[1280px]">
            <Introduction />
            <div data-aos="fade-right" className="mb-12">
              <CareerPath />
            </div>
            <Paragraph />

            <div
              data-aos="fade-up"
              className="mt-10 grid rounded-3xl bg-orange-50/50 shadow-lg shadow-teal-700/20 dark:bg-gray-700/20 dark:shadow-orange-50/5 lg:grid-cols-5"
            >
              <div className="col-span-5 flex flex-col items-center justify-center dark:text-orange-50/90 2xl:col-span-2 2xl:col-start-1 2xl:pl-10">
                <h2 className="py-5 text-[24px] font-bold underline decoration-red-700 decoration-4 underline-offset-8">
                  Toolset
                </h2>
                <div className="mx-6 mb-10 mt-3 flex flex-col gap-6 lg:mx-10">
                  <div className="flex-cols ml-5 text-red-700">
                    <div className="mb-3 flex items-center gap-1">
                      <Cog6ToothIcon className="h-6 w-6" />
                      <h4 className="font-bold">Development</h4>
                    </div>
                    <div className="flex flex-wrap items-start justify-start gap-2">
                      {codingSkills.map((coding) => (
                        <SkillTag color={coding.color} key={coding.name}>
                          {coding.name}
                        </SkillTag>
                      ))}
                    </div>
                  </div>
                  <div className="flex-cols ml-5">
                    <div className="mb-3 flex items-center gap-1">
                      <PencilSquareIcon className="h-6 w-6" />
                      <h4 className="font-bold">Design</h4>
                    </div>
                    <div className="flex flex-wrap items-start justify-start gap-2">
                      {laSkills.map((la) => (
                        <SkillTag color={la.color} key={la.name}>
                          {la.name}
                        </SkillTag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden items-center justify-center 2xl:col-span-3 2xl:col-start-3 2xl:flex">
                <SkillChart />
              </div>
            </div>
            <div data-aos="fade-left" className="px-1">
              <EducationList />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="flex items-center justify-end px-1"
            >
              {" "}
              <button
                className="my-12 flex animate-bounce items-center justify-center rounded-xl border-[1px] border-red-700 p-3 text-red-700 transition-all duration-300 hover:bg-red-700 hover:text-stone-100 dark:border-orange-50 dark:text-orange-50/90"
                onClick={handleProjectClick}
              >
                Check Projects <span className="ml-1 text-2xl">&#x2192;</span>
              </button>
            </div>
            <BackToTopButton />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
