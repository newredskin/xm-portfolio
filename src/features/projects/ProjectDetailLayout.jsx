// for dev only
let mediaPrefix = "../";

// for publish
// mediaPrefix = "";

function ProjectDetailLayout({ project }) {
  const isVideo = project.images[1].slice(-3) === ("mp4" || "webm");

  return (
    <>
      <div className="flex flex-col gap-y-8">
        <div className="w-full opacity-90">
          {isVideo ? (
            <video
              className="rounded-2xl object-cover"
              key={project.name}
              autoPlay
              loop
              muted
              disablePictureInPicture
              playsInline
            >
              <source src={mediaPrefix + project.images[1]} type="video/mp4" />
            </video>
          ) : (
            <img
              src={mediaPrefix + project.images[1]}
              alt=""
              className="w-full dark:opacity-80"
            />
          )}
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <p
            className="text-[10px] text-stone-500 dark:text-stone-400 w-full lg:w-1/2"
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
          <div className="lg:w-1/2">
            <img
              src={mediaPrefix + project.images[2]}
              alt=""
              className="object-contain w-full dark:invert"
            />
          </div>
        </div>
        <img
          src={mediaPrefix + project.images[3]}
          alt=""
          className="dark:invert"
        />
        <div className="flex flex-col">
          <p
            className="text-[10px] text-stone-500 dark:text-stone-400 w-full lg:w-1/2"
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
        </div>
      </div>
    </>
  );
}

export default ProjectDetailLayout;
