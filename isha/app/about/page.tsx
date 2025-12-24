import { ProfileCard } from "@/components/about/profile-card";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";
import { DATA } from "@/data";

export default function AboutPage() {
  const { education, experience, profile } = DATA.about;
  const tech = DATA.about.technologies;

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={DATA.morphingTexts.about} />
      <ProfileCard
        description={profile.description}
        image={profile.image}
        name={profile.name}
        title={profile.title}
      />

      <JourneyTimeline education={education} experience={experience} />
      <div className="mt-16 sm:mt-20 md:mt-24" />
      <Skills tech={tech} />
    </section>
  );
}
