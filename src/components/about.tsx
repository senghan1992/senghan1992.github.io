interface AboutProps {
  description: string;
  highlights: string[];
}

export function About({ description, highlights }: AboutProps) {
  return (
    <section
      className="relative overflow-hidden py-16"
      id="about"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_20%_40%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.12),transparent_32%)] blur-3xl" />
      <div className="relative mb-10 flex flex-col gap-3">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/70 dark:text-slate-200 dark:ring-slate-700">
          About
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Product-minded Builder
        </h2>
        <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
          데이터를 바탕으로 문제를 정의하고, 팀을 설득하며, 실행까지 이끄는 제품 설계자이자 엔지니어입니다. 사람과 비즈니스, 그리고 기술을 연결하는 경험을 만듭니다.
        </p>
      </div>

      <div className="relative grid gap-6 md:grid-cols-2">
        {/* Description */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/80 dark:ring-slate-800/60">
          <div className="absolute -left-10 top-12 h-32 w-32 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/40" />
          <div className="absolute right-0 bottom-0 h-36 w-36 rounded-full bg-emerald-200/25 blur-3xl dark:bg-emerald-900/35" />
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-700 ring-1 ring-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-200 dark:ring-indigo-800">
              Profile
            </div>
            <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
              {description}
            </p>
            <div className="grid gap-3 text-sm text-slate-700 dark:text-slate-200 md:grid-cols-2">
              <div className="flex items-center gap-2 rounded-xl bg-slate-50/80 px-3 py-2 ring-1 ring-slate-200 dark:bg-slate-800/60 dark:ring-slate-700">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                사용자 경험과 데이터 기반 실험을 결합해 우선순위를 세웁니다.
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-50/80 px-3 py-2 ring-1 ring-slate-200 dark:bg-slate-800/60 dark:ring-slate-700">
                <span className="inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                팀이 빠르게 합의하고 실행하도록 문서/시각화로 정리합니다.
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.25)] ring-1 ring-slate-800">
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.14), transparent 32%)" }} />
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100 ring-1 ring-white/15">
              Core Strengths
            </div>
            <h3 className="text-2xl font-semibold">What I Do Best</h3>
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur"
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/40">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-100">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
