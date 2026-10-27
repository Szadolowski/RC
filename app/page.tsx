import Hero from "@/components/hero/Hero";
import ApproachSection from "@/components/section/approach/ApproachSection";
import ProjectsSection from "@/components/section/project/ProjectSection";
import StackSection from "@/components/section/stack/StackSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApproachSection />
      <ProjectsSection />
      <StackSection />
    </main>
  );
}
