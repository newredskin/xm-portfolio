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
      <div className="flex flex-col items-center gap-y-6 overflow-hidden">
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
                className="my-2 flex justify-end text-[10px] text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Scott Shigley</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
              <div className="flex w-full flex-col gap-6 lg:w-[40%]">
                <p
                  className="text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                  style={{ fontFamily: "Cutive Mono" }}
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
                  significant accomplishment.
                </p>
                <div className="mt-3 flex">
                  <img
                    src={mediaPrefix + project.images[1][5]}
                    alt=""
                    className="rounded-2xl object-contain opacity-90 shadow-md"
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
            <div className="flex flex-col items-start gap-3 dark:opacity-90 lg:flex-row">
              <div className="w-full lg:w-[40%]">
                <img
                  src={mediaPrefix + project.images[1][10]}
                  alt=""
                  className="object-contain dark:opacity-90"
                />
              </div>
              <div className="flex w-full items-center lg:w-[60%]">
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
            <div className="flex flex-col items-start gap-5 lg:flex-row lg:justify-between">
              <div className="flex flex-col gap-3 lg:w-[50%]">
                <p
                  className="mt-3 w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                  style={{ fontFamily: "Cutive Mono" }}
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
                  As a key member of the design team, I took a range of
                  responsibilities, from conceptual design study to graphic
                  representation and consultant coordination. Through sketching
                  and 3D modeling, I explored various design options and engaged
                  in productive dialogues with clients and fellow team members.
                  This collaborative effort ensured the successful development
                  and approval of permit packages, adhering to project timelines
                  and realizing the transformation of this historic property.
                </p>
              </div>
              <div className="mt-3 flex flex-col gap-3 lg:w-[50%]">
                <img
                  src={mediaPrefix + project.images[2][5]}
                  alt=""
                  className="justify-self-center object-contain"
                />
                <img
                  src={mediaPrefix + project.images[2][6]}
                  alt=""
                  className="w-full self-start object-contain opacity-90"
                />
              </div>
            </div>
            {!isOnMobile && (
              <div className="mt-6">
                <ImageCarousel
                  images={imagesForCarouselSideWideRK}
                  dotPadding="py-8"
                  duration={5000}
                />
              </div>
            )}
            {isOnMobile && (
              <div className="mt-6">
                <ImageCarousel
                  images={imagesForCarouselSideMobileRK}
                  dotPadding="py-4"
                  duration={5000}
                />
              </div>
            )}
          </div>
        )}

        {/* Cotton */}
        {activeSort === "urban" && (
          <div id="suburban" className="mb-10 flex flex-col">
            <div className="relative flex flex-col">
              <ImageCarousel
                images={imagesForCarouselTopCT}
                dotPadding="py-4 lg:py-10"
                autoRotate={false}
              />
              <span className="absolute left-1 top-1 mb-3 mt-1 rounded-2xl bg-red-700 px-2 py-1 text-[8px] text-stone-300 lg:left-3 lg:top-3 lg:px-2 lg:text-[12px]">
                2023 ICAA Midwest Acanthus Award
              </span>
              <div
                className="my-2 flex justify-end text-[10px] text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Scott Shigley</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-between gap-6 lg:w-[60%]">
                <p
                  className="w-full self-start text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                  style={{ fontFamily: "Cutive Mono" }}
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
                  className="w-full self-start rounded-2xl object-contain opacity-90 shadow-md dark:opacity-80"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-1 lg:w-[40%] lg:gap-0 ">
                <img
                  src={mediaPrefix + project.images[3][3]}
                  alt=""
                  className="w-[60%] self-center object-contain opacity-80 dark:invert  lg:w-[80%]"
                />
                <img
                  src={mediaPrefix + project.images[3][5]}
                  alt=""
                  className="w-[80%] self-center object-contain dark:invert lg:w-full"
                />
              </div>
            </div>
            <div className="mt-3 flex flex-col items-center justify-center gap-x-8 gap-y-6 p-5 lg:mt-5 lg:flex-row lg:justify-between">
              <img
                src={mediaPrefix + project.images[3][4]}
                alt=""
                className="object-contain opacity-80 dark:invert lg:w-[50%]"
              />
              <img
                src={mediaPrefix + project.images[3][13]}
                alt=""
                className="object-contain opacity-90 dark:opacity-80 lg:w-[40%]"
              />
            </div>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row">
              <div className="w-full lg:w-[40%]">
                <img
                  src={mediaPrefix + project.images[3][9]}
                  alt=""
                  className="lg:xl-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 lg:w-[70%]">
                <p
                  className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                  style={{ fontFamily: "Cutive Mono" }}
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
                  className="w-full object-contain opacity-90"
                />
              </div>
            </div>
            <div className="mt-6 p-1 dark:bg-stone-400/30 lg:p-3">
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
