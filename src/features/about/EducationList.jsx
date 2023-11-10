import { AtSymbolIcon } from "@heroicons/react/24/outline";

function EducationList() {
  return (
    <ul className="mt-24 md:mx-10 flex flex-col gap-6 mb-16">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <AtSymbolIcon className="w-[24px] h-[24px] md:w-[36px] md:h-[36px]  justify-self-center" />
          <div className="hidden md:block md:col-start-2 md:col-span-1">
            <img
              src="UMN-logo.webp"
              alt="logo of UMN"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-start-2 md:col-start-3 col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Master of Landscape Architecture</h3>
            <p className="text-sm text-stone-500">University of Minnesota</p>
          </div>
          <p className="col-start-9 col-span-4 justify-self-end self-start text-sm">
            2-year
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start"
            style={{ fontFamily: "Cutive Mono" }}
          >
            At the University of Minnesota, I pursued a Master of Landscape
            Architecture, an enriching journey that equipped me to tackle
            diverse urban complexities through innovative landscape design. The
            curriculum was comprehensive, including construction technologies
            and materials, plant materials and ecology, media and representation
            , alongside deep dives into research and mapping methods. This
            multifaceted education enabled me to address a variety of urban
            issues such as water challenge in Las Vegas, waterfront development
            in Duluth, The highway barrier in north Minneapolis, and combating
            food deserts in Chicago. These experiences have honed my ability to
            conceptualize and implement effective landscape solutions in varied
            urban settings.
          </p>
        </div>
      </li>
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <AtSymbolIcon className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] justify-self-center" />
          <div className="hidden md:block md:col-start-2 md:col-span-1">
            <img
              src="Tongji-logo.webp"
              alt="logo of UMN"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-start-2 md:col-start-3 col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Bachelor of Engineering</h3>
            <p className="text-sm text-stone-500">Tongji University</p>
          </div>
          <p className="col-start-9 col-span-4 justify-self-end self-start text-sm">
            4-year
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start"
            style={{ fontFamily: "Cutive Mono" }}
          >
            My foundational journey in the realm of architecture and landscape
            engineering began at Tongji University, where I completed my
            Bachelor of Engineering. The program provided me with a solid
            grounding in both theoretical and practical aspects of architectural
            and landscape engineering. I delved into subjects such as design
            basics, architectural mechanics, computer graphics, architectural
            structures, and the history of art, architecture, and landscape
            architecture. The curriculum also included specialized courses in
            landscape ecology, landscape engineering and technology, as well as
            an introduction to remote sensing and GIS. This diverse educational
            tapestry laid the groundwork for my advanced studies and
            professional pursuits in landscape architecture.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default EducationList;
