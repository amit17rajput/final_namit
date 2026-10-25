interface StaticAtomProps {
  animate?: boolean;
}

export default function StaticAtom({ animate = true }: StaticAtomProps) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      role="img"
      aria-label="Abstract illustration of an atom: a glowing nucleus orbited by three electron paths, representing engineering intelligence."
    >
      <div
        className={`absolute h-24 w-24 rounded-full bg-cyan/70 blur-xl ${animate ? "motion-safe-pulse" : ""}`}
        style={animate ? { animation: "atom-pulse 3s ease-in-out infinite" } : undefined}
      />
      <div className="absolute h-10 w-10 rounded-full bg-gradient-to-br from-cyan to-plasma" />
      <svg viewBox="0 0 300 300" className="relative h-full w-full max-w-sm">
        <g
          className={animate ? "motion-safe-spin" : ""}
          style={{
            transformOrigin: "150px 150px",
            animation: animate ? "atom-spin 40s linear infinite" : undefined,
          }}
        >
          <ellipse cx="150" cy="150" rx="130" ry="50" fill="none" stroke="#55E6FF" strokeOpacity="0.4" strokeWidth="1" />
          <ellipse
            cx="150"
            cy="150"
            rx="130"
            ry="50"
            fill="none"
            stroke="#528BFF"
            strokeOpacity="0.4"
            strokeWidth="1"
            transform="rotate(60 150 150)"
          />
          <ellipse
            cx="150"
            cy="150"
            rx="130"
            ry="50"
            fill="none"
            stroke="#9A7BFF"
            strokeOpacity="0.4"
            strokeWidth="1"
            transform="rotate(120 150 150)"
          />
        </g>
      </svg>
    </div>
  );
}
