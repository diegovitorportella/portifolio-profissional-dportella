"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
      <div className="flex-1 space-y-6 text-center md:text-left">
        
        {/* Tag de Status */}
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-200 dark:border-blue-500/20 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {lang === "pt" ? "Construindo soluções escaláveis" : "Building scalable solutions"}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {lang === "pt" ? "Olá, sou " : "Hi, I'm "}
          <span className="text-blue-500">Diego Portella</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
          {lang === "pt" ? "Estudante de Engenharia de Software & Full-Stack Developer" : "Software Engineering Student & Full-Stack Developer"}
        </h2>

        <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4 text-base md:text-lg">
          {lang === "pt" ? (
            <>
              <p>Estudante de Engenharia de Software na PUC Minas e desenvolvedor full-stack estagiário na Encora Inc., onde atuo em uma plataforma de produto real, do banco de dados à interface.</p>
              <p>No back-end, construo microserviços em Node.js e NestJS, com autenticação JWT e serviços rodando em AWS, persistindo dados em PostgreSQL e cobrindo o código com testes em Jest. No front-end, desenvolvo em Angular com RxJS e NgRx para gerenciar o estado da aplicação. Uso Docker e Git/GitHub no dia a dia.</p>
              <p>Trabalho em squad com metodologias ágeis e Spec-Driven Development (SDD), definindo especificações claras antes de implementar e colaborando via code review. Busco crescer continuamente como desenvolvedor full-stack, contribuindo em projetos reais e evoluindo junto com o time.</p>
            </>
          ) : (
            <>
              <p>Software Engineering student at PUC Minas and Full-Stack Developer Intern at Encora Inc., where I work on a real product platform, from the database to the user interface.</p>
              <p>On the back-end, I build microservices using Node.js and NestJS, with JWT authentication and services running on AWS, persisting data in PostgreSQL, and covering the code with Jest tests. On the front-end, I develop in Angular using RxJS and NgRx for application state management. I use Docker and Git/GitHub on a daily basis.</p>
              <p>I work in a squad using agile methodologies and Spec-Driven Development (SDD), defining clear specifications before implementing and collaborating via code review. I seek to continuously grow as a full-stack developer, contributing to real-world projects and evolving alongside the team.</p>
            </>
          )}
        </div>

        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
          <Link href="#projetos" className={buttonVariants({ className: "bg-blue-600 hover:bg-blue-700 text-white border-0 h-12 px-6 rounded-lg font-medium shadow-md" })}>
            {lang === "pt" ? "Ver Projetos" : "View Projects"}
          </Link>
          <Link href="#contato" className={buttonVariants({ variant: "outline", className: "border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 bg-transparent h-12 px-6 rounded-lg font-medium" })}>
            {lang === "pt" ? "Contato" : "Contact"}
          </Link>
        </div>
      </div>

      <div className="relative shrink-0 w-64 md:w-80 aspect-4/5 p-3 mt-4 md:mt-0">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-blue-500" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-blue-500" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-blue-500" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-blue-500" />

        <div className="w-full h-full relative overflow-hidden bg-zinc-100 dark:bg-[#0d0f12] border border-zinc-200 dark:border-white/5 rounded-sm">
          <img src="/perfil.png" alt="Foto de perfil de Diego Portella" className="object-cover w-full h-full grayscale-15 contrast-110" />
        </div>
      </div>
    </div>
  );
}