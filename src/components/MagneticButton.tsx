import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MotionLink = motion(Link);

interface MagneticButtonProps {
  to: string;
  children: React.ReactNode;
  enabled: boolean;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function MagneticButton({
  to,
  children,
  enabled,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    variant === "primary"
      ? "border-cyan/50 bg-cyan/10 text-fog hover:border-cyan hover:bg-cyan hover:text-space hover:shadow-glow"
      : "border-edge/60 bg-transparent text-fog hover:border-violet hover:text-violet";

  return (
    <MotionLink
      ref={ref}
      to={to}
      data-cursor-hover
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 focus-visible:-translate-y-0.5 ${base} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
      >
        →
      </span>
    </MotionLink>
  );
}
