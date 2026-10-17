import Hero from "@/components/hero/Hero";
import ApproachSection from "@/components/section/approach/ApproachSection";
import ProjectsSection from "@/components/section/project/ProjectSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApproachSection />
      <ProjectsSection />
    </main>
  );
}
