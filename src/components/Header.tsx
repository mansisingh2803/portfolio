"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-green-900/30 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-green-400 font-bold text-xl tracking-widest select-none">Moonshot</span>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base font-semibold">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className="hover:text-green-400 transition-colors px-2 py-1 text-white"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-green-400 text-2xl focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950/95 border-t border-green-900/30 px-4 pb-4">
          <ul className="flex flex-col gap-3 mt-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className="w-full text-left px-2 py-2 rounded hover:bg-green-900/20 text-white hover:text-green-400 transition-colors"
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(section.id);
                  }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; 