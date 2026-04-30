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
    name: "Laravel",
    icon: "laravel",
    color: "#FF2D20",
  },
  {
    name: "REST APIs",
    icon: "rest",
    color: "#6B7280",
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
    name: "MySQL",
    icon: "mysql",
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    color: "#4169E1",
  },
  {
    name: "Docker",
    icon: "docker",
    color: "#2496ED",
  },
  {
    name: "Linux",
    icon: "linux",
    color: "black",
  },
  {
    name: "Git",
    icon: "git",
    color: "#F05032",
  },
  {
    name: "Vue.js",
    icon: "vue",
    color: "#4FC08D",
  },
  {
    name: "HTML",
    icon: "html",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: "css",
    color: "#1572B6",
  },
  {
    name: "C",
    icon: "c",
    color: "#A8B9CC",
  },
];

export const projects: Project[] = [
  {
    name: "Puerto Rico Coastal Watch",
    eyebrow: "Most recent project",
    summary:
      "A civic intelligence platform for tracking coastal access, development, and public-interest issues across Puerto Rico.",
    description:
      "Puerto Rico Coastal Watch is a platform built to help track where illegal construction and harmful development may be taking place on protected coastal land. The system combines a Next.js frontend, a FastAPI backend, a PostgreSQL-backed Docker stack, and worker-driven intake flows to surface, review, and manage public-interest reporting.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Workers"],
    mediaUrl: "/assets/puerto-rico-coastal-watch.mp4",
    repoUrl: "https://github.com/lblaseygg/coastal-watch",
    highlights: [
      "Tracks coastal access, development activity, and protected-land concerns across Puerto Rico.",
      "Supports manual admin workflows for creating, editing, and publishing cases when automation is paused.",
      "Uses municipality seed data and reporting pipelines to organize investigation and review.",
    ],
  },
  {
    name: "BudgetCLI",
    description:
      "A command-line budgeting tool built as a learning project for recording income and expenses, organizing transactions by category, and reviewing entries directly from the terminal.",
    tags: ["C#", ".NET", "System.CommandLine", "Spectre.Console", "JSON"],
    repoUrl: "https://github.com/lblaseygg/BudgetCLI",
  },
  {
    name: "AirBnB Clone",
    description:
      "A full-stack AirBnB clone developed during bootcamp. It includes property listings, user authentication, booking flows, and an interactive interface that demonstrates end-to-end product thinking.",
    tags: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
    liveUrl: "https://lblaseygg.github.io/holberton-hbnb/login.html",
    repoUrl: "https://github.com/lblaseygg/holberton-hbnb",
  },
  {
    name: "Budget Tracker",
    description:
      "A personal finance application for tracking expenses, setting budgets, and visualizing spending patterns with a simpler, more informative user experience.",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://lblaseygg.github.io/Budget-Tracker/",
    repoUrl: "https://github.com/lblaseygg/Budget-Tracker",
  },
];
