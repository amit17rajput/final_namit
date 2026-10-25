import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ArticleCard from "../components/ArticleCard";
import StaticNetwork from "../components/StaticNetwork";
import { blogArticles } from "../data/blog";

const PAGE_SIZE = 4;
const CATEGORIES = ["All", "Engineering", "Design", "AI", "Process", "Cloud"] as const;

export default function Blog() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return blogArticles.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery =
        query.trim() === "" ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      <Seo
        title="Insights"
        description="Editorial articles from Namitron Infotech on engineering, design, AI, process, and cloud infrastructure."
        path="/blog"
      />

      <PageHero
        label="Insights"
        title="Notes on building software that holds up."
        description="Editorial content from our engineering and design teams — practical, specific, and written for people who ship."
        visual={<StaticNetwork />}
      />

      <Section className="border-t border-edge/10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                data-cursor-hover
                onClick={() => {
                  setCategory(c);
                  setVisibleCount(PAGE_SIZE);
                }}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  category === c ? "border-cyan bg-cyan/15 text-cyan" : "border-edge/25 text-muted hover:text-fog"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative block w-full md:w-64">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search articles…"
              className="w-full rounded-full border border-edge/25 bg-navy/50 px-4 py-2 text-sm text-fog placeholder:text-muted focus:border-cyan focus:outline-none"
            />
          </label>
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-muted">No articles match your search.</p>
        )}

        {visibleCount < filtered.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              data-cursor-hover
              onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
              className="rounded-full border border-edge/30 px-6 py-3 text-sm text-fog transition-colors hover:border-cyan hover:text-cyan"
            >
              Load more
            </button>
          </div>
        )}
      </Section>
    </>
  );
}
