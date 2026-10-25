export interface TechCategory {
  key: string;
  label: string;
  items: string[];
}

export const technologyCategories: TechCategory[] = [
  { key: "frontend", label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { key: "backend", label: "Backend", items: ["Node.js", "Python", "Java", ".NET", "PHP"] },
  { key: "mobile", label: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { key: "databases", label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { key: "cloud", label: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions"] },
  { key: "ai", label: "AI & Data", items: ["Python", "PyTorch", "TensorFlow", "LLM APIs", "Data Pipelines"] },
  { key: "testing", label: "Testing & Tools", items: ["Playwright", "Cypress", "Jest", "Git"] },
];
