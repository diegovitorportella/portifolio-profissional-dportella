import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { SideNav } from "@/components/layout/SideNav";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative w-full pt-18 overflow-hidden">
      
      {/* Barra lateral de navegação (Visível apenas em telas grandes) */}
      <SideNav />

      <div className="container mx-auto px-6 max-w-295">
        
        <section id="sobre" className="py-24 md:py-32">
          <About />
        </section>

        <section id="resume" className="py-24 border-t border-zinc-200 dark:border-white/5">
          <Resume />
        </section>

        <section id="projetos" className="py-24 border-t border-zinc-200 dark:border-white/5">
          <Projects />
        </section>

        <section id="experiencias" className="py-24 border-t border-zinc-200 dark:border-white/5">
          <Experience />
        </section>

        <section id="contato" className="py-24 border-t border-zinc-200 dark:border-white/5">
          <Contact />
        </section>

      </div>

      <Footer />
    </main>
  );
}