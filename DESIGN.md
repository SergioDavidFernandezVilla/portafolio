---
name: Portafolio
description: Hoja de plotter oscura para un portafolio de desarrollo interactivo.
colors:
  ink: "#17130f"
  ink-soft: "#1f1914"
  ink-raised: "#27201a"
  paper: "#f2eadb"
  paper-dim: "#b8ad9c"
  oxide: "#d2603c"
  oxide-deep: "#a74628"
  rule: "#3a3129"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  none: "0px"
spacing:
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
components:
  button-primary:
    backgroundColor: "{colors.oxide}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.paper-dim}"
    typography: "{typography.label}"
    padding: "0px"
  nav-link-active:
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "0px"
  plate:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
---

# Design System: Portafolio

## Overview

**Creative North Star: "The Plotter Sheet"**

El portafolio se comporta como una hoja de trabajo de un plotter: una superficie de tinta cálida donde el trabajo se dibuja con líneas, coordenadas y anotaciones. La interfaz no imita una hoja de papel escaneada; usa su gramática —reglas finas, marcas de registro, códigos de figura y un único acento óxido— para organizar información real.

El resultado es oscuro pero no nocturno: el fondo es un marrón tinta, no negro puro; la tinta es un papel cálido, no blanco. La escena 3D del hero es la pieza trazada que abre la hoja; las placas de proyecto son dibujos técnicos propios, no capturas de pantalla decorativas. Todo lo demás se mantiene deliberadamente quieto para que el trabajo tenga el peso visual.

**Key Characteristics:**
- Superficie de tinta cálida con retícula de medición solo dentro de marcos de plotter.
- Un solo acento óxido; nunca compite con el papel.
- Bordes rectos y reglas de 1px; sin sombras ni radios.
- Tipografía de display con carácter, texto de trabajo Archivo y mono solo para códigos y medidas.
- Movimiento concentrado en el trazado 3D y en la apertura de fichas.

## Colors

Paleta de dos materiales: tinta cálida y papel, con un acento de óxido que actúa como tinta de corrección.

