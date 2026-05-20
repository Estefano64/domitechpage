"use client";

import { useState } from "react";

export default function ProcesoTrabajo() {
  const [activeStep, setActiveStep] = useState(0);

  const pasos = [
    {
      numero: "01",
      titulo: "Descubrimiento",
      duracion: "1-2 días",
      descripcion:
        "Nos reunimos contigo para entender tu negocio, objetivos, audiencia y competidores. Analizamos tus necesidades específicas y definimos el alcance del proyecto.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      numero: "02",
      titulo: "Planificación",
      duracion: "2-3 días",
      descripcion:
        "Creamos wireframes, definimos la arquitectura de información, seleccionamos tecnologías y establecemos los hitos del proyecto antes de empezar a desarrollar.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      numero: "03",
      titulo: "Diseño UI/UX",
      duracion: "3-5 días",
      descripcion:
        "Diseñamos la interfaz visual con enfoque en experiencia de usuario. Creamos mockups de alta fidelidad y prototipos interactivos para validar antes de desarrollar.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      numero: "04",
      titulo: "Desarrollo",
      duracion: "1-4 semanas",
      descripcion:
        "Convertimos el diseño en código limpio y funcional. Trabajamos con metodología ágil, manteniendo comunicación constante y permitiendo iteraciones durante el build.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      numero: "05",
      titulo: "Testing y QA",
      duracion: "2-3 días",
      descripcion:
        "Realizamos pruebas exhaustivas de funcionalidad, usabilidad, rendimiento y seguridad. Probamos en múltiples dispositivos y navegadores para garantizar una experiencia perfecta.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      numero: "06",
      titulo: "Lanzamiento",
      duracion: "1 día",
      descripcion:
        "Configuramos hosting, dominio, SSL y todas las herramientas necesarias. Realizamos el deploy y monitoreamos el lanzamiento para asegurar que todo funcione perfectamente.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      numero: "07",
      titulo: "Soporte Continuo",
      duracion: "Ilimitado",
      descripcion:
        "Después del lanzamiento, seguimos contigo. Ofrecemos mantenimiento, actualizaciones, optimizaciones y soporte técnico para asegurar el éxito continuo de tu proyecto.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const activo = pasos[activeStep];

  return (
    <section
      id="proceso"
      className="relative py-20 sm:py-24 overflow-hidden bg-[var(--color-bg-alt)]"
    >
      {/* Glows decorativos */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-cta-base) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent-base) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-3">
          <span className="text-accent-mype text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
            Metodología Probada
          </span>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
          <span className="text-[var(--color-text-primary)]">NUESTRO </span>
          <span className="text-[var(--color-cta-base)]">PROCESO</span>
        </h2>
        <div
          className="mx-auto mt-4 mb-4 h-[2px] w-12"
          style={{ background: "var(--color-cta-base)" }}
        />
        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base mb-14 font-[family-name:var(--font-open-sans)]">
          Un camino claro y transparente que convierte tu idea en un proyecto digital exitoso.
          Cada paso está pensado para que sepas exactamente qué esperar.
        </p>

        {/* ===== Desktop: Stepper interactivo ===== */}
        <div className="hidden lg:block">
          {/* Stepper barra superior */}
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[var(--color-border)]" />
            <div
              className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${(activeStep / (pasos.length - 1)) * 100}%`,
                background: "var(--color-cta-base)",
              }}
            />
            <div className="relative flex justify-between">
              {pasos.map((paso, index) => {
                const isActive = index === activeStep;
                const isComplete = index < activeStep;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className="group flex flex-col items-center"
                    aria-label={`Paso ${paso.numero}: ${paso.titulo}`}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 font-[family-name:var(--font-montserrat)]"
                      style={{
                        background: isActive || isComplete ? "var(--color-cta-base)" : "white",
                        color: isActive || isComplete ? "#fff" : "var(--color-text-secondary)",
                        border: isActive || isComplete ? "none" : "2px solid var(--color-border)",
                        boxShadow: isActive ? "0 0 0 6px rgba(255, 1, 36, 0.15)" : "none",
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      {paso.numero}
                    </div>
                    <span
                      className="mt-3 text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap transition-colors duration-300 font-[family-name:var(--font-montserrat)]"
                      style={{
                        color: isActive ? "var(--color-cta-base)" : "var(--color-text-secondary)",
                      }}
                    >
                      {paso.titulo}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tarjeta activa */}
          <div
            className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-lg transition-all duration-500"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-3 flex flex-col items-center justify-center">
                <div
                  className="w-28 h-28 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-cta-base) 0%, var(--color-cta-hover) 100%)",
                  }}
                >
                  {activo.icon}
                </div>
                <span
                  className="mt-5 text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-text-secondary)] font-[family-name:var(--font-montserrat)]"
                >
                  Paso {activo.numero}
                </span>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-[var(--color-accent-base)] font-[family-name:var(--font-open-sans)]">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {activo.duracion}
                </div>
              </div>

              <div className="col-span-9 border-l border-[var(--color-border)] pl-10">
                <h3 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] font-[family-name:var(--font-montserrat)]">
                  {activo.titulo}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)]">
                  {activo.descripcion}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] transition-all duration-200 hover:border-[var(--color-cta-base)] hover:text-[var(--color-cta-base)] disabled:cursor-not-allowed disabled:opacity-40 font-[family-name:var(--font-montserrat)]"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Anterior
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(pasos.length - 1, activeStep + 1))}
                    disabled={activeStep === pasos.length - 1}
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-cta-base)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[var(--color-cta-hover)] disabled:cursor-not-allowed disabled:opacity-40 font-[family-name:var(--font-montserrat)]"
                  >
                    Siguiente
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Mobile: Cards verticales ===== */}
        <div className="lg:hidden space-y-5">
          {pasos.map((paso, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className="relative rounded-2xl bg-white p-6 transition-all duration-300"
              style={{
                border:
                  activeStep === index
                    ? "1px solid var(--color-cta-base)"
                    : "1px solid var(--color-border)",
                boxShadow:
                  activeStep === index
                    ? "0 10px 25px -5px rgba(255, 1, 36, 0.15)"
                    : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-cta-base) 0%, var(--color-cta-hover) 100%)",
                  }}
                >
                  {paso.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-cta-base)] font-[family-name:var(--font-montserrat)]">
                      Paso {paso.numero}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)]">
                      • {paso.duracion}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[var(--color-text-primary)] font-[family-name:var(--font-montserrat)]">
                    {paso.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)]">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a href="#contactanos" className="btn-primary-mype gap-2">
            <span>Inicia Tu Proyecto Ahora</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
