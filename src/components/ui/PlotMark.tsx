export function PlotMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 2v28M2 16h28"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1" />
      <path
        d="M7 21c3.5-8 8-10 18-10"
        stroke="var(--color-oxide)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}
