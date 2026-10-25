export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "Design" | "AI" | "Process" | "Cloud";
  date: string;
  readTime: string;
  accent: "cyan" | "plasma" | "violet";
  body: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "designing-systems-that-outlive-their-first-version",
    title: "Designing Systems That Outlive Their First Version",
    excerpt: "The first version of any system is a guess. The architecture decisions that matter are the ones that make the second and third versions cheaper.",
    category: "Engineering",
    date: "2026-08-04",
    readTime: "6 min read",
    accent: "cyan",
    body: [
      "Every system we've built has been wrong in its first version — not broken, just wrong about something: a workflow assumption, a data shape, a volume estimate. That's not a failure of planning. It's what happens when software meets a business that's still moving.",
      "The architecture decisions that actually pay off aren't the ones that get version one perfectly right. They're the ones that keep version two affordable: clear module boundaries, data models that don't assume today's edge cases are permanent, and integration points designed to be replaced rather than patched around.",
      "In practice, that means we spend real time in discovery mapping what's likely to change versus what's structural. A checkout flow's promotional rules will change constantly; its relationship to inventory and payment settlement won't. We build flexibility where change is expected and stability where it isn't — not uniform flexibility everywhere, which just adds complexity without buying anything.",
      "The teams that get burned by technical debt usually aren't the ones who moved fast. They're the ones who couldn't tell which parts of their system were allowed to be rigid and which needed room to move.",
    ],
  },
  {
    slug: "what-we-actually-mean-when-we-say-ai-integration",
    title: "What We Actually Mean When We Say 'AI Integration'",
    excerpt: "Most AI integration work is unglamorous: data plumbing, evaluation harnesses, and deciding where a model should never be allowed to act alone.",
    category: "AI",
    date: "2026-07-18",
    readTime: "5 min read",
    accent: "violet",
    body: [
      "'AI integration' gets used to describe everything from a chatbot widget to a fully automated decision pipeline, and the gap between those is enormous. When we scope AI work, the first question isn't which model to use — it's what happens when the model is wrong, and who notices.",
      "A surprising amount of the actual engineering effort goes into things that have nothing to do with model selection: building a retrieval layer grounded in the right source data, instrumenting outputs so failures are visible instead of silent, and designing the handoff points where a human reviews or overrides the system.",
      "We're deliberately conservative about where we'll let a model act without review. Summarizing a document and routing a support ticket are different risk profiles than approving a refund or editing a medical record. The architecture should make that distinction explicit, not leave it to a prompt instruction that quietly gets ignored.",
      "Done well, this work looks boring from the outside — a feature that quietly saves a team hours a week. That's usually the sign it was scoped correctly.",
    ],
  },
  {
    slug: "the-case-for-slower-discovery",
    title: "The Case for Slower Discovery",
    excerpt: "Teams that skip discovery to 'move fast' usually end up rebuilding the same feature twice. Discovery is the cheapest phase of a project, by a wide margin.",
    category: "Process",
    date: "2026-06-29",
    readTime: "4 min read",
    accent: "cyan",
    body: [
      "Discovery is the least expensive phase of any project and the one most often compressed under deadline pressure. That trade looks reasonable in the moment and almost never is in retrospect.",
      "The cost of a wrong assumption grows with every phase it survives. An unclear requirement caught in a discovery workshop costs an afternoon of conversation. The same assumption caught in QA costs a sprint of rework. Caught in production, it costs trust.",
      "We run discovery as structured workshops with the people who actually do the work being automated or digitized — not just the stakeholders who commissioned the project. The gap between how a process is described and how it's actually performed is almost always where the real requirements live.",
      "None of this makes a project slower overall. It moves the slow, uncertain part to the point where changing your mind is nearly free.",
    ],
  },
  {
    slug: "observability-is-a-design-decision-not-a-tool",
    title: "Observability Is a Design Decision, Not a Tool",
    excerpt: "Buying a monitoring dashboard doesn't make a system observable. Observability comes from decisions made while the system is still being designed.",
    category: "Cloud",
    date: "2026-05-11",
    readTime: "5 min read",
    accent: "plasma",
    body: [
      "It's common to treat observability as something you add after launch — point a monitoring tool at the system and call it done. By then, the questions you'll need to answer during an incident have already been decided, by whatever the system happened to log.",
      "Real observability starts with a question: when this breaks at 2am, what will the on-call engineer need to know in the first five minutes? That question should shape what gets logged, what gets traced, and what triggers an alert, long before the system ships.",
      "We design service boundaries with this in mind — structured logging with consistent correlation IDs, tracing across service calls, and alerts tied to user-facing symptoms rather than internal metrics nobody checks until something's already wrong.",
      "The payoff isn't just faster incident response. It's that most incidents get caught and understood before a customer ever notices.",
    ],
  },
  {
    slug: "what-a-design-system-is-actually-for",
    title: "What a Design System Is Actually For",
    excerpt: "A design system isn't a component library. It's a way of making sure design and engineering keep agreeing with each other as a product grows.",
    category: "Design",
    date: "2026-04-22",
    readTime: "4 min read",
    accent: "violet",
    body: [
      "A component library is a deliverable. A design system is an agreement — about spacing, hierarchy, and interaction patterns — that design and engineering both keep honoring as a product adds features over eighteen months of teams, not just one sprint.",
      "The failure mode we see most often isn't a missing component library. It's a component library nobody trusts, because the Figma file and the shipped product drifted apart within a quarter, and now every new feature re-litigates spacing and type scale from scratch.",
      "We treat the token layer — color, type, spacing, motion — as the actual source of truth, with both design files and code reading from the same definitions rather than two people maintaining two versions of the same decision.",
      "When that holds, a design system stops being documentation nobody reads and starts being the reason a four-person product team can still ship something that feels coherent a year later.",
    ],
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 2): BlogArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return blogArticles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .slice(0, count)
    .concat(blogArticles.filter((a) => a.slug !== slug && a.category !== current.category))
    .slice(0, count);
}
