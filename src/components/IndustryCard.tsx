import type { Industry } from "../data/industries";
import Reveal from "./Reveal";

export default function IndustryCard({ industry, index = 0 }: { industry: Industry; index?: number }) {
  const Icon = industry.icon;

  return (
    <Reveal delay={index * 0.05} className="rounded-2xl border border-edge/20 bg-navy/50 p-8">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20">
          <Icon className="h-6 w-6 text-cyan" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl text-fog">{industry.name}</h3>
      </div>
      <div className="mt-6 space-y-4 text-sm">
        <div>
          <p className="font-mono-label text-[11px] uppercase text-violet">Challenge</p>
          <p className="mt-1.5 text-muted">{industry.challenge}</p>
        </div>
        <div>
          <p className="font-mono-label text-[11px] uppercase text-cyan">Solution</p>
          <p className="mt-1.5 text-muted">{industry.solution}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {industry.technologies.map((t) => (
          <span key={t} className="rounded-full border border-edge/25 px-3 py-1 text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
