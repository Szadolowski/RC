import StackTimelineAnimation from "./StackTimelineAnimation";
import { stacklineData } from "./stacklineData";

export default function StackTimeline() {
  return (
    <section aria-label="Kompetencje i technologie" className="mt-10 w-full">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-3 left-3 top-3 w-px bg-(--gold-primary)/30 md:left-5"
        />

        <ol className="space-y-6 md:space-y-8">
          {stacklineData.map((stack, index) => (
            <li key={stack.title} className="relative pl-10 md:pl-16">
              <div
                aria-hidden="true"
                className="absolute left-3 top-5 z-10 flex size-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-(--gold-light) bg-(--bg-950) md:left-5"
              >
                <div className="size-1 rounded-full bg-(--gold-primary)" />
              </div>

              <StackTimelineAnimation stack={stack} index={index} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
