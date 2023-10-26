function Button({ children, handleClick }) {
  return (
    <div className="outline outline-1 outline-stone-300/50 text-stone-300/80 hover:bg-red-700 bg-red-700/0 transition-colors duration-500 hover:text-stone-200 px-4 py-3 rounded-xl">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default Button;
