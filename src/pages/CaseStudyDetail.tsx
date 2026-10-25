import { useParams, Navigate } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import RevealText from "../components/RevealText";
import MagneticButton from "../components/MagneticButton";
import ProjectMockup from "../components/ProjectMockup";
import ProjectCard from "../components/ProjectCard";
import { getProjectBySlug, getRelatedProjects } from "../data/portfolio";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { reduced, interactive } = useMotionPrefs();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/404" replace />;

  const related = getRelatedProjects(project.slug);

  return (
    <>
      <Seo title={project.title} description={project.summary} path={`/portfolio/${project.slug}`} />
      <Breadcrumb items={[{ label: "Portfolio", href: "/portfolio" }, { label: project.title }]} />

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono-label mb-4 text-xs uppercase text-cyan">{project.client}</p>
          <RevealText
            text={project.title}
            as="h1"
            reduced={reduced}
            className="font-display text-4xl text-fog md:text-5xl"
          />
          <p className="mt-6 text-lg text-muted">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span key={c} className="rounded-full border border-edge/25 px-3 py-1 text-xs text-muted">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section className="border-t border-edge/10">
        <div className="mx-auto max-w-4xl">
          <ProjectMockup accent={project.accent} />
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-3">
          <Reveal>
            <p className="font-mono-label mb-3 text-xs uppercase text-violet">Challenge</p>
            <p className="text-sm text-muted">{project.challenge}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-mono-label mb-3 text-xs uppercase text-plasma">Approach</p>
            <p className="text-sm text-muted">{project.approach}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-mono-label mb-3 text-xs uppercase text-cyan">Solution</p>
            <p className="text-sm text-muted">{project.solution}</p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-edge/10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="font-mono-label mb-4 text-xs uppercase text-cyan">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full border border-edge/25 bg-navy/40 px-3 py-1.5 text-sm text-muted">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <p className="mt-10 text-xs text-muted/70">
            This is a concept project built to demonstrate process and engineering approach. No
            specific business outcomes are claimed until real client data is supplied.
          </p>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-edge/10">
          <Reveal className="mb-10">
            <h2 className="font-display text-2xl text-fog">Related projects</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-edge/10 text-center">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl text-fog md:text-4xl">Have a similar problem to solve?</h2>
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
