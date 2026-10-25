import { useMotionPrefs } from "../hooks/useMotionPrefs";

const NODES = [
  { id: "core", x: 170, y: 130, r: 20, color: "#55E6FF", label: "Core" },
  { id: "n1", x: 60, y: 60, r: 12, color: "#528BFF" },
  { id: "n2", x: 280, y: 60, r: 12, color: "#528BFF" },
  { id: "n3", x: 60, y: 210, r: 12, color: "#9A7BFF" },
  { id: "n4", x: 280, y: 210, r: 12, color: "#9A7BFF" },
];

const PATHS = [
  "M170,130 L60,60",
  "M170,130 L280,60",
  "M170,130 L60,210",
  "M170,130 L280,210",
];

export default function CloudTopology() {
  const { reduced } = useMotionPrefs();
  const core = NODES[0];

  return (
    <svg viewBox="0 0 340 260" className="h-full w-full" aria-hidden="true">
      {PATHS.map((d, i) => (
        <path key={i} id={`cloud-path-${i}`} d={d} fill="none" stroke="#7DAEFF" strokeOpacity="0.25" strokeWidth="1.5" />
      ))}
      {NODES.slice(1).map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill={n.color} fillOpacity="0.1" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke={n.color} strokeWidth="1.5" />
          <rect x={n.x - 5} y={n.y - 4} width="10" height="8" rx="1.5" fill={n.color} fillOpacity="0.6" />
        </g>
      ))}
      <circle cx={core.x} cy={core.y} r={core.r + 10} fill={core.color} fillOpacity="0.1" />
      <circle cx={core.x} cy={core.y} r={core.r} fill="none" stroke={core.color} strokeWidth="2" />
      <circle cx={core.x} cy={core.y} r="5" fill={core.color} />

      {!reduced &&
        PATHS.map((_, i) => (
          <circle key={i} r="3" fill="#55E6FF">
            <animateMotion dur={`${3 + i * 0.6}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1">
              <mpath href={`#cloud-path-${i}`} />
            </animateMotion>
          </circle>
        ))}
    </svg>
  );
}
