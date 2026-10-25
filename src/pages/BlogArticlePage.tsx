import { useParams, Navigate } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import RevealText from "../components/RevealText";
import MagneticButton from "../components/MagneticButton";
import ArticleCard from "../components/ArticleCard";
import { getArticleBySlug, getRelatedArticles } from "../data/blog";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const ACCENT_GRADIENT: Record<string, string> = {
  cyan: "from-cyan/25 via-navy to-space",
  plasma: "from-plasma/25 via-navy to-space",
  violet: "from-violet/25 via-navy to-space",
};

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { reduced, interactive } = useMotionPrefs();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/404" replace />;

  const related = getRelatedArticles(article.slug);

  return (
    <>
      <Seo title={article.title} description={article.excerpt} path={`/blog/${article.slug}`} />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: article.title }]} />

      <article className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono-label mb-4 text-xs uppercase text-cyan">
            {article.category} ·{" "}
            {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} ·{" "}
            {article.readTime}
          </p>
          <RevealText
            text={article.title}
            as="h1"
            reduced={reduced}
            className="font-display text-3xl leading-tight text-fog md:text-4xl"
          />
          <div
            className={`mt-8 aspect-[16/7] rounded-xl border border-edge/25 bg-gradient-to-br ${ACCENT_GRADIENT[article.accent]}`}
            aria-hidden="true"
          />

          <div className="prose-invert mt-10 space-y-6 text-[17px] leading-relaxed text-muted">
            {article.body.map((p, i) => (
              <p key={i} className={i === 0 ? "text-fog/90" : undefined}>
                {p}
              </p>
            ))}
          </div>

          <p className="mt-10 border-t border-edge/15 pt-6 text-xs text-muted/60">
            Editorial content written by the Namitron Infotech team. Sample article for
            demonstration purposes.
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <Section className="border-t border-edge/10">
          <Reveal className="mb-10">
            <h2 className="font-display text-2xl text-fog">Related articles</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {related.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-edge/10 text-center">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl text-fog md:text-4xl">Have a project in mind?</h2>
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
