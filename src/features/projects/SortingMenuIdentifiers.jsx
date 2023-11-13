const buttonStyle =
  "bg-red-700 text-stone-300 p-2 rounded-xl transition-all duration-300";

function SortingMenuIdentifiers({ activeSort, handleSort }) {
  return (
    <ul
      className="flex gap-1 lg:justify-center items-center md:text-sm text-xs rounded-xl px-2"
      style={{ fontFamily: "Cutive Mono" }}
    >
      <li>
        <button
          onClick={() => handleSort("michigan")}
          className={`${buttonStyle} ${
            activeSort === "michigan"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Motor-Row
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("10th")}
          className={`${buttonStyle} ${
            activeSort === "10th"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          10th Ward
        </button>
      </li>
      <li>
        <button
          onClick={() => handleSort("sauganash")}
          className={`${buttonStyle} ${
            activeSort === "sauganash"
              ? "bg-red-700 text-orange-50 px-5"
              : "bg-opacity-0 text-teal-950 dark:text-stone-300"
          }`}
        >
          Sauganash
        </button>
      </li>
    </ul>
  );
}

export default SortingMenuIdentifiers;
