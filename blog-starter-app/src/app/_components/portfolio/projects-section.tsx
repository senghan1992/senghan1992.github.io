"use client";

import Image from "next/image";
import Link from "next/link";

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
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Selected Projects
          </h2>
          <p className="max-w-xl text-sm md:text-base text-gray-600 dark:text-gray-400">
            실제 서비스 환경에서의 문제 해결 경험과, 사용자 경험에 집중해 만든
            프로젝트들을 정리했습니다.
          </p>
        </div>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500">
          GitHub 저장소와 라이브 데모 링크를 통해 상세 구현 내용을 확인하실 수
          있습니다.
        </p>
      </div>

      {primaryFeatured && (
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <Link
            href={`/projects/${primaryFeatured.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 text-slate-50 shadow-[0_20px_60px_rgba(15,23,42,0.65)] dark:border-slate-800"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/80 to-slate-900" />
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="absolute bottom-[-3rem] right-[-2rem] h-52 w-52 rounded-full bg-indigo-500/25 blur-3xl" />
            </div>

            <div className="relative grid gap-8 p-7 sm:p-9 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Featured Project</span>
                  </div>
                  <h3 className="mb-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                    {primaryFeatured.title}
                  </h3>
                  <p className="mb-4 text-sm sm:text-base text-slate-200/90 line-clamp-4">
                    {primaryFeatured.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {primaryFeatured.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                  {primaryFeatured.links.github && (
                    <a
                      href={primaryFeatured.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-950/60 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-900"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                  {primaryFeatured.links.demo && (
                    <a
                      href={primaryFeatured.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-slate-950 text-xs sm:text-sm font-semibold transition-colors hover:bg-sky-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80">
                <Image
                  src={primaryFeatured.image}
                  alt={primaryFeatured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              프로젝트 상세 페이지에서 설계 의도와 기술적인 선택의 근거,
              트레이드오프를 함께 설명합니다.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {remainingProjects.slice(0, 2).map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-sm shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                  <p className="mb-3 line-clamp-3 text-xs text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {remainingProjects.length > 0 && (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {remainingProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/80"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block h-44 overflow-hidden bg-gray-100 dark:bg-slate-800"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-sky-600 dark:text-slate-50 dark:group-hover:text-sky-400">
                    {project.title}
                  </h3>
                </Link>
                <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 text-xs font-medium">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    View case study
                    <span className="ml-1 text-sm">→</span>
                  </Link>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-sky-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-sky-300"
                      onClick={(e) => e.stopPropagation()}
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

