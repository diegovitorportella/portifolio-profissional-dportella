import { FileText, Download } from "lucide-react";

export function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <div className="bg-[#0b0d10] border border-[#1e232b] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 shadow-xl">
        
        {/* Ícone à Esquerda */}
        <div className="shrink-0 w-20 h-20 bg-[#12161e] border border-[#1e2532] rounded-2xl flex items-center justify-center">
          <FileText strokeWidth={1.5} className="w-9 h-9 text-blue-500" />
        </div>
        
        {/* Textos Centrais */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-blue-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-2 block">
            Resume
          </span>
          <h2 className="text-white text-2xl md:text-[32px] font-bold mb-3 tracking-tight">
            Minha trajetória em uma página.
          </h2>
          <p className="text-[#8c929f] text-[15px] leading-relaxed max-w-2xl mx-auto md:mx-0">
            Formação, experiências, competências e as tecnologias que fazem parte do meu dia a dia.
          </p>
        </div>

        {/* Botão de Download à Direita */}
        <div className="shrink-0 mt-4 md:mt-0 w-full md:w-auto">
          <a 
            href="/curriculo.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            download
            className="flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-7 py-4 rounded-xl text-[15px] font-semibold transition-all shadow-[0_4px_24px_rgba(59,130,246,0.25)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 w-full md:w-auto"
          >
            <Download className="w-5 h-5" />
            Download CV (PDF)
          </a>
        </div>

      </div>
    </div>
  );
}