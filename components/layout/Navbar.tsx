import Link from "next/link";

export function Navbar() {
  const navLinks = [
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Resume", href: "#resume" },
    { name: "Projetos", href: "#projetos" },
    { name: "Experiências", href: "#experiencias" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold text-white tracking-tight">
          Diego<span className="text-blue-500">.</span>Portella
        </Link>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="hover:text-blue-500 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}