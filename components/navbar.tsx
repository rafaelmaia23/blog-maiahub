"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./themeToggle";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border px-4 py-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-foreground m-4">
          Blog MaiaHub
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-8">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contato"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Input placeholder="Buscar posts..." className="w-40 sm:w-64" />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            className="p-2"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden items-center">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors text-lg"
          >
            Home
          </Link>
          <Link
            href="/sobre"
            className="text-foreground hover:text-primary transition-colors text-lg"
          >
            About
          </Link>
          <Link
            href="/contato"
            className="text-foreground hover:text-primary transition-colors text-lg"
          >
            Contact
          </Link>

          <Input
            placeholder="Buscar posts..."
            className="w-full mt-2 max-w-sm"
          />
        </div>
      )}
    </nav>
  );
}
