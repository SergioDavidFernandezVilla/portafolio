import { profile } from "@/lib/data";
import { PlotMark } from "@/components/ui/PlotMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex items-start gap-3">
          <PlotMark className="mt-0.5 h-5 w-5 shrink-0 text-oxide" />
          <div>
            <p className="font-display text-lg tracking-[-0.02em]">
              {profile.name}
            </p>
            <p className="mt-1 max-w-md text-sm text-paper-dim">
              Designed and built with Next.js, three.js and Framer Motion.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-paper-dim md:justify-end">
          <p>© 2026</p>
          <a href="#top" className="inline-flex min-h-11 items-center">
            <span className="border-b border-rule pb-1 transition-colors hover:border-paper hover:text-paper">
              Back to top
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
