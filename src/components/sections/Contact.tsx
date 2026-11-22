import { CopyEmail } from "@/components/sections/CopyEmail";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-[1440px] scroll-mt-20 px-5 py-16 sm:px-8 lg:py-24"
    >
      <SectionHeading id="contact-title" note="Email / direct contact">
        Contact
      </SectionHeading>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7">
          <p className="max-w-[20ch] font-display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1] tracking-[-0.035em] text-balance">
            Got a backend that needs to hold up under load?
          </p>
        </div>

        <div className="lg:col-span-5">
          <p className="max-w-[46ch] text-pretty text-paper-dim">
            Tell me what you are building, who it is for and what it has to
            achieve. If it fits, I answer with the next steps.
          </p>
          <a
            href={`mailto:${profile.email}?subject=Project`}
            className="mt-6 inline-block max-w-full border-b border-oxide pb-1 font-display text-[clamp(1.4rem,2.8vw,2.2rem)] leading-tight break-all tracking-[-0.02em] transition-colors hover:text-oxide"
          >
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </div>
      </div>
    </section>
  );
}
