import { motion } from "framer-motion";
import TiltGroup from "./TiltGroup";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const WINDOWS = [
  { z: -60, x: -40, y: 30, w: "80%", h: "70%", accent: "#9A7BFF", delay: 0 },
  { z: -20, x: 20, y: -10, w: "85%", h: "75%", accent: "#528BFF", delay: 0.15 },
  { z: 20, x: 0, y: 0, w: "92%", h: "82%", accent: "#55E6FF", delay: 0.3 },
];

export default function BrowserStack() {
  const { reduced } = useMotionPrefs();

  return (
    <TiltGroup max={8} className="h-full w-full">
      {WINDOWS.map((w, i) => (
        <motion.div
          key={i}
          initial={reduced ? undefined : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: w.delay }}
          className="absolute left-1/2 top-1/2 overflow-hidden rounded-xl border border-edge/25 bg-navy shadow-2xl"
          style={{
            width: w.w,
            height: w.h,
            transform: `translate3d(calc(-50% + ${w.x}px), calc(-50% + ${w.y}px), ${w.z}px)`,
          }}
        >
          <div className="flex h-6 items-center gap-1.5 border-b border-edge/20 bg-space px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-fog/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-fog/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-fog/20" />
          </div>
          <div className="p-3">
            <div className="h-2 w-2/5 rounded" style={{ background: `${w.accent}55` }} />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-md border border-edge/15" style={{ background: `${w.accent}14` }} />
              <div className="h-10 rounded-md border border-edge/15 bg-space" />
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-fog/10" />
              <div className="h-1.5 w-3/4 rounded bg-fog/10" />
            </div>
          </div>
        </motion.div>
      ))}
    </TiltGroup>
  );
}
