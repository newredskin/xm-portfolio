// import ImageCarousel from "../../ui/ImageCarousel";

// for dev only
// let mediaPrefix = "../";

// for publish
let mediaPrefix = "";

/*

*/

function ProjectDetailPhotography({ project }) {
  // const imagesForCarouselTop = [project.images[0]];
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

  //Michigan https://player.vimeo.com/video/880903509?h=8eab2114d7&portrait=0&autopause=1&muted=1&byline=0&color=b9261c

  //Chicago https://player.vimeo.com/video/880903232?h=270e05fa29&autoplay=1&loop=1&portrait=0&autopause=1&muted=1&color=b9261c

  return (
    <>
      <div className="flex flex-col gap-y-6 items-center overflow-hidden">
        {/* <ImageCarousel images={imagesForCarouselTop} height="30" /> */}
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
            width: "100%",
            // backgroundColor: "#B9261C",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/880903232?h=270e05fa29&autoplay=1&loop=1&portrait=0&autopause=1&muted=1&color=b9261c&byline=0&title=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>

        <div className="flex flex-col gap-3 lg:gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 md:gap-x-6 ">
            <div className="lg:col-span-2 flex flex-col items-center justify-between gap-3 md:gap-6">
              <p
                className=" text-[10px] lg:text-[12px] text-stone-500 dark:text-stone-400"
                style={{ ontFamily: "Cutive Mono" }}
              >
                Picture this: Me, my camera, and the great outdoors. My idea of
                a good time is hitting the trails with my husband, backpacking
                through stunning landscapes, and capturing every breathtaking
                view I stumble upon. Whether it's a mesmerizing mountain peak, a
                serene lakeside sunset, or a hidden gem in the wilderness, I'm
                on a mission to frame the world's beauty. <br />
                <br />
                But that's not the end of the story. Back home, I'm the video
                wizard who brings those adventures to life. Through the magic of
                video editing, I weave together the sights and sounds of my
                travels, creating immersive experiences that transport you to
                the heart of nature's wonders. Join me on a visual journey where
                every click of the camera and every frame in the video tell a
                story of exploration and inspiration.
              </p>
              <img
                src={mediaPrefix + project.images[1]}
                alt=""
                className="scale-[90%] md:scale-100 flex-auto object-cover"
              />
            </div>
            <div className="lg:col-start-3 lg:col-span-3 flex flex-col gap-3">
              <img src={mediaPrefix + project.images[2]} alt="" className="" />
              <img src={mediaPrefix + project.images[3]} alt="" className="" />
            </div>
            <div className="lg:col-start-1 lg:col-span-3 flex flex-col gap-3">
              <div
                className="self-start"
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                  width: "100%",
                  // backgroundColor: "#042F2E",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/880903509?h=8eab2114d7&portrait=0&autopause=1&muted=1&byline=0&color=b9261c&title=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  title="2022 Fall - Chicago Lakefront - Part I"
                ></iframe>
              </div>
              <img src={mediaPrefix + project.images[5]} alt="" className="" />
              <img
                src={mediaPrefix + project.images[7]}
                alt=""
                className="flex-auto object-cover"
              />
            </div>
            <div className="lg:col-start-4 lg:col-span-2 flex flex-col gap-3">
              <img src={mediaPrefix + project.images[4]} alt="" className="" />
              <img src={mediaPrefix + project.images[6]} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailPhotography;

/*
     <div
            className="lg:col-start-3 lg:col-span-3"
            style={{
              padding: "56.25% 0 0 0",
              position: "relative",
              width: "100%",
              backgroundColor: "#042F2E",
            }}
          >
            <iframe
              src=""
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="2022 Fall - Chicago Lakefront - Part I"
            ></iframe>
          </div>


*/
