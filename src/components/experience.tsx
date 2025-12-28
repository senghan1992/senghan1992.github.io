interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="py-16" id="experience">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Experience
        </h2>
      </div>

      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:left-[7.5rem]" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative grid gap-6 md:grid-cols-[7rem_1fr]">
            {/* Period Badge */}
            <div className="relative flex items-start">
              <div className="inline-flex rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {exp.period}
              </div>
            </div>

            {/* Content Card */}
            <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
              {/* Timeline dot */}
              <div className="absolute -left-[1.6rem] top-8 hidden h-3 w-3 rounded-full border-2 border-slate-900 bg-white dark:border-slate-100 dark:bg-slate-900 md:block" />

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {exp.position}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {exp.company}
                </p>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100" />
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
