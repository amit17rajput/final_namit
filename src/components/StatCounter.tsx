import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const { reduced } = useMotionPrefs();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  return (
    <motion.div
      ref={ref}
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6 }}
    >
      <div className="font-display text-4xl text-cyan md:text-5xl">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-sm uppercase tracking-[0.12em] text-muted">{label}</div>
    </motion.div>
  );
}
