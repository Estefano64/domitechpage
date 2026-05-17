"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    short: "Web",
    description:
      "Creamos páginas web modernas, rápidas y optimizadas para tu negocio. Desde sitios corporativos hasta landing pages de alta conversión, diseñamos experiencias digitales que generan resultados. Responsive, seguros y fáciles de administrar.",
    icon: (
      <img src="/Iconos-servicios/desarrolloWeb.png" alt="Desarrollo Web" className="w-full h-full object-contain" />
    ),
  },
  {
    id: "tiendas-online",
    title: "Tiendas Online (Shopify & E-commerce)",
    short: "E-commerce",
    description:
      "Lanza tu tienda online y comienza a vender 24/7. Configuramos tiendas en Shopify, WooCommerce y plataformas personalizadas con pasarelas de pago, gestión de inventario y diseño optimizado para conversión. Tu negocio sin límites físicos.",
    icon: (
      <img src="/Iconos-servicios/ecommerce.png" alt="Tiendas Online" className="w-full h-full object-contain" />
    ),
  },
  {
    id: "redes-sociales",
    title: "Gestión de Redes Sociales",
    short: "Social Media",
    description:
      "Creamos y gestionamos tus perfiles en Facebook, Instagram, TikTok, LinkedIn y más. Desde la configuración inicial hasta la creación de contenido estratégico, programación de posts y análisis de métricas. Construimos tu comunidad digital.",
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

/* ─── Floating particle for decoration ─── */
function Particle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none animate-[float_6s_ease-in-out_infinite]"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: "-10px",
        background: "radial-gradient(circle, var(--color-accent-base), transparent)",
        opacity: 0.2,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function Servicios() {
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState(4);

  const closeModal = useCallback(() => {
    setSelected(null);
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 768) setVisible(2);
      else if (window.innerWidth < 1024) setVisible(3);
      else setVisible(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Lock body scroll & ESC key when modal open */
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

  /* ─── Drag-scroll carousel ─── */
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragMoved = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragMoved.current = false;
    startX.current = e.clientX;
    scrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
    el.style.scrollSnapType = "none";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 4) dragMoved.current = true;
    scrollRef.current.scrollLeft = scrollLeft.current - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.releasePointerCapture(e.pointerId);
    scrollRef.current.style.cursor = "grab";
    scrollRef.current.style.scrollSnapType = "x mandatory";
  };

  const scrollByCard = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.firstElementChild?.firstElementChild
      ? (el.firstElementChild.firstElementChild as HTMLElement).offsetWidth
      : 260;
    el.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };

  return (
    <>
      <section
        id="servicios"
        className="relative py-16 sm:py-20 overflow-hidden bg-[var(--color-bg-primary)]"
      >
        {/* Ambient glows - suaves */}
        <div
          className="absolute top-1/4 right-0 w-[700px] h-[500px] pointer-events-none animate-pulse-slow"
          style={{
            background: "radial-gradient(ellipse, var(--color-accent-base) 0%, transparent 70%)",
            filter: "blur(120px)",
            opacity: 0.05,
          }}
        />

        {/* Floating particles */}
        <Particle delay={0} x={15} size={4} />
        <Particle delay={1.5} x={35} size={3} />
        <Particle delay={3} x={55} size={5} />
        <Particle delay={0.8} x={75} size={3} />
        <Particle delay={2.2} x={90} size={4} />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-center mb-3">
            <span
              className="text-accent-mype text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
            >
              Lo que hacemos
            </span>
          </div>
          <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
            <span className="text-[var(--color-text-primary)]">CONOCE NUESTROS </span>
            <span
              className="text-[var(--color-cta-base)]"
            >
              SERVICIOS
            </span>
          </h2>
          <div
            className="mx-auto mt-4 mb-6 h-[2px] w-12"
            style={{ background: "var(--color-cta-base)" }}
          />
          <p className="mx-auto max-w-xl text-center text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base font-[family-name:var(--font-open-sans)]">
            Te ofrecemos los servicios esenciales para hacer crecer tu negocio y
            alcanzar tus objetivos.
          </p>

          {/* Master Container */}
          <div className="relative mt-10">
            {/* Inner container */}
            <div
              className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm bg-[var(--color-bg-alt)]"
            >

              {/* Carousel */}
              <div className="relative py-6">
                {/* Prev */}
                <button
                  onClick={() => scrollByCard(-1)}
                  className="absolute left-1.5 sm:left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:border-[var(--color-cta-base)] shadow-sm bg-white border border-[var(--color-border)]"
                  aria-label="Anterior"
                >
                  <svg className="h-4 w-4 text-[var(--color-text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next */}
                <button
                  onClick={() => scrollByCard(1)}
                  className="absolute right-1.5 sm:right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:border-[var(--color-cta-base)] shadow-sm bg-white border border-[var(--color-border)]"
                  aria-label="Siguiente"
                >
                  <svg className="h-4 w-4 text-[var(--color-text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Drag-scrollable cards */}
                <div
                  ref={scrollRef}
                  className="carousel-scroll flex gap-3 sm:gap-4 overflow-x-auto px-10 sm:px-14 pb-2 select-none"
                  style={{
                    cursor: "grab",
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerLeave={onPointerUp}
                >
                  {SERVICES.map((service, i) => (
                    <div
                      key={service.id}
                      className="flex-shrink-0"
                      style={{
                        width: `calc((100% - ${(visible - 1) * (visible > 2 ? 16 : 12)}px) / ${visible})`,
                        scrollSnapAlign: "start",
                      }}
                    >
                      <button
                        onClick={() => {
                          if (!dragMoved.current) setSelected(i);
                        }}
                        className="service-card group relative w-full overflow-hidden rounded-xl focus:outline-none"
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)]">
                          <div className="w-1/2 h-1/2 text-[var(--color-accent-base)] transition-all duration-700 group-hover:scale-110 group-hover:text-[var(--color-cta-base)]">
                            {service.icon}
                          </div>

                          {/* Bottom gradient */}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 35%, transparent 100%)",
                            }}
                          />

                          {/* Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                            <h3 className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] leading-tight font-[family-name:var(--font-montserrat)] transition-transform duration-300 group-hover:-translate-y-1">
                              {service.title}
                            </h3>
                          </div>

                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>{/* close inner container */}
          </div>{/* close master container */}
        </div>
      </section>

      {/* ====== SERVICE MODAL ====== */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 animate-[fadeIn_0.2s_ease-out]"
            style={{ background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(12px)" }}
          />

          {/* Modal container */}
          <div
            className="relative z-10 w-full max-w-5xl animate-[scaleIn_0.3s_ease-out] overflow-hidden rounded-2xl bg-white"
            style={{
              border: "1px solid var(--color-border)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-4 sm:px-8 border-b border-[var(--color-border)]">
              <span
                className="text-[10px] font-semibold tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] text-[var(--color-accent-base)]"
              >
                Nuestros Servicios
              </span>
              <button
                onClick={closeModal}
                className="flex items-center gap-1.5 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] font-[family-name:var(--font-montserrat)]"
              >
                <span className="text-[11px] font-semibold tracking-wider uppercase">
                  Volver
                </span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image side */}
              <div
                className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] overflow-hidden flex items-center justify-center bg-[var(--color-bg-alt)] border-r border-[var(--color-border)]"
              >
                <div className="w-1/2 h-1/2 text-[var(--color-cta-base)] animate-[fadeIn_0.4s_ease-out]">
                  {SERVICES[selected].icon}
                </div>
              </div>

              {/* Text side */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--color-text-primary)] mb-4 font-[family-name:var(--font-montserrat)] animate-[slideRight_0.4s_ease-out]">
                  {SERVICES[selected].title}
                </h3>
                <div
                  className="h-[2px] w-10 mb-5 animate-[slideRight_0.5s_ease-out]"
                  style={{ background: "var(--color-cta-base)" }}
                />
                <p className="text-sm leading-7 text-[var(--color-text-secondary)] mb-8 font-[family-name:var(--font-open-sans)] animate-[slideRight_0.5s_ease-out]">
                  {SERVICES[selected].description}
                </p>
                <a
                  href={whatsappLink(SERVICES[selected].title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 self-start rounded-full px-6 py-3 text-[13px] font-bold text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] font-[family-name:var(--font-montserrat)] animate-[slideRight_0.6s_ease-out]"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                  }}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar
                </a>
              </div>
            </div>

            {/* Bottom services bar */}
            <div
              className="px-4 py-4 overflow-x-auto bg-[var(--color-bg-alt)]"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-5">
                {SERVICES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setSelected(i)}
                    className={`whitespace-nowrap text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 font-[family-name:var(--font-montserrat)] ${i === selected
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
