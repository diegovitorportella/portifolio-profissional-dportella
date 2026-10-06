import { ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    index: "01",
    title: "Plataforma bolsU",
    description: "Projeto de Desenvolvimento Centrado no Usuário, focado em usabilidade, personas e wireframes para uma plataforma acadêmica.",
    techs: ["Figma", "UI/UX", "Next.js", "Tailwind"],
    github: "https://github.com/diegovitorportella",
    accent: "blue",
    hasImage: false,
  },
  {
    index: "02",
    title: "Estudos Vestibular",
    description: "Plataforma de acompanhamento e planejamento de estudos para vestibulandos, com dashboard de métricas.",
    techs: ["TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/diegovitorportella",
    accent: "violet",
    hasImage: false,
  },
  {
    index: "03",
    title: "Prog. Modular - Lista 00",
    description: "Resolução de algoritmos e estrutura de testes aplicando conceitos avançados de modularização.",
    techs: ["Java", "Maven", "JUnit"],
    github: "https://github.com/diegovitorportella/programacao-modular-lista00",
    accent: "cyan",
    hasImage: false,
  },
  {
    index: "04",
    title: "Portfólio Profissional",
    description: "Meu portfólio pessoal e profissional, desenvolvido com foco em performance e animações.",
    techs: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/diegovitorportella/portfolio-profissional-diaw",
    accent: "green",
    hasImage: false,
  }
];

export function Projects() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center md:text-left space-y-4 mb-12">
        <span className="text-blue-600 dark:text-blue-500 text-[11px] font-bold tracking-[0.14em] uppercase">Projetos selecionados</span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-zinc-900 dark:text-white tracking-tight leading-[1.08]">
          Soluções que saíram do papel.
        </h2>
        <p className="text-zinc-600 dark:text-[#8c929f] text-base leading-[1.7] max-w-2xl">
          Uma seleção de trabalhos que combinam engenharia de software, foco em arquitetura e atenção aos detalhes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article 
            key={project.index} 
            className="flex flex-col bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-[#20242c] rounded-[14px] overflow-hidden hover:border-blue-500/30 dark:hover:border-[#343b48] hover:-translate-y-1 transition-all duration-200 shadow-sm"
          >
            <div className={`relative h-65 border-b border-zinc-200 dark:border-[#20242c] bg-zinc-50 dark:bg-[#10141b] overflow-hidden transition-colors`}>
              <div className="absolute inset-0 opacity-20 bg-linear-to-br from-blue-500/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-6 right-[10%] left-[10%] h-7 bg-white/80 dark:bg-[#0b0d11]/80 border border-zinc-200 dark:border-white/10 rounded-t-lg flex items-center px-3 gap-1.5 backdrop-blur transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-[#414752]" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-[#414752]" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-[#414752]" />
              </div>
              
              <div className="absolute top-14 right-[10%] -bottom-7.5 left-[10%] bg-white/90 dark:bg-[#0c0e12]/90 border border-zinc-200 dark:border-white/10 rounded-t-sm p-4 flex flex-col gap-4 shadow-md transition-colors">
                 <div className="flex flex-col items-center justify-center h-full text-zinc-400 dark:text-zinc-600 gap-2 pb-8">
                  <ImageIcon className="w-8 h-8 opacity-50" />
                  <span className="text-xs font-medium opacity-50">Imagem em breve</span>
                </div>
              </div>

              <span className="absolute right-3 bottom-1.5 text-zinc-200/50 dark:text-white/5 text-[65px] font-bold leading-none select-none">
                {project.index}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1 gap-4">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-white tracking-tight m-0">
                  {project.title}
                </h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="grid place-items-center w-9 h-9 border border-zinc-200 dark:border-[#20242c] rounded-lg text-zinc-500 dark:text-[#b5bac5] hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label={`Ver repositório de ${project.title}`}
                >
                  <FaGithub size={18} />
                </a>
              </div>
              
              <p className="text-zinc-600 dark:text-[#8c929f] text-[14px] leading-[1.65] min-h-12.5 m-0">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                {project.techs.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] font-semibold text-blue-600 dark:text-[#8bbcff] bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}