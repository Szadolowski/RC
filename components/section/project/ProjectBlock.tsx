import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type BlockProps = {
  number: number;
  title: string;
  text: string;
  screen: StaticImageData;
  skills: string[];
  href: string;
};

export default function ProjectBlock({
  number,
  title,
  text,
  screen,
  skills,
  href,
}: BlockProps) {
  return (
    <div className="flex h-full w-full flex-col space-y-3 rounded-xl border border-(--border-gold) p-4">
      <h4 className="flex w-full flex-row flex-wrap items-start content-start gap-2 p-0 text-[12px] font-normal uppercase leading-3">
        <span className="text-(--gold-primary)">
          {number} {"\\"}
        </span>
        <span className="text-(--gold-light)">{title}</span>
      </h4>
      <p className="uppercase text-(--text-primary) font-extrabold text-3xl">
        {title}
      </p>
      <p className="font-light text-(--text-secondary) text-[13px]">{text}</p>
      <div
        role="list"
        aria-label="skills"
        className="mt-6 flex max-w-full flex-row flex-wrap gap-2 lg:mt-7 lg:gap-2.25"
      >
        {skills.map((skill) => {
          return (
            <span
              key={skill}
              role="listitem"
              className="inline-flex max-w-full items-center justify-center rounded-full border border-(--border) bg-(--bg-900) px-4 py-2 text-[9px] font-normal leading-2.75 tracking-[1px] text-(--text-secondary) transition-[background-color,border-color,color] duration-300 ease-out hover:border-(--gold-primary) hover:bg-(--surface-800) hover:text-(--gold-light) lg:text-[10px] lg:leading-2.5"
            >
              {skill}
            </span>
          );
        })}
      </div>
      <Link
        href={href}
        className="my-2 border border-(--border-gold) rounded-2xl p-2 w-full h-full"
        target="_blank"
      >
        <Image src={screen} alt={title} className="h-auto w-full rounded-xl" />
      </Link>
    </div>
  );
}
