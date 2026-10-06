import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative w-full pt-18">
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

      <footer className="border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-[#08090a] py-8 mt-auto transition-colors duration-300">
        <div className="container mx-auto px-6 text-center md:flex md:items-center md:justify-between max-w-295">
          <p className="text-zinc-500 text-[12px]">Desenvolvido por <strong className="text-zinc-800 dark:text-[#b5bac5] font-medium">Diego Portella</strong> &copy; {new Date().getFullYear()}</p>
          <a href="#sobre" className="text-zinc-500 text-[12px] hover:text-blue-500 dark:hover:text-blue-400 transition-colors mt-4 md:mt-0 inline-block">Voltar ao topo &uarr;</a>
        </div>
      </footer>
    </main>
  );
}