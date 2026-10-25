import { motion } from "framer-motion";
import RevealText from "../components/RevealText";

const STATS = [
  { value: "412", label: "Telescopes online" },
  { value: "38", label: "Countries" },
  { value: "2.1M", label: "Observations logged" },
];

interface AboutProps {
  reduced: boolean;
}

export default function About({ reduced }: AboutProps) {
  return (
    <section id="about" className="relative bg-ink-1 px-6 py-32 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-brass">
            Our story
          </p>
          <RevealText
            text="Built by people who refused to stop looking up."
            as="h2"
            reduced={reduced}
            className="font-display text-4xl leading-tight text-ivory md:text-5xl"
          />
          <p className="mt-8 max-w-xl text-ivory/70 md:text-lg">
            Lumen began as a single rooftop telescope and a question: why should the
            sky belong only to the people who can afford to leave the city. Today
            the network spans six continents, routing clear skies to anyone with a
            browser and a reason to look. Every frame you see is a real exposure,
            queued, captured, and delivered by a telescope pointed at the sky right now.
          </p>
        </div>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 self-center rounded-2xl border border-brass/20 bg-ink-2/60 p-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl text-brass-light">{stat.value}</div>
              <div className="mt-1 text-sm uppercase tracking-[0.15em] text-ivory/60">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
