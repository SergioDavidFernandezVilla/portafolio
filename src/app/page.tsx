import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="content" className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
