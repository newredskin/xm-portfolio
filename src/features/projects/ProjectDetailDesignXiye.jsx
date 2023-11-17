import { mediaPrefix } from "../../devSwitch";
import { useDarkMode } from "../../context/DarkModeContext";
import { useScreenWidth } from "../../context/ScreenWidthContext";

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
                ContextAPI, TailwindCSS, and Supabase, this website is hosted on
                Netlify with digital contents delievered by Amazon Cloud
                Service, ensuring a smooth and reliable experience. Here, you'll
                find a collection of projects showcasing my journey as a
                landscape architect. From opulent residential gardens to grand
                urban designs, each project tells a story of my deep-rooted
                expertise in creating stunning real-world landscapes. These
                experiences have honed my design skills and problem-solving
                prowess.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {!isMobile && (
            <div className="flex w-full flex-col gap-6">
              <p
                className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                What makes this website stand out is its responsive design.
                Whether you're browsing on a mobile phone or enjoying the
                visuals on a wider monitor, the transition is seamless, ensuring
                you get a sleek and engaging experience no matter the device.
                Another challenge arose from the need to effectively display a
                variety of media files. Each project page is meticulously
                designed, taking into account the specific intent of exhibition.
                This approach led to the development of diverse display methods,
                including various types of carousels, as well as the
                incorporation of GIFs and videos to deliver a dynamic and
                vibrant user experience.
                <br />
                <br />
                Furthermore, to enhance site performance without compromising on
                quality, React's lazy function was utilized for efficient
                loading, and media files were optimized using the webp and webm
                formats. These implementations ensure that the site not only
                showcases the projects in their best light but also operates
                smoothly and responsively, even with heavy media content.
              </p>
            </div>
          )}
          <div className="w-full">
            {!isDarkMode && (
              <div className="flex flex-col items-center justify-center pb-6 lg:flex-row">
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
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-900/50 pb-6 lg:flex-row">
                <video
                  className={`object-contain lg:w-1/2`}
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
                <video
                  className={`object-contain lg:w-1/2`}
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  playsInline
                >
                  <source
                    src={mediaPrefix + project.images[5]}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
          {isMobile && (
            <div className="flex w-full flex-col gap-6">
              <p
                className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                What makes this website stand out is its responsive design.
                Whether you're browsing on a mobile phone or enjoying the
                visuals on a wider monitor, the transition is seamless, ensuring
                you get a sleek and engaging experience no matter the device.
                Another challenge arose from the need to effectively display a
                variety of media files. Each project page is meticulously
                designed, taking into account the specific intent of exhibition.
                This approach led to the development of diverse display methods,
                including various types of carousels, as well as the
                incorporation of GIFs and videos to deliver a dynamic and
                vibrant user experience.
                <br />
                <br />
                Furthermore, to enhance site performance without compromising on
                quality, React's lazy function was utilized for efficient
                loading, and media files were optimized using the webp and webm
                formats. These thoughtful implementations ensure that the site
                not only showcases the projects in their best light but also
                operates smoothly and responsively, even with heavy media
                content.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectDetailXiye;
