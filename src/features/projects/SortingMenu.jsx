const buttonStyle =
  "bg-red-700 text-stone-300 p-2 rounded-xl transition-all duration-300";

function SortingMenu({ activeSort, handleSort }) {
  return (
    <ul
      className="flex gap-1 lg:justify-center items-center md:text-sm text-xs rounded-xl"
      style={{ fontFamily: "Cutive Mono" }}
    >
      <li>
        <button
          onClick={() => handleSort("all")}
          className={`${buttonStyle} ${
            activeSort === "all"
              ? "bg-red-700 text-orange-50 px-5 py-4 lg:py-2"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("web-dev")}
          className={`${buttonStyle} ${
            activeSort === "web-dev"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Web Dev
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("landscape")}
          className={`${buttonStyle} ${
            activeSort === "landscape"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Landscape Design
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("research-visualization")}
          className={`${buttonStyle} ${
            activeSort === "research-visualization"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Research/ Visualization
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("graphic-product")}
          className={`${buttonStyle} ${
            activeSort === "graphic-product"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Graphic/Product Design
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("photography")}
          className={`${buttonStyle} ${
            activeSort === "photography"
              ? "bg-red-700 text-orange-50 px-5 py-4 lg:py-2"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Photography
        </button>
      </li>
    </ul>
  );
}

export default SortingMenu;
