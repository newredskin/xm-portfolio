import { useState } from "react";
import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import SortingMenuResidential from "./SortingMenuResidential";

function ProjectDetailResidential({ project }) {
  const imagesForCarouselTopDV = project.images[1].filter((img, i) => i < 4);
  const imagesForCarouselSideDV1 = [project.images[1][6], project.images[1][7]];
  const imagesForCarouselSideDV2 = [project.images[1][8], project.images[1][9]];

  const imagesForCarouselTopRK = project.images[2].filter((img, i) => i < 5);
  const imagesForCarouselSideWideRK = [
    project.images[2][15],
    project.images[2][16],
    project.images[2][17],
    project.images[2][18],
  ];
  const imagesForCarouselSideMobileRK = [
    project.images[2][19],
    project.images[2][20],
    project.images[2][21],
    project.images[2][22],
  ];

  const imagesForCarouselTopCT = project.images[3].filter((img, i) => i < 3);
  const imagesForCarouselSideCT = [
    project.images[3][11],
    project.images[3][12],
  ];

  const [activeSort, setActiveSort] = useState("lakeside");

  const windowWidth = window.innerWidth;
  const isOnMobile = windowWidth <= 640;

  function handleSort(resProject) {
    setActiveSort(resProject);
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center overflow-hidden">
        <SortingMenuResidential
          activeSort={activeSort}
          handleSort={handleSort}
        />

        {/* davis */}
        {activeSort === "lakeside" && (
          <div id="lakeside">
            <div className="flex flex-col">
              <ImageCarousel
                images={imagesForCarouselTopDV}
                dotPadding="py-4 lg:py-10"
                autoRotate={false}
              />
              <div
                className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 my-2 flex justify-end"
                style={{ ontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Scott Shigley</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5">
              <div className="w-full lg:w-[40%] flex flex-col gap-6">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400"
                  style={{ ontFamily: "Cutive Mono" }}
                >
                  Situated atop the Lake Michigan shoreline, this striking home
                  seamlessly integrates its interior with the surrounding
                  landscape, offering expansive vistas. The highlight is the
                  cantilevered deck that extends over the bluff - a testament to
                  both innovative design and engineering. This deck, embodying
                  the home's sleek, modern aesthetic, gives the impression of
                  floating above the bluff, thanks to its visually unobtrusive
                  design and self-cleaning glass railings that provide clear
                  views of the lake. <br />
                  <br />
                  My role involved close collaboration with the design
                  principal, from the initial design stages to the construction
                  administration phase. The biggest challenge among other design
                  elements was this knife-edge floating deck: numerous hours
                  were dedicated to meticulously refining its details, ensuring
                  aesthetic appeal while addressing engineering stability and
                  drainage concerns. Witnessing the final construction of such
                  high quality, complete with its stunning view, stands as a
                  significant accomplishment..
                </p>
                <div className="mt-3 flex dark:opacity-90">
                  <img
                    src={mediaPrefix + project.images[1][5]}
                    alt=""
                    className="object-contain dark:opacity-90 rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[60%]">
                <ImageCarousel
                  images={imagesForCarouselSideDV1}
                  invertImages={imagesForCarouselSideDV1}
                  dotPadding="py-5"
                  duration={6000}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 dark:opacity-90 items-start">
              <div className="w-full lg:w-[40%]">
                <img
                  src={mediaPrefix + project.images[1][10]}
                  alt=""
                  className="object-contain dark:opacity-90"
                />
              </div>
              <div className="w-full lg:w-[60%] flex items-center">
                <ImageCarousel
                  images={imagesForCarouselSideDV2}
                  autoRotate={false}
                  dotPadding="py-3 lg:py-7"
                />
              </div>
            </div>
          </div>
        )}

        {/* Rankin */}
        {activeSort === "suburban" && (
          <div id="suburban">
            <div className="mb-3">
              <ImageCarousel
                images={imagesForCarouselTopRK}
                dotPadding="py-4 lg:py-10"
                autoRotate={false}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-5">
              <div className="flex flex-col lg:w-[50%] gap-3">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full mt-3"
                  style={{ ontFamily: "Cutive Mono" }}
                >
                  This residential project marries history and modernity. The
                  original house, designed by esteemed architect Herman Lackner,
                  had fallen into disrepair, requiring extensive upgrades to
                  meet contemporary standards. After careful consideration, we
                  opted for a sustainable approach: deconstruction, preserving
                  and repurposing materials. This method minimizes waste and
                  grants a second life to the original elements. <br />
                  <br />
                  In honoring the legacy of the acclaimed landscape architect
                  Gertrude Kuh, who originally designed the grounds, we not only
                  preserved but also enhanced the residence. The new design
                  harmoniously blends with the neighborhood, adhering to Village
                  requirements. Nestled within a captivating 2-acre landscape
                  featuring meadows, expansive lawns, mature trees, and
                  enchanting perennial beds, the home now offers a harmonious
                  blend of classic and modern living. An expansive pool terrace
                  and a thoughtfully designed pool house provide an oasis for
                  relaxation, while stone walkways and patios surrounded by lush
                  gardens create both a private sanctuary and an exceptional
                  setting for grand gatherings.
                  <br />
                  <br />
                  As a key member of the design team, I spearheaded a range of
                  responsibilities, from conceptual design study to graphic
                  representation and consultant coordination. Through sketching
                  and 3D modeling, I explored various design options and engaged
                  in productive dialogues with clients and fellow team members.
                  This collaborative effort ensured the successful development
                  and approval of permit packages, adhering to project timelines
                  and realizing the transformation of this historic property.
                </p>
              </div>
              <div className="lg:w-[50%] mt-3 flex flex-col gap-3">
                <img
                  src={mediaPrefix + project.images[2][5]}
                  alt=""
                  className="object-contain justify-self-center"
                />
                <img
                  src={mediaPrefix + project.images[2][6]}
                  alt=""
                  className="object-contain w-full self-start"
                />
              </div>
            </div>
            {!isOnMobile && (
              <div className="mt-6">
                <ImageCarousel
                  images={imagesForCarouselSideWideRK}
                  dotPadding="py-8"
                  duration={5600}
                />
              </div>
            )}
            {isOnMobile && (
              <div className="mt-6">
                <ImageCarousel
                  images={imagesForCarouselSideMobileRK}
                  dotPadding="py-4"
                  duration={5600}
                />
              </div>
            )}
          </div>
        )}

        {/* Cotton */}
        {activeSort === "urban" && (
          <div id="suburban" className="flex flex-col mb-10">
            <div className="relative flex flex-col">
              <ImageCarousel
                images={imagesForCarouselTopCT}
                dotPadding="py-4 lg:py-10"
                autoRotate={false}
              />
              <span className="absolute top-1 left-1 lg:top-3 lg:left-3 bg-red-700 p-1 lg:px-2 lg:py-1 rounded-2xl text-stone-300 mb-3 mt-1 text-[6px] lg:text-[12px]">
                2023 ICAA Midwest Acanthus Award
              </span>
              <div
                className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 my-2 flex justify-end"
                style={{ ontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Scott Shigley</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
              <div className="flex flex-col gap-6 justify-between lg:w-[60%]">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full self-start"
                  style={{ ontFamily: "Cutive Mono" }}
                >
                  This residential project located in an urban neighborhood with
                  rich history, designed as a series of garden rooms that
                  intricately blend historical motifs with contemporary design.
                  Each element in this project was carefully chosen to reflect
                  the site's unique material vernacular and to resonate with the
                  local architectural heritage. The site, divided into two
                  primary zones by a masonry wall, offers a harmonious balance
                  between the inviting front yard facing the neighborhood and
                  the series of private garden rooms at the back. A significant
                  feature of this landscape is the collaborative effort with
                  artisans in ironwork and masonry, ensuring that each site
                  element was not only authentic and crafted with precision but
                  also imbued with a sense of timelessness and durability.{" "}
                  <br />
                  <br />
                  My role involved working in closely with the project manager,
                  design principal, ensuring that every design element was
                  brought to fruition with the highest standards. My
                  responsibilities encompassed overseeing the design iterations
                  for each component - from the detailed metalwork and robust
                  masonry wall to the elegantly designed wood gate and canopy
                  structures. Meticulous attention to detail was paramount in my
                  approach, as I spent numerous hours refining each piece,
                  ensuring that it was not only aesthetically pleasing but also
                  functionally sound.
                </p>
                <img
                  src={mediaPrefix + project.images[3][7]}
                  alt=""
                  className="rounded-2xl object-contain w-full self-start dark:opacity-80"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1 lg:gap-0 lg:w-[40%] ">
                <img
                  src={mediaPrefix + project.images[3][3]}
                  alt=""
                  className="object-contain w-[60%] lg:w-[80%] opacity-80 dark:invert  self-center"
                />
                <img
                  src={mediaPrefix + project.images[3][5]}
                  alt=""
                  className="object-contain w-[80%] lg:w-full self-center dark:invert"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-x-8 gap-y-6 mt-3 lg:mt-5 justify-center items-center p-5">
              <img
                src={mediaPrefix + project.images[3][4]}
                alt=""
                className="object-contain lg:w-[50%] dark:invert opacity-80"
              />
              <img
                src={mediaPrefix + project.images[3][13]}
                alt=""
                className="object-contain lg:w-[40%] dark:opacity-80 rounded-2xl"
              />
            </div>
            <div className="mt-6 flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-[40%]">
                <img
                  src={mediaPrefix + project.images[3][9]}
                  alt=""
                  className="lg:xl-full"
                />
              </div>
              <div className="flex flex-col gap-6 lg:w-[70%] justify-between">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full"
                  style={{ ontFamily: "Cutive Mono" }}
                >
                  A critical aspect of my role was the coordination with
                  structural engineers. This collaboration was crucial to
                  ensuring that our design vision was perfectly aligned with
                  structural requirements, balancing aesthetic allure with
                  practical functionality. Seeing the project's final
                  construction come to life with exceptional quality and
                  precision, framed by the stunning landscape, stood as a
                  powerful affirmation of our team's commitment and a personal
                  highlight of my professional journey.
                </p>
                <img
                  src={mediaPrefix + project.images[3][10]}
                  alt=""
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className="mt-6 dark:bg-stone-400/30 bg-stone-100/50 lg:p-3 p-1">
              <ImageCarousel
                images={imagesForCarouselSideCT}
                invertImages={imagesForCarouselSideCT}
                dotPadding="py-0 lg:py-5"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetailResidential;
