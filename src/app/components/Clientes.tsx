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
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Ambient glows - mejorados */}
      <div
        className="absolute top-0 left-1/4 w-[550px] h-[400px] opacity-18 pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(ellipse, #DC0000 0%, #8B0000 40%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[400px] opacity-16 pointer-events-none animate-pulse-slower"
        style={{
          background: "radial-gradient(ellipse, #FF4444 0%, #DC0000 30%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-3">
          <span
            className="text-[10px] font-semibold tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
            style={{ color: "#DC0000" }}
          >
            Confían en nosotros
          </span>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
          <span className="text-white">NUESTROS </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #DC0000, #8B0000, #FF4444)",
            }}
          >
            CLIENTES
          </span>
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-[2px] w-12"
          style={{ background: "linear-gradient(90deg, #DC0000, #8B0000)" }}
        />
      </div>

      {/* Marquee ribbon */}
      <div className="relative z-[1]">
        {/* Fade edges */}
        <div
          className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #0A0A0A, transparent)",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #0A0A0A, transparent)",
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
                  className="relative flex items-center justify-center rounded-xl px-8 py-6 transition-all duration-500 group-hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 0 15px rgba(220, 0, 0, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(220, 0, 0, 0.25)";
                    e.currentTarget.style.background = "rgba(220, 0, 0, 0.06)";
                    e.currentTarget.style.boxShadow = "0 0 35px rgba(220, 0, 0, 0.12), inset 0 1px 0 rgba(220, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(220, 0, 0, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)";
                  }}
                >
                  <img
                    src={logo}
                    alt="Cliente"
                    className="h-10 sm:h-12 w-auto object-contain transition-all duration-500 opacity-70 brightness-75 group-hover:opacity-100 group-hover:brightness-100 group-hover:scale-110"
                    style={{ filter: "saturate(0.3) brightness(0.75)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "saturate(1) brightness(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "saturate(0.3) brightness(0.75)";
                    }}
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
