import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";

function ProjectDetailGraphic({ project }) {
  const imagesForCarouselSideHF1 = [
    project.images[1][1],
    project.images[1][2],
    project.images[1][3],
    project.images[1][4],
  ];

  const imagesForCarouselSideMN1 = [
    project.images[2][1],
    project.images[2][2],
    project.images[2][3],
  ];

  const windowWidth = window.innerWidth;
  const isOnMobile = windowWidth <= 640;

  return (
    <>
      <div className="flex flex-col gap-y-6 overflow-hidden">
        <div className="mt-3 flex items-center gap-2">
          <h2 className="text-2xl font-bold">Logo/Product Design</h2>
          <ChevronDoubleDownIcon className="h-6 w-6" />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <p
              className="lg:w-[40%] text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400"
              style={{ ontFamily: "Cutive Mono" }}
            >
              Water scarcity in Las Vegas, a desert environment, has always been
              a pressing issue. Amidst this arid landscape, an unexpected oasis
              thrives: the Las Vegas Wash, a 12-mile stretch in the southeast of
              the valley. It serves as the primary outlet for stormwater, urban
              runoff, shallow groundwater, and treated effluent from the Las
              Vegas Valley. Originally a dry desert wash, it only saw water
              during rainstorms.
            </p>
            <div className="flex flex-col gap-3 lg:w-[60%]">
              <img
                src={mediaPrefix + project.images[2][0]}
                alt=""
                className="object-contain bg-orange-50/50 dark:bg-orange-50/70 rounded-2xl"
              />
            </div>
          </div>
        </div>
        {!isOnMobile && (
          <div className="flex flex-col lg:flex-row gap-3 justify-between mb-6 lg:mb-24">
            <img
              src={mediaPrefix + project.images[2][1]}
              alt=""
              className="object-contain bg-orange-50/50 dark:bg-orange-50/70 lg:w-[32.5%]"
            />
            <img
              src={mediaPrefix + project.images[2][2]}
              alt=""
              className="object-contain bg-orange-50/50 dark:bg-orange-50/70 lg:w-[32.5%]"
            />
            <img
              src={mediaPrefix + project.images[2][3]}
              alt=""
              className="object-contain bg-orange-50/50 dark:bg-orange-50/70 lg:w-[32.5%]"
            />
          </div>
        )}
        {isOnMobile && (
          <div className="bg-orange-50/50 dark:bg-orange-50/70">
            <ImageCarousel images={imagesForCarouselSideMN1} />
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center mb-12">
          <div className="flex flex-col gap-3 lg:w-[60%]">
            <img
              src={mediaPrefix + project.images[1][0]}
              alt=""
              className="object-contain bg-orange-50/50 dark:bg-orange-50/70 rounded-2xl"
            />
            <ImageCarousel images={imagesForCarouselSideHF1} />
          </div>
          <p
            className="lg:w-[40%] text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400"
            style={{ ontFamily: "Cutive Mono" }}
          >
            Water scarcity in Las Vegas, a desert environment, has always been a
            pressing issue. Amidst this arid landscape, an unexpected oasis
            thrives: the Las Vegas Wash, a 12-mile stretch in the southeast of
            the valley. It serves as the primary outlet for stormwater, urban
            runoff, shallow groundwater, and treated effluent from the Las Vegas
            Valley. Originally a dry desert wash, it only saw water during
            rainstorms.
          </p>
        </div>

        <div className="flex justify-end mt-10 mb-6 gap-2 items-center">
          <ChevronDoubleDownIcon className="h-6 w-6" />
          <h2 className="text-2xl font-bold self-end">Graphic Design</h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <img
            src={mediaPrefix + project.images[2][4]}
            alt=""
            className="object-contain bg-orange-50/50 dark:bg-orange-50/70"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectDetailGraphic;

/*



*/
