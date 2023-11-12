import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

import { mediaPrefix } from "../../devSwitch";
import ImageCarouselForSketches from "../../ui/ImageCarouselForSketches";

const projectDescription = [
  "Concept of a school project. Restore the historic entry and upgraded the outdoor areas for sports and group activities. Geometric pathways to efficiently direct walking flow.", // 0
  "Sketches of potential designs at key lakefront locations on expanded land. Dramatic lines focus on bridging green spaces across the redeveloped roadway. The designs integrate a multi-trail system for circulation improvement.", // 1
  "Diagram presents a conceptual idea that connects the neighborhood to the lakefront through a new commercial development, integrating TOD center. ", // 2
  "Concept sketches illustrate various design ideas for a spa water feature in a residential project.", // 3
  "Concept sketches depict diverse design ideas for a playground, featuring diagonal lines and curved boundaries to craft a dynamic play area.", // 4
  "Sketches overlay the construction site's installation process to effectively communicate the design intent to the contractor.", // 5
  "Sketches display two pathway applications of transition from the pool terrace to the bluff deck in a residential project.", // 6
  "Perspective sketches illustrate the positive effects of a commercial development on the surrounding neighborhood. Features like a vertical green wall and a spacious planted rooftop help soften the impact of hardscaped materials.", // 7
  "Sketches outline initial ideas for a small plaza located at a Metra station, adjacent to a beloved local restaurant's outdoor dining area. The design carefully balances the needs of both, implementing different geometric languages to create a space that adapts to its dual purpose.", // 8
  "Sketches trace the design's evolution from an initial diagram to a detailed, scaled plan for an office roof terrace.", // 9
  "Concept sketches present a design for a community space in a rural countryside area, currently lacking functional outdoor areas. The design focuses on incorporating various sports zones, event spaces, and a playground, and aims to cater to all age groups within the community, meeting a diverse range of expectations and needs. ", // 10
];

function ProjectDetailSketches({ project }) {
  const images = project.images.filter((img, index) => index > 1);

  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0);
  const [startX, setStartX] = useState(null);

  const activeRef = useRef();
  const galleryRef = useRef();

  //Center active image
  useEffect(
    function () {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === activeRef.current) {
            const rect = entry.target.getBoundingClientRect();
            const centerPosition =
              rect.top +
              window.scrollY -
              window.innerHeight / 2 +
              rect.height / 2 -
              36;
            window.scrollTo({ top: centerPosition, behavior: "smooth" });
          }
        }
      });

      if (activeRef.current) {
        observer.observe(activeRef.current);
      }
      return () => observer.disconnect();
    },
    [expandedIndex]
  );

  // check if click outside the activeRef
  useEffect(
    function () {
      function handleClickOutside(e) {
        if (activeRef.current && !activeRef.current.contains(e.target)) {
          setExpandedIndex(-1);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    },

    [activeRef]
  );

  //On touch screen
  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
  }

  function handleTouchMove(e, imageCollection) {
    if (startX === null) return;
    const diffX = e.touches[0].clientX - startX;

    if (Math.abs(diffX) > 8) {
      if (diffX > 0 && currentCarouselImage > 0) {
        prevImage(e, imageCollection);
      } else if (
        diffX < 0 &&
        currentCarouselImage < imageCollection.length - 1
      ) {
        nextImage(e, imageCollection);
      }
    }
    setStartX(null);
  }

  function handleTouchEnd() {
    setStartX(null);
  }

  // On bigger screen
  function handleClick(index) {
    setExpandedIndex(index);
    setCurrentCarouselImage(0);
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
        <div className="dark:opacity-90 mb-3">
          <video
            className={`object-contain`}
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline
          >
            <source src={mediaPrefix + project.images[1]} type="video/mp4" />
          </video>
        </div>

        <div
          ref={galleryRef}
          className={`flex flex-wrap items-center gap-4 ${
            expandedIndex !== -1 ? "justify-start" : "justify-between"
          }`}
        >
          <p
            className="self-start text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full sm:w-[48%] xl:w-[32%] "
            style={{ ontFamily: "Cutive Mono" }}
          >
            Sketching is a powerful tool that can turn the spark of an idea into
            a vivid reality. Whether I'm using paper and pencil or my iPad,
            sketching has the unparalleled ability to bridge the gap between
            imagination and execution. From the early pre-concept stage, where
            concepts take shape in abstract lines, to the precise details of the
            construction administration phase, sketches are the universal
            language of innovation. It enables me to communicate and collaborate
            seamlessly with others, allow ideas to flow freely, and make the
            project process an artful journey of creativity and realization.
          </p>
          {images.map((image, i) => {
            let currentImage;
            if (expandedIndex === i) {
              currentImage = currentCarouselImage;
            } else {
              currentImage = 0;
            }

            return (
              <div
                className={`flex flex-wrap w-full hover:grayscale-0 transition-all duration-300 ${
                  expandedIndex === i
                    ? "w-full"
                    : "grayscale opacity-80 md:w-[48%] xl:w-[32%]"
                }`}
                key={`${image} + ${i}`}
                ref={expandedIndex === i ? activeRef : null}
              >
                <div
                  className={`relative touch-none hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer rounded-2xl overflow-hidden`}
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
                          className="bg-stone-500/80 dark:bg-stone-700/80 text-[8px] lg:text-[12px] py-2 px-4 text-stone-200 dark:text-stone-300 w-full"
                          style={{ ontFamily: "Cutive Mono" }}
                        >
                          {projectDescription[i]}
                        </p>
                      </div>

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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectDetailSketches;
