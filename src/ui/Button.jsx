function Button({ children, handleClick }) {
  return (
    <div className="outline outline-1 outline-orange-50 dark:outline-stone-400 text-orange-100 dark:text-stone-300 hover:bg-red-700 dark:hover:bg-red-700 bg-stone-200/60 dark:bg-transparent transition-colors duration-300 hover:text-stone-200 px-4 py-3 rounded-xl shadow-lg shadow-orange-100/50 dark:shadow-orange-50/50 hover:shadow-stone-200">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default Button;
