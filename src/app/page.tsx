import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import portfolioData from "@/data/portfolio.json";

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <Container>
        <Hero
          name={portfolioData.profile.name}
          title={portfolioData.profile.title}
          bio={portfolioData.profile.bio}
          profileImage={portfolioData.profile.profileImage}
          email={portfolioData.profile.email}
          github={portfolioData.profile.github}
          linkedin={portfolioData.profile.linkedin}
        />

        <div className="space-y-16">
          <About
            description={portfolioData.about.description}
            highlights={portfolioData.about.highlights}
          />

          <Experience experiences={portfolioData.experience} />

          <Skills skills={portfolioData.skills} />

          <Projects projects={portfolioData.projects} />

          <Contact
            email={portfolioData.profile.email}
            github={portfolioData.profile.github}
            linkedin={portfolioData.profile.linkedin}
          />
        </div>
      </Container>
    </main>
  );
}
