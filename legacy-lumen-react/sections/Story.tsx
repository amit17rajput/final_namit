import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StoryProps {
  reduced: boolean;
}

export default function Story({ reduced }: StoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const slowY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [80, -80]);
  const fastY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [160, -160]);
  const fade = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="stories"
      ref={ref}
      className="relative flex min-h-[140vh] items-center justify-center overflow-hidden bg-ink-2 px-6"
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(32,64,62,0.55), transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(201,168,106,0.12), transparent 55%)",
        }}
        aria-hidden="true"
      />

      <motion.p
        style={{ y: slowY, opacity: fade }}
        className="absolute left-[8%] top-[20%] font-display text-2xl text-brass/70 md:text-3xl"
      >
        Node 14 — Atacama
      </motion.p>
      <motion.p
        style={{ y: fastY, opacity: fade }}
        className="absolute bottom-[18%] right-[8%] font-display text-2xl text-cyan/70 md:text-3xl"
      >
        Node 22 — La Palma
      </motion.p>

      <motion.div style={{ y: slowY, opacity: fade }} className="relative z-10 max-w-3xl text-center">
        <h2 className="font-display text-4xl leading-tight text-ivory md:text-6xl">
          Somewhere, right now, it is dark enough to see everything.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-ivory/70 md:text-lg">
          Lumen's nodes sit in the driest deserts and the darkest islands left on
          earth — chosen for stillness, not convenience. You're borrowing their sky.
        </p>
      </motion.div>
    </section>
  );
}
