"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const preguntas = [
    {
      pregunta: "¿Cuánto tiempo toma desarrollar un sitio web?",
      respuesta:
        "El tiempo varía según la complejidad del proyecto. Un sitio web informativo básico puede estar listo en 1-2 semanas. Un sitio corporativo con funcionalidades personalizadas toma 3-4 semanas. E-commerce o plataformas más complejas pueden requerir 6-8 semanas. En la fase de planificación te daremos un cronograma detallado con fechas específicas.",
    },
    {
      pregunta: "¿Cuál es el costo de un sitio web profesional?",
      respuesta:
        "Nuestros proyectos empiezan desde S/. 1,500 para landing pages hasta S/. 8,000+ para e-commerce completos. El precio depende de funcionalidades, diseño personalizado, integraciones y complejidad técnica. Ofrecemos cotizaciones transparentes sin costos ocultos y opciones de pago flexibles para startups y PyMEs.",
    },
    {
      pregunta: "¿Incluyen el hosting y dominio?",
      respuesta:
        "Nosotros configuramos todo lo necesario: hosting, dominio, certificado SSL y cuentas de correo corporativo. Puedes contratar estos servicios por tu cuenta o nosotros te asesoramos con los mejores proveedores según tu presupuesto. También gestionamos la renovación anual para que no te preocupes por aspectos técnicos.",
    },
    {
      pregunta: "¿Puedo actualizar el contenido yo mismo después?",
      respuesta:
        "¡Absolutamente! Desarrollamos sitios con CMS (WordPress, panel personalizado) que te permiten actualizar textos, imágenes, productos y blogs sin conocimientos técnicos. Incluimos capacitación personalizada de 1-2 horas donde te enseñamos a gestionar tu sitio. También ofrecemos soporte continuo si prefieres que nosotros manejemos las actualizaciones.",
    },
    {
      pregunta: "¿Qué tecnologías utilizan?",
      respuesta:
        "Trabajamos con tecnologías modernas y escalables: React, Next.js, Node.js, WordPress, WooCommerce, PHP y bases de datos SQL/NoSQL. Elegimos el stack tecnológico ideal según los objetivos de tu proyecto. Priorizamos código limpio, rendimiento óptimo, seguridad robusta y experiencia de usuario excepcional.",
    },
    {
      pregunta: "¿Mi sitio será responsive (adaptado a móviles)?",
      respuesta:
        "Todos nuestros diseños son 100% responsive y mobile-first. En Perú, el 80%+ del tráfico web viene de smartphones, por eso optimizamos cada proyecto para verse perfecto en celulares, tablets y computadoras. Probamos en múltiples dispositivos y navegadores antes del lanzamiento.",
    },
    {
      pregunta: "¿Ofrecen soporte después del lanzamiento?",
      respuesta:
        "Sí, ofrecemos múltiples opciones: soporte puntual para consultas específicas, planes de mantenimiento mensual (actualizaciones, backups, monitoreo) y soporte técnico por retainer. El primer mes post-lanzamiento incluye soporte gratuito para resolver cualquier ajuste o duda que tengas.",
    },
    {
      pregunta: "¿Pueden ayudarme con el contenido y las fotos?",
      respuesta:
        "Sí, ofrecemos servicios de copywriting (redacción de textos optimizados para SEO), selección de imágenes de bancos premium, edición de fotos y creación de contenido estratégico. Si ya tienes el contenido, perfecto. Si no, podemos hacerlo todo por ti con un costo adicional según la cantidad de páginas.",
    },
    {
      pregunta: "¿Optimizan el sitio para Google (SEO)?",
      respuesta:
        "Todos nuestros sitios incluyen SEO técnico básico: velocidad optimizada, meta tags, sitemap XML, schema markup y estructura correcta. Para posicionamiento avanzado ofrecemos servicios adicionales: keyword research, link building, contenido SEO mensual y auditorías. El SEO es un trabajo continuo que genera resultados en 3-6 meses.",
    },
    {
      pregunta: "¿Puedo ver el progreso durante el desarrollo?",
      respuesta:
        "Sí, trabajamos con transparencia total. Te daremos acceso a un ambiente de staging (versión de prueba) donde podrás ver los avances en tiempo real. Agendamos reuniones de revisión semanales y usamos herramientas de gestión de proyectos donde puedes hacer comentarios y solicitar ajustes en cualquier momento.",
    },
    {
      pregunta: "¿Qué pasa si no me gusta el resultado final?",
      respuesta:
        "Nuestro proceso incluye múltiples puntos de validación: wireframes, mockups y prototipos que apruebas antes del desarrollo. Esto minimiza cambios de último minuto. Incluimos 2 rondas de ajustes post-entrega sin costo. Si aún no estás satisfecho, trabajamos contigo hasta lograr tu visión. Tu éxito es nuestro éxito.",
    },
    {
      pregunta: "¿Trabajan con empresas fuera de Arequipa?",
      respuesta:
        "¡Por supuesto! Aunque estamos basados en Arequipa, trabajamos con clientes de todo Perú y Latinoamérica. Nos comunicamos por videollamadas, WhatsApp y correo. Nuestro proceso digital nos permite colaborar eficientemente sin importar la ubicación. Ya hemos completado proyectos exitosos para empresas en Lima, Cusco, Puno y otras ciudades.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Ambient glows - más intensos */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] opacity-16 pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, #DC0000 0%, #8B0000 40%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] opacity-18 pointer-events-none animate-pulse-slower"
        style={{
          background: "radial-gradient(circle, #FF4444 0%, #DC0000 30%, transparent 70%)",
          filter: "blur(130px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] opacity-12 pointer-events-none animate-spin-very-slow"
        style={{
          background: "conic-gradient(from 0deg, transparent, #DC0000, transparent)",
          filter: "blur(140px)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-3">
          <span
            className="text-[10px] font-semibold tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
            style={{ color: "#DC0000" }}
          >
            Preguntas Frecuentes
          </span>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl font-[family-name:var(--font-montserrat)]">
          <span className="text-white">RESOLVEMOS TUS </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #DC0000, #8B0000, #FF4444)",
            }}
          >
            DUDAS
          </span>
        </h2>
        <div
          className="mx-auto mt-4 mb-4 h-[2px] w-12"
          style={{ background: "linear-gradient(90deg, #DC0000, #8B0000)" }}
        />
        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-white/45 sm:text-base mb-12 font-[family-name:var(--font-open-sans)]">
          Estas son las preguntas más comunes que recibimos sobre nuestros servicios de desarrollo web. 
          Si tienes otra duda, ¡contáctanos directamente!
        </p>

        {/* Accordion */}
        <div className="space-y-3">
          {preguntas.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(220, 0, 0, 0.08)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isOpen ? "rgba(220, 0, 0, 0.3)" : "rgba(255,255,255,0.05)"}`,
                }}
              >
                {/* Pregunta */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 group"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4 font-[family-name:var(--font-montserrat)]">
                    {item.pregunta}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? "linear-gradient(135deg, #DC0000, #8B0000)" : "rgba(220, 0, 0, 0.2)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Respuesta */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                  }}
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm leading-7 text-white/45 font-[family-name:var(--font-open-sans)]">
                      {item.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center mt-12 text-center">
          <p className="text-white/50 mb-4 text-sm font-[family-name:var(--font-open-sans)]">
            ¿Tienes otra pregunta? Estamos aquí para ayudarte
          </p>
          <a
            href="#contactanos"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:scale-105 font-[family-name:var(--font-montserrat)] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #DC0000, #8B0000)",
            }}
          >
            <span className="relative z-10">Contáctanos Ahora</span>
            <svg
              className="relative z-10 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, #8B0000, #FF4444)",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
