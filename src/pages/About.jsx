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
  { name: "Photoshop", color: "bg-teal-950/80" },
  { name: "Illustrator", color: "bg-teal-950/80" },
  { name: "InDesign", color: "bg-teal-950/80" },
  { name: "Premiere Pro", color: "bg-teal-950/80" },
  { name: "After Effects", color: "bg-teal-950/80" },
  { name: "AutoCAD", color: "bg-teal-950/80" },
  { name: "SketchUp", color: "bg-teal-950/80" },
  { name: "Rhino", color: "bg-teal-950/80" },
  { name: "Processing", color: "bg-teal-950/80" },
  { name: "Figma", color: "bg-teal-950/80" },
  { name: "Procreate", color: "bg-teal-950/80" },
];

function About() {
  const navigate = useNavigate();

  useEffect(function () {
    AOS.init();
    AOS.refresh();
  }, []);

  function handleProjectClick() {
    navigate("/projects");
  }

  return (
    <>
      <div className="w-screen min-h-screen bg-orange-50/90">
        <div className="text-teal-900 mx-16 flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl mb-10 pt-28">
            I&apos;m <span className="text-red-700">Xiye</span>.
          </h1>
          <div className="pb-6 lg:max-w-[1280px]">
            <Introduction />
            <div data-aos="fade-right" className="mb-12">
              <CareerPath />
            </div>
            <Paragraph />

            <div
              data-aos="fade-up"
              className="mt-10 grid md:grid-cols-5 bg-orange-100/50 shadow-md rounded-3xl"
            >
              <div className="md:col-start-1 md:col-span-2 flex flex-col justify-center items-center md:pl-10">
                <h2 className="font-bold text-[24px] py-5 underline underline-offset-8 decoration-red-700 decoration-4">
                  Toolset
                </h2>
                <div className="flex flex-col mt-3 mb-10 gap-6 md:mx-10 mx-6">
                  <div className="text-red-700 flex-cols ml-5">
                    <div className="flex items-center gap-1 mb-3">
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
                    <div className="flex items-center gap-1 mb-3">
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
              <div className="md:col-start-3 md:col-span-3 flex justify-center items-center">
                <SkillChart />
              </div>
            </div>
            <div data-aos="fade-left">
              <EducationList />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="flex justify-end items-center"
            >
              {" "}
              <button
                className="hover:bg-red-700 hover:text-stone-100 text-red-700 my-12 p-3 animate-bounce outline outline-1 outline-red-700 transition-all duration-300 rounded-xl flex items-center justify-center"
                onClick={handleProjectClick}
              >
                Check Projects <span className="text-2xl ml-1">&#x2192;</span>
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
