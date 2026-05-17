"use client";

const logos = [
  "/logos/cliente-img0017-hover.png",
  "/logos/cliente-img002-hover.png",
  "/logos/cliente-img003-hover.png",
  "/logos/cliente-img004-hover.png",
  "/logos/cliente-img006-hover.png",
  "/logos/cliente-img007-hover.png",
  "/logos/cliente-img008-hover.png",
];

export default function Clientes() {
  /* Duplicate logos for seamless infinite scroll */
  const doubled = [...logos, ...logos];

  return (
    <section
      id="clientes"
      className="relative py-16 sm:py-20 overflow-hidden bg-[var(--color-bg-primary)]"
    >
      {/* Ambient glows - suaves */}
      <div
        className="absolute top-0 left-1/4 w-[550px] h-[400px] opacity-10 pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(ellipse, var(--color-accent-base) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-3">
          <span
            className="text-[10px] font-semibold tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] text-[var(--color-cta-base)]"
          >
            Confían en nosotros
          </span>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
          <span className="text-[var(--color-text-primary)]">NUESTROS </span>
          <span
            className="text-[var(--color-cta-base)]"
          >
            CLIENTES
          </span>
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-[2px] w-12"
          style={{ background: "var(--color-cta-base)" }}
        />
      </div>

      {/* Marquee ribbon */}
      <div className="relative z-[1]">
        {/* Fade edges */}
        <div
          className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, white, transparent)",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, white, transparent)",
          }}
        />

        {/* Scrolling track */}
        <div className="marquee-track">
          <div className="marquee-content">
            {doubled.map((logo, i) => (
              <div
                key={i}
                className="marquee-item group"
              >
                <div
                  className="relative flex items-center justify-center rounded-xl px-8 py-6 transition-all duration-500 group-hover:scale-105 bg-white border border-[var(--color-border)] shadow-sm"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-cta-base)";
                    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(5, 150, 105, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <img
                    src={logo}
                    alt="Cliente"
                    className="h-10 sm:h-12 w-auto object-contain transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
