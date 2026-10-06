import { buttonVariants } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export function Resume() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Currículo</h2>
        <p className="text-zinc-400 text-lg">
          Visualize ou baixe meu currículo completo para obter mais detalhes sobre minha trajetória acadêmica e profissional.
        </p>
      </div>
      
      <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center gap-6 w-full sm:w-auto shadow-lg">
        <div className="p-4 bg-blue-500/10 rounded-full">
          <FileText className="w-12 h-12 text-blue-500" />
        </div>
        
        <a 
          href="/curriculo.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          download
          className={buttonVariants({ className: "bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto gap-2 text-base h-12 px-8 rounded-lg font-medium" })}
        >
          <Download className="w-5 h-5" />
          Download CV (PDF)
        </a>
      </div>
    </div>
  );
}