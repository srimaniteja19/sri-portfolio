export function SectionDivider({
  label,
  right,
}: {
  label: string;
  right?: string;
}) {
  const cleanRight = right ? right.replace(/^\/\/\s*/, "") : undefined;
  return (
    <div
      className="flex flex-wrap items-center justify-between border-y-[2.5px] px-4 py-2 md:px-8"
      style={{
        borderColor: "var(--ink)",
        background: "var(--ink)",
        color: "var(--bg)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="inline-block h-2.5 w-2.5 shrink-0"
          style={{ background: "var(--volt)" }}
        />
        <span className="font-data text-[0.74rem] font-bold uppercase tracking-[0.14em]">
          {label}
        </span>
      </div>
      {cleanRight && (
        <span
          className="font-data text-[0.68rem] font-semibold uppercase tracking-[0.08em]"
          style={{ color: "var(--volt)" }}
        >
          {cleanRight}
        </span>
      )}
    </div>
  );
}
