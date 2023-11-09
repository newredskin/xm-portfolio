import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";

function ProjectDetailArt({ project }) {
  return (
    <>
      <div className="flex flex-col gap-y-6 items-center overflow-hidden">
        <p
          className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full lg:w-[40%] self-start"
          style={{ ontFamily: "Cutive Mono" }}
        >
          Water scarcity in Las Vegas, a desert environment, has always been a
          pressing issue. Amidst this arid landscape, an unexpected oasis
          thrives: the Las Vegas Wash, a 12-mile stretch in the southeast of the
          valley. It serves as the primary outlet for stormwater, urban runoff,
          shallow groundwater, and treated effluent from the Las Vegas Valley.
          Originally a dry desert wash, it only saw water during rainstorms.
          However, as the city expanded, the Wash evolved into a riparian
          ecosystem, with its wetlands acting as a natural filter for urban
          runoff before it reaches Lake Mead and the Colorado River.
          Unfortunately, the Wash is now threatened by the very urbanization
          that nurtured it. Over the past 50 years, the wetlands have dwindled
          from 2,000 acres to around 200 acres due to increased water discharge
          and a growing population since the 1970s. <br />
          <br />
          Las Vegas' distinctive water challenges open doors to reimagine the
          interplay between aging infrastructures and the human-altered
          landscape. In particular, the flood control channels, acting as the
          vital links between the urban hub and the Las Vegas Wash, stand as the
          intersection between urbanization and nature. To address the issue of
          Wash degradation, a fresh approach to the spatial and environmental
          dynamics becomes pivotal.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:mb-12 mb-6">
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
            <div className="mt-6">
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
