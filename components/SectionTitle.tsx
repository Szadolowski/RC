import type { ReactNode } from "react";

type SectionTitleProps = {
  number: number;
  title: string;
  children: ReactNode;
};

export default function SectionTitle({
  number,
  title,
  children,
}: SectionTitleProps) {
  const titleNumber = String(number).padStart(2, "0");

  return (
    <section className="relative mt-7 w-full bg-(--bg-950) px-5 py-18 text-(--text-primary) after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-full after:-translate-x-1/2 after:bg-[linear-gradient(90deg,transparent_0%,var(--gold-glow)_50%,transparent_100%)] after:opacity-75 after:blur-[1px] after:shadow-[0_0_14px_var(--gold-glow)] lg:py-23">
      <div className="mx-auto max-w-360">
        <h2 className="flex w-full flex-row flex-wrap items-start content-start gap-2 p-0 text-[10px] font-normal uppercase leading-3 lg:translate-y-[20.5px]">
          <span className="text-(--gold-primary)">
            {titleNumber} {"\\"}
          </span>
          <span className="text-(--gold-light)">{title}</span>
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
