"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => setStatus("idle"), 2400);
  }

  return (
    <div className="mt-5 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-11 items-center border border-rule px-4 py-2 font-mono text-xs text-paper transition-colors hover:border-oxide hover:text-oxide"
      >
        Copy email
      </button>
      <p aria-live="polite" className="font-mono text-xs text-paper-dim">
        {status === "copied"
          ? "Email copied to the clipboard."
          : status === "error"
            ? "Couldn't copy. Use the email link above."
            : ""}
      </p>
    </div>
  );
}
