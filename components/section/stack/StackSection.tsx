import SectionTitle from "@/components/SectionTitle";
import StackTimeline from "./StackTimeline";

export default function StackSection() {
  return (
    <SectionTitle number={2} title="KOMPETENCJE I STACK">
      <div className="mt-6 grid gap-6 lg:-mt-3 lg:grid-cols-[1fr_510px] lg:items-start lg:gap-x-20 lg:gap-y-8">
        <h3 className="text-[28px] font-semibold leading-[116%] text-(--text-primary) lg:pt-[33.69px] lg:text-[38px] lg:leading-[115%]">
          Od interfejsu do infrastruktury.
        </h3>
        <div>
          <p className="pt-5 text-[15px] leading-[165%] text-(--text-secondary) lg:text-base lg:leading-[170%]">
            Od doświadczenia użytkownika, przez logikę aplikacji, po środowiska
            produkcyjne.
          </p>
        </div>
      </div>
      <StackTimeline></StackTimeline>
    </SectionTitle>
  );
}
