import type { ReactNode } from "react";

export function SectionHeading({
  id,
  children,
  note,
}: {
  id: string;
  children: ReactNode;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-t border-rule pt-5 sm:flex-row sm:items-end sm:justify-between">
      <h2
        id={id}
        className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-[-0.035em] text-balance"
      >
        {children}
      </h2>
      {note ? (
        <p className="shrink-0 font-mono text-xs text-paper-dim">{note}</p>
      ) : null}
    </div>
  );
}
