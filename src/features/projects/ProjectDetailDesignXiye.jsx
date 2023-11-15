import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import { useDarkMode } from "../../context/DarkModeContext";
import { useScreenWidth } from "../../context/ScreenWidthContext";
import Tag from "../../ui/Tag";

function ProjectDetailXiye({ project }) {
  const { isDarkMode } = useDarkMode();
  const { isMobile } = useScreenWidth();

  return (
    <>
      <div className="flex flex-col gap-10 lg:gap-24">
        <div className="flex flex-col items-center gap-12 overflow-hidden lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            <div className="flex flex-row items-center justify-center">
              <img
                src={mediaPrefix + project.images[1]}
                alt=""
                className="w-[30%] object-contain"
              />
              <img
                src={mediaPrefix + project.images[0]}
                alt=""
                className="w-[70%] object-contain"
              />
            </div>
            <div>
              <p
                className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                Welcome to my portfolio website, a creative space where I've
                blended my passion for design and tech. Crafted with React,
                ContextAPI, and TailwindCSS, this website is hosted on Netlify
                with data supported by Amazon Cloud Service, ensuring a smooth
                and reliable experience. Here, you'll find a collection of
                projects showcasing my journey as a landscape architect. From
                opulent residential gardens to grand urban designs, each project
                tells a story of my deep-rooted expertise in creating stunning
                real-world landscapes. These experiences have honed my design
                skills and problem-solving prowess.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full flex-col gap-6">
            <p
              className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
              style={{ fontFamily: "Cutive Mono" }}
            >
              What makes this website stand out is its responsive design.
              Whether you're scrolling through on a handheld device or exploring
              the details on a larger screen, the design maintains its elegance
              and usability, making it a true showcase of responsive web design
              principles in action. This seamless transition between different
              screen sizes ensures ensuring you get a sleek and engaging
              experience no matter the device.
            </p>
          </div>
          <div className="w-full">
            {!isDarkMode && (
              <div className="flex flex-col items-center justify-center lg:flex-row">
                <video
                  className={`object-contain lg:w-1/2`}
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  playsInline
                >
                  <source
                    src={mediaPrefix + project.images[2]}
                    type="video/mp4"
                  />
                </video>
                <video
                  className={`object-contain lg:w-1/2`}
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  playsInline
                >
                  <source
                    src={mediaPrefix + project.images[4]}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
            {isDarkMode && (
              <div className="overflow-hidden rounded-2xl bg-gray-900 pb-6 ">
                <video
                  className={`object-contain opacity-80`}
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  playsInline
                >
                  <source
                    src={mediaPrefix + project.images[3]}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailXiye;
