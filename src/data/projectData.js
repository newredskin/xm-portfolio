const awsURL = "https://xm-portfolio.s3.us-east-2.amazonaws.com/projects/";
// const fileURL = "assets/projects/";

// image url settings
let imageURL;
/* for publish mode */
// imageURL = fileURL;

// /* for publish mode */
imageURL = awsURL;

const projectData = [
  {
    name: "designcamp",
    category: ["web-dev"],
    title: "Design Camp",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "designcamp_cover.webp"],
    tools: ["javascript", "html&css", "express", "mongodb", "cloudinary"],
  },
  {
    name: "spas",
    category: ["web-dev"],
    title: "Practice - SPA (single-page apps)",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "spas_cover.mp4"],
    tools: ["react-router", "redux", "tailwindcss"],
  },
  {
    name: "stylinglib",
    category: ["web-dev"],
    title: "Styling Management App",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "styling-lib_v1_cover.mp4"],
    tools: [
      "react",
      "javascript",
      "html&css",
      "express",
      "mongodb",
      "cloudinary",
    ],
  },
  {
    name: "xm-portfolio",
    category: ["web-dev"],
    title: "Xiye's Portfolio Website",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "xm-portfolio_cover.webp"],
    tools: ["react", "javascript", "html", "tailwindcss", "supabase"],
  },
  {
    name: "lv",
    category: ["landscape", "research-visualization"],
    title: "Learning from Las Vegas",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "lv_cover.webp", //0
      "../" + imageURL + "lv/" + "lv_existing_analysis.jpg", //1
      imageURL + "lv/" + "lv_water_issue.webp", //2
      imageURL + "lv/" + "lv_water_strategy_lg.webp", //3
      imageURL + "lv/" + "lv_flipbook.mp4", //4
      imageURL + "lv/" + "lv_model_1.webp", //5
      imageURL + "lv/" + "lv_model_2.webp", //6
      imageURL + "lv/" + "lv_model_3.webp", //7
      imageURL + "lv/" + "lv-diagram_confluence.webp", //8
      imageURL + "lv/" + "lv-diagram_canopy.webp", //9
      imageURL + "lv/" + "lv_rendering_1.webp", //10
      imageURL + "lv/" + "lv_rendering_2.webp", //11
      imageURL + "lv/" + "lv_rendering_3.webp", //12
      imageURL + "lv/" + "lv_enlarged_design.webp", //13
    ],
    tools: [
      "urban research",
      "landscape design",
      "sketchup",
      "photoshop",
      "illustrator",
      "indesign",
    ],
  },
  {
    name: "aavs-workshop",
    category: ["research-visualization"],
    title: "Growth",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "aavs_cover.webp",
      // awsURL + "aavs-workshop/" + "aavs_photo-1.webp",
    ],
    tools: ["processing", "keyshot", "rhino", "grasshopper", "VR/AR"],
  },
  {
    name: "graphic-design",
    category: ["graphic-product"],
    title: "Graphic Design",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "graphic-product_cover.webp"],
    tools: ["sketch", "photoshop", "illustrator"],
  },
  {
    name: "nlsd",
    category: ["landscape"],
    title: "North Lake Shore Drive",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "nlsd_cover.gif",
      // awsURL + "nlsd/" + "nlsd_chicago_b.webp",
    ],
    tools: ["urban design", "sketch", "photoshop"],
  },
  {
    name: "playgrounds",
    category: ["landscape"],
    title: "Playgrounds in Glencoe",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "playgrounds_cover.gif"],
    tools: ["landscape design", "sketch", "photoshop"],
  },
  {
    name: "residential",
    category: ["landscape"],
    title: "High-end Residential in Midwest",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "residential_cover.webp"],
    tools: ["procreate", "sketchup", "lumion"],
  },
  {
    name: "la-built",
    category: ["landscape"],
    title: "Built Landscape Projects",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "la-built_cover.webp"],
    tools: [
      "landscape design",
      "photoshop",
      "indesign",
      "construction documentation",
    ],
  },
  {
    name: "identifiers",
    category: ["landscape"],
    title: "Neighborhood Identifiers",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "identifiers_cover.gif"],
    tools: ["rhino", "construction documentation"],
  },
  {
    name: "logo-design",
    category: ["graphic-product"],
    title: "Logo Design",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "logo-design_cover.webp"],
    tools: ["graphic design", "sketch", "illustrator"],
  },
  {
    name: "art",
    category: ["graphic-product"],
    title: "Art Collection",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "art_cover.webp"],
    tools: ["oil-painting", "sketch", "watercolor"],
  },
  {
    name: "photography",
    category: ["photography"],
    title: "Photography 2016-2023",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [imageURL + "covers/" + "photography_cover.jpg"],
    tools: ["iphone", "dji", "gopro", "insta360"],
  },
];

export default projectData;
