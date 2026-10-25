import { motion } from "framer-motion";
import RevealText from "../components/RevealText";
import MagneticButton from "../components/MagneticButton";

interface HeroProps {
  interactive: boolean;
  reduced: boolean;
}

export default function Hero({ interactive, reduced }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-start justify-center px-6 md:px-12"
    >
      <motion.p
        initial={reduced ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-brass"
      >
        Deep-space observation, for everyone
      </motion.p>

      <RevealText
        text="Observe the unseen."
        as="h1"
        delay={0.35}
        reduced={reduced}
        className="font-display max-w-4xl text-6xl leading-[1.05] text-ivory sm:text-7xl md:text-8xl"
      />

      <motion.p
        initial={reduced ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-8 max-w-lg text-base text-ivory/70 md:text-lg"
      >
        Lumen links a worldwide network of robotic telescopes to your browser —
        live skies, catalogued targets, and a community of people who still look up.
      </motion.p>

      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="mt-12"
      >
        <MagneticButton href="#showcase" enabled={interactive}>
          Open the telescope
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ivory/50 md:left-12"
        aria-hidden="true"
      >
        <span className="h-10 w-px bg-ivory/20" />
        Scroll
      </motion.div>
    </section>
  );
}
