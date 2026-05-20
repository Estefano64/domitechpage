"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    short: "Web",
    description:
      "Creamos páginas web modernas, rápidas y optimizadas para tu negocio. Desde sitios corporativos hasta landing pages de alta conversión, diseñamos experiencias digitales que generan resultados. Responsive, seguros y fáciles de administrar.",
    highlights: ["Diseño responsive", "Velocidad optimizada", "SEO incluido"],
    icon: (
      <img src="/Iconos-servicios/desarrolloWeb.png" alt="Desarrollo Web" className="w-full h-full object-contain" />
    ),
  },
  {
    id: "tiendas-online",
    title: "Tiendas Online",
    short: "E-commerce",
    description:
      "Lanza tu tienda online y comienza a vender 24/7. Configuramos tiendas en Shopify, WooCommerce y plataformas personalizadas con pasarelas de pago, gestión de inventario y diseño optimizado para conversión. Tu negocio sin límites físicos.",
    highlights: ["Pasarelas de pago locales", "Gestión de inventario", "Envíos integrados"],
    icon: (
      <img src="/Iconos-servicios/ecommerce.png" alt="Tiendas Online" className="w-full h-full object-contain" />
    ),
  },
  {
    id: "redes-sociales",
    title: "Gestión de Redes",
    short: "Social Media",
    description:
      "Creamos y gestionamos tus perfiles en Facebook, Instagram, TikTok, LinkedIn y más. Desde la configuración inicial hasta la creación de contenido estratégico, programación de posts y análisis de métricas. Construimos tu comunidad digital.",
    highlights: ["Contenido estratégico", "Community Manager", "Reportes mensuales"],
    icon: (
      <img src="/Iconos-servicios/redes-sociales.png" alt="Gestión de Redes Sociales" className="w-full h-full object-contain" />
    ),
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital",
    short: "Marketing",
    description:
      "Estrategias digitales completas que generan resultados medibles. Campañas en redes sociales, Google Ads, content marketing y automatización. Aumentamos tu visibilidad, atraemos clientes potenciales y mejoramos tu retorno de inversión.",
    highlights: ["Meta & Google Ads", "Email marketing", "Análisis de ROI"],
    icon: (
      <img src="/Iconos-servicios/MarketingDigital.png" alt="Marketing Digital" className="w-full h-full object-contain" />
    ),
  },
  {
    id: "optimizacion-seo",
    title: "Optimización SEO",
    short: "SEO",
    description:
      "Mejora tu posicionamiento en Google y atrae tráfico orgánico de calidad. Optimizamos tu sitio web, creamos contenido estratégico y trabajamos en la autoridad de tu dominio. Resultados sostenibles que aumentan tus ventas.",
    highlights: ["SEO local Arequipa", "Keyword research", "Auditorías técnicas"],
    icon: (
      <img src="/Iconos-servicios/SEO.png" alt="Optimización SEO" className="w-full h-full object-contain" />
    ),
  },
];

const WHATSAPP_NUMBER = "51915961315";

function whatsappLink(title: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero solicitar más información sobre el servicio de ${title}`
  )}`;
}

