import { useState } from "react";
import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import SortingMenuCommercial from "./SortingMenuCommercial";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

function ProjectDetailCommercial({ project }) {
  const imagesForCarouselTopIGL = project.images[1].filter((img, i) => i < 5);
  const imageForCarouselSideIGL1 = [
    project.images[1][5],
    project.images[1][6],
    project.images[1][7],
  ];
  const imageForCarouselSideIGL2 = [
    project.images[1][10],
    project.images[1][11],
    project.images[1][12],
    project.images[1][13],
  ];
  const imageForCarouselSideIGL3 = [
    project.images[1][14],
    project.images[1][18],
    project.images[1][19],
    project.images[1][20],
    project.images[1][21],
  ];

  const imagesForCarouselTopLYS = project.images[2].filter((img, i) => i < 5);
  const imageForCarouselSideLYS1 = [project.images[2][5], project.images[2][8]];
  const imageForCarouselSideLYS2 = [
    project.images[2][10],
    project.images[2][11],
    project.images[2][12],
    project.images[2][13],
    project.images[2][14],
  ];

  const [activeSort, setActiveSort] = useState("igl");

  const windowWidth = window.innerWidth;
  const isOnMobile = windowWidth <= 640;

  function handleSort(comProject) {
    setActiveSort(comProject);
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center overflow-hidden">
        <SortingMenuCommercial
          activeSort={activeSort}
          handleSort={handleSort}
        />

        {/* IGL */}
        {activeSort === "igl" && (
          <div id="igl">
            <div className="relative flex flex-col">
              <ImageCarousel
                images={imagesForCarouselTopIGL}
                dotPadding="py-10"
                autoRotate={false}
              />
              <span className="absolute top-1 left-1 lg:top-3 lg:left-3 bg-red-700 p-1 lg:px-2 lg:py-1 rounded-2xl text-stone-300 mb-3 mt-1 text-[6px] lg:text-[12px]">
                2022 ASLA Central States Merit Award
              </span>
              <div
                className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 my-2 flex justify-end"
                style={{ ontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Scott Shigley</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <h2 className="text-2xl font-bold">Lakefront Park</h2>
              <ChevronDoubleDownIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-6">
              <div className="w-full lg:w-[50%] flex flex-col gap-6 xl:justify-between">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 self-start"
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
                <div className="w-full">
                  <ImageCarousel
                    images={imageForCarouselSideIGL2}
                    dotPadding="py-2"
                    autoRotate={false}
                  />
                </div>
              </div>
              <div className="lg:w-[70%] flex flex-col justify-between">
                <ImageCarousel
                  images={imageForCarouselSideIGL1}
                  dotPadding="py-2"
                />
                <div className="grid grid-cols-1 grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 gap-2 mt-2">
                  <img
                    src={mediaPrefix + project.images[1][8]}
                    alt=""
                    className="object-contain w-full"
                  />
                  <img
                    src={mediaPrefix + project.images[1][9]}
                    alt=""
                    className="object-contain w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-10 mb-6 gap-2 items-center">
              <ChevronDoubleDownIcon className="h-6 w-6" />
              <h2 className="text-2xl font-bold self-end">East Lake Park</h2>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[60%] self-start">
                  <ImageCarousel
                    images={imageForCarouselSideIGL3}
                    autoRotate={false}
                  />
                </div>
                <div className="flex flex-col w-full lg:w-[40%] justify-between">
                  <p
                    className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 mb-3"
                    style={{ ontFamily: "Cutive Mono" }}
                  >
                    Water scarcity in Las Vegas, a desert environment, has
                    always been a pressing issue. Amidst this arid landscape, an
                    unexpected oasis thrives: the Las Vegas Wash, a 12-mile
                    stretch in the southeast of the valley. It serves as the
                    primary outlet for stormwater, urban runoff, shallow
                    groundwater, and treated effluent from the Las Vegas Valley.
                    Originally a dry desert wash, it only saw water during
                    rainstorms. However, as the city expanded, the Wash evolved
                    into a riparian ecosystem, with its wetlands acting as a
                    natural filter for urban runoff before it reaches Lake Mead
                    and the Colorado River.
                  </p>
                  <img
                    src={mediaPrefix + project.images[1][15]}
                    alt=""
                    className="object-contain w-full dark:opacity-80 rounded-2xl"
                  />
                  <div
                    className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 flex justify-end mt-1 mb-3"
                    style={{ ontFamily: "Cutive Mono" }}
                  >
                    <span>Drawing credit: Richter Spielgeräte GmbH</span>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src={mediaPrefix + project.images[1][16]}
                      alt=""
                      className="object-cover dark:opacity-80 w-1/2"
                    />
                    <img
                      src={mediaPrefix + project.images[1][17]}
                      alt=""
                      className="object-conver dark:opacity-80 w-1/2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LYS */}
        {activeSort === "lys" && (
          <div id="lys">
            <div className="flex flex-col">
              <ImageCarousel
                images={imagesForCarouselTopLYS}
                dotPadding="py-10"
                autoRotate={false}
              />
            </div>
            <div className="mt-10 flex items-center gap-2 mb-5">
              <h2 className="text-2xl font-bold">Promenade</h2>
              <ChevronDoubleDownIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
              <div className="lg:w-[40%]">
                <p
                  className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 self-start mb-6"
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
                <div className="flex gap-1">
                  <img
                    src={mediaPrefix + project.images[2][6]}
                    alt=""
                    className="object-contain w-[65%]"
                  />
                  <img
                    src={mediaPrefix + project.images[2][7]}
                    alt=""
                    className="object-cover w-[35%]"
                  />
                </div>
              </div>
              <div className="lg:w-[65%] rounded-2xl overflow-hidden dark:opacity-90">
                <ImageCarousel
                  images={imageForCarouselSideLYS1}
                  duration={5000}
                />
              </div>
            </div>
            <div className="flex justify-end mt-10 mb-6 gap-2 items-center">
              <ChevronDoubleDownIcon className="h-6 w-6" />
              <h2 className="text-2xl font-bold self-end">Office Rooftop</h2>
            </div>
            <div className="flex flex-col gap-6">
              <img
                src={mediaPrefix + project.images[2][9]}
                alt=""
                className="object-cover w-full dark:opacity-90 rounded-2xl"
              />
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-[70%] flex flex-col gap-3 justify-between">
                  <p
                    className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 self-start "
                    style={{ ontFamily: "Cutive Mono" }}
                  >
                    Water scarcity in Las Vegas, a desert environment, has
                    always been a pressing issue. Amidst this arid landscape, an
                    unexpected oasis thrives: the Las Vegas Wash, a 12-mile
                    stretch in the southeast of the valley. It serves as the
                    primary outlet for stormwater, urban runoff, shallow
                    groundwater, and treated effluent from the Las Vegas Valley.
                    Originally a dry desert wash, it only saw water during
                    rainstorms. However, as the city expanded, the Wash evolved
                    into a riparian ecosystem, with its wetlands acting as a
                    natural filter for urban runoff before it reaches Lake Mead
                    and the Colorado River. Unfortunately, the Wash is now
                    threatened by the very urbanization that nurtured it. Over
                    the past 50 years, the wetlands have dwindled from 2,000
                    acres to around 200 acres due to increased water discharge
                    and a growing population since the 1970s.
                  </p>
                  <div className="dark:opacity-90">
                    <ImageCarousel
                      images={imageForCarouselSideLYS2}
                      autoRotate={false}
                    />
                  </div>
                </div>
                <div className="lg:w-[30%] md:w-full w-[80%] self-center">
                  <img
                    src={mediaPrefix + project.images[2][15]}
                    alt=""
                    className="object-cover dark:opacity-80 lg:block hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetailCommercial;
