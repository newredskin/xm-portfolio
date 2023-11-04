import ImageCarousel from "../../ui/ImageCarousel";

// for dev only
let mediaPrefix = "../";

// for publish
// let mediaPrefix = "";

/*

*/

function ProjectDetailNLSD({ project }) {
  const imagesForCarouselTop = [
    project.images[0],
    project.images[1],
    project.images[2],
    project.images[3],
    project.images[4],
    project.images[5],
    project.images[6],
  ];
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
        <ImageCarousel
          images={imagesForCarouselTop}
          height="30"
          duration={8300}
        />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5">
          <div className="flex flex-col gap-3 lg:flex-row">
            <p
              className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 w-full"
              style={{ ontFamily: "Cutive Mono" }}
            >
              Lake Shore Drive, once conceived by Daniel Burnham as a "boulevard
              through a park" in his 1909 Plan of Chicago, has evolved into a
              bustling thoroughfare. Today, it accommodates a daily influx of
              150,000 cars and 44,000 bus passengers, serving as a critical
              transportation artery in the city. <br />
              <br />
              Our focus is on the North Lake Shore Drive(NLSD) Phase I Study,
              specifically targeting the northern section of this national
              expressway. Spanning seven miles along Lake Michigan, this iconic
              urban infrastructure runs through the scenic Lincoln Park. Our
              mission is to explore a comprehensive range of improvement
              options, with a primary objective of redefining the delicate
              balance between urban conveniences and natural serenity.
              <br />
              <br />
              Our dedicated team shoulders various responsibilities, including
              spatial analysis, in-depth scrutiny of the local flora, exploring
              alternative intersection designs, and envisioning a versatile
              multi-use trail system. Collaborating alongside a skilled team of
              consultants, we work tirelessly to incorporate perspectives,
              create detailed schematics, and ensure that our project is
              informed by valuable insights from governing bodies and the
              community.
              <br />
              <br />
              As a key team member, I am entrusted with shaping the conceptual
              landscape and urban designs at crucial points, such as Chicago Ave
              and Oak Street Beach. I'm also responsible for producing the final
              presentation materials, which play a vital role in engaging the
              public throughout the project's development.
            </p>
            <div className="flex flex-col justify-center items-center ">
              <img
                src={mediaPrefix + project.images[7]}
                alt=""
                className="w-[80%] lg:w-full dark:opacity-80 "
              />
              <img
                src={mediaPrefix + project.images[8]}
                alt=""
                className="w-[80%] lg:w-full dark:opacity-80 "
              />
              <p
                className="text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400 lg:self-start mt-1 lg:mt-2"
                style={{ ontFamily: "Cutive Mono" }}
              >
                Chicago Tribune, July 13 2017
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={mediaPrefix + project.images[9]}
              alt=""
              className="w-[80%] lg:w-full dark:opacity-80 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailNLSD;
