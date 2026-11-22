"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { ProjectPlate } from "@/components/ui/ProjectPlate";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/lib/data";

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="h-3 w-3"
    >
      <path d="M2 6h8" stroke="currentColor" strokeWidth="1.25" />
      {open ? null : (
        <path d="M6 2v8" stroke="currentColor" strokeWidth="1.25" />
      )}
    </svg>
  );
}

function ProjectRow({
  project,
  index,
  open,
  onToggle,
}: {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const reversed = index % 2 === 1;
  const panelId = `brief-${project.slug}`;

  return (
    <article
      id={`project-${project.slug}`}
      className="group scroll-mt-24 border-t border-rule py-12 lg:py-16"
      aria-labelledby={`title-${project.slug}`}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
        <div
          className={`flex flex-col lg:col-span-5 ${
            reversed ? "lg:order-2" : ""
          }`}
        >
          <div className="flex items-center justify-between font-mono text-xs text-paper-dim">
            <span>{project.code}</span>
            <span>{project.year}</span>
          </div>

          <h3
            id={`title-${project.slug}`}
            className="mt-4 font-display text-[clamp(2.25rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.03em]"
          >
            {project.title}
          </h3>

          <p className="mt-4 max-w-[48ch] text-pretty text-paper-dim">
            {project.summary}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-rule pt-4 font-mono text-xs">
            <div>
              <dt className="text-paper-dim">Role</dt>
              <dd className="mt-1 text-paper">{project.role}</dd>
            </div>
            <div>
              <dt className="text-paper-dim">Medium</dt>
              <dd className="mt-1 text-paper">{project.medium}</dd>
            </div>
          </dl>

          <p className="mt-4 font-mono text-xs text-paper-dim">
            {project.stack.join(" · ")}
          </p>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-7 flex min-h-11 w-fit items-center gap-2 border-b border-rule pb-1 font-mono text-xs text-paper transition-colors hover:border-oxide hover:text-oxide"
          >
            {open ? "Close brief" : "Read brief"}
            <ToggleIcon open={open} />
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                id={panelId}
                key="brief"
                role="region"
                aria-label={`Brief for ${project.title}`}
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <dl className="space-y-5 pt-6">
                  <div>
                    <dt className="font-mono text-xs text-oxide">Challenge</dt>
                    <dd className="mt-1 max-w-[52ch] text-pretty text-sm leading-relaxed text-paper-dim">
                      {project.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-oxide">Approach</dt>
                    <dd className="mt-1 max-w-[52ch] text-pretty text-sm leading-relaxed text-paper-dim">
                      {project.approach}
                    </dd>
                  </div>
                </dl>
                <p className="mt-5 border-t border-rule pt-3 font-mono text-xs text-paper-dim">
                  {project.state}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
          <figure>
            {project.images && project.images.length > 0 ? (
              <ProjectCarousel
                images={project.images}
                title={project.title}
                code={project.code}
              />
            ) : (
              <div className="border border-rule bg-ink-soft/30">
                <div className="p-3 sm:p-5">
                  <ProjectPlate variant={project.plate} />
                </div>
              </div>
            )}
            <figcaption className="mt-3 flex flex-col gap-1 font-mono text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
              <span>
                FIG. {project.code} / {project.title.toUpperCase()}
              </span>
              <span>{project.medium}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto w-full max-w-[1440px] scroll-mt-20 px-5 py-16 sm:px-8 lg:py-24"
    >
      <SectionHeading
        id="work-title"
        note={`${projects.length.toString().padStart(2, "0")} projects / 2024–2026`}
      >
        Selected work
      </SectionHeading>

      <div className="mt-10">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.slug}
            project={project}
            index={index}
            open={openSlug === project.slug}
            onToggle={() =>
              setOpenSlug((current) =>
                current === project.slug ? null : project.slug,
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
