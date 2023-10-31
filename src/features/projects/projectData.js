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
      supabaseURL + "aavs-workshop/" + "aavs_built" + ".webp",
      supabaseURL + "aavs-workshop/" + "aavs_photo-1" + ".webp",
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
      supabaseURL + "nlsd/" + "nlsd_chicago_a" + ".webp",
      supabaseURL + "nlsd/" + "nlsd_chicago_b" + ".webp",
    ],
    tools: ["urban design", "photoshop", "rhino", "sketch"],
  },
  {
    name: "test",
    title: "TEST",
    category: "landscape",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "nlsd/" + "nlsd_chicago_b" + ".webp"],
    tools: ["urban design", "photoshop", "rhino", "sketch"],
  },
  {
    name: "test2",
    title: "TEST2",
    category: "landscape",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [supabaseURL + "aavs-workshop/" + "aavs_photo-2" + ".webp"],
    tools: ["urban design", "photoshop", "rhino", "sketch"],
  },
];

export default projectData;

/* 
"aavs"
https://zxbbnoueosxqdkkigbmp.supabase.co/storage/v1/object/public/projects/aavs-workshop/aavs-attractors.webp
https://zxbbnoueosxqdkkigbmp.supabase.co/storage/v1/object/public/projects/aavs-workshop/aavs-basic-settings.webp?t=2023-10-30T16%3A38%3A05.327Z
https://zxbbnoueosxqdkkigbmp.supabase.co/storage/v1/object/public/projects/aavs-workshop/aavs-basic-settings.webp?t=2023-10-30T16%3A38%3A05.327Z



*/