export default function Servicios() {
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const closeModal = useCallback(() => setSelected(null), []);

  /* Lock scroll + ESC */
  useEffect(() => {
    if (selected === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, closeModal]);

  /* Track scroll position for arrow visibility */
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-service-card]");
    const cardW = card ? card.offsetWidth + 16 : 280;
    el.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };

  return (
    <>
      <section
        id="servicios"
        className="relative py-16 sm:py-20 overflow-hidden bg-[var(--color-bg-primary)]"
      >
        {/* Ambient glow */}
        <div
          className="absolute top-1/4 right-0 w-[700px] h-[500px] pointer-events-none animate-pulse-slow"
          style={{
            background: "radial-gradient(ellipse, var(--color-accent-base) 0%, transparent 70%)",
            filter: "blur(120px)",
            opacity: 0.05,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-center mb-3">
            <span className="text-accent-mype text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
              Lo que hacemos
            </span>
          </div>
          <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
            <span className="text-[var(--color-text-primary)]">CONOCE NUESTROS </span>
            <span className="text-[var(--color-cta-base)]">SERVICIOS</span>
          </h2>
          <div className="mx-auto mt-4 mb-6 h-[2px] w-12" style={{ background: "var(--color-cta-base)" }} />
          <p className="mx-auto max-w-xl text-center text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base mb-10 font-[family-name:var(--font-open-sans)]">
            Te ofrecemos los servicios esenciales para hacer crecer tu negocio y alcanzar tus objetivos.
          </p>

          {/* Carousel */}
          <div className="relative">
            {/* Prev arrow */}
            <button
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollLeft}
              aria-label="Servicio anterior"
              className="hidden md:flex absolute -left-3 lg:-left-5 top-1/2 z-20 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-[var(--color-border)] transition-all duration-300 hover:bg-[var(--color-cta-base)] hover:text-white hover:scale-110 disabled:opacity-0 disabled:pointer-events-none"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={() => scrollByCard(1)}
              disabled={!canScrollRight}
              aria-label="Siguiente servicio"
              className="hidden md:flex absolute -right-3 lg:-right-5 top-1/2 z-20 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-[var(--color-border)] transition-all duration-300 hover:bg-[var(--color-cta-base)] hover:text-white hover:scale-110 disabled:opacity-0 disabled:pointer-events-none"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable track */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar { display: none; }
              `}</style>

              {SERVICES.map((service, i) => (
                <button
                  key={service.id}
                  data-service-card
                  onClick={() => setSelected(i)}
                  className="group flex-shrink-0 snap-start w-[78%] sm:w-[46%] md:w-[31%] lg:w-[23%] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta-base)] rounded-2xl"
                  aria-label={`Ver detalles de ${service.title}`}
                >
                  <div
                    className="relative h-full overflow-hidden rounded-2xl bg-white border border-[var(--color-border)] p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-[var(--color-cta-base)] cursor-pointer"
                  >
                    {/* Top accent gradient on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--color-cta-base), var(--color-cta-hover))",
                      }}
                    />

                    {/* Icon */}
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-5 rounded-2xl bg-[var(--color-bg-alt)] p-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-cta-base)]/5">
                      <div className="w-full h-full text-[var(--color-cta-base)]">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-center text-base sm:text-lg font-extrabold text-[var(--color-text-primary)] mb-2 font-[family-name:var(--font-montserrat)] group-hover:text-[var(--color-cta-base)] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Short description */}
                    <p className="text-center text-[12px] sm:text-[13px] leading-5 text-[var(--color-text-secondary)] mb-4 font-[family-name:var(--font-open-sans)] line-clamp-3">
                      {service.description.split(".")[0]}.
                    </p>

                    {/* "Ver más" indicator */}
                    <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-cta-base)] font-[family-name:var(--font-montserrat)] transition-all duration-300 group-hover:gap-3">
                      Ver más
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile pagination dots */}
            <div className="flex md:hidden justify-center gap-1.5 mt-4">
              {SERVICES.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[var(--color-border)]"
                />
              ))}
            </div>
          </div>

          {/* Mobile hint */}
          <p className="md:hidden text-center text-[11px] text-[var(--color-text-secondary)]/70 mt-3 font-[family-name:var(--font-open-sans)]">
            ← Desliza para ver más servicios →
          </p>
        </div>
      </section>

      {/* ====== MODAL ====== */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 animate-[fadeIn_0.2s_ease-out]"
            style={{ background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(8px)" }}
          />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto animate-[scaleIn_0.3s_ease-out] rounded-2xl bg-white shadow-2xl"
            style={{ border: "1px solid var(--color-border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close (X) - fixed top right, always visible */}
            <button
              onClick={closeModal}
              aria-label="Cerrar"
              className="absolute top-3 right-3 z-20 h-9 w-9 rounded-full flex items-center justify-center bg-white shadow-md border border-[var(--color-border)] transition-all hover:bg-[var(--color-cta-base)] hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image side */}
              <div className="lg:col-span-2 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[var(--color-bg-alt)] to-white p-8 sm:p-10 min-h-[200px] sm:min-h-[280px] lg:min-h-[420px] border-b lg:border-b-0 lg:border-r border-[var(--color-border)]">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-[fadeIn_0.4s_ease-out]">
                  {SERVICES[selected].icon}
                </div>
                {/* Decorative dots */}
                <div className="absolute top-6 left-6 h-2 w-2 rounded-full bg-[var(--color-cta-base)]/30" />
                <div className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-[var(--color-cta-base)]/30" />
              </div>

              {/* Text side */}
              <div className="lg:col-span-3 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-cta-base)] mb-3 font-[family-name:var(--font-montserrat)] animate-[slideRight_0.3s_ease-out]">
                  Nuestros Servicios
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-text-primary)] mb-4 font-[family-name:var(--font-montserrat)] animate-[slideRight_0.4s_ease-out]">
                  {SERVICES[selected].title}
                </h3>
                <div
                  className="h-[2px] w-12 mb-5 animate-[slideRight_0.5s_ease-out]"
                  style={{ background: "var(--color-cta-base)" }}
                />
                <p className="text-sm leading-7 text-[var(--color-text-secondary)] mb-5 font-[family-name:var(--font-open-sans)] animate-[slideRight_0.5s_ease-out]">
                  {SERVICES[selected].description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-7 animate-[slideRight_0.6s_ease-out]">
                  {SERVICES[selected].highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-open-sans)]">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[var(--color-cta-base)]/10 flex items-center justify-center">
                        <svg className="h-3 w-3 text-[var(--color-cta-base)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 animate-[slideRight_0.7s_ease-out]">
                  <a
                    href={whatsappLink(SERVICES[selected].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 font-[family-name:var(--font-montserrat)]"
                    style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Solicitar por WhatsApp
                  </a>
                  <a
                    href="#contactanos"
                    onClick={closeModal}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold uppercase tracking-wider border-2 border-[var(--color-border)] text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-cta-base)] hover:text-[var(--color-cta-base)] font-[family-name:var(--font-montserrat)]"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom services nav */}
            <div className="px-4 py-3 sm:py-4 overflow-x-auto bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              <div className="flex justify-start sm:justify-center gap-3 sm:gap-5 min-w-max">
                {SERVICES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setSelected(i)}
                    className={`whitespace-nowrap text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 font-[family-name:var(--font-montserrat)] ${
                      i === selected
                        ? "text-[var(--color-cta-base)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    &gt; {s.short}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
