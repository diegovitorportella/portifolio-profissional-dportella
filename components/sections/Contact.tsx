"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
// Adicionamos o FaInstagram na importação abaixo
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(lang === "pt" ? "Formulário pronto para ser conectado ao EmailJS!" : "Form ready to be connected to EmailJS!");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-left space-y-4 mb-12">
        <span className="text-blue-600 dark:text-blue-500 text-[11px] font-bold tracking-[0.15em] uppercase block">
          {lang === "pt" ? "Contato" : "Contact"}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.08]">
          {lang === "pt" ? "Vamos conversar?" : "Let's talk?"}
        </h2>
        <p className="text-zinc-600 dark:text-[#8c929f] text-base leading-[1.7] max-w-2xl">
          {lang === "pt" 
            ? "Tem uma ideia, oportunidade ou só quer trocar experiências? Minha caixa de entrada está aberta." 
            : "Have an idea, opportunity, or just want to share experiences? My inbox is open."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <h3 className="text-[20px] font-bold text-zinc-900 dark:text-white tracking-tight">
            {lang === "pt" ? "Minhas Redes" : "My Networks"}
          </h3>
          <div className="flex flex-col gap-4">
            
            {/* E-mail */}
            <a href="mailto:diegoportella1610@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-[#20242c] hover:border-zinc-300 dark:hover:border-[#343b48] hover:bg-zinc-50 dark:hover:bg-transparent hover:-translate-y-1 transition-all duration-200 group shadow-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 dark:text-[#8c929f] font-medium uppercase tracking-wider mb-1">E-mail</p>
                <p className="text-zinc-900 dark:text-zinc-200 font-medium text-[14px]">diegoportella1610@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/diegoportella26" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-[#20242c] hover:border-zinc-300 dark:hover:border-[#343b48] hover:bg-zinc-50 dark:hover:bg-transparent hover:-translate-y-1 transition-all duration-200 group shadow-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 dark:text-[#8c929f] font-medium uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="text-zinc-900 dark:text-zinc-200 font-medium text-[14px]">/diegoportella26</p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/diegovitorportella" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-[#20242c] hover:border-zinc-300 dark:hover:border-[#343b48] hover:bg-zinc-50 dark:hover:bg-transparent hover:-translate-y-1 transition-all duration-200 group shadow-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 dark:text-[#8c929f] font-medium uppercase tracking-wider mb-1">GitHub</p>
                <p className="text-zinc-900 dark:text-zinc-200 font-medium text-[14px]">/diegovitorportella</p>
              </div>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/_diegoportella_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#0d0f12] border border-zinc-200 dark:border-[#20242c] hover:border-zinc-300 dark:hover:border-[#343b48] hover:bg-zinc-50 dark:hover:bg-transparent hover:-translate-y-1 transition-all duration-200 group shadow-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 dark:text-[#8c929f] font-medium uppercase tracking-wider mb-1">Instagram</p>
                <p className="text-zinc-900 dark:text-zinc-200 font-medium text-[14px]">@_diegoportella_</p>
              </div>
            </a>

          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-white dark:bg-[#0d0f12] p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-[#20242c] shadow-sm transition-colors">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[13px] font-medium text-zinc-700 dark:text-zinc-300">
                {lang === "pt" ? "Nome" : "Name"}
              </label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-zinc-50 dark:bg-[#08090a] border border-zinc-200 dark:border-[#20242c] rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-zinc-400 dark:placeholder:text-[#414752]"
                placeholder={lang === "pt" ? "Como posso te chamar?" : "What should I call you?"}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[13px] font-medium text-zinc-700 dark:text-zinc-300">E-mail</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-zinc-50 dark:bg-[#08090a] border border-zinc-200 dark:border-[#20242c] rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-zinc-400 dark:placeholder:text-[#414752]"
                placeholder={lang === "pt" ? "voce@email.com" : "you@email.com"}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-[13px] font-medium text-zinc-700 dark:text-zinc-300">
                {lang === "pt" ? "Mensagem" : "Message"}
              </label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full bg-zinc-50 dark:bg-[#08090a] border border-zinc-200 dark:border-[#20242c] rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none placeholder:text-zinc-400 dark:placeholder:text-[#414752]"
                placeholder={lang === "pt" ? "Conte um pouco sobre o que você tem em mente..." : "Tell me a bit about what's on your mind..."}
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={buttonVariants({ className: "w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg font-medium text-[15px] gap-2 mt-2 shadow-md" })}
            >
              {isSubmitting 
                ? (lang === "pt" ? "Enviando..." : "Sending...") 
                : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    {lang === "pt" ? "Enviar Mensagem" : "Send Message"}
                  </>
                )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}