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
    <section className="py-14 md:py-18">
      <div className="rounded-3xl border border-slate-200/90 bg-white/95 px-6 py-10 sm:px-10 md:px-14 shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-slate-800/80 dark:bg-slate-900/90">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Data / AI Platform Engineer</span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                {name}
              </h1>
              <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200">
                {title}
              </p>
              <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-700/90 dark:text-slate-200/90">
                {bio}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "역할", value: "Data Platform · AI Agent · Automation" },
                { label: "스택", value: "FastAPI · Next.js · n8n · Docker" },
                { label: "방식", value: "문제 구조화 → 제품화 → 자동화" },
                { label: "포커스", value: "실험 속도 · 운영 안정성" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-100">
                    {item.label}
                  </div>
                  <span className="text-sm md:text-base leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 md:text-base"
                >
                  메일로 연락하기
                </a>
              )}
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

          <div className="relative flex justify-center">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72">
              <div className="absolute inset-[-12%] rounded-[32px] bg-gradient-to-br from-slate-200 via-slate-100 to-white shadow-[0_25px_80px_rgba(15,23,42,0.12)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-900" />
              <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

