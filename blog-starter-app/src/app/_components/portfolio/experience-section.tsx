interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="py-16" id="experience">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-600 pl-8 relative"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900"></div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-gray-600 dark:text-gray-400">
                <span className="font-semibold">{exp.company}</span>
                <span className="text-sm">{exp.period}</span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {exp.description}
            </p>

            <ul className="space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
