import Image from "next/image";
import Link from "next/link";

interface ProjectDetailProps {
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
  fullDescription: string;
  duration: string;
  role: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  techStack: Record<string, string[]>;
  screenshots: string[];
}

export function ProjectDetail({
  title,
  description,
  image,
  tags,
  links,
  featured,
  fullDescription,
  duration,
  role,
  challenges,
  solutions,
  features,
  techStack,
  screenshots,
}: ProjectDetailProps) {
  return (
    <article className="py-16">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Portfolio
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          {featured && (
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          )}
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              View on GitHub
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Main Image */}
      <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-12 bg-gray-200 dark:bg-gray-800">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Project Info Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
            Duration
          </h3>
          <p className="text-lg font-medium">{duration}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
            Role
          </h3>
          <p className="text-lg font-medium">{role}</p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {fullDescription}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg"
            >
              <span className="text-blue-600 mr-3 mt-1 text-xl flex-shrink-0">
                ✓
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">
              Challenges
            </h3>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">⚠</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div
              key={category}
              className="p-6 bg-gray-50 dark:bg-slate-800 rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <ul className="space-y-2">
                {technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="text-gray-700 dark:text-gray-300 text-sm"
                  >
                    • {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      {screenshots.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800"
              >
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Back Button */}
      <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/#projects"
          className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </article>
  );
}
