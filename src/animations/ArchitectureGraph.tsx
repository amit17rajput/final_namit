import { useMotionPrefs } from "../hooks/useMotionPrefs";

const NODES = [
  { id: "a", x: 60, y: 60, color: "#55E6FF" },
  { id: "b", x: 220, y: 40, color: "#528BFF" },
  { id: "c", x: 300, y: 150, color: "#9A7BFF" },
  { id: "d", x: 160, y: 200, color: "#55E6FF" },
  { id: "e", x: 40, y: 180, color: "#528BFF" },
  { id: "f", x: 200, y: 120, color: "#9A7BFF" },
];

const EDGES: [string, string][] = [
  ["a", "f"],
  ["b", "f"],
  ["c", "f"],
  ["d", "f"],
  ["e", "f"],
  ["a", "e"],
  ["b", "c"],
];

export default function ArchitectureGraph() {
  const { reduced } = useMotionPrefs();
  const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 340 260" className="h-full w-full" aria-hidden="true">
      {EDGES.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#7DAEFF"
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="4 4"
            className={reduced ? "" : "animate-[dash_12s_linear_infinite]"}
          />
        );
      })}
      {NODES.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="14" fill={n.color} fillOpacity="0.12" />
          <circle cx={n.x} cy={n.y} r="6" fill={n.color} />
        </g>
      ))}
      <style>{`@keyframes dash { to { stroke-dashoffset: -80; } }`}</style>
    </svg>
  );
}
