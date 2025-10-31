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
    <main>
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

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <AboutSection
          description={portfolioData.about.description}
          highlights={portfolioData.about.highlights}
        />

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <ExperienceSection experiences={portfolioData.experience} />

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <SkillsSection skills={portfolioData.skills} />

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <ProjectsSection projects={portfolioData.projects} />

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <ContactSection
          email={portfolioData.profile.email}
          github={portfolioData.profile.github}
          linkedin={portfolioData.profile.linkedin}
        />
      </Container>
    </main>
  );
}
