"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./themeToggle";
import { SearchForm } from "./searchForm";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-background shadow-md border border-border">
      <div className="container relative mx-auto p-4 flex items-center justify-between">
        <div className="flex gap-12">
          <span className="font-display text-3xl text-primary">MaiaHub</span>

          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary font-mono hover:text-chart-3 hover:scale-110 transition-all py-2 inline-flex"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <SearchForm className="hidden md:block md:w-64 lg:w-80" />

          <ThemeToggle />

          <button
            className="md:hidden hover:scale-110 transition-all"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((p) => !p)}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-primary" />
            ) : (
              <Menu className="h-5 w-5 text-primary" />
            )}
          </button>
        </div>

        <nav
          className={`absolute top-full left-4 right-4 mt-4 z-50 bg-background shadow-2xl border border-border px-4 transition-all duration-300 ease-out md:hidden
          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none invisible"
          }`}
        >
          <ul className="flex flex-col divide-y divide-border">
            <SearchForm className="p-4" />
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary font-mono hover:text-chart-3 hover:scale-110 transition-all py-2 w-full flex items-center justify-center"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
