import { motion } from "framer-motion";
import RevealText from "../components/RevealText";

const TESTIMONIALS = [
  {
    quote:
      "I logged my first supernova candidate from a laptop in my kitchen. The catalogue data alone is worth the login.",
    name: "R. Okafor",
    role: "Amateur astronomer, Lagos",
  },
  {
    quote:
      "We used Lumen's open exposures as a teaching tool for three semesters running. No lab budget required.",
    name: "Dr. M. Lindqvist",
    role: "Astrophysics faculty, Uppsala",
  },
  {
    quote:
      "The routing is the clever part. You stop thinking about timezones and just wait for your sky to go dark.",
    name: "S. Patel",
    role: "Node volunteer, Node 7",
  },
];

interface TestimonialsProps {
  reduced: boolean;
}

export default function Testimonials({ reduced }: TestimonialsProps) {
  return (
    <section id="testimonials" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brass">
          The network
        </p>
        <RevealText
          text="People who look up, together."
          as="h2"
          reduced={reduced}
          className="font-display max-w-2xl text-4xl leading-tight text-ivory md:text-5xl"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={reduced ? undefined : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-brass/20 bg-ink-2/60 p-8"
            >
              <blockquote className="font-display text-xl leading-snug text-ivory/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 text-sm text-ivory/60">
                <span className="text-brass-light">{t.name}</span> — {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
