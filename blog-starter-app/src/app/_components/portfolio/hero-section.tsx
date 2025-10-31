import Image from "next/image";

interface HeroSectionProps {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export function HeroSection({
  name,
  title,
  bio,
  profileImage,
  github,
  linkedin,
  email,
}: HeroSectionProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
            <Image
              src={profileImage}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            {bio}
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            {email && (
              <a
                href={`mailto:${email}`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
