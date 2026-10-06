import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
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
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`antialiased bg-[#08090a] text-zinc-50 min-h-screen flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}