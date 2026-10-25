export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  group: "Services" | "Process" | "Pricing" | "Support";
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    group: "Services",
    items: [
      {
        question: "What kinds of projects does Namitron Infotech take on?",
        answer:
          "Web and mobile applications, custom enterprise software, UI/UX design engagements, AI integrations, cloud and DevOps work, and e-commerce platforms. If a project needs both design and engineering judgment, it's a good fit.",
      },
      {
        question: "Do you work with early-stage startups or only established companies?",
        answer:
          "Both. Early-stage engagements usually start with a tighter discovery phase to validate scope before committing to a full build; established companies more often come to us with an existing system that needs to evolve.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes. We start with a technical audit — architecture, test coverage, dependency health — before quoting any new work, so you know what you're inheriting before we touch it.",
      },
    ],
  },
  {
    group: "Process",
    items: [
      {
        question: "What does the discovery phase actually involve?",
        answer:
          "Structured workshops with the people who use the system day to day, not just stakeholders. We map real workflows, identify constraints, and surface the assumptions most likely to be wrong before any design or engineering work starts.",
      },
      {
        question: "How involved will our team need to be?",
        answer:
          "More than most agencies ask for, especially during discovery and review cycles. We run short, regular check-ins rather than long infrequent ones — it's a better trade for catching misalignment early.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Every project ends with documentation and a clear maintenance plan. Some clients move to an ongoing support arrangement; others take the handover and run with an internal team. Both are normal.",
      },
    ],
  },
  {
    group: "Pricing",
    items: [
      {
        question: "Do you work on fixed price or time-and-materials?",
        answer:
          "Both, depending on how well-defined the scope is. Discovery-stage work is almost always time-and-materials; once scope is firm, we can quote fixed price for a defined phase of work.",
      },
      {
        question: "What determines the cost of a project?",
        answer:
          "Scope clarity, integration complexity, and timeline. A well-scoped project with clear requirements is meaningfully cheaper than the same project with ambiguous requirements — which is part of why we don't skip discovery.",
      },
    ],
  },
  {
    group: "Support",
    items: [
      {
        question: "Do you offer ongoing maintenance after a project ships?",
        answer:
          "Yes, as an optional retainer covering monitoring, dependency updates, and incremental improvements. It's never a requirement — your code and infrastructure remain yours either way.",
      },
      {
        question: "What's your response time for production issues?",
        answer:
          "This is defined per support agreement based on severity. We'll document specific response-time commitments in your statement of work rather than quoting a blanket number here.",
      },
    ],
  },
];
