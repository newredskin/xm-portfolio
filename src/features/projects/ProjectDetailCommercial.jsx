import { useState } from "react";
import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import SortingMenuCommercial from "./SortingMenuCommercial";

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
            <div className="flex flex-col">
              <ImageCarousel
                images={imagesForCarouselTopIGL}
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
            <div className="mt-10 flex flex-col">
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
        {activeSort === "lys" && <div id="lys">LYS</div>}
      </div>
    </>
  );
}

export default ProjectDetailCommercial;
