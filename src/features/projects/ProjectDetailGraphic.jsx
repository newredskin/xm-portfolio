import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import { useScreenWidth } from "../../context/ScreenWidthContext";

function ProjectDetailGraphic({ project }) {
  const { isWideScreen } = useScreenWidth();

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

  return (
    <>
      <div className="flex flex-col gap-y-6 overflow-hidden">
        <div className="mt-3 flex items-center gap-2">
          <h2 className="text-lg lg:text-2xl font-bold">Logo/Product Design</h2>
          <ChevronDoubleDownIcon className="h-6 w-6" />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <p
              className="lg:w-[40%] text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400"
              style={{ ontFamily: "Cutive Mono" }}
            >
              I collaborated with the team at the Minnesota Health & Climate
              Section to develop marketing materials for their program. This
              project involved a comprehensive branding effort, including the
              redesign of their logo and the creation of program posters. Our
              focus was on effectively communicating the various climate-related
              health issues, which we categorized into six main areas, ensuring
              that our designs accurately conveyed the program's scope and
              significance to the public.
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
        {isWideScreen && (
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
        {!isWideScreen && (
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
            I collaborated with Chongqing Hongfa Corporation on a rebranding
            initiative to celebrate their 20th anniversary. This comprehensive
            project involved redesigning their logo and updating various
            promotional products, including bags, notebooks, water bottles, etc.
            The new logo design draws inspiration from traditional Chinese seal
            cutting, symbolizing the company's deep-rooted cultural heritage. As
            a construction consultancy, this rebranding emphasizes their
            commitment to delivering precise and professional services to
            clients, aligning with their longstanding reputation in the
            industry.
          </p>
        </div>

        <div className="flex justify-end mt-10 mb-6 gap-2 items-center">
          <ChevronDoubleDownIcon className="h-6 w-6" />
          <h2 className="text-lg lg:text-2xl font-bold self-end">
            Graphic Design
          </h2>
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
