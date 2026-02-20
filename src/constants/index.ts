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
  },
};

export const SKILLS: Skill[] = [
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Python", level: 78, category: "Backend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Next.js", level: 86, category: "Fullstack" },
  { name: "LLM Integration", level: 80, category: "AI" },
  { name: "Stripe", level: 82, category: "Payments" },
  { name: "Google Cloud Platform", level: 84, category: "Cloud" },
  { name: "PostgreSQL", level: 85, category: "Databases" },
  { name: "Keycloak", level: 84, category: "Identity" },
  { name: "Knex", level: 75, category: "Backend" },
  { name: "Kubernetes", level: 78, category: "Cloud" },
  { name: "Helm", level: 75, category: "Cloud" },
  { name: "Cloud Run", level: 78, category: "Cloud" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "iR Studio",
    description:
      "End-to-end SaaS onboarding, Stripe subscriptions, and billing management for a 3D platform.",
    longDescription:
      "Owned the complete onboarding and subscription experience, including user signup, plan selection, custom Stripe payments, and a production-grade billing dashboard. Implemented subscription lifecycle management, trial handling, invoices, payment methods, and secure account profile management.",
    tags: ["Onboarding", "Stripe", "Subscriptions", "SaaS"],
    imageUrl: "/iR-studio/iR-studio-payment.png",
    screenshots: [
      "/iR-studio/iR-studio-signup.png",
      "/iR-studio/iR-studio-plan-selection.png",
      "/iR-studio/iR-studio-payment.png",
      "/iR-studio/iR-studio-billing-details.png",
      "/iR-studio/iR-studio-account-details.png",
    ],
    keyFeatures: [
      "Custom Stripe subscription and payment flows",
      "End-to-end onboarding to dashboard experience",
      "Subscription lifecycle, trials, and invoice handling",
      "Production-ready account and billing management",
    ],
    highlights: [
      "Built a complete onboarding flow with signup, validation, and account creation",
      "Implemented subscription plan selection with coupon support",
      "Integrated custom Stripe payments without redirect-based checkout",
      "Delivered a billing dashboard for subscriptions, invoices, and payment methods",
      "Implemented trial state handling and secure account management",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "fullstack",
  },
  {
    id: "2",
    title: "Microsoft Data Formulator (GCP)",
    description:
      "Self-hosted Microsoft Data Formulator on GCP with BigQuery integration and Gemini-powered insights.",
    longDescription:
      "Self-deployed Microsoft Data Formulator on Google Cloud Run using Terraform to enable scalable visual exploration of BigQuery datasets. Extended the platform by adding BigQuery as an external data loader and contributed the feature to the official Microsoft open-source repository. Integrated Gemini Flash to support AI-assisted insights and chart generation.",
    tags: ["GCP", "Terraform", "BigQuery", "Open Source", "Gemini AI"],
    imageUrl: "/data-formulator/data-formulator.png",
    screenshots: [
      "/data-formulator/data-formulator.png",
      "/data-formulator/data-formulator-bigquery-loader.png",
      "/data-formulator/data-formulator-model-configuration.png",
      "/data-formulator/data-formulator-AI-insights.png",
    ],
    keyFeatures: [
      "Cloud Run deployment with Terraform",
      "BigQuery external data loader (open-source contribution)",
      "Gemini Flash AI-powered analytics and insights",
    ],
    highlights: [
      "Deployed Data Formulator on GCP using infrastructure as code",
      "Added BigQuery support and contributed the feature upstream to Microsoft’s repo",
      "Integrated Gemini Flash to enable AI-driven insights and visualizations",
    ],
    extraLinks: [
      {
        label: "Official Repository",
        href: "https://github.com/microsoft/data-formulator",
      },
      {
        label: "BigQuery PR #206",
        href: "https://github.com/microsoft/data-formulator/pull/206",
      },
    ],
    githubUrl: "",
    liveUrl: "",
    category: "backend",
  },
  {
    id: "3",
    title: "TaskLens AI MVP",
    description:
      "Turn vague goals into focused, time-boxed execution plans using a local LLM with no paid APIs.",
    longDescription:
      "Built a full MVP that converts a single sentence into a structured execution plan: summary, immediate next action, ordered steps, and time blocks. The system runs fully offline via a local llama.cpp server, with a Next.js UI and API route orchestrating the plan generation pipeline.",
    tags: ["Next.js", "TypeScript", "Local LLM", "llama.cpp"],
    imageUrl: "/tasklens-ai/tasklens-home.png",
    screenshots: [
      "/tasklens-ai/tasklens-home.png",
      "/tasklens-ai/tasklens-prompt.png",
      "/tasklens-ai/tasklens-AI-response.png",
    ],
    keyFeatures: [
      "Natural-language goal input with Quick Focus and Deep Work modes",
      "AI-generated summary, next action, steps, and time blocks",
      "Fully offline local LLM inference with llama.cpp",
      "Structured JSON contract for consistent plan output",
    ],
    highlights: [
      "Designed the UI, API route, and plan rendering pipeline end to end",
      "Integrated local llama.cpp server for zero-cloud inference",
      "Defined and enforced the structured JSON response contract",
    ],
    githubUrl: "https://github.com/hurairahmateen/tasklens-ai",
    liveUrl: "",
    category: "ai",
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
