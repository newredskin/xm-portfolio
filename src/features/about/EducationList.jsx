import { AtSymbolIcon } from "@heroicons/react/24/outline";

function EducationList() {
  return (
    <ul className="mb-16 mt-24 flex flex-col gap-6 md:mx-10">
      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <AtSymbolIcon className="h-[20px] w-[20px] justify-self-center md:h-[36px]  md:w-[36px]" />
          <div className="hidden md:col-span-1 md:col-start-2 md:block">
            <img
              src="UMN-logo.webp"
              alt="logo of UMN"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-6 col-start-2 justify-self-start text-start md:col-start-3">
            <h3 className="font-bold">Master of Landscape Architecture</h3>
            <p className="text-sm text-stone-500 dark:text-orange-50/50">
              University of Minnesota
            </p>
          </div>
          <p className="col-span-4 col-start-9 self-start justify-self-end text-sm">
            2-year
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start"
            style={{ fontFamily: "Cutive Mono" }}
          >
            At the University of Minnesota, I completed my Master's in Landscape
            Architecture, a STEM journey intertwining science and art, preparing
            me to address complex urban issues through innovative design. The
            program's extensive curriculum included in-depth research and
            mapping methods, computer-aided design technology, construction
            techniques and materials, plant materials and ecology, as well as
            media and representation skills. This comprehensive education
            equipped me to tackle diverse urban challenges such as Las Vegas's
            water issues, waterfront development in Duluth, overcoming the
            highway barrier in North Minneapolis, and addressing food deserts in
            Chicago. These experiences refined my skills in conceptualizing and
            executing sustainable landscape solutions across various outdoor
            space.
          </p>
        </div>
      </li>
      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <AtSymbolIcon className="h-[20px] w-[20px] justify-self-center md:h-[36px] md:w-[36px]" />
          <div className="hidden md:col-span-1 md:col-start-2 md:block">
            <img
              src="Tongji-logo.webp"
              alt="logo of UMN"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-6 col-start-2 justify-self-start text-start md:col-start-3">
            <h3 className="font-bold">Bachelor of Engineering</h3>
            <p className="text-sm text-stone-500 dark:text-orange-50/50">
              Tongji University
            </p>
          </div>
          <p className="col-span-4 col-start-9 self-start justify-self-end text-sm">
            4-year
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start"
            style={{ fontFamily: "Cutive Mono" }}
          >
            My educational journey in architecture and landscape engineering
            began at Tongji University, where I earned a Bachelor of
            Engineering, building a robust STEM foundation. The Higher
            Mathematics course, encompassing topics like limits, calculus, and
            the basics of determinants and matrices, provided me with a solid
            grounding in mathematics. Additional courses such as Fundamentals of
            Computers, Visual Basic, Computer Graphics, Computer-Aided Design,
            and an Introduction to Remote Sensing and GIS, laid the groundwork
            for my understanding of computer science fundamentals and the
            efficient use of computer programming in design. The curriculum
            further included specialized courses in architecture and landscape
            design and engineering, equipping me with a well-rounded educational
            background. This diversity in my education laid the groundwork for
            my advanced studies in landscape architecture and expanded my
            expertise into other STEM-related fields.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default EducationList;
