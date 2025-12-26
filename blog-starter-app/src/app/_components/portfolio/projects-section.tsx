"use client";

import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  duration?: string;
  role?: string;
  teamSize?: string;
  features?: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const nonFeaturedProjects = projects.filter((project) => !project.featured);
  const primaryFeatured = featuredProjects[0];
  const remainingProjects = [
    ...featuredProjects.slice(1),
    ...nonFeaturedProjects,
  ];

  return (
    <section className="py-20" id="projects">
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
          Case Studies
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          회사별 주요 임팩트 한눈에
        </h2>
        <p className="max-w-3xl text-sm md:text-base text-gray-600 dark:text-gray-400">
          LG전자 · 딜리버러 · 핏펫에서 진행한 End-to-End 개선 사례를 이미지와 함께 요약했습니다.
        </p>
      </div>

      {primaryFeatured && (
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/85">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-10 top-14 h-28 w-28 rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-700/30" />
            </div>
            <div className="relative flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Featured
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                {primaryFeatured.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                {primaryFeatured.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                {primaryFeatured.duration && (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    {primaryFeatured.duration}
                  </span>
                )}
                {primaryFeatured.role && (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    {primaryFeatured.role}
                  </span>
                )}
                {primaryFeatured.teamSize && (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    팀 {primaryFeatured.teamSize}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {primaryFeatured.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {primaryFeatured.features && primaryFeatured.features.length > 0 && (
                <div className="grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100">
                  {primaryFeatured.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                {primaryFeatured.links.github && (
                  <a
                    href={primaryFeatured.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  >
                    GitHub
                  </a>
                )}
                {primaryFeatured.links.demo && (
                  <a
                    href={primaryFeatured.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors hover:bg-slate-800 dark:border-slate-200 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900">
            <Image
              src={primaryFeatured.image}
              alt={primaryFeatured.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {remainingProjects.length > 0 && (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {remainingProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="relative h-44 overflow-hidden bg-gray-50 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-slate-50">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-3 flex flex-wrap gap-2 text-[11px] font-medium text-slate-700 dark:text-slate-200">
                  {project.duration && (
                    <span className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                      {project.duration}
                    </span>
                  )}
                  {project.role && (
                    <span className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                      {project.role}
                    </span>
                  )}
                  {project.teamSize && (
                    <span className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                      팀 {project.teamSize}
                    </span>
                  )}
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.features && project.features.length > 0 && (
                  <div className="mb-4 grid gap-2 rounded-xl border border-slate-200/70 bg-slate-50/60 p-3 text-xs text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[#0E5CAD]" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex items-center gap-3 text-xs font-medium">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0E5CAD] hover:text-[#0c4a86]"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-slate-200"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

