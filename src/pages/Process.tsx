import { useEffect, useRef } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import StaticAtom from "../components/StaticAtom";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const STAGES = [
  { title: "Discovery", deliverable: "Workflow maps, constraints, and a scoped problem statement.", collab: "Structured workshops with the people who do the work, not just stakeholders." },
  { title: "Strategy", deliverable: "A technical approach and project roadmap with named trade-offs.", collab: "A shared plan reviewed with your team before any design work starts." },
  { title: "UX/UI Design", deliverable: "User flows, wireframes, and an interactive prototype.", collab: "Usability feedback loops before a single line of production code." },
  { title: "Architecture", deliverable: "System architecture, data models, and integration contracts.", collab: "Technical review session so your team understands the shape of the system." },
  { title: "Development", deliverable: "Working software delivered in reviewable increments.", collab: "Short, regular check-ins instead of long silent sprints." },
  { title: "Testing", deliverable: "Manual and automated test coverage against real usage patterns.", collab: "Bug triage sessions with clear severity and ownership." },
  { title: "Deployment", deliverable: "Automated, monitored release into production.", collab: "A go-live plan agreed on before launch day, not improvised during it." },
  { title: "Maintenance", deliverable: "Documentation, monitoring, and an optional support retainer.", collab: "A clean handover — your system, your choice of what comes next." },
];

export default function Process() {
  const { reduced } = useMotionPrefs();
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      end: "bottom 60%",
      scrub: true,
      onUpdate: (self) => {
        if (fillRef.current) fillRef.current.style.height = `${self.progress * 100}%`;
        if (dotRef.current) dotRef.current.style.top = `${self.progress * 100}%`;
      },
    });

    return () => trigger.kill();
  }, [reduced]);

  return (
    <>
      <Seo
        title="Our Process"
        description="Namitron Infotech's eight-stage development process, from discovery to ongoing maintenance."
        path="/process"
      />

      <PageHero
        label="Our process"
        title="A particle-to-product journey, not a black box."
        description="Every engagement moves through the same eight stages, each with its own deliverables and a clear picture of how we'll collaborate."
        visual={<StaticAtom />}
      />

      <Section className="border-t border-edge/10">
        <div ref={containerRef} className="relative mx-auto max-w-3xl pl-10">
          <div className="absolute left-2 top-0 h-full w-px bg-edge/20" aria-hidden="true" />
          <div ref={fillRef} className="absolute left-2 top-0 w-px bg-cyan" style={{ height: 0 }} aria-hidden="true" />
          <div
            ref={dotRef}
            className="absolute left-2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-glow"
            style={{ top: 0 }}
            aria-hidden="true"
          />

          <ol className="space-y-14">
            {STAGES.map((s, i) => (
              <Reveal key={s.title} delay={0} y={16}>
                <li className="relative -ml-10 pl-10">
                  <span className="font-mono-label absolute left-10 -top-1 text-[11px] text-cyan">0{i + 1}</span>
                  <h2 className="font-display text-xl text-fog">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted">
                    <span className="text-fog/70">Deliverables: </span>
                    {s.deliverable}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    <span className="text-fog/70">Collaboration: </span>
                    {s.collab}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
