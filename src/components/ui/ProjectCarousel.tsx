"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ProjectLightbox } from "@/components/ui/ProjectLightbox";
import type { ProjectImage } from "@/lib/data";

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-3 w-3">
      <path
        d={direction === "prev" ? "M7.5 2.5 4 6l3.5 3.5" : "M4.5 2.5 8 6l-3.5 3.5"}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-3 w-3">
      <path
        d="M7 1.5h3.5V5M5 10.5H1.5V7M10.5 1.5 7 5M1.5 10.5 5 7"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ProjectCarousel({
  images,
  title,
  code,
}: {
  images: ProjectImage[];
  title: string;
  code?: string;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const total = images.length;
  const current = images[index];

  const go = useCallback(
    (target: number) => {
      setIndex(((target % total) + total) % total);
    },
    [total],
  );

  if (total === 0) {
    return null;
  }

  return (
    <>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(index - 1);
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(index + 1);
          }
        }}
        className="border border-rule bg-ink-soft/30"
      >
        <div
          className="relative max-h-[70vh] w-full bg-ink-soft/40"
          style={{ aspectRatio: current.ratio ?? 16 / 10 }}
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Open image ${index + 1} of ${total} in full screen`}
            className="group absolute inset-0 block h-full w-full cursor-zoom-in"
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain object-top"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-3 right-3 flex items-center gap-1.5 border border-rule bg-ink/70 px-2 py-1 font-mono text-[0.65rem] text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <ExpandIcon />
              FULL SCREEN
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-2 border-t border-rule px-4 py-3 font-mono text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
          <span className="text-pretty">{current.caption}</span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous image"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-rule text-paper transition-colors hover:border-oxide hover:text-oxide"
            >
              <Arrow direction="prev" />
            </button>
            <span aria-live="polite" className="tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next image"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-rule text-paper transition-colors hover:border-oxide hover:text-oxide"
            >
              <Arrow direction="next" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex min-h-11 items-center gap-1.5 border-b border-rule px-0.5 text-paper transition-colors hover:border-oxide hover:text-oxide"
            >
              Full screen
              <ExpandIcon />
            </button>
          </div>
        </div>

        <ul className="flex gap-2 border-t border-rule p-3 sm:p-5">
          {images.map((image, thumbIndex) => {
            const active = thumbIndex === index;

            return (
              <li key={image.src} className="flex-1">
                <button
                  type="button"
                  onClick={() => go(thumbIndex)}
                  onDoubleClick={() => setOpen(true)}
                  aria-label={`Show image ${thumbIndex + 1}: ${image.caption}`}
                  aria-current={active ? "true" : undefined}
                  className={`relative block aspect-[16/10] w-full border transition-opacity ${
                    active
                      ? "border-oxide opacity-100"
                      : "border-rule opacity-45 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 14vw, 24vw"
                    className="object-cover object-top"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {open ? (
        <ProjectLightbox
          images={images}
          index={index}
          title={title}
          code={code}
          onIndexChange={setIndex}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
