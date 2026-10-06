"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-[#08090a] py-8 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-6 text-center md:flex md:items-center md:justify-between max-w-295">
        <p className="text-zinc-500 text-[12px]">
          {lang === "pt" ? "Desenvolvido por " : "Developed by "}
          <strong className="text-zinc-800 dark:text-[#b5bac5] font-medium">Diego Portella</strong> &copy; {new Date().getFullYear()}
        </p>
        <a href="#sobre" className="text-zinc-500 text-[12px] hover:text-blue-500 dark:hover:text-blue-400 transition-colors mt-4 md:mt-0 inline-block">
          {lang === "pt" ? "Voltar ao topo \u2191" : "Back to top \u2191"}
        </a>
      </div>
    </footer>
  );
}