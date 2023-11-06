import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

import ImageCarouselForSketches from "../src/ui/ImageCarouselForSketches";

function ProjectDetailSketches({ project }) {
  const images = project.images.filter((img, index) => index !== 0);
  let columns = 1;

  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0);
  const [startX, setStartX] = useState(null);

  const activeRef = useRef();

  const windowWidth = window.innerWidth;
  const isOnMobile = windowWidth <= 640;

  useEffect(
    function () {
      if (activeRef.current) {
        if (windowWidth < 1180 && windowWidth > 640) columns = 2;
        if (windowWidth >= 1180) columns = 3;

        if (isOnMobile) {
          const viewportHeight = window.innerHeight;
          const refTop = activeRef.current.getBoundingClientRect().top;
          const offset = (viewportHeight - activeRef.current.clientHeight) / 2;
          const scrollToCenter = refTop + window.scrollY - offset;

          window.scrollTo({ top: scrollToCenter, behavior: "smooth" });
        } else {
          const isStartOfRow = (expandedIndex + 1) % columns === 1;
          const behavior = isStartOfRow ? "auto" : "smooth";
          const block = isStartOfRow ? "center" : "start";

          activeRef.current.scrollIntoView({ behavior, block });
        }
      }
    },
    [activeRef, expandedIndex]
  );

  //On mobile
  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
    console.log("start", startX); // 268.18
  }

  function handleTouchMove(e, imageCollection) {
    if (startX === null) return;
    const diffX = e.touches[0].clientX - startX;
    console.log("move"); // 257.37
    console.log("startX", startX);
    console.log("diffX", diffX);

    if (Math.abs(diffX) > 10) {
      if (diffX > 0 && currentCarouselImage > 0) {
        prevImage(e, imageCollection);
        console.log("left!");
      } else if (
        diffX < 0 &&
        currentCarouselImage < imageCollection.length - 1
      ) {
        nextImage(e, imageCollection);
        console.log("right!");
      }
    }
    setStartX(null);
  }

  function handleTouchEnd() {
    console.log("end");
    setStartX(null);
  }

  // On bigger screen
  function handleClick(index) {
    setExpandedIndex(index);
    setCurrentCarouselImage(0);
    console.log("click!");
  }

  function prevImage(e, imageCollection) {
    e.stopPropagation();
    setCurrentCarouselImage(
      (currentCarouselImage - 1 + imageCollection.length) %
        imageCollection.length
    );
    console.log("prev!");
  }

  function nextImage(e, imageCollection) {
    e.stopPropagation();
    setCurrentCarouselImage(
      (currentCarouselImage + 1) % imageCollection.length
    );
    console.log("next!");
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
                  className={`relative z-10 hover:opacity-100 hover:grayscale-0 rounded-2xl overflow-hidden transition-all duration-500 w-full sm:w-[48%] xl:w-[32%] cursor-pointer ${
                    expandedIndex === i
                      ? "sm:w-[90%] xl:w-[90%]"
                      : "grayscale opacity-80 "
                  }`}
                  onClick={(e) => handleClick(i, e)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={(e) => handleTouchMove(e, image)}
                  onTouchEnd={handleTouchEnd}
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
                      {!isOnMobile && (
                        <>
                          <div className="absolute inset-3 flex justify-end">
                            <XCircleIcon
                              className="h-6 w-6 text-red-700 hover:text-red-600 z-50"
                              onClick={handleClickX}
                            />
                          </div>

                          <div className="absolute inset-0 flex items-center justify-between">
                            <div className="absolute left-0 p-2">
                              <ChevronLeftIcon
                                className={`h-8 w-8 lg:h-12 lg:w-12 text-red-700 dark:text-stone-600 hover:cursor-pointer transition-all duration-500  hover:text-red-600 dark:hover:text-red-700`}
                                onClick={(e) => prevImage(e, image)}
                              />
                            </div>
                            <div className="absolute right-0 p-2">
                              <ChevronRightIcon
                                className={`h-8 w-8 lg:h-12 lg:w-12 text-red-700 dark:text-stone-600 hover:cursor-pointer transition-all duration-500  hover:text-red-600 dark:hover:text-red-700`}
                                onClick={(e) => nextImage(e, image)}
                              />
                            </div>
                          </div>
                        </>
                      )}
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
