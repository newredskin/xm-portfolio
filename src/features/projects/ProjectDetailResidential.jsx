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

  const imagesForCarouselTopCT = project.images[3];

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
            <ImageCarousel
              images={imagesForCarouselTopDV}
              dotPadding="py-10"
              autoRotate={false}
            />
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
                  duration={5000}
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
            <ImageCarousel
              images={imagesForCarouselTopRK}
              dotPadding="py-10"
              autoRotate={false}
            />
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-5">
              <div className="flex flex-col lg:w-[50%] gap-3">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full"
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
          <div id="suburban">
            <ImageCarousel images={imagesForCarouselTopCT} dotPadding="py-10" />
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5">
              <p
                className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full lg:w-[40%]"
                style={{ ontFamily: "Cutive Mono" }}
              >
                Water scarcity in Las Vegas, a desert environment, has always
                been a pressing issue. Amidst this arid landscape, an unexpected
                oasis thrives: the Las Vegas Wash, a 12-mile stretch in the
                southeast of the valley. It serves as the primary outlet for
                stormwater, urban runoff, shallow groundwater, and treated
                effluent from the Las Vegas Valley. Originally a dry desert
                wash, it only saw water during rainstorms. However, as the city
                expanded, the Wash evolved into a riparian ecosystem, with its
                wetlands acting as a natural filter for urban runoff before it
                reaches Lake Mead and the Colorado River. Unfortunately, the
                Wash is now threatened by the very urbanization that nurtured
                it. Over the past 50 years, the wetlands have dwindled from
                2,000 acres to around 200 acres due to increased water discharge
                and a growing population since the 1970s.
              </p>
              <div className="lg:w-[60%] mt-3 flex justify-end">
                <img
                  src={mediaPrefix + project.images[0]}
                  alt=""
                  className="object-contain w-[80%] lg:w-[90%] justify-self-center"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetailResidential;
