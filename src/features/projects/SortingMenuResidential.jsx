const buttonStyle =
  "bg-red-700 text-stone-300 p-2 rounded-xl transition-all duration-300";

function SortingMenuResidential({ activeSort, handleSort }) {
  return (
    <ul
      className="flex gap-1 lg:justify-center items-center md:text-sm text-xs rounded-xl px-2"
      style={{ fontFamily: "Cutive Mono" }}
    >
      <li>
        <button
          onClick={() => handleSort("lakeside")}
          className={`${buttonStyle} ${
            activeSort === "lakeside"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Lakeside Residence
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("suburban")}
          className={`${buttonStyle} ${
            activeSort === "suburban"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Suburban Residence
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("urban")}
          className={`${buttonStyle} ${
            activeSort === "urban"
              ? "bg-red-700 text-stone-200 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Urban Residence
        </button>
      </li>
    </ul>
  );
}

export default SortingMenuResidential;
