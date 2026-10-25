export const siteConfig = {
  name: "Namitron Infotech",
  shortName: "Namitron",
  tagline: "Engineering the Next Digital Frontier.",
  statement: "Ideas become systems. Systems create possibilities.",
  domain: "namitroninfotech.com",
  url: "https://www.namitroninfotech.com",
  email: "hello@namitroninfotech.com",
  phone: "+1 (555) 014-7732",
  address: "148 Meridian Avenue, Suite 400, Austin, TX 78701",
  social: {
    linkedin: "https://www.linkedin.com/company/namitron-infotech",
    twitter: "https://twitter.com/namitroninfo",
    github: "https://github.com/namitron-infotech",
    dribbble: "https://dribbble.com/namitroninfotech",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  footerColumns: [
    {
      heading: "Services",
      links: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "Custom Software", href: "/services/custom-software" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "AI & Machine Learning", href: "/services/ai-ml" },
        { label: "Cloud & DevOps", href: "/services/cloud-devops" },
        { label: "E-Commerce", href: "/services/ecommerce" },
      ],
    },
    {
      heading: "Technology",
      links: [
        { label: "Frontend", href: "/technologies#frontend" },
        { label: "Backend", href: "/technologies#backend" },
        { label: "Cloud & DevOps", href: "/technologies#cloud" },
        { label: "AI & Data", href: "/technologies#ai" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Process", href: "/process" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export type SiteConfig = typeof siteConfig;
