import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

interface TiltGroupProps {
  children: React.ReactNode;
  max?: number;
  className?: string;
}

export default function TiltGroup({ children, max = 10, className = "" }: TiltGroupProps) {
  const { interactive } = useMotionPrefs();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(springY, [0, 1], [max, -max]);
  const rotateY = useTransform(springX, [0, 1], [-max, max]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`[perspective:1200px] ${className}`}
    >
      <motion.div
        style={{ rotateX: interactive ? rotateX : 0, rotateY: interactive ? rotateY : 0 }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {children}
      </motion.div>
    </div>
  );
}
