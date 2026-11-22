import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-[1440px] scroll-mt-20 px-5 py-16 sm:px-8 lg:py-24"
    >
      <SectionHeading id="about-title" note="Method / approach">
        About
      </SectionHeading>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="max-w-[24ch] font-display text-[clamp(1.75rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-balance">
            I work where a design decision turns into behaviour.
          </p>
          <div className="mt-8 max-w-[65ch] space-y-4 text-paper-dim">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="border-t border-rule pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <h3 className="font-mono text-xs text-oxide">Principles</h3>
          <ul className="mt-5 space-y-4">
            <li className="border-t border-rule pt-3">
              <p className="text-sm text-paper">Systems before screens.</p>
              <p className="mt-1 text-sm text-paper-dim">
                Components, states and rules that survive the next page.
              </p>
            </li>
            <li className="border-t border-rule pt-3">
              <p className="text-sm text-paper">Motion with intent.</p>
              <p className="mt-1 text-sm text-paper-dim">
                Every transition explains a change; if it does not, it goes.
              </p>
            </li>
            <li className="border-t border-rule pt-3">
              <p className="text-sm text-paper">Accessibility from the start.</p>
              <p className="mt-1 text-sm text-paper-dim">
                Keyboard, focus, contrast and reduced motion are part of the
                design.
              </p>
            </li>
          </ul>
        </aside>
      </div>

      <ol className="mt-16 border-t border-rule">
        {profile.process.map((step, index) => (
          <li
            key={step.title}
            className="grid gap-2 border-b border-rule py-5 sm:grid-cols-[3rem_9rem_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-xs text-oxide">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl tracking-[-0.02em]">
              {step.title}
            </h3>
            <p className="max-w-[58ch] text-pretty text-sm text-paper-dim">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
