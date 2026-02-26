"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    id: "desarrollo-software",
    title: "Desarrollo de Software",
    short: "Software",
    description:
      "Optimiza la gestión de tu negocio con software a la medida. Desarrollamos soluciones personalizadas para mejorar la eficiencia, automatizar procesos y potenciar tu productividad. Nuestro equipo de expertos diseña herramientas digitales adaptadas a las necesidades de tu empresa, asegurando un alto rendimiento y escalabilidad.",
    image: "/servicesimg/desarrollo-software.svg",
  },
  {
    id: "diseno-web",
    title: "Diseño Web",
    short: "Web",
    description:
      "Creación de sitios web modernos, rápidos y optimizados. Diseñamos y desarrollamos páginas web a la medida de tus necesidades, enfocándonos en la experiencia del usuario, el rendimiento y la seguridad. Ya sea un sitio corporativo, un eCommerce o una plataforma personalizada, garantizamos un desarrollo eficiente y adaptable a todos los dispositivos.",
    image: "/servicesimg/diseno-web.svg",
  },
  {
    id: "desarrollo-movil",
    title: "Desarrollo Móvil",
    short: "Móvil",
    description:
      "Lleva tu negocio a la palma de la mano de tus clientes con una app móvil intuitiva, funcional y optimizada. Diseñamos y desarrollamos aplicaciones para iOS y Android, asegurando una experiencia de usuario fluida y atractiva.",
    image: "/servicesimg/desarrollo-movil.svg",
  },
  {
    id: "diseno-ux-ui",
    title: "Diseño UX/UI",
    short: "UX/UI",
    description:
      "Cautiva a tus usuarios con un diseño UX/UI que transforma la experiencia digital. Creamos interfaces atractivas, intuitivas y funcionales que mejoran la navegación y optimizan la conversión. Un diseño bien pensado no solo embellece tu sitio o app, sino que también mejora la retención y fidelización de clientes.",
    image: "/servicesimg/diseno-ux-ui.svg",
  },
  {
    id: "optimizacion-seo",
    title: "Optimización SEO",
    short: "SEO",
    description:
      "Impulsa tu negocio al siguiente nivel con nuestro servicio de SEO. Aumenta tu visibilidad en Google y otros buscadores, atrae más tráfico orgánico a tu sitio web y convierte a más visitantes en clientes. Con nosotros, obtendrás un mayor retorno de inversión y consolidarás tu presencia online a largo plazo.",
    image: "/servicesimg/optimizacion-seo.svg",
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital",
    short: "Marketing",
    description:
      "Creamos y gestionamos estrategias digitales a medida que combinan creatividad, análisis y ejecución. Nuestro enfoque abarca redes sociales, medios pagados, diseño visual y gestión de comunidades, garantizando una presencia coherente, atractiva y orientada a resultados.",
    image: "/servicesimg/marketing-digital.svg",
  },
  {
    id: "community-manager",
    title: "Community Manager",
    short: "Community",
    description:
      "Haz que tu marca brille en redes sociales con una gestión profesional y estratégica. Creamos contenido de valor, respondemos a tu comunidad y analizamos métricas para mejorar el rendimiento de tus plataformas. Con una gestión efectiva, transformarás seguidores en clientes leales.",
    image: "/servicesimg/community-manager.svg",
  },
  {
    id: "branding",
    title: "Branding",
    short: "Branding",
    description:
      "Dale a tu marca la identidad que merece con una estrategia de branding poderosa. Desde la creación de logotipos hasta la definición de una personalidad única, nos encargamos de construir una imagen sólida y memorable. Desarrollamos la voz, los valores y la estética de tu marca.",
    image: "/servicesimg/branding.svg",
  },
  {
    id: "email-marketing",
    title: "E-mail Marketing",
    short: "Email",
    description:
      "Transforma tu lista de correos en una poderosa herramienta de conversión. Diseñamos campañas de email marketing personalizadas que fidelizan clientes y aumentan las ventas. Utilizamos estrategias de automatización, segmentación y contenido atractivo para garantizar que tus mensajes lleguen a la audiencia correcta.",
    image: "/servicesimg/email-marketing.svg",
  },
  {
    id: "produccion-foto-video",
    title: "Producción de Fotos y Videos",
    short: "Foto & Video",
    description:
      "Haz que tu marca cobre vida con contenido audiovisual de alto impacto. Producimos fotografías y videos profesionales que reflejan la esencia de tu negocio y captan la atención de tu audiencia. Desde sesiones de producto hasta videos promocionales.",
    image: "/servicesimg/produccion-foto-video.svg",
  },
  {
    id: "paid-media",
    title: "Paid Media",
    short: "Paid Media",
    description:
      "Gestionamos tus campañas publicitarias en Meta Ads, Google Ads, TikTok Ads y LinkedIn Ads. Optimizamos cada peso invertido para maximizar tu alcance, generar leads cualificados y aumentar tus ventas con estrategias basadas en datos.",
    image: "/servicesimg/paid-media.svg",
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
        background: "radial-gradient(circle, rgba(1,253,254,0.4), transparent)",
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
        style={{ background: "#041020" }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #5B2FB8 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.07,
          }}
        />
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #01FDFE 0%, transparent 70%)",
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
              style={{ color: "#01FDFE" }}
            >
              Lo que hacemos
            </span>
          </div>
          <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
            <span className="text-white">CONOCE NUESTROS </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #01FDFE, #5B2FB8, #FD67EB)",
              }}
            >
              SERVICIOS
            </span>
          </h2>
          <div
            className="mx-auto mt-4 mb-6 h-[2px] w-12"
            style={{ background: "linear-gradient(90deg, #01FDFE, #5B2FB8)" }}
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
                  "linear-gradient(135deg, #01FDFE, #5B2FB8, #FD67EB, #013795, #01FDFE)",
                backgroundSize: "300% 300%",
                opacity: 0.5,
              }}
            />
            {/* Blurred glow shadow copy */}
            <div
              className="absolute -inset-[1px] rounded-2xl animate-[borderGlow_4s_ease-in-out_infinite] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #01FDFE, #5B2FB8, #FD67EB, #013795, #01FDFE)",
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
                className="absolute left-1.5 sm:left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:border-[#01FDFE]/40 hover:shadow-[0_0_15px_rgba(1,253,254,0.15)]"
                style={{
                  background: "rgba(4, 16, 32, 0.8)",
                  border: "1px solid rgba(1, 253, 254, 0.15)",
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
                className="absolute right-1.5 sm:right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:border-[#01FDFE]/40 hover:shadow-[0_0_15px_rgba(1,253,254,0.15)]"
                style={{
                  background: "rgba(4, 16, 32, 0.8)",
                  border: "1px solid rgba(1, 253, 254, 0.15)",
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
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                          draggable={false}
                        />

                        {/* Animated border glow on hover */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                          style={{
                            boxShadow:
                              "inset 0 0 30px rgba(1,253,254,0.1), 0 0 40px rgba(91,47,184,0.15), 0 0 80px rgba(1,253,254,0.05)",
                          }}
                        />

                        {/* Hover color sweep */}
                        <div
                          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(1,253,254,0.08) 0%, rgba(91,47,184,0.15) 50%, rgba(253,103,235,0.08) 100%)",
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
                              style={{ background: "#01FDFE" }}
                            />
                            <span
                              className="text-[10px] font-semibold tracking-wider uppercase font-[family-name:var(--font-montserrat)]"
                              style={{ color: "#01FDFE" }}
                            >
                              Explorar
                            </span>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="#01FDFE" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        {/* Top accent corner */}
                        <div
                          className="absolute top-0 right-0 w-12 h-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(225deg, rgba(1,253,254,0.2) 0%, transparent 70%)",
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
            style={{ background: "rgba(4, 16, 32, 0.92)", backdropFilter: "blur(12px)" }}
          />

          {/* Modal container */}
          <div
            className="relative z-10 w-full max-w-5xl animate-[scaleIn_0.3s_ease-out] overflow-hidden rounded-2xl"
            style={{
              background: "linear-gradient(160deg, #0c1a30, #081428)",
              border: "1px solid rgba(1, 253, 254, 0.1)",
              boxShadow: "0 0 80px rgba(91,47,184,0.15), 0 0 40px rgba(1,253,254,0.05)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] animate-glow-pulse"
              style={{
                background: "linear-gradient(90deg, transparent, #01FDFE, #5B2FB8, #FD67EB, transparent)",
              }}
            />

            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <span
                className="text-[10px] font-semibold tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
                style={{ color: "#01FDFE" }}
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
                className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(1,55,149,0.12), rgba(91,47,184,0.12))",
                }}
              >
                <Image
                  src={SERVICES[selected].image}
                  alt={SERVICES[selected].title}
                  fill
                  className="object-contain p-10 animate-[fadeIn_0.4s_ease-out]"
                />
                {/* Glow behind image */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(1,253,254,0.12), transparent 70%)",
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
                  style={{ background: "linear-gradient(90deg, #01FDFE, #5B2FB8)" }}
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
              style={{ background: "rgba(4, 16, 32, 0.9)", borderTop: "1px solid rgba(1,253,254,0.06)" }}
            >
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-5">
                {SERVICES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setSelected(i)}
                    className={`whitespace-nowrap text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 font-[family-name:var(--font-montserrat)] ${
                      i === selected
                        ? "text-[#01FDFE] drop-shadow-[0_0_6px_rgba(1,253,254,0.4)]"
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
