const buttonStyle =
  "bg-red-700 text-stone-300 p-2 rounded-xl transition-all duration-300";

function SortingMenuCommercial({ activeSort, handleSort }) {
  return (
    <ul
      className="flex gap-1 lg:justify-center items-center md:text-sm text-xs rounded-xl px-2"
      style={{ fontFamily: "Cutive Mono" }}
    >
      <li>
        <button
          onClick={() => handleSort("igl")}
          className={`${buttonStyle} ${
            activeSort === "igl"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Iowa Great Lakes
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("lys")}
          className={`${buttonStyle} ${
            activeSort === "lys"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Lincoln Yards South
        </button>
      </li>
    </ul>
  );
}

export default SortingMenuCommercial;
