import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";
import RevealText from "../components/RevealText";

const FEATURES = [
  {
    index: "01",
    title: "Live sky routing",
    body: "Your session is matched to whichever telescope in the network currently sits under a clear, dark sky.",
  },
  {
    index: "02",
    title: "Annotated frames",
    body: "Every exposure arrives pre-annotated — catalogue IDs, magnitudes, and coordinates laid over the raw capture.",
  },
  {
    index: "03",
    title: "Queue & capture",
    body: "Request a target, join the queue, and receive a notification the moment your exposure is captured.",
  },
  {
    index: "04",
    title: "Open data, always",
    body: "Nothing you observe is locked away. Export FITS data or share a session link in one tap.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

interface FeaturesProps {
  interactive: boolean;
  reduced: boolean;
}

export default function Features({ interactive, reduced }: FeaturesProps) {
  return (
    <section id="features" className="relative bg-ink-1 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brass">
          What you get
        </p>
        <RevealText
          text="A telescope network, designed like software."
          as="h2"
          reduced={reduced}
          className="font-display max-w-2xl text-4xl leading-tight text-ivory md:text-5xl"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.index} variants={item} transition={{ duration: 0.7, ease: "easeOut" }}>
              <TiltCard enabled={interactive} className="h-full">
                <div className="font-display text-sm text-brass-light">{feature.index}</div>
                <h3 className="mt-4 font-display text-2xl text-ivory">{feature.title}</h3>
                <p className="mt-3 text-ivory/65">{feature.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
