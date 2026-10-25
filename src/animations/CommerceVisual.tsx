import { motion } from "framer-motion";
import TiltGroup from "./TiltGroup";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const CARDS = [
  { x: -70, y: -40, z: 10, price: "$128", accent: "#55E6FF" },
  { x: 60, y: -20, z: -20, price: "$64", accent: "#528BFF" },
  { x: -20, y: 50, z: 30, price: "$212", accent: "#9A7BFF" },
];

export default function CommerceVisual() {
  const { reduced } = useMotionPrefs();

  return (
    <TiltGroup max={8} className="h-full w-full">
      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute left-1/2 top-1/2 h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-edge/25 bg-navy/90 p-4 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div className="h-2 w-16 rounded bg-fog/15" />
          <div className="h-5 w-5 rounded-full bg-cyan/30" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="h-20 rounded-lg bg-cyan/10" />
          <div className="h-20 rounded-lg bg-plasma/10" />
        </div>
        <div className="mt-4 flex items-center justify-between rounded-lg border border-edge/20 bg-space px-3 py-2">
          <span className="text-xs text-muted">Checkout</span>
          <span className="rounded-full bg-cyan px-3 py-1 text-[10px] font-medium text-space">Pay now</span>
        </div>
      </motion.div>

      {CARDS.map((c, i) => (
        <motion.div
          key={i}
          initial={reduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          className="absolute left-1/2 top-1/2 flex h-14 w-24 items-center justify-center rounded-lg border border-edge/30 bg-navy text-sm font-medium shadow-xl"
          style={{
            transform: `translate3d(calc(-50% + ${c.x}px), calc(-50% + ${c.y}px), ${c.z}px)`,
            color: c.accent,
          }}
        >
          {c.price}
        </motion.div>
      ))}
    </TiltGroup>
  );
}
