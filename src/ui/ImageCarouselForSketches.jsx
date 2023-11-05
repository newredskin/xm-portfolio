import { useEffect, useState } from "react";

import { mediaPrefix } from "../devSwitch";

function ImageCarouselForSketches({
  images,
  width = "w-full",
  invertImages = [],
  autoRotate = true,
  duration = 3000,
  isExpanded = false,
  currentImage,
}) {
  function isInvertInCarousel(img) {
    return invertImages.includes(img);
  }

  useEffect(
    function () {
      if (!autoRotate) return;
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
            : "h-60";
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
    </div>
  );
}

export default ImageCarouselForSketches;
