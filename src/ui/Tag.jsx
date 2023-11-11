function Tag({ children, color = "bg-stone-500/80" }) {
  return (
    <span
      className={`${color} rounded-full py-1 px-2 text-[10px] md:text-xs text-stone-100 m-1`}
      style={{ fontFamily: "Cutive Mono" }}
    >
      {children}
    </span>
  );
}

export default Tag;
