import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import { useDarkMode } from "../../context/DarkModeContext";
import { useScreenWidth } from "../../context/ScreenWidthContext";
import Tag from "../../ui/Tag";

function ProjectDetailSPA({ project }) {
  const { isDarkMode } = useDarkMode();
  const { isMobile } = useScreenWidth();

  let tagColor = isDarkMode ? "" : "bg-teal-700/90";

  return (
    <>
      <div className="flex flex-col gap-24 lg:gap-48">
        {/* Wild Oasis */}
        <div className="flex flex-col items-center gap-12 overflow-hidden lg:flex-row">
          <div className="w-full lg:w-[80%]">
            {!isDarkMode && (
              <video
                className={`object-contain `}
                autoPlay
                loop
                muted
                disablePictureInPicture
                playsInline
              >
                <source
                  src={mediaPrefix + project.images[1]}
                  type="video/mp4"
                />
              </video>
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
                    src={mediaPrefix + project.images[2]}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
            <div className="flex justify-center">
              <a
                href="https://miaozu-wild-oasis.netlify.app/login"
                className="mt-6 animate-pulse text-xs text-teal-900 underline decoration-inherit decoration-solid decoration-1 hover:text-red-700 dark:text-orange-50/50 lg:text-sm"
                target="_blank"
              >
                Try Live Demo
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 lg:w-[70%]">
            <h2 className="font-bold">
              Wild Oasis - Internal Hotel Management App
            </h2>
            <p
              className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
              style={{ fontFamily: "Cutive Mono" }}
            >
              This project is all about creating a mock app for managing a
              hotel's daily grind - think bookings, cabins, guests, and all that
              jazz. I followed an online tutorial and create this using some
              really cool tech like React Query, Styled Components, and React
              Hook Form, to name a few. Plus, I got to play around with Supabase
              for the backend. <br />
              <br />
              The project is a mix of advanced compound component patterns,
              authentication, neat chart integrations, and dark mode. It's like
              a crash course in full-stack development, I learn a ton from it!
              This isn't just a regular app; it's a complete exploration of
              professional app planning and development. It was challenging, but
              totally worth it.
            </p>
            <div className="flex flex-wrap gap-1">
              <Tag color="bg-red-700/70 dark:bg-red-700">React Query</Tag>
              <Tag color="bg-red-700/70 dark:bg-red-700">Styled Components</Tag>
              <Tag color="bg-red-700/70 dark:bg-red-700">Supabase</Tag>
            </div>
          </div>
        </div>
        {/* Pizza */}
        <div className="flex flex-col items-center gap-6 overflow-hidden lg:flex-row">
          {!isMobile && (
            <div className="flex w-full flex-col gap-6 lg:w-[70%]">
              <h2 className="font-bold">
                Miaozu's Pizza - Online Food Order App
              </h2>
              <p
                className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                Following a tutorial, I got a chance to practice building a
                pretend online food ordering app specifically for a pizza joint.
                It's a neat way for the restaurant to handle all their orders
                online, by themselves. I took a dive into the redux state
                management, and it also was my first try with Tailwind - it
                proved to be pretty awesome and has since become my daily CSS
                framework! <br />
                <br />
                You can take the demo for a spin and order a whole bunch of
                pizzas (just a heads up though, they won't actually show up at
                your door - bummer, I know!). It's all in good fun, playing
                around with a fake but super practical app.
              </p>
              <div className="flex flex-wrap gap-1">
                <Tag color="bg-red-700/70 dark:bg-red-700">React Router</Tag>
                <Tag color="bg-red-700/70 dark:bg-red-700">Redux</Tag>
                <Tag color="bg-red-700/70 dark:bg-red-700">TailwindCSS</Tag>
              </div>
            </div>
          )}
          <div className="w-full lg:w-[80%]">
            {!isDarkMode && (
              <video
                className={`object-contain `}
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
            )}
            {isDarkMode && (
              <div className="">
                <video
                  className={`rounded-2xl object-contain opacity-80`}
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
            <div className="flex justify-center">
              <a
                href="https://miaozu-pizza.vercel.app/"
                className="mt-6 animate-pulse text-xs text-teal-900 underline decoration-inherit decoration-solid decoration-1 hover:text-red-700 dark:text-orange-50/50 lg:text-sm"
                target="_blank"
              >
                Try Live Demo
              </a>
            </div>
          </div>
          {isMobile && (
            <div className="flex w-full flex-col gap-6 lg:w-[70%]">
              <h2 className="font-bold">
                Miaozu's Pizza - Online Food Order App
              </h2>
              <p
                className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
                style={{ fontFamily: "Cutive Mono" }}
              >
                Following a tutorial, I got a chance to practice building a
                pretend online food ordering app specifically for a pizza joint.
                It's a neat way for the restaurant to handle all their orders
                online, by themselves. I took a dive into the redux state
                management, and it also was my first try with Tailwind - it
                proved to be pretty awesome and has since become my daily CSS
                framework! <br />
                <br />
                You can take the demo for a spin and order a whole bunch of
                pizzas (just a heads up though, they won't actually show up at
                your door - bummer, I know!). It's all in good fun, playing
                around with a fake but super practical app.
              </p>
              <div className="flex flex-wrap gap-1">
                <Tag color="bg-red-700/70 dark:bg-red-700">React Router</Tag>
                <Tag color="bg-red-700/70 dark:bg-red-700">Redux</Tag>
                <Tag color="bg-red-700/70 dark:bg-red-700">TailwindCSS</Tag>
              </div>
            </div>
          )}
        </div>
        {/* Worldwise */}
        <div className="flex flex-col items-center gap-6 overflow-hidden lg:flex-row">
          <div className="w-full lg:w-[80%]">
            {!isDarkMode && (
              <video
                className={`object-contain `}
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
                    src={mediaPrefix + project.images[6]}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
          <div className="flex w-full flex-col gap-6 lg:w-[70%]">
            <h2 className="font-bold">Worldwise - Travel Tracking App</h2>
            <p
              className="w-full text-xs text-stone-500 dark:text-stone-400 lg:text-sm"
              style={{ fontFamily: "Cutive Mono" }}
            >
              Got this really cool travel tracking app that's like your digital
              travel journal. It's super user-friendly - just tap and pin the
              cities you've been to or dream of visiting on an interactive map.
              It's like having a travel diary right at your fingertips. <br />
              <br />
              Following the tutorial online, I got a chance to practice lot on
              ins and outs of react-router and contextAPI. Plus, I got to play
              around with Leaflet, a fantastic and free map API. It's a fun way
              to document your journeys and travel plans!
            </p>
            <div className="flex flex-wrap gap-1">
              <div className="flex flex-wrap gap-1">
                <Tag color="bg-red-700/70 dark:bg-red-700">React Router</Tag>
                <Tag color="bg-red-700/70 dark:bg-red-700">Context API</Tag>
                <Tag color="bg-red-700/70 dark:bg-red-700">Leaflet API</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailSPA;
