import type { Project } from "@/lib/data";

type PlateVariant = Project["plate"];

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function Frame() {
  return (
    <>
      <rect
        x="0.5"
        y="0.5"
        width="719"
        height="519"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.16"
      />
      <path
        d="M0 40h18M40 0v18M720 480h-18M680 520v-18"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <path
        d="M40 40h640M40 480h640"
        stroke="currentColor"
        strokeOpacity="0.08"
        strokeDasharray="2 6"
      />
      <text
        x="40"
        y="30"
        fill="currentColor"
        fillOpacity="0.45"
        fontFamily="var(--font-azeret)"
        fontSize="10"
        letterSpacing="1.6"
      >
        X / 0–720
      </text>
      <text
        x="680"
        y="30"
        fill="currentColor"
        fillOpacity="0.45"
        fontFamily="var(--font-azeret)"
        fontSize="10"
        letterSpacing="1.6"
        textAnchor="end"
      >
        Y / 0–520
      </text>
    </>
  );
}

function Atlas() {
  const contours = [70, 96, 124, 154, 186, 220, 256];

  return (
    <>
      <g stroke="currentColor" strokeOpacity="0.42" fill="none">
        {contours.map((rx, index) => (
          <ellipse
            key={rx}
            cx={360 + index * 4}
            cy={250 - index * 3}
            rx={rx * 2.35}
            ry={rx * 1.25}
            transform={`rotate(${-16 + index * 2} 360 250)`}
          />
        ))}
      </g>

      <g stroke="currentColor" strokeOpacity="0.18">
        <path d="M80 250h560M360 70v360" strokeDasharray="3 7" />
        <path d="M120 120h480M120 380h480" strokeDasharray="1 9" />
      </g>

      <path
        className="plate-accent"
        d="M156 342c58-8 80-78 142-92 62-14 86 46 138 38 52-8 62-92 126-118"
        stroke="var(--color-oxide)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      <g fill="var(--color-oxide)">
        <circle cx="156" cy="342" r="3" />
        <circle cx="436" cy="288" r="3" />
        <circle cx="562" cy="170" r="3" />
      </g>

      <g
        fill="currentColor"
        fillOpacity="0.55"
        fontFamily="var(--font-azeret)"
        fontSize="10"
        letterSpacing="1.2"
      >
        <text x="166" y="360">A / 04.21</text>
        <text x="446" y="306">B / 07.08</text>
        <text x="572" y="188">C / 11.02</text>
      </g>

      <g stroke="currentColor" strokeOpacity="0.3">
        <path d="M360 220v60M330 250h60" />
      </g>
      <circle cx="360" cy="250" r="12" fill="none" stroke="var(--color-oxide)" />
    </>
  );
}

function Marea() {
  const lines = Array.from({ length: 12 }, (_, index) => {
    const y = 118 + index * 24;
    const amplitude = round(18 + Math.sin(index * 1.4) * 16);

    return (
      <path
        key={index}
        d={`M48 ${y} C 156 ${y - amplitude}, 240 ${y + amplitude}, 360 ${y} S 564 ${y - amplitude * 1.35}, 672 ${y + amplitude * 0.45}`}
        stroke="currentColor"
        strokeOpacity={index % 4 === 0 ? 0.55 : 0.26}
      />
    );
  });

  return (
    <>
      <g fill="none" strokeWidth="1">
        {lines}
        <path
          className="plate-accent"
          d="M48 262 C 156 218, 240 322, 360 262 S 564 206, 672 280"
          stroke="var(--color-oxide)"
          strokeWidth="1.8"
        />
      </g>

      <g stroke="currentColor" strokeOpacity="0.3">
        <path d="M96 96v328M168 96v328M240 96v328M312 96v328M384 96v328M456 96v328M528 96v328M600 96v328" />
      </g>

      <g
        fill="currentColor"
        fillOpacity="0.55"
        fontFamily="var(--font-azeret)"
        fontSize="10"
        letterSpacing="1.4"
      >
        <text x="48" y="88">        SERIES / TIDES 01–12</text>
        <text x="672" y="448" textAnchor="end">
          LEVEL / 2.4
        </text>
      </g>

      <path
        d="M620 110v290M612 392h16"
        stroke="currentColor"
        strokeOpacity="0.45"
      />
      <path d="M616 392h8" stroke="var(--color-oxide)" strokeWidth="2" />
    </>
  );
}

