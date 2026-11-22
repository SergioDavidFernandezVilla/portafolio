import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-title"
      className="mx-auto w-full max-w-[1440px] scroll-mt-20 px-5 py-16 sm:px-8 lg:py-24"
    >
      <SectionHeading id="tools-title" note="Stack / daily use">
        Tools
      </SectionHeading>

      <p className="mt-5 max-w-[64ch] text-pretty text-paper-dim">
        I pick the tool for the problem, not for the trend. This is what I use to
        take a service from the first query to production.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-xs text-oxide">{group.label}</h3>
            <ul className="mt-4 border-t border-rule">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule py-3 text-sm text-paper-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
