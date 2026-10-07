import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Portella | Full-Stack Developer",
  description: "Portfólio profissional de Diego Portella, Desenvolvedor Full-Stack e estudante de Engenharia de Software na PUC Minas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Carregando o Devicon via CDN para evitar erros de compilação no Next.js */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="antialiased bg-zinc-50 dark:bg-[#08090a] text-zinc-900 dark:text-zinc-50 min-h-screen flex flex-col transition-colors duration-300 relative">
        
        {/* Fundo Quadriculado */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}