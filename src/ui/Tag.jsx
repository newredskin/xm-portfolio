function Tag({ children, color = "bg-teal-700/90" }) {
  return (
    <span
      className={`${color} rounded-full py-1 px-2 text-[10px] md:text-xs text-orange-100 m-1`}
      style={{ fontFamily: "Cutive Mono" }}
    >
      {children}
    </span>
  );
}

export default Tag;
