import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { mediaPrefix } from "../devSwitch";

function ImageCarousel({
  images,
  height = 30,
  width = "w-full",
  invertImages = [],
  autoRotate = true,
  isHideControl = false,
  duration = 3000,
  dotPadding = "py-5",
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [startX, setStartX] = useState(null);

  function isVideo(img) {
    return img.slice(-3) === ("mp4" || "webm");
  }

  function isInvertInCarousel(img) {
    return invertImages.includes(img);
  }

  // Touch event
  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
  }

  function handleTouchMove(e) {
    if (startX === null) return;
    const diffX = e.touches[0].clientX - startX;

    if (Math.abs(diffX) > 8) {
      if (diffX > 0 && currentImage > 0) {
        prevImage();
      } else if (diffX < 0 && currentImage < images.length - 1) {
        nextImage();
      }
    }
    setStartX(null);
  }

  function handleTouchEnd() {
    setStartX(null);
  }

  // Click event
  function nextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  function prevImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
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
          return (
            <div
              className={`flex-shrink-0 w-full flex justify-center items-center touch-none`}
              key={image}
            >
              {isVideo(image) ? (
                <video
                  className={`object-contain w-full ${height}`}
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  playsInline
                >
                  <source src={mediaPrefix + image} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={mediaPrefix + image}
                  alt=""
                  className={`object-contain w-full opacity-90 ${height} ${
                    isInvertInCarousel(image) && "dark:invert"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div
        className="absolute touch-none inset-0 flex items-center justify-between"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute left-0 p-2">
          <ChevronLeftIcon
            className={`${
              isHideControl && "hidden"
            } w-8 h-8 lg:h-12 lg:w-12 text-teal-900 dark:text-stone-300 hover:cursor-pointer opacity-0 transition-opacity duration-500 group-hover:opacity-80 hover:text-red-700 dark:hover:text-red-700`}
            onClick={prevImage}
          />
        </div>
        <div className="absolute right-0 p-2">
          <ChevronRightIcon
            className={`${
              isHideControl && "hidden"
            } w-8 h-8 lg:h-12 lg:w-12 text-teal-900 dark:text-stone-300 hover:cursor-pointer opacity-0 transition-opacity duration-500 group-hover:opacity-80 hover:text-red-700 dark:hover:text-red-700`}
            onClick={nextImage}
          />
        </div>
      </div>
      <div
        className={`${
          isHideControl && "hidden"
        } absolute bottom-0 ${dotPadding} flex justify-center gap-1 md:gap-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      >
        {images.map((img, index) => (
          <div
            onClick={() => setCurrentImage(index)}
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

export default ImageCarousel;
