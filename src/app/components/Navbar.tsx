"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Conócenos", href: "/#conocenos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Blog", href: "/blog" },
  { label: "Clientes", href: "/#clientes" },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${isSticky ? "nav-sticky shadow-sm" : ""
        }`}
      style={{
        background: isSticky
          ? "rgba(10, 10, 10, 0.95)"
          : "rgba(10, 10, 10, 0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: isSticky ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >


      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 group">
          <div className="relative">
            <Image
              src="/isologo-domitech.png"
              alt="Domitech Solutions"
              width={50}
              height={50}
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 z-0 rounded-full opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-80"
              style={{
                background:
                  "radial-gradient(circle, #ff0124 0%, #ff0124 60%, transparent 100%)",
              }}
            />
          </div>
          <span className="text-sm font-bold tracking-wider uppercase hidden sm:inline font-[family-name:var(--font-montserrat)]">
            <span className="text-white">Domitech</span>
            <span className="text-[var(--color-cta-base)]"> Solutions</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative flex items-center px-3.5 py-2 mt-0.5 text-[13px] font-medium tracking-wide text-white/80 uppercase transition-all duration-300 hover:text-[var(--color-cta-base)] group font-[family-name:var(--font-montserrat)]"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-3/4"
                  style={{
                    background: "var(--color-cta-base)",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="/#contactanos"
          className="hidden btn-primary-mype xl:inline-flex gap-2 !px-6 !py-3 !text-xs"
        >
          <span>Cotizar</span>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:text-[var(--color-cta-base)] xl:hidden"
          aria-label="Abrir menú"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 xl:hidden ${mobileOpen ? "max-h-[28rem]" : "max-h-0"
          }`}
      >
        <div
          className="px-6 py-4 space-y-1 shadow-md border-t border-white/5"
          style={{ background: "rgba(15, 23, 42, 0.98)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-[var(--color-cta-base)] font-[family-name:var(--font-montserrat)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contactanos"
            onClick={() => setMobileOpen(false)}
            className="mt-3 w-full btn-primary-mype text-center block"
          >
            Cotizar
          </a>
        </div>
      </div>
    </nav>
  );
}
