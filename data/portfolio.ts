export type SocialLink = {
  label: string;
  href: string;
  kind: "email" | "linkedin" | "github";
};

export type TechItem = {
  name: string;
  icon: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  mediaUrl?: string;
  eyebrow?: string;
  summary?: string;
  highlights?: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export const profile = {
  name: "Luis Feliciano",
  role: "Software Engineer",
  headline: "Building reliable backend systems.",
  subtitle:
    "Backend-focused Software Engineer with experience in multi-tenant systems and data integrity, actively developing expertise in cloud infrastructure, containerization, and scalable backend deployment on AWS.",
  intro: [
    "I build backend systems that prioritize correctness, consistency, and reliability. At Ethree Solutions, I contributed to a multi-tenant warehouse management system, implementing business-critical backend logic to enforce data integrity and prevent invalid resource allocation across operational workflows.",
    "My experience spans implementation, integration, testing, production debugging, and cross-functional delivery in Linux environments. I work closely with engineers, project managers, and business analysts to turn business constraints into robust backend systems."
  ],
  availability: "Open to software engineering opportunities",
  email: "luisfeli0518@gmail.com",
};

export const experience: ExperienceItem[] = [
  {
    company: "Infinigen Energy",
    role: "AI Integrations",
    period: "Jun 2026 - Present",
    location: "Full Time",
    summary:
      "Designed and delivered Atlas, an internal, document-grounded AI platform for engineering knowledge retrieval, secure document ingestion, and operational reporting.",
    highlights: [
      "Built a Retrieval-Augmented Generation platform using TypeScript, PostgreSQL with pgvector, Azure Container Apps, Blob Storage, and self-hosted Qwen and Mistral model services.",
      "Designed the NetDocuments ingestion pipeline with OAuth integration, durable batch runs, Docling Markdown conversion, structure-aware chunking, quality validation, and batched embeddings.",
      "Implemented Entra ID authentication and role-based access control for administrators, auditors, support users, and document managers.",
      "Developed operational and compliance capabilities including immutable audit events, human-readable audit receipts, ingestion controls, and an internal metrics dashboard for retrieval and latency health.",
      "Deployed and operated Atlas on Azure with private internal model endpoints, managed identities, Key Vault-backed configuration, PostgreSQL migrations, Azure Files model caching, and production CORS controls.",
    ],
  },
  {
    company: "Ethree Solutions",
    role: "Software Engineer Intern",
    period: "Sept 2025 - Feb 2026",
    location: "Full Time",
    summary:
      "Contributed across multiple phases of the software development lifecycle for a multi-tenant warehouse management system, working on backend logic, integration, debugging, and production support.",
    highlights: [
      "Designed and implemented PHP backend logic to enforce data integrity, prevent invalid resource allocation, and maintain transactional consistency across distributed warehouse workflows.",
      "Developed role-based access control mechanisms that aligned user permissions with system and business requirements.",
      "Implemented workflow enhancements for inventory cycle counting and multi-LPN processing, adding persistent state tracking and error-handling guards to prevent inconsistencies.",
      "Worked in a Dockerized development environment with Git-based peer reviews and Agile Scrum practices including standups, sprint planning, and retrospectives.",
      "Assisted in diagnosing and resolving production defects by tracing application flow, identifying logical inconsistencies, and validating fixes through controlled testing.",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:luisfeli0518@gmail.com",
    kind: "email",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luisfernandofeliciano/",
    kind: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/lblaseygg",
    kind: "github",
  },
];

export const techStack: TechItem[] = [
  {
    name: "PHP",
    icon: "php",
    color: "#777BB4",
  },
  {
    name: "Python",
    icon: "python",
    color: "#3776AB",
  },
  {
    name: "AWS",
    icon: "aws",
    color: "#FF9900",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    color: "#3178C6",
  },
  {
    name: "React",
    icon: "react",
    color: "#61DAFB",
  },
  {
    name: "Laravel",
    icon: "laravel",
    color: "#FF2D20",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
  },
  {
    name: "SQL",
    icon: "sql",
    color: "#475569",
  },
  {
    name: "Docker",
    icon: "docker",
    color: "#2496ED",
  },
  {
    name: "Azure",
    icon: "azure",
    color: "#0078D4",
  },
];

export const projects: Project[] = [
  {
    name: "Puerto Rico Coastal Watch",
    eyebrow: "Most recent project",
    summary:
      "A civic intelligence platform for tracking coastal access, development, and public-interest issues across Puerto Rico.",
    description:
      "Puerto Rico Coastal Watch is a platform built to help track where illegal construction and harmful development may be taking place on protected coastal land. The system combines a Next.js frontend, a FastAPI backend, a PostgreSQL-backed Docker stack, AWS deployment infrastructure, and worker-driven intake flows to surface, review, and manage public-interest reporting.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Workers"],
    mediaUrl: "/assets/puerto-rico-coastal-watch.mp4",
    liveUrl: "https://main.dibozvb639fjz.amplifyapp.com",
    repoUrl: "https://github.com/lblaseygg/coastal-watch",
    highlights: [
      "Tracks coastal access, development activity, and protected-land concerns across Puerto Rico.",
      "Deployed on AWS, with a live cloud-hosted environment supporting the current public build.",
      "Supports manual admin workflows for creating, editing, and publishing cases when automation is paused.",
      "Uses municipality seed data and reporting pipelines to organize investigation and review.",
    ],
  },
  {
    name: "AWS Deployment Architecture for Coastal Watch",
    eyebrow: "Cloud architecture artifact",
    description:
      "A system design artifact that documents the AWS service layout behind Coastal Watch, showing how the containerized backend is structured for deployment, configuration, and operational clarity.",
    tags: ["AWS", "ECS", "ECR", "SSM", "System Design"],
    mediaUrl: "/assets/coastal-watch-aws-architecture.svg",
    repoUrl: "https://github.com/lblaseygg/coastal-watch",
    highlights: [
      "Maps the cloud components used to run and support the application in AWS.",
      "Demonstrates understanding of container deployment flow, image registry usage, and configuration management.",
      "Acts as a technical communication artifact for explaining infrastructure decisions in interviews and reviews.",
    ],
  },
  {
    name: "Aegis CLI",
    eyebrow: "Private AI operations toolkit",
    description:
      "A self-hosted local LLM operations toolkit for private AI workflows, built to support offline or isolated deployments with an operator-friendly CLI, document-grounded RAG, and flexible local, remote, and Docker runtime modes.",
    tags: ["TypeScript", "Ink", "FastAPI", "Ollama", "Docker", "ChromaDB"],
    mediaUrl: "/assets/aegis-showcasse.mp4",
    repoUrl: "https://github.com/lblaseygg/aegis",
    highlights: [
      "Combines an Ink-powered TypeScript CLI with a FastAPI RAG service to support interactive AI operations from the terminal.",
      "Integrates Ollama, offline document retrieval, and isolated deployment flows for secure local or air-gapped AI usage.",
      "Supports local, remote-over-SSH, and Docker runtime modes for deploying and operating LLM-backed workflows in different environments.",
    ],
  },
  {
    name: "Minty",
    description:
      "An AI-powered stock trading platform that combines live market data, paper trading, and machine learning-driven forecasting to simulate trading workflows and surface buy, sell, and hold recommendations.",
    tags: ["Python", "Flask", "MySQL", "scikit-learn", "XGBoost", "Chart.js"],
    repoUrl: "https://github.com/lblaseygg/minty",
    highlights: [
      "Uses Yahoo Finance market data together with machine learning models to generate prediction-driven trading insights.",
      "Supports paper trading, portfolio tracking, and order management flows for experimenting with AI-assisted trading decisions.",
      "Combines a Flask API, MySQL persistence layer, and browser-based dashboard for a full-stack trading experience.",
    ],
  },
];
