import { useEffect } from "react";

import { mediaPrefix } from "../devSwitch";

function ImageCarouselForSketches({
  images,
  currentImage,
  width = "w-full",
  autoRotate = true,
  duration = 3000,
  isExpanded = false,
}) {
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
        className={`flex`}
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
          transition: `transform 0.5s ease-in-out`,
        }}
      >
        {images.map((image) => {
          const windowWidth = window.innerWidth;
          let expandHeight;

          if (windowWidth <= 640) {
            expandHeight = "h-[14rem]";
          } else {
            expandHeight = isExpanded
              ? "md:h-[24rem] xl:h-[40rem] 2xl:h-[54rem]"
              : "h-[14rem]";
          }

          return (
            <div
              className={`bg-orange-50/50 flex-shrink-0 w-full ${expandHeight} flex justify-center items-center shadow-xl`}
              key={image}
            >
              <img
                src={mediaPrefix + image}
                alt=""
                className={`object-cover dark:opacity-90 h-full w-full`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageCarouselForSketches;
