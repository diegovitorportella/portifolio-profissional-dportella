"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-18 border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-[#08090a]/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-6 flex items-center justify-between h-full">
        
        <Link href="#sobre" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-zinc-900 dark:text-white hover:opacity-80 transition-opacity">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-[11px]">DP</span>
          <span>diego.portella</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            {[
              ["Sobre Mim", "sobre"],
              ["Resume", "resume"],
              ["Projetos", "projetos"],
              ["Experiências", "experiencias"],
              ["Contato", "contato"],
            ].map(([label, id]) => (
              <Link 
                href={`#${id}`} 
                key={id}
                className="text-[13px] font-medium text-zinc-600 dark:text-[#b5bac5] hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          )}

          <button 
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-18 left-4 right-4 bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-white/10 rounded-xl p-4 flex flex-col gap-2 shadow-2xl transition-colors">
          {[
            ["Sobre Mim", "sobre"],
            ["Resume", "resume"],
            ["Projetos", "projetos"],
            ["Experiências", "experiencias"],
            ["Contato", "contato"],
          ].map(([label, id]) => (
            <Link 
              href={`#${id}`} 
              key={id}
              onClick={() => setMenuOpen(false)}
              className="p-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}