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
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-[#0E5CAD] via-[#0b4f94] to-[#0a4076] px-6 py-10 sm:px-10 md:px-14 shadow-[0_30px_90px_rgba(10,64,118,0.32)] dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-cyan-300/18 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-[-3rem] h-64 w-64 rounded-full bg-indigo-300/18 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-sm">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
              <span>Data / AI Platform Engineer</span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                {name}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-slate-100/90">
                {title}
              </p>
              <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-100/90">
                {bio}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  label: "주특기",
                  value: "Data Platform · AI Agent · Workflow",
                },
                {
                  label: "도구",
                  value: "FastAPI · Next.js · n8n · Docker",
                },
                { label: "스타일", value: "문제 구조화 → 제품화 → 자동화" },
                { label: "관심", value: "실험 속도 향상, 운영 자동화" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-xs font-semibold uppercase tracking-wide">
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
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-[#0E5CAD] shadow-sm transition-colors hover:bg-slate-100 md:text-base"
                >
                  메일로 연락하기
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-slate-50 transition-colors hover:bg-white/15 md:text-base"
                >
                  GitHub
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-slate-50 transition-colors hover:bg-white/15 md:text-base"
                >
                  Portfolio
                </a>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-white/30 via-white/10 to-white/25" />
              <div className="absolute inset-[0.24rem] overflow-hidden rounded-[1.85rem] border border-white/25 bg-slate-950/60 backdrop-blur">
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -left-4 bottom-6 rounded-2xl border border-white/25 bg-white/12 px-4 py-3 text-xs text-slate-50 shadow-lg backdrop-blur">
                End-to-End 데이터 & AI 플랫폼을
                <br />
                설계·구현·운영합니다.
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: "6+ years", desc: "데이터/백엔드/플랫폼 경험" },
                { title: "AI Agent", desc: "n8n · Webhook · LLM 워크플로우" },
                { title: "Automation", desc: "반복 업무 → 서비스화/제품화" },
                { title: "Full-stack", desc: "Next.js · FastAPI · DB · DevOps" },
              ].map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white shadow-sm backdrop-blur"
                >
                  <div className="text-lg font-semibold">{stat.title}</div>
                  <div className="text-sm text-white/80">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

