import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import ConnectedComponents from "../animations/ConnectedComponents";
import { services } from "../data/services";

const LIFECYCLE = [
  { stage: "Discovery", body: "Workshops with your team to map real workflows and constraints." },
  { stage: "Design", body: "Research-backed UX and a visual system before engineering commits." },
  { stage: "Engineering", body: "Iterative development in reviewable increments, not a single opaque drop." },
  { stage: "QA", body: "Manual and automated testing against real usage patterns, not just happy paths." },
  { stage: "Deployment", body: "Automated, monitored releases — never a manual midnight push." },
  { stage: "Support", body: "Documentation and an optional retainer so the system keeps pace with your business." },
];

export default function ServicesOverview() {
  return (
    <>
      <Seo
        title="Services"
        description="Web, mobile, custom software, UI/UX, AI, cloud, and e-commerce engineering services from Namitron Infotech."
        path="/services"
      />

      <PageHero
        label="What we do"
        title="Engineering services for every layer of a digital product."
        description="Each service below is a dedicated discipline at Namitron Infotech — not a line item. Open one to see how we actually work."
        visual={<ConnectedComponents />}
      />

      <Section className="border-t border-edge/10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-12">
          <p className="font-mono-label mb-3 text-xs uppercase text-violet">Project lifecycle</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">Every engagement moves through the same six stages.</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LIFECYCLE.map((l, i) => (
            <Reveal key={l.stage} delay={i * 0.05} className="rounded-2xl border border-edge/20 bg-navy/40 p-6">
              <p className="font-mono-label text-[11px] uppercase text-cyan">0{i + 1}</p>
              <h3 className="mt-2 font-display text-lg text-fog">{l.stage}</h3>
              <p className="mt-2 text-sm text-muted">{l.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
