function Button({ children, handleClick }) {
  return (
    <div className="rounded-xl bg-orange-100/40 px-4 py-3 text-orange-100 shadow-lg shadow-orange-100/50 outline outline-1 outline-orange-50 transition-colors duration-300 hover:bg-red-700 hover:text-stone-200 hover:shadow-stone-200 dark:bg-transparent dark:text-stone-300 dark:shadow-orange-50/50 dark:outline-stone-400 dark:hover:bg-red-700">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default Button;
