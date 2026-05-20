import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Domitech Solutions | Agencia de Marketing Digital y Desarrollo Web en Arequipa",
    template: "%s | Domitech Solutions",
  },
  description:
    "Hacemos crecer tu negocio con páginas web profesionales, e-commerce, redes sociales y publicidad digital en Arequipa, Perú. Si no estás en redes, no existes. Asesoría gratuita.",
  keywords: [
    "agencia marketing digital arequipa",
    "desarrollo web arequipa",
    "diseño de páginas web arequipa",
    "community manager arequipa",
    "manejo de redes sociales arequipa",
    "publicidad en facebook arequipa",
    "publicidad en instagram arequipa",
    "google ads arequipa",
    "tiendas online arequipa",
    "ecommerce arequipa",
    "landing page arequipa",
    "posicionamiento seo arequipa",
    "seo local arequipa",
    "diseño gráfico arequipa",
    "branding arequipa",
    "agencia digital perú",
    "marketing para empresas arequipa",
    "marketing para pymes arequipa",
    "domitech solutions",
  ],
  authors: [{ name: "Domitech Solutions", url: "https://domitechsolutions.com" }],
  creator: "Domitech Solutions",
  publisher: "Domitech Solutions",
  metadataBase: new URL("https://domitechsolutions.com"),
  category: "Marketing Digital",
  applicationName: "Domitech Solutions",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/isologo-domitech.png" },
      { url: "/isologo-domitech.png", sizes: "32x32", type: "image/png" },
      { url: "/isologo-domitech.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/isologo-domitech.png",
    shortcut: "/isologo-domitech.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-PE": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://domitechsolutions.com",
    siteName: "Domitech Solutions",
    title: "Domitech Solutions | Marketing Digital y Desarrollo Web en Arequipa",
    description:
      "Hacemos crecer tu negocio con estrategias digitales que generan clientes reales: páginas web, e-commerce, redes sociales y publicidad online en Arequipa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Domitech Solutions - Agencia Digital en Arequipa, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domitech Solutions | Marketing Digital en Arequipa",
    description:
      "Si no estás en redes, no existes. Damos el siguiente paso contigo: páginas web, e-commerce y marketing digital con resultados reales.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://domitechsolutions.com/#organization",
      name: "Domitech Solutions",
      url: "https://domitechsolutions.com",
      logo: "https://domitechsolutions.com/logo-domitech.png",
      image: "https://domitechsolutions.com/og-image.jpg",
      description:
        "Agencia de marketing digital y desarrollo web en Arequipa, Perú. Páginas web, e-commerce, redes sociales y publicidad online.",
      sameAs: [
        "https://www.facebook.com/domitechsolutions",
        "https://www.instagram.com/domitechsolutions",
        "https://www.linkedin.com/company/domitechsolutions",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://domitechsolutions.com/#localbusiness",
      name: "Domitech Solutions",
      image: "https://domitechsolutions.com/og-image.jpg",
      url: "https://domitechsolutions.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arequipa",
        addressRegion: "Arequipa",
        addressCountry: "PE",
      },
      areaServed: [
        { "@type": "City", name: "Arequipa" },
        { "@type": "Country", name: "Perú" },
      ],
      serviceType: [
        "Desarrollo Web",
        "Marketing Digital",
        "Community Manager",
        "Publicidad en Redes Sociales",
        "Google Ads",
        "SEO",
        "E-commerce",
        "Branding",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://domitechsolutions.com/#website",
      url: "https://domitechsolutions.com",
      name: "Domitech Solutions",
      inLanguage: "es-PE",
      publisher: { "@id": "https://domitechsolutions.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
