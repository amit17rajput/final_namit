import { Link } from "react-router-dom";
import type { PortfolioProject } from "../data/portfolio";
import ProjectMockup from "./ProjectMockup";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index = 0 }: { project: PortfolioProject; index?: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <Link to={`/portfolio/${project.slug}`} data-cursor-hover className="group block">
        <ProjectMockup accent={project.accent} />
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg text-fog transition-colors group-hover:text-cyan">
              {project.title}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">{project.client}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <span key={c} className="rounded-full border border-edge/25 px-2.5 py-0.5 text-[11px] text-muted">
              {c}
            </span>
          ))}
        </div>
      </Link>
    </Reveal>
  );
}
