const supabaseURL =
  "https://zxbbnoueosxqdkkigbmp.supabase.co/storage/v1/object/public/projects/";

const projectData = [
  {
    name: "aavs-workshop",
    category: "research-visualization",
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
    name: "nlsd",
    category: "landscape",
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
    name: "lv",
    category: "landscape",
    title: "Learning from Las Vegas",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "lv/" + "lv_model_3.webp"],
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
    name: "playgrounds",
    category: "landscape",
    title: "Playgrounds in Glencoe",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "playgrounds/" + "woodlawn.gif"],
    tools: ["landscape design", "sketch", "photoshop"],
  },
  {
    name: "residential",
    category: "landscape",
    title: "High-end Residential in Midwest",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "residential/" + "rankin_rendering_meadow.webp"],
    tools: ["procreate", "sketchup", "lumion"],
  },
  {
    name: "xm-portfolio",
    category: "web-dev",
    title: "Xiye's Portfolio Website",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "xm-portfolio/" + "xm-portfolio.mp4"],
    tools: ["react", "javascript", "html", "tailwindcss", "supabase"],
  },
  {
    name: "identifiers",
    category: "landscape",
    title: "Neighborhood Identifiers",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "identifiers/" + "identifiers.gif"],
    tools: ["rhino", "construction documentation"],
  },
  {
    name: "food-delivery",
    category: "web-dev",
    title: "Practice - Food Delivery App",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "food-delivery/" + "food_cover.webp"],
    tools: ["react-router", "redux", "tailwindcss"],
  },
  {
    name: "photography",
    category: "photography",
    title: "Photography 2016-2023",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "photography/" + "dji_colorado.jpg"],
    tools: ["iphone", "dji", "gopro", "insta360"],
  },
];

export default projectData;
