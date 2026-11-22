"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function NavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);
    const hero = document.querySelector("#home");
    const targets = hero ? [hero, ...sections] : sections;

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        setActive(
          visible.target.id === "home" ? null : `#${visible.target.id}`,
        );
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.5] },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex items-center gap-5 sm:gap-8">
      {navItems.map((item) => {
        const current = active === item.href;

        return (
          <li
            key={item.href}
            className={item.compact ? "hidden sm:block" : ""}
          >
            <a
              href={item.href}
              aria-current={current ? "location" : undefined}
              className="group inline-flex min-h-11 items-center font-mono text-xs"
            >
              <span
                className={`border-b pb-1 transition-colors ${
                  current
                    ? "border-oxide text-paper"
                    : "border-transparent text-paper-dim group-hover:border-paper group-hover:text-paper"
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
