import {
  Globe,
  Smartphone,
  Cpu,
  PenTool,
  BrainCircuit,
  Cloud,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export type ServiceVisual =
  | "browser"
  | "mobile"
  | "architecture"
  | "design"
  | "ai"
  | "cloud"
  | "commerce";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;
  visual: ServiceVisual;
  benefits: string[];
  capabilities: { title: string; description: string }[];
  workflow: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web",
    tagline: "Websites and platforms built to hold up under real traffic.",
    summary:
      "Modern responsive websites, enterprise portals, SaaS applications, and dashboards — engineered for speed, accessibility, and long-term maintainability.",
    icon: Globe,
    visual: "browser",
    benefits: [
      "Sub-second load times through disciplined performance budgets",
      "Accessible, semantic markup that holds up to audits",
      "Architecture that scales from MVP to enterprise traffic",
    ],
    capabilities: [
      { title: "Frontend engineering", description: "React, Next.js, and TypeScript interfaces with real component systems, not one-off pages." },
      { title: "Backend & APIs", description: "Node.js, Python, or .NET services with clear contracts and sane data models." },
      { title: "Performance & SEO", description: "Core Web Vitals, structured data, and rendering strategy decided deliberately, not left to defaults." },
      { title: "Design systems", description: "Reusable component libraries so new pages ship fast without drifting off-brand." },
    ],
    workflow: [
      "Technical discovery and architecture planning",
      "Design system and component build-out",
      "Iterative frontend + backend development",
      "Performance, accessibility, and QA passes",
      "Deployment, monitoring, and handover",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile",
    tagline: "Native-feeling apps for iOS, Android, and everywhere between.",
    summary:
      "Cross-platform and native mobile applications — from product design through engineering, integrations, testing, and store publishing.",
    icon: Smartphone,
    visual: "mobile",
    benefits: [
      "One codebase, two platforms, no compromise on feel",
      "Integrations wired to your existing backend, not a demo stub",
      "Store submission and release management handled end-to-end",
    ],
    capabilities: [
      { title: "Product design", description: "Interaction patterns native to iOS and Android, not a web page wrapped in a shell." },
      { title: "App engineering", description: "React Native, Swift, and Kotlin, chosen per project rather than by default." },
      { title: "Integrations", description: "Payments, push notifications, auth, and device APIs wired in properly." },
      { title: "Testing & release", description: "Device-matrix QA and a managed path through App Store and Play Store review." },
    ],
    workflow: [
      "Platform strategy: native, cross-platform, or hybrid",
      "UX flows and interactive prototyping",
      "Engineering sprints with weekly builds",
      "Device and integration testing",
      "Store submission and post-launch support",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    tagline: "Bespoke systems for the workflows off-the-shelf software ignores.",
    summary:
      "Business automation, enterprise systems, and workflow platforms designed around how your teams actually work — not a template they adapt to.",
    icon: Cpu,
    visual: "architecture",
    benefits: [
      "Software shaped to your process, not the reverse",
      "Modular architecture that absorbs new requirements without a rewrite",
      "Integration-first: built to sit inside your existing stack",
    ],
    capabilities: [
      { title: "Discovery & architecture", description: "Mapping real workflows before a line of code gets written." },
      { title: "Platform engineering", description: "Modular services and clear domain boundaries that age well." },
      { title: "Systems integration", description: "ERPs, CRMs, and legacy systems connected without duct tape." },
      { title: "Maintenance & evolution", description: "Ongoing ownership so the system keeps pace with the business." },
    ],
    workflow: [
      "Process mapping and requirements discovery",
      "Systems architecture and data modeling",
      "Modular development in reviewable increments",
      "Integration with existing tools and data",
      "Handover, documentation, and maintenance planning",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    tagline: "Interfaces shaped by research, not assumption.",
    summary:
      "User research, journey mapping, wireframing, prototyping, and design systems — built to make complex products feel obvious to use.",
    icon: PenTool,
    visual: "design",
    benefits: [
      "Decisions grounded in user research, not personal taste",
      "Design systems that keep engineering and design in sync",
      "Prototypes real enough to test before a line of code ships",
    ],
    capabilities: [
      { title: "Research", description: "Interviews, journey mapping, and usability testing before the pixels start." },
      { title: "UX architecture", description: "Information architecture and flows that reduce decisions per screen." },
      { title: "Interface design", description: "Visual systems with real typographic and spatial discipline." },
      { title: "Prototyping", description: "Clickable prototypes that de-risk build decisions early." },
    ],
    workflow: [
      "Discovery interviews and competitive research",
      "Information architecture and user flows",
      "Wireframes and interactive prototypes",
      "Visual design system and component specs",
      "Usability testing and handover to engineering",
    ],
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortTitle: "AI & ML",
    tagline: "Practical intelligence, wired into workflows that need it.",
    summary:
      "LLM integrations, intelligent automation, predictive analytics, and conversational interfaces — scoped around real business use cases, not demos.",
    icon: BrainCircuit,
    visual: "ai",
    benefits: [
      "Use cases scoped to measurable business value, not novelty",
      "Responsible deployment: evaluation, guardrails, and human review built in",
      "Integration into existing tools instead of a bolt-on chatbot",
    ],
    capabilities: [
      { title: "LLM integration", description: "Retrieval-augmented workflows and tool-calling agents grounded in your data." },
      { title: "Predictive analytics", description: "Models trained on your historical data to support real decisions." },
      { title: "Workflow automation", description: "Document processing, triage, and summarization wired into existing tools." },
      { title: "Responsible AI practice", description: "Evaluation, monitoring, and clear boundaries on what a model should and shouldn't decide." },
    ],
    workflow: [
      "Use-case scoping and feasibility assessment",
      "Data readiness and pipeline design",
      "Model or LLM-workflow development",
      "Evaluation, guardrails, and human-in-the-loop review",
      "Deployment and ongoing monitoring",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    tagline: "Infrastructure that stays up while you ship faster.",
    summary:
      "Cloud architecture, CI/CD, containers, deployment automation, observability, and security — built for reliability under real load.",
    icon: Cloud,
    visual: "cloud",
    benefits: [
      "Deployment pipelines that make shipping routine, not risky",
      "Observability from day one, not bolted on after an incident",
      "Infrastructure costs sized to actual usage",
    ],
    capabilities: [
      { title: "Cloud architecture", description: "AWS, Azure, or GCP topologies designed for your actual scale, not a worst case." },
      { title: "CI/CD pipelines", description: "Automated build, test, and deploy paths that remove manual release risk." },
      { title: "Containers & orchestration", description: "Docker and Kubernetes set up for portability without unnecessary complexity." },
      { title: "Observability & security", description: "Logging, metrics, alerting, and access controls built into the platform." },
    ],
    workflow: [
      "Infrastructure audit and architecture design",
      "CI/CD pipeline implementation",
      "Containerization and orchestration setup",
      "Observability, alerting, and security hardening",
      "Ongoing reliability and cost optimization",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Development",
    shortTitle: "E-Commerce",
    tagline: "Storefronts engineered to convert, not just load.",
    summary:
      "Custom commerce platforms, payment integrations, inventory systems, and checkout experiences optimized for conversion and performance.",
    icon: ShoppingCart,
    visual: "commerce",
    benefits: [
      "Checkout flows tuned to reduce abandonment, not just look polished",
      "Inventory and payments integrated with your real operational systems",
      "Performance budgets enforced on the pages that drive revenue",
    ],
    capabilities: [
      { title: "Storefront engineering", description: "Custom or headless commerce builds suited to your catalogue complexity." },
      { title: "Payments & checkout", description: "Integrated payment gateways with a checkout flow built to reduce friction." },
      { title: "Inventory & fulfillment", description: "Real-time inventory synced with warehouse and fulfillment systems." },
      { title: "Conversion optimization", description: "Performance and UX tuning on the pages that actually drive revenue." },
    ],
    workflow: [
      "Commerce platform and architecture selection",
      "Catalogue, inventory, and payment integration",
      "Storefront and checkout engineering",
      "Performance and conversion testing",
      "Launch and ongoing optimization",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
