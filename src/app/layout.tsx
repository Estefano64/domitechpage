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
  title: "Domitech Solutions - Desarrollo Web y Marketing Digital en Arequipa Perú",
  description:
    "Agencia de desarrollo web profesional en Arequipa. Creamos páginas web, e-commerce, landing pages y estrategias de marketing digital que generan resultados. Presupuesto gratuito. ⚡ Proyectos desde S/. 1,500",
  keywords: [
    "desarrollo web arequipa",
    "diseño web arequipa",
    "páginas web arequipa",
    "marketing digital arequipa",
    "agencia digital arequipa",
    "e-commerce arequipa",
    "landing page arequipa",
    "desarrollo web perú",
    "wordpress arequipa",
    "posicionamiento seo arequipa",
    "publicidad google ads arequipa",
    "diseño gráfico arequipa",
    "soluciones digitales arequipa"
  ],
  authors: [{ name: "Domitech Solutions" }],
  creator: "Domitech Solutions",
  publisher: "Domitech Solutions",
  metadataBase: new URL("https://domitechsolutions.com"),
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
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://domitechsolutions.com",
    siteName: "Domitech Solutions",
    title: "Domitech Solutions - Desarrollo Web y Marketing Digital en Arequipa",
    description: "Agencia digital especializada en desarrollo web, e-commerce, landing pages y marketing digital en Arequipa, Perú. Resultados medibles para tu negocio.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Domitech Solutions - Agencia Digital en Arequipa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domitech Solutions - Desarrollo Web en Arequipa",
    description: "Creamos experiencias digitales que impulsan tu negocio. Desarrollo web, e-commerce y marketing digital profesional.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
