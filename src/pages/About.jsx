import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Introduction from "../features/about/Introduction";
import SkillChart from "../features/about/SkillChart";
import CareerPath from "../ui/CareerPath";
import Footer from "../ui/Footer";
import SkillTag from "../ui/SkillTag";
import EducationList from "../features/about/EducationList";
import Paragraph from "../features/about/Paragraph";
import BackToTopButton from "../ui/BackToTopButton";

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
  { name: "Adobe", color: "bg-teal-950/80" },
  { name: "AutoCAD", color: "bg-teal-950/80" },
  { name: "SketchUp", color: "bg-teal-950/80" },
  { name: "Rhino", color: "bg-teal-950/80" },
  { name: "Lumion", color: "bg-teal-950/80" },
  { name: "Processing", color: "bg-teal-950/80" },
  { name: "Sketch", color: "bg-teal-950/80" },
];

function About() {
  useEffect(function () {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="w-screen min-h-screen bg-orange-50/80">
        <div className="text-teal-900 mx-16 flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl mb-10 pt-28">
            I&apos;m <span className="text-red-700">Xiye</span>.
          </h1>
          <div className=" pb-6 lg:max-w-[1280px]">
            <Introduction />
            <div data-aos="fade-right" className="mb-12">
              <CareerPath />
            </div>
            <Paragraph />

            <div
              data-aos="fade-up"
              className="mt-10 grid md:grid-cols-5 bg-orange-50/30 rounded-3xl"
            >
              <div className="md:col-start-1 md:col-span-2 flex flex-col justify-center items-center md:pl-10">
                <h2 className="font-bold text-[24px] py-5 underline underline-offset-8 decoration-red-700 decoration-4">
                  My Skill Set
                </h2>
                <div className="flex flex-col justify-center items-center mt-3 mb-8 gap-6 md:mx-10 mx-6">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {codingSkills.map((coding) => (
                      <SkillTag color={coding.color} key={coding.name}>
                        {coding.name}
                      </SkillTag>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {laSkills.map((la) => (
                      <SkillTag color={la.color} key={la.name}>
                        {la.name}
                      </SkillTag>
                    ))}
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
            <BackToTopButton />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
