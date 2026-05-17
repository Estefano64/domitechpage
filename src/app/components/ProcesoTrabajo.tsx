"use client";

import { useState } from "react";

export default function ProcesoTrabajo() {
  const [activeStep, setActiveStep] = useState(0);

  const pasos = [
    {
      numero: "01",
      titulo: "Descubrimiento",
      duracion: "1-2 días",
      descripcion: "Nos reunimos contigo para entender tu negocio, objetivos, audiencia y competidores. Analizamos tus necesidades específicas y definimos el alcance del proyecto.",
      entregables: ["Brief del proyecto", "Análisis de competidores", "Propuesta técnica", "Cotización detallada"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      numero: "02",
      titulo: "Planificación",
      duracion: "2-3 días",
      descripcion: "Creamos wireframes, definimos arquitectura de información, seleccionamos tecnologías y establecemos hitos del proyecto. Aquí planificamos cada detalle antes de desarrollar.",
      entregables: ["Sitemap", "Wireframes", "Stack tecnológico", "Cronograma detallado"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      numero: "03",
      titulo: "Diseño UI/UX",
      duracion: "3-5 días",
      descripcion: "Diseñamos la interfaz visual de tu proyecto con enfoque en experiencia de usuario. Creamos mockups de alta fidelidad y prototipos interactivos para validar antes de desarrollar.",
      entregables: ["Mockups desktop/mobile", "Prototipo interactivo", "Guía de estilos", "Assets visuales"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      numero: "04",
      titulo: "Desarrollo",
      duracion: "1-4 semanas",
      descripcion: "Convertimos el diseño en código limpio y funcional. Desarrollamos con metodología ágil, permitiendo iteraciones y ajustes durante el build. Mantenemos comunicación constante.",
      entregables: ["Frontend responsive", "Backend/APIs", "Integraciones", "Panel de administración"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      numero: "05",
      titulo: "Testing y QA",
      duracion: "2-3 días",
      descripcion: "Realizamos pruebas exhaustivas de funcionalidad, usabilidad, rendimiento y seguridad. Probamos en múltiples dispositivos y navegadores para garantizar una experiencia perfecta.",
      entregables: ["Reporte de bugs", "Correcciones aplicadas", "Tests automatizados", "Documentación técnica"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      numero: "06",
      titulo: "Lanzamiento",
      duracion: "1 día",
      descripcion: "Configuramos hosting, dominio, SSL y todas las herramientas necesarias. Realizamos el deploy y monitoreamos el lanzamiento para asegurar que todo funcione perfectamente.",
      entregables: ["Sitio en producción", "DNS configurado", "Analytics instalado", "Capacitación al cliente"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      numero: "07",
      titulo: "Soporte Continuo",
      duracion: "Ilimitado",
      descripcion: "Después del lanzamiento, seguimos contigo. Ofrecemos mantenimiento, actualizaciones, optimizaciones y soporte técnico para asegurar el éxito continuo de tu proyecto digital.",
      entregables: ["Mantenimiento mensual", "Actualizaciones", "Reportes de métricas", "Consultoría estratégica"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="proceso"
      className="relative py-16 sm:py-20 overflow-hidden bg-[var(--color-bg-alt)]"
    >
      {/* Glows - suaves */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, var(--color-accent-base) 0%, transparent 70%)",
          filter: "blur(130px)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-3">
          <span
            className="text-accent-mype text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
          >
            Metodología Probada
          </span>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
          <span className="text-[var(--color-text-primary)]">NUESTRO </span>
          <span
            className="text-[var(--color-cta-base)]"
          >
            PROCESO
          </span>
        </h2>
        <div
          className="mx-auto mt-4 mb-4 h-[2px] w-12"
          style={{ background: "var(--color-cta-base)" }}
        />
        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base mb-12 font-[family-name:var(--font-open-sans)]">
          Seguimos un proceso estructurado y transparente que garantiza resultados excepcionales. 
          Desde la primera reunión hasta el soporte post-lanzamiento, estarás al tanto de cada paso.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical conectora */}
          <div
            className="absolute left-8 top-8 bottom-8 w-[2px] hidden lg:block bg-[var(--color-border)]"
          />

          {/* Steps */}
          <div className="space-y-8">
            {pasos.map((paso, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Mobile/Tablet: Card Layout */}
                <div className="lg:hidden">
                  <div
                    className="rounded-xl p-6 transition-all duration-300"
                    style={{
                      background: activeStep === index ? "white" : "var(--color-bg-primary)",
                      border: `1px solid ${activeStep === index ? "var(--color-cta-base)" : "var(--color-border)"}`,
                      boxShadow: activeStep === index ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300"
                        style={{
                          background: activeStep === index ? "var(--color-cta-base)" : "#f1f5f9",
                          color: activeStep === index ? "#fff" : "var(--color-text-secondary)",
                          border: activeStep === index ? "none" : "1px solid var(--color-border)",
                        }}
                      >
                        {paso.numero}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-montserrat)]">
                            {paso.titulo}
                          </h3>
                          <span className="text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)]">
                            {paso.duracion}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-6 mb-3 font-[family-name:var(--font-open-sans)]">
                          {paso.descripcion}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {paso.entregables.slice(0, 2).map((entregable, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-1 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-text-primary)]"
                            >
                              {entregable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Timeline Layout */}
                <div className="hidden lg:flex items-start gap-8">
                  {/* Número e icono */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 z-10 relative"
                      style={{
                        background: activeStep === index ? "var(--color-cta-base)" : "#f1f5f9",
                        color: activeStep === index ? "#fff" : "var(--color-text-secondary)",
                        boxShadow: activeStep === index ? "0 4px 14px 0 rgba(5, 150, 105, 0.39)" : "none",
                        border: activeStep === index ? "none" : "1px solid var(--color-border)",
                      }}
                    >
                      {paso.numero}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div
                    className="flex-1 rounded-xl p-6 transition-all duration-300"
                    style={{
                      background: "white",
                      border: `1px solid ${activeStep === index ? "var(--color-cta-base)" : "var(--color-border)"}`,
                      boxShadow: activeStep === index ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                      opacity: activeStep === index ? 1 : 0.6,
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-50 text-[var(--color-accent-base)] transition-colors duration-300"
                        >
                          {paso.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-montserrat)]">
                            {paso.titulo}
                          </h3>
                          <span className="text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)]">
                            Duración: {paso.duracion}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-6 mb-4 font-[family-name:var(--font-open-sans)]">
                      {paso.descripcion}
                    </p>
                    <div>
                      <span className="text-xs font-bold text-[var(--color-cta-base)] uppercase tracking-wider mb-2 block">
                        Entregables:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {paso.entregables.map((entregable, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-text-primary)] shadow-sm"
                          >
                            {entregable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#contactanos"
            className="btn-primary-mype gap-2"
          >
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
