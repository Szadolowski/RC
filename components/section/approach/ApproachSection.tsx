import SectionTitle from "@/components/SectionTitle";
import FlowChips from "@/components/section/approach/FlowChips";

export default function ApproachSection() {
  return (
    <SectionTitle title="Podejście" number={0}>
      <div className="mt-6 flex flex-col gap-6 lg:-mt-3 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,510px)] lg:items-start lg:gap-20">
        <h3 className="w-full text-[28px] font-semibold leading-[116%] text-(--text-primary) lg:pt-[33.69px] lg:text-[38px] lg:leading-[115%]">
          Nie interesuje mnie tylko „zrobić widok” albo „postawić serwer”.{" "}
          <span className="text-(--gold-light)">
            Chcę rozumieć cały system.
          </span>
        </h3>
        <div className="w-full">
          <p className="text-[15px] leading-[165%] text-(--text-secondary) lg:text-base lg:leading-[170%]">
            Najlepiej czuję się tam, gdzie produkt spotyka się z infrastrukturą:
            interfejs, API, deployment, sieć, monitoring i utrzymanie przestają
            być osobnymi światami.
          </p>
          <FlowChips />
        </div>
      </div>
    </SectionTitle>
  );
}
