import SectionTitle from "@/components/SectionTitle";
import giewontGh from "@/images/giewont-hg.png";
import itsme from "@/images/its-me.png";
import ProjectBlock from "./ProjectBlock";

const skillsChemia = ["React.js", "Next.js", "tailwidcss", "typescript"];

const skillsItsMe = [
  "React.js",
  "Next.js",
  "tailwidcss",
  "typescript",
  "framemotion",
];

export default function ProjectsSection() {
  return (
    <SectionTitle number={1} title="WYBRANE PROJEKTY">
      <div className="mt-6 flex flex-col gap-6 lg:-mt-3 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,510px)] lg:items-start lg:gap-x-20 lg:gap-y-8">
        <h3 className="w-full text-[28px] font-semibold leading-[116%] text-(--text-primary) lg:pt-[33.69px] lg:text-[38px] lg:leading-[115%]">
          Projekty zamiast deklaracji.
        </h3>
        <div className="w-full">
          <p className="text-[15px] leading-[165%] pt-5 text-(--text-secondary) lg:text-base lg:leading-[170%]">
            Praktyczne zastosowanie technologii, świadome decyzje projektowe i
            efekty mojej pracy.
          </p>
        </div>
        <div className="col-span-full grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 [&>*:only-child]:lg:col-span-full [&>*:only-child]:lg:w-1/2 [&>*:only-child]:lg:justify-self-center [&>*:nth-child(odd):last-child]:lg:col-span-full [&>*:nth-child(odd):last-child]:lg:w-1/2 [&>*:nth-child(odd):last-child]:lg:justify-self-center">
          <ProjectBlock
            number={1}
            title="Giewont Chemia"
            text="Serwis firmowy prezentujący ofertę produktów dla przemysłu. Projekt łączący czytelną architekturę informacji, responsywny interfejs i potrzeby biznesowe."
            screen={giewontGh}
            skills={skillsChemia}
            href="https://www.giewont-chemia.pl"
          />
          <ProjectBlock
            number={2}
            title="Personal Portfolio"
            text="Autorska przestrzeń do prezentacji doświadczenia i projektów. Eksperyment z kompozycją, interakcjami i sposobem opowiadania o własnych kompetencjach."
            screen={itsme}
            skills={skillsItsMe}
            href="http://itsmerafal.netlify.app/"
          />
        </div>
      </div>
    </SectionTitle>
  );
}
