import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import { useDarkMode } from "../../context/DarkModeContext";

function ProjectDetailDesignCamp({ project }) {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <div className="flex flex-col items-center gap-6 overflow-hidden lg:flex-row">
        <div className="w-full">
          {!isDarkMode && (
            <video
              className={`object-contain `}
              autoPlay
              loop
              muted
              disablePictureInPicture
              playsInline
            >
              <source src={mediaPrefix + project.images[1]} type="video/mp4" />
            </video>
          )}
          {isDarkMode && (
            <div className="overflow-hidden rounded-2xl bg-gray-800/50 pb-6 ">
              <video
                className={`object-contain opacity-80`}
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
            </div>
          )}
          <div className="flex justify-center">
            <a
              href="https://designcamp.onrender.com/"
              className="mt-6 animate-pulse text-xs text-teal-900 underline decoration-inherit decoration-solid decoration-1 hover:text-red-700 dark:text-orange-50/50 lg:text-sm"
              target="_blank"
            >
              Try Live Demo
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[70%]">
          <p
            className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            This project is a dynamic and interactive website designed for
            architecture enthusiasts to share and discuss various building and
            landscape projects from around the world. This platform, developed
            using a full stack web workflow, leverages technologies such as
            JavaScript, Express, and MongoDB, ensuring robust CRUD
            functionalities along with user registration, login, and validation
            processes. Key features include the integration of ejs-mate for
            templating and Bootstrap for an aesthetically pleasing and
            responsive design. The website also employs third-party APIs like
            Cloudinary for storing imagery data and Mapbox for displaying
            interactive maps, enriching the user experience with visual and
            navigational elements. <br />
            <br />
            Currently, the project is in an ongoing development phase with
            version 1.0.0 already live online. Future enhancements aim to
            introduce more advanced interactive map functionalities, including
            specialized architectural city walk routes, further engaging the
            community of architecture aficionados.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailDesignCamp;
