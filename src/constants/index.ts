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
  { name: "Stripe", level: 82, category: "Payments" },
  { name: "Google Cloud Platform", level: 84, category: "Cloud" },
  { name: "C#", level: 70, category: "Backend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Next.js", level: 86, category: "Fullstack" },
  { name: "PostgreSQL", level: 85, category: "Databases" },
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Feathers.js", level: 78, category: "Backend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Material UI", level: 80, category: "Frontend" },
  { name: "Keycloak", level: 84, category: "Identity" },
  { name: "Knex", level: 75, category: "Backend" },
  { name: "Hookstate", level: 72, category: "Frontend" },
  { name: "MariaDB", level: 78, category: "Databases" },
  { name: "MySQL", level: 80, category: "Databases" },
  { name: "BigQuery", level: 82, category: "Databases" },
  { name: "MongoDB", level: 80, category: "Databases" },
  { name: "Kubernetes", level: 78, category: "Cloud" },
  { name: "Helm", level: 75, category: "Cloud" },
  { name: "Cloud Run", level: 78, category: "Cloud" },
  { name: "Terraform", level: 76, category: "Cloud" },
  { name: "JIRA", level: 70, category: "Tools" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "iR Studio",
    description:
      "Owned onboarding UX, Stripe subscriptions, and billing management for a 3D SaaS platform.",
    longDescription:
      "Built an end-to-end SaaS onboarding and subscription system, covering signup, plan selection, Stripe-based payments, and a billing dashboard for managing subscriptions, invoices, and payment methods. Also implemented account profile management and secure deletion flows.",
    tags: ["Onboarding", "Stripe", "Subscriptions", "Full-Stack"],
    imageUrl: "/iR-studio/iR-studio-payment.png",
    screenshots: [
      "/iR-studio/iR-studio-signup.png",
      "/iR-studio/iR-studio-plan-selection.png",
      "/iR-studio/iR-studio-payment.png",
      "/iR-studio/iR-studio-billing-details.png",
      "/iR-studio/iR-studio-account-details.png",
    ],
    keyFeatures: [
      "Custom Stripe subscription and payment integration",
      "End-to-end onboarding to dashboard flow",
      "Subscription lifecycle and trial state handling",
      "Production-ready account and billing management",
    ],
    highlights: [
      "End-to-end onboarding flow including signup, account creation, and validation.",
      "Subscription plan selection with pricing display and coupon support.",
      "Custom Stripe payment integration without redirect-based checkout.",
      "Billing dashboard for subscription management, invoices, and payment methods.",
      "Trial period handling with dynamic status banner.",
      "Account management including profile updates and secure account deletion.",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "fullstack",
  },
  {
    id: "2",
    title: "Microsoft Data Formulator (GCP)",
    description:
      "Self-deployed Microsoft Data Formulator on GCP with BigQuery loader and Gemini-powered insights.",
    longDescription:
      "Deployed Microsoft Data Formulator on Google Cloud Run using Terraform to enable visual data exploration over BigQuery datasets. Contributed production code to add BigQuery as an external data loader and integrated Gemini Flash for AI-assisted insights and chart generation.",
    tags: ["GCP", "Terraform", "BigQuery", "Gemini AI"],
    imageUrl: "/data-formulator/data-formulator.png",
    screenshots: [
      "/data-formulator/data-formulator.png",
      "/data-formulator/data-formulator-bigquery-loader.png",
      "/data-formulator/data-formulator-model-configuration.png",
      "/data-formulator/data-formulator-AI-insights.png",
    ],
    keyFeatures: [
      "Cloud Run deployment with Terraform",
      "BigQuery external data loader contribution",
      "Gemini Flash AI insights pipeline",
    ],
    highlights: [
      "Deployed Data Formulator on Cloud Run with Terraform for scalable access.",
      "Added BigQuery as an external data loader in the official repo.",
      "Integrated Gemini Flash to power AI-assisted analytics workflows.",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "fullstack",
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
