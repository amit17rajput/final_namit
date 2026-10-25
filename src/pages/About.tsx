import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import TimelineOrbit from "../animations/TimelineOrbit";
import MagneticButton from "../components/MagneticButton";
import { useMotionPrefs } from "../hooks/useMotionPrefs";
import { Target, Compass, ShieldCheck } from "lucide-react";

const VALUES = [
  { icon: Target, title: "Outcomes over output", body: "We measure a project by the problem it solved, not the number of features it shipped." },
  { icon: Compass, title: "Honest scoping", body: "If something isn't a good fit for us or for you, we'll say so before a contract gets signed." },
  { icon: ShieldCheck, title: "Ownership that outlasts launch", body: "We document and hand over cleanly — your system should never depend on us staying forever." },
];

const TIMELINE = [
  { year: "Foundation", body: "Namitron Infotech started as a small engineering studio focused on one belief: software should be built around how people actually work." },
  { year: "Early systems", body: "Our first projects were custom internal tools for teams whose workflows didn't fit any off-the-shelf product." },
  { year: "Platform work", body: "As clients grew, so did our scope — from single applications to full platform architecture and cloud infrastructure." },
  { year: "Intelligent systems", body: "We began integrating AI into existing workflows where it measurably helped, not where it was simply fashionable." },
  { year: "Today", body: "A full-stack studio spanning web, mobile, custom software, design, AI, and the cloud infrastructure that holds it all up." },
];

const TEAM_DISCIPLINES = [
  { title: "Engineering", body: "Frontend, backend, and platform engineers who own a system end to end." },
  { title: "Product design", body: "Researchers and designers who validate decisions before engineering commits to them." },
  { title: "Delivery", body: "Project leads who keep scope, timeline, and communication honest in both directions." },
  { title: "Quality & operations", body: "QA and DevOps engineers responsible for the system staying reliable after launch." },
];

export default function About() {
  const { interactive } = useMotionPrefs();

  return (
    <>
      <Seo
        title="About Us"
        description="Namitron Infotech's mission, engineering philosophy, and the team structure behind how we build software."
        path="/about"
      />

      <PageHero
        label="About Namitron Infotech"
        title="Built on the belief that small, disciplined parts create powerful systems."
        description="We're a software engineering studio that treats discovery, design, and architecture as seriously as the code itself."
        visual={<TimelineOrbit />}
      />

      <Section className="border-t border-edge/10">
        <div className="grid gap-10 md:grid-cols-3">
          <Reveal>
            <p className="font-mono-label mb-3 text-xs uppercase text-cyan">Mission</p>
            <p className="text-muted">Turn ambitious, complex ideas into software that actually works in production, not just in a demo.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono-label mb-3 text-xs uppercase text-plasma">Vision</p>
            <p className="text-muted">A world where any team with a real workflow problem has access to engineering judgment, not just code output.</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-mono-label mb-3 text-xs uppercase text-violet">Philosophy</p>
            <p className="text-muted">Ideas become systems. Systems create possibilities. Every engagement starts with understanding before building.</p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-12">
          <p className="font-mono-label mb-3 text-xs uppercase text-cyan">How we got here</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">Development approach, in five stages.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-5">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.06} className="border-l-2 border-edge/25 pl-4">
              <p className="font-mono-label text-[11px] uppercase text-cyan">{t.year}</p>
              <p className="mt-2 text-sm text-muted">{t.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-12">
          <p className="font-mono-label mb-3 text-xs uppercase text-violet">Our values</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">What we hold ourselves to.</h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="rounded-2xl border border-edge/20 bg-navy/40 p-8">
              <v.icon className="h-6 w-6 text-cyan" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl text-fog">{v.title}</h3>
              <p className="mt-3 text-sm text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-12">
          <p className="font-mono-label mb-3 text-xs uppercase text-cyan">How we're organized</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">Four disciplines, one accountable team.</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Every project draws from the same four disciplines working together, not handed off
            in sequence — so nothing gets lost in translation between design and engineering.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_DISCIPLINES.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06} className="rounded-2xl border border-edge/20 bg-navy/40 p-7">
              <h3 className="font-display text-lg text-fog">{d.title}</h3>
              <p className="mt-2 text-sm text-muted">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatCounter value={60} suffix="+" label="Projects engineered" />
          <StatCounter value={12} label="Industries served" />
          <StatCounter value={8} suffix=" yrs" label="Engineering focus" />
          <StatCounter value={4} label="Core disciplines" />
        </div>
      </Section>

      <Section className="border-t border-edge/10 text-center">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl text-fog md:text-4xl">Want to see how we'd approach your project?</h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" enabled={interactive}>
              Start a Conversation
            </MagneticButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
