interface SkillsProps {
  skills: Record<string, string[]>;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="py-16" id="skills">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Skills
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
