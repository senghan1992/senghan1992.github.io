interface ContactSectionProps {
  email: string;
  github?: string;
  linkedin?: string;
}

export function ContactSection({ email, github, linkedin }: ContactSectionProps) {
  return (
    <section className="py-14" id="contact">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0E5CAD]/20 bg-[#0E5CAD]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E5CAD]">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Contact
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
          새로운 협업을 기다립니다
        </h2>
        <p className="max-w-2xl text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          데이터/AI 기반 문제 해결이나 제품·플랫폼 설계에 관심이 있다면 편하게 연락 주세요.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-xl bg-[#0E5CAD] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0c4a86] md:text-base"
          >
            메일 보내기
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 md:text-base"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 md:text-base"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
