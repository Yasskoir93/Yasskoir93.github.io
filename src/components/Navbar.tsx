import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 py-4 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-8">
        <NavLink href="#accueil">Accueil</NavLink>
        <NavLink href="#about">À Propos</NavLink>
        <NavLink href="#skills">Compétences</NavLink>
        <NavLink href="#education">Formation</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
    >
      {children}
    </a>
  );
}