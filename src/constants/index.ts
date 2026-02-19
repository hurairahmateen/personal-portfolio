import type { Experience, Project, Skill } from "@/types";

export const PERSONAL_INFO = {
  name: "Muhammad Hurairah Mateen",
  title: "Software Engineer | Full-Stack Developer",
  location: "Islamabad, Pakistan",
  bio: "Software Engineer with 2+ years of experience building, deploying, and scaling production-grade full-stack applications. Strong background in identity and access management, cloud-native platforms on Google Cloud Platform, and secure billing systems.",
  email: "hurairahmateen@live.com",
  profileImage: "/profile.png",
  social: {
    github: "https://github.com/hurairahmateen",
    linkedin: "https://linkedin.com/in/hurairahmateen",
    twitter: "https://twitter.com",
  },
};

export const SKILLS: Skill[] = [
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Python", level: 82, category: "Backend" },
  { name: "C#", level: 70, category: "Backend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Next.js", level: 86, category: "Fullstack" },
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Feathers.js", level: 78, category: "Backend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Material UI", level: 80, category: "Frontend" },
  { name: "Stripe", level: 82, category: "Payments" },
  { name: "Keycloak", level: 84, category: "Identity" },
  { name: "Knex", level: 75, category: "Backend" },
  { name: "Hookstate", level: 72, category: "Frontend" },
  { name: "PostgreSQL", level: 85, category: "Databases" },
  { name: "MariaDB", level: 78, category: "Databases" },
  { name: "MySQL", level: 80, category: "Databases" },
  { name: "BigQuery", level: 82, category: "Databases" },
  { name: "MongoDB", level: 80, category: "Databases" },
  { name: "Google Cloud Platform", level: 84, category: "Cloud" },
  { name: "Kubernetes", level: 78, category: "Cloud" },
  { name: "Helm", level: 75, category: "Cloud" },
  { name: "Cloud Run", level: 78, category: "Cloud" },
  { name: "Terraform", level: 76, category: "Cloud" },
  { name: "JIRA", level: 70, category: "Tools" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Pulse Analytics Pro",
    description:
      "Enterprise-grade real-time monitoring dashboard with advanced heuristics.",
    longDescription:
      "Developed a comprehensive dashboard using Next.js and D3.js to visualize live user interaction data. Managed complex state with Redux Toolkit and optimized rendering performance for large datasets.",
    tags: ["Next.js", "D3.js", "Redis", "Tailwind"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: "2",
    title: "Nova AI Workspace",
    description:
      "Collaborative AI environment for creative engineering workflows.",
    longDescription:
      "Built a specialized interface for Gemini integration, allowing writers to collaborate with AI on plot outlines and character development. Features real-time streaming responses and persistent workspace storage.",
    tags: ["React", "Gemini API", "Node.js", "Vercel"],
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#",
    category: "ai",
  },
  {
    id: "3",
    title: "Zenith Headless Store",
    description:
      "Sub-second page load e-commerce experience with headless CMS.",
    longDescription:
      "A headless commerce solution using Stripe for payments and Sanity.io for content management. Focused on sub-second page loads and mobile-first responsive design.",
    tags: ["TypeScript", "Stripe", "Sanity", "Tailwind"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#",
    category: "frontend",
  },
  {
    id: "4",
    title: "Vault Security Protocol",
    description: "Zero-trust authentication service with multi-region support.",
    longDescription:
      "A microservice-based authentication provider implementing OAuth2 and OIDC standards. Designed with security-first principles and comprehensive audit logging.",
    tags: ["Node.js", "Redis", "Docker", "Kubernetes"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    liveUrl: "#",
    category: "backend",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Napster Corp (formerly Infinite Reality)",
    role: "Software Engineer",
    period: "Mar 2024 - Dec 2025",
    description: [
      "Deployed analytics and data tools on GCP with Helm, BigQuery, and Cloud Run.",
      "Built identity and access management experiences with Keycloak and custom auth UI.",
      "Delivered billing, subscriptions, and dashboard features for a 3D SaaS platform.",
    ],
  },
  {
    company: "Ethereal Engine",
    role: "Software Engineer",
    period: "Jul 2023 - Feb 2024",
    description: [
      "Developed dashboard and onboarding flows for a large open-source platform.",
      "Implemented admin tooling for users, permissions, and platform configuration.",
      "Refactored services to Feathers.js and initiated Stripe billing integration.",
    ],
  },
];
