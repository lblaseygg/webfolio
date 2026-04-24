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
  liveUrl: string;
  repoUrl: string;
};

export const profile = {
  name: "Luis Feliciano",
  role: "Software Engineer",
  headline: "Building beautiful digital experiences.",
  subtitle:
    "Backend-focused Software Engineer with production experience in multi-tenant systems and a foundation in C-based systems programming.",
  intro: [
    "I have contributed across implementation, integration, debugging, validation, and production support in Linux environments, with hands-on experience building backend logic for warehouse and operational workflows.",
    "My work includes REST APIs, RBAC, transactional integrity, Dockerized development, peer code reviews, and cross-functional collaboration with engineers, project managers, and business analysts in Agile Scrum teams.",
  ],
  availability: "Open to software engineering opportunities",
  email: "luisfeli0518@gmail.com",
};

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
    name: "C",
    icon: "c",
    color: "#A8B9CC",
  },
  {
    name: "Python",
    icon: "python",
    color: "#3776AB",
  },
  {
    name: "PHP",
    icon: "php",
    color: "#777BB4",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
  },
  {
    name: "Linux",
    icon: "linux",
    color: "#FCC624",
  },
  {
    name: "Laravel",
    icon: "laravel",
    color: "#FF2D20",
  },
  {
    name: "Docker",
    icon: "docker",
    color: "#2496ED",
  },
  {
    name: "Vue.js",
    icon: "vue",
    color: "#4FC08D",
  },
  {
    name: "MySQL",
    icon: "mysql",
    color: "#4479A1",
  },
  {
    name: "Git",
    icon: "git",
    color: "#F05032",
  },
];

export const projects: Project[] = [
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
  {
    name: "DUO Budget Planner",
    description:
      "A budgeting tool for couples to manage shared finances and savings goals together, built around clarity, collaboration, and approachable planning.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lblaseygg.github.io/Duo-budget-planner/",
    repoUrl: "https://github.com/lblaseygg/Duo-budget-planner",
  },
];
