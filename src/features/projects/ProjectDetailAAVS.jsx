import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";

function ProjectDetailAAVS({ project }) {
  const imagesForCarouselSide1 = [
    project.images[2],
    project.images[3],
    project.images[4],
  ];
  const imagesForCarouselSide2 = [
    project.images[5],
    project.images[6],
    project.images[7],
    project.images[8],
  ];

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center overflow-hidden">
        <div className="dark:opacity-90 mb-3">
          <video
            className={`object-contain dark:opacity-90`}
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline
          >
            <source src={mediaPrefix + project.images[1]} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
          <div className="w-full lg:w-[40%] flex flex-col justify-between gap-4">
            <p
              className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 "
              style={{ ontFamily: "Cutive Mono" }}
            >
              Because of my interest in parametric design, and eager to
              facilitating programming in design, I attended the AA Visiting
              School Vienna at Die Angewandte in 2018, and create this
              interesting installation Styx. <br />
              <br />
              Departing from traditional design methods, this project's striking
              geometry was brought to life through discrete cellular growth
              simulation, powered by Processing, a Java-based programming
              language. This unique approach allowed for meticulous control over
              the shaping, alignment, and perfection of the 4x4cm wooden sticks.{" "}
              <br />
              <br />
              What's even more fascinating is that with a simple tweak of the
              parameters, I could swiftly generate hundreds of simulations in
              just minutes. This wealth of design options provided me with an
              array of choices, turning the decision-making process more
              engaging.
              <br />
              <br />
              The essence of cellular growth simulations lies in their
              computational prowess to replicate the growth dynamics of
              multi-cellular entities. The development of the structure hinges
              on the intricate interplay of cell proliferation (cell division),
              cell differentiation, and morphogenesis. These cells, akin to
              point-clouds, continuously divide and assume specialized roles
              within the larger construct. During this growth journey, the cells
              dynamically respond to interactions with neighboring cells and are
              influenced by global location-dependent forces. These dynamic
              behaviors and forces collectively shape the resulting geometric
              structure.
              <br />
              <br />
              Furthermore, Karamba3D, an interactive and parametric engineering
              tool, plays a crucial role in ensuring the structural stability of
              our designs. Coupled with augmented reality technology, it
              significantly enhances installation efficiency. This advanced
              integration facilitates the rapid prefabrication of complex and
              irregular wooden components, enabling their completion in just two
              days.
            </p>
            <video
              className={`object-contain dark:opacity-90`}
              autoPlay
              loop
              muted
              disablePictureInPicture
              playsInline
            >
              <source src={mediaPrefix + project.images[13]} type="video/mp4" />
            </video>
          </div>
          <div className="lg:w-[60%] flex flex-col gap-4 dark:opacity-90">
            <ImageCarousel images={imagesForCarouselSide1} dotPadding="py-4" />
            <ImageCarousel
              images={imagesForCarouselSide2}
              autoRotate={false}
              dotPadding="py-4"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <img
              src={mediaPrefix + project.images[9]}
              alt=""
              className="object-contain"
            />
            <img
              src={mediaPrefix + project.images[10]}
              alt=""
              className="object-contain"
            />
          </div>
          <div className="relative lg:w-1/2">
            <img
              src={mediaPrefix + project.images[11]}
              alt=""
              className="object-cover lg:h-full"
            />
            <span className="absolute top-1 left-1 lg:top-3 lg:left-3 bg-red-700 p-1 lg:px-2 lg:py-1 rounded-2xl text-stone-300 mb-3 mt-1 text-[6px] lg:text-[12px]">
              2019 APR Awards - Pop-ups & Temorpary
            </span>
            <div
              className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 my-2 flex justify-end"
              style={{ ontFamily: "Cutive Mono" }}
            >
              <span>Photo credit: AAVS at the Angewandte Vienna</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailAAVS;
