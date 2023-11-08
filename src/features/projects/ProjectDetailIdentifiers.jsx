import { useState } from "react";

import { mediaPrefix } from "../../devSwitch";
import ImageCarousel from "../../ui/ImageCarousel";
import SortingMenuIdentifiers from "./SortingMenuIdentifiers";

function ProjectDetailIdentifiers({ project }) {
  const imagesForCarouselTopMichigan = [];

  const [activeSort, setActiveSort] = useState("michigan");

  const windowWidth = window.innerWidth;
  const isOnMobile = windowWidth <= 640;

  function handleSort(identifierProject) {
    setActiveSort(identifierProject);
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center overflow-hidden">
        <SortingMenuIdentifiers
          activeSort={activeSort}
          handleSort={handleSort}
        />

        {/* Michigan */}
        {activeSort === "michigan" && (
          <div id="michigan">
            <div className="flex flex-col">
              <ImageCarousel
                images={imagesForCarouselTopMichigan}
                dotPadding="py-10"
                autoRotate={false}
              />
            </div>
            <p
              className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 self-start"
              style={{ ontFamily: "Cutive Mono" }}
            >
              Water scarcity in Las Vegas, a desert environment, has always been
              a pressing issue. Amidst this arid landscape, an unexpected oasis
              thrives: the Las Vegas Wash, a 12-mile stretch in the southeast of
              the valley. It serves as the primary outlet for stormwater, urban
              runoff, shallow groundwater, and treated effluent from the Las
              Vegas Valley. Originally a dry desert wash, it only saw water
              during rainstorms. However, as the city expanded, the Wash evolved
              into a riparian ecosystem, with its wetlands acting as a natural
              filter for urban runoff before it reaches Lake Mead and the
              Colorado River. Unfortunately, the Wash is now threatened by the
              very urbanization that nurtured it. Over the past 50 years, the
              wetlands have dwindled from 2,000 acres to around 200 acres due to
              increased water discharge and a growing population since the
              1970s.
            </p>
            <img
              src={mediaPrefix + project.images[0]}
              alt=""
              className="object-contain w-full"
            />
          </div>
        )}

        {/* 10th Ward */}
        {activeSort === "10th" && <div id="10th">10th Ward</div>}

        {/* Sauganash */}
        {activeSort === "sauganash" && <div id="sauganash">Sauganash</div>}
      </div>
    </>
  );
}

export default ProjectDetailIdentifiers;
