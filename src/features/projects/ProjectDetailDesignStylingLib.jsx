import { mediaPrefix } from "../../devSwitch";
import { useDarkMode } from "../../context/DarkModeContext";
import { useScreenWidth } from "../../context/ScreenWidthContext";

function ProjectDetailStylingLib({ project }) {
  const { isDarkMode } = useDarkMode();
  const { isMobile } = useScreenWidth();

  return (
    <>
      <div className="flex flex-col gap-12 lg:gap-24">
        <div className="flex flex-col items-center gap-12 overflow-hidden lg:flex-row">
          <div className="w-full">
            {!isDarkMode ? (
              <img
                src={mediaPrefix + project.images[1]}
                alt=""
                className="object-contain"
              />
            ) : (
              <img
                src={mediaPrefix + project.images[2]}
                alt=""
                className="object-contain"
              />
            )}
          </div>
          <div className="lg:w-[60%]">
            <p
              className="text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
              style={{ fontFamily: "Cutive Mono" }}
            >
              I'm currently working on an exciting project: the development of a
              landscape design styling app. This app is designed to reorganize
              and leverage existing databases of landscape design images within
              various firms, enhancing the way landscape design professionals
              access and draw inspiration from their digital assets.
              <br />
              <br />
              At its core, the app is built around a powerful search
              functionality, allowing users to effortlessly locate specific
              landscape elements like paving or prairie planting through
              keywords. What makes it truly stand out is its ability to generate
              collages based on landscape design types — imagine instantly
              visualizing an urban plaza or an Italian garden at the touch of a
              button. Adding to its intuitive design, features like 'Find
              Similar' and 'More Inspiration' link individual elements to
              broader design styles, fostering creativity and discovery.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <video
            className={`object-contain lg:w-1/2`}
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline
          >
            <source src={mediaPrefix + project.images[0]} type="video/mp4" />
          </video>
          <p
            className="text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Currently, the project is in the planning and prototype phase,
            focusing on structuring and managing the example data set. A
            significant part of the efforts is also directed towards the
            development of an intuitive, user-friendly interface.
            <br />
            <br />
            One of the most ambitious aspects of this project involves
            integrating AI and machine learning for advanced functionalities
            like image recognition and smart recommendation systems. Given the
            complexity of AI/ML technologies, this component is expected to
            unfold over a more extended period, but it holds the promise of
            transforming how design inspiration is accessed and utilized.
            <br />
            <br />
            Though this project still on the stage, the goal remains clear: to
            revolutionize the management and utilization of digital assets in
            landscape design, merging technology with creativity to create a
            tool that not only streamlines processes but also inspires
            innovation in design.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailStylingLib;
