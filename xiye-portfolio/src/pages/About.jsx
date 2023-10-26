import CareerPath from "../ui/CareerPath";
import DynamicText from "../ui/DynamicText";
import Footer from "../ui/Footer";

function About() {
  return (
    <>
      <div className="w-screen min-h-screen bg-orange-50/80">
        <div className="text-center text-teal-900 mx-16 flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl mb-10 pt-28">
            I&apos;m <span className="text-red-700">Xiye</span>.
          </h1>
          <div className=" pb-20 lg:max-w-[1280px]">
            <div
              className="text-left mb-10"
              style={{ fontFamily: "Cutive Mono" }}
            >
              <p className="mb-10">
                I&apos;ve spent years shaping beautiful outdoor spaces as a
                landscape architect, working on diverse projects that range from
                impressive public ventures to luxurious residential designs.
                This journey has not only ignited my passion for{" "}
                <DynamicText
                  content={["artistry", "creativity", "craftsmanship"]}
                  style="text-red-700 bg-teal-800/20 underline decoration-2 underline-offset-4"
                />
                but also nurtured my knack for research, analytical thinking and
                problem-solving. Alongside my landscape architecture work,
                I&apos;ve also delved into the digital world of freelancing,
                specializing in branding and logo design.
              </p>
              <p>
                Now, I&apos;m on a new path to become a full-stack developer,
                and I&apos;m bringing with me a wealth of design and{" "}
                <span className="text-red-700 bg-teal-800/20 underline decoration-2 underline-offset-4">
                  problem-solving
                </span>{" "}
                skills. My goal is to create not only user-friendly websites but
                also versatile applications across multiple platforms, bridging
                my past experiences with my exciting new career.
              </p>
            </div>
            <div className="mx-3 mb-24">
              <CareerPath />
            </div>
            <div className="mt-10">
              <h2 className="font-bold">My Skill Set</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
