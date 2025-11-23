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
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-10 sm:px-10 md:px-14 shadow-[0_24px_80px_rgba(15,23,42,0.75)] dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-[-3rem] h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Portfolio</span>
            </div>

            <h1 className="mb-3 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
              {name}
            </h1>
            <h2 className="mb-6 text-xl font-medium text-slate-300 md:text-2xl lg:text-3xl">
              {title}
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-300/90 md:text-lg">
              {bio}
            </p>

            <div className="mb-8 flex flex-wrap gap-3 text-xs text-slate-300/80 md:text-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Frontend · Backend · DevOps</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2">
                <span className="inline-flex h-1 w-8 rounded-full bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300" />
                <span>사용자 경험과 비즈니스 임팩트에 집중합니다</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-colors hover:bg-sky-400 md:text-base"
                >
                  Contact Me
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-950/40 px-6 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-900 md:text-base"
                >
                  GitHub
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-950/40 px-6 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-900 md:text-base"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-slate-50/15 via-slate-50/0 to-slate-50/35" />
              <div className="absolute inset-[0.2rem] overflow-hidden rounded-[1.85rem] border border-slate-700/80 bg-slate-950/80">
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -left-2 bottom-5 rounded-2xl border border-slate-700/70 bg-slate-950/85 px-4 py-3 text-xs text-slate-200 shadow-lg backdrop-blur">
                최근에 작업한 프로젝트와 문제 해결 과정을
                <br />
                포트폴리오 형태로 정리했습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

