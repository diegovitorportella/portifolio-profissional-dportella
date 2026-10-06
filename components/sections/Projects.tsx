import { ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa"; 

const projects = [
  {
    title: "Plataforma bolsU",
    description: "Projeto desenvolvido na disciplina de Desenvolvimento Centrado no Usuário, focado em usabilidade, personas e wireframes para uma plataforma acadêmica.",
    techs: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/diegovitorportella/portfolio-profissional-diaw", // Link provisório
    hasImage: false,
  },
  {
    title: "Programação Modular - Lista 00",
    description: "Repositório com resolução de algoritmos, estrutura de testes e aplicação de conceitos de modularização e boas práticas.",
    techs: ["Java", "Maven", "JUnit"],
    github: "https://github.com/diegovitorportella/programacao-modular-lista00",
    hasImage: false,
  }
];

export function Projects() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projetos</h2>
        <p className="text-zinc-400 text-lg">
          Alguns dos meus trabalhos recentes e projetos acadêmicos de destaque.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors"
          >
            {/* Placeholder da Imagem/GIF */}
            <div className="h-48 bg-zinc-800/50 flex items-center justify-center border-b border-zinc-800">
              {project.hasImage ? (
                <img src="/caminho-da-imagem.jpg" alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center text-zinc-600 gap-2">
                  <ImageIcon className="w-8 h-8" />
                  <span className="text-sm font-medium">GIF / Imagem em breve</span>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1 gap-4">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Ver repositório no GitHub"
                >
                  <FaGithub className="w-6 h-6"/>
                </a>
              </div>
              
              <p className="text-zinc-400 text-base leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                {project.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-semibold text-blue-300 bg-blue-900/30 border border-blue-500/20 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}