"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Trazendo do react-icons
import { buttonVariants } from "@/components/ui/button";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função provisória - Na próxima sprint conectaremos com o EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Formulário pronto para ser conectado ao EmailJS!");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Vamos conversar?</h2>
        <p className="text-zinc-400 text-lg">
          Sinta-se à vontade para entrar em contato comigo para oportunidades, dúvidas ou apenas para dar um olá.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Lado Esquerdo: Redes Sociais */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white">Minhas Redes</h3>
          <div className="flex flex-col gap-4">
            <a href="mailto:seu-email@exemplo.com" className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all group">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">E-mail</p>
                <p className="text-zinc-200 font-medium">seu-email@exemplo.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all group">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6"/>
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">LinkedIn</p>
                <p className="text-zinc-200 font-medium">Diego Portella</p>
              </div>
            </a>

            <a href="https://github.com/diegovitorportella" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all group">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FaGithub className="w-6 h-6"/>
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">GitHub</p>
                <p className="text-zinc-200 font-medium">@diegovitorportella</p>
              </div>
            </a>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="bg-zinc-900/30 p-6 sm:p-8 rounded-2xl border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300">Nome</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-300">E-mail</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300">Mensagem</label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder="Como posso te ajudar?"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={buttonVariants({ className: "w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg font-medium text-base gap-2 mt-4" })}
            >
              {isSubmitting ? "Enviando..." : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}