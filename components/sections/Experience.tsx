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
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Experiências</h2>
        <p className="text-zinc-400 text-lg">Meu histórico profissional e evolução na área de tecnologia.</p>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12 pb-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Marcador da Linha do Tempo */}
            <div className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black" />
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                <Briefcase className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-200">{exp.company}</span>
                <span>&bull;</span>
                <span>{exp.location}</span>
              </div>

              <ul className="space-y-2.5">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-zinc-300 text-base leading-relaxed flex items-start">
                    <span className="mr-3 text-blue-500 mt-1">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
                    {tag}
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