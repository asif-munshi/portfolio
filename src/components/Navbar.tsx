"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent"
        >
          YourName
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-200 transition-colors hover:text-cyan-500"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t bg-white md:hidden dark:bg-gray-900"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-4">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
