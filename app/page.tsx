import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { StartupIntro } from "@/components/startup-intro";
import {
  experience,
  profile,
  projects,
  socialLinks,
  techStack,
} from "@/data/portfolio";
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
      className="tech-logo flex h-11 w-11 items-center justify-center rounded-[0.95rem]"
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
    <main className="relative isolate overflow-hidden">
      <StartupIntro />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[24rem] bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.82),_rgba(255,255,255,0.28)_18%,_transparent_58%)]" />
      <div className="color-band color-band-primary pointer-events-none absolute inset-x-[-12%] top-[-6rem] z-0 h-[24rem]" />
      <div className="color-band color-band-secondary pointer-events-none absolute left-[-12%] right-[-12%] top-[-3.5rem] z-0 h-[22rem]" />
      <div className="color-band color-band-accent pointer-events-none absolute inset-x-[-6%] top-[0rem] z-0 h-[12rem]" />
      <div className="section-glow section-glow-wash pointer-events-none absolute inset-x-0 bottom-0 top-[44rem] z-[1]" />
      <div className="section-glow section-glow-pink pointer-events-none absolute left-[-10%] top-[54rem] z-[1] h-[30rem] w-[38rem]" />
      <div className="section-glow section-glow-purple pointer-events-none absolute right-[-12%] top-[88rem] z-[1] h-[34rem] w-[42rem]" />
      <div className="section-glow section-glow-blue pointer-events-none absolute left-1/2 top-[128rem] z-[1] h-[32rem] w-[46rem] -translate-x-1/2" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[48rem] hero-grid opacity-28 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <SiteNav />

      <div className="startup-intro-content relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-2 sm:px-8 lg:px-10">
        <div className="pointer-events-none h-4" />

        <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl items-center px-1 py-16 text-center sm:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="hero-role text-sm font-medium uppercase tracking-[0.34em] text-slate-500">
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
                      className="tech-card group flex items-center gap-4 rounded-[1.2rem] px-5 py-4 transition duration-300"
                      style={{ transitionDelay: `${index * 30}ms` }}
                    >
                      <TechLogo
                        icon={item.icon as keyof typeof techIcons}
                        color={item.color}
                        name={item.name}
                      />
                      <div className="min-w-0 text-left">
                        <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm uppercase tracking-[0.34em] text-slate-500">
                Experience
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Ethree Solutions
              </h2>
            </Reveal>

            <div className="timeline-shell relative pl-6 sm:pl-8">
              <div className="timeline-line absolute bottom-0 left-0 top-1" />
              {experience.map((item, index) => (
                <Reveal
                  key={`${item.company}-${item.period}`}
                  delay={80 + index * 80}
                  className="timeline-entry relative pb-14 last:pb-0"
                >
                  <div className="max-w-2xl">
                    <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-slate-400">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-800 sm:text-3xl">
                      {item.role}
                    </h3>
                    {item.location ? (
                      <p className="mt-3 text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
                        {item.location}
                      </p>
                    ) : null}
                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                      {item.summary}
                    </p>
                    <div className="mt-8 grid gap-5">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlight}
                          className="timeline-highlight border-t border-slate-200/70 pt-5"
                        >
                          <div className="flex gap-4">
                            <div className="pt-0.5 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-slate-400">
                              {String(highlightIndex + 1).padStart(2, "0")}
                            </div>
                            <p className="text-sm leading-6 text-slate-600">
                              {highlight}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl py-8 lg:py-12">
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
              <article className="project-stage px-5 py-8 text-slate-950 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="mx-auto max-w-4xl text-center">
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                    {featuredProject.eyebrow ?? "Featured project"}
                  </p>
                  <h3 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                    {featuredProject.name}
                  </h3>
                  {featuredProject.summary ? (
                    <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-slate-600">
                      {featuredProject.summary}
                    </p>
                  ) : null}
                </div>

                <div className="project-media mt-8 overflow-hidden rounded-[1.5rem]">
                  {featuredProject.mediaUrl ? (
                    <video
                      className="h-full w-full object-cover"
                      src={featuredProject.mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                    />
                  ) : (
                    <div className="h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.5),_transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
                  )}
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="max-w-xl">
                    <p className="text-base leading-8 text-slate-600 sm:text-lg">
                      {featuredProject.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200/80 bg-white/76 px-3 py-1.5 text-xs font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(featuredProject.liveUrl || featuredProject.repoUrl) && (
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        {featuredProject.liveUrl ? (
                          <a
                            href={featuredProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-medium !text-white shadow-[0_10px_30px_rgba(15,23,42,0.16)] transition hover:bg-slate-800 hover:!text-white"
                          >
                            Live preview
                            <ArrowUpRightIcon />
                          </a>
                        ) : null}
                        {featuredProject.repoUrl ? (
                          <a
                            href={featuredProject.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-400"
                          >
                            View repository
                            <GitHubIcon />
                          </a>
                        ) : null}
                      </div>
                    )}
                  </div>

                  {featuredProject.highlights?.length ? (
                    <div className="grid gap-4">
                      {featuredProject.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlight}
                          className="project-detail border-t border-slate-200/80 pt-4"
                        >
                          <div className="flex gap-4">
                            <div className="pt-0.5 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-slate-400">
                              {String(highlightIndex + 1).padStart(2, "0")}
                            </div>
                            <p className="text-sm leading-7 text-slate-600">
                              {highlight}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ) : null}

          <div className="mt-10 grid gap-6">
            {secondaryProjects.map((project, index) => (
              <Reveal key={project.name} delay={120 + index * 80}>
                <article className="project-row rounded-[1.35rem] px-5 py-6">
                  <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                        Project {index + 2}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                        {project.name}
                      </h3>
                    </div>

                    <div className="max-w-3xl">
                      <p className="text-base leading-8 text-slate-600 sm:text-lg">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-950/[0.04] px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {(project.liveUrl || project.repoUrl) && (
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-medium !text-white transition hover:bg-slate-800 hover:!text-white"
                            >
                              Live preview
                              <ArrowUpRightIcon />
                            </a>
                          ) : null}
                          {project.repoUrl ? (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-400"
                            >
                              Repository
                              <GitHubIcon />
                            </a>
                          ) : null}
                        </div>
                      )}
                    </div>
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
          <p>© 2026 Luis Feliciano. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
