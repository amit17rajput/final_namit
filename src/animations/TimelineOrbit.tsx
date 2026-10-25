import { motion } from "framer-motion";
import TiltGroup from "./TiltGroup";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const NODES = [
  { x: -120, y: 10, accent: "#55E6FF" },
  { x: -55, y: -50, accent: "#528BFF" },
  { x: 10, y: 20, accent: "#9A7BFF" },
  { x: 75, y: -40, accent: "#55E6FF" },
  { x: 130, y: 20, accent: "#528BFF" },
];

export default function TimelineOrbit() {
  const { reduced } = useMotionPrefs();

  return (
    <TiltGroup max={6} className="h-full w-full">
      <svg viewBox="-170 -100 340 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {NODES.slice(1).map((n, i) => (
          <line
            key={i}
            x1={NODES[i].x}
            y1={NODES[i].y}
            x2={n.x}
            y2={n.y}
            stroke="#7DAEFF"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      {NODES.map((n, i) => (
        <motion.div
          key={i}
          initial={reduced ? undefined : { opacity: 0 }}
          animate={
            reduced
              ? { opacity: 1 }
              : { opacity: 1, y: [0, -8, 0] }
          }
          transition={
            reduced
              ? { duration: 0.5 }
              : { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
          }
          className="absolute left-1/2 top-1/2 flex h-10 w-10 items-center justify-center rounded-full border"
          style={{
            borderColor: `${n.accent}66`,
            background: `${n.accent}22`,
            transform: `translate3d(calc(-50% + ${n.x}px), calc(-50% + ${n.y}px), 0)`,
          }}
        >
          <span className="h-2 w-2 rounded-full" style={{ background: n.accent }} />
        </motion.div>
      ))}
    </TiltGroup>
  );
}
