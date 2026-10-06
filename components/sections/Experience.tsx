"use client";

import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Experience() {
  const { lang } = useLanguage();

  const experiences = [
    {
      company: "Encora Inc.",
      role: "Software Developer Intern",
      period: lang === "pt" ? "Out. de 2025 - O momento" : "Oct 2025 - Present",
      location: lang === "pt" ? "Belo Horizonte, MG · Remoto" : "Belo Horizonte, MG · Remote",
      description: lang === "pt" ? [
        "Desenvolvimento full-stack em uma plataforma de produto real, atuando do back-end ao front-end.",
        "Front-end em Angular e TypeScript, com RxJS e NgRx para gerência de estado da aplicação.",
        "Back-end em Node.js/TypeScript, construindo microserviços com Express e NestJS.",
        "Serviços rodando em AWS (Lambda, SQS, SNS, S3), com banco de dados PostgreSQL.",
        "Implementação de autenticação e segurança de APIs com JWT.",
        "Testes automatizados com Jest e uso de Docker no fluxo de desenvolvimento.",
        "Versionamento e colaboração em equipe com Git/GitHub."
      ] : [
        "Full-stack development on a real product platform, working from back-end to front-end.",
        "Front-end in Angular and TypeScript, using RxJS and NgRx for application state management.",
        "Back-end in Node.js/TypeScript, building microservices with Express and NestJS.",
        "Services running on AWS (Lambda, SQS, SNS, S3), with PostgreSQL database.",
        "Implementation of API authentication and security using JWT.",
        "Automated testing with Jest and use of Docker in the development workflow.",
        "Versioning and team collaboration using Git/GitHub."
      ],
      tags: ["NgRx", "Amazon SQS", "Express", "NestJS", "Angular", "TypeScript", "AWS", "PostgreSQL", "Jest", "Docker"]
    },
    {
      company: "Abastek",
      role: lang === "pt" ? "Estagiário de Desenvolvimento de Software" : "Software Development Intern",
      period: lang === "pt" ? "Ago. de 2025 - Set. de 2025" : "Aug 2025 - Sep 2025",
      location: lang === "pt" ? "Belo Horizonte, MG · Presencial" : "Belo Horizonte, MG · On-site",
      description: lang === "pt" ? [
        "Desenvolvi aplicações embarcadas em C, C++ e Kotlin.",
        "Integrei sistemas com ESP32, Arduino e sensores em projetos práticos.",
        "Utilizei Git/GitHub para versionamento e colaboração em equipe.",
        "Apliquei boas práticas de desenvolvimento de software em diferentes contextos."
      ] : [
        "Developed embedded applications in C, C++, and Kotlin.",
        "Integrated systems with ESP32, Arduino, and sensors in practical projects.",
        "Used Git/GitHub for versioning and team collaboration.",
        "Applied software development best practices in different contexts."
      ],
      tags: ["C", "C++", "Kotlin", "ESP32", "Arduino", "Git"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-left space-y-4 mb-16">
        <span className="text-blue-600 dark:text-blue-500 text-[11px] font-bold tracking-[0.15em] uppercase block">
          {lang === "pt" ? "Experiências" : "Experience"}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.08]">
          {lang === "pt" ? "Onde venho construindo." : "Where I've been building."}
        </h2>
        <p className="text-zinc-600 dark:text-[#8c929f] text-base leading-[1.7] max-w-2xl">
          {lang === "pt" 
            ? "Experiências que fortaleceram minha visão de produto, qualidade e trabalho em equipe." 
            : "Experiences that strengthened my product vision, quality standards, and teamwork."}
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6.25 top-6 bottom-0 w-px bg-linear-to-b from-blue-500 via-zinc-200 dark:via-[#20242c] to-zinc-200 dark:to-[#20242c]" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <article key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="shrink-0 w-12.5 h-12.5 rounded-full bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-[#20242c] flex items-center justify-center text-blue-600 dark:text-blue-500 font-bold text-[13px] z-10 shadow-[0_0_0_8px_#fafafa] dark:shadow-[0_0_0_8px_#08090a] transition-colors">
                {exp.company.substring(0, 2).toUpperCase()}
              </div>

              <div className="flex-1 bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-[#20242c] rounded-2xl p-6 md:p-8 hover:border-zinc-300 dark:hover:border-[#343b48] shadow-sm transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-zinc-900 dark:text-white tracking-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Briefcase className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                      <p className="text-blue-600 dark:text-blue-500 text-[15px] font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="md:text-right mt-2 md:mt-0">
                    <p className="text-zinc-500 dark:text-[#8c929f] text-[14px] font-medium">{exp.period}</p>
                    <p className="text-zinc-400 dark:text-[#626975] text-[13px] mt-1">{exp.location}</p>
                  </div>
                </div>

                <hr className="border-zinc-100 dark:border-[#20242c] my-6 transition-colors" />

                <ul className="space-y-3">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="text-zinc-600 dark:text-[#8c929f] text-[14px] leading-relaxed flex items-start">
                      <span className="mr-3 text-blue-500 mt-1">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5 mt-8">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-blue-600 dark:text-[#8bbcff] bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-3 py-1.5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}