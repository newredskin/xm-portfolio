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
          <h2 className="text-lg font-bold lg:text-2xl">Logo/Product Design</h2>
          <ChevronDoubleDownIcon className="h-5 w-5 lg:h-6 lg:w-6" />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-16">
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <p
              className="text-xs text-stone-500 dark:text-stone-400 lg:w-[40%] lg:text-sm"
              style={{ fontFamily: "Cutive Mono" }}
            >
              I collaborated with the team at the Minnesota Health & Climate
              Section to develop marketing materials for their Health and
              Climate program. This project involved a comprehensive branding
              effort, including the redesign of their logo and the creation of
              program posters. Our focus was on effectively communicating the
              various climate-related health issues, which we categorized into
              six main areas, ensuring the designs accurately conveyed the
              program's scope and significance to the public.
            </p>
            <div className="flex flex-col gap-3 lg:w-[60%]">
              <img
                src={mediaPrefix + project.images[2][0]}
                alt=""
                className="rounded-2xl object-contain shadow-md dark:dark:bg-gray-200/70 dark:shadow-orange-50/20"
              />
            </div>
          </div>
        </div>
        {isWideScreen && (
          <div className="mb-6 flex flex-col justify-between gap-3 lg:mb-24 lg:flex-row">
            <img
              src={mediaPrefix + project.images[2][1]}
              alt=""
              className="bg-orange-50/20 object-contain dark:bg-gray-200/70 lg:w-[32.5%]"
            />
            <img
              src={mediaPrefix + project.images[2][2]}
              alt=""
              className="bg-orange-50/20 object-contain dark:bg-gray-200/70 lg:w-[32.5%]"
            />
            <img
              src={mediaPrefix + project.images[2][3]}
              alt=""
              className="bg-orange-50/20 object-contain dark:bg-gray-200/70 lg:w-[32.5%]"
            />
          </div>
        )}
        {!isWideScreen && (
          <div className="bg-orange-50/20 dark:bg-gray-200/70">
            <ImageCarousel images={imagesForCarouselSideMN1} />
          </div>
        )}
        <div className="mb-12 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-3 lg:w-[60%]">
            <img
              src={mediaPrefix + project.images[1][0]}
              alt=""
              className="rounded-2xl object-contain shadow-md dark:bg-gray-200/70 dark:shadow-orange-50/20"
            />
            <ImageCarousel images={imagesForCarouselSideHF1} />
          </div>
          <p
            className="text-xs text-stone-500 dark:text-stone-400 lg:w-[40%] lg:text-sm"
            style={{ fontFamily: "Cutive Mono" }}
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

        <div className="mb-6 mt-10 flex items-center justify-end gap-2">
          <ChevronDoubleDownIcon className="h-6 w-6" />
          <h2 className="self-end text-lg font-bold lg:text-2xl">
            Graphic Design
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <p
            className="text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            In my role as a graphic designer at the Minnesota Department of
            Health (MDH), I collaborated closely with the team to significantly
            enhance the visual appeal of both internal and external materials.
            My contributions spanned a wide array of projects, from designing
            informative brochures and handouts to creating visually engaging
            report templates and health-related infographics.
          </p>
          <img
            src={mediaPrefix + project.images[2][4]}
            alt=""
            className="bg-orange-50/50 object-contain dark:bg-orange-50/70 dark:opacity-90"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectDetailGraphic;

/*



*/
