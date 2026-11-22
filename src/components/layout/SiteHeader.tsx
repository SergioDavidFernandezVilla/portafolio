import { profile } from "@/lib/data";
import { NavLinks } from "@/components/layout/NavLinks";
import { PlotMark } from "@/components/ui/PlotMark";

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="h-3 w-3"
    >
      <path
        d="M3 9 9 3M4 3h5v5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-rule bg-ink"
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-3 py-2"
          aria-label={`${profile.name}, back to top`}
        >
          <PlotMark className="h-6 w-6 text-paper" />
          <span className="font-display text-lg leading-none tracking-[-0.02em]">
            {profile.name}
          </span>
        </a>

        <nav aria-label="Main navigation" className="flex items-center">
          <NavLinks />
          <a
            href={`mailto:${profile.email}`}
            className="ml-5 hidden min-h-11 items-center sm:ml-8 sm:flex"
          >
            <span className="flex items-center gap-1.5 border-b border-oxide pb-1 font-mono text-xs text-oxide transition-colors hover:border-paper hover:text-paper">
              Let&apos;s talk
              <ArrowUpRight />
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
