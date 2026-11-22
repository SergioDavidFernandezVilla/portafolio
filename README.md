# Portafolio

Portafolio personal de una página construido con Next.js 16 (App Router), TypeScript, Tailwind CSS v4, three.js (React Three Fiber) y Framer Motion.

## Stack

- **Next.js 16** con App Router, Turbopack y Cache Components.
- **TypeScript** estricto.
- **Tailwind CSS v4** con tokens en `src/app/globals.css`.
- **three.js / React Three Fiber** para la escena del hero.
- **Framer Motion** para la entrada del hero y el despliegue de fichas.
- **next/font** con Bricolage Grotesque (display), Archivo (texto) y Azeret Mono (anotaciones).

## Empezar

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint     # ESLint
pnpm build    # build de producción
pnpm start    # servidor de producción
```

## Contenido

Todo el texto editable está en `src/lib/data.ts`:

- `profile`: nombre, rol, ciudad, email, bio y disponibilidad.
- `projects`: proyectos de muestra, con rol, stack, resumen y ficha.
- `skillGroups`: grupos de herramientas.
- `navItems`: enlaces de navegación.

Los proyectos actuales son **contenido de muestra**. Reemplázalos por casos reales antes de publicar. El email es `hola@tudominio.com`; cámbialo en `profile.email`.

## Diseño

El sistema visual está documentado en `DESIGN.md` y el contexto de producto en `PRODUCT.md`. Los tokens viven en `src/app/globals.css`:

- `--color-ink`, `--color-paper`, `--color-oxide`, `--color-rule`.
- `--font-display`, `--font-sans`, `--font-mono`.

La escena 3D está en `src/components/three/HeroScene.tsx` y se pausa cuando sale del viewport. Respeta `prefers-reduced-motion`.

## Impeccable

El proyecto tiene instalado [Impeccable](https://impeccable.style) en `.opencode/`. Para revisar el código:

```bash
npx impeccable detect src/
npx impeccable detect http://localhost:3000 --viewport 390x844
npx impeccable update
```

Las excepciones intencionales del detector viven en `.impeccable/config.json`.

## Estructura

```
src/
├── app/                 # layout, página y estilos globales
├── components/
│   ├── layout/          # header, navegación y footer
│   ├── sections/        # hero, proyectos, sobre mí, skills, contacto
│   ├── three/           # escena del hero
│   └── ui/              # placas, títulos y marca
└── lib/data.ts          # contenido editable
```

## Deploy

Despliega en Vercel o en cualquier host que ejecute Next.js. Antes de publicar: reemplaza el contenido de muestra, define el dominio real y actualiza la metadata en `src/app/layout.tsx`.
