import { motion } from "framer-motion";
import TiltGroup from "./TiltGroup";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

function Phone({
  z,
  x,
  rot,
  accent,
  opacity = 1,
}: {
  z: number;
  x: number;
  rot: number;
  accent: string;
  opacity?: number;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 h-[280px] w-[140px] rounded-[1.75rem] border-2 border-edge/30 bg-navy p-1.5 shadow-2xl"
      style={{
        transform: `translate3d(calc(-50% + ${x}px), -50%, ${z}px) rotateZ(${rot}deg)`,
        opacity,
      }}
    >
      <div className="h-full w-full overflow-hidden rounded-[1.4rem] bg-space">
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-fog/15" />
        <div className="p-2.5">
          <div className="h-16 rounded-lg" style={{ background: `${accent}22` }} />
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-full rounded bg-fog/10" />
            <div className="h-1.5 w-4/5 rounded bg-fog/10" />
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((k) => (
              <div key={k} className="h-8 rounded-md border border-edge/15" style={{ background: `${accent}14` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhoneStack() {
  const { reduced } = useMotionPrefs();

  return (
    <TiltGroup max={10} className="h-full w-full">
      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-full w-full"
      >
        <Phone z={-50} x={-70} rot={-10} accent="#9A7BFF" opacity={0.7} />
        <Phone z={-20} x={70} rot={10} accent="#528BFF" opacity={0.85} />
        <Phone z={30} x={0} rot={0} accent="#55E6FF" />
      </motion.div>
    </TiltGroup>
  );
}
