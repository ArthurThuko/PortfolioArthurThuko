"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="backdrop-blur bg-[var(--color-background)]/80 text-[var(--color-foreground)] fixed w-full top-0 z-50 shadow-md">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center">        
        <div className="flex items-center gap-2">
          <Image
            src="/Logo-Portfolio.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        <ul className="absolute left-1/2 -translate-x-1/2 flex gap-10 font-[var(--font-body)]">
          <li>
            <Link href="/" className="hover:text-[var(--color-accent)] transition">
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-[var(--color-accent)] transition">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/projetos" className="hover:text-[var(--color-accent)] transition">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-[var(--color-accent)] transition">
              Contato
            </Link>
          </li>
        </ul>

        <div className="ml-auto">
          <button
            onClick={() => setDark(!dark)}
            className="bg-[var(--color-secondary)] px-3 py-1 rounded-lg hover:bg-[var(--color-accent)] transition"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>

      </div>
    </nav>
  );
}