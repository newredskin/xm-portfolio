import { useEffect, useRef, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ImageCarouselForSketches from "../src/ui/ImageCarouselForSketches";

// for dev only
let mediaPrefix = "../";

// for publish
// let mediaPrefix = "";

/*

*/

function ProjectDetailSketches({ project }) {
  const images = [project.images[1], project.images[2]];
  let columns = 1;

  const [expandedIndex, setExpandedIndex] = useState(-1);
  const activeRef = useRef();

  // const imagesForCarouselTop = [project.images[0]];
  // const imagesForCarouselSide = [
  //   project.images[5],
  //   project.images[6],
  //   project.images[7],
  //   project.images[8],
  //   project.images[9],
  // ];
  // const imagesForCarouselBottom = [
  //   project.images[10],
  //   project.images[11],
  //   project.images[12],
  // ];
  // const invertImagesForCarousel = [project.images[8], project.images[9]];

  useEffect(
    function () {
      if (activeRef.current) {
        const windowWidth = window.innerWidth;

        if (windowWidth < 1180 && windowWidth > 640) columns = 2;
        if (windowWidth >= 1180) columns = 3;

        const isStartOfRow = (expandedIndex + 1) % columns === 1;
        const behavior = isStartOfRow ? "auto" : "smooth";
        const block = isStartOfRow ? "center" : "start";
        activeRef.current.scrollIntoView({ behavior, block });
      }
    },
    [activeRef, expandedIndex]
  );

  function handleClick(index) {
    setExpandedIndex(index);
    console.log("parent click");
  }

  function handleClickX(e) {
    e.stopPropagation();
    setExpandedIndex(-1);
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center justify-center overflow-hidden">
        <div className="flex flex-wrap justify-start items-center gap-4">
          {images.map((image, i) => {
            return (
              <>
                <div
                  ref={expandedIndex === i ? activeRef : null}
                  key={i}
                  id={`${image} + ${i}`}
                  className={`relative hover:opacity-100 hover:grayscale-0 rounded-2xl overflow-hidden transition-all duration-500  w-full sm:w-[48%] xl:w-[32%] cursor-pointer ${
                    expandedIndex === i
                      ? "sm:w-[90%] xl:w-[90%]"
                      : "grayscale opacity-80 "
                  }`}
                  onClick={(e) => handleClick(i, e)}
                >
                  <ImageCarouselForSketches
                    images={image}
                    autoRotate={false}
                    isExpanded={expandedIndex === i}
                  />
                  {expandedIndex === i && (
                    <div>
                      <div className="absolute inset-0 flex items-end">
                        <p
                          className="bg-stone-500/80 dark:bg-stone-700/80 text-[10px] lg:text-[12px] py-2 px-4 text-stone-200 dark:text-stone-300 w-full"
                          style={{ ontFamily: "Cutive Mono" }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corporis officia facilis enim suscipit quasi est
                          deleniti molestias reiciendis fugiat perferendis.
                        </p>
                      </div>
                      <div className="absolute inset-3 flex justify-end">
                        <XCircleIcon
                          className="h-6 w-6 text-teal-900 hover:text-red-700 dark:text-stone-700 dark:hover:text-red-700"
                          onClick={handleClickX}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectDetailSketches;

/*

       <img
              src={mediaPrefix + project.images[0]}
              alt=""
              className="object-contain w-[80%] lg:w-[90%] justify-self-center"
            />


                <p
            className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full lg:w-[40%]"
            style={{ ontFamily: "Cutive Mono" }}
          >
            Las Vegas' distinctive water challenges open doors to reimagine the
            interplay between aging infrastructures and the human-altered
            landscape. In particular, the flood control channels, acting as the
            vital links between the urban hub and the Las Vegas Wash, stand as
            the intersection between urbanization and nature. To address the
            issue of Wash degradation, a fresh approach to the spatial and
            environmental dynamics becomes pivotal.
          </p>

           <ImageCarousel images={imagesForCarouselTop} height="30" /> 

*/
