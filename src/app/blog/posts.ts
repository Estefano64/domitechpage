export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  content: { type: "h2" | "h3" | "p" | "ul" | "quote"; text?: string; items?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "por-que-tu-negocio-necesita-pagina-web-arequipa",
    title:
      "Por qué tu negocio en Arequipa necesita una página web profesional en 2026",
    description:
      "Descubre por qué tener una página web profesional es esencial para tu negocio en Arequipa, cómo impacta tus ventas y qué debe incluir para destacar en Google.",
    keywords: [
      "página web arequipa",
      "desarrollo web arequipa",
      "diseño web profesional",
      "agencia digital arequipa",
      "domitech solutions",
    ],
    category: "Desarrollo Web",
    author: "Domitech Solutions",
    publishedAt: "2026-04-10",
    updatedAt: "2026-05-19",
    readingTime: "6 min",
    image: "/Imagenes-Fondo/Programmer-1.webp",
    imageAlt: "Página web profesional para negocios en Arequipa",
    content: [
      {
        type: "p",
        text: "Si tu negocio en Arequipa todavía no tiene una página web profesional, estás perdiendo clientes todos los días. El 81% de los consumidores busca en Google antes de comprar un producto o servicio. Si no apareces, no existes.",
      },
      { type: "h2", text: "1. Tu página web trabaja para ti las 24 horas" },
      {
        type: "p",
        text: "A diferencia de tu tienda física o tu equipo comercial, tu página web nunca duerme. Atiende consultas, muestra tu catálogo y recibe pedidos mientras tú descansas. Es el vendedor más rentable que puedes tener.",
      },
      { type: "h2", text: "2. Aumenta la confianza de tus clientes" },
      {
        type: "p",
        text: "Una empresa sin web genera dudas. Una empresa con web profesional transmite seriedad, experiencia y compromiso. Esto es especialmente importante en Arequipa, donde la competencia digital crece cada mes.",
      },
      { type: "h2", text: "3. Te posicionas en Google con SEO local" },
      {
        type: "p",
        text: "Una página optimizada con SEO local te ayuda a aparecer cuando alguien busca \"servicio + Arequipa\" en Google. Esto significa clientes nuevos sin pagar por publicidad cada vez.",
      },
      { type: "h2", text: "¿Qué debe tener una página web que venda?" },
      {
        type: "ul",
        items: [
          "Diseño responsive (que se vea bien en celular)",
          "Velocidad de carga rápida (menos de 3 segundos)",
          "SEO optimizado para Arequipa y Perú",
          "Botón de WhatsApp visible",
          "Catálogo o servicios claros",
          "Formulario de contacto y llamados a la acción",
        ],
      },
      {
        type: "quote",
        text: "Una página web no es un gasto, es la inversión con mayor retorno que puede hacer tu negocio en la era digital.",
      },
      { type: "h2", text: "El siguiente paso" },
      {
        type: "p",
        text: "En Domitech Solutions creamos páginas web profesionales para empresas y pymes en Arequipa, optimizadas para Google y enfocadas en generar ventas reales. Si quieres dar el siguiente paso, agenda una asesoría gratuita con nosotros.",
      },
    ],
  },
  {
    slug: "redes-sociales-empresa-arequipa-2026",
    title:
      "Redes Sociales para empresas en Arequipa: la guía completa para 2026",
    description:
      "Aprende cómo manejar redes sociales para tu empresa en Arequipa: qué publicar, cómo crecer, qué redes elegir y por qué necesitas un community manager.",
    keywords: [
      "redes sociales arequipa",
      "community manager arequipa",
      "marketing en redes sociales",
      "manejo de redes sociales empresas",
      "instagram empresa arequipa",
    ],
    category: "Redes Sociales",
    author: "Domitech Solutions",
    publishedAt: "2026-04-22",
    updatedAt: "2026-05-19",
    readingTime: "7 min",
    image: "/Imagenes-Fondo/Programmer-2.webp",
    imageAlt: "Estrategia de redes sociales para empresas en Arequipa",
    content: [
      {
        type: "p",
        text: "Las redes sociales dejaron de ser opcionales. Hoy son el primer contacto que tu cliente potencial tiene con tu marca. Si no estás en redes, no existes para una nueva generación de compradores en Arequipa.",
      },
      { type: "h2", text: "¿Qué red social conviene a tu empresa?" },
      {
        type: "p",
        text: "No todas las redes son iguales. Cada una tiene una audiencia y un lenguaje distinto. Esta es una guía rápida según tu rubro:",
      },
      {
        type: "ul",
        items: [
          "Instagram: ideal para gastronomía, moda, belleza, decoración y servicios visuales.",
          "Facebook: efectivo para empresas que venden a un público de 30+ años y para campañas de tráfico local.",
          "TikTok: explosivo para marcas que apuntan a jóvenes y quieren visibilidad orgánica rápida.",
          "LinkedIn: clave para empresas B2B, consultoras y servicios profesionales.",
          "WhatsApp Business: el cierre. Aquí se concretan ventas.",
        ],
      },
      { type: "h2", text: "¿Qué publicar para crecer en redes?" },
      {
        type: "p",
        text: "El error más común es publicar solo promociones. Tu contenido debe ser 80% valor y 20% venta. Educación, detrás de cámaras, testimonios, casos de éxito y tips son lo que enamora a tu audiencia.",
      },
      { type: "h2", text: "El rol del Community Manager" },
      {
        type: "p",
        text: "Un community manager profesional planifica el contenido, responde mensajes con rapidez, analiza métricas y ajusta la estrategia mes a mes. No es solo publicar fotos: es construir una comunidad que confía y compra.",
      },
      { type: "h2", text: "Publicidad pagada: el acelerador" },
      {
        type: "p",
        text: "El alcance orgánico ya no es lo que era. Para vender en redes necesitas pauta inteligente: campañas en Meta Ads o TikTok Ads bien segmentadas a tu público objetivo en Arequipa.",
      },
      {
        type: "quote",
        text: "Tener redes y no manejarlas es peor que no tenerlas. Una cuenta abandonada destruye tu credibilidad.",
      },
      { type: "h2", text: "¿Necesitas ayuda?" },
      {
        type: "p",
        text: "En Domitech Solutions manejamos las redes sociales de empresas en Arequipa con estrategia, creatividad y resultados medibles. Hablemos.",
      },
    ],
  },
  {
    slug: "seo-arequipa-aparecer-primero-google",
    title:
      "SEO en Arequipa: cómo aparecer primero en Google y atraer clientes locales",
    description:
      "Guía práctica de SEO local para empresas en Arequipa. Aprende cómo posicionar tu negocio en los primeros resultados de Google y atraer clientes sin pagar por anuncios.",
    keywords: [
      "seo arequipa",
      "posicionamiento seo arequipa",
      "seo local",
      "aparecer en google arequipa",
      "google my business",
    ],
    category: "SEO",
    author: "Domitech Solutions",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-19",
    readingTime: "8 min",
    image: "/Imagenes-Fondo/Programmer-3.webp",
    imageAlt: "SEO local para empresas en Arequipa",
    content: [
      {
        type: "p",
        text: "Aparecer en la primera página de Google cuando alguien busca tu servicio en Arequipa puede transformar tu negocio. Esto es el SEO local y, bien hecho, genera clientes nuevos cada semana sin pagar por clic.",
      },
      { type: "h2", text: "¿Qué es el SEO local?" },
      {
        type: "p",
        text: "Es la disciplina que optimiza tu presencia digital para búsquedas geolocalizadas. Por ejemplo: \"dentista en Arequipa\", \"abogado cerca de mí\" o \"pizzería en Cayma\". Si tu empresa aparece arriba en estas búsquedas, las ventas llegan solas.",
      },
      { type: "h2", text: "Pilares del SEO en Arequipa" },
      {
        type: "ul",
        items: [
          "Google Business Profile completo, actualizado y con reseñas reales.",
          "Página web rápida, segura (HTTPS) y adaptada a celulares.",
          "Palabras clave geolocalizadas en títulos, descripciones y contenido.",
          "Backlinks de medios locales y directorios peruanos relevantes.",
          "Blog activo con artículos que respondan a lo que busca tu cliente.",
          "Reseñas positivas y respuestas profesionales a cada comentario.",
        ],
      },
      { type: "h2", text: "Los errores que te alejan de Google" },
      {
        type: "p",
        text: "Páginas lentas, contenido duplicado, falta de meta descripciones, imágenes pesadas sin texto alternativo y ausencia de un sitemap son errores comunes que penalizan tu sitio. Una auditoría SEO los detecta y corrige.",
      },
      { type: "h2", text: "¿Cuánto demora el SEO en dar resultados?" },
      {
        type: "p",
        text: "El SEO no es magia instantánea. Los primeros resultados llegan entre 3 y 6 meses, pero el tráfico orgánico es la inversión digital más rentable a largo plazo. A diferencia de los anuncios, los resultados se mantienen.",
      },
      {
        type: "quote",
        text: "El mejor lugar para esconder un cadáver es la segunda página de Google. Si no estás en la primera, no existes.",
      },
      { type: "h2", text: "Empieza hoy" },
      {
        type: "p",
        text: "En Domitech Solutions hacemos auditorías SEO gratuitas para empresas en Arequipa. Te decimos exactamente qué falta para que aparezcas arriba en Google.",
      },
    ],
  },
  {
    slug: "ecommerce-arequipa-vender-online",
    title:
      "Cómo crear una tienda online en Arequipa y empezar a vender por internet",
    description:
      "Guía paso a paso para crear tu tienda online en Arequipa: plataformas, pasarelas de pago, logística, marketing y errores que debes evitar.",
    keywords: [
      "tienda online arequipa",
      "ecommerce arequipa",
      "vender por internet perú",
      "crear tienda virtual",
      "pasarelas de pago perú",
    ],
    category: "E-commerce",
    author: "Domitech Solutions",
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-19",
    readingTime: "9 min",
    image: "/Imagenes-Fondo/Programmer-4.webp",
    imageAlt: "Tienda online ecommerce en Arequipa",
    content: [
      {
        type: "p",
        text: "El comercio electrónico en Perú crece a doble dígito cada año. Tener una tienda online ya no es exclusivo de grandes empresas: hoy cualquier negocio en Arequipa puede vender al país entero desde internet.",
      },
      { type: "h2", text: "1. Elige la plataforma adecuada" },
      {
        type: "p",
        text: "WooCommerce, Shopify, Tienda Nube o un desarrollo a medida en Next.js. Cada uno tiene ventajas: depende del volumen de productos, el presupuesto y la complejidad que necesites.",
      },
      { type: "h2", text: "2. Integra pasarelas de pago locales" },
      {
        type: "ul",
        items: [
          "Culqi: ideal para comercios peruanos pequeños y medianos.",
          "Mercado Pago: confiable y con buen alcance regional.",
          "Niubiz: la opción tradicional para empresas formales.",
          "Yape y Plin: imprescindibles para clientes en Arequipa.",
        ],
      },
      { type: "h2", text: "3. Logística y delivery" },
      {
        type: "p",
        text: "Una tienda online sin un buen sistema de envíos fracasa. Establece alianzas con Olva, Shalom, Marvisur o servicios locales en Arequipa para envíos rápidos y trazables.",
      },
      { type: "h2", text: "4. Marketing digital para tu ecommerce" },
      {
        type: "p",
        text: "Crear la tienda es solo el inicio. Lo que la hace rentable son las campañas en Meta Ads, Google Ads, SEO de productos y email marketing. Sin tráfico no hay ventas.",
      },
      { type: "h2", text: "Errores que matan tu tienda online" },
      {
        type: "ul",
        items: [
          "Fotos de mala calidad o robadas de internet.",
          "Descripciones cortas y sin palabras clave.",
          "Proceso de compra largo y complicado.",
          "No responder mensajes en menos de 1 hora.",
          "Olvidarse del cliente después de la primera venta.",
        ],
      },
      {
        type: "quote",
        text: "Vender por internet no es subir productos a una web. Es crear una experiencia de compra que enamore y fidelice.",
      },
      { type: "h2", text: "Damos el siguiente paso contigo" },
      {
        type: "p",
        text: "En Domitech Solutions desarrollamos tiendas online a medida en Arequipa, integradas con pasarelas locales y optimizadas para vender desde el primer día. Conversemos sobre tu proyecto.",
      },
    ],
  },
];

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
