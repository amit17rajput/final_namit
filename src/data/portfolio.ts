export type ProjectCategory = "Web" | "Mobile" | "SaaS" | "Enterprise" | "AI";

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  categories: ProjectCategory[];
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  accent: "cyan" | "plasma" | "violet";
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "meridian-clinical-portal",
    title: "Meridian Clinical Portal",
    client: "Concept project — healthcare",
    categories: ["Web", "Enterprise"],
    summary: "A unified patient and clinician portal consolidating records across three legacy systems.",
    challenge: "Clinicians were switching between three disconnected systems to assemble a single patient view, costing minutes per visit.",
    approach: "Mapped every existing workflow before touching the interface, then built a single data layer behind a deliberately simple clinician-facing UI.",
    solution: "A unified portal with role-based views, audit-logged record access, and a sync layer reconciling all three legacy systems in near real time.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    accent: "cyan",
  },
  {
    slug: "fleetpulse",
    title: "FleetPulse",
    client: "Concept project — logistics",
    categories: ["Web", "SaaS"],
    summary: "Real-time fleet and route visibility for a regional delivery operator.",
    challenge: "Dispatchers had no live visibility into vehicle location or delay risk until a delivery was already late.",
    approach: "Built a lightweight telemetry ingestion pipeline first, proving live data flow before designing a single dashboard around it.",
    solution: "A live routing dashboard with delay prediction, dispatcher alerts, and a mobile companion app for drivers.",
    technologies: ["Python", "React", "PostgreSQL", "Google Cloud"],
    accent: "plasma",
  },
  {
    slug: "ledgerline",
    title: "Ledgerline",
    client: "Concept project — fintech",
    categories: ["SaaS", "Enterprise"],
    summary: "A reconciliation platform for mid-market finance teams closing books across multiple ledgers.",
    challenge: "Monthly close took finance teams up to nine days, largely spent manually reconciling entries across ledgers.",
    approach: "Modeled the reconciliation logic as an explicit, auditable rules engine rather than a black box, so finance teams could trust and adjust it.",
    solution: "An automated reconciliation engine with exception queues, audit trails, and a close that now takes under two days.",
    technologies: ["TypeScript", ".NET", "PostgreSQL", "Kubernetes"],
    accent: "cyan",
  },
  {
    slug: "atrium-mobile",
    title: "Atrium",
    client: "Concept project — retail",
    categories: ["Mobile"],
    summary: "A cross-platform loyalty and ordering app for a regional retail chain.",
    challenge: "The existing loyalty program lived only on plastic cards, with no path to personalized offers or mobile ordering.",
    approach: "Prioritized a fast, native-feeling ordering flow first, treating loyalty and personalization as a layer on top rather than the starting point.",
    solution: "A React Native app covering ordering, loyalty points, and push-based personalized offers, shipped to both app stores.",
    technologies: ["React Native", "Node.js", "Redis", "AWS"],
    accent: "violet",
  },
  {
    slug: "signal-insights",
    title: "Signal Insights",
    client: "Concept project — SaaS analytics",
    categories: ["SaaS", "AI"],
    summary: "An LLM-assisted analytics layer that lets non-technical teams query product data in plain language.",
    challenge: "Product and marketing teams depended entirely on the data team for even simple metric questions.",
    approach: "Scoped the assistant tightly to a governed metrics layer first, avoiding open-ended querying against raw production data.",
    solution: "A natural-language query interface grounded in a governed metrics layer, with every answer traceable to its underlying query.",
    technologies: ["Python", "LLM APIs", "React", "PostgreSQL"],
    accent: "plasma",
  },
  {
    slug: "foundry-commerce",
    title: "Foundry Commerce",
    client: "Concept project — e-commerce",
    categories: ["Web", "AI"],
    summary: "A headless storefront with AI-assisted merchandising for a direct-to-consumer brand.",
    challenge: "Manual merchandising couldn't keep pace with a fast-rotating catalogue, and checkout drop-off was climbing.",
    approach: "Rebuilt checkout and merchandising as separate concerns, instrumenting each step before optimizing either.",
    solution: "A headless storefront with AI-assisted product recommendations and a checkout flow rebuilt around measured drop-off points.",
    technologies: ["Next.js", "Node.js", "Redis", "LLM APIs"],
    accent: "cyan",
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, count = 2): PortfolioProject[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  return portfolioProjects
    .filter((p) => p.slug !== slug && p.categories.some((c) => current.categories.includes(c)))
    .slice(0, count);
}
