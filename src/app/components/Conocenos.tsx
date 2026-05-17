"use client";

export default function Conocenos() {
  return (
    <section
      id="conocenos"
      className="relative py-16 sm:py-20 overflow-hidden bg-[var(--color-bg-alt)]"
    >
      {/* Ambient glows - suaves MYPE */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(ellipse, var(--color-accent-base) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-3">
          <span className="text-accent-mype text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]">
            Quiénes somos
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
          <span className="text-[var(--color-text-primary)]">CONÓCE</span>
          <span className="text-[var(--color-cta-base)]">NOS</span>
        </h2>

        {/* Divider */}
        <div
          className="mx-auto mt-4 mb-6 h-[2px] w-12"
          style={{ background: "var(--color-cta-base)" }}
        />

        {/* Description */}
        <div className="mx-auto max-w-3xl text-center space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base font-[family-name:var(--font-open-sans)] px-4">
          <p>
            <span className="text-[var(--color-cta-base)] font-bold">
              En Domitech Solutions no creemos en la burocracia ni en los procesos lentos.
            </span>{" "}
            Somos un dúo de especialistas enfocados 100% en el diseño estratégico y la creación de landing pages que dan resultados reales.
          </p>
          <p>
            Trabajar con nosotros significa no tener intermediarios: la comunicación es directa, ágil y transparente. Nos involucramos personalmente en cada proyecto porque{" "}
            <span className="text-[var(--color-text-primary)] font-semibold">
              tu éxito es nuestra mejor carta de presentación.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
