import { useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ConnectedComponents from "../animations/ConnectedComponents";
import { portfolioProjects, type ProjectCategory } from "../data/portfolio";

const CATEGORIES: ProjectCategory[] = ["Web", "Mobile", "SaaS", "Enterprise", "AI"];

export default function Portfolio() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const projects =
    filter === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <Seo
        title="Portfolio"
        description="Concept projects demonstrating how Namitron Infotech approaches web, mobile, SaaS, enterprise, and AI engineering."
        path="/portfolio"
      />

      <PageHero
        label="Portfolio"
        title="Concept projects, built to show how we think."
        description="These are demonstration projects built to show our process and engineering judgment, clearly labeled as concept work until replaced with real client case studies."
        visual={<ConnectedComponents />}
      />

      <Section className="border-t border-edge/10">
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {(["All", ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              type="button"
              data-cursor-hover
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === c ? "border-cyan bg-cyan/15 text-cyan" : "border-edge/25 text-muted hover:text-fog"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="py-16 text-center text-muted">No concept projects in this category yet.</p>
        )}
      </Section>
    </>
  );
}
