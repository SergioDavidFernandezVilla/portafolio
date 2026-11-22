"use client";

import dynamic from "next/dynamic";
import {
  Component,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <FallbackPlot />,
});

function FallbackPlot() {
  return (
    <svg
      viewBox="0 0 640 520"
      className="absolute inset-0 h-full w-full text-paper"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeOpacity="0.3">
        <ellipse cx="320" cy="260" rx="230" ry="98" />
        <ellipse
          cx="320"
          cy="260"
          rx="170"
          ry="118"
          transform="rotate(58 320 260)"
        />
        <path d="M160 290c48-92 112-118 182-70s118 38 150-14" />
      </g>
      <path
        d="M92 290c38-96 96-128 166-104 72 24 106 96 176 74 44-14 72-52 104-92"
        stroke="var(--color-oxide)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

class SceneBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function HeroVisual() {
  const host = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const element = host.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={host} className="relative h-full w-full">
      <div className="sheet-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <SceneBoundary fallback={<FallbackPlot />}>
          <HeroScene active={active} />
        </SceneBoundary>
      </div>
    </div>
  );
}
