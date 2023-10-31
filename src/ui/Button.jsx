function Button({ children, handleClick }) {
  return (
    <div className="outline outline-1 outline-stone-300 text-stone-300 hover:bg-red-700 bg-stone-300/20 transition-colors duration-300 hover:text-stone-200 px-4 py-3 rounded-xl">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default Button;
