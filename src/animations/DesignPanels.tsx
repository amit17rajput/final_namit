import { motion } from "framer-motion";
import TiltGroup from "./TiltGroup";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const PANELS = [
  { z: -50, x: -50, y: -30, rot: -6, label: "Wireframe", accent: "#9A7BFF" },
  { z: -10, x: 40, y: 10, rot: 4, label: "Prototype", accent: "#528BFF" },
  { z: 30, x: -10, y: 30, rot: -2, label: "Design system", accent: "#55E6FF" },
];

export default function DesignPanels() {
  const { reduced } = useMotionPrefs();

  return (
    <TiltGroup max={9} className="h-full w-full">
      {PANELS.map((p, i) => (
        <motion.div
          key={p.label}
          initial={reduced ? undefined : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          className="absolute left-1/2 top-1/2 h-48 w-64 rounded-xl border border-edge/25 bg-navy/90 p-4 shadow-2xl"
          style={{
            transform: `translate3d(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px), ${p.z}px) rotateZ(${p.rot}deg)`,
          }}
        >
          <p className="font-mono-label text-[10px] uppercase" style={{ color: p.accent }}>
            {p.label}
          </p>
          <div className="mt-3 h-20 rounded-lg" style={{ background: `${p.accent}18`, border: `1px solid ${p.accent}33` }} />
          <div className="mt-3 flex gap-2">
            <div className="h-6 w-6 rounded-full" style={{ background: `${p.accent}55` }} />
            <div className="h-6 flex-1 rounded bg-fog/10" />
          </div>
        </motion.div>
      ))}
    </TiltGroup>
  );
}
