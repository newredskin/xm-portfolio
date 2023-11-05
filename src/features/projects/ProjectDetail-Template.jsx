import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";

function ProjectDetailLv({ project }) {
  const imagesForCarouselTop = [project.images[0]];
  // const imagesForCarouselSide = [
  //   project.images[5],
  //   project.images[6],
  //   project.images[7],
  //   project.images[8],
  //   project.images[9],
  // ];
  // const imagesForCarouselBottom = [
  //   project.images[10],
  //   project.images[11],
  //   project.images[12],
  // ];
  // const invertImagesForCarousel = [project.images[8], project.images[9]];

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center overflow-hidden">
        <ImageCarousel images={imagesForCarouselTop} height="30" />
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5">
          <p
            className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full lg:w-[40%]"
            style={{ ontFamily: "Cutive Mono" }}
          >
            Water scarcity in Las Vegas, a desert environment, has always been a
            pressing issue. Amidst this arid landscape, an unexpected oasis
            thrives: the Las Vegas Wash, a 12-mile stretch in the southeast of
            the valley. It serves as the primary outlet for stormwater, urban
            runoff, shallow groundwater, and treated effluent from the Las Vegas
            Valley. Originally a dry desert wash, it only saw water during
            rainstorms. However, as the city expanded, the Wash evolved into a
            riparian ecosystem, with its wetlands acting as a natural filter for
            urban runoff before it reaches Lake Mead and the Colorado River.
            Unfortunately, the Wash is now threatened by the very urbanization
            that nurtured it. Over the past 50 years, the wetlands have dwindled
            from 2,000 acres to around 200 acres due to increased water
            discharge and a growing population since the 1970s. <br />
            <br />
            Las Vegas' distinctive water challenges open doors to reimagine the
            interplay between aging infrastructures and the human-altered
            landscape. In particular, the flood control channels, acting as the
            vital links between the urban hub and the Las Vegas Wash, stand as
            the intersection between urbanization and nature. To address the
            issue of Wash degradation, a fresh approach to the spatial and
            environmental dynamics becomes pivotal.
          </p>
          <div className="lg:w-[60%] mt-3 flex justify-center">
            <img
              src={mediaPrefix + project.images[0]}
              alt=""
              className="object-contain w-[80%] lg:w-[90%] dark:invert justify-self-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailLv;
