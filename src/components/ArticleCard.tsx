import { Link } from "react-router-dom";
import type { BlogArticle } from "../data/blog";
import Reveal from "./Reveal";

const ACCENT_GRADIENT: Record<string, string> = {
  cyan: "from-cyan/25 via-navy to-space",
  plasma: "from-plasma/25 via-navy to-space",
  violet: "from-violet/25 via-navy to-space",
};

export default function ArticleCard({ article, index = 0 }: { article: BlogArticle; index?: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <Link to={`/blog/${article.slug}`} data-cursor-hover className="group block">
        <div
          className={`aspect-[16/9] rounded-xl border border-edge/25 bg-gradient-to-br ${ACCENT_GRADIENT[article.accent]}`}
          aria-hidden="true"
        />
        <p className="font-mono-label mt-4 text-[11px] uppercase text-cyan">{article.category}</p>
        <h3 className="mt-2 font-display text-lg text-fog transition-colors group-hover:text-cyan">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
        <p className="mt-3 text-xs text-muted/70">
          {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} ·{" "}
          {article.readTime}
        </p>
      </Link>
    </Reveal>
  );
}
