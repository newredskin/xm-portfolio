import { useState } from "react";

import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import SortingMenuIdentifiers from "./SortingMenuIdentifiers";

function ProjectDetailIdentifiers({ project }) {
  const imagesForCarouselTopMichigan = project.images[1].filter(
    (img, i) => i < 3
  );
  const imagesForCarouselSideMichigan = [
    project.images[1][4],
    project.images[1][5],
    project.images[1][6],
  ];

  const imagesForCarouselSide10th1 = [
    project.images[2][1],
    project.images[2][2],
    project.images[2][3],
  ];
  const imagesForCarouselSide10th2 = [
    project.images[2][4],
    project.images[2][5],
  ];

  const imagesForCarouselSideSauganash1 = [
    project.images[3][1],
    project.images[3][2],
  ];

  const [activeSort, setActiveSort] = useState("michigan");

  const windowWidth = window.innerWidth;
  const isOnMobile = windowWidth <= 640;

  function handleSort(identifierProject) {
    setActiveSort(identifierProject);
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center overflow-hidden">
        <SortingMenuIdentifiers
          activeSort={activeSort}
          handleSort={handleSort}
        />

        {/* Michigan */}
        {activeSort === "michigan" && (
          <div id="michigan">
            <div className="flex flex-col gap-3">
              <ImageCarousel images={imagesForCarouselTopMichigan} />
              <div
                className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 mb-8 flex justify-end"
                style={{ ontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Duroweld Co., Inc.</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <p
                className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 self-start lg:w-[50%] w-full"
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
              <img
                src={mediaPrefix + project.images[1][3]}
                alt=""
                className="object-contain lg:w-[50%] w-full"
              />
            </div>
            <div>
              <ImageCarousel
                images={imagesForCarouselSideMichigan}
                invertImages={imagesForCarouselSideMichigan}
              />
            </div>
          </div>
        )}

        {/* 10th Ward */}
        {activeSort === "10th" && (
          <div id="10th">
            <div className="flex flex-col">
              <img
                src={mediaPrefix + project.images[2][0]}
                alt=""
                className="object-contain"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-[70%] w-full">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 self-start "
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
                <div>
                  <ImageCarousel
                    images={imagesForCarouselSide10th2}
                    invertImages={imagesForCarouselSide10th2}
                    autoRotate={false}
                  />
                </div>
              </div>
              <div className="lg:w-[30%]">
                <ImageCarousel
                  images={imagesForCarouselSide10th1}
                  dotPadding="py-0"
                />
              </div>
            </div>
          </div>
        )}

        {/* Sauganash */}
        {activeSort === "sauganash" && (
          <div id="sauganash">
            <div className="flex flex-col mb-8">
              <img
                src={mediaPrefix + project.images[3][0]}
                alt=""
                className="object-contain"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-[60%] w-full flex flex-col justify-between">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 self-start "
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
                <div>
                  <ImageCarousel
                    images={imagesForCarouselSideSauganash1}
                    invertImages={imagesForCarouselSideSauganash1}
                    autoRotate={false}
                  />
                </div>
                <div className="flex gap-3">
                  <img
                    src={mediaPrefix + project.images[3][4]}
                    alt=""
                    className="object-contain w-1/2"
                  />
                  <img
                    src={mediaPrefix + project.images[3][5]}
                    alt=""
                    className="object-contain w-1/2"
                  />
                </div>
              </div>
              <div className="lg:w-[40%] flex flex-col gap-3">
                <img
                  src={mediaPrefix + project.images[3][6]}
                  alt=""
                  className="object-contain"
                />
                <img
                  src={mediaPrefix + project.images[3][7]}
                  alt=""
                  className="object-contain lg:block hidden"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetailIdentifiers;
