type MarkerUnderlineProps = {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "red";
  className?: string;
};

const colorMap = {
  yellow: "bg-marker-yellow",
  blue: "bg-marker-blue",
  red: "bg-marker-red",
} as const;

export default function MarkerUnderline({
  children,
  color = "yellow",
  className = "",
}: MarkerUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <span
        className={`absolute left-0 bottom-[0.08em] w-full h-[0.18em] ${colorMap[color]} -z-10`}
        style={{ transform: "skewX(-6deg)" }}
      />
    </span>
  );
}
