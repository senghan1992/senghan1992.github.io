interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  duration?: string;
  role?: string;
  features?: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const nonFeaturedProjects = projects.filter((project) => !project.featured);
  const cards = [...featuredProjects, ...nonFeaturedProjects];

  return (
    <section className="relative overflow-hidden py-12 md:py-14" id="projects">
      <div className="absolute inset-x-0 top-6 h-28 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_32%)] blur-3xl" />
      <div className="relative mb-6 flex flex-col gap-2.5">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/70 dark:text-slate-200 dark:ring-slate-700">
          Projects
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          주요 프로젝트 한눈에 보기
        </h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-600 dark:text-slate-300">
          LG전자 · 딜리버러 · 핏펫에서 수행한 End-to-End 설계와 실행 사례를 요약했습니다.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[24px] border border-slate-200/70 bg-white/80 p-3.5 shadow-[0_18px_50px_rgba(15,23,42,0.07)] ring-1 ring-slate-100/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70 dark:ring-slate-800/50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-10 top-8 h-20 w-20 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/30" />
          <div className="absolute right-4 bottom-4 h-24 w-24 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-900/30" />
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((project, idx) => (
            <div
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white/95 shadow-[0_14px_36px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/70 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900/85 dark:ring-slate-800"
            >
              <div className="relative h-28 overflow-hidden bg-slate-50 dark:bg-slate-800">
                <div className="flex h-full w-full items-center justify-center p-3">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-104"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-semibold uppercase text-slate-500 dark:text-slate-300">
                      {project.title.slice(0, 2)}
                    </div>
                  )}
                </div>
                <div className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white ring-4 ring-white/70 dark:bg-white dark:text-slate-900 dark:ring-slate-900/60">
                  {idx + 1}
                </div>
                {project.featured && (
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-700 ring-1 ring-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-200 dark:ring-indigo-800">
                    Featured
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-2.5 p-4">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                  {project.duration && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {project.duration}
                    </span>
                  )}
                  {project.role && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-900/40 dark:text-emerald-100 dark:ring-emerald-800">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {project.role}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 md:text-sm">
                    {project.description}
                  </p>
                </div>

                {project.features && project.features.length > 0 && (
                  <div className="grid gap-1.25 rounded-xl bg-gradient-to-br from-slate-50 via-white to-emerald-50/70 p-3 text-[11px] text-slate-800 ring-1 ring-slate-100 shadow-sm dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-800/70 dark:text-slate-100 dark:ring-slate-700">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
