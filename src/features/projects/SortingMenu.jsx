const buttonStyle =
  "bg-red-700 text-stone-300 p-2 rounded-xl transition-all duration-300";

function SortingMenu({ activeSort, handleSort }) {
  return (
    <ul
      className="flex gap-2 lg:justify-center items-center my-10 md:text-sm text-xs"
      style={{ fontFamily: "Cutive Mono" }}
    >
      <li>
        <button
          onClick={() => handleSort("all")}
          className={`${buttonStyle} ${
            activeSort === "all"
              ? "bg-red-700 text-stone-200 px-5"
              : "bg-opacity-0 text-teal-900"
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
              ? "bg-red-700 text-stone-200 px-5"
              : "bg-opacity-0 text-teal-900"
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
              ? "bg-red-700 text-stone-200 px-5"
              : "bg-opacity-0 text-teal-900"
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
              ? "bg-red-700 text-stone-200 px-5"
              : "bg-opacity-0 text-teal-900"
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
              ? "bg-red-700 text-stone-200 px-5"
              : "bg-opacity-0 text-teal-900"
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
              ? "bg-red-700 text-stone-200 px-5"
              : "bg-opacity-0 text-teal-900"
          }`}
        >
          Photography
        </button>
      </li>
    </ul>
  );
}

export default SortingMenu;
