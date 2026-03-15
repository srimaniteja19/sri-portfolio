export function SectionDivider({ label, right }: { label: string; right?: string }) {
  return (
    <div className="sec-row">
      <div className="sec-lbl">{label}</div>
      {right && <div className="sec-sub">{right}</div>}
    </div>
  );
}
