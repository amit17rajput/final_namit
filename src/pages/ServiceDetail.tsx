import { useParams, Navigate } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import RevealText from "../components/RevealText";
import MagneticButton from "../components/MagneticButton";
import BrowserStack from "../animations/BrowserStack";
import PhoneStack from "../animations/PhoneStack";
import ArchitectureGraph from "../animations/ArchitectureGraph";
import DesignPanels from "../animations/DesignPanels";
import CloudTopology from "../animations/CloudTopology";
import CommerceVisual from "../animations/CommerceVisual";
import NeuralNetworkCanvas from "../three/NeuralNetworkCanvas";
import { getServiceBySlug, type ServiceVisual } from "../data/services";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const VISUALS: Record<ServiceVisual, React.ComponentType> = {
  browser: BrowserStack,
  mobile: PhoneStack,
  architecture: ArchitectureGraph,
  design: DesignPanels,
  ai: NeuralNetworkCanvas,
  cloud: CloudTopology,
  commerce: CommerceVisual,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { reduced, interactive } = useMotionPrefs();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/404" replace />;

  const Visual = VISUALS[service.visual];

  return (
    <>
      <Seo title={service.title} description={service.summary} path={`/services/${service.slug}`} />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]} />

      <section className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-mono-label mb-5 text-xs uppercase text-cyan">{service.tagline}</p>
            <RevealText
              text={service.title}
              as="h1"
              reduced={reduced}
              className="font-display max-w-xl text-4xl leading-tight text-fog md:text-5xl"
            />
            <p className="mt-6 max-w-xl text-base text-muted md:text-lg">{service.summary}</p>
            <div className="mt-10">
              <MagneticButton to="/contact" enabled={interactive}>
                Start Your Project
              </MagneticButton>
            </div>
          </div>
          <div className="relative mx-auto h-[300px] w-full max-w-md lg:h-[400px]" aria-hidden="true">
            <Visual />
          </div>
        </div>
      </section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-10">
          <p className="font-mono-label mb-3 text-xs uppercase text-violet">Why it matters</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">Benefits</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {service.benefits.map((b, i) => (
            <Reveal key={b} delay={i * 0.06} className="rounded-2xl border border-edge/20 bg-navy/40 p-6 text-sm text-muted">
              {b}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-10">
          <p className="font-mono-label mb-3 text-xs uppercase text-cyan">Capabilities</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">What's included</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {service.capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="rounded-2xl border border-edge/20 bg-navy/40 p-7">
              <h3 className="font-display text-lg text-fog">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <Reveal className="mb-10">
          <p className="font-mono-label mb-3 text-xs uppercase text-violet">How we work</p>
          <h2 className="font-display text-3xl text-fog md:text-4xl">Workflow</h2>
        </Reveal>
        <ol className="grid gap-4 md:grid-cols-5">
          {service.workflow.map((step, i) => (
            <Reveal key={step} delay={i * 0.05} className="rounded-xl border border-edge/20 bg-navy/30 p-5">
              <span className="font-mono-label text-[11px] text-cyan">0{i + 1}</span>
              <p className="mt-2 text-sm text-muted">{step}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-edge/10 text-center">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl text-fog md:text-4xl">
            Ready to talk about {service.shortTitle.toLowerCase()}?
          </h2>
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
