import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-6">
        
        <section id="sobre" className="min-h-[calc(100vh-4rem)] flex items-center py-20">
          <About />
        </section>

        <section id="resume" className="py-24 border-t border-zinc-800/50">
          <Resume />
        </section>

        <section id="projetos" className="py-24 border-t border-zinc-800/50">
          <Projects />
        </section>

        <section id="experiencias" className="py-24 border-t border-zinc-800/50">
          <Experience />
        </section>

        <section id="contato" className="py-24 border-t border-zinc-800/50">
          <Contact />
        </section>

      </div>

      {/* Footer Minimalista */}
      <footer className="border-t border-zinc-800/50 bg-black py-8 mt-12">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm font-medium">
          <p>Desenvolvido por Diego Portella &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}