"use client";

export default function PorQueElegirnos() {
  const beneficios = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titulo: "Resultados Rápidos",
      descripcion: "Entregamos soluciones funcionales en tiempo récord sin comprometer la calidad. Nuestro enfoque ágil nos permite lanzar MVPs en semanas, no meses.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titulo: "Compromiso Total",
      descripcion: "No solo desarrollamos tu proyecto, te acompañamos en cada etapa. Soporte continuo, actualizaciones y mejoras constantes para asegurar tu éxito digital.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Precios Transparentes",
      descripcion: "Sin sorpresas ni costos ocultos. Cotizaciones claras y detalladas desde el inicio. Paquetes flexibles que se adaptan a tu presupuesto y necesidades.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      titulo: "Innovación Constante",
      descripcion: "Utilizamos las últimas tecnologías y mejores prácticas del mercado. Tu proyecto estará construido con herramientas modernas y escalables.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      titulo: "Equipo Local Experto",
      descripcion: "Profesionales arequipeños con experiencia internacional. Entendemos el mercado local y aplicamos estándares globales de calidad.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      titulo: "ROI Comprobado",
      descripcion: "Nuestros clientes ven resultados medibles. Incremento de ventas, más leads, mejor posicionamiento. Tu inversión digital genera retornos reales.",
    },
  ];

  return (
    <section
      id="por-que-elegirnos"
      className="relative py-16 sm:py-20 overflow-hidden bg-[var(--color-bg-alt)]"
    >
      {/* Ambient glows - suaves */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, var(--color-accent-base) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-3">
          <span
            className="text-accent-mype text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
          >
            Nuestra Propuesta de Valor
          </span>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
          <span className="text-[var(--color-text-primary)]">¿POR QUÉ ELEGIR </span>
          <span
            className="text-[var(--color-cta-base)]"
          >
            DOMITECH?
          </span>
        </h2>
        <div
          className="mx-auto mt-4 mb-4 h-[2px] w-12"
          style={{ background: "var(--color-cta-base)" }}
        />
        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base mb-12 font-[family-name:var(--font-open-sans)]">
          En Domitech Solutions no solo creamos sitios web, construimos experiencias digitales que transforman negocios. 
          Somos tu socio estratégico en el crecimiento digital de tu empresa en Arequipa y Perú.
        </p>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 bg-white border border-[var(--color-border)] shadow-sm hover:shadow-md hover:border-[var(--color-cta-base)] overflow-hidden"
            >
              {/* Icono */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 transition-colors duration-300 bg-slate-50 text-[var(--color-accent-base)] group-hover:text-[var(--color-cta-base)]"
              >
                {beneficio.icon}
              </div>

              {/* Título */}
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 font-[family-name:var(--font-montserrat)]">
                {beneficio.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-sm leading-6 text-[var(--color-text-secondary)] font-[family-name:var(--font-open-sans)]">
                {beneficio.descripcion}
              </p>

              {/* Decoración suave en hover */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(5, 150, 105, 0.05) 0%, transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#contactanos"
            className="btn-primary-mype gap-2"
          >
            <span>Solicita una Auditoría Gratuita</span>
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
