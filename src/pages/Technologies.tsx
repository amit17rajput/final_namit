import { useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import TechConstellationCanvas from "../three/TechConstellationCanvas";
import { technologyCategories } from "../data/technologies";

export default function Technologies() {
  const [active, setActive] = useState<string>("all");

  const visibleCategories =
    active === "all" ? technologyCategories : technologyCategories.filter((c) => c.key === active);

  return (
    <>
      <Seo
        title="Technologies"
        description="The frontend, backend, mobile, database, cloud, AI, and testing technologies Namitron Infotech works with."
        path="/technologies"
      />

      <PageHero
        label="Technology explorer"
        title="Technologies we work with, organized by what they're for."
        description="These are the tools and platforms we draw on for a given project — chosen to fit the problem, not applied by default."
        visual={<TechConstellationCanvas />}
      />

      <Section className="border-t border-edge/10">
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter technology categories">
          <button
            type="button"
            data-cursor-hover
            onClick={() => setActive("all")}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === "all" ? "border-cyan bg-cyan/15 text-cyan" : "border-edge/25 text-muted hover:text-fog"
            }`}
          >
            All
          </button>
          {technologyCategories.map((c) => (
            <button
              key={c.key}
              type="button"
              data-cursor-hover
              onClick={() => setActive(c.key)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === c.key ? "border-cyan bg-cyan/15 text-cyan" : "border-edge/25 text-muted hover:text-fog"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {visibleCategories.map((cat) => (
            <Reveal key={cat.key}>
              <div id={cat.key} className="scroll-mt-28 rounded-2xl border border-edge/20 bg-navy/40 p-8">
                <h2 className="font-display text-xl text-fog">{cat.label}</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-edge/25 bg-space px-4 py-2 text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted/70">
          Listed as technologies we're equipped to work with on a given project — not as vendor
          certifications or formal partnerships.
        </p>
      </Section>
    </>
  );
}
