"use client";

import { useState, useEffect } from "react";
import Typewriter from "./Typewriter";

const backgroundImages = [
  "/Imagenes-Fondo/Programmer-1.webp",
  "/Imagenes-Fondo/Programmer-2.webp",
  "/Imagenes-Fondo/Programmer-3.webp",
  "/Imagenes-Fondo/Programmer-4.webp",
];

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section
      className="relative flex h-[calc(100vh-64px)] items-center overflow-hidden bg-[#171e24]"
    >
      {/* Rotating Background Images */}
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 z-0 transition-opacity duration-[3000ms] ease-in-out ${index === currentBg ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0.3) 70%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-32"
        style={{
          background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-2xl">
          {/* Badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(220, 0, 0, 0.06)",
              border: "1px solid rgba(220, 0, 0, 0.15)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: "#ff0124" }}
            />
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)]"
              style={{ color: "#ff0124" }}
            >
              Agencia Digital en Arequipa
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] font-[family-name:var(--font-montserrat)]">
            Estrategias Digitales
            <br />
            <span className="inline-flex items-center justify-center lg:justify-start min-h-[2.2em] w-full lg:w-auto">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--color-cta-base) 0%, var(--color-cta-hover) 100%)",
                }}
              >
                <Typewriter
                  words={[
                    "CONVERSIÓN",
                    "DE CLASE MUNDIAL",
                    "QUE GENERAN RESULTADOS",
                    "PARA TU CRECIMIENTO",
                    "CON VISIÓN DE FUTURO",
                  ]}
                  typingSpeed={70}
                  deletingSpeed={35}
                  pauseTime={2500}
                />
              </span>
            </span>
            <br />
            <span className="text-white/80">en Arequipa.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base font-[family-name:var(--font-open-sans)]">
            Hacemos que tu negocio destaque en el ecosistema digital con diseño
            estratégico y resultados reales. Con la gestión de{" "}
            <span className="font-semibold text-[var(--color-accent-base)]">
              Domitech Solutions
            </span>{" "}
            lo conseguimos.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <a
              href="#contactanos"
              className="btn-primary-mype gap-2"
            >
              <span>Auditoría Gratuita</span>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* Secondary CTA */}
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-lg px-[2rem] py-[0.875rem] text-[0.875rem] font-bold tracking-[0.05em] uppercase transition-all duration-300 hover:scale-105 font-[family-name:var(--font-montserrat)] text-white border border-white/20 bg-transparent hover:border-[var(--color-cta-base)] hover:text-[var(--color-cta-base)]"
            >
              <span>Ver Portafolio</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 z-[2] -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[9px] font-medium tracking-[0.25em] text-white/25 uppercase font-[family-name:var(--font-montserrat)]">
          Scroll
        </span>
        <div
          className="h-6 w-[1px] animate-pulse"
          style={{
            background: "linear-gradient(to bottom, #ff0124, transparent)",
          }}
        />
      </div>
    </section>
  );
}
