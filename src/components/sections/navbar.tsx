"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "_hello", href: "#hello" },
  { label: "_about-me", href: "#about" },
  { label: "_projects", href: "#projects" },
];

export function Navbar() {
  const [active, setActive] = useState("_hello");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[rgb(var(--bg-page))]/80 backdrop-blur-md px-6 py-4 md:px-10">
      <div className="flex items-center justify-between">
        <span className="font-mono-custom text-sm text-[rgb(var(--text-muted))]">
          sifen-woldemariam
        </span>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`font-mono-custom text-sm pb-1 border-b-2 transition-colors ${
                active === item.label
                  ? "border-[rgb(var(--accent-teal))] text-[rgb(var(--accent-teal))]"
                  : "border-transparent text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))]"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setActive("_contact-me")}
            className={`font-mono-custom text-sm pb-1 border-b-2 transition-colors ${
              active === "_contact-me"
                ? "border-[rgb(var(--accent-teal))] text-[rgb(var(--accent-teal))]"
                : "border-transparent text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))]"
            }`}
          >
            _contact-me
          </a>
        </div>

        <button
          className="md:hidden text-[rgb(var(--text-primary))]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          {[...navItems, { label: "_contact-me", href: "#contact" }].map(
            (item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.label);
                  setMenuOpen(false);
                }}
                className={`font-mono-custom text-sm ${
                  active === item.label
                    ? "text-[rgb(var(--accent-teal))]"
                    : "text-[rgb(var(--text-muted))]"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
