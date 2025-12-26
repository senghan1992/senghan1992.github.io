import Container from "@/app/_components/container";
import { HeroSection } from "@/app/_components/portfolio/hero-section";
import { AboutSection } from "@/app/_components/portfolio/about-section";
import { ExperienceSection } from "@/app/_components/portfolio/experience-section";
import { SkillsSection } from "@/app/_components/portfolio/skills-section";
import { ProjectsSection } from "@/app/_components/portfolio/projects-section";
import { ContactSection } from "@/app/_components/portfolio/contact-section";
import portfolioData from "@/data/portfolio.json";

export default function Index() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#0E5CAD]/10 blur-3xl" />
          <div className="absolute right-6 top-32 h-24 w-24 rounded-full bg-indigo-200/40 blur-2xl dark:bg-indigo-500/20" />
          <div className="absolute left-1/2 bottom-10 h-28 w-28 -translate-x-1/2 rounded-full bg-cyan-200/35 blur-3xl dark:bg-cyan-500/20" />
        </div>

        <Container>
          <HeroSection
            name={portfolioData.profile.name}
            title={portfolioData.profile.title}
            bio={portfolioData.profile.bio}
            profileImage={portfolioData.profile.profileImage}
            email={portfolioData.profile.email}
            github={portfolioData.profile.github}
            linkedin={portfolioData.profile.linkedin}
          />

          <div className="my-10 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70">
            <AboutSection
              description={portfolioData.about.description}
              highlights={portfolioData.about.highlights}
            />
          </div>

          <div className="my-10 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70">
            <ExperienceSection experiences={portfolioData.experience} />
          </div>

          <div className="my-10 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70">
            <SkillsSection skills={portfolioData.skills} />
          </div>

          <div className="my-10 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70">
            <ProjectsSection projects={portfolioData.projects} />
          </div>

          <div className="my-10 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70">
            <ContactSection
              email={portfolioData.profile.email}
              github={portfolioData.profile.github}
              linkedin={portfolioData.profile.linkedin}
            />
          </div>
        </Container>
      </div>
    </main>
  );
}