function Umbral() {
  return (
    <>
      <g fill="none" stroke="currentColor" strokeOpacity="0.32">
        {Array.from({ length: 9 }, (_, index) => (
          <circle
            key={index}
            cx="360"
            cy="300"
            r={44 + index * 26}
            strokeDasharray={`${2 + index * 2} ${10 + index * 3}`}
            strokeDashoffset={index * 7}
          />
        ))}
      </g>

      <g stroke="currentColor" strokeOpacity="0.18">
        {Array.from({ length: 12 }, (_, index) => {
          const angle = (index / 12) * Math.PI * 2;
          const x = round(360 + Math.cos(angle) * 244);
          const y = round(300 + Math.sin(angle) * 244);

          return <path key={index} d={`M360 300L${x} ${y}`} />;
        })}
      </g>

      <path
        d="M300 440V278a60 60 0 0 1 120 0v162"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.65"
        strokeWidth="1.4"
      />
      <path
        className="plate-accent"
        d="M312 440V282a48 48 0 0 1 96 0v158"
        fill="none"
        stroke="var(--color-oxide)"
        strokeWidth="1.4"
      />
      <path
        d="M336 440V300a24 24 0 0 1 48 0v140"
        fill="var(--color-ink-soft)"
        fillOpacity="0.8"
        stroke="currentColor"
        strokeOpacity="0.3"
      />

      <g
        fill="currentColor"
        fillOpacity="0.55"
        fontFamily="var(--font-azeret)"
        fontSize="10"
        letterSpacing="1.4"
      >
        <text x="48" y="88">PLAN / ACCESS</text>
        <text x="672" y="448" textAnchor="end">
          THRESHOLD / 01
        </text>
      </g>
    </>
  );
}

function Norte() {
  const nodes = [
    { x: 150, y: 196, r: 4 },
    { x: 280, y: 142, r: 3 },
    { x: 360, y: 252, r: 7 },
    { x: 486, y: 170, r: 3 },
    { x: 570, y: 292, r: 4 },
    { x: 236, y: 350, r: 3 },
    { x: 424, y: 376, r: 3 },
    { x: 618, y: 386, r: 2 },
  ];

  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 5],
    [2, 6],
    [3, 4],
    [4, 7],
    [5, 6],
    [6, 4],
  ];

  return (
    <>
      <g stroke="currentColor" strokeOpacity="0.22">
        {links.map(([from, to]) => {
          const a = nodes[from];
          const b = nodes[to];

          return <path key={`${from}-${to}`} d={`M${a.x} ${a.y}L${b.x} ${b.y}`} />;
        })}
      </g>

      <g fill="var(--color-ink-soft)" stroke="currentColor" strokeOpacity="0.6">
        {nodes.map((node, index) => (
          <circle key={index} cx={node.x} cy={node.y} r={node.r} />
        ))}
      </g>

      <circle
        className="plate-accent"
        cx="360"
        cy="252"
        r="24"
        fill="none"
        stroke="var(--color-oxide)"
      />
      <path
        d="M360 228v48M336 252h48"
        stroke="var(--color-oxide)"
        strokeOpacity="0.9"
      />

      <g stroke="currentColor" strokeOpacity="0.3">
        <path d="M72 100h576M72 420h576" />
        <path d="M72 100v20M648 100v20M72 400v20M648 400v20" />
      </g>

      <g
        fill="currentColor"
        fillOpacity="0.55"
        fontFamily="var(--font-azeret)"
        fontSize="10"
        letterSpacing="1.4"
      >
        <text x="72" y="86">NETWORK / 08 NODES</text>
        <text x="648" y="444" textAnchor="end">
          STATE / ACTIVE
        </text>
      </g>

      <g fill="currentColor" fillOpacity="0.7">
        <rect x="72" y="432" width="28" height="3" />
        <rect x="108" y="432" width="10" height="3" fill="var(--color-oxide)" />
      </g>
    </>
  );
}

const plates: Record<PlateVariant, () => React.JSX.Element> = {
  atlas: Atlas,
  marea: Marea,
  umbral: Umbral,
  norte: Norte,
};

export function ProjectPlate({ variant }: { variant: PlateVariant }) {
  const Plate = plates[variant];

  return (
    <svg
      viewBox="0 0 720 520"
      className="h-auto w-full text-paper"
      aria-hidden="true"
      focusable="false"
    >
      <Frame />
      <Plate />
    </svg>
  );
}