### Primary
- **Óxido de corrección** (#d2603c): acción primaria, enlaces activos, marcas de medición y el trazo que distingue una curva del resto. Se usa en superficies pequeñas; su rareza es lo que lo hace legible.
- **Óxido profundo** (#a74628): reservado para estados presionados o detalles que necesitan un paso menos de luz; no se usa como fondo de texto.

### Neutral
- **Tinta de taller** (#17130f): fondo global y color de texto sobre óxido.
- **Tinta suave** (#1f1914): fondo de las placas y de las superficies de figura.
- **Tinta elevada** (#27201a): reserva para superficies que necesiten separarse sin sombra.
- **Papel de plotter** (#f2eadb): texto principal, trazos de la escena y titulares.
- **Papel desgastado** (#b8ad9c): texto secundario, metadatos y anotaciones.
- **Regla de grafito** (#3a3129): bordes, separadores y retícula.

### Named Rules
**The One Accent Rule.** El óxido ocupa menos del 10% de cualquier viewport. Si aparece en dos acciones principales a la vez, una de las dos sobra.
**The Warm Ink Rule.** No se usa negro puro ni blanco puro. El fondo mínimo es #17130f y el texto máximo es #f2eadb.

## Typography

**Display Font:** Bricolage Grotesque (con system-ui, sans-serif)
**Body Font:** Archivo (con system-ui, sans-serif)
**Label/Mono Font:** Azeret Mono (con ui-monospace, monospace)

**Character:** Bricolage aporta una voz dibujada y ligeramente irregular para los nombres y titulares; Archivo mantiene la lectura sobria; Azeret Mono se reserva para códigos de figura, coordenadas y metadatos. La combinación se siente técnica sin convertirse en una terminal.

### Hierarchy
- **Display** (400, clamp(3.25rem, 9vw, 6rem), 0.84): nombre en el hero; máximo dos líneas.
- **Headline** (400, clamp(2.25rem, 5vw, 4rem), 0.95): títulos de sección; siempre con una regla superior.
- **Title** (400, clamp(2.25rem, 4vw, 3.4rem), 0.95): título de cada proyecto.
- **Body** (400, 1rem–1.125rem, 1.6): párrafos de lectura; medida de 46–65ch.
- **Label** (400, 0.75rem, 1.4): códigos, años, stacks, notas de figura y navegación.

### Named Rules
**The Annotation Rule.** El mono nunca sustituye al texto de lectura: solo aparece en códigos, medidas, años, stacks y etiquetas de figura.

## Layout

Contenedor máximo de 1440px con padding lateral de 20px en móvil y 32px desde 640px. Las secciones respiran con 64px arriba y abajo en móvil y 96px en escritorio. El hero usa una retícula de 12 columnas: 6 para el texto y 6 para el marco de la figura en escritorio; en móvil se apila y la figura aparece antes del final del primer viewport.

Los proyectos alternan una columna de texto de 5/12 con una placa de 7/12 y alternan el lado en cada fila. Las secciones se separan con reglas de 1px; no se usan tarjetas flotantes. La navegación es sticky, de 64px de alto, con fondo sólido y una regla inferior.

## Elevation & Depth

No hay sombras. La profundidad se construye con capas tonales (tinta suave sobre tinta), reglas de 1px, marcas de registro y la perspectiva real de la escena 3D. Una placa parece estar sobre la hoja porque tiene su propio marco y su propia retícula, no porque proyecte una sombra.

## Shapes

Todo es recto: radio 0. Los marcos de figura usan bordes de 1px y esquinas de registro de 14px dibujadas con CSS. La retícula de medición es de 40px y solo vive dentro de un marco de plotter. La marca de la firma es un círculo de calibración cruzado por un trazo óxido.

## Components

### Buttons
- **Shape:** rectangular, sin radio (0px).
- **Primary:** fondo óxido, texto tinta, padding 12px 20px, altura mínima 48px. Etiqueta en mono de 12px.
- **Hover / Focus:** el fondo pasa a papel; el foco usa un contorno óxido de 2px con 4px de separación.
- **Secondary:** enlace de texto con borde inferior de 1px; sin relleno.

### Cards / Containers
- **Corner Style:** recto (0px).
- **Background:** tinta suave al 30% para placas y figuras.
- **Shadow Strategy:** ninguna; ver Elevation & Depth.
- **Border:** 1px grafito.
- **Internal Padding:** 12px en móvil, 20px desde 640px.

### Navigation
- **Style:** sticky, fondo tinta, regla inferior de 1px.
- **Typography:** mono de 12px, papel desgastado.
- **States:** el enlace activo cambia a papel con borde inferior óxido; hover subraya en papel.
- **Mobile:** se oculta “Sobre mí” para mantener tres destinos legibles; el contacto sigue disponible en la sección.

### Project Plate (signature component)
Una placa SVG 720×520 dibujada a mano con retícula, marcas de registro, coordenadas y un dibujo distinto por proyecto (contornos, olas, arcos o red). El acento óxido se revela al hover o al foco. La placa nunca es una imagen genérica: es el material del proyecto.

### Ficha (signature component)
El botón “Leer ficha” abre un panel dentro de la misma fila con reto y enfoque. Usa `aria-expanded` y `aria-controls`, anima altura y opacidad en 400ms y respeta `prefers-reduced-motion` sin eliminar la información.

## Do's and Don'ts

### Do:
- **Do** mantener el óxido por debajo del 10% del viewport.
- **Do** usar reglas de 1px y marcos rectos para agrupar.
- **Do** etiquetar cada figura con su código (`FIG. P-01 / ATLAS`) y su medio.
- **Do** usar el mono solo para anotaciones y medidas.
- **Do** dejar que la escena 3D sea decorativa y accesible: el contenido nunca depende de ella.

### Don't:
- **Don't** usar glows, gradientes de texto o halos de color.
- **Don't** introducir radios, sombras difusas o tarjetas anidadas.
- **Don't** poner una etiqueta pequeña encima de un titular de sección.
- **Don't** usar una retícula de fondo fuera de un marco de medición.
- **Don't** llenar el espacio con una cuadrícula de tarjetas iguales; los proyectos se leen como filas, no como catálogo de productos.
