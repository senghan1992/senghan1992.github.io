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
  return (
    <section className="py-16" id="projects">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
            </Link>

            <div className="p-6">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 items-center">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Details →
                </Link>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
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
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
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
    </section>
  );
}
