import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// for dev only
let mediaPrefix = "../";

// for publish
// let mediaPrefix = "";

function ImageCarouselForSketches({
  images,
  width = "w-full",
  invertImages = [],
  autoRotate = true,
  duration = 3000,
  isExpanded = false,
}) {
  const [currentImage, setCurrentImage] = useState(0);

  function isInvertInCarousel(img) {
    return invertImages.includes(img);
  }

  function nextImage(e) {
    e.stopPropagation();
    setCurrentImage((currentImage + 1) % images.length);
    console.log("clicked! next!");
  }

  function prevImage(e) {
    e.stopPropagation();
    setCurrentImage((currentImage - 1 + images.length) % images.length);
    console.log("clicked! prev!");
  }

  useEffect(
    function () {
      if (!autoRotate) return;
      if (isVideo(images[currentImage])) return;
      const interval = setInterval(nextImage, duration);

      return () => clearInterval(interval);
    },
    [currentImage]
  );

  return (
    <div className={`relative group ${width} overflow-hidden`}>
      <div
        className={`flex transition ease-out duration-500`}
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {images.map((image) => {
          const expandHeight = isExpanded
            ? "xl:h-[40rem] md:h-[24rem]"
            : "h-56";
          return (
            <div
              className={`bg-orange-50/50 flex-shrink-0 w-full ${expandHeight} flex justify-center items-center shadow-xl`}
              key={image}
            >
              <img
                src={mediaPrefix + image}
                alt=""
                className={`object-cover dark:opacity-90 ${
                  isInvertInCarousel(image) && "dark:invert"
                } h-full w-full`}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="absolute left-0 p-2">
          <ChevronLeftIcon
            className={`${!isExpanded ? "hidden" : ""} h-12 w-12 text-teal-900`}
            onClick={prevImage}
          />
        </div>
        <div className="absolute right-0 p-2">
          <ChevronRightIcon
            className={`${!isExpanded ? "hidden" : ""} h-12 w-12 text-teal-900`}
            onClick={nextImage}
          />
        </div>
      </div>
      <div
        className={`${
          !isExpanded ? "hidden" : ""
        } absolute bottom-0 py-5 flex justify-center gap-1 md:gap-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      >
        {images.map((img, index) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage(index);
            }}
            className={`rounded-full w-2 h-2 md:w-3 md:h-3 cursor-pointer ${
              index === currentImage ? "bg-red-700" : "bg-stone-400/50"
            }`}
            key={`dot ${index}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarouselForSketches;

/*

  return (
    <div
      className={`${height + " " + width} relative group flex justify-center`}
    >
      <div className="">
        {isVideo(images[currentImage]) ? (
          <video
            className="object-contain h-full"
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline
          >
            <source src={mediaPrefix + images[currentImage]} type="video/mp4" />
          </video>
        ) : (
          <img
            src={mediaPrefix + images[currentImage]}
            alt=""
            className="object-contain h-full transition-opacity duration-500"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="absolute left-0 p-2">
            <ChevronLeftIcon
              className="h-12 w-12 text-teal-900 dark:text-stone-300 hover:cursor-pointer opacity-0 transition-opacity duration-500 group-hover:opacity-80 hover:text-red-700 dark:hover:text-red-700"
              onClick={prevImage}
            />
          </div>
          <div className="absolute right-0 p-2">
            <ChevronRightIcon
              className="h-12 w-12 text-teal-900 dark:text-stone-300 hover:cursor-pointer opacity-0 transition-opacity duration-500 group-hover:opacity-80 hover:text-red-700 dark:hover:text-red-700"
              onClick={nextImage}
            />
          </div>
        </div>
      </div>
    </div>


        <div className="absolute right-0 p-2">
          <ChevronRightIcon
            className={`${
              !isExpanded ? "hidden" : ""
            } h-12 w-12 text-teal-900 dark:text-stone-300 hover:cursor-pointer opacity-0 transition-opacity duration-500 group-hover:opacity-80 hover:text-red-700 dark:hover:text-red-700`}
            onClick={nextImage}
          />
        </div>



  );





  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };


*/
