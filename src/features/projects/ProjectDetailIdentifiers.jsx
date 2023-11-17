import { useState } from "react";

import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import SortingMenuIdentifiers from "./SortingMenuIdentifiers";

function ProjectDetailIdentifiers({ project }) {
  const imagesForCarouselTopMichigan = project.images[1].filter(
    (img, i) => i < 3,
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
      <div className="flex flex-col items-center gap-y-6 overflow-hidden">
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
                className="mb-8 flex justify-end text-[10px] text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Duroweld Co., Inc.</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <p
                className="w-full self-start text-xs text-stone-500 dark:text-stone-400 lg:w-[50%] lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                In the Motor Row Streetscape project, we reinvigorated Michigan
                Avenue's historic 'Motor Row District', home to the iconic
                Chicago Defender building, infusing the area with a contemporary
                yet respectful nod to its Art Deco heritage and burgeoning new
                businesses and eateries. A highlight of this revitalization was
                the creation of two 30-foot tall identifiers as welcome gateway,
                a symbol designed to echo the district's illustrious past.
                <br />
                <br />
                In my role within the project, I transformed the design
                principal's initial sketch into a refined 3D model, meticulously
                shaping it to its final form. Following this, I developed
                detailed engineering plans and details to ensure that the design
                could be effectively and feasibly constructed on site.
              </p>
              <img
                src={mediaPrefix + project.images[1][3]}
                alt=""
                className="w-full object-contain lg:w-[50%]"
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
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="w-full lg:w-[70%]">
                <p
                  className="self-start text-xs text-stone-500 dark:text-stone-400 lg:text-sm "
                  style={{ fontFamily: "Cutive Mono" }}
                >
                  The City of Chicago's 10th Ward, renowned for its
                  distinctiveness, encompasses seven unique neighborhoods:
                  Hegewisch, East Side, South Deering, Altgeld Gardens, Slag
                  Valley, South Chicago, and The Bush. In this vibrant district,
                  a distinctive identifier was conceptualized, starting in South
                  Chicago. Nestled beside Indiana, the ward's rich industrial
                  past inspired the initial design concepts. The use of corten
                  steel, a weathering steel known for its rustic appearance,
                  pays homage to this history. Meanwhile, the incorporation of
                  spirals with colorful polycarbonate windows symbolizes the
                  vibrant future of these neighborhoods. <br />
                  <br />
                  My role was crucial in bringing this vision to life: I
                  transformed the initial sketches into detailed 3D models and
                  produced the construction details, ensuring the feasibility of
                  this design's realization on the ground.
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
            <div className="mb-8 flex flex-col">
              <img
                src={mediaPrefix + project.images[3][0]}
                alt=""
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex w-full flex-col justify-between lg:w-[60%]">
                <p
                  className="self-start text-xs text-stone-500 dark:text-stone-400 lg:text-sm "
                  style={{ fontFamily: "Cutive Mono" }}
                >
                  Sauganash, a community nestled on the northern border of
                  Chicago, has maintained its distinctive character since its
                  early 20th-century inception as a suburban retreat from the
                  bustling city center. Characterized by diagonal streets and
                  enveloped in spacious lawns and woods, Sauganash's unique
                  charm inspired our design concept. Central to this is the
                  ginkgo tree, a symbol of resilience, health, and longevity,
                  mirroring the qualities of this neighborhood. We abstracted
                  the ginkgo leaf, complementing it with dynamic LED lights to
                  create a welcoming visual spectacle for visitors. <br />
                  <br />
                  In this project, my involvement was multifaceted, encompassing
                  the development of conceptual designs, detailed 3D modeling,
                  and the preparation of comprehensive construction
                  documentation.
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
                    className="w-1/2 object-contain"
                  />
                  <img
                    src={mediaPrefix + project.images[3][5]}
                    alt=""
                    className="w-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:w-[40%]">
                <img
                  src={mediaPrefix + project.images[3][6]}
                  alt=""
                  className="object-contain"
                />
                <img
                  src={mediaPrefix + project.images[3][7]}
                  alt=""
                  className="hidden object-contain lg:block"
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
