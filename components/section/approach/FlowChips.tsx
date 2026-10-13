const flowSteps = [
  { label: "BUILD", width: "w-[49px] lg:w-[65.11px]" },
  { label: "DEPLOY", width: "w-[65px] lg:w-[72.12px]" },
  { label: "OPERATE", width: "w-[59px] lg:w-[79.16px]" },
  { label: "IMPROVE", width: "w-[51px] lg:w-[79.16px]" },
];

export default function FlowChips() {
  return (
    <div
      role="list"
      aria-label="Etapy pracy"
      className="mt-6 flex max-w-full flex-wrap gap-2 lg:mt-7 lg:gap-2.25"
    >
      {flowSteps.map(({ label, width }) => (
        <span
          key={label}
          role="listitem"
          className={`${width} box-border inline-flex h-8 shrink-0 cursor-default items-center justify-center rounded-full border border-(--border) bg-(--bg-900) text-[9px] font-normal leading-2.75 tracking-[1px] text-(--text-secondary) transition-[background-color,border-color,color] duration-300 ease-out hover:border-(--gold-primary) hover:bg-(--surface-800) hover:text-(--gold-light) lg:text-[10px] lg:leading-2.5`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
