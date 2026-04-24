import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { profile, projects, socialLinks, techStack } from "@/data/portfolio";
import {
  siC,
  siDocker,
  siGit,
  siJavascript,
  siLaravel,
  siLinux,
  siMysql,
  siPhp,
  siPython,
  siVuedotjs,
} from "simple-icons";

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M4 7.5 12 13l8-5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.58 9.67h2.72v8.76H5.58V9.67Zm4.42 0h2.61v1.2h.04c.36-.69 1.25-1.42 2.57-1.42 2.75 0 3.26 1.81 3.26 4.16v4.82h-2.72v-4.28c0-1.02-.02-2.34-1.42-2.34-1.42 0-1.64 1.1-1.64 2.26v4.36H10V9.67Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.03 0 0 .96-.31 3.14 1.18A10.9 10.9 0 0 1 12 6.03c.97 0 1.95.13 2.87.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.57.23 2.74.11 3.03.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function SocialIcon({ kind }: { kind: "email" | "linkedin" | "github" }) {
  if (kind === "email") {
    return <MailIcon />;
  }

  if (kind === "linkedin") {
    return <LinkedInIcon />;
  }

  return <GitHubIcon />;
}

const techIcons = {
  c: siC,
  python: siPython,
  php: siPhp,
  javascript: siJavascript,
  linux: siLinux,
  laravel: siLaravel,
  docker: siDocker,
  vue: siVuedotjs,
  mysql: siMysql,
  git: siGit,
} as const;

function TechLogo({
  icon,
  color,
  name,
}: {
  icon: keyof typeof techIcons;
  color: string;
  name: string;
}) {
  const logo = techIcons[icon];

  return (
    <div
      className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
      aria-hidden="true"
      title={name}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill={color}
        role="img"
        aria-label={name}
      >
        <path d={logo.path} />
      </svg>
    </div>
  );
}

export default function Home() {
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[48rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(255,255,255,0.88)_28%,_transparent_68%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-12rem] -z-10 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(96,165,250,0.16),_rgba(255,255,255,0)_68%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[56rem] hero-grid opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <SiteNav />

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <div className="pointer-events-none h-11" />

        <section className="mx-auto flex min-h-[calc(100vh-2.75rem)] max-w-6xl items-center px-1 py-20 text-center sm:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.34em] text-slate-500">
              {profile.role}
            </p>
            <h1 className="hero-headline mt-6 text-balance text-6xl font-semibold tracking-[-0.075em] text-slate-950 sm:text-7xl lg:text-[6.3rem] lg:leading-[0.94]">
              {profile.headline}
            </h1>
            <p className="hero-subtitle mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-[1.7rem] sm:leading-[1.35]">
              {profile.subtitle}
            </p>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal className="text-center">
              <p className="text-sm uppercase tracking-[0.34em] text-slate-500">
                About Me
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Backend systems, full-stack delivery, and production-minded engineering.
              </h2>
            </Reveal>

            <div className="mt-10 space-y-6 text-center">
              {profile.intro.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 80}>
                  <p className="text-base leading-8 text-slate-600 sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}

              <Reveal className="pt-6" delay={160}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {techStack.map((item, index) => (
                    <div
                      key={item.name}
                      className="tech-card group rounded-[1.2rem] p-5 transition duration-300"
                      style={{ transitionDelay: `${index * 30}ms` }}
                    >
                      <TechLogo
                        icon={item.icon as keyof typeof techIcons}
                        color={item.color}
                        name={item.name}
                      />
                      <p className="mt-5 text-center text-lg font-semibold tracking-[-0.03em] text-slate-950">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl py-10 lg:py-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.34em] text-slate-500">
              Selected Work
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Projects and builds that reflect my engineering background.
            </h2>
          </Reveal>

          {featuredProject ? (
            <Reveal className="mt-12" delay={80}>
              <article className="project-feature overflow-hidden rounded-[1.4rem] p-8 text-white sm:p-10 lg:p-12">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                  <div className="max-w-xl">
                    <p className="text-sm uppercase tracking-[0.32em] text-white/50">
                      Featured project
                    </p>
                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                      {featuredProject.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-white/68 sm:text-lg">
                      {featuredProject.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/12 bg-white/7 px-3 py-1.5 text-xs font-medium text-white/82"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                      >
                        Live preview
                        <ArrowUpRightIcon />
                      </a>
                      <a
                        href={featuredProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        View repository
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.2rem] border border-white/12 bg-white/[0.04] p-5">
                      <div className="flex gap-2">
                        <span className="h-2 w-2 rounded-full bg-white/30" />
                        <span className="h-2 w-2 rounded-full bg-white/18" />
                        <span className="h-2 w-2 rounded-full bg-white/18" />
                      </div>
                      <div className="mt-5 h-56 rounded-[1rem] bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.5),_transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
                    </div>
                    <div className="grid gap-4">
                      <div className="rounded-[1.2rem] border border-white/12 bg-white/[0.04] p-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                          Stack
                        </p>
                        <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                          Full-stack
                        </p>
                      </div>
                      <div className="rounded-[1.2rem] border border-white/12 bg-white/[0.04] p-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                          Outcome
                        </p>
                        <p className="mt-4 text-sm leading-7 text-white/62">
                          Preserved from the original site, now presented with a
                          stronger visual hierarchy and cleaner interaction cues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ) : null}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <Reveal key={project.name} delay={120 + index * 80}>
                <article className="project-card h-full rounded-[1.3rem] p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                        Project {index + 2}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                        {project.name}
                      </h3>
                    </div>
                    <div className="rounded-full border border-slate-200/80 bg-white/70 p-2 text-slate-500">
                      <ArrowUpRightIcon />
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-8 rounded-[1rem] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,246,250,0.88))] p-5">
                    <div className="h-36 rounded-[0.9rem] bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.22),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.02))]" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-950/[0.04] px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      Live preview
                      <ArrowUpRightIcon />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-400"
                    >
                      Repository
                      <GitHubIcon />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl py-12 lg:py-20">
          <Reveal>
            <div className="px-2 py-8 text-center sm:px-10 lg:px-12 lg:py-16">
              <p className="text-sm uppercase tracking-[0.34em] text-slate-500">
                Let&apos;s Connect
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Interested in working together?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                I&apos;m always open to discussing new projects, interesting
                product work, and opportunities to build thoughtful software.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.kind === "email" ? undefined : "_blank"}
                    rel={link.kind === "email" ? undefined : "noreferrer"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-50 px-5 py-3 text-sm font-medium text-sky-700 transition hover:bg-sky-600 hover:text-white"
                  >
                    <SocialIcon kind={link.kind} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="pb-10 pt-2 text-center text-sm text-slate-500">
          <p>© 2025 Luis Feliciano. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
