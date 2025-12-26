interface SkillsSectionProps {
  skills: Record<string, string[]>;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="py-16" id="skills">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#0E5CAD] via-[#0b4f94] to-[#0a4076] opacity-90" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E5CAD]">
            Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Skills & Tools
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0E5CAD] shadow-[0_0_0_6px_rgba(14,92,173,0.15)]" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-sm text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
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
