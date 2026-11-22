import type { Metadata } from "next";
import {
  Archivo,
  Azeret_Mono,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const sans = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const mono = Azeret_Mono({
  variable: "--font-azeret",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "Sergio David Fernandez Villa · Backend, RAG and real-time graphics";
const description =
  "Portfolio of Sergio David Fernandez Villa: Go and PostgreSQL backends, RAG retrieval pipelines, and WebGL/GLSL graphics with Next.js and three.js.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Portfolio",
  authors: [{ name: "Sergio David Fernandez Villa" }],
  keywords: [
    "backend developer",
    "Go",
    "PostgreSQL",
    "RAG",
    "FastAPI",
    "WebGL",
    "GLSL",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
    siteName: "Sergio David Fernandez Villa",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-svh flex-col bg-ink text-paper">
        <a
          href="#content"
          className="sr-only fixed top-4 left-4 z-[70] inline-flex min-h-11 items-center bg-oxide px-4 py-2 font-mono text-xs text-ink focus:not-sr-only"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
