import { motion } from "framer-motion";
import Seo from "../components/Seo";
import RevealText from "../components/RevealText";
import MagneticButton from "../components/MagneticButton";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import StatCounter from "../components/StatCounter";
import AtomCanvas from "../three/AtomCanvas";
import { useMotionPrefs } from "../hooks/useMotionPrefs";
import { services } from "../data/services";
import { portfolioProjects } from "../data/portfolio";
import { technologyCategories } from "../data/technologies";

const STATS = [
  { value: 60, suffix: "+", label: "Projects engineered" },
  { value: 12, suffix: "", label: "Industries served" },
  { value: 8, suffix: " yrs", label: "Engineering focus" },
  { value: 24, suffix: "/7", label: "Platform monitoring" },
];

const DIFFERENTIATORS = [
  { title: "Discovery before code", body: "We map real workflows before committing to an architecture, so the first build is close to right." },
  { title: "Engineering-led design", body: "Design and engineering sit in the same room from day one — nothing gets handed off blind." },
  { title: "Built to evolve", body: "Modular systems that absorb new requirements without a rewrite twelve months in." },
];

export default function Home() {
  const { reduced, interactive } = useMotionPrefs();

  return (
    <>
      <Seo
        title="Engineering the Next Digital Frontier"
        description="Namitron Infotech designs and engineers intelligent software, scalable platforms, and exceptional digital products."
        path="/"
      />

      <section className="relative overflow-hidden px-6 pb-16 pt-10 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={reduced ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono-label mb-6 text-xs uppercase text-cyan"
            >
              Namitron Infotech
            </motion.p>

            <RevealText
              text="Engineering the Next Digital Frontier."
              as="h1"
              reduced={reduced}
              delay={0.2}
              className="font-display max-w-xl text-4xl leading-[1.08] text-fog sm:text-5xl md:text-6xl"
            />

            <motion.p
              initial={reduced ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-7 max-w-md text-base text-muted md:text-lg"
            >
              We transform ambitious ideas into intelligent software, scalable platforms, and
              exceptional digital experiences.
            </motion.p>

            <motion.div
              initial={reduced ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton to="/contact" enabled={interactive} variant="primary">
                Start Your Project
              </MagneticButton>
              <MagneticButton to="/services" enabled={interactive} variant="ghost">
                Explore Our Expertise
              </MagneticButton>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted/70"
              aria-hidden="true"
            >
              <span className="h-px w-10 bg-edge/40" />
              Scroll to explore
            </motion.p>
          </div>

          <div className="relative mx-auto h-[360px] w-full max-w-lg lg:h-[520px]" aria-hidden="true">
            <AtomCanvas />
          </div>
        </div>
      </section>

      <Section className="border-t border-edge/10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono-label mb-4 text-xs uppercase text-violet">Our philosophy</p>
            <h2 className="font-display text-3xl leading-tight text-fog md:text-4xl">
              Ideas become systems. Systems create possibilities.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-muted md:text-lg">
              Namitron Infotech builds software the way physics builds matter — from small,
              well-understood parts combined with discipline. A single component designed
              well becomes a system; a system designed well becomes a platform your business
              can keep building on. We take on web and mobile products, custom enterprise
              software, AI integrations, and the cloud infrastructure underneath all of it,
              treating each as an engineering problem worth solving properly the first time.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono-label mb-3 text-xs uppercase text-cyan">What we do</p>
            <h2 className="font-display text-3xl text-fog md:text-4xl">Services built around outcomes.</h2>
          </div>
          <MagneticButton to="/services" enabled={interactive} variant="ghost">
            All services
          </MagneticButton>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-10">
          <p className="font-mono-label mb-3 text-xs uppercase text-violet">Technology</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">A stack chosen on merit, not habit.</h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {technologyCategories.flatMap((c) => c.items).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-edge/25 bg-navy/50 px-4 py-2 text-sm text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono-label mb-3 text-xs uppercase text-cyan">Selected work</p>
            <h2 className="font-display text-3xl text-fog md:text-4xl">Concept projects, built to show how we think.</h2>
          </div>
          <MagneticButton to="/portfolio" enabled={interactive} variant="ghost">
            Full portfolio
          </MagneticButton>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-12">
          <p className="font-mono-label mb-3 text-xs uppercase text-violet">Why Namitron</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">Three decisions we don't compromise on.</h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08} className="rounded-2xl border border-edge/20 bg-navy/40 p-8">
              <h3 className="font-display text-xl text-fog">{d.title}</h3>
              <p className="mt-3 text-sm text-muted">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10 text-center">
        <Reveal className="mx-auto max-w-2xl rounded-3xl border border-edge/20 bg-gradient-to-b from-navy to-space p-12">
          <h2 className="font-display text-3xl text-fog md:text-4xl">Ready to build the next system?</h2>
          <p className="mt-4 text-muted">
            Tell us what you're trying to solve. We'll tell you honestly whether we're the right team for it.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" enabled={interactive}>
              Start Your Project
            </MagneticButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
