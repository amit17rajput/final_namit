import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Truck,
  Factory,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  challenge: string;
  solution: string;
  technologies: string[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    challenge: "Fragmented patient data and compliance-heavy workflows slow everything down.",
    solution: "Interoperable platforms and secure patient portals built around real clinical workflows, not generic forms.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    slug: "fintech",
    name: "Fintech",
    icon: Landmark,
    challenge: "Trust and speed are both non-negotiable, and most stacks force a trade-off.",
    solution: "Secure, auditable transaction systems with real-time processing and clear data lineage.",
    technologies: ["TypeScript", ".NET", "PostgreSQL", "Kubernetes"],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    challenge: "Learning platforms need to serve wildly different devices, bandwidths, and age groups at once.",
    solution: "Accessible, low-bandwidth-friendly learning platforms with content pipelines instructors can actually manage.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    challenge: "Inventory, storefront, and fulfillment systems rarely agree with each other in real time.",
    solution: "Unified commerce platforms syncing inventory, storefront, and fulfillment without manual reconciliation.",
    technologies: ["React", "Node.js", "Redis", "Docker"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: Truck,
    challenge: "Route, fleet, and warehouse data live in separate systems that don't talk to each other.",
    solution: "Real-time tracking and routing platforms that unify fleet, warehouse, and delivery data.",
    technologies: ["Python", "PostgreSQL", "Google Cloud", "Kubernetes"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    challenge: "Production data is siloed across machines, shifts, and legacy MES systems.",
    solution: "Production monitoring and automation systems that bridge legacy MES tooling with modern dashboards.",
    technologies: ["Python", "Node.js", "MySQL", "Azure"],
  },
  {
    slug: "saas",
    name: "SaaS",
    icon: Layers,
    challenge: "Growing fast without multi-tenant architecture turning into technical debt.",
    solution: "Multi-tenant platform architecture designed to scale from first customer to enterprise rollout.",
    technologies: ["React", "TypeScript", "PostgreSQL", "AWS"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
