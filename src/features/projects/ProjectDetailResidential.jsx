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
                dotPadding="py-10"
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
                  Water scarcity in Las Vegas, a desert environment, has always
                  been a pressing issue. Amidst this arid landscape, an
                  unexpected oasis thrives: the Las Vegas Wash, a 12-mile
                  stretch in the southeast of the valley. It serves as the
                  primary outlet for stormwater, urban runoff, shallow
                  groundwater, and treated effluent from the Las Vegas Valley.
                  Originally a dry desert wash, it only saw water during
                  rainstorms. However, as the city expanded, the Wash evolved
                  into a riparian ecosystem, with its wetlands acting as a
                  natural filter for urban runoff before it reaches Lake Mead
                  and the Colorado River. Unfortunately, the Wash is now
                  threatened by the very urbanization that nurtured it. Over the
                  past 50 years, the wetlands have dwindled from 2,000 acres to
                  around 200 acres due to increased water discharge and a
                  growing population since the 1970s.
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
                  dotPadding="py-7"
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
                dotPadding="py-10"
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
                  dotPadding="py-8"
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
                dotPadding="py-8"
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
                  Water scarcity in Las Vegas, a desert environment, has always
                  been a pressing issue. Amidst this arid landscape, an
                  unexpected oasis thrives: the Las Vegas Wash, a 12-mile
                  stretch in the southeast of the valley. It serves as the
                  primary outlet for stormwater, urban runoff, shallow
                  groundwater, and treated effluent from the Las Vegas Valley.
                  Originally a dry desert wash, it only saw water during
                  rainstorms. However, as the city expanded, the Wash evolved
                  into a riparian ecosystem, with its wetlands acting as a
                  natural filter for urban runoff before it reaches Lake Mead
                  and the Colorado River. Unfortunately, the Wash is now
                  threatened by the very urbanization that nurtured it. Over the
                  past 50 years, the wetlands have dwindled from 2,000 acres to
                  around 200 acres due to increased water discharge and a
                  growing population since the 1970s.
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
                  Water scarcity in Las Vegas, a desert environment, has always
                  been a pressing issue. Amidst this arid landscape, an
                  unexpected oasis thrives: the Las Vegas Wash, a 12-mile
                  stretch in the southeast of the valley. It serves as the
                  primary outlet for stormwater, urban runoff, shallow
                  groundwater, and treated effluent from the Las Vegas Valley.
                  Originally a dry desert wash, it only saw water during
                  rainstorms. However, as the city expanded, the Wash evolved
                  into a riparian ecosystem, with its wetlands acting as a
                  natural filter for urban runoff before it reaches Lake Mead
                  and the Colorado River. Unfortunately, the Wash is now
                  threatened by the very urbanization that nurtured it. Over the
                  past 50 years, the wetlands have dwindled from 2,000 acres to
                  around 200 acres due to increased water discharge and a
                  growing population since the 1970s.
                </p>
                <img
                  src={mediaPrefix + project.images[3][10]}
                  alt=""
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className="mt-6 dark:bg-stone-400/30 bg-stone-100/50 p-3">
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
