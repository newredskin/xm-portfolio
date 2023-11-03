import ImageCarousel from "../../ui/ImageCarousel";

// for dev only
let mediaPrefix = "../";

// for publish
// let mediaPrefix = "";

/*

*/

function ProjectDetailLv({ project }) {
  const imagesForCarouselTop = [project.images[1], project.images[4]];
  const imagesForCarouselSide = [
    project.images[5],
    project.images[6],
    project.images[7],
    project.images[8],
    project.images[9],
  ];
  const imagesForCarouselBottom = [
    project.images[10],
    project.images[11],
    project.images[12],
  ];
  const invertImagesForCarousel = [project.images[8], project.images[9]];

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
              src={mediaPrefix + project.images[2]}
              alt=""
              className="object-contain w-[80%] lg:w-[90%] dark:invert justify-self-center"
            />
          </div>
        </div>
        <img
          src={mediaPrefix + project.images[3]}
          alt=""
          className="dark:invert w-[80%]"
        />
        <div className="flex flex-col gap-8">
          <p
            className="text-[10px] lg:text-[12px] lg:text-stone-500 dark:text-stone-400 w-full"
            style={{ ontFamily: "Cutive Mono" }}
          >
            Taking advantage of current conditions, regional water strategies
            are reshaping the landscape with decentralized water treatment
            networks along flood control channels. Departing from the
            traditional centralized plant system, this on-site approach
            efficiently distributes reclaimed water, significantly reducing
            discharge rates and volumes. Drawing inspiration from innovative
            techniques by GE Power and successful implementations in British
            Columbia's Dockside Green Neighborhood, it conserves 60% of
            household water. By reducing discharges into the Las Vegas Wash,
            this strategy restores over 300% of the lost wetlands. Recognizing
            the universal human need for water access, even in arid regions,
            this reimagined water network presents a unique opportunity for Las
            Vegas residents. It not only addresses the challenges of the 1990s
            infrastructure but also shapes the future of the anthropocentric
            landscape.
          </p>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-x-6">
            <ImageCarousel
              images={imagesForCarouselSide}
              height="30"
              invertImages={invertImagesForCarousel}
              autoRotate={false}
            />
            <p
              className="text-[10px] lg:text-[12px] lg:text-stone-500 dark:text-stone-400 w-full 2xl:self-center 2xl:mb-6"
              style={{ ontFamily: "Cutive Mono" }}
            >
              In this project, a regional water strategy called "River
              Restoration" that repurposes a channel to redirect water
              discharged from on-site centers has been implemented. We aim to
              revitalize the channel as a valuable public asset instead of a
              remote infrastructure. Recognizing our intrinsic connection to
              water, even in deserts, Las Vegas residents now have unprecedented
              water access in their city.
              <br />
              <br />
              Following the 'River Restoration' approach, we've created a
              network of on-site water centers. This allows us to extend the Las
              Vegas Wash into the channel, transforming it into a precious
              public space. This initiative promises significant water-saving
              benefits, reducing household consumption by 60% and restoring over
              300% of wetlands while providing new accessible water-based public
              areas.
              <br />
              <br />
              The design concept focuses on a 'Riverfront Experience.' This is
              essential in arid cities where the flood control channel serves as
              the only public waterfront. By exposing the hidden sewer system
              and creating natural habitats, we offer both functional and
              recreational benefits to wildlife and residents. In the
              Anthropocene era, desert communities have embraced their local
              river environment as part of daily life.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img
            src={mediaPrefix + project.images[13]}
            alt=""
            className="shadow-md rounded-2xl dark:opacity-90"
          />
          <ImageCarousel
            images={imagesForCarouselBottom}
            height="30"
            isHideControl={true}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectDetailLv;
