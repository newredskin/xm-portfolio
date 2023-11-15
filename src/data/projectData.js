import { imageURL } from "../devSwitch";

const projectData = [
  {
    name: "designcamp",
    category: ["web-dev"],
    title: "Arch Camp",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "designcamp_cover.webp",
      imageURL + "designcamp/" + "designcamp_video_laptop.mp4",
      imageURL + "designcamp/" + "designcamp_video_laptop_dark.mp4",
    ],
    tools: [
      ["web full-stack basics"],
      ["javascript", "html&css", "express", "mongoDB", "cloudinary"],
    ],
  },
  {
    name: "spas",
    category: ["web-dev"],
    title: "Practice - SPA (single-page apps)",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "spas_cover.webp",
      imageURL + "spas/" + "spa_wildoasis.mp4", //1
      imageURL + "spas/" + "spa_wildoasis_dark.mp4", //2
      imageURL + "spas/" + "spa_pizza.mp4", //3
      imageURL + "spas/" + "spa_pizza_dark.mp4", //4
      imageURL + "spas/" + "spa_worldwise.mp4", //5
      imageURL + "spas/" + "spa_worldwise_dark.mp4", //6
    ],
    tools: [
      ["react basics"],
      ["react-router", "react-query", "redux", "tailwindcss"],
    ],
  },
  {
    name: "stylinglib",
    category: ["web-dev"],
    title: "StylingLab",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "styling-lib_v1_cover.mp4",
      imageURL + "styling-lib/" + "styling-lib_diagram.png",
      imageURL + "styling-lib/" + "styling-lib_diagram_dark.png",
    ],
    tools: [
      ["system design", "prototype development"],
      ["react", "javascript"],
    ],
  },
  {
    name: "xm-portfolio",
    category: ["web-dev"],
    title: "Xiye's Portfolio Website",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "xm-portfolio_cover.gif",
      imageURL + "xm-portfolio/" + "xm-portfolio_mobile_view.webp", //1
      imageURL + "xm-portfolio/" + "xm-portfolio_responsive_1.mp4", //2
      imageURL + "xm-portfolio/" + "xm-portfolio_responsive_1_dark.mp4", //3
      imageURL + "xm-portfolio/" + "xm-portfolio_responsive_2.mp4", //4
      imageURL + "xm-portfolio/" + "xm-portfolio_responsive_2_dark.mp4", //5
    ],
    tools: [
      ["web design", "responsive design"],
      ["react", "javascript", "html", "tailwindcss", "AWS"],
    ],
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
      ["urban research", "landscape design"],
      ["sketchup", "photoshop", "illustrator", "indesign"],
    ],
  },
  {
    name: "aavs-workshop",
    category: ["research-visualization"],
    title: "Styx",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "aavs_cover.webp",
      imageURL + "aavs/" + "aavs_video.mp4",
      imageURL + "aavs/" + "aavs_obj_settings.webp", //2
      imageURL + "aavs/" + "aavs_obj_length.webp", //3
      imageURL + "aavs/" + "aavs_obj_result.webp", //4
      imageURL + "aavs/" + "aavs_obj_1.webp", //5
      imageURL + "aavs/" + "aavs_obj_2.webp", //6
      imageURL + "aavs/" + "aavs_obj_3.webp", //7
      imageURL + "aavs/" + "aavs_obj_4.webp", //8
      imageURL + "aavs/" + "aavs_prototype.webp", //9
      imageURL + "aavs/" + "aavs_model.webp", //10
      imageURL + "aavs/" + "aavs_built.webp", //11
      imageURL + "aavs/" + "aavs_photo 1.webp", //12
      imageURL + "aavs/" + "aavs_timelapse.mp4", //13
    ],
    tools: [
      ["computational design"],
      ["processing", "keyshot", "rhino", "grasshopper", "VR/AR"],
    ],
  },
  {
    name: "graphic-design",
    category: ["graphic-product"],
    title: "Graphic Design",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "graphic-product_cover.webp",
      [
        //HF
        imageURL + "graphic/" + "graphic_hongfa_logo.webp",
        imageURL + "graphic/" + "graphic_hf_bag_red.webp", //1
        imageURL + "graphic/" + "graphic_hf_others_red.webp", //2
        imageURL + "graphic/" + "graphic_hf_bag_purple.webp", //3
        imageURL + "graphic/" + "graphic_hf_others_purple.webp", //4
      ],
      [
        //MN_LOGO
        imageURL + "graphic/" + "graphic_mn_logo.webp",
        imageURL + "graphic/" + "graphic_mn_poster_1.webp", //1
        imageURL + "graphic/" + "graphic_mn_poster_2.webp", //2
        imageURL + "graphic/" + "graphic_mn_poster_3.webp", //3
        imageURL + "graphic/" + "graphic_mn_products.webp", //4
      ],
    ],
    tools: [
      ["graphic design", "product design"],
      ["procreate", "illustrator", "photoshop", "dimension"],
    ],
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
    tools: [["landscape design"], ["pencil sketch", "procreate", "photoshop"]],
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
    tools: [["urban design"], ["sketch", "photoshop"]],
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
    tools: [
      ["residential design", "construction detailing"],
      ["procreate", "sketchup", "lumion", "autoCAD"],
    ],
  },
  {
    name: "commercial",
    category: ["landscape"],
    title: "Commercial Space",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "la-built_cover.webp",
      [
        //IGL
        imageURL + "commercial/" + "igl_lakefront_east_photo_1.webp",
        imageURL + "commercial/" + "igl_lakefront_east_photo_4.webp",
        imageURL + "commercial/" + "igl_lakefront_west_photo_1.webp",
        imageURL + "commercial/" + "igl_promenade_photo_1.webp",
        imageURL + "commercial/" + "igl_playground_photo_1.webp",
        imageURL + "commercial/" + "igl_project_scope.webp", //5
        imageURL + "commercial/" + "igl_lakefront_site_plan.webp", //6
        imageURL + "commercial/" + "igl_lakefront_patio_site_plan.webp", //7
        imageURL + "commercial/" + "igl_lakefront_east_drone_photo_1.webp", //8
        imageURL + "commercial/" + "igl_lakefront_east_drone_photo_2.webp", //9
        imageURL + "commercial/" + "igl_lakefront_east_photo_2.webp", //10
        imageURL + "commercial/" + "igl_lakefront_east_photo_3.webp", //11
        imageURL + "commercial/" + "igl_firepit_photo.webp", //12
        imageURL + "commercial/" + "igl_lakefront_west_photo_2.webp", //13
        imageURL + "commercial/" + "igl_playground_drone_photo_1.webp", //14
        imageURL + "commercial/" + "igl_mini_queen_elev.webp", //15
        imageURL + "commercial/" + "igl_playground_queen.webp", //16
        imageURL + "commercial/" + "igl_playground_queen_ii.webp", //17
        imageURL + "commercial/" + "igl_playground_photo_6.webp", //18
        imageURL + "commercial/" + "igl_playground_photo_2.webp", //19
        imageURL + "commercial/" + "igl_playground_photo_8.webp", //20
        imageURL + "commercial/" + "igl_playground_photo_4.webp", //21
      ],
      [
        //LYS
        imageURL + "commercial/" + "lys_promenade_venue_entry_rendering.webp",
        imageURL + "commercial/" + "lys_promenade_d1_entry_rendering.webp",
        imageURL + "commercial/" + "lys_promenade_tree_plaza_rendering_1.webp",
        imageURL + "commercial/" + "lys_promenade_tree_plaza_rendering_2.webp",
        imageURL + "commercial/" + "lys_promenade_dropoff_rendering.webp", // 4
        imageURL + "commercial/" + "lys_promenade_plan.webp", // 5
        imageURL + "commercial/" + "lys_open_house_photo_1.webp", // 6
        imageURL + "commercial/" + "lys_open_house_photo_2.webp", // 7
        imageURL + "commercial/" + "lys_promenade_diagram.webp", // 8
        imageURL + "commercial/" + "lys_rooftop_plans.gif", // 9
        imageURL + "commercial/" + "lys_rooftop_rendering_1.webp", // 10
        imageURL + "commercial/" + "lys_rooftop_rendering_2.webp", // 11
        imageURL + "commercial/" + "lys_rooftop_rendering_3.webp", // 12
        imageURL + "commercial/" + "lys_rooftop_rendering_4.webp", // 13
        imageURL + "commercial/" + "lys_rooftop_rendering_5.webp", // 14
        imageURL + "commercial/" + "lys_rooftop_diagram_activities.gif", // 15
      ],
    ],
    tools: [
      ["waterfront design", "streetscape design"],
      ["sketchup", "enscape", "indesign", "construction documentation"],
    ],
  },
  {
    name: "identifiers",
    category: ["landscape"],
    title: "Neighborhood Identifiers",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "identifiers_cover.gif",
      [
        // michigan
        imageURL + "identifiers/" + "identifiers_michigan_model.webp",
        imageURL + "identifiers/" + "identifiers_michigan_photo_1.webp",
        imageURL + "identifiers/" + "michigan_construction_photo_1.webp",
        imageURL + "identifiers/" + "identifiers_michigan_day&night.gif", //3
        imageURL + "identifiers/" + "identifiers_michigan_details_1.webp", //4
        imageURL + "identifiers/" + "identifiers_michigan_details_2.webp", //5
        imageURL + "identifiers/" + "identifiers_michigan_details_3.webp", //6
      ],
      [
        // 10th ward
        imageURL + "identifiers/" + "identifiers_10th_model.webp",
        imageURL + "identifiers/" + "identifiers_10th_photo_1.webp",
        imageURL + "identifiers/" + "identifiers_10th_photo_2.webp",
        imageURL + "identifiers/" + "identifiers_10th_photo_3.webp", //3
        imageURL + "identifiers/" + "identifiers_10th_details_1.webp", //4
        imageURL + "identifiers/" + "identifiers_10th_details_2.webp", //5
      ],
      [
        // sauganash
        imageURL + "identifiers/" + "identifiers_sauganash_model.webp",
        imageURL + "identifiers/" + "identifiers_sauganash_details_1.webp", //1
        imageURL + "identifiers/" + "identifiers_sauganash_details_2.webp", //2
        imageURL + "identifiers/" + "identifiers_sauganash_details_1_bw.webp", //3
        imageURL + "identifiers/" + "identifiers_sauganash_sample_1.webp", //4
        imageURL + "identifiers/" + "identifiers_sauganash_sample_2.webp", //5
        imageURL + "identifiers/" + "identifiers_sauganash_rendering.webp", //6
        imageURL + "identifiers/" + "identifiers_sauganash_colors.gif", //7
      ],
    ],
    tools: [["construction detailing"], ["rhino", "autoCAD"]],
  },
  {
    name: "art",
    category: ["graphic-product"],
    title: "Painting/Sketch",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "art_cover.webp",
      imageURL + "art/" + "art_sketch_1.webp",
      imageURL + "art/" + "art_sketch_2_edit.webp",
      imageURL + "art/" + "art_oil_2.webp",
      imageURL + "art/" + "art_watercolor_1.webp",
    ],
    tools: [["oil-painting", "sketch", "watercolor"], []],
  },
  {
    name: "photography",
    category: ["photography"],
    title: "Photography 2016-2023",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, maiores!",
    images: [
      imageURL + "covers/" + "photography_cover.webp", //0
      imageURL + "photography/" + "bigbend_1.webp", //1
      imageURL + "photography/" + "alaska_kayak_2.webp", //2
      imageURL + "photography/" + "dji_colorado_2.webp", //3
      imageURL + "photography/" + "white_sand_2.webp", //4
      imageURL + "photography/" + "alaska_snow_mountain_3.jpg", //5
      imageURL + "photography/" + "colorado_mountain_1.jpg", //6
      imageURL + "photography/" + "maroon_bell_1.webp", //7
    ],
    tools: [
      ["photography", "video editing"],
      ["camera", "dji", "gopro"],
    ],
  },
];

export default projectData;
