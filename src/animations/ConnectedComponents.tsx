import { motion } from "framer-motion";
import TiltGroup from "./TiltGroup";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const NODES = [
  { x: -80, y: -50, z: 20, accent: "#55E6FF", size: 56 },
  { x: 70, y: -70, z: -10, accent: "#528BFF", size: 44 },
  { x: 90, y: 40, z: 30, accent: "#9A7BFF", size: 50 },
  { x: -60, y: 60, z: -20, accent: "#55E6FF", size: 40 },
  { x: 0, y: 0, z: 50, accent: "#528BFF", size: 64 },
];

export default function ConnectedComponents() {
  const { reduced } = useMotionPrefs();

  return (
    <TiltGroup max={10} className="h-full w-full">
      <svg viewBox="-150 -150 300 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {NODES.map((n, i) =>
          NODES.slice(i + 1).map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="#7DAEFF"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
          ))
        )}
      </svg>
      {NODES.map((n, i) => (
        <motion.div
          key={i}
          initial={reduced ? undefined : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="absolute left-1/2 top-1/2 rounded-2xl border"
          style={{
            width: n.size,
            height: n.size,
            borderColor: `${n.accent}55`,
            background: `${n.accent}1a`,
            transform: `translate3d(calc(-50% + ${n.x}px), calc(-50% + ${n.y}px), ${n.z}px)`,
          }}
        />
      ))}
    </TiltGroup>
  );
}
