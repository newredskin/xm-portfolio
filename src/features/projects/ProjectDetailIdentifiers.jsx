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
                className="text-[10px] lg:text-sm text-stone-500 dark:text-stone-400 mb-8 flex justify-end"
                style={{ fontFamily: "Cutive Mono" }}
              >
                <span>Photo credit: Duroweld Co., Inc.</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <p
                className="text-xs lg:text-sm text-stone-500 dark:text-stone-400 self-start lg:w-[50%] w-full"
                style={{ fontFamily: "Cutive Mono" }}
              >
                In the Motor Row Streetscape project, we reinvigorated Michigan
                Avenue's historic 'Motor Row District', home to the iconic
                Chicago Defender building, infusing the area with a contemporary
                yet respectful nod to its Art Deco heritage and burgeoning new
                businesses and eateries. A highlight of this revitalization was
                the creation of two 30-foot tall identifier as welcome gateway,
                a symbol designed to echo the district's illustrious past. In my
                role within the project, I transformed the design principal's
                initial sketch into a refined 3D model, meticulously shaping it
                to its final form. Following this, I developed detailed
                engineering plans to ensure that the design could be effectively
                and feasibly constructed on site.
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
                  className="text-xs lg:text-sm text-stone-500 dark:text-stone-400 self-start "
                  style={{ fontFamily: "Cutive Mono" }}
                >
                  In the City of Chicago's 10th Ward, a district renowned for
                  its distinctiveness and home to seven unique neighborhoods -
                  Hegewisch, East Side, South Deering, Altgeld Gardens, Slag
                  Valley, South Chicago, and The Bush - a distinctive identifier
                  was conceptualized. The design journey commenced in South
                  Chicago. As a ward abutting Indiana, with its rich industrial
                  past inspiring the initial design concepts. The use of corten
                  steel pays homage to this history, while the incorporation of
                  spirals with colorful polycarbonate windows symbolizes the
                  vibrant future of these neighborhoods. My role was crucial in
                  bringing this vision to life: I was responsible for
                  transforming the initial sketches into detailed 3D models and
                  subsequently producing the construction details, ensuring the
                  feasibility of bringing this design to fruition on the ground.
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
                  className="text-xs lg:text-sm text-stone-500 dark:text-stone-400 self-start "
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
                  create a welcoming visual spectacle for visitors. In this
                  project, my involvement was multifaceted, encompassing the
                  development of conceptual designs, detailed 3D modeling, and
                  the preparation of comprehensive construction documentation.
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
