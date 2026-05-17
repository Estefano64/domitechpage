"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#171e24] pt-16 pb-8 border-t border-white/5 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-center md:text-left">
          {/* Columna 1: Logo */}
          <div className="flex items-center justify-center md:justify-start lg:pr-4">
            <Image
              src="/logo-domitech.png"
              alt="Domitech Solutions Logo"
              width={250}
              height={250}
              className="object-contain w-full max-w-[180px] h-auto"
            />
          </div>

          {/* Columna 2: Políticas y Redes */}
          <div>
            <h3 className="text-white font-bold mb-4 font-[family-name:var(--font-montserrat)]">Políticas</h3>
            <ul className="space-y-3 text-[14px] font-[family-name:var(--font-open-sans)] mb-8">
              <li>
                <a href="#" className="hover:text-[var(--color-cta-base)] transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>

            <h3 className="text-white font-bold mb-4 font-[family-name:var(--font-montserrat)]">Redes Sociales</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              {[
                {
                  href: "https://www.instagram.com/domitechsolutions",
                  label: "Instagram",
                  icon: (
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1 1 0 110 2 1 1 0 010-2z" />
                  ),
                },
                {
                  href: "https://www.tiktok.com/@domitechoficial?_r=1&_t=ZS-96OUVaqRNzz",
                  label: "TikTok",
                  icon: (
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.31-1.92 1.54-4.54 2.29-6.99 1.75-2.73-.58-5.06-2.5-6-5.11-.97-2.71-.53-5.88 1.15-8.15 1.59-2.12 4.23-3.41 6.89-3.41.13 0 .27.01.4.01v4.22c-1.42-.11-2.94.3-4.04 1.25-1.19.98-1.78 2.58-1.49 4.1.28 1.41 1.23 2.62 2.51 3.16 1.48.61 3.23.47 4.54-.48 1.14-.82 1.83-2.19 1.88-3.61.12-3.8.04-7.61.05-11.41.01-2.16-.01-4.32.02-6.48z" />
                  ),
                },
                {
                  href: "https://www.facebook.com/profile.php?id=61574933230049",
                  label: "Facebook",
                  icon: (
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  ),
                },
                {
                  href: "https://www.linkedin.com/company/domitechsolutions",
                  label: "LinkedIn",
                  icon: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  ),
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[var(--color-cta-base)] hover:scale-110"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 3: Visítanos y Correos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-4 font-[family-name:var(--font-montserrat)]">Visítanos</h3>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8 text-gray-400">
              <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[14px] font-[family-name:var(--font-open-sans)]">Arequipa, Perú</span>
            </div>

            <h3 className="text-white font-bold mb-4 font-[family-name:var(--font-montserrat)]">Correos de Contacto</h3>
            <ul className="space-y-3 text-[14px] font-[family-name:var(--font-open-sans)] w-full">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:contacto@domitechsolutions.com" className="hover:text-[var(--color-cta-base)] transition-colors">
                  domitechoficial1@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
              </li>
            </ul>
          </div>

          {/* Columna 4: Teléfonos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-4 font-[family-name:var(--font-montserrat)]">Teléfonos de Contacto</h3>
            <ul className="space-y-3 text-[14px] font-[family-name:var(--font-open-sans)] w-full">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/51915961315?text=Hola%20Domitech%20Solutions%2C%20estoy%20interesado%20en%20sus%20servicios%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-cta-base)] transition-colors">
                  +51 915 961 315
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/51978515229?text=Hola%20Domitech%20Solutions%2C%20estoy%20interesado%20en%20sus%20servicios%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-cta-base)] transition-colors">
                  +51 978 515 229
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 text-center text-[13px] font-[family-name:var(--font-open-sans)] text-gray-500">
        © 2025 - Domitech Solutions
      </div>
    </footer>
  );
}
