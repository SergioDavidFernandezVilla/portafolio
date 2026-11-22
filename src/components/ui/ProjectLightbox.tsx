"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { ProjectImage } from "@/lib/data";

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d={direction === "prev" ? "M7.5 2.5 4 6l3.5 3.5" : "M4.5 2.5 8 6l-3.5 3.5"}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
      <path
        d="M2.5 2.5l7 7M9.5 2.5l-7 7"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ProjectLightbox({
  images,
  index,
  title,
  code,
  onIndexChange,
  onClose,
}: {
  images: ProjectImage[];
  index: number;
  title: string;
  code?: string;
  onIndexChange: (next: number) => void;
  onClose: () => void;
}) {
  const total = images.length;
  const current = images[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const opener = useRef<Element | null>(null);

  const go = useCallback(
    (target: number) => {
      onIndexChange(((target % total) + total) % total);
    },
    [onIndexChange, total],
  );

  useEffect(() => {
    opener.current = document.activeElement;
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;

      if (opener.current instanceof HTMLElement) {
        opener.current.focus();
      }
    };
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(index - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(index + 1);
      }

      if (event.key === "Tab") {
        const dialog = dialogRef.current;

        if (!dialog) {
          return;
        }

        const focusable = dialog.querySelectorAll<HTMLElement>(
          "button, [href], [tabindex]:not([tabindex='-1'])",
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) {
          return;
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, onClose]);

  if (typeof document === "undefined" || !current) {
    return null;
  }

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title}, image ${index + 1} of ${total}`}
      className="fixed inset-0 z-[80] flex flex-col bg-ink"
    >
      <div className="flex items-center justify-between gap-4 border-b border-rule px-4 py-3 sm:px-6">
        <p className="truncate font-mono text-xs text-paper-dim">
          {code ? `FIG. ${code} / ` : null}
          {title.toUpperCase()}
        </p>

        <div className="flex items-center gap-3">
          <span aria-live="polite" className="font-mono text-xs tabular-nums text-paper">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close full screen"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-rule text-paper transition-colors hover:border-oxide hover:text-oxide"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="relative flex-1 bg-ink-soft/30">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous image"
          className="absolute inset-y-0 left-0 flex w-12 items-center justify-center border-r border-rule/60 bg-ink/40 text-paper transition-colors hover:bg-ink/80 hover:text-oxide sm:w-16"
        >
          <Arrow direction="prev" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next image"
          className="absolute inset-y-0 right-0 flex w-12 items-center justify-center border-l border-rule/60 bg-ink/40 text-paper transition-colors hover:bg-ink/80 hover:text-oxide sm:w-16"
        >
          <Arrow direction="next" />
        </button>
      </div>

      <div className="flex flex-col gap-2 border-t border-rule px-4 py-3 font-mono text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="text-pretty">{current.caption}</span>
        <span className="hidden sm:block">← → to move · Esc to close</span>
      </div>
    </div>,
    document.body,
  );
}
