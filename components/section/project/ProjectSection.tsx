import SectionTitle from "@/components/SectionTitle";
import screen from "@/images/giewont-hg.png";
import ProjectBlock from "./ProjectBlock";

const skills = ["React.js", "Next.js", "tailwidcss", "typescript"];

export default function ProjectsSection() {
  return (
    <SectionTitle number={1} title="WYBRANE PROJEKTY">
      <div className="mt-6 flex flex-col gap-6 lg:-mt-3 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,510px)] lg:items-start lg:gap-20">
        <h3 className="w-full text-[28px] font-semibold leading-[116%] text-(--text-primary) lg:pt-[33.69px] lg:text-[38px] lg:leading-[115%]">
          Najpierw realizacje. Potem technologie.
        </h3>
        <div className="w-full">
          <p className="text-[15px] leading-[165%] text-(--text-secondary) lg:text-base lg:leading-[170%]">
            Projekty oparte na rzeczywistym kodzie i pracy. Status każdego z
            nich pokazany bez upiększania.
          </p>
        </div>
        <ProjectBlock
          number={1}
          title="REALNE WDROŻENIE"
          text="Strona firmowa i panel administracyjny. Praca z wymaganiami biznesowymi, implementacja i wdrożenie."
          screen={screen}
          skills={skills}
        />
      </div>
    </SectionTitle>
  );
}
