"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-18 border-b border-white/5 bg-[#08090a]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 flex items-center justify-between h-full">
        <Link href="#sobre" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[11px]">DP</span>
          <span>diego.portella</span>
        </Link>
        
        {/* Desktop Nav */}
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
              className="text-[13px] font-medium text-[#b5bac5] hover:text-white transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute top-18 left-4 right-4 bg-[#0d0f12] border border-white/10 rounded-xl p-4 flex flex-col gap-2 shadow-2xl">
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
              className="p-3 text-sm font-medium text-zinc-300 hover:bg-white/5 rounded-lg transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}