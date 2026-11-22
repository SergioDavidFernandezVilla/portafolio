export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  /** width / height of the asset, so tall diagrams get a tall frame. */
  ratio?: number;
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  year: string;
  role: string;
  medium: string;
  stack: string[];
  summary: string;
  challenge: string;
  approach: string;
  state: string;
  plate: "atlas" | "marea" | "umbral" | "norte";
  images?: ProjectImage[];
};

export const profile = {
  name: "Sergio David Fernandez Villa",
  role: "Systems engineer — backend, RAG pipelines and real-time graphics",
  location: "Culiacán, Sinaloa, Mexico",
  email: "sergiodavidfernandezdev@gmail.com",
  intro:
    "I build backends in Go and PostgreSQL — job queues, retrieval pipelines, authentication — and real-time graphics in WebGL and GLSL, with the emphasis on clarity, operability and delivery you can verify.",
  availability: "Available for contracts and technical projects",
  about: [
    "I work across concurrent backends, retrieval systems and real-time graphics. I care about how a service behaves under real load, how it talks to the GPU, and how little it needs to stay simple in production.",
    "I start by isolating the technical bottleneck and the product goal before writing code. Then I ship systems that are tested, readable, and easy to operate without extra pieces.",
  ],
  process: [
    {
      title: "Diagnose",
      description:
        "Pin down requirements, target performance, technical risk and scope before implementing.",
    },
    {
      title: "Build",
      description:
        "Build vertically with strict types, real queries or real shaders, and continuous validation.",
    },
    {
      title: "Verify",
      description:
        "Check compilation, edge cases, frame stability and response times before handing over.",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "loveshaders",
    code: "P-01",
    title: "LoveShaders",
    year: "2026",
    role: "Full-stack architecture, Go/Postgres backend, WebGL2 renderer",
    medium: "SaaS platform / shader editor",
    stack: [
      "Go",
      "chi/v5",
      "pgx/v5",
      "PostgreSQL 16",
      "River",
      "Cloudflare R2",
      "React 19",
      "TypeScript",
      "Monaco Editor",
      "WebGL2",
    ],
    summary:
      "Browser hub for graphics programmers: a GLSL editor with live rendering, accounts and a community feed — no install, no local toolchain.",
    challenge:
      "Keep shader editing and preview responsive while image and video uploads and background jobs are in flight, without blocking the interface or saturating the API.",
    approach:
      "Split the Monaco editor and the WebGL2 preview in the client behind a renderer port (a WebGPU implementation is in progress), moved media processing to River jobs on Postgres with presigned uploads to Cloudflare R2, and modelled users, roles, posts and attachments in PostgreSQL 16 behind a Go API with role-scoped permissions.",
    state: "Active development — auth, editor, uploads and social feed shipped",
    plate: "atlas",
    images: [
      {
        src: "/images/projects/loveshaders/landing.png",
        alt: "loveshaders landing page with a live shader rendering as the background",
        caption: "Landing — live shader as the page background",
      },
      {
        src: "/images/projects/loveshaders/editor.png",
        alt: "GLSL editor with the code panel next to a live rendered preview",
        caption: "Editor — GLSL source next to the live preview",
      },
      {
        src: "/images/projects/loveshaders/player.png",
        alt: "Full-screen shader player with playback controls and an FPS counter",
        caption: "Player — frame controls, FPS counter, full-screen render",
      },
      {
        src: "/images/projects/loveshaders/social-feed.png",
        alt: "Community feed with shader posts and reactions",
        caption: "Feed — shader posts, attachments and reactions",
      },
      {
        src: "/images/projects/loveshaders/architecture.png",
        alt: "Architecture diagram: React frontend, Caddy edge, Go API with chi, bounded contexts and the data layer",
        caption: "Architecture — frontend, Go API, bounded contexts, data",
        ratio: 1.84,
      },
      {
        src: "/images/projects/loveshaders/uploads-queue.png",
        alt: "Sequence diagram of a presigned upload to R2 followed by a River job that validates and registers the file",
        caption: "Upload path — presigned R2 PUT, River job, worker validation",
        ratio: 0.43,
      },
    ],
  },
  {
    slug: "pixassis-rag-api",
    code: "P-02",
    title: "PixAssis — RAG API",
    year: "2026",
    role: "Retrieval pipeline architecture and FastAPI backend",
    medium: "Retrieval API / document Q&A",
    stack: [
      "Python",
      "FastAPI",
      "Pydantic",
      "FAISS",
      "CrossEncoder",
      "MongoDB",
      "Motor",
      "Groq",
      "Next.js",
    ],
    summary:
      "Document question-answering service: hybrid retrieval, re-ranking and streamed answers, with an admin CLI and a metrics panel.",
    challenge:
      "Answer over a document corpus without returning plausible-but-wrong passages — retrieval, ranking and generation had to stay separable and observable.",
    approach:
      "Ingested web pages and PDFs, embedded the chunks, pulled candidates from FAISS (IndexFlatL2), re-ranked them with a CrossEncoder before generation through Groq, and kept persistence in MongoDB via Motor so the request path stays async end to end.",
    state:
      "Working prototype — ingestion, retrieval, streaming and metrics in place",
    plate: "umbral",
    images: [
      {
        src: "/images/projects/pixassis-rag-api/chat.png",
        alt: "PixAssis chat client with a conversation history sidebar and an answer in the thread",
        caption: "Chat client — conversation history and streamed answers",
        ratio: 2,
      },
      {
        src: "/images/projects/pixassis-rag-api/architecture.png",
        alt: "Architecture diagram: Next.js client, FastAPI RAG service, FAISS index, CrossEncoder and Groq",
        caption: "Architecture — client, FastAPI RAG core, FAISS, Groq",
        ratio: 1.52,
      },
      {
        src: "/images/projects/pixassis-rag-api/pipeline.png",
        alt: "Two-column diagram of the ingestion pipeline and the real-time retrieval path with FAISS and CrossEncoder re-ranking",
        caption: "Pipeline — offline ingestion, then two-stage retrieval",
        ratio: 0.47,
      },
    ],
  },
  {
    slug: "raymarching-sdf-shaders",
    code: "P-03",
    title: "Distance Fields and Raymarching",
    year: "2026",
    role: "Real-time graphics, GLSL and HLSL",
    medium: "Procedural rendering / shaders",
    stack: ["GLSL", "HLSL", "WebGL2", "SDF", "Raymarching"],
    summary:
      "Scenes and experiments with sphere tracing over signed distance functions, soft shadows and ambient occlusion in real time.",
    challenge:
      "Evaluate procedural geometry, lighting and effects inside a fragment shader while holding frame stability and keeping edges and normals accurate.",
    approach:
      "Combined SDF primitives and operations with normal estimation, soft shadows and ambient occlusion, tuning the step count to keep the render rate steady.",
    state: "Ongoing procedural shader lab",
    plate: "marea",
  },
  {
    slug: "pipeline-nativo-opengl",
    code: "P-04",
    title: "Native OpenGL Pipeline (C and Rust)",
    year: "2026",
    role: "Systems programming and native graphics",
    medium: "Base renderer / GPU communication",
    stack: ["C", "GLFW", "GLAD", "Rust", "glium", "winit", "OpenGL"],
    summary:
      "Native implementations of windowing, OpenGL function loading and triangle and shader rendering in C and Rust.",
    challenge:
      "Take direct control of context creation, pointer loading and sending buffers and shaders to the GPU without leaning on a heavy engine.",
    approach:
      "Built a window and OpenGL context in C with GLFW and GLAD, and a triangle and shader renderer in Rust with winit and glium, checking compilation and linking explicitly.",
    state: "Complete — native base in C and Rust",
    plate: "norte",
  },
  {
    slug: "cli-procesamiento-multimedia-rust",
    code: "P-05",
    title: "Batch Media CLI in Rust",
    year: "2026",
    role: "CLI tooling and automation",
    medium: "Command line / batch processing",
    stack: ["Rust", "yt-dlp", "ffmpeg", "CLI"],
    summary:
      "Command-line utility in Rust that automates batch audio and video download and conversion on top of yt-dlp and ffmpeg.",
    challenge:
      "Run dozens or hundreds of downloads and conversions repeatably, without invoking commands one by one and without losing track of what finished.",
    approach:
      "Wrote a Rust CLI that orchestrates yt-dlp and ffmpeg with consistent parameters, validated on batches of more than 300 MP3 files.",
    state: "Complete — tested on batches of 300+ MP3 files",
    plate: "norte",
  },
];

export const skillGroups = [
  {
    label: "Backend and data",
    items: [
      "Go",
      "chi/v5",
      "pgx/v5",
      "PostgreSQL 16",
      "River",
      "Cloudflare R2",
      "Python",
      "FastAPI",
    ],
  },
  {
    label: "Retrieval and AI",
    items: [
      "RAG pipelines",
      "FAISS",
      "CrossEncoder re-ranking",
      "Embeddings",
      "Streamed generation",
      "MongoDB / Motor",
    ],
  },
  {
    label: "Frontend and 3D",
    items: [
      "TypeScript",
      "React 19",
      "Next.js",
      "Tailwind CSS v4",
      "three.js",
      "React Three Fiber",
      "GLSL / WebGL2",
    ],
  },
  {
    label: "Systems and tooling",
    items: ["Rust", "C", "OpenGL", "HLSL", "Docker", "Linux / Debian 12"],
  },
];

export const navItems: { href: string; label: string; compact?: boolean }[] = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About", compact: true },
  { href: "#contact", label: "Contact" },
];
