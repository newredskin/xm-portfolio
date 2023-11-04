import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

import ImageCarouselForSketches from "../../ui/ImageCarouselForSketches";

// for dev only
// let mediaPrefix = "../";

// for publish
let mediaPrefix = "";

/*

*/

function ProjectDetailSketches({ project }) {
  const images = [
    project.images[1],
    project.images[2],
    project.images[3],
    project.images[4],
    project.images[5],
  ];
  let columns = 1;

  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0);

  const activeRef = useRef();

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
        console.log(activeRef);
      }
    },
    [activeRef, expandedIndex]
  );

  function handleClick(index) {
    setExpandedIndex(index);
  }

  function prevImage(e, imageCollection) {
    e.stopPropagation();
    setCurrentCarouselImage(
      (currentCarouselImage - 1 + imageCollection.length) %
        imageCollection.length
    );
  }

  function nextImage(e, imageCollection) {
    e.stopPropagation();
    setCurrentCarouselImage(
      (currentCarouselImage + 1) % imageCollection.length
    );
  }

  function handleClickX(e) {
    e.stopPropagation();
    setExpandedIndex(-1);
    setCurrentCarouselImage(0);
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center justify-center overflow-hidden">
        <div className="flex flex-wrap justify-start items-center gap-4">
          {images.map((image, i) => {
            let currentImage;
            if (expandedIndex === i) {
              currentImage = currentCarouselImage;
            } else {
              currentImage = 0;
            }

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
                    id={image[0]}
                    autoRotate={false}
                    isExpanded={expandedIndex === i}
                    currentImage={currentImage}
                  />
                  {expandedIndex === i && (
                    <>
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
                          className="h-6 w-6 text-red-700 hover:text-red-600 z-50"
                          onClick={handleClickX}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-between">
                        <div className="absolute left-0 p-2">
                          <ChevronLeftIcon
                            className={`h-12 w-12 text-teal-900 dark:text-stone-600 hover:cursor-pointer transition-all duration-500  hover:text-red-700 dark:hover:text-red-700`}
                            onClick={(e) => prevImage(e, image)}
                          />
                        </div>
                        <div className="absolute right-0 p-2">
                          <ChevronRightIcon
                            className={`h-12 w-12 text-teal-900 dark:text-stone-600 hover:cursor-pointer transition-all duration-500  hover:text-red-700 dark:hover:text-red-700`}
                            onClick={(e) => nextImage(e, image)}
                          />
                        </div>
                      </div>
                      <div
                        className={`absolute top-0 py-5 flex justify-center gap-1 md:gap-2 w-full`}
                      >
                        {image.map((img, index) => (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentCarouselImage(index);
                            }}
                            className={`rounded-full w-2 h-2 md:w-3 md:h-3 cursor-pointer ${
                              index === currentCarouselImage
                                ? "bg-red-700"
                                : "bg-stone-600/50"
                            }`}
                            key={`dot ${index}`}
                          ></div>
                        ))}
                      </div>
                    </>
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
