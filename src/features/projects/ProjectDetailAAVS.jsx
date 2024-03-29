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
      <div className="flex flex-col items-center gap-y-6 overflow-hidden">
        <div className="mb-3 opacity-90">
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
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col justify-between gap-4 lg:w-[40%]">
            <p
              className="text-xs text-stone-500 dark:text-stone-400 lg:text-sm "
              style={{ fontFamily: "Cutive Mono" }}
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
          <div className="flex flex-col gap-4 lg:w-[60%]">
            <ImageCarousel images={imagesForCarouselSide1} dotPadding="py-4" />
            <ImageCarousel
              images={imagesForCarouselSide2}
              autoRotate={false}
              dotPadding="py-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-col gap-4 opacity-90 lg:w-1/2">
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
            <span className="absolute left-1 top-1 mb-3 mt-1 rounded-2xl bg-red-700 px-2 py-1 text-[8px] text-stone-300 lg:left-3 lg:top-3 lg:px-2 lg:text-[12px]">
              2019 APR Awards - Pop-ups & Temporary
            </span>
            <div
              className="my-2 flex justify-end text-[10px] text-stone-500 dark:text-stone-400 lg:text-sm"
              style={{ fontFamily: "Cutive Mono" }}
            >
              <span>Photo credit: AA Visiting School</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailAAVS;
