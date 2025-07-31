"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-pink-900 text-white shadow-md z-50 fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-pink-300 font-mono">
          Deeksha.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-mono">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-pink-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-pink-700 font-mono">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-6 py-3 text-white hover:bg-pink-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
