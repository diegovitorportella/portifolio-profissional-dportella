"use client";

import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export function Projects() {
  const { lang } = useLanguage();

  const projects = [
    {
      index: "01",
      title: lang === "pt" ? "Catálogo de Filmes Angular" : "Angular Movie Catalog",
      description: lang === "pt" 
        ? "SPA responsiva para exploração de filmes integrada à API do TMDB. Arquitetura moderna construída com Angular 21, unindo Signals para gerenciamento de estado da UI e RxJS para pipelines complexos e pré-carregamento de rotas."
        : "Responsive SPA for movie exploration integrated with the TMDB API. Modern architecture built with Angular 21, combining Signals for UI state management and RxJS for complex pipelines and route pre-fetching.",
      techs: ["Angular", "TypeScript", "RxJS", "SCSS"],
      github: "https://github.com/diegovitorportella/angular-movie-catalog",
      accent: "blue",
      image_filename: "angular-movie-catalog.png",
    },
    {
      index: "02",
      title: lang === "pt" ? "EcoScore Scanner" : "EcoScore Scanner",
      description: lang === "pt"
        ? "Plataforma que promove o consumo sustentável (ODS 12) ao calcular a pegada ecológica de produtos através de um motor de pontuação isolado. Arquitetura full-stack conteinerizada em Docker, desenvolvida com React no frontend e Node.js com Prisma ORM e PostgreSQL no backend."
        : "Platform that promotes sustainable consumption (SDG 12) by calculating the ecological footprint of products through an isolated scoring engine. Docker-containerized full-stack architecture, built with React on the frontend and Node.js with Prisma ORM and PostgreSQL on the backend.",
      techs: ["React", "Node.js", "PostgreSQL", "Prisma"],
      github: "https://github.com/diegovitorportella/eco-score-scanner",
      accent: "violet",
      image_filename: "ecoscore-scanner.png",
    },
    {
      index: "03",
      title: lang === "pt" ? "Sinaliza - Acessibilidade Gastronômica" : "Sinaliza - Gastronomic Accessibility",
      description: lang === "pt"
        ? "Plataforma web colaborativa projetada para conectar pessoas com deficiência auditiva a restaurantes acessíveis. A solução oferece mapa interativo, cardápio visual e um 'Modo Garçom' para pedidos em tempo real sem necessidade de comunicação verbal."
        : "Collaborative web platform designed to connect deaf and hard-of-hearing individuals with accessible restaurants. The solution features an interactive map, visual menus, and a 'Waitstaff Mode' for real-time ordering without verbal communication.",
      techs: ["JavaScript", "Bootstrap", "JSON Server", "Leaflet"],
      github: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti1-0438200-g2-1",
      accent: "cyan",
      image_filename: "sinaliza.png",
    },
    {
      index: "04",
      title: lang === "pt" ? "API de Usuários - Clean Architecture" : "User API - Clean Architecture",
      description: lang === "pt"
        ? "API RESTful para gestão eficiente de usuários, focada em escalabilidade e manutenibilidade. Estruturada sob os princípios da Clean Architecture para isolar as regras de negócio, unindo TypeScript, testes automatizados com Jest e persistência de dados via PostgreSQL e Sequelize."
        : "RESTful API for efficient user management, focused on scalability and maintainability. Structured under Clean Architecture principles to isolate business rules, combining TypeScript, automated testing with Jest, and data persistence via PostgreSQL and Sequelize.",
      techs: ["TypeScript", "Node.js", "PostgreSQL", "Sequelize"],
      github: "https://github.com/diegovitorportella/poc-ramp-up-api",
      accent: "green",
      image_filename: "ramp-up-api-users.png",
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center md:text-left space-y-4 mb-12">
        <span className="text-blue-600 dark:text-blue-500 text-[11px] font-bold tracking-[0.14em] uppercase">
          {lang === "pt" ? "Projetos selecionados" : "Selected projects"}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-zinc-900 dark:text-white tracking-tight leading-[1.08]">
          {lang === "pt" ? "Soluções que saíram do papel." : "Solutions brought to life."}
        </h2>
        <p className="text-zinc-600 dark:text-[#8c929f] text-base leading-[1.7] max-w-2xl">
          {lang === "pt" 
            ? "Uma seleção de trabalhos que combinam engenharia de software, foco em arquitetura e atenção aos detalhes." 
            : "A selection of works that combine software engineering, architectural focus, and attention to detail."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article 
            key={project.index} 
            className="group flex flex-col bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-[#20242c] rounded-[14px] overflow-hidden hover:border-blue-500/30 dark:hover:border-[#343b48] hover:-translate-y-1 transition-all duration-200 shadow-sm"
          >
            {/* Secção Visual (Mockup do Browser com a Imagem) */}
            <div className="relative h-65 border-b border-zinc-200 dark:border-[#20242c] bg-zinc-50 dark:bg-[#10141b] overflow-hidden transition-colors">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom_right,rgba(59,130,246,0.4),transparent)] pointer-events-none" />
              
              {/* Pontinhos do Browser */}
              <div className="absolute top-6 right-[10%] left-[10%] h-7 bg-white/80 dark:bg-[#0b0d11]/80 border border-zinc-200 dark:border-white/10 rounded-t-lg flex items-center px-3 gap-1.5 backdrop-blur transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-[#414752]" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-[#414752]" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-[#414752]" />
              </div>
              
              {/* Moldura da Imagem */}
              <div className="absolute top-14 right-[10%] -bottom-7.5 left-[10%] bg-white dark:bg-[#0c0e12] border border-zinc-200 dark:border-white/10 rounded-t-sm shadow-md transition-colors overflow-hidden">
                 <img 
                  src={`/${project.image_filename}`} 
                  alt={`Screenshot do projeto ${project.title}`} 
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>

              <span className="absolute right-3 bottom-1.5 text-zinc-200/50 dark:text-white/5 text-[65px] font-bold leading-none select-none pointer-events-none">
                {project.index}
              </span>
            </div>

            {/* Secção de Informação */}
            <div className="p-6 flex flex-col flex-1 gap-4">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-white tracking-tight m-0">
                  {project.title}
                </h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="grid place-items-center shrink-0 w-9 h-9 border border-zinc-200 dark:border-[#20242c] rounded-lg text-zinc-500 dark:text-[#b5bac5] hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label={lang === "pt" ? `Ver repositório de ${project.title}` : `View repository for ${project.title}`}
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