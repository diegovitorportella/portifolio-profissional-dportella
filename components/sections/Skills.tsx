"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SkillsGlobe, { Skill } from "@/components/ui/SkillsGlobe";

export function Skills() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mySkills: Skill[] = [
    { icon: "devicon-typescript-plain", label: "TypeScript" },
    { icon: "devicon-javascript-plain", label: "JavaScript" },
    { icon: "devicon-nodejs-plain", label: "Node.js" },
    { icon: "devicon-nestjs-plain", label: "NestJS" },
    { icon: "devicon-angularjs-plain", label: "Angular" },
    { icon: "devicon-react-original", label: "React" },
    { icon: "devicon-nextjs-plain", label: "Next.js", color: theme === "dark" ? "#fff" : "#000" },
    { icon: "devicon-postgresql-plain", label: "PostgreSQL" },
    { icon: "devicon-amazonwebservices-plain-wordmark", label: "AWS" },
    { icon: "devicon-docker-plain", label: "Docker" },
    { icon: "devicon-jest-plain", label: "Jest" },
    { icon: "devicon-git-plain", label: "Git" },
    { icon: "devicon-github-original", label: "GitHub", color: theme === "dark" ? "#fff" : "#000" },
    { icon: "devicon-vscode-plain", label: "VS Code" },
    { icon: "devicon-jira-plain", label: "Jira" },
    { icon: "devicon-tailwindcss-original", label: "Tailwind CSS" },
    { icon: "devicon-html5-plain", label: "HTML5" },
    { icon: "devicon-css3-plain", label: "CSS3" },
    { icon: "devicon-linux-plain", label: "Linux", color: theme === "dark" ? "#fff" : "#000" },
    { icon: "devicon-figma-plain", label: "Figma" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center md:text-left space-y-4 mb-12">
        <span className="text-blue-600 dark:text-blue-500 text-[11px] font-bold tracking-[0.14em] uppercase">
          {lang === "pt" ? "Stack Tecnológica" : "Tech Stack"}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-zinc-900 dark:text-white tracking-tight leading-[1.08]">
          {lang === "pt" ? "As ferramentas que domino." : "Tools I work with."}
        </h2>
        <p className="text-zinc-600 dark:text-[#8c929f] text-base leading-[1.7] max-w-2xl mx-auto md:mx-0">
          {lang === "pt" 
            ? "O meu ecossistema de desenvolvimento, metodologias e infraestrutura, focado sempre em performance e escalabilidade." 
            : "My development ecosystem, methodologies, and infrastructure, always focused on performance and scalability."}
        </p>
      </div>

      {/* Classes corrigidas para o Tailwind v4: rounded-3xl, h-125 e md:h-150 */}
      <div className="bg-white/80 dark:bg-[#0b0d10]/80 border border-zinc-200 dark:border-[#1e232b] rounded-3xl overflow-hidden shadow-sm relative h-125 md:h-150">
        {mounted && (
          <SkillsGlobe 
            skills={mySkills} 
            accent="#3b82f6" 
            height="100%" 
            fogColor={theme === "dark" ? "#08090a" : "#f8fafc"} 
          />
        )}
      </div>
    </div>
  );
}