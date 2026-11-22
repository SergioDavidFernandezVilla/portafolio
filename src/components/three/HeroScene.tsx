"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PAPER = "#f2eadb";
const OXIDE = "#d2603c";

type CurveKind = "flat" | "tilt" | "eight" | "accent";

function buildCurve(kind: CurveKind, phase: number, count = 360) {
  const points: THREE.Vector3[] = [];

  for (let index = 0; index < count; index += 1) {
    const t = (index / (count - 1)) * Math.PI * 2;
    let x = 0;
    let y = 0;
    let z = 0;

    if (kind === "flat") {
      x = 2.05 * Math.cos(t);
      y = 0.84 * Math.sin(t);
      z = 0.2 * Math.sin(2 * t + phase);
    } else if (kind === "tilt") {
      x = 1.5 * Math.cos(t + phase * 0.12);
      y = 0.56 * Math.sin(t);
      z = 1.32 * Math.sin(t);
    } else if (kind === "eight") {
      x = 1.52 * Math.sin(t);
      y = 0.92 * Math.sin(2 * t);
      z = 0.42 * Math.cos(t);
    } else {
      x = 2.22 * Math.cos(t);
      y = 0.98 * Math.sin(t);
      z = 0.62 * Math.sin(t);
    }

    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
}

function PlotCurve({
  kind,
  phase,
  accent,
  reduced,
  drawSpeed,
  delay,
}: {
  kind: CurveKind;
  phase: number;
  accent: boolean;
  reduced: boolean;
  drawSpeed: number;
  delay: number;
}) {
  const elapsed = useRef(0);

  const geometry = useMemo(() => {
    const next = new THREE.BufferGeometry().setFromPoints(
      buildCurve(kind, phase),
    );
    next.setDrawRange(0, 0);
    return next;
  }, [kind, phase]);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: accent ? OXIDE : PAPER,
        transparent: true,
        opacity: accent ? 0.95 : 0.45,
      }),
    [accent],
  );

  const line = useMemo(() => {
    const next = new THREE.Line(geometry, material);
    next.frustumCulled = false;
    return next;
  }, [geometry, material]);

  useFrame((_, delta) => {
    const total = geometry.getAttribute("position").count;
    const current = geometry.drawRange.count;

    if (reduced) {
      if (current !== total) {
        geometry.setDrawRange(0, total);
      }
      return;
    }

    elapsed.current += delta;

    if (elapsed.current < delay) {
      return;
    }

    if (current >= total) {
      return;
    }

    geometry.setDrawRange(0, Math.min(total, current + delta * drawSpeed));
  });

  return <primitive object={line} />;
}

function CalibrationAxes() {
  const geometry = useMemo(() => {
    const positions: number[] = [];
    const add = (
      x1: number,
      y1: number,
      z1: number,
      x2: number,
      y2: number,
      z2: number,
    ) => positions.push(x1, y1, z1, x2, y2, z2);

    add(-2.55, 0, 0, 2.55, 0, 0);
    add(0, -1.72, 0, 0, 1.72, 0);
    add(0, 0, -1.55, 0, 0, 1.55);

    for (let x = -2.4; x <= 2.4; x += 0.3) {
      add(x, -0.045, 0, x, 0.045, 0);
    }

    for (let y = -1.6; y <= 1.6; y += 0.2) {
      add(-0.045, y, 0, 0.045, y, 0);
    }

    return new THREE.BufferGeometry().setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3),
    );
  }, []);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: PAPER,
        transparent: true,
        opacity: 0.14,
      }),
    [],
  );

  const lines = useMemo(
    () => new THREE.LineSegments(geometry, material),
    [geometry, material],
  );

  return <primitive object={lines} />;
}

function CalibrationMarks() {
  const marks = useMemo(() => {
    const positions: number[] = [];
    const count = 26;

    for (let index = 0; index < count; index += 1) {
      const angle = index * 2.399963;
      const radius = 2.25 + (index % 4) * 0.14;
      positions.push(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.66,
        Math.sin(angle * 1.7) * 0.52,
      );
    }

    return new Float32Array(positions);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[marks, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={PAPER}
        size={0.026}
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

function Plot({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const curves = useMemo(
    () => [
      {
        kind: "flat" as CurveKind,
        phase: 0,
        accent: false,
        drawSpeed: 640,
        delay: 0,
      },
      {
        kind: "tilt" as CurveKind,
        phase: 0.6,
        accent: false,
        drawSpeed: 780,
        delay: 0.12,
      },
      {
        kind: "eight" as CurveKind,
        phase: 1.4,
        accent: false,
        drawSpeed: 920,
        delay: 0.24,
      },
      {
        kind: "accent" as CurveKind,
        phase: 2.1,
        accent: true,
        drawSpeed: 1080,
        delay: 0.4,
      },
    ],
    [],
  );

  useFrame((_, delta) => {
    if (!group.current || reduced) {
      return;
    }

    group.current.rotation.y += delta * 0.1;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      0.16 + pointer.y * 0.12,
      2.4,
      delta,
    );
    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      -0.08 + pointer.x * 0.05,
      2.4,
      delta,
    );
  });

  return (
    <group ref={group} rotation={[0.16, 0.36, -0.08]}>
      <CalibrationAxes />
      {curves.map((curve) => (
        <PlotCurve
          key={curve.kind}
          kind={curve.kind}
          phase={curve.phase}
          accent={curve.accent}
          reduced={reduced}
          drawSpeed={curve.drawSpeed}
          delay={curve.delay}
        />
      ))}
      <CalibrationMarks />
    </group>
  );
}

export default function HeroScene({ active = true }: { active?: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const reduced = prefersReducedMotion ?? false;

  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6.1], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={active ? "always" : "never"}
    >
      <Plot reduced={reduced} />
    </Canvas>
  );
}
