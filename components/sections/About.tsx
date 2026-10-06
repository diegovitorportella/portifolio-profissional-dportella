"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function About() {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
      {/* Coluna do Texto */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Olá, sou o <span className="text-blue-500">Diego Portella</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-400 font-medium">
          Estudante de Engenharia de Software & Full-Stack Developer
        </h2>

        {/* Toggle de Idioma */}
        <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
            <button
              onClick={() => setLang("pt")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                lang === "pt"
                  ? "bg-zinc-800 text-blue-400 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                lang === "en"
                  ? "bg-zinc-800 text-blue-400 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Texto de Apresentação */}
        <div className="text-zinc-300 leading-relaxed space-y-4 text-base md:text-lg">
          {lang === "pt" ? (
            <>
              <p>
                Estudante de Engenharia de Software na PUC Minas e desenvolvedor full-stack estagiário na Encora Inc., onde atuo em uma plataforma de produto real, do banco de dados à interface.
              </p>
              <p>
                No back-end, construo microserviços em Node.js e NestJS, com autenticação JWT e serviços rodando em AWS, persistindo dados em PostgreSQL e cobrindo o código com testes em Jest. No front-end, desenvolvo em Angular com RxJS e NgRx para gerenciar o estado da aplicação. Uso Docker e Git/GitHub no dia a dia.
              </p>
              <p>
                Trabalho em squad com metodologias ágeis e Spec-Driven Development (SDD), definindo especificações claras antes de implementar e colaborando via code review. Busco crescer continuamente como desenvolvedor full-stack, contribuindo em projetos reais e evoluindo junto com o time.
              </p>
            </>
          ) : (
            <>
              <p>
                Software Engineering student at PUC Minas and Full-Stack Developer Intern at Encora Inc., where I work on a real product platform, from the database to the user interface.
              </p>
              <p>
                On the back-end, I build microservices using Node.js and NestJS, with JWT authentication and services running on AWS, persisting data in PostgreSQL, and covering the code with Jest tests. On the front-end, I develop in Angular using RxJS and NgRx for application state management. I use Docker and Git/GitHub on a daily basis.
              </p>
              <p>
                I work in a squad using agile methodologies and Spec-Driven Development (SDD), defining clear specifications before implementing and collaborating via code review. I seek to continuously grow as a full-stack developer, contributing to real-world projects and evolving alongside the team.
              </p>
            </>
          )}
        </div>

        {/* Botões de Ação */}
        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
          <Link 
            href="#projetos"
            className={buttonVariants({ className: "bg-blue-600 hover:bg-blue-700 text-white border-0 h-12 px-6 rounded-lg font-medium" })}
          >
            Ver Projetos
          </Link>
          <Link 
            href="#contato"
            className={buttonVariants({ variant: "outline", className: "border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 bg-transparent h-12 px-6 rounded-lg font-medium" })}
          >
            Contato
          </Link>
        </div>
      </div>

      {/* Coluna da Imagem */}
      <div className="w-56 h-56 md:w-80 md:h-80 shrink-0 relative rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
        <img
          src="https://github.com/diegovitorportella.png"
          alt="Foto de perfil de Diego Portella"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}