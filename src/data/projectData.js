const supabaseURL =
  "https://zxbbnoueosxqdkkigbmp.supabase.co/storage/v1/object/public/projects/";

const projectData = [
  {
    name: "designcamp",
    category: ["web-dev"],
    title: "Design Camp",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "designcamp/" + "designcamp_cover.webp"],
    tools: ["javascript", "html&css", "express", "mongodb", "cloudinary"],
  },
  {
    name: "spas",
    category: ["web-dev"],
    title: "Practice - SPA (single-page apps)",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "spas/" + "spas_video.mp4"],
    tools: ["react-router", "redux", "tailwindcss"],
  },
  {
    name: "stylinglib",
    category: ["web-dev"],
    title: "Styling Management App",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "styling-lib/" + "styling_lib_v1_cover.mp4"],
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
    images: [supabaseURL + "xm-portfolio/" + "xm-portfolio.webp"],
    tools: ["react", "javascript", "html", "tailwindcss", "supabase"],
  },
  {
    name: "lv",
    category: ["landscape", "research-visualization"],
    title: "Learning from Las Vegas",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      supabaseURL + "lv/" + "lv_model_3.webp",
      supabaseURL + "lv/" + "lv_existing_analysis.jpg",
      supabaseURL + "lv/" + "lv_water_issue.webp",
      supabaseURL + "lv/" + "lv_water_strategy_lg.webp",
      supabaseURL + "lv/" + "lv_flipbook.mp4",
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
      supabaseURL + "aavs-workshop/" + "aavs_built.webp",
      supabaseURL + "aavs-workshop/" + "aavs_photo-1.webp",
    ],
    tools: ["processing", "keyshot", "rhino", "grasshopper", "VR/AR"],
  },
  {
    name: "graphic-design",
    category: ["graphic-product"],
    title: "Graphic Design",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "graphic-product/" + "adp-poster.webp"],
    tools: ["sketch", "photoshop", "illustrator"],
  },
  {
    name: "nlsd",
    category: ["landscape"],
    title: "North Lake Shore Drive",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      supabaseURL + "nlsd/" + "nlsd_chicago.gif",
      supabaseURL + "nlsd/" + "nlsd_chicago_b.webp",
    ],
    tools: ["urban design", "sketch", "photoshop"],
  },
  {
    name: "playgrounds",
    category: ["landscape"],
    title: "Playgrounds in Glencoe",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "playgrounds/" + "woodlawn.gif"],
    tools: ["landscape design", "sketch", "photoshop"],
  },
  {
    name: "residential",
    category: ["landscape"],
    title: "High-end Residential in Midwest",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "residential/" + "rankin_rendering_meadow.webp"],
    tools: ["procreate", "sketchup", "lumion"],
  },
  {
    name: "la-built",
    category: ["landscape"],
    title: "Built Landscape Projects",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "la-built/" + "promenade_1.webp"],
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
    images: [supabaseURL + "identifiers/" + "identifiers.gif"],
    tools: ["rhino", "construction documentation"],
  },
  {
    name: "logo-design",
    category: ["graphic-product"],
    title: "Logo Design",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "logo-design/" + "mn_health_program_logo.webp"],
    tools: ["graphic design", "sketch", "illustrator"],
  },
  {
    name: "art",
    category: ["graphic-product"],
    title: "Art Collection",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "art/" + "oil_painting_1.webp"],
    tools: ["oil-painting", "sketch", "watercolor"],
  },
  {
    name: "photography",
    category: ["photography"],
    title: "Photography 2016-2023",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "photography/" + "dji_colorado.jpg"],
    tools: ["iphone", "dji", "gopro", "insta360"],
  },
];

export default projectData;
