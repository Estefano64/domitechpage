"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Project {
  title: string;
  category: string;
  url: string;
  description: string;
  stats: { label: string; value: string }[];
  techs: string[];
}

const projects: Project[] = [
  {
    title: "HSEC Perú - Sistema de Certificación",
    category: "Desarrollo Web Empresarial",
    url: "https://hsec-peru.com/",
    description:
      "Desarrollo de plugin personalizado de WordPress para automatizar procesos de certificación empresarial en seguridad, salud ocupacional y medio ambiente. Incluye gestión de requisitos, validación UAT y reducción significativa del tiempo operativo del cliente.",
    stats: [
      { label: "Tiempo ahorrado", value: "65%" },
      { label: "Certificaciones gestionadas", value: "500+" },
      { label: "Satisfacción cliente", value: "5/5" },
    ],
    techs: ["WordPress", "PHP", "JavaScript", "MySQL"],
  },
  {
    title: "Andes Ultra - Plataforma de Eventos",
    category: "E-Commerce & Eventos",
    url: "https://andesultra.com/",
    description:
      "Desarrollo completo de sitio web con WordPress Bricks y plugin personalizado para formulario de inscripción a eventos deportivos. Sistema de gestión de participantes, automatización de registro y procesamiento de pagos online.",
    stats: [
      { label: "Inscripciones", value: "2.8K+" },
      { label: "Incremento ventas", value: "+340%" },
      { label: "Tiempo de carga", value: "1.1s" },
    ],
    techs: ["WordPress", "PHP", "JavaScript", "PayPal API"],
  },
  {
    title: "Tecnómadas - Catálogo Digital",
    category: "E-Commerce Moderno",
    url: "https://www.tecnonomadas.net/",
    description:
      "Catálogo web interactivo con integración de WhatsApp para ventas directas, búsqueda avanzada de productos, filtros dinámicos e integración de Google Maps para ubicación de tienda física. Arquitectura moderna con Node.js y React.",
    stats: [
      { label: "Conversión WhatsApp", value: "18.5%" },
      { label: "Consultas mensuales", value: "1.2K+" },
      { label: "Usuarios recurrentes", value: "45%" },
    ],
    techs: ["Node.js", "React", "WhatsApp API", "Google Maps"],
  },
  {
    title: "Consejo Psicológico - Sitio Corporativo",
    category: "Sitio Web Profesional",
    url: "https://consejopsicologico.com/",
    description:
      "Desarrollo de sitio web corporativo con botón de redirección a WhatsApp, widget integrado de reseñas de Google y formulario de contacto personalizado. Diseño profesional optimizado para conversión de leads en servicios de salud mental.",
    stats: [
      { label: "Leads generados", value: "+285%" },
      { label: "Citas agendadas", value: "850+" },
      { label: "Tiempo en sitio", value: "3.8min" },
    ],
    techs: ["HTML5", "CSS3", "JavaScript", "Google Reviews API"],
  },
  {
    title: "X Trail Series - Plataforma Digital",
    category: "Marketing & Events",
    url: "https://xtrailseries.com/",
    description:
      "Plataforma web de inscripción automatizada para eventos deportivos con mejora de UX y reducción de carga operativa manual. Estrategia de contenidos multiplataforma y gestión de redes sociales para maximizar alcance del evento.",
    stats: [
      { label: "Alcance digital", value: "150K+" },
      { label: "Engagement", value: "+420%" },
      { label: "Inscripciones online", value: "3.5K+" },
    ],
    techs: ["WordPress", "Social Media APIs", "Google Analytics", "Mailchimp"],
  },
  {
    title: "Landing Page - Campaña Digital",
    category: "Marketing Digital",
    url: "https://hsec-peru.com/",
    description:
      "Landing page de alta conversión para campaña publicitaria con diseño enfocado en CTAs, formularios optimizados, integración con CRM y tracking avanzado de conversiones. A/B testing y optimización continua de rendimiento.",
    stats: [
      { label: "Tasa conversión", value: "14.2%" },
      { label: "CTR anuncios", value: "9.1%" },
      { label: "ROI campaña", value: "6.3x" },
    ],
    techs: ["HTML/CSS", "JavaScript", "Google Ads", "Facebook Pixel"],
  },
  {
    title: "Sistema de Gestión Académica",
    category: "Software Empresarial",
    url: "https://andesultra.com/",
    description:
      "Sistema web para gestión de matrículas, notas, asistencia y reportes académicos. Incluye módulos para estudiantes, docentes y administración con roles personalizados y generación automática de certificados.",
    stats: [
      { label: "Estudiantes gestionados", value: "1.5K+" },
      { label: "Tiempo ahorro admin", value: "55%" },
      { label: "Satisfacción usuarios", value: "4.8/5" },
    ],
    techs: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
];

/* ───────────── Project Card ───────────── */
function ProjectCard({
  project,
  index,
  visible,
  onClick,
}: {
  project: Project;
  index: number;
  visible: boolean;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden transition-all duration-500 cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${(index % 4) * 100}ms`,
      }}
    >
      {/* Glow border on hover */}
      <div
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: "linear-gradient(135deg, #DC0000, #8B0000, #FF4444)",
          filter: "blur(1px)",
        }}
      />

      {/* Card content */}
      <div
        className="relative z-[1] rounded-xl overflow-hidden"
        style={{ background: "rgba(4, 16, 32, 0.95)" }}
      >
        {/* Iframe Preview */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <div
            className="w-[1280px] h-[960px] origin-top-left pointer-events-none"
            style={{ transform: "scale(0.234375)" }}
          >
            <iframe
              src={project.url}
              title={project.title}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>

          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(1,55,149,0.85), rgba(91,47,184,0.85))",
            }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-bold tracking-wider uppercase font-[family-name:var(--font-montserrat)]"
              style={{
                background: "rgba(1, 253, 254, 0.15)",
                border: "1px solid rgba(1, 253, 254, 0.5)",
                color: "#DC0000",
              }}
            >
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Ver Detalle
            </span>
          </div>

          {/* Category tag */}
          <div
            className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 group-hover:opacity-0 font-[family-name:var(--font-montserrat)]"
            style={{
              background: "rgba(4, 16, 32, 0.8)",
              border: "1px solid rgba(1, 253, 254, 0.2)",
              color: "#DC0000",
              backdropFilter: "blur(8px)",
            }}
          >
            {project.category}
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-sm font-bold text-white group-hover:text-[#DC0000] transition-colors duration-300 font-[family-name:var(--font-montserrat)]">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <div
              className="h-[2px] w-0 group-hover:w-8 transition-all duration-500 rounded-full"
              style={{
                background: "linear-gradient(90deg, #DC0000, #8B0000)",
              }}
            />
            <span className="text-[11px] text-white/30 group-hover:text-white/50 transition-colors duration-300 font-[family-name:var(--font-open-sans)]">
              {project.url.replace("https://", "").replace(/\/$/, "")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Project Modal ───────────── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      style={{
        background: "rgba(2, 8, 16, 0.88)",
        backdropFilter: "blur(12px)",
        animation: "fadeIn 0.3s ease-out",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl"
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #061020 50%, #0a0e1a 100%)",
          border: "1px solid rgba(1, 253, 254, 0.1)",
          animation: "scaleIn 0.35s ease-out",
        }}
      >
        {/* Top glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, #DC0000, #8B0000, #FF4444, transparent)",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(253,103,235,0.2)";
            e.currentTarget.style.borderColor = "rgba(253,103,235,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          <svg
            className="h-4 w-4 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="mb-4">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-2"
              style={{
                background: "rgba(1, 253, 254, 0.06)",
                border: "1px solid rgba(1, 253, 254, 0.15)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ background: "#DC0000" }}
              />
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)]"
                style={{ color: "#DC0000" }}
              >
                {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-[family-name:var(--font-montserrat)]">
              {project.title}
            </h3>
          </div>

          {/* Live preview iframe */}
          <div
            className="relative rounded-xl overflow-hidden mb-5"
            style={{
              border: "1px solid rgba(1, 253, 254, 0.1)",
            }}
          >
            {/* Browser chrome bar */}
            <div
              className="flex items-center gap-3 px-4 py-2.5"
              style={{
                background: "rgba(4, 16, 32, 0.9)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
              </div>
              <div
                className="flex-1 flex items-center gap-2 rounded-md px-3 py-1 text-[11px] text-white/40 font-[family-name:var(--font-open-sans)]"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <svg
                  className="h-3 w-3 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                {project.url}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-[#DC0000]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Abrir
              </a>
            </div>

            {/* Iframe */}
            <div className="relative w-full" style={{ height: "300px" }}>
              <iframe
                src={project.url}
                title={`Preview de ${project.title}`}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* Description + Stats row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Description */}
            <div className="lg:col-span-3">
              <h4
                className="text-[11px] font-bold tracking-[0.15em] uppercase mb-2 font-[family-name:var(--font-montserrat)]"
                style={{ color: "#DC0000" }}
              >
                Descripción del Proyecto
              </h4>
              <p className="text-[13px] leading-6 text-white/50 font-[family-name:var(--font-open-sans)]">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase font-[family-name:var(--font-montserrat)]"
                    style={{
                      background: "rgba(91, 47, 184, 0.12)",
                      border: "1px solid rgba(91, 47, 184, 0.25)",
                      color: "rgba(253, 103, 235, 0.7)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="lg:col-span-2">
              <h4
                className="text-[11px] font-bold tracking-[0.15em] uppercase mb-2 font-[family-name:var(--font-montserrat)]"
                style={{ color: "#DC0000" }}
              >
                Resultados Clave
              </h4>
              <div className="grid gap-2">
                {project.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3 flex items-center justify-between"
                    style={{
                      background: "rgba(1, 253, 254, 0.03)",
                      border: "1px solid rgba(1, 253, 254, 0.08)",
                    }}
                  >
                    <span className="text-[11px] text-white/40 font-[family-name:var(--font-open-sans)]">
                      {stat.label}
                    </span>
                    <span
                      className="text-base font-extrabold font-[family-name:var(--font-montserrat)]"
                      style={{
                        background:
                          "linear-gradient(135deg, #DC0000, #8B0000)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 font-[family-name:var(--font-montserrat)] overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #DC0000, #8B0000)",
              }}
            >
              <span className="relative z-10 text-white">Visitar Sitio Web</span>
              <svg
                className="relative z-10 h-3.5 w-3.5 text-white transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(135deg, #8B0000, #FF4444)",
                }}
              />
            </a>

            <a
              href="#contactanos"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 font-[family-name:var(--font-montserrat)]"
              style={{
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(1, 253, 254, 0.15)",
                background: "rgba(1, 253, 254, 0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(1, 253, 254, 0.4)";
                e.currentTarget.style.color = "#DC0000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(1, 253, 254, 0.15)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              Quiero algo similar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Main Section ───────────── */
export default function Proyectos() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section id="proyectos" className="relative py-20 overflow-hidden">
        {/* Background ambient glows - mejorados */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[500px] opacity-20 pointer-events-none animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, #DC0000 0%, #8B0000 40%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[500px] h-[400px] opacity-18 pointer-events-none animate-pulse-slower"
          style={{
            background: "radial-gradient(circle, #FF4444 0%, #DC0000 30%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-12 pointer-events-none animate-spin-very-slow"
          style={{
            background: "conic-gradient(from 0deg, transparent, #DC0000, transparent 180deg, #8B0000, transparent)",
            filter: "blur(140px)",
          }}
        />

        <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex justify-center mb-3">
              <span
                className="text-[10px] font-semibold tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
                style={{ color: "#DC0000" }}
              >
                Portafolio
              </span>
            </div>

            <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
              <span className="text-white">NUESTROS </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #DC0000, #8B0000, #FF4444)",
                }}
              >
                PROYECTOS
              </span>
            </h2>

            <div
              className="mx-auto mt-4 mb-6 h-[2px] w-12"
              style={{ background: "linear-gradient(90deg, #DC0000, #8B0000)" }}
            />

            <p className="mx-auto max-w-xl text-center text-sm leading-6 text-white/40 sm:text-base font-[family-name:var(--font-open-sans)]">
              Cada proyecto refleja nuestra pasión por el diseño estratégico y los
              resultados medibles.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                index={i}
                visible={i < 4 || showAll}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* "Ver más" button */}
          {!showAll && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="group relative inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[13px] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 font-[family-name:var(--font-montserrat)] overflow-hidden cursor-pointer"
                style={{
                  border: "1px solid rgba(1, 253, 254, 0.2)",
                  background: "rgba(1, 253, 254, 0.04)",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(1, 253, 254, 0.5)";
                  e.currentTarget.style.color = "#DC0000";
                  e.currentTarget.style.background = "rgba(1, 253, 254, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(1, 253, 254, 0.2)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.background = "rgba(1, 253, 254, 0.04)";
                }}
              >
                <div
                  className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, #DC0000, #8B0000)",
                  }}
                />
                <span className="relative z-10">Ver más proyectos</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}
