import Image from "next/image";
import hero from "@/images/hero.png";
import HeroButton from "@/components/hero/HeroButton";
import HeroScroll from "@/components/hero/HeroScroll";
import HeroSkill from "@/components/hero/HeroSkill";

export default function Hero() {
  return (
    <div className="relative flex h-[75dvh] w-full justify-end overflow-x-hidden overflow-y-visible lg:h-dvh">
      <Image
        src={hero}
        alt="hero"
        width={2168}
        height={725}
        priority
        unoptimized
        className="block h-[75dvh] max-w-none shrink-0 w-auto translate-x-96 lg:h-dvh"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-[rgba(0,0,0,0.8)] to-transparent" />
      <div className="absolute inset-0 z-20 flex h-full w-full flex-col justify-center px-8 lg:px-16">
        <p className="uppercase text-xs text-(--gold-light)">
          Technologie · Infrastruktura · Realne rozwiązania
        </p>
        <h1 className="my-2 text-4xl font-semibold uppercase text-(--text-primary) sm:text-6xl">
          Rafał
          <br />
          <span className="text-(--gold-primary)">Curzydło</span>
        </h1>
        <h3 className="max-w-xl text-sm leading-relaxed text-(--text-secondary) antialiased sm:text-base">
          Łączę tworzenie nowoczesnych aplikacji z administracją infrastruktury,
          automatyzacją i realnym rozwiązywaniem problemów. Od frontendu, przez
          backend i DevOps, po sieci, monitoring i homelab.
        </h3>
        <div className="mt-20">
          <HeroButton />
        </div>
        <HeroSkill />
        <HeroScroll />
      </div>
    </div>
  );
}
