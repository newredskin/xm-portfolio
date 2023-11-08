import { imageURL } from "../devSwitch";

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
      imageURL + "lv/" + "lv_existing_analysis.jpg", //1
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
    name: "sketches",
    category: ["landscape"],
    title: "The Power of Sketch",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "sketches_cover.gif", //0
      imageURL + "sketches/" + "residential_rk_procreate.mp4", //1
      [
        //2
        imageURL + "sketches/" + "glencoe_central_school_sketch_1.webp",
        imageURL + "sketches/" + "glencoe_central_school_sketch_2.webp",
      ],
      [
        //3
        imageURL + "sketches/" + "nlsd_sketch_1.webp",
        imageURL + "sketches/" + "nlsd_sketch_2.webp",
        imageURL + "sketches/" + "nlsd_sketch_3.webp",
      ],
      [
        //4
        imageURL + "sketches/" + "oc_diagram_before.webp",
        imageURL + "sketches/" + "oc_diagram_after.webp",
      ],
      [
        //5
        imageURL + "sketches/" + "residential_os_sketch_1.webp",
        imageURL + "sketches/" + "residential_os_sketch_2.webp",
        imageURL + "sketches/" + "residential_os_sketch_3.webp",
      ],
      [
        //6
        imageURL + "sketches/" + "woodlawn_sketch_1.webp",
        imageURL + "sketches/" + "woodlawn_sketch_2.webp",
        imageURL + "sketches/" + "woodlawn_sketch_3.webp",
      ],
      [
        //7
        imageURL + "sketches/" + "residential_dv_sketch_1.webp",
        imageURL + "sketches/" + "residential_dv_sketch_2.webp",
        imageURL + "sketches/" + "residential_dv_sketch_3.webp",
      ],
      [
        //8
        imageURL + "sketches/" + "residential_wb_sketch_1.webp",
        imageURL + "sketches/" + "residential_wb_sketch_2.webp",
      ],
      [
        //9
        imageURL + "sketches/" + "oc_sketch_1_south_park.webp",
        imageURL + "sketches/" + "oc_sketch_2_1515.webp",
        imageURL + "sketches/" + "oc_sketch_3_1841.webp",
        imageURL + "sketches/" + "oc_sketch_4_1901.webp",
        imageURL + "sketches/" + "oc_sketch_5_14street.webp",
        imageURL + "sketches/" + "oc_sketch_6_prairie_park.webp",
      ],
      [
        //10
        imageURL + "sketches/" + "train_plaza_sketch_1.webp",
        imageURL + "sketches/" + "train_plaza_sketch_2.webp",
        imageURL + "sketches/" + "train_plaza_sketch_3.webp",
      ],
      [
        //11
        imageURL + "sketches/" + "lys_terrace_sketch_1.webp",
        imageURL + "sketches/" + "lys_terrace_sketch_2.webp",
        imageURL + "sketches/" + "lys_terrace_sketch_3.webp",
        imageURL + "sketches/" + "lys_terrace_sketch_4.webp",
      ],
      [
        //12
        imageURL + "sketches/" + "gt_plaza_sketch_1.webp",
        imageURL + "sketches/" + "gt_plaza_sketch_2.webp",
      ],
    ],
    tools: ["landscape design", "pencil sketch", "procreate", "photoshop"],
  },
  {
    name: "nlsd",
    category: ["landscape"],
    title: "North Lake Shore Drive",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "nlsd_cover.gif", // 0
      imageURL + "nlsd/" + "nlsd_chicago_label.webp", // 1
      imageURL + "nlsd/" + "nlsd_oak.gif", // 2
      imageURL + "nlsd/" + "nlsd_oak_1_label.webp", // 3
      imageURL + "nlsd/" + "nlsd_oak_2_label.webp", // 4
      imageURL + "nlsd/" + "nlsd_lasalle_drive_label.webp", // 5
      imageURL + "nlsd/" + "nlsd_addsion_st_label.webp", // 6
      imageURL + "nlsd/" + "nlsd_news_1.webp", // 7
      imageURL + "nlsd/" + "nlsd_news_2.webp", // 8
      imageURL + "nlsd/" + "nlsd_historic_plan_horizontal.gif", // 9
    ],
    tools: ["urban design", "sketch", "photoshop"],
  },

  {
    name: "residential",
    category: ["landscape"],
    title: "High-end Residences in Midwest",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "residential_cover.webp",
      [
        //davis
        imageURL + "residential/" + "dv_upper_deck_photo_1.webp",
        imageURL + "residential/" + "dv_upper_deck_photo_2.webp",
        imageURL + "residential/" + "dv_upper_deck_stair_photo.webp",
        imageURL + "residential/" + "dv_bluff_stair_photo.webp",
        imageURL + "residential/" + "dv_lower_deck_photo.webp",
        imageURL + "residential/" + "dv_upper_deck_sketch.webp", //5
        imageURL + "residential/" + "dv_upper_deck_cd.webp", //6
        imageURL + "residential/" + "dv_upper_deck_stair_cd.webp", //7
        imageURL + "residential/" + "dv_bluff_structure_3d_1.webp", //8
        imageURL + "residential/" + "dv_bluff_structure_3d_2.webp", //9
        imageURL + "residential/" + "dv_bluff_structure_photo.webp", //10
      ],
      [
        //rankin
        imageURL + "residential/" + "rk_meadow_rendering.webp",
        imageURL + "residential/" + "rk_south_gate_rendering.webp",
        imageURL + "residential/" + "rk_south_yard_rendering.webp",
        imageURL + "residential/" + "rk_pool_rendering.webp",
        imageURL + "residential/" + "rk_bbq_rendering.webp",
        imageURL + "residential/" + "rk_plan_evolve.gif", //5
        imageURL + "residential/" + "rk_sunken_garden_study_sketch.webp", //6
        imageURL + "residential/" + "rk_drive_court_section_sketch.webp", //7
        imageURL + "residential/" + "rk_front_entry_drive.gif", //8
        imageURL + "residential/" + "rk_front_entry_section_sketch.webp", //9
        imageURL + "residential/" + "rk_front_entry.gif", //10
        imageURL + "residential/" + "rk_rear_yard_section_sketch.webp", //11
        imageURL + "residential/" + "rk_rear_yard.gif", //12
        imageURL + "residential/" + "rk_pool_section_sketch.webp", //13
        imageURL + "residential/" + "rk_pool.gif", //14
        imageURL + "residential/" + "rk_front_entry_drive_spread.gif", //15
        imageURL + "residential/" + "rk_front_entry_spread.gif", //16
        imageURL + "residential/" + "rk_rear_yard_spread.gif", //17
        imageURL + "residential/" + "rk_pool_spread.gif", //18
        imageURL + "residential/" + "rk_front_entry_drive_vertical.gif", //19
        imageURL + "residential/" + "rk_front_entry_vertical.gif", //20
        imageURL + "residential/" + "rk_rear_yard_vertical.gif", //21
        imageURL + "residential/" + "rk_pool_vertical.gif", //22
      ],
      [
        //cotton
        imageURL + "residential/" + "ct_front_fencing_photo.webp",
        imageURL + "residential/" + "ct_rear_yard_photo.webp",
        imageURL + "residential/" + "ct_spa_photo.webp",
        imageURL + "residential/" + "ct_initial_fence_study.gif", //3
        imageURL + "residential/" + "ct_initial_gate_study_cut.gif", //4
        imageURL + "residential/" + "ct_detail_wall_transition.gif", //5
        imageURL + "residential/" + "ct_front_gate_study_gate_only.gif", //6
        imageURL + "residential/" + "ct_site_plan.webp", //7
        imageURL + "residential/" + "ct_front_gate_final.webp", //8
        imageURL + "residential/" + "ct_front_entry_photo_2.webp", //9
        imageURL + "residential/" + "ct_front_wall_sketch.webp", //10
        imageURL + "residential/" + "ct_fence_gate_detail.webp", //11
        imageURL + "residential/" + "ct_canopy_detail.webp", //12
        imageURL + "residential/" + "ct_screening_study.gif", //13
      ],
    ],
    tools: ["procreate", "sketchup", "autoCAD", "lumion"],
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
    images: [
      imageURL + "covers/" + "photography_cover.jpg", //0
      imageURL + "photography/" + "bigbend_1.webp", //1
      imageURL + "photography/" + "alaska_kayak_2.webp", //2
      imageURL + "photography/" + "dji_colorado_2.webp", //3
      imageURL + "photography/" + "white_sand_2.webp", //4
      imageURL + "photography/" + "alaska_snow_mountain_3.jpg", //5
      imageURL + "photography/" + "colorado_mountain_1.jpg", //6
      imageURL + "photography/" + "maroon_bell_1.webp", //7
    ],
    tools: ["iphone", "dji", "gopro", "insta360"],
  },
];

export default projectData;
