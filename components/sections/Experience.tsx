import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Encora Inc.",
    role: "Software Developer Intern",
    period: "Out. de 2025 - O momento",
    location: "Belo Horizonte, MG · Remoto",
    description: [
      "Desenvolvimento full-stack em uma plataforma de produto real, atuando do back-end ao front-end.",
      "Front-end em Angular e TypeScript, com RxJS e NgRx para gerência de estado da aplicação.",
      "Back-end em Node.js/TypeScript, construindo microserviços com Express e NestJS.",
      "Serviços rodando em AWS (Lambda, SQS, SNS, S3), com banco de dados PostgreSQL.",
      "Implementação de autenticação e segurança de APIs com JWT.",
      "Testes automatizados com Jest e uso de Docker no fluxo de desenvolvimento.",
      "Versionamento e colaboração em equipe com Git/GitHub."
    ],
    tags: ["NgRx", "Amazon SQS", "Express", "NestJS", "Angular", "TypeScript", "AWS", "PostgreSQL", "Jest", "Docker"]
  },
  {
    company: "Abastek",
    role: "Estagiário de Desenvolvimento de Software",
    period: "Ago. de 2025 - Set. de 2025",
    location: "Belo Horizonte, MG · Presencial",
    description: [
      "Desenvolvi aplicações embarcadas em C, C++ e Kotlin.",
      "Integrei sistemas com ESP32, Arduino e sensores em projetos práticos.",
      "Utilizei Git/GitHub para versionamento e colaboração em equipe.",
      "Apliquei boas práticas de desenvolvimento de software em diferentes contextos."
    ],
    tags: ["C", "C++", "Kotlin", "ESP32", "Arduino", "Git"]
  }
];

export function Experience() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-left space-y-4 mb-16">
        <span className="text-blue-600 dark:text-blue-500 text-[11px] font-bold tracking-[0.15em] uppercase block">
          Experiências
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.08]">
          Onde venho construindo.
        </h2>
        <p className="text-zinc-600 dark:text-[#8c929f] text-base leading-[1.7] max-w-2xl">
          Experiências que fortaleceram minha visão de produto, qualidade e trabalho em equipe.
        </p>
      </div>

      <div className="relative">
        {/* Usando nativos do v4: left-6.25 */}
        <div className="absolute left-6.25 top-6 bottom-0 w-px bg-linear-to-b from-blue-500 via-zinc-200 dark:via-[#20242c] to-zinc-200 dark:to-[#20242c]" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <article key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-8">
              
              {/* Usando nativos do v4: w-12.5 e h-12.5 */}
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
                    <span 
                      key={tag} 
                      className="text-[11px] font-semibold text-blue-600 dark:text-[#8bbcff] bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-3 py-1.5 rounded-lg"
                    >
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