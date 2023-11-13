import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";

function ProjectDetailArt({ project }) {
  return (
    <>
      <div className="flex flex-col gap-y-3 lg:gap-y-6 items-center overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-3 lg:gap-6 lg:mb-12 mb-6">
          <div className="lg:w-[50%] flex">
            <img
              src={mediaPrefix + project.images[0]}
              alt=""
              className="object-contain"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col justify-between">
            <div className="flex flex-col gap-3 lg:flex-row justify-between self-start">
              <img
                src={mediaPrefix + project.images[3]}
                alt=""
                className="object-cover lg:w-1/2"
              />
              <img
                src={mediaPrefix + project.images[2]}
                alt=""
                className="object-contain lg:w-1/2"
              />
            </div>
            <div className="mt-3">
              <img
                src={mediaPrefix + project.images[4]}
                alt=""
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailArt;
