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
    name: "identifiers",
    category: "landscape",
    title: "Neighborhood Identifiers",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "identifiers/" + "identifiers.gif"],
    tools: ["rhino", "photoshop", "construction documentation"],
  },
];

export default projectData;
