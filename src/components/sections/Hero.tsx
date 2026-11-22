"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroVisual } from "@/components/three/HeroVisual";
import { profile, projects } from "@/lib/data";

function ArrowDown() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M8 2v11M3.5 8.5 8 13l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="square"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-3 w-3">
      <path
        d="M3 9 9 3M4 3h5v5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

const featured = projects[0];
const year = 2026;

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.8,
      delay: reduce ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-[1440px] px-5 pt-8 pb-12 sm:px-8 sm:pt-12 lg:pt-20 lg:pb-24"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <motion.div className="lg:col-span-6" {...enter(0)}>
          <h1
            id="hero-title"
            aria-label={profile.name}
            className="font-display text-[clamp(3.25rem,9vw,6rem)] leading-[0.84] tracking-[-0.04em]"
          >
            {profile.name.split(" ").map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-4 font-mono text-sm text-oxide sm:mt-5">{profile.role}</p>

          <p className="mt-5 max-w-[52ch] text-pretty text-base leading-relaxed text-paper-dim sm:mt-6 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-9">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center gap-3 bg-oxide px-5 py-3 font-mono text-xs text-ink transition-colors hover:bg-paper"
            >
              View work
              <ArrowDown />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 items-center gap-2 border-b border-rule pb-1 font-mono text-xs text-paper transition-colors hover:border-oxide hover:text-oxide"
            >
              Start a conversation
              <ArrowUpRight />
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2.5 sm:mt-8 font-mono text-xs text-paper-dim">
            <span className="h-2 w-2 bg-oxide" aria-hidden="true" />
            {profile.availability}
          </p>
        </motion.div>

        <motion.figure
          className="plot-frame relative border border-rule bg-ink-soft/30 lg:col-span-6"
          {...enter(0.15)}
        >
          <div className="flex items-center justify-between border-b border-rule px-4 py-3 font-mono text-xs text-paper-dim">
            <span>FIG. 01 / CALIBRATION</span>
            <span>PLOTTER / 2026</span>
          </div>

          <div className="relative h-[300px] sm:h-[440px] lg:h-[540px]">
            <HeroVisual />
          </div>

          <figcaption className="flex flex-col gap-2 border-t border-rule px-4 py-3 font-mono text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
            <span>
              {featured.code} / {featured.title.toUpperCase()} / FEATURED
            </span>
            <a
              href={`#project-${featured.slug}`}
              className="inline-flex min-h-11 items-center gap-1.5 border-b border-rule pb-0.5 text-paper transition-colors hover:border-oxide hover:text-oxide"
            >
              Open brief
              <ArrowUpRight />
            </a>
          </figcaption>
        </motion.figure>
      </div>

      <div className="mt-10 grid gap-3 border-t sm:mt-14 border-rule pt-4 font-mono text-xs text-paper-dim sm:grid-cols-3">
        <p>{profile.location}</p>
        <p className="sm:text-center">Portfolio / {year}</p>
        <p className="sm:text-right">Selected work ↓</p>
      </div>
    </section>
  );
}
