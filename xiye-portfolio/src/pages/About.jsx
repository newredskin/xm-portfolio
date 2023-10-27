import AOS from "aos";
import "aos/dist/aos.css";

import Introduction from "../features/about/Introduction";
import SkillChart from "../features/about/SkillChart";
import CareerPath from "../ui/CareerPath";
import Footer from "../ui/Footer";
import SkillTag from "../ui/SkillTag";
import { useEffect } from "react";
import EducationList from "../features/about/EducationList";

function About() {
  useEffect(function () {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="w-screen min-h-screen bg-orange-50/80">
        <div className="text-center text-teal-900 mx-16 flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl mb-10 pt-28">
            I&apos;m <span className="text-red-700">Xiye</span>.
          </h1>
          <div className=" pb-20 lg:max-w-[1280px]">
            <Introduction />
            <div data-aos="fade-right" className="mx-3 mb-20">
              <CareerPath />
            </div>
            <div
              data-aos="fade-up"
              className="mt-10 grid md:grid-cols-5 bg-orange-50/30 rounded-3xl"
            >
              <div className="md:col-start-1 md:col-span-2 flex flex-col justify-center items-center md:pl-10">
                <h2 className="font-bold text-[24px] py-5 underline underline-offset-8 decoration-red-700 decoration-4">
                  My Skill Set
                </h2>
                <div className="flex flex-col justify-center items-center mt-3 mb-6 gap-6 md:mx-10 mx-6">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <SkillTag color="bg-red-700">JavaScript</SkillTag>
                    <SkillTag color="bg-red-700">TypeScript</SkillTag>
                    <SkillTag color="bg-red-700">Node.js</SkillTag>
                    <SkillTag color="bg-red-700">Java</SkillTag>
                    <SkillTag color="bg-red-700">Python</SkillTag>
                    <SkillTag color="bg-red-700">HTML&CSS</SkillTag>
                    <SkillTag color="bg-red-700">React</SkillTag>
                    <SkillTag color="bg-red-700">Git</SkillTag>
                    <SkillTag color="bg-red-700">Express</SkillTag>
                    <SkillTag color="bg-red-700">MangoDB</SkillTag>
                    <SkillTag color="bg-red-700">MySQL</SkillTag>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <SkillTag color="bg-teal-950/80">Adobe</SkillTag>
                    <SkillTag color="bg-teal-950/80">AutoCAD</SkillTag>
                    <SkillTag color="bg-teal-950/80">SketchUp</SkillTag>
                    <SkillTag color="bg-teal-950/80">Rhino</SkillTag>
                    <SkillTag color="bg-teal-950/80">Lumion</SkillTag>
                    <SkillTag color="bg-teal-950/80">Sketch</SkillTag>
                    <SkillTag color="bg-teal-950/80">Processing</SkillTag>
                  </div>
                </div>
              </div>
              <div className="md:col-start-3 md:col-span-3 flex justify-center items-center">
                <SkillChart />
              </div>
            </div>
            <div data-aos="fade-right">
              <EducationList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
