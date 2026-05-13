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
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "tiendas-online",
    title: "Tiendas Online (Shopify & E-commerce)",
    short: "E-commerce",
    description:
      "Lanza tu tienda online y comienza a vender 24/7. Configuramos tiendas en Shopify, WooCommerce y plataformas personalizadas con pasarelas de pago, gestión de inventario y diseño optimizado para conversión. Tu negocio sin límites físicos.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    id: "diseno-grafico",
    title: "Diseño Gráfico",
    short: "Diseño",
    description:
      "Flyers, banners, posts para redes sociales, brochures y todo el material gráfico que tu marca necesita. Diseños profesionales que comunican tu mensaje de forma clara, atractiva y alineada con tu identidad visual. Listo para imprimir o publicar.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: "edicion-video",
    title: "Edición de Video",
    short: "Video",
    description:
      "Transformamos tu contenido en videos profesionales que captan la atención. Edición para redes sociales, publicidad, testimoniales, reels y YouTube. Efectos visuales, motion graphics, subtítulos y música que hacen destacar tu mensaje.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: "redes-sociales",
    title: "Gestión de Redes Sociales",
    short: "Social Media",
    description:
      "Creamos y gestionamos tus perfiles en Facebook, Instagram, TikTok, LinkedIn y más. Desde la configuración inicial hasta la creación de contenido estratégico, programación de posts y análisis de métricas. Construimos tu comunidad digital.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    id: "google-maps",
    title: "Google Maps & Google My Business",
    short: "Google Maps",
    description:
      "Pon tu negocio en el mapa. Configuramos y optimizamos tu ficha de Google My Business para que tus clientes te encuentren fácilmente. Gestión de reseñas, fotos, horarios y toda la información que impulsa tu visibilidad local.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital",
    short: "Marketing",
    description:
      "Estrategias digitales completas que generan resultados medibles. Campañas en redes sociales, Google Ads, content marketing y automatización. Aumentamos tu visibilidad, atraemos clientes potenciales y mejoramos tu retorno de inversión.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
  {
    id: "optimizacion-seo",
    title: "Optimización SEO",
    short: "SEO",
    description:
      "Mejora tu posicionamiento en Google y atrae tráfico orgánico de calidad. Optimizamos tu sitio web, creamos contenido estratégico y trabajamos en la autoridad de tu dominio. Resultados sostenibles que aumentan tus ventas.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
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
        background: "radial-gradient(circle, rgba(220,0,0,0.4), transparent)",
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
        className="relative py-16 sm:py-20 overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        {/* Ambient glows - más intensos y animados */}
        <div
          className="absolute top-1/4 right-0 w-[700px] h-[500px] pointer-events-none animate-pulse-slow"
          style={{
            background: "radial-gradient(ellipse, #DC0000 0%, #8B0000 30%, transparent 70%)",
            filter: "blur(120px)",
            opacity: 0.2,
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[600px] h-[400px] pointer-events-none animate-pulse-slower"
          style={{
            background: "radial-gradient(ellipse, #FF4444 0%, #DC0000 30%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.18,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none animate-spin-very-slow"
          style={{
            background: "conic-gradient(from 0deg, transparent, #DC0000, transparent 180deg, #8B0000, transparent)",
            filter: "blur(150px)",
            opacity: 0.12,
          }}
        />
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #DC0000 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.04,
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
              className="text-[10px] font-semibold tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
              style={{ color: "#DC0000" }}
            >
              Lo que hacemos
            </span>
          </div>
          <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
            <span className="text-white">CONOCE NUESTROS </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #DC0000, #8B0000, #FF4444)",
              }}
            >
              SERVICIOS
            </span>
          </h2>
          <div
            className="mx-auto mt-4 mb-6 h-[2px] w-12"
            style={{ background: "linear-gradient(90deg, #DC0000, #8B0000)" }}
          />
          <p className="mx-auto max-w-xl text-center text-sm leading-6 text-white/40 sm:text-base font-[family-name:var(--font-open-sans)]">
            Te ofrecemos los servicios esenciales para hacer crecer tu negocio y
            alcanzar tus objetivos.
          </p>

          {/* Master Container */}
          <div className="relative mt-10">
            {/* Animated glowing border (behind) */}
            <div
              className="absolute -inset-[1px] rounded-2xl animate-[borderGlow_4s_ease-in-out_infinite] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #DC0000, #8B0000, #FF4444, #DC0000, #DC0000)",
                backgroundSize: "300% 300%",
                opacity: 0.5,
              }}
            />
            {/* Blurred glow shadow copy */}
            <div
              className="absolute -inset-[1px] rounded-2xl animate-[borderGlow_4s_ease-in-out_infinite] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #DC0000, #8B0000, #FF4444, #DC0000, #DC0000)",
                backgroundSize: "300% 300%",
                opacity: 0.25,
                filter: "blur(12px)",
              }}
            />

            {/* Inner container */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ background: "rgba(10, 22, 40, 0.9)" }}
            >

            {/* Carousel */}
            <div className="relative py-6">
              {/* Prev */}
              <button
                onClick={() => scrollByCard(-1)}
                className="absolute left-1.5 sm:left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:border-[#DC0000]/40 hover:shadow-[0_0_15px_rgba(220,0,0,0.15)]"
                style={{
                  background: "rgba(10, 10, 10, 0.8)",
                  border: "1px solid rgba(220, 0, 0, 0.15)",
                }}
                aria-label="Anterior"
              >
                <svg className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={() => scrollByCard(1)}
                className="absolute right-1.5 sm:right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:border-[#DC0000]/40 hover:shadow-[0_0_15px_rgba(220,0,0,0.15)]"
                style={{
                  background: "rgba(10, 10, 10, 0.8)",
                  border: "1px solid rgba(220, 0, 0, 0.15)",
                }}
                aria-label="Siguiente"
              >
                <svg className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1a0505] via-[#0A0A0A] to-[#1a0000] flex items-center justify-center">
                        <div className="w-1/2 h-1/2 text-[#DC0000] transition-all duration-700 group-hover:scale-110 group-hover:text-[#FF4444] group-hover:drop-shadow-[0_0_20px_rgba(220,0,0,0.6)]">
                          {service.icon}
                        </div>

                        {/* Animated border glow on hover */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                          style={{
                            boxShadow:
                              "inset 0 0 30px rgba(220,0,0,0.1), 0 0 40px rgba(139,0,0,0.15), 0 0 80px rgba(220,0,0,0.05)",
                          }}
                        />

                        {/* Hover color sweep */}
                        <div
                          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(220,0,0,0.08) 0%, rgba(139,0,0,0.15) 50%, rgba(253,103,235,0.08) 100%)",
                          }}
                        />

                        {/* Bottom gradient */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(4,16,32,0.95) 0%, rgba(4,16,32,0.4) 35%, transparent 100%)",
                          }}
                        />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                          <h3 className="text-xs sm:text-sm font-bold text-white leading-tight font-[family-name:var(--font-montserrat)] transition-transform duration-300 group-hover:-translate-y-1">
                            {service.title}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-2 opacity-0 translate-y-3 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                            <span
                              className="h-[1px] w-5 transition-all duration-500 group-hover:w-8"
                              style={{ background: "#DC0000" }}
                            />
                            <span
                              className="text-[10px] font-semibold tracking-wider uppercase font-[family-name:var(--font-montserrat)]"
                              style={{ color: "#DC0000" }}
                            >
                              Explorar
                            </span>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="#DC0000" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        {/* Top accent corner */}
                        <div
                          className="absolute top-0 right-0 w-12 h-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(225deg, rgba(220,0,0,0.2) 0%, transparent 70%)",
                          }}
                        />
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
            style={{ background: "rgba(10, 10, 10, 0.92)", backdropFilter: "blur(12px)" }}
          />

          {/* Modal container */}
          <div
            className="relative z-10 w-full max-w-5xl animate-[scaleIn_0.3s_ease-out] overflow-hidden rounded-2xl"
            style={{
              background: "linear-gradient(160deg, #0c1a30, #081428)",
              border: "1px solid rgba(220, 0, 0, 0.1)",
              boxShadow: "0 0 80px rgba(139,0,0,0.15), 0 0 40px rgba(220,0,0,0.05)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] animate-glow-pulse"
              style={{
                background: "linear-gradient(90deg, transparent, #DC0000, #8B0000, #FF4444, transparent)",
              }}
            />

            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <span
                className="text-[10px] font-semibold tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
                style={{ color: "#DC0000" }}
              >
                Nuestros Servicios
              </span>
              <button
                onClick={closeModal}
                className="flex items-center gap-1.5 text-white/40 transition-colors hover:text-white font-[family-name:var(--font-montserrat)]"
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
                className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(1,55,149,0.12), rgba(139,0,0,0.12))",
                }}
              >
                <div className="w-1/2 h-1/2 text-[#DC0000] animate-[fadeIn_0.4s_ease-out] drop-shadow-[0_0_30px_rgba(220,0,0,0.5)]">
                  {SERVICES[selected].icon}
                </div>
                {/* Glow behind image */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(220,0,0,0.12), transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
              </div>

              {/* Text side */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 font-[family-name:var(--font-montserrat)] animate-[slideRight_0.4s_ease-out]">
                  {SERVICES[selected].title}
                </h3>
                <div
                  className="h-[2px] w-10 mb-5 animate-[slideRight_0.5s_ease-out]"
                  style={{ background: "linear-gradient(90deg, #DC0000, #8B0000)" }}
                />
                <p className="text-sm leading-7 text-white/40 mb-8 font-[family-name:var(--font-open-sans)] animate-[slideRight_0.5s_ease-out]">
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
              className="px-4 py-4 overflow-x-auto"
              style={{ background: "rgba(10, 10, 10, 0.9)", borderTop: "1px solid rgba(220,0,0,0.06)" }}
            >
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-5">
                {SERVICES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setSelected(i)}
                    className={`whitespace-nowrap text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 font-[family-name:var(--font-montserrat)] ${
                      i === selected
                        ? "text-[#DC0000] drop-shadow-[0_0_6px_rgba(220,0,0,0.4)]"
                        : "text-white/25 hover:text-white/50"
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
