"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-pink-950 to-black border-b border-pink-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-pink-300 font-mono">
          Deeksha.dev
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-5 font-mono text-sm">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Experience", href: "/experience" },
            { name: "Projects", href: "/projects" },
            { name: "Skills", href: "/skills" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1 border border-pink-700 bg-black text-white rounded hover:bg-pink-700 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pink-400"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Experience", href: "/experience" },
            { name: "Projects", href: "/projects" },
            { name: "Skills", href: "/skills" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-sm px-4 py-2 border border-pink-700 rounded bg-black text-white hover:bg-pink-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
