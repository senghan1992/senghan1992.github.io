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
      <div className="mb-10 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#0E5CAD] via-[#0b4f94] to-[#0a4076] opacity-90" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E5CAD]">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Experience
          </h2>
        </div>
      </div>

      <div className="relative space-y-8">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#0E5CAD] via-slate-300 to-transparent dark:via-slate-700" />
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative ml-10 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="absolute -left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0E5CAD] shadow-md ring-4 ring-white dark:bg-slate-900 dark:ring-slate-900">
              <div className="h-2 w-2 rounded-full bg-[#0E5CAD]" />
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0E5CAD]/10 px-3 py-1 text-xs font-semibold text-[#0E5CAD]">
                {exp.period}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                {exp.position}
              </h3>
            </div>

            <p className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {exp.company}
            </p>
            <p className="mb-4 text-sm text-gray-700 leading-relaxed dark:text-gray-300">
              {exp.description}
            </p>

            <div className="grid gap-3">
              {exp.achievements.map((achievement, achIndex) => (
                <div
                  key={achIndex}
                  className="flex gap-3 rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#0E5CAD]" />
                  <span className="leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
