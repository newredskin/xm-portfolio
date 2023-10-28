function SkillTag({ children, color }) {
  return (
    <div
      className={`inline-block text-xs text-stone-200 p-1.5 rounded-3xl text-center ${color}`}
    >
      <span>{children}</span>
    </div>
  );
}

export default SkillTag;
