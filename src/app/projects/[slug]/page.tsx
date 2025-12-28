import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import { ProjectDetail } from "@/app/_components/portfolio/project-detail";
import portfolioData from "@/data/portfolio.json";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Container>
        <ProjectDetail
          slug={project.slug}
          title={project.title}
          description={project.description}
          image={project.image}
          tags={project.tags}
          links={project.links}
          featured={project.featured}
          fullDescription={project.fullDescription}
          duration={project.duration}
          role={project.role}
          challenges={project.challenges}
          solutions={project.solutions}
          features={project.features}
          techStack={project.techStack}
          screenshots={project.screenshots}
        />
      </Container>
    </main>
  );
}
