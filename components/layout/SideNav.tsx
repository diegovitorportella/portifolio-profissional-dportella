"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
// 1. Importando todos os ícones necessários
import { User, FileText, Code2, Briefcase, Mail } from "lucide-react";

// 2. Adicionando o ícone correspondente a cada seção no array
const sections = [
  { id: "sobre", label: { pt: "Sobre Mim", en: "About Me" }, icon: User },
  { id: "resume", label: { pt: "Resume", en: "Resume" }, icon: FileText },
  { id: "projetos", label: { pt: "Projetos", en: "Projects" }, icon: Code2 },
  { id: "experiencias", label: { pt: "Experiências", en: "Experience" }, icon: Briefcase },
  { id: "contato", label: { pt: "Contato", en: "Contact" }, icon: Mail },
];

export function SideNav() {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState("sobre");

  // Hook para detectar em qual seção o usuário está rolando a página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pega a primeira seção visível para marcar como ativa
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { 
        // Aciona quando a seção atinge o meio da tela
        rootMargin: "-25% 0px -60% 0px" 
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
      
      {/* Linha vertical de conexão */}
      <div className="absolute top-6 bottom-6 w-px bg-zinc-200 dark:bg-[#20242c] -z-10" />
      
      <div className="flex flex-col gap-8">
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          
          return (
            <Link
              key={id}
              href={`#${id}`}
              className="relative group flex items-center justify-center p-2"
              aria-label={label[lang]}
            >
              {/* Tooltip sem animação, com mudança estática */}
              <div className={`absolute right-full mr-6 px-3 py-1.5 rounded-lg bg-white dark:bg-[#11141a] border border-zinc-200 dark:border-[#20242c] text-[13px] font-semibold text-blue-600 dark:text-blue-500 whitespace-nowrap shadow-sm pointer-events-none
                ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                <span className="text-blue-500/50 mr-2 font-mono font-bold">&gt;</span>
                {label[lang]}
              </div>

              {/* Ponto / Ícone Ativo Dinâmico */}
              {isActive ? (
                <div className="relative flex items-center justify-center w-11 h-11 rounded-full border-2 border-dashed border-blue-500/40 bg-zinc-50 dark:bg-[#08090a] shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-[#11141a] border border-blue-100 dark:border-[#20242c] flex items-center justify-center text-blue-600 dark:text-blue-500">
                    {/* Renderiza o ícone específico da seção */}
                    <Icon size={16} strokeWidth={2.5} />
                  </div>
                </div>
              ) : (
                <div className="w-3.5 h-3.5 rounded-full bg-zinc-200 dark:bg-[#11141a] border border-zinc-300 dark:border-[#20242c] group-hover:border-blue-500/50 group-hover:bg-blue-50 dark:group-hover:bg-[#1a1d24]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}