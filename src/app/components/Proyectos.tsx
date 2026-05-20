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
      className="group relative rounded-xl overflow-hidden transition-all duration-500 cursor-pointer bg-[var(--color-bg-alt)] border border-[var(--color-border)] shadow-sm hover:shadow-md"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${(index % 4) * 100}ms`,
      }}
    >
      {/* Card content */}
      <div
        className="relative z-[1] rounded-xl overflow-hidden"
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
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-bold tracking-wider uppercase font-[family-name:var(--font-montserrat)] bg-white text-[var(--color-cta-base)] shadow-lg"
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
            className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 group-hover:opacity-0 font-[family-name:var(--font-montserrat)] bg-white/90 border border-[var(--color-border)] text-[var(--color-text-primary)] backdrop-blur-sm shadow-sm"
          >
            {project.category}
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-cta-base)] transition-colors duration-300 font-[family-name:var(--font-montserrat)]">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <div
              className="h-[2px] w-0 group-hover:w-8 transition-all duration-500 rounded-full bg-[var(--color-cta-base)]"
            />
            <span className="text-[11px] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 font-[family-name:var(--font-open-sans)]">
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
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        animation: "fadeIn 0.3s ease-out",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-2xl"
        style={{
          animation: "scaleIn 0.35s ease-out",
        }}
      >
        {/* Top glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-10 bg-[var(--color-cta-base)]"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer bg-[var(--color-bg-alt)] border border-[var(--color-border)] hover:bg-slate-100"
        >
          <svg
            className="h-4 w-4 text-[var(--color-text-secondary)]"
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
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-2 bg-[var(--color-bg-alt)] border border-[var(--color-border)]"
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse bg-[var(--color-cta-base)]"
              />
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[var(--color-accent-base)]"
              >
                {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--color-text-primary)] font-[family-name:var(--font-montserrat)]">
              {project.title}
            </h3>
          </div>

          {/* Live preview iframe */}
          <div
            className="relative rounded-xl overflow-hidden mb-5 border border-[var(--color-border)]"
          >
            {/* Browser chrome bar */}
            <div
              className="flex items-center gap-3 px-4 py-2.5 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]"
            >
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
              </div>
              <div
                className="flex-1 flex items-center gap-2 rounded-md px-3 py-1 text-[11px] text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)] bg-white border border-[var(--color-border)] shadow-inner"
              >
                <svg
                  className="h-3 w-3 text-slate-400"
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
                className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider transition-colors duration-200 text-[var(--color-text-secondary)] hover:text-[var(--color-cta-base)]"
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
                className="text-[11px] font-bold tracking-[0.15em] uppercase mb-2 font-[family-name:var(--font-montserrat)] text-[var(--color-cta-base)]"
              >
                Descripción del Proyecto
              </h4>
              <p className="text-[13px] leading-6 text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)]">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase font-[family-name:var(--font-montserrat)] bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text-primary)] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="lg:col-span-2">
              <h4
                className="text-[11px] font-bold tracking-[0.15em] uppercase mb-2 font-[family-name:var(--font-montserrat)] text-[var(--color-cta-base)]"
              >
                Resultados Clave
              </h4>
              <div className="grid gap-2">
                {project.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3 flex items-center justify-between bg-[var(--color-bg-alt)] border border-[var(--color-border)] shadow-sm"
                  >
                    <span className="text-[11px] text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)]">
                      {stat.label}
                    </span>
                    <span
                      className="text-base font-extrabold font-[family-name:var(--font-montserrat)] text-[var(--color-cta-base)]"
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
              className="btn-primary-mype gap-2"
            >
              <span>Visitar Sitio Web</span>
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href="#contactanos"
              onClick={onClose}
              className="btn-secondary-mype gap-2 w-full sm:w-auto"
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section id="proyectos" className="relative py-20 overflow-hidden bg-[var(--color-bg-primary)]">
        {/* Background ambient glows - suaves */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[500px] opacity-5 pointer-events-none animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, var(--color-accent-base) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex justify-center mb-3">
              <span
                className="text-accent-mype text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
              >
                Portafolio
              </span>
            </div>

            <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
              <span className="text-[var(--color-text-primary)]">NUESTROS </span>
              <span
                className="text-[var(--color-cta-base)]"
              >
                PROYECTOS
              </span>
            </h2>

            <div
              className="mx-auto mt-4 mb-6 h-[2px] w-12"
              style={{ background: "var(--color-cta-base)" }}
            />

            <p className="mx-auto max-w-xl text-center text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base font-[family-name:var(--font-open-sans)]">
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
                visible={true}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}
