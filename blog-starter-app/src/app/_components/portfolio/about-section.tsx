interface AboutSectionProps {
  description: string;
  highlights: string[];
}

export function AboutSection({ description, highlights }: AboutSectionProps) {
  return (
    <section className="py-16" id="about">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#0E5CAD] via-[#0b4f94] to-[#0a4076] opacity-90" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E5CAD]">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            문제를 구조화하고 제품화하는 엔지니어
          </h2>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 whitespace-pre-line">
            {description}
          </p>
        </div>

        <div className="rounded-2xl border border-[#0E5CAD]/15 bg-[#0E5CAD]/5 p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-[#0E5CAD]">
            Highlights
          </h3>
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-white/30 bg-white/60 px-4 py-3 text-sm text-slate-800 shadow-sm backdrop-blur dark:bg-slate-900/70 dark:text-slate-100"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0E5CAD]/15 text-[#0E5CAD] font-bold">
                  ✓
                </span>
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
