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
      <div className="flex flex-col items-center gap-y-6 overflow-hidden">
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
                dotPadding="py-4 lg:py-10"
                autoRotate={false}
              />
              <span className="absolute left-1 top-1 mb-3 mt-1 rounded-2xl bg-red-700 px-2 py-1 text-[8px] text-stone-300 lg:left-3 lg:top-3 lg:px-2 lg:text-[12px]">
                2022 ASLA Central States Merit Award
              </span>
              <div
                className="my-2 flex justify-end text-[10px] text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Scott Shigley</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <h2 className="text-lg font-bold lg:text-2xl">Lakefront Park</h2>
              <ChevronDoubleDownIcon className="h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:justify-between">
              <div className="flex w-full flex-col gap-6 lg:w-[50%] xl:justify-between">
                <p
                  className="self-start text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                  style={{ fontFamily: "Cutive Mono" }}
                >
                  The Iowa Great Lakes region in northwestern Iowa has long been
                  cherished by Midwesterners as a vacation destination for over
                  a century. State Highway 71, a major corridor linking five
                  municipalities in this region, underwent a significant
                  transformation beginning in 2017. The design team crafted a
                  strategy to enhance visual quality, natural environment, and
                  safety for both vehicles and pedestrians along the 9-mile
                  stretch. This comprehensive effort reimagined the corridor
                  from a mere transit route into a vibrant, engaging, and
                  colorful gateway leading to several cherished public spaces. A
                  focal point of this project was the Arnolds Park Promenade and
                  lakefront. This inviting pedestrian walkway, adorned with lush
                  gardens, connects the town's business district to the Lake
                  Okoboji waterfront. The design strategy centered on
                  horticulture as a key element of placemaking, thereby
                  enriching the area's natural allure and directing visitors to
                  prominent locations.
                  <br />
                  <br />I joined the team in 2019 and for the subsequent two
                  years, I was entrusted with overseeing all aspects of
                  production delivery at the lakefront site and playground. My
                  responsibilities included managing graphic production and
                  construction documentation, ensuring each design element was
                  executed with precision and meticulous attention to detail.
                  Additionally, I conducted extensive research on play
                  equipment, making sure that it not only fit seamlessly into
                  the overall design but also provided safe and engaging play
                  experiences for kids.
                </p>
                <div className="w-full">
                  <ImageCarousel
                    images={imageForCarouselSideIGL2}
                    dotPadding="py-2"
                    autoRotate={false}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between lg:w-[70%]">
                <ImageCarousel
                  images={imageForCarouselSideIGL1}
                  dotPadding="py-2"
                />
                <div className="mt-2 grid grid-cols-1 grid-rows-2 gap-2 xl:grid-cols-2 xl:grid-rows-1">
                  <img
                    src={mediaPrefix + project.images[1][8]}
                    alt=""
                    className="w-full object-contain"
                  />
                  <img
                    src={mediaPrefix + project.images[1][9]}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6 mt-10 flex items-center justify-end gap-2">
              <ChevronDoubleDownIcon className="h-5 w-5 lg:h-6 lg:w-6" />
              <h2 className="self-end text-lg font-bold lg:text-2xl">
                East Lake Park
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="w-full self-start lg:w-[60%]">
                  <ImageCarousel
                    images={imageForCarouselSideIGL3}
                    duration={5000}
                  />
                </div>
                <div className="flex w-full flex-col justify-between lg:w-[40%]">
                  <p
                    className="mb-3 text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                    style={{ fontFamily: "Cutive Mono" }}
                  >
                    A highlight of this project was the 'Minnie Queen' play
                    ship, inspired by the historic tourist ferry 'The Queen', a
                    historic tourist ferry that graced Lake Okoboji for decades.
                    This endeavor, realized in collaboration with ape STUDIO and
                    Richter Spielgeräte GmbH, led to the creation of the Eask
                    Lake park. It stands as a playful tribute along the lake's
                    scenic shores, offering children a delightful and
                    imaginative play space.
                  </p>
                  <img
                    src={mediaPrefix + project.images[1][15]}
                    alt=""
                    className="w-full rounded-2xl object-contain opacity-90 shadow-md dark:opacity-80"
                  />
                  <div
                    className="mb-3 mt-1 flex justify-end text-[10px] text-stone-500 dark:text-stone-400 lg:text-sm"
                    style={{ fontFamily: "Cutive Mono" }}
                  >
                    <span>Drawing credit: Richter Spielgeräte GmbH</span>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src={mediaPrefix + project.images[1][16]}
                      alt=""
                      className="w-1/2 object-cover dark:opacity-80"
                    />
                    <img
                      src={mediaPrefix + project.images[1][17]}
                      alt=""
                      className="object-conver w-1/2 dark:opacity-80"
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
                dotPadding="py-4 lg:py-10"
                autoRotate={false}
              />
            </div>
            <div className="mb-5 mt-10 flex items-center gap-2">
              <h2 className="text-lg font-bold lg:text-2xl">Promenade</h2>
              <ChevronDoubleDownIcon className="h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
              <div className="lg:w-[40%]">
                <p
                  className="mb-6 self-start text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                  style={{ fontFamily: "Cutive Mono" }}
                >
                  Lincoln Yards, an ambitious mixed-use development in Chicago's
                  north branch corridor, is set to redefine urban spaces. One
                  centerpice of the development is a 50-foot wide exterior
                  promenade, ingeniously woven through multiple parcels. This
                  initiative breathes new life into the area's industrial
                  heritage, formerly an old steel yard, by integrating authentic
                  materials with modern, pedestrian-friendly alternatives. This
                  approach establishes a welcoming threshold to the rest of the
                  steel yard development, including parks and adjacent
                  buildings. <br />
                  <br />
                  Integral to the project is a thoughtful design language for
                  paving and site furnishing, echoing the site's steel yard
                  legacy while fostering a vibrant sense of place. The 'rug
                  paving' concept announces access to buildings, enhancing
                  navigational ease and spatial awareness. The furniture
                  selection, from built-in benches to movable planters, is
                  driven by functionality, layout considerations, form, and
                  aesthetic continuity. Varied planting strategies are employed,
                  from curb height adjustments to bench-wrapped planters,
                  offering a diverse and rich botanical experience. The trees,
                  varying in species and size, are carefully selected to give
                  the impression of having grown there for years, adding to the
                  site's mature and established ambiance. Prominent features
                  like large mature trees, art installation and fire pits are
                  strategically placed to become focal points that accentuate
                  the area's unique character.
                  <br />
                  <br />
                  In this project, I initially contributed rendering support
                  during the competition phase and win the project.
                  Subsequently, I was in charge the research/study for the
                  promenade and the concept design for the C1 building's office
                  terrace. I helped prepared design packages for each board
                  meeting, open houses, and other crucial presentations,
                  instrumental in advancing the project's development.
                </p>
                <div className="flex gap-1">
                  <img
                    src={mediaPrefix + project.images[2][6]}
                    alt=""
                    className="w-[65%] object-contain"
                  />
                  <img
                    src={mediaPrefix + project.images[2][7]}
                    alt=""
                    className="w-[35%] object-cover"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md dark:opacity-90 lg:w-[65%]">
                <ImageCarousel
                  images={imageForCarouselSideLYS1}
                  duration={5000}
                />
              </div>
            </div>
            <div className="mb-6 mt-10 flex items-center justify-end gap-2">
              <ChevronDoubleDownIcon className="h-5 w-5 lg:h-6 lg:w-6" />
              <h2 className="self-end text-lg font-bold lg:text-2xl">
                Office Terrace
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <img
                src={mediaPrefix + project.images[2][9]}
                alt=""
                className="w-full rounded-2xl object-cover shadow-md dark:opacity-90"
              />
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex flex-col justify-between gap-3 lg:w-[70%]">
                  <p
                    className="self-start text-xs text-stone-500 dark:text-stone-400 lg:text-sm "
                    style={{ fontFamily: "Cutive Mono" }}
                  >
                    In the C1 terrace project, my responsibility encompassed the
                    entire site design, from sketches to detailed modeling. The
                    core concept was to create 'garden rooms on the terrace', a
                    space designed with multiple typologies to provide employees
                    a tranquil garden setting for relaxation, socializing, and
                    collaboration. The design features an expansive open lawn, a
                    cocktail overlook, and secluded lush gardens, all unified by
                    gracefully rounded-edge planting beds. In a thoughtful
                    response to the promenade's design ethos, the terrace's
                    material palette features naturally patinated elements,
                    seamlessly merging the building's industrial character with
                    refined elegance. This approach ensures that the overall
                    planting design thoughtfully intersects nature with
                    architectural form, creating a space that is both functional
                    and aesthetically enriching.
                  </p>
                  <div className="opacity-90">
                    <ImageCarousel
                      images={imageForCarouselSideLYS2}
                      duration={5000}
                    />
                  </div>
                </div>
                <div className="w-[80%] self-center md:w-full lg:w-[30%]">
                  <img
                    src={mediaPrefix + project.images[2][15]}
                    alt=""
                    className="hidden object-cover opacity-90 dark:opacity-80 lg:block"
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
