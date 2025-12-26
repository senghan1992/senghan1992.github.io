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
    <section className="py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-[#0E5CAD] via-[#0b4f94] to-[#0a4076] px-6 py-10 sm:px-10 md:px-14 shadow-[0_28px_80px_rgba(10,64,118,0.35)] dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="absolute bottom-[-3rem] right-[-2rem] h-56 w-56 rounded-full bg-indigo-400/25 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-sm">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
              <span>Data / AI Platform Engineer</span>
            </div>

            <h1 className="mb-2 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
              {name}
            </h1>
            <h2 className="mb-6 text-xl font-medium text-slate-200 md:text-2xl lg:text-3xl">
              {title}
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-100/90 md:text-lg">
              {bio}
            </p>

            <div className="mb-8 grid gap-3 text-xs text-slate-100/90 md:text-sm sm:grid-cols-2">
              {[
                "데이터 · AI Platform | End-to-End 자동화",
                "n8n · FastAPI · Next.js로 실험 속도 가속",
                "AI Agent 워크플로우 · 데이터 파이프라인 설계",
                "서비스 임팩트 중심의 문제 해결"
              ].map((pill) => (
                <div
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                >
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span className="leading-relaxed">{pill}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-[#0E5CAD] shadow-sm transition-colors hover:bg-slate-100 md:text-base"
                >
                  Contact Me
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-slate-50 transition-colors hover:bg-white/10 md:text-base"
                >
                  GitHub
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-slate-50 transition-colors hover:bg-white/10 md:text-base"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-white/25 via-white/5 to-white/30" />
              <div className="absolute inset-[0.2rem] overflow-hidden rounded-[1.85rem] border border-white/25 bg-slate-950/60 backdrop-blur">
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -left-2 bottom-5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-slate-50 shadow-lg backdrop-blur">
                데이터 · AI Platform으로
                <br />
                반복 업무를 제품화합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

