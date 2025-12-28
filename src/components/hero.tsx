import Image from "next/image";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
}

export function Hero({
  name,
  title,
  bio,
  profileImage,
  email,
  github,
  linkedin,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#0f2f56]/14 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-emerald-200/18 blur-3xl" />
        <div className="absolute inset-x-6 bottom-[-10%] h-40 rounded-full bg-gradient-to-r from-[#0f2f56]/10 via-transparent to-emerald-300/10 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text left (emphasis) */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0f2f56] shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/70 dark:text-slate-100 dark:ring-slate-800">
            About Me
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f2f56] dark:text-emerald-200">
              Data / AI Platform Engineer
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-slate-50">
              데이터로 문제를 정의하고, <span className="text-[#0f2f56] dark:text-emerald-200">AI</span>로 해결을 완성합니다.
            </h1>
            <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
              안녕하세요, {name}입니다. {title}로 End-to-End 플랫폼을 설계하고 실행합니다.
            </p>
            <p className="text-base leading-relaxed text-slate-700/90 dark:text-slate-200">
              {bio}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-2 rounded-xl bg-white/85 px-4 py-3 ring-1 ring-slate-200/70 shadow-sm backdrop-blur dark:bg-slate-900/60 dark:ring-slate-800">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#0f2f56]" />
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                데이터 수집→분석→AI 추론까지 이어지는 워크플로우를 설계·자동화합니다.
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-xl bg-emerald-50/85 px-4 py-3 ring-1 ring-emerald-200/70 shadow-sm backdrop-blur dark:bg-emerald-900/45 dark:ring-emerald-800">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              <div className="text-sm leading-relaxed text-emerald-900/85 dark:text-emerald-100">
                n8n·Webhook 오케스트레이션으로 반복 업무를 없애고 실험 속도를 높입니다.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              데이터 파이프라인
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              AI Agent 오케스트레이션
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              플랫폼 엔지니어링
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="mailto:senghan1992@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0f2f56] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0c2444]"
            >
              연락하기
            </a>
            <a
              href="https://www.linkedin.com/in/senghan1992"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Photo right with glow */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-56 w-56 md:h-64 md:w-64">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[#0f2f56]/20 via-white to-[#7aa4ff]/28 blur-3xl dark:from-slate-800 dark:via-slate-900 dark:to-slate-800" />
            <div className="absolute -inset-4 -z-20 rounded-full border border-white/30 dark:border-slate-800/50" />
            <div className="relative h-full w-full overflow-hidden rounded-[26px] border border-[#0f2f56]/18 bg-gradient-to-br from-white via-[#f7fbff] to-[#e6f2ff] shadow-[0_22px_60px_rgba(15,47,86,0.22)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent dark:from-black/45" />
              <div className="absolute left-4 bottom-4 space-y-1 text-white drop-shadow">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-80">
                  Currently
                </p>
                <p className="text-sm font-semibold">Building AI Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
